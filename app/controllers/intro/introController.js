(function() {
angular
    .module('app')
    .controller('IntroController', IntroController);

IntroController.$inject = ['nzTour'];

function IntroController(nzTour){

  var vm = this;

  var tour = window.tour = {
    config: {
      mask:{
          clickExit: true
        }

    },
    steps:[{
      content: "<h1>Welcome!</h1> <br>Let's get familiar with the application before we start the tutorial. <br><br> Use the <b>left/right</b> keys to go to the next/previous step. <br><br>"
    },{
      target: "#html",
      content: "This is the HTML editor where you will be coding the V in the MVC model."
    },{
      target: "#app",
      content: "This is the app.js where you'll build the foundation of your application."
    },{
      target: "#controller",
      content: "This is the controller.js where you'll be creating your controller, the C in the MVC model."
    },{
      target: "#factory",
      content: "This is the factory.js where you'll be storing data."
    },{
      target: '#outputBox',
      content: "This is where you'll be witnessing Angular 'magic'."
    },{
      target: '#toggleLine',
      content: "This is where you can toggle the lines on or off."
    },{
      target: '#test',
      content: 'Click here to see the history of the prompts as you go through the tutorial.'
    },{
      target: '#test1',
      content: 'Click here to get started! <br><br> Tip: press the <code>esc</code> key as a shortcut to display your current tutorial prompt.<br><br>'
    }]
  };

  vm.start =function(){
  
    nzTour.start(tour);
  };



}

})();





// angular
//   .module('app')
//   .controller('IntroController', IntroController);
//
// function IntroController() {
//   var vm = this;
//
//
//     vm.CompletedEvent = function (scope) {
//         console.log("Completed Event called");
//     };
//
//     vm.ExitEvent = function (scope) {
//         console.log("Exit Event called");
//     };
//
//     vm.ChangeEvent = function (targetElement, scope) {
//         console.log("Change Event called");
//         console.log(targetElement);  //The target element
//         console.log(this);  //The IntroJS object
//     };
//
//     vm.BeforeChangeEvent = function (targetElement, scope) {
//         console.log("Before Change Event called");
//         console.log(targetElement);
//     };
//
//     vm.AfterChangeEvent = function (targetElement, scope) {
//         console.log("After Change Event called");
//         console.log(targetElement);
//     };
//
//   vm.IntroOptions = {
//     steps:[
//     {
//         element: document.querySelector('#step1'),
//         intro: "This is the first tooltip.",
//         position: 'top'
//     },
//
//     ],
//     showStepNumbers: false,
//     exitOnOverlayClick: true,
//     exitOnEsc:true,
//     nextLabel: '<strong>NEXT!</strong>',
//     prevLabel: '<span style="color:green">Previous</span>',
//     skipLabel: 'Exit',
//     doneLabel: 'Thanks'
// };
//
// vm.ShouldAutoStart = false;
//
// }
