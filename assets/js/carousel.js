var slideIndex = 1;
showDivs(slideIndex, "proj01");
showDivs(slideIndex, "proj02");

function plusDivs(n, proj = "proj01") {
  showDivs(slideIndex += n, proj);
}

function currentDiv(n, proj = "proj01") {
  showDivs(slideIndex = n, proj);
}

function showDivs(n, proj = "proj01") {
  var i;
  var x = document.getElementsByClassName("slides " + proj);
  var dots = document.getElementsByClassName("demo " + proj);
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}