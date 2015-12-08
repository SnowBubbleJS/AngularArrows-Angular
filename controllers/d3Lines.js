angular
  .module('app')
  .controller('d3Lines',lineFunction);

function lineFunction(query){
  // console.log('hihiiii' + output);
  var temp = $(query);
  if (temp.length < 1) {
    var x1 = $(temp[0]).offset().left;
    var y1 = $(temp[0]).offset().top;
    var x2 = $(temp[1]).offset().left;
    var y2 = $(temp[1]).offset().top;
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}
