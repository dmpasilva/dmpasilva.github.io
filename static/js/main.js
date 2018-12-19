
/*document.ready(function(){
    alert('hello!');
});*/

$(document).ready(function(){
    var elements = $(".sidebar > .main-info *");
  
    for(let i = 0; i < elements.length; i++){
        $(elements[i].tagName).addClass("bs");
    }
    $(".main-content").addClass("active");
    /*
    console.log(elements);
  
    for(let i = 0; i < elements.length; i++){
      setTimeout(function(){
        $(elements[i].tagName).addClass("bs");
      }, 0);
    }
  
    setTimeout(function(){
      
    }, 0);
  */
  });