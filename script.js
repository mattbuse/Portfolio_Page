let moreInfo = document.getElementById('more-about');
let moreAbout = document.getElementById('more-about-text');
let hideMoreInfo = document.getElementById('hide-again');

let showMore = function(event) {
    moreInfo.style.visibility = 'collapse';
    moreAbout.style.visibility = 'visible';
}

let hideAgain = function(event) {
    moreInfo.style.visibility = 'visible';
    moreAbout.style.visibility = 'collapse';
}

moreInfo.addEventListener('click',showMore);
hideMoreInfo.addEventListener('click',hideAgain);