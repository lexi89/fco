$(function () {
  var lineOne = $("#line-1");
  var lineTwo = $("#line-2");

  window.setTimeout(firstLine, 500);
  window.setTimeout(secondLine, 2000);

  function firstLine(){
    $(lineOne).addClass("fadeIn");
  }
  function secondLine(){
    $(lineTwo).addClass("fadeIn");
  }
})
