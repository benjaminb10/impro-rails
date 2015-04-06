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
  if(msec < 10){
    msec = "00" +msec
  }
  else if(msec < 100){
    msec = "0" +msec
  }
  // document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
  document.getElementById("js-startstop").innerHTML = min + ":" + sec + ":" + msec%100
  timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
  d = document.getElementById("js-startstop")
  d.className = "btn btn-lg btn-success";
  document.chronoForm.startstop.onclick = chronoStop
  document.chronoForm.reset.onclick = chronoReset
  start = new Date()
  chrono()
}
function chronoContinue(){
  d = document.getElementById("js-startstop")
  d.className = "btn btn-lg btn-success";
  document.chronoForm.startstop.onclick = chronoStop
  document.chronoForm.reset.onclick = chronoReset
  start = new Date()-diff
  start = new Date(start)
  chrono()
}
function chronoReset(){
  document.getElementById("js-startstop").innerHTML = "00:00:00"
  start = new Date()
}
function chronoStopReset(){
  document.getElementById("js-startstop").innerHTML = "00:00:00"
  document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
  d = document.getElementById("js-startstop")
  d.className = "btn btn-lg btn-warning";
  document.chronoForm.startstop.onclick = chronoContinue
  document.chronoForm.reset.onclick = chronoStopReset
  clearTimeout(timerID)
}