angular
  .module('app')
  .factory('output', output);

function output() {
  var out = {
    html: '',
    partial: '',
    app: '',
    controller: '',
    url: "http://www.localhost:3000/",
    prepareSource: function(partial) {
      // var base_tpl =
      //   "<!doctype html>\n" +
      //   "<html>\n\t" +
      //   "<head>\n\t\t" +
      //   "<meta charset=\"utf-8\">\n\t\t" +
      //   "<title>Test</title>\n\n\t\t\n\t" +
      //   "</head>\n\t" +
      //   "<body>\n\t\n\t" +
      //   "</body>\n" +
      //   "</html>";
      var src = '';
      // HTML
      src = this.html;

      // Partial
      if(!!partial) {
        src = src.replace(/<body ui-view>([\s\S]*)<\/body>/, '<body ui-view>' + this.partial + '<body>' );
        // src = src.replace('</body>', this.partial + '</body>');
        console.log('hiiiii');
      }


      // App
      appScript = '<script>' + this.app + '<\/script>';
      src = src.replace('</body>', appScript + '</body>');

      // Controller
      controllerScript = '<script>' + this.controller + '<\/script>';
      src = src.replace('</body>', controllerScript + '</body>');
      return src;
    },
    render: function() {
      console.log('rendering', this.url);
      var source,
          iframe = document.querySelector('#output iframe');
      if(this.url === 'http://www.localhost:3000/') {
        source = this.prepareSource();
        iframe_doc = iframe.contentDocument;
        iframe_doc.open();
        iframe_doc.write(source);
        iframe_doc.close();
      }
      else if (this.url === 'http://www.localhost:3000/partial') {
          source = this.prepareSource(true);
          console.log(source);
          iframe_doc = iframe.contentDocument;
          iframe_doc.open();
          iframe_doc.write(source);
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
