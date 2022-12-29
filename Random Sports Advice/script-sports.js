const goodnflTeam = () => {
    let team;
    let nflteamNum = Math.floor(Math.random() * 4);
    if (nflteamNum === 0) {
        team = 'Chiefs';
    } else if (nflteamNum === 1) {
        team = 'Bills';
    } else if (nflteamNum === 2) {
        team = 'Eagles';
    } else {
        team = 'Cowboys';
    }
    return team;
}

const goodnbaTeam = () => {
    let team;
    let nbateamNum = Math.floor(Math.random() * 4);
    if (nbateamNum === 0) {
        team = 'Celtics';
    } else if (nbateamNum === 1) {
        team = 'Bucks';
    } else if (nbateamNum === 2) {
        team = 'Suns';
    } else {
        team = 'Grizzlies';
    }
    return team;
}

const goodmlbTeam = () => {
    let team;
    let mlbteamNum = Math.floor(Math.random() * 4);
    if (mlbteamNum === 0) {
        team = 'Yankees';
    } else if (mlbteamNum === 1) {
        team = 'Astros';
    } else if (mlbteamNum === 2) {
        team = 'Dodgers';
    } else {
        team = 'Phillies';
    }
    return team;
}

const goodnhlTeam = () => {
    let team;
    let nhlteamNum = Math.floor(Math.random() * 4);
    if (nhlteamNum === 0) {
        team = 'Bruins';
    } else if (nhlteamNum === 1) {
        team = 'Devils';
    } else if (nhlteamNum === 2) {
        team = 'Stars';
    } else {
        team = 'Golden Knights';
    }
    return team;
}

const underdognflTeam = () => {
    let team;
    let nflteamNum = Math.floor(Math.random() * 4);
    if (nflteamNum === 0) {
        team = 'Broncos';
    } else if (nflteamNum === 1) {
        team = 'Texans';
    } else if (nflteamNum === 2) {
        team = 'Cardinals';
    } else {
        team = 'Bears';
    }
    return team;
}

const underdognbaTeam = () => {
    let team;
    let nbateamNum = Math.floor(Math.random() * 4);
    if (nbateamNum === 0) {
        team = 'Pistons';
    } else if (nbateamNum === 1) {
        team = 'Hornets';
    } else if (nbateamNum === 2) {
        team = 'Spurs';
    } else {
        team = 'Thunder';
    }
    return team;
}

const underdogmlbTeam = () => {
    let team;
    let mlbteamNum = Math.floor(Math.random() * 4);
    if (mlbteamNum === 0) {
        team = 'Indians';
    } else if (mlbteamNum === 1) {
        team = 'Mariners';
    } else if (mlbteamNum === 2) {
        team = 'Marlins';
    } else {
        team = 'Rockies';
    }
    return team;
}

const underdognhlTeam = () => {
    let team;
    let nhlteamNum = Math.floor(Math.random() * 4);
    if (nhlteamNum === 0) {
        team = 'Flyers';
    } else if (nhlteamNum === 1) {
        team = 'Sabres';
    } else if (nhlteamNum === 2) {
        team = 'Blackhawks';
    } else {
        team = 'Ducks';
    }
    return team;
}

const betAmount = () => {
    let number = Math.floor(Math.random() * 10);
    let amount = (number + 1) * 50;
    return amount;
}

const goFar = () => {
    let howFar;
    let farNumber = Math.floor(Math.random() * 3);
    if (farNumber === 0) {
        howFar = 'have a winning record';
    } else if (farNumber === 1) {
        howFar = 'make the playoffs';
    } else {
        howFar = 'win it all';
    }
    return howFar;
}

const loseEarly = () => {
    let howEarly;
    let earlyNumber = Math.floor(Math.random() * 3);
    if (earlyNumber === 0) {
        howEarly = 'will have a losing record';
    } else if (earlyNumber === 1) {
        howEarly = 'won\'t even make the playoffs';
    } else {
        howEarly = 'won\'t even get past the first round';
    }
    return howEarly;
}


const goingToBet = (team,amount) => {
    strangerAdvice.innerHTML = `I've got $${amount} on the ${team} to win it all this year!`;
    reset.style.visibility = 'visible';
}

const optimisticFan = (underdog,goFar) => {
    strangerAdvice.innerHTML = `Call me crazy, but I think the ${underdog} can ${goFar} this year!`;
    reset.style.visibility = 'visible';
}

const overratedTeam = (team,loseEarly) => {
    strangerAdvice.innerHTML = `I don't care what they all say, the ${team} ${loseEarly} this year!`;
    reset.style.visibility = 'visible';
}

const chalkPick = (team) => {
    strangerAdvice.innerHTML = `If you ask me, nobody can beat the ${team} this year!`;
    reset.style.visibility = 'visible';
}

const randomSportsAdvice = (sport) => {
    sport = document.getElementById('sport').value;
    if (sport === 'NFL' || sport === 'nfl') {
    let advNum = Math.floor(Math.random() * 4);
    if (advNum === 0) {
        goingToBet(goodnflTeam(),betAmount());
    } else if (advNum === 1) {
        optimisticFan(underdognflTeam(),goFar());
    } else if (advNum === 2) {
        overratedTeam(goodnflTeam(),loseEarly());
    } else if (advNum === 3) {
        chalkPick(goodnflTeam());
    } else {
        strangerAdvice.innerHTML = 'I don\'t know, man. You probably don\'t want my advice.';
        reset.style.visibility = 'visible';
    }
    } else if (sport === 'NBA' || sport === 'nba') {
        let advNum = Math.floor(Math.random() * 4);
        if (advNum === 0) {
            goingToBet(goodnbaTeam(),betAmount());
        } else if (advNum === 1) {
            optimisticFan(underdognbaTeam(),goFar());
        } else if (advNum === 2) {
            overratedTeam(goodnbaTeam(),loseEarly());
        } else if (advNum === 3) {
            chalkPick(goodnbaTeam());
        } else {
            strangerAdvice.innerHTML = 'I don\'t know, man. You probably don\'t want my advice.';
            reset.style.visibility = 'visible';
        }
    
    } else if (sport === 'MLB' || sport === 'mlb') {
        let advNum = Math.floor(Math.random() * 4);
        if (advNum === 0) {
            goingToBet(goodmlbTeam(),betAmount());
        } else if (advNum === 1) {
            optimisticFan(underdogmlbTeam(),goFar());
        } else if (advNum === 2) {
            overratedTeam(goodmlbTeam(),loseEarly());
        } else if (advNum === 3) {
            chalkPick(goodmlbTeam());
        } else {
            strangerAdvice.innerHTML = 'I don\'t know, man. You probably don\'t want my advice.';
            reset.style.visibility = 'visible';
        }
    } else if (sport === 'NHL' || sport === 'nhl') {
        let advNum = Math.floor(Math.random() * 4);
        if (advNum === 0) {
            goingToBet(goodnhlTeam(),betAmount());
        } else if (advNum === 1) {
            optimisticFan(underdognhlTeam(),goFar());
        } else if (advNum === 2) {
            overratedTeam(goodnhlTeam(),loseEarly());
        } else if (advNum === 3) {
            chalkPick(goodnhlTeam());
        } else {
            strangerAdvice.innerHTML = 'I don\'t know, man. You probably don\'t want my advice.';
            reset.style.visibility = 'visible';
        }
    } else {
        strangerAdvice.innerHTML = 'Sorry, I don\'t really watch that sport.';
        reset.style.visibility = 'visible';
        }
}

function resetScreen() {
    strangerAdvice.innerHTML = '';
    reset.style.visibility = 'hidden';
    document.getElementById('sport').value = '';    
}

let askForAdvice = document.getElementById('ask');
//let sport = document.getElementById('sport').value;
let strangerAdvice = document.getElementById('advice');
let reset = document.getElementById('reset');

askForAdvice.addEventListener('click',randomSportsAdvice);
reset.addEventListener('click',resetScreen);