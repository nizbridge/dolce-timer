var timer_run = false;
  
function move(timer) {
    var width = 0;
    var cnt = timer;
    var id = setInterval(frame, timer*10);
    $('#countdown-text em').text(cnt);
    function frame() {
        if (width >= 100) {
            timer_run = false;
            clearInterval(id);
            clearInterval(id2);
            $('#myCircle').addClass('complete');
        } else {
            // elem.style.width = width + '%'; 
            $('#myCircle').removeClass('p'+width);
            width++; 
            $('#myCircle').addClass('p'+width);
            $('#per-text').text(width * 1 + '%');
        }
    }
    var id2 = setInterval(function(){
      $('#countdown-text em').text(--cnt);
    }, 1000);


}

$(document).ready(function() {
  var timer = 0;
  $('#dropdown1 a').click(function(){
    var level;
    $('#dropdown1 a').removeClass('on');
    $(this).addClass('on');
    timer = $(this).attr('data-value');
  });
  $('button').click(function(){
    if(timer == 0) {
      alert("Please set the level.");
    }
    else if(timer_run) {
      alert("The timer is operating.");
    }
    else {
      if($('#myCircle').hasClass('p100')) {
        $('#myCircle').removeClass('p100').addClass('p0');
        $('#myCircle').removeClass('complete');
      }
      timer_run = true;      
      
      move(timer);  
    }
    
  });
});
