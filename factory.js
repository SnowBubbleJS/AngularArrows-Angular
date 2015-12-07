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
      var src = '';
      // HTML
      src = this.html;
      // Partial
      if(!!partial) {
        src = src.replace(/<body([\s\S]*)\/body>/, '<body ui-view>' + this.partial + '<body>' );
        // src = src.replace('</body>', this.partial + '</body>');
        console.log(src);
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
      // console.log('rendering', this.url);
      var source,
          iframe = document.querySelector('#output iframe');
      if(this.url === 'http://www.localhost:3000/' || this.url === 'http://www.localhost:3000') {
        source = this.prepareSource();
        iframe_doc = iframe.contentDocument;
        iframe_doc.open();
        iframe_doc.write(source);
        iframe_doc.close();
      }
      else if (this.url === 'http://www.localhost:3000/partial') {
        console.log('RENDER PARTIAL');
          source = this.prepareSource(true);
          // console.log(source);
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
