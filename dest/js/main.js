cc.game.onStart = function(){

  //cc.view.adjustViewPort(true);
  //
  //cc.view.setDesignResolutionSize(800, 600, cc.ResolutionPolicy.SHOW_ALL);
  //
  //cc.view.resizeWithBrowserSize(true);

  cc.LoaderScene.preload(g_resources, function () {
    //cc.director.setProjection(cc.Director.PROJECTION_2D);
    cc.director.runScene(new GamePlayScene());
  }, this);
};
cc.game.run();

var GC = GC || {};

GC.winSize = cc.size(800, 600);

GC.h = GC.winSize.height;

GC.w = GC.winSize.width;

GC.w_2 = GC.w / 2;

GC.h_2 = GC.h / 2;

GC.gridX = 12;

GC.gridY = GC.h - 172;

GC.gridW = 19;

GC.gridH = 11;

GC.type_count = 50;

var map1 = {
  name: 'map1',
  level: '简单',
  //Img : "images/maps/map1.gif",　
  //BigImg : "images/maps/map1B.gif",　
  imgNum: 76,
  author: 'zxq',
  path: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
    [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
    [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
    [0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, -1, -1, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0]
  ]
};

var map10 = {
  name: "map10",
  level: "困难",
//  Img : "images/maps/map10.gif",　
//BigImg : "images/maps/map10B.gif",　
  imgNum: 122,
  author: "zxq",
  path: [
    [0, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0],
    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0],
    [0, 0, -1, -1, 0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
    [0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0],
    [0, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 0, 0],
    [0, 0, -0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, -1, -1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0],
    [0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 0, 0],
  ]
};


var maps = [map1, map10];

var res = {
  background: 'image/gameBg.jpg',
  tiles_png: 'image/tiles.png',
  tiles_plist: 'image/tiles.plist'
  //rabbit_small_plist: 'image/rabbit-small.plist',
  //rabbit_small_png: 'image/rabbit-small.png',
  //rabbit_big_plist: 'image/rabbit-big.plist',
  //rabbit_big_png: 'image/rabbit-big.png',
  //rabbit_win_plist: 'image/rabbit-win.plist',
  //rabbit_win_png: 'image/rabbit-win.png',
  //rabbit_lose_plist: 'image/rabbit-lose.plist',
  //rabbit_lose_png: 'image/rabbit-lose.png',
  //icons_plist: 'image/icons.plist',
  //icons_png: 'image/icons.png',
  //explosion_plist: 'image/explosion.plist',
  //explosion_png: 'image/explosion.png',
  //background: 'image/background.jpg',
  //
  //bg_music: 'music/gamebg.mp3',
  //cake_music: 'music/cake.mp3',
  //boom_music: 'music/boom.mp3',
  //win_music: 'music/win.mp3',
  //lose_music: 'music/lose.mp3',
  //lessboom_music: 'music/lessboom.mp3',
  //clock_music: 'music/clock.mp3',
  //life_music: 'music/life.mp3',
  //basket_music: 'music/basket.mp3',
  //jump_music: 'music/jump.mp3'
};

var g_resources = [];
for (var i in res) {
  g_resources.push(res[i]);
}

var Grid = cc.Class.extend({

  ctor: function (width, height) {

    this.width = width;
    this.height = height;
    this.cells = this.empty();
  }

});

Grid.prototype.empty = function () {
  var cells = [];
  for (var x = 0; x < this.width; x++) {
    var row = cells[x] = [];
    for (var y = 0; y < this.height; y++) {
      row.push(null);
    }
  }
  return cells;
};

Grid.prototype.insertTile = function(tile){
  this.cells[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function(tile){
  this.cells[tile.x][tile.y] = null;
};

Grid.prototype.cellOccupied = function (cell) {
  return !!this.cellContent(cell);
};

Grid.prototype.cellContent = function (cell) {
  if (this.withinBounds(cell)) {
    return this.cells[cell.x][cell.y];
  } else {
    return null;
  }
};

Grid.prototype.withinBounds = function (position) {
  return position.x >= 0 && position.x < this.width &&
    position.y >= 0 && position.y < this.height;
};


var Tile = cc.Class.extend({

  ctor: function (position, type) {

    this.x = position.x;
    this.y = position.y;
    this.type = type || '001';

  }

});

var GPBackgroundLayer = cc.LayerColor.extend({

  ctor: function (color) {

    this._super(color);

    this.initBackground();

  },

  initBackground: function () {
    var gameBg = new cc.Sprite(res.background);
    gameBg.attr({
      x: GC.w_2,
      y: GC.h_2
    });
    this.addChild(gameBg);

  }
});

var GPTouchLayer = cc.Layer.extend({
  ctor: function () {
    this._super();

    this.initBatchNode();

    this.initGame();

    this.bindEvent();
  },
  initBatchNode: function () {

    var texTiles = cc.textureCache.addImage(res.tiles_png);
    this.texTilesBatch = new cc.SpriteBatchNode(texTiles);
    this.addChild(this.texTilesBatch);
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
      type = '0' + type;
      if (type.length === 2) {
        type = '0' + type;
      }
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
        this.grid.removeTile(tile);
        this.grid.removeTile(selectedTile);

        this.texTilesBatch.removeChild(tileSp);
        this.texTilesBatch.removeChild(this.selectedTileSp);

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
          if (trace[x + "|" + y] === null) {
            trace[x + "|" + y] = s;
          }
        }
        return 1;
      }
    }
    return 0;
  },
  bindEvent: function () {

  }
});

var GamePlayScene  = cc.Scene.extend({
  onEnter:function () {
    this._super();

    var layer = new GamePlayLayer();
    this.addChild(layer);

  }
});

var GamePlayLayer = cc.Layer.extend({

  backgroundLayer : null,
  touchLayer : null,
  ctor : function(){
    this._super();

    this.addCache();

    this.addBackgroundLayer();

    this.addTouchLayer();
  },

  addCache : function(){

    cc.spriteFrameCache.addSpriteFrames(res.tiles_plist);

  },


  addBackgroundLayer : function(){

    this.backgroundLayer = new GPBackgroundLayer();
    this.addChild(this.backgroundLayer);
  },

  addTouchLayer : function(){
    this.touchLayer = new GPTouchLayer();
    this.addChild(this.touchLayer);
  }
});

var TileSprite = cc.Sprite.extend({

  ctor: function (tile) {
    this._super("#img" + tile.type + ".bmp");
    this.active = true;

    this.tile = tile;
    this.location = {};
  }
});

TileSprite.prototype.destroy = function () {
  this.visible = false;
  this.active = false;
};
