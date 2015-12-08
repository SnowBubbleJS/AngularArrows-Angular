angular
  .module('app')
  .controller('d3Lines',lineFunction);

function lineFunction(query){
  var temp = $(query);
  console.log(temp);

  var x1 = $(temp[0]).offset().left;
  var y1 = $(temp[0]).offset().top;
  var x2 = $(temp[1]).offset().left;
  var y2 = $(temp[1]).offset().top;
console.log(x1,y1,x2,y2);

var canvas = document.getElementById('canvas'),
     context = canvas.getContext('2d');

 context.beginPath();
 context.moveTo(x1,y1);
 context.lineTo(x2,y2);
 context.stroke();

  // var curved = ad3Line.line()
  //     .x(function(d) { return d.x; })
  //     .y(function(d) { return d.y; })
  //     .interpolate("cardinal")
  //     .tension(0);
  //
  // var points = [ { x: x1, y: y1 },{ x: (x1+x2)/2, y: y2+30 },{ x: x2, y: y2 }];
  //
  // var lineGraph1 = ad3.select('body')
  //   .append("svg:svg")
  //   .attr("width", '100%')
  //   .attr("height", '100%')
  //   .attr("id", "CtrlSVGHTML")
  //   .attr("opacity",1)
  //   .attr("stroke-width",1.3);
  //
  // // Actual path appended into svg
  // lineGraph1.append('path')
  //   .attr('d', curved(points));

}
