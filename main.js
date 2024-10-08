function viewDiv(){
    document.getElementById("1").style.display = "block";
    document.getElementById("over").style.display = "block";
};

function viewDiv2(){
    document.getElementById("2").style.display = "block";
    document.getElementById("over").style.display = "block";
};
function viewDiv3(){
    document.getElementById("3").style.display = "block";
    document.getElementById("over").style.display = "block";
};
function viewDiv4(){
    document.getElementById("4").style.display = "block";
    document.getElementById("over").style.display = "block";
};
function viewDiv5(){
    document.getElementById("5").style.display = "block";
    document.getElementById("over").style.display = "block";
};
function viewDiv6(){
    document.getElementById("6").style.display = "block";
    document.getElementById("over").style.display = "block";
};


(function(){
    $('button').each(function(){
     var closeTrigger = $(this).find('.close-block').length;
     if (closeTrigger < 1 ){ 
      $(this).append('<span class="close-block"></span>');
     }else{
      return '';
     }
     $('.close-block').on('click', function(){
      $(this).closest('.button').fadeOut(100);
     });
    });
});


function toggleBackground() {
    var overlay1 = document.getElementById("over");
    var element1 = document.getElementById("1");
    
    overlay1.style.display = overlay1.style.display === 'none' ? 'block' : 'none';
    element1.style.display = element1.style.display === 'none' ? 'block' : 'none';
}

function toggleBackground2() {
    var overlay2 = document.getElementById("over");
    var element2 = document.getElementById("2");
    
    overlay2.style.display = overlay2.style.display === 'none' ? 'block' : 'none';
    element2.style.display = element2.style.display === 'none' ? 'block' : 'none';
}
function toggleBackground3() {
    var overlay3 = document.getElementById("over");
    var element3 = document.getElementById("3");
    
    overlay3.style.display = overlay3.style.display === 'none' ? 'block' : 'none';
    element3.style.display = element3.style.display === 'none' ? 'block' : 'none';
}
function toggleBackground4() {
    var overlay4 = document.getElementById("over");
    var element4 = document.getElementById("4");
    
    overlay4.style.display = overlay4.style.display === 'none' ? 'block' : 'none';
    element4.style.display = element4.style.display === 'none' ? 'block' : 'none';
}
function toggleBackground5() {
    var overlay5 = document.getElementById("over");
    var element5 = document.getElementById("5");
    
    overlay5.style.display = overlay5.style.display === 'none' ? 'block' : 'none';
    element5.style.display = element5.style.display === 'none' ? 'block' : 'none';
}
function toggleBackground6() {
    var overlay6 = document.getElementById("over");
    var element6 = document.getElementById("6");
    
    overlay6.style.display = overlay6.style.display === 'none' ? 'block' : 'none';
    element6.style.display = element6.style.display === 'none' ? 'block' : 'none';
}


