angular
  .module('app')
  .controller('d3Lines',lineFunction);

function lineFunction(output){
  // console.log('hihiiii' + output);
  var c=document.getElementById("canvas");
  var ctx=c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(252, 72);
  ctx.lineTo(1347,57);
  ctx.stroke();
}
