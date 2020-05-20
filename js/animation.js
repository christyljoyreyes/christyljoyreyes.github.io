var i = 0;
var txt = 'Welcome to my Portfolio';
var speed = 50;


setInterval(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}, 1000);


// App.controller('dataCtrl', function ($http, $timeout, $scope, $rootScope, $state, adminFactory) {
 

// });