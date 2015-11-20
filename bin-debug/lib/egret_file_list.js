var egret_file_list = [
	"core/egret/i18n/cn.js",
	"core/egret/i18n/cn.js",
	"core/egret/utils/extends.js",
	"core/egret/utils/Logger.js",
	"core/egret/utils/HashObject.js",
	"core/egret/utils/Recycler.js",
	"core/egret/utils/getTimer.js",
	"core/egret/utils/callLater.js",
	"core/egret/utils/RenderCommand.js",
	"core/egret/events/Event.js",
	"core/egret/events/HTTPStatusEvent.js",
	"core/egret/events/SoundEvent.js",
	"core/egret/events/FocusEvent.js",
	"core/egret/events/IOErrorEvent.js",
	"core/egret/events/TouchEvent.js",
	"core/egret/events/TimerEvent.js",
	"core/egret/events/TextEvent.js",
	"core/egret/events/ProgressEvent.js",
	"core/egret/events/EventPhase.js",
	"core/egret/events/EventDispatcher.js",
	"core/egret/context/MainContext.js",
	"core/egret/utils/Profiler.js",
	"core/egret/context/Ticker.js",
	"core/egret/layout/HorizontalAlign.js",
	"core/egret/layout/VerticalAlign.js",
	"core/egret/utils/Timer.js",
	"core/egret/utils/getQualifiedClassName.js",
	"core/egret/utils/getDefinitionByName.js",
	"core/egret/utils/setTimeout.js",
	"core/egret/utils/setInterval.js",
	"core/egret/utils/hasDefinition.js",
	"core/egret/utils/toColorString.js",
	"core/egret/geom/Matrix.js",
	"core/egret/geom/Point.js",
	"core/egret/geom/Rectangle.js",
	"core/egret/geom/ColorTransform.js",
	"core/egret/geom/Transform.js",
	"core/egret/utils/SAXParser.js",
	"core/egret/context/StageDelegate.js",
	"core/egret/context/renderer/RenderFilter.js",
	"core/egret/utils/Injector.js",
	"core/egret/filters/Filter.js",
	"core/egret/filters/BlurFilter.js",
	"core/egret/filters/ColorMatrixFilter.js",
	"core/egret/filters/GlowFilter.js",
	"core/egret/filters/DropShadowFilter.js",
	"core/egret/display/BlendMode.js",
	"core/egret/display/DisplayObjectProperties.js",
	"core/egret/display/DisplayObjectPrivateProperties.js",
	"core/egret/display/DisplayObject.js",
	"core/egret/display/DisplayObjectContainer.js",
	"core/egret/display/StageScaleMode.js",
	"core/egret/display/Stage.js",
	"core/egret/display/ScrollViewProperties.js",
	"core/egret/display/ScrollView.js",
	"core/egret/display/BitmapFillMode.js",
	"core/egret/display/Bitmap.js",
	"core/egret/text/BitmapText.js",
	"core/egret/display/GradientType.js",
	"core/egret/display/Graphics.js",
	"core/egret/display/Shape.js",
	"core/egret/display/Sprite.js",
	"core/egret/text/TextFieldUtils.js",
	"core/egret/text/TextFieldProperties.js",
	"core/egret/text/TextField.js",
	"core/egret/text/HtmlTextParser.js",
	"core/egret/text/TextFieldType.js",
	"core/egret/display/SpriteSheet.js",
	"core/egret/text/InputController.js",
	"core/egret/text/BitmapFont.js",
	"core/egret/display/MovieClip.js",
	"core/egret/display/FrameLabel.js",
	"core/egret/display/MovieClipData.js",
	"core/egret/display/MovieClipDataFactory.js",
	"core/egret/context/display/StageText.js",
	"core/egret/net/URLRequestMethod.js",
	"core/egret/net/URLLoaderDataFormat.js",
	"core/egret/net/URLVariables.js",
	"core/egret/net/URLRequestHeader.js",
	"core/egret/net/URLRequest.js",
	"core/egret/net/URLLoader.js",
	"core/egret/display/Texture.js",
	"core/egret/display/RenderTexture.js",
	"core/egret/context/renderer/RendererContext.js",
	"core/egret/context/interactive/InteractionMode.js",
	"core/egret/context/interactive/TouchContext.js",
	"core/egret/context/net/NetContext.js",
	"core/egret/context/devices/DeviceContext.js",
	"core/egret/context/external/ExternalInterface.js",
	"core/egret/context/Browser.js",
	"core/egret/context/localStorage/localStorage.js",
	"core/egret/utils/XML.js",
	"core/egret/utils/ByteArray.js",
	"core/egret/utils/getOption.js",
	"core/egret/tween/Tween.js",
	"core/egret/tween/Ease.js",
	"core/egret/media/Sound.js",
	"core/jslib/NumberUtils.js",
	"core/egret/context/PromiseObject.js",
	"core/egret/context/devices/HTML5DeviceContext.js",
	"core/egret/context/renderer/HTML5CanvasRenderer.js",
	"core/egret/context/renderer/WebGLRenderer.js",
	"core/egret/context/renderer/webgl/WebGLUtils.js",
	"core/egret/context/renderer/webgl/shaders/EgretShader.js",
	"core/egret/context/renderer/webgl/shaders/ColorTransformShader.js",
	"core/egret/context/renderer/webgl/shaders/BlurShader.js",
	"core/egret/context/renderer/webgl/shaders/PrimitiveShader.js",
	"core/egret/context/renderer/webgl/WebGLShaderManager.js",
	"core/egret/context/net/HTML5NetContext.js",
	"core/egret/context/interactive/HTML5TouchContext.js",
	"core/egret/context/display/HTML5StageText.js",
	"core/egret/context/audio/Html5Audio.js",
	"core/egret/context/audio/WebAudio.js",
	"core/egret/context/audio/QQAudio.js",
	"core/egret/context/Html5Capatibility.js",
	"core/extension/version/DefaultLoadingView.js",
	"core/extension/version/Html5VersionController.js",
	"core/extension/version/NativeVersionController.js",
	"core/extension/resource/events/ResourceEvent.js",
	"core/extension/resource/core/ResourceItem.js",
	"core/extension/resource/core/ResourceConfig.js",
	"core/extension/resource/core/ResourceLoader.js",
	"core/extension/resource/analyzer/AnalyzerBase.js",
	"core/extension/resource/analyzer/BinAnalyzer.js",
	"core/extension/resource/analyzer/ImageAnalyzer.js",
	"core/extension/resource/analyzer/JsonAnalyzer.js",
	"core/extension/resource/analyzer/TextAnalyzer.js",
	"core/extension/resource/analyzer/SheetAnalyzer.js",
	"core/extension/resource/analyzer/FontAnalyzer.js",
	"core/extension/resource/analyzer/SoundAnalyzer.js",
	"core/extension/resource/analyzer/XMLAnalyzer.js",
	"core/extension/resource/Resource.js",
	"weixinapi/jweixin-1.0.0.js",
	"weixinapi/jweixin-1.0.0-additional.js"
];