function switchAll() {
    if (allButton.innerHTML === 'Expand All') {
    oneSections.style.display = 'block';
    twoSections.style.display = 'block';
    threeSections.style.display = 'block';
    fourSections.style.display = 'block';
    fiveSections.style.display = 'block';
    sixSections.style.display = 'block';
    allButton.innerHTML = 'Collapse All';
    oneButton.innerHTML = 'Collapse';
    twoButton.innerHTML = 'Collapse';
    threeButton.innerHTML = 'Collapse';
    fourButton.innerHTML = 'Collapse';
    fiveButton.innerHTML = 'Collapse';
    sixButton.innerHTML = 'Collapse';
    } else if (allButton.innerHTML === 'Collapse All') {
        oneSections.style.display = 'none';
        twoSections.style.display = 'none';
        threeSections.style.display = 'none';
        fourSections.style.display = 'none';
        fiveSections.style.display = 'none';
        sixSections.style.display = 'none';
        allButton.innerHTML = 'Expand All';
        oneButton.innerHTML = 'Expand';
        twoButton.innerHTML = 'Expand';
        threeButton.innerHTML = 'Expand';
        fourButton.innerHTML = 'Expand';
        fiveButton.innerHTML = 'Expand';
        sixButton.innerHTML = 'Expand';
    }
}

function oneSwitch() {
    if (oneButton.innerHTML === 'Expand') {
    oneSections.style.display = 'block';
    oneButton.innerHTML = 'Collapse';
    } else if (oneButton.innerHTML === 'Collapse') {
        oneSections.style.display = 'none';
        oneButton.innerHTML = 'Expand';
    }
}

function twoSwitch() {
    if (twoButton.innerHTML === 'Expand') {
    twoSections.style.display = 'block';
    twoButton.innerHTML = 'Collapse';
    } else if (twoButton.innerHTML === 'Collapse') {
        twoSections.style.display = 'none';
        twoButton.innerHTML = 'Expand';
    }
}

function threeSwitch() {
    if (threeButton.innerHTML === 'Expand') {
    threeSections.style.display = 'block';
    threeButton.innerHTML = 'Collapse';
    } else if (threeButton.innerHTML === 'Collapse') {
        threeSections.style.display = 'none';
        threeButton.innerHTML = 'Expand';
    }
}

function fourSwitch() {
    if (fourButton.innerHTML === 'Expand') {
    fourSections.style.display = 'block';
    fourButton.innerHTML = 'Collapse';
    } else if (fourButton.innerHTML === 'Collapse') {
        fourSections.style.display = 'none';
        fourButton.innerHTML = 'Expand';
    }
}

function fiveSwitch() {
    if (fiveButton.innerHTML === 'Expand') {
    fiveSections.style.display = 'block';
    fiveButton.innerHTML = 'Collapse';
    } else if (fiveButton.innerHTML === 'Collapse') {
        fiveSections.style.display = 'none';
        fiveButton.innerHTML = 'Expand';
    }
}

function sixSwitch() {
    if (sixButton.innerHTML === 'Expand') {
    sixSections.style.display = 'block';
    sixButton.innerHTML = 'Collapse';
    } else if (sixButton.innerHTML === 'Collapse') {
        sixSections.style.display = 'none';
        sixButton.innerHTML = 'Expand';
    }
}

let allButton = document.getElementById('everything');
let oneButton = document.getElementById('unit-one');
let twoButton = document.getElementById('unit-two');
let threeButton = document.getElementById('unit-three');
let fourButton = document.getElementById('unit-four');
let fiveButton = document.getElementById('unit-five');
let sixButton = document.getElementById('unit-six');

let oneSections = document.getElementById('unit-one-sections');
let twoSections = document.getElementById('unit-two-sections');
let threeSections = document.getElementById('unit-three-sections');
let fourSections = document.getElementById('unit-four-sections');
let fiveSections = document.getElementById('unit-five-sections');
let sixSections = document.getElementById('unit-six-sections');

allButton.addEventListener('click',switchAll);
oneButton.addEventListener('click',oneSwitch);
twoButton.addEventListener('click',twoSwitch);
threeButton.addEventListener('click',threeSwitch);
fourButton.addEventListener('click',fourSwitch);
fiveButton.addEventListener('click',fiveSwitch);
sixButton.addEventListener('click',sixSwitch);
