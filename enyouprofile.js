
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("s1");
    var b1 =document.getElementById("b1");
    var b2 =document.getElementById("b2");
    if (slideIndex > 1){ 
    	b1.style.display = "block";
    }
    else{
    	b1.style.display = "none";    	
    }
    if (slideIndex >= x.length){ 
    	b2.style.display = "none";
    }
    else{
    	b2.style.display = "block";    	
    }
    if (n > x.length) {
    	slideIndex = 1;
    }
    if (n < 1) {
    	slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}






var Index = 1;
show(Index);

function plus(n) {
    show(Index += n);
}

function show(n) {
    var i;
    var x = document.getElementsByClassName("s0");
    var bt1 =document.getElementById("bt1");
    var bt2 =document.getElementById("bt2");
    if (Index > 1){ 
    	bt1.style.display = "block";
    }
    else{
    	bt1.style.display = "none";    	
    }
    if (Index >= x.length){ 
    	bt2.style.display = "none";
    }
    else{
    	bt2.style.display = "block";    	
    }
    if (n > x.length) {
    	Index = 1;
    }
    if (n < 1) {
    	Index = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[Index-1].style.display = "block";
}

