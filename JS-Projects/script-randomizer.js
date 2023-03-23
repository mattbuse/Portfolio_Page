function toggleName1() {
    if (button1.innerHTML === '-') {
        button1.innerHTML = '+';
        id1.innerHTML = '';
    } else if (button1.innerHTML === '+') {
        button1.innerHTML = '-';
        id1.innerHTML = 'Julie';
    }
}

function toggleName2() {
    if (button2.innerHTML === '-') {
        button2.innerHTML = '+';
        id2.innerHTML = '';
    } else if (button2.innerHTML === '+') {
        button2.innerHTML = '-';
        id2.innerHTML = 'Victoria';
    }
}

function toggleName3() {
    if (button3.innerHTML === '-') {
        button3.innerHTML = '+';
        id3.innerHTML = '';
    } else if (button3.innerHTML === '+') {
        button3.innerHTML = '-';
        id3.innerHTML = 'Megan';
    }
}

function toggleName4() {
    if (button4.innerHTML === '-') {
        button4.innerHTML = '+';
        id4.innerHTML = '';
    } else if (button4.innerHTML === '+') {
        button4.innerHTML = '-';
        id4.innerHTML = 'Shannan';
    }
}

function toggleName5() {
    if (button5.innerHTML === '-') {
        button5.innerHTML = '+';
        id5.innerHTML = '';
    } else if (button5.innerHTML === '+') {
        button5.innerHTML = '-';
        id5.innerHTML = 'Sara';
    }
}

function toggleName6() {
    if (button6.innerHTML === '-') {
        button6.innerHTML = '+';
        id6.innerHTML = '';
    } else if (button6.innerHTML === '+') {
        button6.innerHTML = '-';
        id6.innerHTML = 'Matt';
    }
}

function getArray() {
    let name1 = document.getElementById('id1').innerHTML;
    let name2 = document.getElementById('id2').innerHTML;
    let name3 = document.getElementById('id3').innerHTML;
    let name4 = document.getElementById('id4').innerHTML;
    let name5 = document.getElementById('id5').innerHTML;
    let name6 = document.getElementById('id6').innerHTML;
    let namesArray = [name1, name2, name3, name4, name5, name6];
    let finalArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        if (namesArray[i].length > 1) {
            finalArray.push(namesArray[i]);
        }
    }
    getRandomArray(finalArray);
}

// fisher-yates algorithm... //
function getRandomArray(array) {
    let j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;   
    }
    results.style.visibility = 'visible';
    randomButton.style.visibility = 'hidden';
    randomList.innerHTML = array;
}

function resetPage() {
    id1.innerHTML = ' Julie';
    id2.innerHTML = ' Victoria';
    id3.innerHTML = ' Megan';
    id4.innerHTML = ' Shannan';
    id5.innerHTML = ' Sara';
    id6.innerHTML = ' Matt';
    button1.innerHTML = '-';
    button2.innerHTML = '-';
    button3.innerHTML = '-';
    button4.innerHTML = '-';
    button5.innerHTML = '-';
    button6.innerHTML = '-';
    results.style.visibility = 'hidden';
    randomButton.style.visibility = 'visible';
}

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let button4 = document.getElementById('button4');
let button5 = document.getElementById('button5');
let button6 = document.getElementById('button6');

let randomButton = document.getElementById('randomize');
let randomList = document.getElementById('random-list');
let results = document.getElementById('results');
let reset = document.getElementById('reset');

let id1 = document.getElementById('id1');
let id2 = document.getElementById('id2');
let id3 = document.getElementById('id3');
let id4 = document.getElementById('id4');
let id5 = document.getElementById('id5');
let id6 = document.getElementById('id6');

let name1 = document.getElementById('id1').innerHTML;
let name2 = document.getElementById('id2').innerHTML;
let name3 = document.getElementById('id3').innerHTML;
let name4 = document.getElementById('id4').innerHTML;
let name5 = document.getElementById('id5').innerHTML;
let name6 = document.getElementById('id6').innerHTML;

let namesArray = [name1, name2, name3, name4, name5, name6];

button1.addEventListener('click',toggleName1);
button2.addEventListener('click',toggleName2);
button3.addEventListener('click',toggleName3);
button4.addEventListener('click',toggleName4);
button5.addEventListener('click',toggleName5);
button6.addEventListener('click',toggleName6);

randomButton.addEventListener('click',getArray);
reset.addEventListener('click',resetPage);