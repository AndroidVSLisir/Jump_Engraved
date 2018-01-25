require=function e(t,o,c){function n(i,s){if(!o[i]){if(!t[i]){var a="function"==typeof require&&require;if(!s&&a)return a(i,!0);if(r)return r(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var u=o[i]={exports:{}};t[i][0].call(u.exports,function(e){var o=t[i][1][e];return n(o||e)},u,u.exports,e,t,o,c)}return o[i].exports}for(var r="function"==typeof require&&require,i=0;i<c.length;i++)n(c[i]);return n}({Audio:[function(e,t,o){"use strict";cc._RF.push(t,"24e7cfQDDVFqabBZJ1IKhQg","Audio"),Object.defineProperty(o,"__esModule",{value:!0});var c=function(){function e(){this.bgmVolume=1,this.sfxVolume=1,this.bgmAudioID=-1,this.playing="";var e=cc.sys.localStorage.getItem("bgmVolume");null===e&&void 0===e||(this.bgmVolume=parseFloat(e)),null===(e=cc.sys.localStorage.getItem("sfxVolume"))&&void 0===e||(this.sfxVolume=parseFloat(e)),cc.game.on(cc.game.EVENT_HIDE,function(){console.log("cc.audioEngine.pauseAll"),cc.audioEngine.pauseAll()}),cc.game.on(cc.game.EVENT_SHOW,function(){console.log("cc.audioEngine.resumeAll"),cc.audioEngine.resumeAll()})}return e.prototype.getUrl=function(e){return cc.url.raw("resources/sounds/"+e)},e.prototype.playBGM=function(e){this.playing=e;var t=this.getUrl(e);console.log(t),this.bgmAudioID>=0&&cc.audioEngine.stop(this.bgmAudioID),this.bgmAudioID=cc.audioEngine.play(t,!0,this.bgmVolume)},e.prototype.playSFX=function(e){var t=this.getUrl(e);if(this.sfxVolume>0)cc.audioEngine.play(t,!1,this.sfxVolume)},e.prototype.setSFXVolume=function(e){this.sfxVolume!==e&&(this.sfxVolume=e)},e.prototype.setBGMVolume=function(e,t){this.bgmAudioID>=0&&(e>0?cc.audioEngine.resume(this.bgmAudioID):cc.audioEngine.pause(this.bgmAudioID)),(this.bgmVolume!==e||t)&&(this.bgmVolume=e,cc.audioEngine.setVolume(this.bgmAudioID,e))},e.prototype.pauseAll=function(){cc.audioEngine.pauseAll()},e.prototype.resumeAll=function(){cc.audioEngine.resumeAll()},e.prototype.save=function(){cc.sys.localStorage.setItem("sfxVolume",this.sfxVolume),cc.sys.localStorage.setItem("bgmVolume",this.bgmVolume)},e}();o.Audio=c,cc._RF.pop()},{}],Block:[function(e,t,o){"use strict";cc._RF.push(t,"007507xQ0hEcbmFDxV+eRZJ","Block"),Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,n=c.ccclass,r=c.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.maxScale=0,t.minScale=0,t.minDistance=0,t.maxDistance=0,t.anchorOffset=0,t.score=1,t.rightAnchorList=[],t.leftAnchorList=[],t.centerAnchor=null,t.p1=null,t.p2=null,t}return __extends(t,e),t.prototype.getCenterPosition=function(){return this.centerAnchor.parent.convertToWorldSpaceAR(this.centerAnchor.position)},t.prototype.getAnchorLocation=function(e,t){for(var o=this.node.convertToNodeSpaceAR(e),c=t>0?this.rightAnchorList:this.leftAnchorList,n=c[0],r=1;r<c.length;r++)cc.pDistance(c[r].position,o)<cc.pDistance(n.position,o)&&(n=c[r]);return cc.pDistance(n.position,o)<=this.anchorOffset?n.parent.convertToWorldSpaceAR(n.position):null},t.prototype.getLeftTan=function(){return this.p1.y/-this.p1.x},t.prototype.getRightTan=function(){return cc.log(this.p2.y/this.p2.x),this.p2.y/this.p2.x},t.prototype.playScoreAnim=function(){cc.find("score",this.node).getComponent(cc.Label).string="+"+this.score,cc.find("score",this.node).getComponent(cc.Animation).play()},__decorate([r(cc.Float)],t.prototype,"maxScale",void 0),__decorate([r(cc.Float)],t.prototype,"minScale",void 0),__decorate([r(cc.Float)],t.prototype,"minDistance",void 0),__decorate([r(cc.Float)],t.prototype,"maxDistance",void 0),__decorate([r(cc.Float)],t.prototype,"anchorOffset",void 0),__decorate([r(cc.Integer)],t.prototype,"score",void 0),__decorate([r([cc.Node])],t.prototype,"rightAnchorList",void 0),__decorate([r([cc.Node])],t.prototype,"leftAnchorList",void 0),__decorate([r(cc.Node)],t.prototype,"centerAnchor",void 0),__decorate([r(cc.Node)],t.prototype,"p1",void 0),__decorate([r(cc.Node)],t.prototype,"p2",void 0),t=__decorate([n],t)}(cc.Component);o.Block=i,cc._RF.pop()},{}],GameScene:[function(e,t,o){"use strict";cc._RF.push(t,"670f2hksQ5Lw7vOXZiYo8c+","GameScene"),Object.defineProperty(o,"__esModule",{value:!0});var c=e("./OverPanel"),n=e("../../G"),r=e("./stage/Stage"),i=e("../../events/PlayerDieEvent"),s=e("../../events/PlayerJumpSuccessEvent"),a=cc._decorator,p=a.ccclass,u=a.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.stage=null,t.scoreLabel=null,t.score=0,t.overPanel=null,t.bgm=null,t.par=null,t.boomPar=null,t}return __extends(t,e),t.prototype.onLoad=function(){cc.sys.isMobile&&(cc.find("Canvas").getComponent(cc.Canvas).fitHeight=!1,cc.find("Canvas").getComponent(cc.Canvas).fitWidth=!0)},t.prototype.start=function(){this.addListeners(),this.startGame()},t.prototype.startGame=function(){this.stage.reset(),this.stage.enableTouch()},t.prototype.onPlayerJumpSuccess=function(e){var t=this,o=e.score;this.addSocre(o),this.stage.updateStage(function(){t.stage.addBlock()})},t.prototype.addSocre=function(e){this.score+=e,this.scoreLabel.string=this.score},t.prototype.onOver=function(){var e=this;this.stage.disableTouch(),setTimeout(function(){e.overPanel.show(e.score,e.onRestart,e)},500),cc.log("游戏结束")},t.prototype.onRestart=function(){this.overPanel.hide(),cc.director.loadScene("game")},t.prototype.addListeners=function(){n.G.on(i.PlayerDieEvent.NAME,this.onOver,this),n.G.on(s.PlayerJumpSuccessEvent.NAME,this.onPlayerJumpSuccess,this)},t.prototype.removeListeners=function(){n.G.off(i.PlayerDieEvent.NAME,this.onOver,this),n.G.off(s.PlayerJumpSuccessEvent.NAME,this.onPlayerJumpSuccess,this)},__decorate([u(r.Stage)],t.prototype,"stage",void 0),__decorate([u(cc.Label)],t.prototype,"scoreLabel",void 0),__decorate([u(c.OverPanel)],t.prototype,"overPanel",void 0),__decorate([u(cc.AudioClip)],t.prototype,"bgm",void 0),__decorate([u(cc.ParticleSystem)],t.prototype,"par",void 0),t=__decorate([p],t)}(cc.Component);o.GameScene=l,cc._RF.pop()},{"../../G":"G","../../events/PlayerDieEvent":"PlayerDieEvent","../../events/PlayerJumpSuccessEvent":"PlayerJumpSuccessEvent","./OverPanel":"OverPanel","./stage/Stage":"Stage"}],G:[function(e,t,o){"use strict";cc._RF.push(t,"4eb76347PJBwZKH/rdxU5j/","G"),Object.defineProperty(o,"__esModule",{value:!0});var c=e("./components/game/GameScene"),n=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.startGame=function(e){cc.director.loadScene("game",function(e,t){if(!e){var o=t.getChildByName("Canvas").getComponent(c.GameScene);cc.audioEngine.play(o.bgm,!0,1)}})},t.Instance=new t,t}(cc.EventTarget);o.Global=n,o.G=n.Instance,cc._RF.pop()},{"./components/game/GameScene":"GameScene"}],MenuScene:[function(e,t,o){"use strict";cc._RF.push(t,"d53944AFM9HprOUPOgbFtLe","MenuScene"),Object.defineProperty(o,"__esModule",{value:!0});var c=e("../../G"),n=cc._decorator,r=n.ccclass,i=n.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.startButton=null,t.selectPage=null,t}return __extends(t,e),t.prototype.onLoad=function(){cc.sys.isMobile&&(cc.find("Canvas").getComponent(cc.Canvas).fitHeight=!1,cc.find("Canvas").getComponent(cc.Canvas).fitWidth=!0)},t.prototype.start=function(){this.addListeners()},t.prototype.onBtnStart=function(){cc.find("Canvas/mask").active=!0;var e=this.selectPage.getCurrentPageIndex();c.G.startGame(e)},t.prototype.addListeners=function(){this.startButton.on(cc.Node.EventType.TOUCH_END,this.onBtnStart,this)},__decorate([i(cc.Node)],t.prototype,"startButton",void 0),__decorate([i(cc.PageView)],t.prototype,"selectPage",void 0),t=__decorate([r],t)}(cc.Component);o.MenuScene=s,cc._RF.pop()},{"../../G":"G"}],OverPanel:[function(e,t,o){"use strict";cc._RF.push(t,"b702fWA3yZGha6sOqGGOWpd","OverPanel"),Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,n=c.ccclass,r=c.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.messageLabel=null,t.restartButton=null,t}return __extends(t,e),t.prototype.show=function(e,t,o){this.node.active=!0,this.messageLabel.string=e+"",this.restartButton.once(cc.Node.EventType.TOUCH_END,t,o)},t.prototype.hide=function(){this.node.active=!1},__decorate([r(cc.Label)],t.prototype,"messageLabel",void 0),__decorate([r(cc.Node)],t.prototype,"restartButton",void 0),t=__decorate([n],t)}(cc.Component);o.OverPanel=i,cc._RF.pop()},{}],PlayerDieEvent:[function(e,t,o){"use strict";cc._RF.push(t,"0598aP9w/pK4qHQkgTWsX9/","PlayerDieEvent"),Object.defineProperty(o,"__esModule",{value:!0});var c=function(e){function t(){return e.call(this,t.NAME,!0)||this}return __extends(t,e),t.NAME="PlayerDie",t}(cc.Event.EventCustom);o.PlayerDieEvent=c,cc._RF.pop()},{}],PlayerJumpSuccessEvent:[function(e,t,o){"use strict";cc._RF.push(t,"c94d8XNGTlNI5QI/kwQbDIQ","PlayerJumpSuccessEvent"),Object.defineProperty(o,"__esModule",{value:!0});var c=function(e){function t(o){var c=e.call(this,t.NAME,!0)||this;return c.score=o,c}return __extends(t,e),t.NAME="PlayerJumpSuccess",t}(cc.Event.EventCustom);o.PlayerJumpSuccessEvent=c,cc._RF.pop()},{}],Player:[function(e,t,o){"use strict";cc._RF.push(t,"9bd49uTlnBLrLGadJkec3pf","Player"),Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,n=c.ccclass,r=c.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.jumpDistance=0,t.power=0,t.initSpeed=0,t.speed=0,t.isReadyJump=!1,t.direction=1,t.readyJumpAudio=null,t.readyJumpAudioId=-1,t.jumpAudio=null,t.jumpAudioId=-1,t}return __extends(t,e),t.prototype.onLoad=function(){},t.prototype.readyJump=function(){this.readyJumpAudioId=cc.audioEngine.play(this.readyJumpAudio,!1,1),cc.find("rotateAnchor/Particle1",this.node).getComponent(cc.ParticleSystem).resetSystem(),cc.find("rotateAnchor/sprite",this.node).runAction(cc.scaleTo(2,1,.5)),this.speed=this.initSpeed,this.isReadyJump=!0},t.prototype.spriteAction=function(){var e=cc.rotateBy(.25,90*-this.direction),t=cc.delayTime(.15),o=cc.moveBy(.1,cc.p(0,-100));cc.find("rotateAnchor",this.node).runAction(cc.sequence(o,t,e))},t.prototype.stopParticle1=function(){cc.find("rotateAnchor/Particle1",this.node).getComponent(cc.ParticleSystem).stopSystem()},t.prototype.jumpTo=function(e,t,o){var c=this;cc.audioEngine.stop(this.readyJumpAudioId),this.jumpAudioId=cc.audioEngine.play(this.jumpAudio,!1,1),cc.find("rotateAnchor/sprite",this.node).stopAllActions();var n=this.node.parent.convertToNodeSpaceAR(e);console.log(n),this.node.color=cc.Color.WHITE,this.isReadyJump=!1;var r=cc.scaleTo(1,1,1),i=cc.jumpTo(.5,n,200,1),s=cc.rotateBy(.5,360*this.direction),a=cc.callFunc(function(){1!=o&&(c.direction=Math.random()>.5?1:-1),c.speed=0,c.jumpDistance=0,t()},o);cc.find("rotateAnchor/sprite",this.node).runAction(r),cc.find("rotateAnchor",this.node).runAction(s),this.node.runAction(cc.sequence(i,a))},t.prototype.update=function(e){this.isReadyJump&&(this.speed+=e*this.power,this.jumpDistance+=this.speed*e)},__decorate([r(cc.Float)],t.prototype,"jumpDistance",void 0),__decorate([r(cc.Integer)],t.prototype,"power",void 0),__decorate([r(cc.Float)],t.prototype,"initSpeed",void 0),__decorate([r(cc.AudioClip)],t.prototype,"readyJumpAudio",void 0),__decorate([r(cc.AudioClip)],t.prototype,"jumpAudio",void 0),t=__decorate([n],t)}(cc.Component);o.Player=i,cc._RF.pop()},{}],Stage:[function(e,t,o){"use strict";cc._RF.push(t,"40b804EvnJPrIJHFGe/MMZY","Stage"),Object.defineProperty(o,"__esModule",{value:!0});var c=e("./Player"),n=e("./Block"),r=e("../../../G"),i=e("../../../events/PlayerDieEvent"),s=e("../../../events/PlayerJumpSuccessEvent"),a=cc._decorator,p=a.ccclass,u=a.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.player=null,t.leftOrigin=cc.v2(),t.rightOrigin=cc.v2(),t.blockLayer=null,t.arrayRatio=.556047197640118,t.blockList=[],t.currBlock=null,t.nextBlock=null,t}return __extends(t,e),t.prototype.reset=function(){this.blockLayer.removeAllChildren();var e=cc.instantiate(this.blockList[0]);this.blockLayer.addChild(e);var t=e.getComponent(n.Block);e.position=this.blockLayer.parent.convertToNodeSpaceAR(this.leftOrigin),this.currBlock=t,this.nextBlock=t,this.player.node.position=this.node.parent.convertToNodeSpaceAR(this.currBlock.getCenterPosition()),this.addBlock()},t.prototype.enableTouch=function(){cc.find("Canvas").on(cc.Node.EventType.TOUCH_START,this.onReadyJump,this),cc.find("Canvas").on(cc.Node.EventType.TOUCH_END,this.onJump,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},t.prototype.disableTouch=function(){cc.find("Canvas").targetOff(this),cc.systemEvent.targetOff(this)},t.prototype.onKeyDown=function(e){e.keyCode===cc.KEY.space&&this.onReadyJump()},t.prototype.onKeyUp=function(e){e.keyCode===cc.KEY.space&&this.onJump()},t.prototype.onReadyJump=function(){this.player.readyJump()},t.prototype.onJump=function(){var e=this;this.player.stopParticle1(),this.disableTouch();var t=this.player.jumpDistance,o=this.player.direction,c=cc.p(this.player.node.x+t*o,this.player.node.y+t*this.arrayRatio),n=this.player.node.parent.convertToWorldSpaceAR(c),a=this.nextBlock.getAnchorLocation(n,o),p=this.currBlock.getAnchorLocation(n,o);null!==a?this.player.jumpTo(a,function(){e.currBlock=e.nextBlock,e.currBlock.playScoreAnim(),r.G.dispatchEvent(new s.PlayerJumpSuccessEvent(e.currBlock.score)),e.enableTouch()}):null!==p?this.player.jumpTo(n,function(){e.enableTouch()},1):this.player.jumpTo(n,function(){r.G.dispatchEvent(new i.PlayerDieEvent),e.player.spriteAction()})},t.prototype.addBlock=function(){var e=Math.floor(Math.random()*this.blockList.length),t=cc.instantiate(this.blockList[e]);this.blockLayer.addChild(t);var o=t.getComponent(n.Block),c=o.minScale+Math.random()*(o.maxScale-o.minScale),r=o.minDistance+Math.random()*(o.maxDistance-o.minDistance);return t.scale=c,this.player.direction>0?(t.x=this.currBlock.node.x+r,t.y=this.currBlock.node.y+r*this.arrayRatio):(t.x=this.currBlock.node.x-r,t.y=this.currBlock.node.y+r*this.arrayRatio),this.currBlock=this.nextBlock,this.nextBlock=o,o},t.prototype.removeBlock=function(){},t.prototype.checkOver=function(){return cc.pDistance(this.player.node.position,this.currBlock.node.position)>this.currBlock.node.width/2*this.currBlock.node.scale},t.prototype.updateStage=function(e,t){var o,c=this.player.node.parent.convertToWorldSpaceAR(this.player.node.position);o=this.player.direction>0?cc.pSub(c,this.leftOrigin):cc.pSub(c,this.rightOrigin);var n=cc.callFunc(e,t),r=cc.sequence(cc.moveTo(.5,cc.pSub(this.node.position,o)),n);this.node.runAction(r)},__decorate([u(c.Player)],t.prototype,"player",void 0),__decorate([u(cc.Vec2)],t.prototype,"leftOrigin",void 0),__decorate([u(cc.Vec2)],t.prototype,"rightOrigin",void 0),__decorate([u(cc.Node)],t.prototype,"blockLayer",void 0),__decorate([u(cc.Float)],t.prototype,"arrayRatio",void 0),__decorate([u([cc.Prefab])],t.prototype,"blockList",void 0),t=__decorate([p],t)}(cc.Component);o.Stage=l,cc._RF.pop()},{"../../../G":"G","../../../events/PlayerDieEvent":"PlayerDieEvent","../../../events/PlayerJumpSuccessEvent":"PlayerJumpSuccessEvent","./Block":"Block","./Player":"Player"}]},{},["G","GameScene","OverPanel","Block","Player","Stage","MenuScene","PlayerDieEvent","PlayerJumpSuccessEvent","Audio"]);