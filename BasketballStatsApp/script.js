var list = [];

function getCareerPointsLeaders(type) {
  if (type === 'Career Points') {
    list = [
      { player: 'LeBron James', points: 38879 },
      { player: 'Kareem Abdul-Jabbar', points: 38387 },
      { player: 'Karl Malone', points: 36928 },
      { player: 'Kobe Bryant', points: 33643 },
      { player: 'Michael Jordan', points: 32292 },
      { player: 'Dirk Nowitzki', points: 31560 },
      { player: 'Wilt Chamberlain', points: 31419 },
      { player: 'Julius Erving', points: 30026 },
      { player: 'Moses Malone', points: 29580 },
      { player: 'Shaquille O\'Neal', points: 28596 },
      { player: 'Carmelo Anthony', points: 28289 },
      { player: 'Dan Issel', points: 27482 },
      { player: 'Elvin Hayes', points: 27313 },
      { player: 'Kevin Durant', points: 27164 },
      { player: 'Hakeem Olajuwon', points: 26946 },
      { player: 'Oscar Robertson', points: 26710 },
      { player: 'Dominique Wilkins', points: 26668 },
      { player: 'George Gervin', points: 26595 },
      { player: 'Tim Duncan', points: 26496 },
      { player: 'Paul Pierce', points: 26397 },
      { player: 'John Havlicek', points: 26395 },
      { player: 'Kevin Garnett', points: 26071 },
      { player: 'Vince Carter', points: 25728 },
      { player: 'Alex English', points: 25613 },
      { player: 'Rick Barry', points: 25279 },
      { player: 'Reggie Miller', points: 25279 },
      { player: 'Jerry West', points: 25192 },
      { player: 'Artis Gilmore', points: 24941 },
      { player: 'Patrick Ewing', points: 24815 },
      { player: 'James Harden', points: 24736 },
      { player: 'Russell Westbrook', points: 24577 },
      { player: 'Ray Allen', points: 24505 },
      { player: 'Allen Iverson', points: 24368 },
      { player: 'Charles Barkley', points: 23757 },
      { player: 'Robert Parish', points: 23334 },
      { player: 'Adrian Dantley', points: 23177 },
      { player: 'Dwyane Wade', points: 23165 },
      { player: 'Elgin Baylor', points: 23149 },
      { player: 'Clyde Drexler', points: 22195 },
      { player: 'Stephen Curry', points: 22012 },
      { player: 'DeMar DeRozan', points: 21878 },
      { player: 'Chris Paul', points: 21843 },
      { player: 'Gary Payton', points: 21813 },
      { player: 'Larry Bird', points: 21791 },
      { player: 'Hal Greer', points: 21586 },
      { player: 'Walt Bellamy', points: 20941 },
      { player: 'Pau Gasol', points: 20894 },
      { player: 'Bob Pettit', points: 20880 },
      { player: 'David Robinson', points: 20790 },
      { player: 'LaMarcus Aldridge', points: 20558 },
    ];
  }
}

function searchForPlayer(name) {
    for (var i = 0; i < list.length; i++) {
        var listName = list[i].player;
        if (listName.toLowerCase() === name.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

