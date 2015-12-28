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
