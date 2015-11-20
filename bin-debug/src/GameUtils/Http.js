/**
 * Created by pior on 15/9/29.
 * 封装egret Http类
 */
var GameUtil;
(function (GameUtil) {
    var Http = (function () {
        function Http(reqMethod, dataFormat) {
            if (reqMethod === void 0) { reqMethod = egret.URLRequestMethod.POST; }
            if (dataFormat === void 0) { dataFormat = egret.URLLoaderDataFormat.TEXT; }
            this.init(reqMethod, dataFormat);
        }
        var __egretProto__ = Http.prototype;
        __egretProto__.init = function (reqMethod, dataFormat) {
            if (reqMethod === void 0) { reqMethod = egret.URLRequestMethod.POST; }
            if (dataFormat === void 0) { dataFormat = egret.URLLoaderDataFormat.TEXT; }
            this.urlLoader = new egret.URLLoader();
            this.urlLoader.dataFormat = dataFormat;
            this.urlLoader.addEventListener(egret.Event.COMPLETE, this.loaded, this);
            this.urlRequest = new egret.URLRequest();
            this.urlRequest.method = reqMethod;
        };
        __egretProto__.loaded = function (event) {
            this.urlLoader.removeEventListener(egret.Event.COMPLETE, this.loaded, this);
            var data = JSON.parse(this.urlLoader.data);
            if (this.onLoader != null) {
                this.onLoader.apply(this.thisObj, [data]);
            }
        };
        __egretProto__.send = function (param, file, loaded, thisObj) {
            if (loaded === void 0) { loaded = null; }
            if (thisObj === void 0) { thisObj = null; }
            this.urlRequest.url = "Http://" + GameUtil.GameConfig.IP + file;
            this.onLoader = loaded;
            this.thisObj = thisObj;
            var urlVariables = new egret.URLVariables(GameUtil.objectToString(param));
            this.urlRequest.data = urlVariables;
            this.urlLoader.addEventListener(egret.Event.COMPLETE, this.loaded, this);
            this.urlLoader.load(this.urlRequest);
        };
        Http.getinstance = function (reqMethod, dataFormat) {
            if (reqMethod === void 0) { reqMethod = egret.URLRequestMethod.POST; }
            if (dataFormat === void 0) { dataFormat = egret.URLLoaderDataFormat.TEXT; }
            if (null == Http._instance) {
                Http._instance = new Http(reqMethod, dataFormat);
            }
            return Http._instance;
        };
        return Http;
    })();
    GameUtil.Http = Http;
    Http.prototype.__class__ = "GameUtil.Http";
})(GameUtil || (GameUtil = {}));
