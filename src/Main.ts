//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView:LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event:egret.Event) {
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/resource.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event:RES.ResourceEvent):void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event:RES.ResourceEvent):void {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event:RES.ResourceEvent):void {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private playerID: number;
    private thisIp: string;
    private mLight: egret.Bitmap;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene():void {

        var shareBg:egret.Bitmap = GameUtil.createBitmapByName("sharebg_jpg");
        shareBg.x = this.stage.stageWidth / 2;
        shareBg.y = this.stage.stageHeight / 2;
        this.addChild(shareBg);

        this.mLight = GameUtil.createBitmapByName("guangxiao_png");
        this.mLight.x = this.stage.stageWidth/2;
        this.mLight.y = this.stage.stageHeight/2;
        this.addChild(this.mLight);

        this.showLight();

        var ginsenimg: egret.Bitmap = GameUtil.createBitmapByName("shen_png");
        ginsenimg.x = this.stage.stageWidth/2;
        ginsenimg.y = this.stage.stageHeight/2;
        this.addChild(ginsenimg);

        var params= window.location.search;//params:?id,date
        var arr = params.substring(1).split("&");
        console.log("params====",params);

        this.playerID = Number(arr[0]);

        //送你种子
        var giveSeed: GameUtil.Menu = new GameUtil.Menu(this,"morebtn_png","morebtn_png",this.giveseed);
        giveSeed.setScaleMode();
        giveSeed.addButtonText("送你种子",0,-2);
        giveSeed.getBtnText().bold = true;
        giveSeed.getBtnText().size = 27;
        giveSeed.x = 125;
        giveSeed.y = 710;
        this.addChild(giveSeed);

        //我要挖参
        var playGame: GameUtil.Menu = new GameUtil.Menu(this,"morebtn_png","morebtn_png",this.playgame);
        playGame.setScaleMode();
        playGame.addButtonText("我要挖参",0,-2);
        playGame.getBtnText().bold = true;
        playGame.getBtnText().size = 27;
        playGame.x = 355;
        playGame.y = 710;
        this.addChild(playGame);

        this.getSignPackage();

    }

    private showLight():void
    {
        var rota: number = this.mLight.rotation;

        rota += 10;
        var tw = egret.Tween.get(this.mLight);
        tw.to({rotation:rota},300).call(this.showLight,this);
    }

    private giveseed():void
    {
        //本地网络IP
        this.thisIp = window['getIP'];

        var parma: Object = {
            giveuserid:this.thisIp,
            receiveuserid:this.playerID
        }

        GameUtil.Http.getinstance().send(parma,"/api/forward.ashx?action=give",this.receiveGiveseed,this);
    }
    private playgame():void
    {
        //window.open("http://res.kangmei.17188.com");
        window.location.href = "http://res.kangmei.17188.com";
    }

    private receiveGiveseed(data:any):void
    {
        console.log("data=====",data['code']);
        //alert("code===="+data['code']);

        if(data['code'] == 1){

            var seedtype: string = "优品";
            if(data['seedtype'] == 2){
                seedtype = "臻品";
            }

            var tip:GameUtil.TipsPanel = new GameUtil.TipsPanel("alertBg_png","赠送1颗"+seedtype+"种子成功!");
            tip.setTextSize(25);
            this.addChild(tip);
        }
        else if(data['code'] == 20001){
            var tip:GameUtil.TipsPanel = new GameUtil.TipsPanel("alertBg_png","一周只能赠送一次",true);
            this.addChild(tip);
        }
    }

    /**
     * 获取签名分享
     */
    private getSignPackage() {

        var urllocal:string = encodeURIComponent(window.location.href);

        console.log("url=====", urllocal);
        var parma:Object = {
            url: urllocal
        }
        GameUtil.Http.getinstance().send(parma,"/api/weixinshare.ashx",this.share,this);
    }

    private share(data:any):void
    {
        console.log("data======",data);

        //........................................................
        //基本配置
        //配置参数
        wx.config({
            debug: false,
            appId: data['appid'],
            timestamp: data.timestamp,
            nonceStr: data.noncestr,
            signature: data.sign,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ]
        });

        //下面可以加更多接口,可自行扩展
        this.getWeiXinShareTimeline();//分享朋友圈
        this.getWeiXinShareAppMessage();
    }

    /**
     * 获取微信分享到朋友圈
     */
    private getWeiXinShareTimeline() {
        var bodyMenuShareTimeline = new BodyMenuShareTimeline();
        bodyMenuShareTimeline.title = '种鲜参，赢“康美”豪礼！鲜参、电影票、Iphone 6s等你拿！';
        bodyMenuShareTimeline.link = 'http://res.kangmei.17188.com/sharepage/?'+this.playerID;
        bodyMenuShareTimeline.imgUrl = 'http://res.kangmei.17188.com/icon.png';
        bodyMenuShareTimeline.trigger = ()=> {
            // alert('用户点击分享到朋友圈');
        };
        bodyMenuShareTimeline.success = ()=> {
            //alert('已分享');
            //window[ 'weChat' ]();
        };
        bodyMenuShareTimeline.cancel = ()=> {
            //alert('已取消');
            // window[ 'weChat' ]();
        };
        bodyMenuShareTimeline.fail = (res)=> {
            //alert(JSON.stringify(res));
        };
        wx.onMenuShareTimeline(bodyMenuShareTimeline);
        //alert('已注册获取“分享到朋友圈”状态事件');
    }
    /**
     * 获取微信分享到朋友
     */
    private getWeiXinShareAppMessage(){
        var bodyMenuShareAppMessage = new BodyMenuShareAppMessage();
        bodyMenuShareAppMessage.title = '挖参吧，兄弟';
        bodyMenuShareAppMessage.desc = '种鲜参，赢“康美”豪礼！鲜参、电影票、Iphone 6s等你拿！';
        bodyMenuShareAppMessage.link = 'http://res.kangmei.17188.com/sharepage/?'+this.playerID;
        bodyMenuShareAppMessage.imgUrl = 'http://res.kangmei.17188.com/icon.png';
        bodyMenuShareAppMessage.trigger = ()=> {
            // alert('用户点击发送给朋友');
        };
        bodyMenuShareAppMessage.success = ()=> {
            //alert('已分享');

        };
        bodyMenuShareAppMessage.cancel = ()=> {
            //alert('已取消');

        };
        bodyMenuShareAppMessage.fail = (res)=> {
            // alert(JSON.stringify(res));
        };
        wx.onMenuShareAppMessage(bodyMenuShareAppMessage);
        // alert('已注册获取“发送给朋友”状态事件');
    }
}