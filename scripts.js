let bColorMode = false;

$(document).ready(function() {
  //alert("Document loaded successful!");
});

const toggleColorMode = () => {
  if(!bColorMode){
    bColorMode = true;
    // Color Mode Activates
    $(".sun-1").removeClass('s1');
    $(".sun-2").removeClass('s2');
    $(".sun-3").removeClass('s3');
    $(".sun-4").removeClass('s4');
    $(".sun-1").addClass('s1C');
    $(".sun-2").addClass('s2C');
    $(".sun-3").addClass('s3C');
    $(".sun-4").addClass('s4C');
    $(".title").addClass('title-shadow');
    $(".author").addClass('title-shadow');
    $(".subtitle").addClass('subtitle-invert');
    $(".book").addClass('book-invert');
    $(".hider").addClass('book-invert');
  }
  else {
    bColorMode = false;
    // Normal Mode
    $(".sun-1").removeClass('s1C');
    $(".sun-2").removeClass('s2C');
    $(".sun-3").removeClass('s3C');
    $(".sun-4").removeClass('s4C');
    $(".title").removeClass('title-shadow');
    $(".author").removeClass('title-shadow');
    $(".subtitle").removeClass('subtitle-invert');
    $(".book").removeClass('book-invert');
    $(".hider").removeClass('book-invert');
    $(".sun-1").addClass('s1');
    $(".sun-2").addClass('s2');
    $(".sun-3").addClass('s3');
    $(".sun-4").addClass('s4');
  }
}