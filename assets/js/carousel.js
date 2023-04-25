var slideIndexes = {
  proj01: 1,
  proj02: 1,
  proj03: 1
};

showDivs(slideIndexes["proj01"], "proj01");
showDivs(slideIndexes["proj02"], "proj02");
showDivs(slideIndexes["proj03"], "proj03");

function plusDivs(n, proj) {
  showDivs(slideIndexes[proj] += n, proj);
}

function currentDiv(n, proj) {
  showDivs(slideIndexes[proj] = n, proj);
}

function showDivs(n, proj) {
  var i;
  var x = document.getElementsByClassName("slides " + proj);
  var dots = document.getElementsByClassName("demo " + proj);
  if (n > x.length) {slideIndexes[proj] = 1}
  if (n < 1) {slideIndexes[proj] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-selected", "");
  }
  x[slideIndexes[proj] - 1].style.display = "block";  
  dots[slideIndexes[proj] - 1].className += " dot-selected";
}