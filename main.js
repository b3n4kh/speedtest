function I(id){return document.getElementById(id);}

function abort(){
  w.postMessage('abort');
  w=null;
  I("startStopBtn").className="";
  initUI();
}

function loadcookie() {
loadedResult = loadcookieResult();
if ( loadedResult != 0 ) {
  console.log(loadedResult);
  var decodedData = window.atob(loadedResult);
  console.log(decodedData);
  var loadedData=decodedData.split('|');
  if (compareIP(loadedData[3]) == 0) {
    I("ip").textContent=loadedData[3];
    I("dlText").textContent=loadedData[0];
    I("ulText").textContent=loadedData[1];
    I("pingText").textContent=loadedData[2];
    I("jitText").textContent=loadedData[4];
    done();
  }
}
}

function done(){
  I("startStopBtn").className="done";
  I("startStopBtn").onclick="";
  timer();
}

function checkFileExistence(file, fn) {
  if(file) {
    var x = new XMLHttpRequest();
    x.onload = function () {
      if(x.status == '404'){
        fn("File: '" + file + "' does not exist");
      }
      fn("0");
    };
    x.open("GET", file);
    x.send();
  }
}

function setCookie(cname, cvalue, d) {
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function loadcookieResult() {
  var speedtest_cookie = getCookie("lastcheck");
  if (speedtest_cookie != "") {
    return speedtest_cookie;
  }
  return 0;
}

function cookifyResult(dlStatus, ulStatus, pingStatus, ip, jitterStatus){
  var checkResult = dlStatus+'|'+ulStatus+'|'+pingStatus+'|'+ip+'|'+jitterStatus;
  var encodedData = window.btoa(checkResult);
  var d = new Date();
  d.setTime(d.getTime() + (2 * 60 * 60 * 1000));

  setCookie("lastcheck", encodedData, d);
  setCookie("lastcheckvalid", d, d);
}

function getIp(url_getIp) {
  var result = "";
  xhr = new XMLHttpRequest()
  xhr.onload = function () {
    result = xhr.responseText;
  }
  xhr.open('GET', url_getIp, false);
  xhr.send();
  return result;
}

function compareIP(oldIp) {
  var newIp = getIp('/ip');
  if (oldIp == newIp) {
    return 0;
  }
  return 1;
}

function timer() {
  var until = getCookie('lastcheckvalid');
  var countDownDate = new Date(until).getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    I("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
  }, 1000);
}

var resetkey1, resetkey2 = false;
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName == 'r' || resetkey1 == true) {
    resetkey1 = true;
    if (keyName == 'e' || resetkey2 == true) {
      resetkey2 = true;
      if(keyName == 's') {
        document.cookie = 'lastcheck=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'lastcheckvalid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        location.reload();
      }
    }
  } else {
    resetkey1, resetkey2 = false;
  }

}, false);