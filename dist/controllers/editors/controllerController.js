"use strict";!function(){function e(e,n){function o(e){e.setValue("(function() {\n	\n}());"),n.controller=e.getValue(),n.render(),e.on("change",function(o,r){n.controller=e.getValue(),n.render()})}var r=this;r.codemirrorLoaded=o,r.editorOptions={lineWrapping:!0,lineNumbers:!0,mode:"text/javascript"}}angular.module("app").controller("ControllerController",e),e.$inject=["lineFactory","output"]}();