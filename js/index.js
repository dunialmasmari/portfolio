
function myFunction() {
var x = document.getElementById("menulink");
if (x.className === "menulinks") {
x.className += " responsivemenu";
} else {
x.className = "menulinks";
}
}
var btns = document.getElementsByClassName('list')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}
         

window.onscroll = function() { scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      console.log('i m do');
    document.getElementById("navbar").style.width = "100%";
    document.getElementById("navbar").style.position = "fixed";
  } else {
    document.getElementById("navbar").style.width = "90%";
    document.getElementById("navbar").style.position = "static";

  }
}