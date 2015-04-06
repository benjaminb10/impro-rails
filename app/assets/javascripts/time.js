  var startTime = 0
  var start = 0
  var end = 0
  var diff = 0
  var timerID = 0
  function chrono(){
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours()-1
    if (min < 10){
      min = "0" + min
    }
    if (sec < 10){
      sec = "0" + sec
    }
    msec%=100
    if(msec < 10){
      msec = "0" + msec
    }
    // document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
    document.getElementById("js-time").innerHTML = min + ":" + sec + ":" + msec
    timerID = setTimeout("chrono()", 10)
  }

jQuery(document).ready(function($){

  $("#js-go").click(function() {
    $("#js-go").hide();
    $("#js-time").removeClass('text-primary');
    $("#js-time").addClass('text-success');
    $("#js-pause").removeClass('hidden');
    $("#js-reset").removeClass('hidden');
    start = new Date();
    chrono();
  });

  var toggle = true
  $("#js-pause").click(function() {
    if(toggle) {
      clearTimeout(timerID)
      toggle = false
      $(this).html("<i class='fa fa-play'></i>")
      $("#js-time").removeClass('text-success');
      $("#js-time").addClass('text-warning');
    } else {
      toggle = true
      $(this).html("<i class='fa fa-pause'></i>")
      $("#js-time").removeClass('text-warning');
      $("#js-time").addClass('text-success');
      start = new Date()-diff
      start = new Date(start)
      chrono()
    }
  });

  $("#js-reset").click(function() {
    document.getElementById("js-time").innerHTML = "00:00:00"
    toggle = true
    $("#js-pause").click()
    $("#js-time").removeClass('text-success');
    $("#js-time").removeClass('text-warning');
    $("#js-time").addClass('text-primary');
  });
});