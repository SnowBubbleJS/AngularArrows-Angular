(function(){
  angular
    .module('app')
    .factory('lineFactory',lineFactory);

  function lineFactory() {
    return {lineFunction: lineFunction};

    ////////////

    function lineFunction(query1, query2){
        var temp1 = $(query1),
            word1 = temp1[0].nextElementSibling,
            text1 = word1.innerHTML,
            temp2 = $(query2),
            word2 = temp2[0].nextElementSibling,
            text2 = word2.innerHTML;
          
        var c = document.getElementById("canvas");
        c.width = window.innerWidth;
        c.height = window.innerHeight;
        var ctx = c.getContext("2d");
        c.width = window.innerWidth;
        c.height = window.innerHeight;

// console.log(text1.indexOf(text2), word1.innerHTML, word2.innerHTML);
        if(word1.innerHTML.indexOf(word2.innerHTML) !== -1) {
          console.log('should draw');
            var x1 = $(word1).offset().left+5;
            var y1 = $(word1).offset().top +10;
            var x2 = $(word2).offset().left+5;
            var y2 = $(word2).offset().top +10;
            console.log(x1,x2,y1,y2);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.beginPath();
            ctx.lineWidth = 0.2;
            ctx.moveTo(x1, y1);
            ctx.quadraticCurveTo(400,400,x2,y2);
            ctx.stroke();
            console.log(ctx.stroke);
        }
        if(temp1.length === 0) {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
      }
  }
}());
