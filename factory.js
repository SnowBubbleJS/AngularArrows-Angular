angular
  .module('app')
  .factory('output', output);

function output() {
  var out = {
    html: '',
    partial: '',
    app: '',
    controller: '',
    factory: '',
    source: 'asdf',
    url: "http://www.localhost:3000/",
    prepareSource: function(partial) {
      var src = "<!DOCTYPE html>\n" +
			"<html>\n\t" +
      "<head>\n\t\t" +
      "<meta charset=\"utf-8\">\n\t\t" +
      "<title>Test</title>\n\n\t\t\n\t" +
      "<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.9/angular.min.js'></script>" +
      "</head>\n\t" +
      "<body>\n\t\n\t" +
      "</body>\n" +
      "</html>";

      // HTML
      src = src.replace('</body>',this.html + '</body>');
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
      console.log(this.url);
      iframe = document.querySelector('#output iframe');
      if(this.url === 'http://www.localhost:3000/' || this.url === 'http://www.localhost:3000') {
        this.source = this.prepareSource();
        console.log(this.source);
        iframe_doc = iframe.contentDocument;
        iframe_doc.open();
        iframe_doc.write(this.source);
        iframe_doc.close();
      }
      else if (this.url === 'http://www.localhost:3000/partial') {
        console.log('RENDER PARTIAL');
          this.source = this.prepareSource(true);

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
