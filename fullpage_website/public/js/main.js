$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],

    //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
    css3:true
  });
  $('#cv').on('click', function(){
    window.open('public/assets/CV_English.pdf');
  });
});
console.log("main.js");
