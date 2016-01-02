// (function(){
  angular
    .module('app')
    .factory('output', output);

  output.$inject = ["$rootScope", "promptFactory","inputFactory"];

  function output($rootScope, promptFactory, inputFactory) {
    var out = {
      html: '',
      partial: '',
      app: '',
      controller: '',
      factory: '',
      source: '',
      url: "http://www.localhost:3000/",
      prepareSource: function(partial) {
        var src = this.html;
        // Partial
        if(!!partial) {
          src = src.replace(/<body([\s\S]*)\/body>/, '<body ui-view>' + this.partial + '<body>' );
        }

        // App
        var appScript = '<script>' + this.app + '<\/script>';
        src = src.replace('</body>', appScript + '</body>');

        // Controller
        var controllerScript = '<script>' + this.controller + '<\/script>';
        src = src.replace('</body>', controllerScript + '</body>');

        // Factory
        var factoryScript = '<script>' + this.factory + '<\/script>';
        src = src.replace('</body>', factoryScript + '</body>');

        return src;
      },
      render: function() {
        var iframe = document.querySelector('#output iframe');
        if(this.url === 'http://www.localhost:3000/' || this.url === 'http://www.localhost:3000') {
          this.source = this.prepareSource();
          if(!!inputFactory.checkInput(this.source)) {
            $rootScope.$broadcast('answer:correct');
            $rootScope.$destroy('answer:correct');
            console.log('goodjob..should update');
          }
          var iframe_doc = iframe.contentDocument;
          iframe_doc.open();
          iframe_doc.write(this.source);
          iframe_doc.close();
        }
        else if (this.url === 'http://www.localhost:3000/partial') {
          // console.log('RENDER PARTIAL');
            this.source = this.prepareSource(true);
            // console.log(this.source);
            iframe_doc = iframe.contentDocument;
            iframe_doc.open();
            iframe_doc.write(this.source);
            iframe_doc.close();
        }
        else {
          iframe_doc = iframe.contentDocument;
          iframe_doc.open();
          iframe_doc.write(404);
          iframe_doc.close();

        }
      }
    };
    return out;
  }
// }());
