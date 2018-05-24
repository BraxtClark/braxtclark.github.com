

// Functions for making the Three links About, Projects and Contacts change from a coral to a grey after being clicked

document.getElementById("navLink").addEventListener('click', linkClickedRecolor);

function linkClickedRecolor() {
document.getElementById("navLink").style.color = "#7A9E9F";

}


document.getElementById("navLink2").addEventListener('click', linkClickedRecolor2);

function linkClickedRecolor2() {
document.getElementById("navLink2").style.color = "#7A9E9F";

}


document.getElementById("navLink3").addEventListener('click', linkClickedRecolor3);

function linkClickedRecolor3() {
document.getElementById("navLink3").style.color = "#7A9E9F";

}


// Functions for the scroll arrow to animate and scroll

var x = document.getElementById("scrollArrowjs")

x.addEventListener('mouseover', arrowAnimateEnter);

function arrowAnimateEnter(){
    document.getElementById("scrollArrowjs").src = "images/greyArrowLVL2.png";
}

x.addEventListener('mouseleave', arrowAnimateExit);
    
function arrowAnimateExit() {
    document.getElementById("scrollArrowjs").src = "images/greyArrowLVL1.png";

}

// Function for scroll

var headerheight = document.getElementById("header").offsetHeight;

x.addEventListener('click', arrowScroll);

function arrowScroll() {
    window.scrollTo(0, headerheight);

}

// Sticky Nav Bar 

// could not get Flexbox to work with position fixed for now will leave out

const nav = document.getElementById("navbar");

const navTop = nav.offsetTop;

function stickyNavBar() {
    if (window.scrollY >= navTop){
       document.body.classList.add('sticky')
    }
    else{
        document.body.classList.remove("sticky");
    }
}

window.addEventListener('scroll', stickyNavBar);