(function(){
  angular
    .module('app')
    .factory('lineFactory',lineFactory);

  function lineFactory() {
    return {lineHolder: lineHolder,
            makeLines: makeLines,
            clearLines: clearLines
           };

    ////////////

    function clearLines() {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function lineHolder(){
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      c.width = window.innerWidth;
      c.height = window.innerHeight;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      makeLines('.cm-attribute:contains(ng-controller)', '.cm-property:contains("controller")', ctx, "#DD2C00");
      makeLines('.cm-attribute:contains(ng-app)', '.cm-property:contains(module)', ctx, "#F50057");
      makeLines('.cm-property:contains($inject)', '.cm-property:contains(factory)', ctx, "#2962FF");
    }
  function makeLines(query1, query2, ctx, strokeColor) {
    var temp1 = $(query1),
        word1,
        temp2 = $(query2),
        word2;
    if(temp1[0]) {
      word1 = temp1[0].nextElementSibling;
      if(word1) {
        if(word1.className === "cm-operator") {
          word1 = word1.nextElementSibling;
        }
      }
    }
    if(temp2[0]) {
      word2 = temp2[0].nextElementSibling;
    }
    if(word1 && word2) {
      if(word1.innerHTML.substring(1,word1.innerHTML.length - 1).indexOf(word2.innerHTML.substring(1,word2.innerHTML.length - 1)) != -1) {
        var x1 = $(word1).offset().left+5;
        var y1 = $(word1).offset().top +10;
        var x2 = $(word2).offset().left+13;
        var y2 = $(word2).offset().top +10;

        ctx.beginPath();
        ctx.lineWidth = 2.5;
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(400,400,x2,y2);
        ctx.strokeStyle= strokeColor;
        ctx.stroke();
      }

    }

  }
  }
}());
