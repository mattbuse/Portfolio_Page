let moreInfo = document.getElementById('more-about');
let moreAbout = document.getElementById('more-about-text');
let hideMoreInfo = document.getElementById('hide-again');

let showMore = function(event) {
    moreInfo.style.display = 'none';
    moreAbout.style.display = 'block';
}

let hideAgain = function(event) {
    moreInfo.style.display = 'block';
    moreAbout.style.display = 'none';
}

moreInfo.addEventListener('click',showMore);
hideMoreInfo.addEventListener('click',hideAgain);