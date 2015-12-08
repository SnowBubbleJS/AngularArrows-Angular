angular
  .module('app')
  .factory('output', output);

function output() {
  var out = {
    html: '',
    partial: '',
    app: '',
    controller: '',
    source: {},
    url: "http://www.localhost:3000/",
    prepareSource: function(partial) {
      var src = '';
      // HTML
      src = this.html;
      // Partial
      if(!!partial) {
        src = src.replace(/<body([\s\S]*)\/body>/, '<body ui-view>' + this.partial + '<body>' );
        // src = src.replace('</body>', this.partial + '</body>');
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
      // console.log($('#iframeOutput').contents().find('div'));
      // console.log('rendering', this.url);
      iframe = document.querySelector('#output iframe');
      if(this.url === 'http://www.localhost:3000/' || this.url === 'http://www.localhost:3000') {
        this.source = {0: this.prepareSource()};
        iframe_doc = iframe.contentDocument;
        iframe_doc.open();
        iframe_doc.write(this.source[0]);
        iframe_doc.close();
        lineFunction();
      }
      else if (this.url === 'http://www.localhost:3000/partial') {
        console.log('RENDER PARTIAL');
          this.source = this.prepareSource(true);
          // console.log(source);

          iframe_doc = iframe.contentDocument;
          iframe_doc.open();
          iframe_doc.write(this.source);
          iframe_doc.close();
          // console.log(this.source);
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
