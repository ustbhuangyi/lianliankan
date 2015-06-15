var g_GPTouchLayer;

var GPTouchLayer = cc.Layer.extend({
  ctor: function () {
    this._super();

    g_GPTouchLayer = this;

    this.initBatchNode();

    this.initGame();

    this.bindEvent();
  },
  initBatchNode: function () {

    var texTiles = cc.textureCache.addImage(res.tiles_png);
    this.texTilesBatch = new cc.SpriteBatchNode(texTiles);
    this.addChild(this.texTilesBatch);

    var texPipe = cc.textureCache.addImage(res.pipe_png);
    this.texPipeBatch = new cc.SpriteBatchNode(texPipe);
    this.addChild(this.texPipeBatch);

    var texBoom = cc.textureCache.addImage(res.boom_png);
    this.texBoomBatch = new cc.SpriteBatchNode(texBoom);
    this.addChild(this.texBoomBatch);

  },
  initGame: function () {
    this.grid = new Grid(GC.gridW, GC.gridH);

    this.initTiles();

    this.initSelectRect();
  },
  initSelectRect: function () {

    this.selectNode = new cc.DrawNode();
    this.selectNode.drawRect(cc.p(0, 0), cc.p(31, 35), null, 1, cc.color(0, 0, 0, 255));
    this.selectNode.visible = false;
    this.addChild(this.selectNode, 10);

    this.selectedTileSp = null;
  },
  initTiles: function () {
    var map = maps[1];
    var path = map.path;
    var types = this.generateTileTypesByPath(path);
    if (types) {
      for (var i = 0; i < path.length; i++) {
        var row = path[i];
        for (var j = 0; j < row.length; j++) {
          if (row[j] === -1) {
            this.addTile({x: j, y: i}, types.pop());
          }
        }
      }
    }
  },
  generateTileTypesByPath: function (path) {
    if (!path)
      return false;
    var nodes = 0;
    for (var i = 0; i < path.length; i++) {
      var row = path[i];
      for (var j = 0; j < row.length; j++) {
        nodes += -row[j];
      }
    }
    if (nodes % 2) {
      cc.log('map error');
      return false;
    }
    var types = [];
    for (var i = 0; i < nodes / 2; i++) {
      var type = Math.random() * GC.type_count | 0 + 1;
      type = formatStr(type, 3);
      types.push(type);
      types.push(type);
    }
    return types.sort(function () {
      return Math.random() > 0.5 ? -1 : 1;
    });
  },
  addTile: function (position, type) {
    var tile = new Tile(position, type);
    this.grid.insertTile(tile);
    this.createTileSprite(tile);
  },
  createTileSprite: function (tile) {
    var tileSp = new TileSprite(tile);
    tileSp.x = GC.gridX + tile.x * tileSp.width + tileSp.width / 2;
    tileSp.y = GC.gridY - tile.y * tileSp.height - tileSp.height / 2;
    this.texTilesBatch.addChild(tileSp);

    var me = this;
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: function (touch, event) {
        var target = event.getCurrentTarget();
        var locationInNode = target.convertToNodeSpace(touch.getLocation());
        var s = target.getContentSize();
        var rect = cc.rect(0, 0, s.width, s.height);

        if (cc.rectContainsPoint(rect, locationInNode)) {
          return true;
        }
        return false;
      },
      onTouchMoved: function (touch, event) {

      },
      onTouchEnded: function (touch, event) {
        var target = event.getCurrentTarget();

        me.selectTile(target);

        //var draw = new cc.DrawNode();
        //draw.drawRect(cc.p(target.x - target.width / 2, target.y - target.height / 2), cc.p(target.x + target.width / 2, target.y + target.height / 2), null, 1, cc.color(0, 0, 0, 255));
        //me.addChild(draw, 10);
      }
    }, tileSp);
  },
  selectTile: function (tileSp) {
    var tile = tileSp.tile;
    var selectedTile = this.selectedTileSp && this.selectedTileSp.tile;
    if (selectedTile) {
      var trace = {};
      if (this.canTwoTileDeleted(tile, selectedTile, trace)) {
        this.playDeleteAnimation(cc.p(tile.x, tile.y), cc.p(selectedTile.x, selectedTile.y), trace);

        this.removeTile(tileSp);
        this.removeTile(this.selectedTileSp);

        this.selectedTileSp = null;
        this.selectNode.visible = false;
        return;
      }
    }
    this.selectedTileSp = tileSp;

    this.selectNode.visible = true;
    this.selectNode.x = tileSp.x - tileSp.width / 2;
    this.selectNode.y = tileSp.y - tileSp.height / 2;

  },
  /**
   * 判断2个格子是否能消除的算法
   * @param tile
   * @param selectedTile
   * @param trace
   * @returns {boolean}
   */
  canTwoTileDeleted: function (tile, selectedTile, trace) {
    if (!tile || !selectedTile) {
      return false;
    }
    if (tile === selectedTile || tile.type !== selectedTile.type) {
      return false;
    }
    var x1 = tile.x;
    var y1 = tile.y;
    var x2 = selectedTile.x;
    var y2 = selectedTile.y;
    var S = {};
    var T = {};
    S[x1 + "|" + y1] = 0;
    var connerNum = 0;
    while (!S[x2 + "|" + y2] && connerNum < 3) {
      for (var s in S) {
        var pointArr = s.split("|");
        var i = parseInt(pointArr[0]);
        var j = parseInt(pointArr[1]);
        //向左找空点
        for (var m = i - 1; m >= 0; m--) {
          if (this.searchPoint(T, trace, connerNum, m, j, s)) {
            break;
          }
        }
        //向右找空点
        for (var m = i + 1; m < GC.gridW; m++) {
          if (this.searchPoint(T, trace, connerNum, m, j, s)) {
            break;
          }
        }
        //向上找空点
        for (var n = j - 1; n >= 0; n--) {
          if (this.searchPoint(T, trace, connerNum, i, n, s)) {
            break;
          }
        }
        //向下找空点
        for (var n = j + 1; n < GC.gridH; n++) {
          if (this.searchPoint(T, trace, connerNum, i, n, s)) {
            break;
          }
        }
      }
      for (var x in T) {
        if (S[x] === undefined) {
          //存储上一轮寻找的空点，作为下一次检索的点
          S[x] = T[x];
        }
      }
      T = {};
      connerNum++;
    }
    return S[x2 + "|" + y2] >= 0;
  },
  searchPoint: function (T, trace, connerNum, x, y, s) {
    if (connerNum < 2) {
      if (!this.grid.cellOccupied(cc.p(x, y))) {
        if (!T[x + "|" + y]) {
          T[x + "|" + y] = connerNum;
          if (trace[x + "|" + y] === undefined) {
            trace[x + "|" + y] = s;
          }
        }
      } else {
        return 1;
      }
    } else {
      if (this.grid.cellOccupied(cc.p(x, y))) {
        if (!T[x + "|" + y]) {
          T[x + "|" + y] = connerNum;
          if (trace[x + "|" + y] == undefined) {
            trace[x + "|" + y] = s;
          }
        }
        return 1;
      }
    }
    return 0;
  },
  removeTile: function (tileSp) {

    this.texTilesBatch.removeChild(tileSp);

    this.grid.removeTile(tileSp.tile);
  },
  playDeleteAnimation: function (source, dest, trace) {
    var target = dest.x + '|' + dest.y;
    var start = source.x + '|' + source.y;
    var keyPoints = [];
    keyPoints.push(dest);
    while (target !== start) {
      target = trace[target];
      var targetX = parseInt(target.split("|")[0]);
      var targetY = parseInt(target.split("|")[1]);
      keyPoints.push(cc.p(targetX, targetY));
    }
    this.playPipeAnimation(keyPoints);
  },
  playPipeAnimation: function (keyPoints) {
    var len = keyPoints.length;
    for (var i = 0; i < len - 1; i++) {
      var current = keyPoints[i];
      var next = keyPoints[i + 1];
      if (current.x === next.x) {
        var direction = 'col';
        var yMin = Math.min(current.y, next.y);
        var yMax = Math.max(current.y, next.y);
        for (var j = yMin; j <= yMax; j++) {
          addPipe.call(this, direction, cc.p(current.x, j));
        }
      } else {
        var direction = 'row';
        var xMin = Math.min(current.x, next.x);
        var xMax = Math.max(current.x, next.x);
        for (var j = xMin; j <= xMax; j++) {
          addPipe.call(this, direction, cc.p(j, current.y));
        }
      }
    }

    function addPipe(direction, position) {
      var pipeSp = new PipeSprite(direction);
      pipeSp.x = GC.gridX + position.x * 31 + 31 / 2;
      pipeSp.y = GC.gridY - position.y * 35 - 35 / 2;
     
      pipeSp.play();
      this.texPipeBatch.addChild(pipeSp);
    }
  },
  bindEvent: function () {

  }
});