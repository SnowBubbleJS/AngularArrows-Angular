angular
  .module('app')
  .factory('output', output);

function output() {
  var out = {
    html: '',
    partial: '',
    app: '',
    controller: '',
    prepareSource: function() {
      var base_tpl =
        "<!doctype html>\n" +
        "<html>\n\t" +
        "<head>\n\t\t" +
        "<meta charset=\"utf-8\">\n\t\t" +
        "<title>Test</title>\n\n\t\t\n\t" +
        "</head>\n\t" +
        "<body>\n\t\n\t" +
        "</body>\n" +
        "</html>";
      var src = '';
      // HTML
      src = base_tpl.replace('</body>', this.html + '</body>');

      // Partial
      // css = '<html>' + this.partial + '</html>';
      // src = src.replace('</div>', this.partial + '</div>');

      // App
      appScript = '<script>' + this.app + '<\/script>';
      src = src.replace('</body>', appScript + '</body>');

      // Controller
      controllerScript = '<script>' + this.controller + '<\/script>';
      src = src.replace('</body>', controllerScript + '</body>');
      return src;
    },
    render: function() {
      var source = this.prepareSource();
      var iframe = document.querySelector('#output iframe');
      iframe_doc = iframe.contentDocument;
      iframe_doc.open();
      iframe_doc.write(source);
      iframe_doc.close();
    }
  };
  return out;
}
