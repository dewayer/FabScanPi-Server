(function(){var e,t;t=["common.services.envProvider","common.filters.currentStateFilter","common.filters.toLabelFilter","common.filters.toResolutionValue","fabscan.directives.FSWebglDirective","fabscan.directives.FSMJPEGStream","fabscan.directives.FSModalDialog","fabscan.services.FSMessageHandlerService","fabscan.services.FSEnumService","fabscan.services.FSWebsocketConnectionFactory","fabscan.services.FSScanService","fabscan.services.FSi18nService","common.filters.scanDataAvailableFilter","common.services.Configuration","common.services.toastrWrapperSvc","fabscan.controller.FSPreviewController","fabscan.controller.FSAppController","fabscan.controller.FSSettingsController","fabscan.controller.FSScanController","fabscan.controller.FSLoadingController","fabscan.controller.FSShareController","ngTouch","720kb.tooltips","ngProgress","vr.directives.slider","slickCarousel","ng.jsoneditor"],e=angular.module("fabscan",t),e.config(["common.services.envProvider",function(e){return null!=e.appConfig?e.appConfig():void 0}]),e.run(["common.services.env",function(e){return null!=e.appRun?e.appRun():void 0}]),e.config(["$httpProvider",function(e){return e.defaults.useXDomain=!0}]),angular.element(document).ready(function(){return angular.bootstrap(document,["fabscan"])})}).call(this),function(){var e;e="fabscan.directives.FSMJPEGStream",angular.module(e,[]).directive("mjpeg",["$log",function(){return{restrict:"E",replace:!0,template:"<span></span>",scope:{url:"=",mode:"="},link:function(e,t){e.createFrame=function(n){var r,i,o;return i=document.createElement("iframe"),i.setAttribute("frameborder","0"),i.setAttribute("scrolling","no"),i.setAttribute("style","height:100%;  position:absolute;"),t.childElementCount>0?(t.childNodes[0].destroy(),t.append(i)):t.append(i),"texture"===e.mode&&(i.setAttribute("width","100%"),o='<html><head><base target="_parent" /><style type="text/css">html, body { margin: 0; padding: 0; height: 320px; }</style><script> function resizeParent() { var ifs = window.top.document.getElementsByTagName("iframe"); for (var i = 0, len = ifs.length; i < len; i++) { var f = ifs[i]; var fDoc = f.contentDocument || f.contentWindow.document; if (fDoc === document) { f.height = 0; f.height = document.body.scrollHeight; } } }</script></head><body style="" onresize="resizeParent()"><img src="'+n+'" style="z-index:1000; opacity: 0.4; height: 100%; left:20%;  position:absolute;" onload="resizeParent()" /></body></html>'),"preview"===e.mode&&(i.setAttribute("height","240px"),o='<html><head><base target="_parent" /><style type="text/css">html, body { margin: 0; padding: 0; height: 240px; }</style><script> function resizeParent() { var ifs = window.top.document.getElementsByTagName("iframe"); for (var i = 0, len = ifs.length; i < len; i++) { var f = ifs[i]; var fDoc = f.contentDocument || f.contentWindow.document; if (fDoc === document) { f.width = 0; f.width = document.body.scrollWidth; } } }</script></head><body onresize="resizeParent()"><img src="'+n+'" style="z-index:1000; opacity: 1.0; height:240px; position:absolute;" onload="resizeParent()" /><div style="position:absolute;  text-align:center; background-color:black; width:180px;  height:240px; float:left; z-index:-1000;"><img style="margin-top:100px; margin-left:70px width:50px; height:50px;" src="icons/spinner.gif" /></div></body></html>'),r=i.document,i.contentDocument?r=i.contentDocument:i.contentWindow&&(r=i.contentWindow.document),r.open(),r.writeln(o),r.close()},e.$watch("url",function(t){return e.createFrame(t)},!0)}}}])}.call(this),function(){var e;e="fabscan.directives.FSModalDialog",angular.module(e,[]).directive("modalDialog",["$log",function(){},{restrict:"E",scope:{show:"="},replace:!0,transclude:!0,link:function(e,t,n){e.dialogStyle={},n.width&&(e.dialogStyle.width=n.width),n.height&&(e.dialogStyle.height=n.height),e.hideModal=function(){e.show=!1}},template:"<div class='ng-modal' ng-show='show'>    <div class='ng-modal-overlay' ng-click='hideModal()'></div>    <div class='ng-modal-dialog' ng-style='dialogStyle'>      <div class='ng-modal-close' ng-click='hideModal()'>X</div>      <div class='ng-modal-dialog-content' ng-transclude></div>    </div>  </div>"}])}.call(this),function(){var e;e="fabscan.directives.slick",angular.module(e,[]).directive("slickSlider",["$log","$timeout",function(e,t){return{restrict:"A",link:function(e,n,r){t(function(){$(n).slick(e.$eval(r.slickSlider))})}}}])}.call(this),function(){var e;e="fabscan.directives.FSWebglDirective",angular.module(e,[]).directive("fsWebgl",["$log","$rootScope","$http","fabscan.services.FSEnumService","common.services.Configuration",function(e,t,n,r,i){var o;return{restrict:"A",link:o=function(o,a){var s,l,c,u,h,d,p,f,m,E,g,v,y,T,R,x,b,H,w,S,M,_;s=void 0,w=void 0,f=0,b=void 0,R=void 0,c=void 0,d=void 0,T=void 0,E=void 0,l=void 0,p=0,y=!1,H=!1,H=!1,S=void 0,x=0,o.height=window.innerHeight,o.width=window.innerWidth,o.fillcontainer=!0,o.materialType="lambert",o.objectGeometry=null,o.setPointHandlerCallback(o.addPoints),o.setClearViewHandlerCallback(o.clearView),o.loadPLYHandlerCallback(o.loadPLY),o.loadSTLHandlerCallback(o.loadSTL),o.getRendererCallback(b),o.setRenderTypeCallback(o.renderObjectAsType),g=0,v=0,h=o.fillcontainer?a[0].clientWidth:o.width,u=o.height,M=h/2,_=u/2,m={},t.$on("clearcanvas",function(){return e.info("view cleared"),o.clearView()}),o.$on(r.events.ON_STATE_CHANGED,function(e,t){return t.state===r.states.SCANNING?o.clearView():void 0}),o.$on(r.events.ON_INFO_MESSAGE,function(e,t){return"SCANNING_TEXTURE"===t.message&&w.remove(S),"SCANNING_OBJECT"===t.message&&(w.getObjectByName("turntable")||w.add(S)),"SCAN_CANCELED"===t.message&&(o.clearView(),w.getObjectByName("turntable")||w.add(S)),"SCAN_COMPLETE"===t.message?(o.createPreviewImage(t.scan_id),o.scanComplete=!0,o.currentPointcloudAngle=0):void 0}),o.init=function(){var e,t,n,r;f=0,s=new THREE.PerspectiveCamera(38,window.innerWidth/window.innerHeight,1,800),s.position.set(27,5,0),l=new THREE.Vector3(10,5,0),w=new THREE.Scene,w.fog=new THREE.Fog(7496795,20,60),r=new THREE.Mesh(new THREE.PlaneBufferGeometry(140,100),new THREE.MeshPhongMaterial({ambient:10066329,color:10066329,specular:1052688})),r.rotation.x=-Math.PI/2,r.position.y=-.5,w.add(r),r.receiveShadow=!0,w.add(new THREE.AmbientLight(7829367)),o.addShadowedLight(1,1,1,16777215,.35),o.addShadowedLight(.5,1,-1,16755200,1),e=new THREE.AxisHelper(10),t=new THREE.CylinderGeometry(7,7,.2,32),n=new THREE.MeshBasicMaterial({color:14606046}),S=new THREE.Mesh(t,n),S.name="turntable",w.add(S),b=new THREE.WebGLRenderer({preserveDrawingBuffer:!0}),b.setClearColor(w.fog.color),b.setSize(window.innerWidth,window.innerHeight),b.gammaInput=!0,b.gammaOutput=!0,b.shadowMapEnabled=!0,b.shadowMapCullFace=THREE.CullFaceBack,a[0].appendChild(b.domElement),window.addEventListener("resize",o.onWindowResize,!1),window.addEventListener("DOMMouseScroll",o.onMouseWheel,!1),window.addEventListener("mousewheel",o.onMouseWheel,!1),document.addEventListener("keydown",o.onKeyDown,!1),a[0].addEventListener("mousemove",o.onMouseMove,!1),a[0].addEventListener("mousedown",o.onMouseDown,!1),a[0].addEventListener("mouseup",o.onMouseUp,!1)},o.createPreviewImage=function(t){var r;return r=b.domElement.toDataURL("image/png"),n.post(i.installation.httpurl+"api/v1/scans/"+t+"/previews",{image:r,id:t}).success(function(t){e.info(t)})},o.onWindowResize=function(){o.resizeCanvas()},o.onMouseDown=function(){return y=!0},o.onMouseUp=function(){return y=!1},o.onStart=function(){return y=!0},o.onStop=function(){return y=!1},o.onDrag=function(t){return e.info(t)},o.onMouseMove=function(e){var t;return y&&(t=e.movementX>0?.1:-.1,T&&o.scanLoaded&&(T.rotation.z+=t),T&&o.scanComplete&&(T.rotation.y+=t),E&&o.scanLoaded)?E.rotation.z+=t:void 0},o.onKeyDown=function(e){var t;return(189===e.keyCode||109===e.keyCode)&&(pointSize-=.003),(187===e.keyCode||107===e.keyCode)&&(pointSize+=.003),49===e.keyCode&&changeColor("x"),50===e.keyCode&&changeColor("y"),51===e.keyCode&&changeColor("z"),52===e.keyCode&&changeColor("rgb"),t=new THREE.ParticleBasicMaterial({size:pointSize,vertexColors:!0}),T=new THREE.ParticleSystem(geometry,t),w=new THREE.Scene,w.add(T),o.render()},o.resizeCanvas=function(){h=o.fillcontainer?a[0].clientWidth:o.width,u=o.height,M=h/2,_=u/2,s.aspect=h/u,s.updateProjectionMatrix(),b.setSize(h,u)},o.resizeObject=function(){},o.changeMaterial=function(){},o.Float32Concat=function(e,t){var n,r;return n=e.length,r=new Float32Array(n+t.length),r.set(e),r.set(t,n),r},o.addShadowedLight=function(e,t,n,r,i){var o,a;return a=new THREE.DirectionalLight(r,i),a.position.set(e,t,n),w.add(a),a.castShadow=!0,o=1,a.shadowCameraLeft=-o,a.shadowCameraRight=o,a.shadowCameraTop=o,a.shadowCameraBottom=-o,a.shadowCameraNear=1,a.shadowCameraFar=4,a.shadowMapWidth=1024,a.shadowMapHeight=1024,a.shadowBias=-.005},o.renderMesh=function(e){var t;return o.clearView(),o.objectGeometry.computeFaceNormals(),t="stl"===e?new THREE.MeshPhongMaterial({color:255,specular:1118481,shininess:100}):new THREE.MeshBasicMaterial({shininess:200,wireframe:!1,vertexColors:THREE.FaceColors}),E=new THREE.Mesh(o.objectGeometry,t),E.position.set(0,-.25,0),E.rotation.set(-Math.PI/2,0,0),E.scale.set(.1,.1,.1),"stl"===e&&(E.castShadow=!0,E.receiveShadow=!0),w.add(E)},o.renderPLY=function(){var e;return T=new THREE.Object3D,e=new THREE.PointsMaterial({size:.15,vertexColors:THREE.FaceColors}),T=new THREE.Points(o.objectGeometry,e),T.position.set(0,-.25,0),T.rotation.set(-Math.PI/2,0,0),T.scale.set(.1,.1,.1),w.add(T)},o.renderObjectAsType=function(e){return"MESH"===e&&(o.clearView(),o.renderMesh("ply")),"POINTCLOUD"===e?(o.clearView(),o.renderPLY()):void 0},o.loadSTL=function(t){var n;return o.clearView(),o.scanComplete=!1,n=new THREE.STLLoader,n.load(t,function(e){return o.objectGeometry=e,t.indexOf("mesh")>-1?o.renderMesh("stl"):void 0}),n.addEventListener("progress",function(e){return o.progressHandler(e)}),e.info("Not implemented yet")},o.loadPLY=function(e){var t;return o.clearView(),o.scanComplete=!1,t=new THREE.PLYLoader,t.useColor=!0,t.colorsNeedUpdate=!0,t.addEventListener("progress",function(e){return o.progressHandler(e)}),t.load(e,function(t){o.objectGeometry=t,e.indexOf("mesh")>-1?o.renderMesh():o.renderPLY()})},o.addPoints=function(t,n,r){var i,a,s,l,u,h,d,m;if(o.scanComplete=!1,t.length>0){for(T?(p=T.rotation.y,w.remove(T)):p=90*(Math.PI/180),s=new THREE.BufferGeometry,s.dynamic=!0,d=new Float32Array(3*t.length),h=new Float32Array(3*t.length),l=0;t.length>l;)d[3*l]=parseFloat(t[l].x),d[3*l+1]=parseFloat(t[l].y-.5),d[3*l+2]=parseFloat(t[l].z),i=new THREE.Color("rgb("+t[l].r+","+t[l].g+","+t[l].b+")"),h[3*l]=i.r,h[3*l+1]=i.g,h[3*l+2]=i.b,l++;void 0===R?(R=d,c=h):(R=o.Float32Concat(R,d),c=o.Float32Concat(c,h)),s.addAttribute("position",new THREE.BufferAttribute(R,3)),s.addAttribute("color",new THREE.BufferAttribute(c,3)),u=new THREE.PointsMaterial({size:.2,vertexColors:THREE.VertexColors}),T=new THREE.Points(s,u),a=360/r,e.info(a),o.rad=a*(Math.PI/180),w.add(T)}for(m=[];t.length>l;)_points[f]=t,l++,m.push(f++);return m},o.clearView=function(){return T?(R=void 0,c=void 0,w.remove(T),w.remove(E)):void 0},o.animate=function(){requestAnimationFrame(o.animate),o.render()},o.render=function(){s.lookAt(l),b.render(w,s)},o.$watch("newPoints",function(e,t){e!==t&&o.addPoints(e)}),o.$watch("fillcontainer + width + height",function(){o.resizeCanvas()}),o.$watch("scale",function(){o.resizeObject()}),o.$watch("materialType",function(){}),o.init(),o.animate()}}}])}.call(this),function(){var e;e="common.filters.currentStateFilter",angular.module(e,[]).filter("currentState",["$log","fabscan.services.FSScanService",function(e,t){return function(e){return e===t.getScannerState()?!0:!1}}])}.call(this),function(){var e;e="common.filters.scanDataAvailableFilter",angular.module(e,[]).filter("scanDataAvailable",["$log","fabscan.services.FSScanService",function(e,t){return function(){return null!==t.getScanId()?!0:!1}}])}.call(this),function(){var e;e="common.filters.toLabelFilter",angular.module(e,[]).filter("toLabel",["$log",function(){return function(e){var t,n,r;return n=e.split("-"),t=n[0],r=n[1],t=t.slice(0,4)+"-"+t.slice(4),t=t.slice(0,7)+"-"+t.slice(7),r=r.slice(0,2)+":"+r.slice(2),r=r.slice(0,5)+":"+r.slice(5),t+" "+r}}])}.call(this),function(){var e;e="common.filters.toLowerFilter",angular.module(e,[]).filter("toLower",["$log",function(){return function(e){return e.toLowerCase()}}])}.call(this),function(){var e;e="common.filters.toResolutionValue",angular.module(e,[]).filter("toResolutionValue",["$log",function(){return function(e){return-1===e?"best about 120 seconds":-4===e?"good about 60 seconds":-8===e?"medium 30 seconds":-12===e?"low about 20 seconds":-16===e?"lowest about 10 seconds":void 0}}])}.call(this),function(){var e;e="common.services.Configuration",angular.module(e,[]).factory(e,["$log","$location",function(e,t){var n,r,i,o;return o="localhost"===t.host(),n=null,r=!0,o?(i="fabscanpi.local",n={installation:{host:i,websocketurl:"ws://"+i+":8010/",httpurl:"http://"+i+":8080/"}}):(i=t.host(),n={installation:{host:i,websocketurl:"ws://"+t.host()+":8010/",httpurl:"http://"+t.host()+":8080/"}}),n}])}.call(this),function(){var e;e="fabscan.services.FSEnumService",angular.module(e,[]).factory(e,function(){var e;return e={},e.events={ON_NEW_PROGRESS:"ON_NEW_PROGRESS",ON_STATE_CHANGED:"ON_STATE_CHANGED",COMMAND:"COMMAND",ON_CLIENT_INIT:"ON_CLIENT_INIT",ON_INFO_MESSAGE:"ON_INFO_MESSAGE",SCAN_LOADED:"SCAN_LOADED"},e.states={IDLE:"IDLE",SCANNING:"SCANNING",SETTINGS:"SETTINGS"},e.commands={SCAN:"SCAN",START:"START",STOP:"STOP",UPDATE_SETTINGS:"UPDATE_SETTINGS",MESHING:"MESHING",UPGRADE_SERVER:"UPGRADE_SERVER",RESTART_SERVER:"RESTART_SERVER"},e})}.call(this),function(){var e;e="fabscan.services.FSMessageHandlerService",angular.module(e,[]).factory(e,["$log","$timeout","$rootScope","$http","fabscan.services.FSWebsocketConnectionFactory","common.services.Configuration",function(e,t,n,r,i,o){var a,s;return s=null,a={},a.connectToScanner=function(e){return e.isConnected=!1,s=i.createWebsocketConnection(o.installation.websocketurl),s.isConnected=function(){return e.isConnected},s.onopen=function(){return e.isConnected=!0,n.$broadcast("CONNECTION_STATE_CHANGED",e.isConnected),console.log("Websocket connected to "+s.url)},s.onerror=function(e){return console.error(e)},s.onclose=function(){return e.isConnected=!1,s=null,n.$broadcast("CONNECTION_STATE_CHANGED",e.isConnected),t(function(){return a.connectToScanner(e)},2e3),console.log("Connection closed")},s.onmessage=function(e){var t;return t=jQuery.parseJSON(e.data),n.$broadcast(t.type,t.data)}},a.sendData=function(e){return s.send(JSON.stringify(e))},a}])}.call(this),function(){var e;e="fabscan.services.FSScanService",angular.module(e,[]).factory(e,["$log","$rootScope","fabscan.services.FSEnumService","fabscan.services.FSMessageHandlerService",function(e,t,n,r){var i;return i={},i.state=n.states.IDLE,i.scanId=null,i.getScanId=function(){return i.scanId},i.setScanId=function(e){return i.scanId=e},i.startScan=function(){var e;return i.state=n.states.SCANNING,i.setScanId(null),e={},e={event:n.events.COMMAND,data:{command:n.commands.START}},r.sendData(e),t.$broadcast(n.commands.START)},i.updateSettings=function(e){var t;return t={},t={event:n.events.COMMAND,data:{command:n.commands.UPDATE_SETTINGS,settings:e}},r.sendData(t)},i.startSettings=function(){var e;return e={},e={event:n.events.COMMAND,data:{command:n.commands.SCAN}},r.sendData(e)},i.upgradeServer=function(){var t;return e.debug("Upgrade Server called."),t={},t={event:n.events.COMMAND,data:{command:n.commands.UPGRADE_SERVER}},r.sendData(t)},i.restartServer=function(){var e;return e={},e={event:n.events.COMMAND,data:{command:n.commands.RESTART_SERVER}},r.sendData(e)},i.stopScan=function(){var e;return i.setScanId(null),e={},e={event:n.events.COMMAND,data:{command:n.commands.STOP}},r.sendData(e),t.$broadcast(n.commands.STOP)},i.runMeshing=function(e,t,i){var o;return o={},o={event:n.events.COMMAND,data:{command:n.commands.MESHING,scan_id:e,format:i,filter:t}},r.sendData(o)},i.exitScan=function(){var e;return e={},e={event:n.events.COMMAND,data:{command:n.commands.STOP}},r.sendData(e)},i.getScannerState=function(){return i.state},i.setScannerState=function(e){return i.state=e},i.getSettings=function(){var e;return e={},e={event:n.events.COMMAND}},i}])}.call(this),function(){var e;e="fabscan.services.FSWebsocketConnectionFactory",angular.module(e,[]).factory(e,function(){var e;return e={},e.createWebsocketConnection=function(e){return new WebSocket(e)},e})}.call(this),function(){var e;e="fabscan.services.FSi18nService",angular.module(e,[]).factory(e,["$log","$rootScope","fabscan.services.FSEnumService",function(){var e;return e={},e.translateKey=function(e,t){return window.i18n[e][t]()},e}])}.call(this),function(){var e,t;t="common.services.dataSvc",e=function(){function e(e,t,n){this.$log=e,this.$http=t,this.env=n}return e.prototype._get=function(e){return this.$http.get(""+this.env.serverUrl+"/"+e)},e.prototype.getPeople=function(){return this._get("people")},e.prototype.getPerson=function(e){return this._get("person/"+e)},e}(),angular.module(t,[]).factory(t,["$log","$http","common.services.env",function(t,n,r){return new e(t,n,r)}])}.call(this),function(){var e,t,n,r,i;i="common.services.env",r=""+i+"Provider",e=function(){function e(){}return e.prototype.env="DEV",e.prototype.apiUrl="http://planungstool-testing.ambihome.de/api",e}(),t=function(){function t(){}return t.prototype.$get=function(){return new e},t}(),n=angular.module(r,[]),n.provider(i,new t)}.call(this),function(){var e;e="common.services.toastrWrapperSvc",angular.module(e,[]).factory(e,function(){return window.toastr.options.progressBar=!0,window.toastr.options.newestOnTop=!0,window.toastr})}.call(this),function(){var e;e="fabscan.controller.FSAppController",angular.module(e,[]).controller(e,["$log","$scope","$timeout","$http","$rootScope","ngProgress","common.services.toastrWrapperSvc","fabscan.services.FSMessageHandlerService","fabscan.services.FSEnumService","fabscan.services.FSScanService","fabscan.services.FSi18nService",function(e,t,n,r,i,o,a,s,l,c,u){return t.streamUrl=" ",t.settings={},t.scanComplete=!1,t.scanLoaded=!1,t.remainingTime=[],t.server_version=void 0,t.firmware_version=void 0,t.scanLoading=!1,t.appIsInitialized=!1,t.isConnected=!1,t.initError=!1,n(function(){t.appInitError()},8e3),t.appInitError=function(){return t.initError=!0},t.scanIsComplete=function(){return t.scanComplete},t.setScanIsComplete=function(e){return t.scanComplete=e},t.setScanIsLoading=function(e){return t.scanLoading=e},t.scanIsLoading=function(){return t.scanLoading},t.setScanLoaded=function(e){return t.scanLoaded=e},t.scanIsLoaded=function(){return t.scanLoaded},t.scanDataIsAvailable=function(){return t.scanLoaded&&e.info("scan loaded"),null!==c.getScanId()?!0:!1},t.$on("CONNECTION_STATE_CHANGED",function(n,r){return e.info("Connected"),r?void 0:(t.isConnected=!1,t.appIsInitialized=!1)}),t.$on(l.events.ON_CLIENT_INIT,function(n,r){var i;return e.info("State: "+r.state),document.title="FabScanPi "+r.server_version,t.server_version=r.server_version,t.firmware_version=r.firmware_version,r.upgrade.available&&a.info('<a href="http://mariolukas.github.io/FabScanPi-Server/software/#updating-the-software">Click here for upgrade instructions.</a>',"Version "+r.upgrade.version+" now available"),i=r.settings,i.resolution*=-1,angular.copy(i,t.settings),c.setScannerState(r.state),e.debug("WebSocket connection ready..."),t.appIsInitialized=!0,t.$apply()}),t.$on(l.events.ON_STATE_CHANGED,function(n,r){return e.info("NEW STATE: "+r.state),c.setScannerState(r.state),e.info(r),r.state===l.states.IDLE&&o.complete(),t.$apply()}),t.$on(l.events.ON_INFO_MESSAGE,function(e,n){var r;switch(r=u.translateKey("main",n.message),n.level){case"info":a.info(r,{timeOut:5e3});break;case"warn":a.warning(r);break;case"error":a.error(r,{timeOut:0});break;case"success":a.success(r);break;default:a.info(r)}return t.$apply()}),s.connectToScanner(t)}])}.call(this),function(){var e;e="fabscan.controller.FSLoadingController",angular.module(e,[]).controller(e,["$log","$scope","$rootScope","fabscan.services.FSScanService","fabscan.services.FSEnumService",function(e,t,n,r){return t.loadPointCloud=function(e,n){return t.setScanIsLoading(!0),t.setScanIsComplete(!1),t.toggleLoadDialog(),r.setScanId(n),t.setScanLoaded(!1),toastr.info("Loading scanned Pointcloud "+n),t.loadPLY(e)},t.loadMesh=function(){}}])}.call(this),function(){var e;e="fabscan.controller.FSPreviewController",angular.module(e,[]).controller(e,["$log","$scope","$rootScope","$http","ngProgress","common.services.Configuration","fabscan.services.FSEnumService","fabscan.services.FSScanService",function(e,t,n,r,i,o,a,s){var l;return t.canvasWidth=400,t.canvasHeight=500,t.dofillcontainer=!0,t.scale=1,t.materialType="lambert",t.addPoints=null,t.resolution=null,t.progress=null,t.newPoints=null,t.loadPLY=null,t.loadSTL=null,t.renderer=null,t.showTextureScan=!1,t.startTime=null,t.sampledRemainingTime=0,t.$on(a.events.ON_STATE_CHANGED,function(e,n){return n.state===a.states.IDLE?t.showTextureScan=!1:void 0}),n.$on("clearView",function(){return t.clearView()}),t.$on(a.events.ON_INFO_MESSAGE,function(e,n){return"SCANNING_TEXTURE"===n.message&&(t.streamUrl=o.installation.httpurl+"/stream/texture.mjpeg",t.showTextureScan=!0),"SCANNING_OBJECT"===n.message&&(t.showTextureScan=!1,t.streamUrl=""),"SCAN_COMPLETE"===n.message&&(s.setScanId(n.scan_id),t.setScanIsComplete(!0),t.showTextureScan=!1,t.remainingTime=[],t.startTime=null,t.sampledRemainingTime=0),"SCAN_CANCELED"===n.message||"SCAN_STOPED"===n.message?(t.remainingTime=[],t.showTextureScan=!1,t.startTime=null,t.progress=0,t.sampledRemainingTime=0):void 0}),t.$on(a.events.ON_NEW_PROGRESS,function(n,r){var o,c,u;return s.state!==a.states.IDLE?(t.resolution=r.resolution,t.progress=r.progress,e.info(t.progress),o=100*(t.progress/t.resolution),1===t.progress?(t.startTime=Date.now(),i.start()):(c=Date.now()-t.startTime,t.remainingTime.push(Math.floor(c/t.progress*(t.resolution-t.progress)/1e3)),u=t.remainingTime.length>20?t.remainingTime.slice(Math.max(t.remainingTime.length-8,1)):t.remainingTime,t.sampledRemainingTime=Math.floor(l(u)),e.info(o.toFixed(2)+"% complete"),i.set(o)),o>=100&&(t.sampledRemainingTime=0,u=[]),t.addPoints(r.points,r.progress,r.resolution)):void 0}),t.progressHandler=function(e){var n;return 0===t.progress&&(i.start(),t.progress=e.total),n=100*(e.loaded/e.total),i.set(n),e.loaded===e.total?(t.progress=0,i.complete(),n=0,t.setScanIsLoading(!1),t.setScanLoaded(!0),t.$apply()):void 0},l=function(e){var t;return e.sort(function(e,t){return e-t}),t=Math.floor(e.length/2),e.length%2?e[t]:(e[t-1]+e[t])/2},t.setRenderTypeCallback=function(e){return t.renderObjectAsType=e},t.loadPLYHandlerCallback=function(e){return t.loadPLY=e},t.loadSTLHandlerCallback=function(e){return t.loadSTL=e},t.setPointHandlerCallback=function(e){return t.addPoints=e},t.setClearViewHandlerCallback=function(e){return t.clearView=e},t.getRendererCallback=function(e){return t.renderer=e}}])}.call(this),function(){var e;e="fabscan.controller.FSScanController",angular.module(e,[]).controller(e,["$log","$scope","$rootScope","ngProgress","$http","common.services.Configuration","fabscan.services.FSEnumService","fabscan.services.FSScanService","fabscan.services.FSMessageHandlerService",function(e,t,n,r,i,o,a,s){return t.showSettings=!1,t.scanListLoaded=!1,t.loadDialog=!1,t.shareDialog=!1,t.configDialog=!1,t.createScreenShot=null,t.scans=[],t.m_filters=[],t.loadFilters=function(){var n;return n=i.get(o.installation.httpurl+"api/v1/filters"),n.then(function(n){return e.info(n),t.m_filters=n.data.filters,t.m_filters.sort(function(e,t){var n,r;return n=e.file_name.toLowerCase(),r=t.file_name.toLowerCase(),r>n?-1:n>r?1:0}),t.selectedFilter=t.m_filters[0].file_name})},t.loadFilters(),t.upgradeServer=function(){return s.upgradeServer()},t.restartServer=function(){return s.restartServer()},t.startScan=function(){return t.stopStream(),t.showSettings=!1,t.scanComplete=!1,t.scanLoaded=!1,s.startScan()},t.stopScan=function(){return t.scanComplete=!1,t.scanLoaded=!1,t.remainingTime=[],t.stopStream(),s.stopScan()},t.showConfigDialog=function(){return e.debug("Open Config Dialog"),t.configDialog=!0},t.hideConfigDialog=function(){return t.configDialog=!1},t.toggleShareDialog=function(){return t.shareDialog?t.shareDialog=!1:(t.loadDialog=!1,t.shareDialog=!0)},t.toggleLoadDialog=function(){var e;return t.loadDialog?(t.scanListLoaded=!1,t.loadDialog=!1,t.shareDialog=!1):(e=i.get(o.installation.httpurl+"api/v1/scans"),e.then(function(e){return t.scans=e.data.scans,t.scanListLoaded=!0,t.loadDialog=!0,t.shareDialog=!1}))},t.exitScanSettings=function(){return t.stopStream(),t.showSettings=!1,s.exitScan()},t.newScan=function(){return t.loadDialog&&t.toggleLoadDialog(),t.shareDialog&&t.toggleShareDialog(),t.showSettings=!0,s.startSettings()},t.stopStream=function(){return t.streamUrl=" "},t.manviewhandler=function(){return t.showSettings&&t.exitScanSettings(),t.shareDialog&&t.toggleShareDialog(),t.loadDialog?t.toggleLoadDialog():void 0}}])}.call(this),function(){var e;e="fabscan.controller.FSSettingsController",angular.module(e,[]).controller(e,["$log","$scope","$timeout","$swipe","common.services.Configuration","fabscan.services.FSEnumService","fabscan.services.FSMessageHandlerService","fabscan.services.FSScanService",function(e,t,n,r,i,o,a,s){var l;return t.streamUrl=i.installation.httpurl+"stream/laser.mjpeg",t.previewMode="laser",t.selectedTab="general",t.timeout=null,l=function(){var e;return e={},angular.copy(t.settings,e),e.resolution*=-1,s.updateSettings(e)},t.isConnected&&l(),t.selectTab=function(e){return t.selectedTab=e,t.$broadcast("refreshSlider"),l(),t.showLaserPreview()},t.setCalibrationTab=function(){return t.selectedTab="calibration",t.$broadcast("refreshSlider"),l(),t.showCalibrationPreview()},t.togglePreviewMode=function(){return e.info("Do Nothing"),"laser"===t.previewMode?t.showCalibrationPreview():t.showLaserPreview()},t.showCalibrationPreview=function(){return t.streamUrl=i.installation.httpurl+"stream/calibration.mjpeg",t.previewMode="calibration"},t.showLaserPreview=function(){return t.streamUrl=i.installation.httpurl+"stream/laser.mjpeg",t.previewMode="laser"},t.setColor=function(){return l()},t.colorIsSelected=function(){return"True"===t.settings.color?!0:!1},t.$watch("settings.resolution",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showResolutionValue=!0,t.timeout=n(function(){t.showResolutionValue=!1},600)):void 0},!0),t.$watch("settings.laser_positions",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showPositionValue=!0,t.timeout=n(function(){t.showPositionValue=!1},600)):void 0},!0),t.$watch("settings.threshold",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showThresholdValue=!0,t.timeout=n(function(){t.showThresholdValue=!1},200)):void 0},!0),t.$watch("settings.camera.saturation",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showSaturationValue=!0,t.timeout=n(function(){t.showSaturationValue=!1},200)):void 0},!0),t.$watch("settings.camera.contrast",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showContrastValue=!0,t.timeout=n(function(){t.showContrastValue=!1},200)):void 0},!0),t.$watch("settings.camera.brightness",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showBrightnessValue=!0,t.timeout=n(function(){t.showBrightnessValue=!1},200)):void 0},!0),t.$watch("settings.led.red",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showLedRedValue=!0,t.timeout=n(function(){t.showLedRedValue=!1},200)):void 0},!0),t.$watch("settings.led.green",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showLedGreenValue=!0,t.timeout=n(function(){t.showLedGreenValue=!1},200)):void 0},!0),t.$watch("settings.led.blue",function(e,r){return e!==r?(l(),n.cancel(t.timeout),t.showLedBlueValue=!0,t.timeout=n(function(){t.showLedBlueValue=!1},200)):void 0},!0)}])}.call(this),function(){var e;e="fabscan.controller.FSShareController",angular.module(e,[]).controller(e,["$log","$scope","$rootScope","$http","common.services.toastrWrapperSvc","common.services.Configuration","fabscan.services.FSScanService",function(e,t,n,r,i,o,a){var s;return t.settings=null,t.id=a.getScanId(),t.selectedTab="download",t.raw_scans=[],t.meshes=[],t.file_formats=["stl","ply","obj"],t.selectedFormat=t.file_formats[0],t.getScans=function(){var n;return n=r.get(o.installation.httpurl+"api/v1/scans/"+a.getScanId()),n.then(function(n){return e.info(n),t.raw_scans=n.data.raw_scans,t.meshes=n.data.meshes,t.settings=n.data.settings})},t.getScans(),t.slickFormatConfig={enabled:!0,autoplay:!1,draggable:!1,autoplaySpeed:3e3,slidesToShow:1,method:{},event:{afterChange:function(e,n,r){return t.selectedFormat=$(n.$slides.get(r)).data("value")}}},t.slickFilterConfig={enabled:!0,autoplay:!1,draggable:!1,autoplaySpeed:3e3,slidesToShow:1,method:{},event:{afterChange:function(e,n,r){return t.selectedFilter=$(n.$slides.get(r)).data("value")}}},t.appendFormatListener=function(){$(".f_format").on("afterChange",function(e,n,r){return t.selectedFormat=$(n.$slides.get(r)).data("value")})},t.appendFilterListener=function(){$(".m_filter").on("afterChange",function(e,n,r){return t.selectedFilter=$(n.$slides.get(r)).data("value")})},t.selectTab=function(e){return t.selectedTab=e},t.nextSubSelection=function(){return $(".filter-container").slick("slickNext"),!1},t.previewsSubSelection=function(){return $(".filter-container").slick("slickPrev"),!1},t.deleteFile=function(s){var l;return t.toggleShareDialog(),l=r["delete"](o.installation.httpurl+"api/v1/scans/"+a.getScanId()+"/files/"+s),l.then(function(r){return e.info(r.data),t.getScans(),"SCAN_DELETED"===r.data.response&&(i.info('Scan "'+r.data.scan_id+'" deleted'),a.setScanId(null),t.setScanLoaded(!1),n.$broadcast("clearView")),{"else":i.info('File "'+s+'" deleted')}})},t.deleteScan=function(){var s;return t.toggleShareDialog(),s=r["delete"](o.installation.httpurl+"api/v1/delete/"+a.getScanId()),s.then(function(t){return e.info(t.data),i.info("Scan "+a.getScanId()+" deleted"),a.setScanId(null),n.$broadcast("clearView")})},t.loadPointCloud=function(e){return t.toggleShareDialog(),t.scanComplete=!1,toastr.info("Loading file..."),t.loadPLY(e)},t.loadSTLMesh=function(e){return t.toggleShareDialog(),t.scanComplete=!1,toastr.info("Loading file..."),t.loadSTL(e)},s=function(e){return e.split(".").pop()},t.loadMesh=function(e){var n;return n=s(e),"stl"===n&&t.loadSTLMesh(e),"ply"===n?t.loadPLY(e):void 0},t.runMeshing=function(){return t.toggleShareDialog(),e.info(t.selectedFilter),e.info(t.selectedFormat),a.runMeshing(a.getScanId(),t.selectedFilter,t.selectedFormat)}}])}.call(this),function(){var e;e="fabscan.controller.FSStartupController",angular.module(e,[]).controller(e,["$log","$scope","$rootScope","fabscan.services.FSEnumService","fabscan.services.FSScanService","fabscan.services.FSMessageHandlerService",function(){}])}.call(this);