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
        team = 'Niners';
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
        team = 'Warriors';
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
        team = 'Lightning';
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
        team = 'Panthers';
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
        team = 'Guardians';
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
    let number = Math.floor(Math.random() * 5);
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
        howEarly = 'have a losing record';
    } else if (earlyNumber === 1) {
        howEarly = 'miss the playoffs';
    } else {
        howEarly = 'lose in the first round';
    }
    return howEarly;
}

const championship = () => {
    let sport = document.getElementById('sport').value;
    let finalRound;
    if (sport === 'NFL' || sport === 'nfl' || sport === 'Nfl') {
        finalRound = 'Super Bowl';
    } else if (sport === 'NBA' || sport === 'nba' || sport === 'Nba') {
        finalRound = 'NBA Finals';
    } else if (sport === 'NHL' || sport === 'nhl' || sport === 'Nhl') {
        finalRound = 'Stanley Cup';
    } else if (sport === 'MLB' || sport === 'mlb' || sport === 'Mlb') {
        finalRound = 'World Series';
    }
    return finalRound;
}

const goingToBet = (team,amount,finalRound) => {
    strangerAdvice.innerHTML = `I've got $${amount} on the ${team} to win the ${finalRound} this year.`;
    reset.style.visibility = 'visible';
}

const optimisticFan = (underdog,goFar) => {
    strangerAdvice.innerHTML = `It might sound crazy, but I think the ${underdog} can ${goFar} next year.`;
    reset.style.visibility = 'visible';
}

const overratedTeam = (team,loseEarly) => {
    strangerAdvice.innerHTML = `Everybody likes the ${team}, but I think they'll ${loseEarly}.`;
    reset.style.visibility = 'visible';
}

const chalkPick = (team) => {
    strangerAdvice.innerHTML = `As long as they stay healthy, nobody can beat the ${team} this year!`;
    reset.style.visibility = 'visible';
}

const randomSportsAdvice = (sport) => {
    sport = document.getElementById('sport').value;
    if (sport === 'NFL' || sport === 'nfl' || sport === 'Nfl' || sport === 'Football' || sport === 'football') {
    let advNum = Math.floor(Math.random() * 5);
    if (advNum === 0) {
        goingToBet(goodnflTeam(),betAmount(),championship());
    } else if (advNum === 1) {
        optimisticFan(underdognflTeam(),goFar());
    } else if (advNum === 2) {
        overratedTeam(goodnflTeam(),loseEarly());
    } else if (advNum === 3) {
        chalkPick(goodnflTeam());
    } else {
        strangerAdvice.innerHTML = 'I don\'t know, man. It\'s probably all fixed anyway.';
        reset.style.visibility = 'visible';
    }
    } else if (sport === 'NBA' || sport === 'nba' || sport === 'Nba' || sport === 'Basketball' || sport === 'basketball') {
        let advNum = Math.floor(Math.random() * 5);
        if (advNum === 0) {
            goingToBet(goodnbaTeam(),betAmount(),championship());
        } else if (advNum === 1) {
            optimisticFan(underdognbaTeam(),goFar());
        } else if (advNum === 2) {
            overratedTeam(goodnbaTeam(),loseEarly());
        } else if (advNum === 3) {
            chalkPick(goodnbaTeam());
        } else {
            strangerAdvice.innerHTML = 'I don\'t know, man. It\'s probably all fixed anyway.';
            reset.style.visibility = 'visible';
        }
    
    } else if (sport === 'MLB' || sport === 'mlb' || sport === 'Mlb' || sport === 'Baseball' || sport === 'baseball') {
        let advNum = Math.floor(Math.random() * 5);
        if (advNum === 0) {
            goingToBet(goodmlbTeam(),betAmount(),championship());
        } else if (advNum === 1) {
            optimisticFan(underdogmlbTeam(),goFar());
        } else if (advNum === 2) {
            overratedTeam(goodmlbTeam(),loseEarly());
        } else if (advNum === 3) {
            chalkPick(goodmlbTeam());
        } else {
            strangerAdvice.innerHTML = 'I don\'t know, man. It\'s probably all fixed anyway.';
            reset.style.visibility = 'visible';
        }
    } else if (sport === 'NHL' || sport === 'nhl' || sport === 'Nhl' || sport === 'Hockey' || sport === 'hockey') {
        let advNum = Math.floor(Math.random() * 5);
        if (advNum === 0) {
            goingToBet(goodnhlTeam(),betAmount(),championship());
        } else if (advNum === 1) {
            optimisticFan(underdognhlTeam(),goFar());
        } else if (advNum === 2) {
            overratedTeam(goodnhlTeam(),loseEarly());
        } else if (advNum === 3) {
            chalkPick(goodnhlTeam());
        } else {
            strangerAdvice.innerHTML = 'I don\'t know, man. It\'s probably all fixed anyway.';
            reset.style.visibility = 'visible';
        }
    } else {
        (sport.length < 1 ? strangerAdvice.innerHTML = 'What\'s your favorite sport?' : strangerAdvice.innerHTML = 'Sorry, I don\'t really watch that sport.');
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