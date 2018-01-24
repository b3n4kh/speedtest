
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


function setCookie(cname, cvalue, exhours) {
  var d = new Date();
  d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function cookifyResult(){
  var checkResult = 'dl='+dlStatus+'|ul='+ulStatus+'|ping='+pingStatus+'|jitter='+jitterStatus
  setCookie("lastcheck", checkResult, 2)
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

var uidCookieCalled=false
function checkCookie() {
  var user = getCookie("uid");
  if (user != "") {
    alert("Ahoi " + user);
  } else {
    if (uidCookieCalled == false) {
      getUid()
      checkCookie()
    }
  }
  uidCookieCalled=true
}
