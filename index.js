// START:: Get the variables
var form = $('#form');
var numbers = $('#numbers-input');
var icons = $('#icons-input');
var player1 = $('#player1-input');
var player2 = $('#player2-input');
var player3 = $('#player3-input');
var player4 = $('#player4-input');
var fxf = $('#fxf-input');
var sxs = $('#sxs-input');
var main = $('.main-container');
var overall = $('.overall');
var restart = $('.restart');
var newgame = $('.newgame');



form.on('submit', function (event) {
  event.preventDefault();

  // START:: Numbers, multiple users and 4x4 grid checked
  if (numbers.is(':checked') && fxf.is(':checked') && !player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('fxfmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    //The middle div
    function handledivs() {
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = shuf_numbers[i];

        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    function handleplayers() {
      for (let players = 1; players <= numberOfPlayers; players++) {
        let playerDiv = document.createElement('div');
        playerDiv.classList.add('playersdown'); // Add the "players" class to the playerDiv

        let p = document.createElement('div');
        p.classList.add('playername');
        p.innerText = 'Player ' + players;

        let h = document.createElement('div');
        h.classList.add('scorename')
        function getRandomNumber() {
          return Math.floor(Math.random() * 9) + 1;
        }
        const randomNum = getRandomNumber();
        h.innerText = randomNum;

        playerDiv.appendChild(p); // Append the <p> element to playerDiv
        playerDiv.appendChild(h); // Append the <h1> element to playerDiv

        down.appendChild(playerDiv);

        if (players === 2) {
          playerDiv.style.backgroundColor = 'rgb(253, 162, 20)';
          h.style.color = 'rgb(255, 255, 255)';
          p.style.color = 'rgb(255, 255, 255)';
        }
      }


    }

    handleplayers();

    let currentDiv = document.createElement('div');
    currentDiv.classList.add('current');
    currentDiv.innerText = 'Current Turn';

    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down, currentDiv);
  }
  // END:: Numbers, multiple users and 4x4 grid checked

  // START:: Numbers, multiple users and 6x6 grid checked
  else if (numbers.is(':checked') && sxs.is(':checked') && !player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('sxsmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    function handledivs() {
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'sxsitem';
        box.innerHTML = shuf_numbers[i];

        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    function handleplayers() {
      for (let players = 1; players <= numberOfPlayers; players++) {
        let playerDiv = document.createElement('div');
        playerDiv.classList.add('playersdown'); // Add the "players" class to the playerDiv

        let p = document.createElement('div');
        p.classList.add('playername');
        p.innerText = 'Player ' + players;

        let h = document.createElement('div');
        h.classList.add('scorename')
        function getRandomNumber() {
          return Math.floor(Math.random() * 9) + 1;
        }
        const randomNum = getRandomNumber();
        h.innerText = randomNum;

        playerDiv.appendChild(p); // Append the <p> element to playerDiv
        playerDiv.appendChild(h); // Append the <h1> element to playerDiv

        down.appendChild(playerDiv);

        if (players === 2) {
          playerDiv.style.backgroundColor = 'rgb(253, 162, 20)';
          h.style.color = 'rgb(255, 255, 255)';
          p.style.color = 'rgb(255, 255, 255)';
        }
      }


    }

    handleplayers();

    let currentDiv = document.createElement('div');
    currentDiv.classList.add('current');
    currentDiv.innerText = 'Current Turn';

    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down, currentDiv);
  }
  // END:: Numbers, multiple users and 6x6 grid checked

  // START:: Numbers, 1 users and 6x6 grid checked
  else if (numbers.is(':checked') && sxs.is(':checked') && player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('sxsmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    function handledivs() {
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'sxsitem';
        box.innerHTML = shuf_numbers[i];

        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    let timeDiv = document.createElement('div');
    timeDiv.classList.add('timediv');

    let timetitle = document.createElement('div');
    timetitle.classList.add('timetitle');
    timetitle.innerHTML = 'Time:';

    let time = document.createElement('div');
    time.classList.add('time');
    time.innerText = '02';

    timeDiv.append(timetitle);
    timeDiv.append(time);


    let movesDiv = document.createElement('div');
    movesDiv.classList.add('movesdiv');

    let movestitle = document.createElement('div');
    movestitle.classList.add('movestitle');
    movestitle.innerHTML = 'Moves:';

    let moves = document.createElement('div');
    time.classList.add('moves');
    moves.innerText = '7';

    movesDiv.append(movestitle);
    movesDiv.append(moves);


    down.appendChild(timeDiv); // Add timeDiv to "down" element
    down.appendChild(movesDiv); // Add movesDiv to "down" element

    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down);
  }
  // END:: Numbers, multiple users and 6x6 grid checked


  // START:: icons, multiple users and 6x6 grid checked
  else if (icons.is(':checked') && sxs.is(':checked') && !player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('sxsmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    function handledivs() {
      const numbers = ["anchor", "flask", "hand-spock", "certificate", "snowflake", "sun", "moon", "hourglass-half", "expand-arrows-alt", "retweet", "sync", "compress-arrows-alt", "random", "balance-scale", "apple-alt", "graduation-cap", "wifi", "euro-sign", "anchor", "flask", "hand-spock", "futbal", "snowflake", "sun", "moon", "hourglass-half", "expand-arrows-alt", "retweet", "sync", "compress-arrows-alt", "random", "balance-scale", "apple-alt", "graduation-cap", "wifi", "euro-sign"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'sxsitem';
        let iclass = document.createElement('i');
        iclass.classList.add('fa', 'fa-' + shuf_numbers[i]);
        box.append(iclass);
        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    function handleplayers() {
      for (let players = 1; players <= numberOfPlayers; players++) {
        let playerDiv = document.createElement('div');
        playerDiv.classList.add('playersdown'); // Add the "players" class to the playerDiv

        let p = document.createElement('div');
        p.classList.add('playername');
        p.innerText = 'Player ' + players;

        let h = document.createElement('div');
        h.classList.add('scorename')
        function getRandomNumber() {
          return Math.floor(Math.random() * 9) + 1;
        }
        const randomNum = getRandomNumber();
        h.innerText = randomNum;

        playerDiv.appendChild(p); // Append the <p> element to playerDiv
        playerDiv.appendChild(h); // Append the <h1> element to playerDiv

        down.appendChild(playerDiv);

        if (players === 2) {
          playerDiv.style.backgroundColor = 'rgb(253, 162, 20)';
          h.style.color = 'rgb(255, 255, 255)';
          p.style.color = 'rgb(255, 255, 255)';
        }
      }


    }

    handleplayers();

    let currentDiv = document.createElement('div');
    currentDiv.classList.add('current');
    currentDiv.innerText = 'Current Turn';

    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down, currentDiv);
  }
  // END:: Icons, multiple users and 6x6 grid checked

  // START:: icons, 1 users and 6x6 grid checked
  else if (icons.is(':checked') && sxs.is(':checked') && player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('sxsmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    function handledivs() {
      const numbers = ["anchor", "flask", "hand-spock", "futbal", "snowflake", "sun", "moon", "hourglass-half", "expand-arrows-alt", "retweet", "sync", "compress-arrows-alt", "random", "balance-scale", "apple-alt", "graduation-cap", "wifi", "euro-sign", "anchor", "flask", "hand-spock", "futbal", "snowflake", "sun", "moon", "hourglass-half", "expand-arrows-alt", "retweet", "sync", "compress-arrows-alt", "random", "balance-scale", "apple-alt", "graduation-cap", "wifi", "euro-sign"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'sxsitem';
        let iclass = document.createElement('i');
        iclass.classList.add('fa', 'fa-' + shuf_numbers[i]);
        box.append(iclass);
        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    let timeDiv = document.createElement('div');
    timeDiv.classList.add('timediv');

    let timetitle = document.createElement('div');
    timetitle.classList.add('timetitle');
    timetitle.innerHTML = 'Time:';

    let time = document.createElement('div');
    time.classList.add('time');
    time.innerText = '02';

    timeDiv.append(timetitle);
    timeDiv.append(time);


    let movesDiv = document.createElement('div');
    movesDiv.classList.add('movesdiv');

    let movestitle = document.createElement('div');
    movestitle.classList.add('movestitle');
    movestitle.innerHTML = 'Moves:';

    let moves = document.createElement('div');
    moves.classList.add('moves');
    moves.innerText = '7';

    movesDiv.append(movestitle);
    movesDiv.append(moves);


    down.appendChild(timeDiv); // Add timeDiv to "down" element
    down.appendChild(movesDiv); // Add movesDiv to "down" element



    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down);
  }
  // END:: Icons, 1 users and 6x6 grid checked


  // START:: Icons, multiple users and 4x4 grid checked
  else if (icons.is(':checked') && fxf.is(':checked') && !player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('fxfmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    // The middle div
    function handledivs() {
      const numbers = ["anchor", "flask", "hand-spock", "sun", "hourglass-half", "moon", "random", "apple-alt", "anchor", "flask", "hand-spock", "sun", "hourglass-half", "moon", "random", "apple-alt"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        let iclass = document.createElement('i');
        iclass.classList.add('fa', 'fa-' + shuf_numbers[i]);
        box.append(iclass);
        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    function handleplayers() {
      for (let players = 1; players <= numberOfPlayers; players++) {
        let playerDiv = document.createElement('div');
        playerDiv.classList.add('playersdown'); // Add the "players" class to the playerDiv

        let p = document.createElement('div');
        p.classList.add('playername');
        p.innerText = 'Player ' + players;

        let h = document.createElement('div');
        h.classList.add('scorename')
        function getRandomNumber() {
          return Math.floor(Math.random() * 9) + 1;
        }
        const randomNum = getRandomNumber();
        h.innerText = randomNum;

        playerDiv.appendChild(p); // Append the <p> element to playerDiv
        playerDiv.appendChild(h); // Append the <h1> element to playerDiv

        down.appendChild(playerDiv);

        if (players === 2) {
          playerDiv.style.backgroundColor = 'rgb(253, 162, 20)';
          h.style.color = 'rgb(255, 255, 255)';
          p.style.color = 'rgb(255, 255, 255)';
        }
      }


    }

    handleplayers();

    let currentDiv = document.createElement('div');
    currentDiv.classList.add('current');
    currentDiv.innerText = 'Current Turn';

    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down, currentDiv);
  }
  // END:: Icons, multiple users and 4x4 grid checked


  // START:: Numbers, 1 users and 4x4 grid checked
  else if (numbers.is(':checked') && fxf.is(':checked') && player1.is(':checked')) {
    let numberOfPlayers;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('fxfmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    // The middle div
    function handledivs() {
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = shuf_numbers[i];
        box.onclick = function () {
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  alert('WIN');
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    let timeDiv = document.createElement('div');
    timeDiv.classList.add('timediv');

    let timetitle = document.createElement('div');
    timetitle.classList.add('timetitle');
    timetitle.innerHTML = 'Time:';

    let time = document.createElement('div');
    time.classList.add('time');
    time.innerText = '02';

    timeDiv.append(timetitle);
    timeDiv.append(time);


    let movesDiv = document.createElement('div');
    movesDiv.classList.add('movesdiv');

    let movestitle = document.createElement('div');
    movestitle.classList.add('movestitle');
    movestitle.innerHTML = 'Moves:';

    let moves = document.createElement('div');
    moves.classList.add('moves');
    moves.innerText = '7';

    movesDiv.append(movestitle);
    movesDiv.append(moves);


    down.appendChild(timeDiv); // Add timeDiv to "down" element
    down.appendChild(movesDiv); // Add movesDiv to "down" element


    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down);
  }
  // END:: Numbers, 1 users and 4x4 grid checked


  // START:: Icons, 1 users and 4x4 grid checked

  else if (icons.is(':checked') && fxf.is(':checked') && player1.is(':checked')) {
    var numberOfMoves = 0;
    if (player4.is(':checked')) {
      numberOfPlayers = 4;
    } else if (player3.is(':checked')) {
      numberOfPlayers = 3;
    } else if (player2.is(':checked')) {
      numberOfPlayers = 2;
    }

    // Create three div elements
    let top = document.createElement('div');
    let main1 = document.createElement('div');
    let middle = document.createElement('div');
    let down = document.createElement('div');
    let memoryDiv = document.createElement('div');
    let startsDiv = document.createElement('div');
    let restartButton = document.createElement('button');
    let restartB = restartButton.classList.add('restart');
    restartButton.addEventListener('click', function (event) {
      alert('sssssssss');
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement('button');
    newgameButton.classList.add('newgame');
    newgameButton.innerText = "New Game";
    top.classList.add('top');
    middle.classList.add('fxfmiddle');
    down.classList.add('down');
    main1.classList.add('main1');
    top.append(memoryDiv, startsDiv);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement('img');
    logo.setAttribute('src', './starter-code/assets/logo.svg');

    memoryDiv.append(logo);

    // START:: The middle div
    function handledivs() {
      const numbers = ["anchor", "flask", "hand-spock", "sun", "hourglass-half", "moon", "random", "apple-alt", "anchor", "flask", "hand-spock", "sun", "hourglass-half", "moon", "random", "apple-alt"];
      var shuf_numbers = numbers.sort(() => (Math.random() > .5) ? 2 : -1);
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement('div');
        box.className = 'item';
        let iclass = document.createElement('i');
        iclass.classList.add('fa', 'fa-' + shuf_numbers[i]);
        box.append(iclass);
        var sec = 0;
        var isrunning = false;

        box.onclick = function () {
          if (!isrunning) {
            isrunning = true;
            setInterval(() => {
              time.innerText = '00:' + sec.toString().padStart(2, '0');
              sec++;
            }, 1000);
          }




          numberOfMoves += 0.5;
          moves.innerText = Math.floor(numberOfMoves);
          console.log(numberOfMoves);
          this.classList.add('boxOpen');
          setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
              if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                if (document.querySelectorAll('.boxMatch').length == numbers.length) {
                  // main1.style.opacity = 0.5;
                }
              } else {
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
              }
            }

          }, 500)
        }

        middle.appendChild(box);

      }
    }
    handledivs();

    let timeDiv = document.createElement('div');
    timeDiv.classList.add('timediv');

    let timetitle = document.createElement('div');
    timetitle.classList.add('timetitle');
    timetitle.innerHTML = 'Time:';

    let time = document.createElement('div');
    time.classList.add('time');

    timeDiv.append(timetitle);
    timeDiv.append(time);


    let movesDiv = document.createElement('div');
    movesDiv.classList.add('movesdiv');

    let movestitle = document.createElement('div');
    movestitle.classList.add('movestitle');
    movestitle.innerHTML = 'Moves:';

    let moves = document.createElement('div');
    moves.classList.add('moves');

    movesDiv.append(movestitle);
    movesDiv.append(moves);


    down.appendChild(timeDiv); // Add timeDiv to "down" element
    down.appendChild(movesDiv); // Add movesDiv to "down" element

    // START:: Result
    let winContainer = document.createElement('div');
    winContainer.classList.add('wincontainer');
    let didit = document.createElement('div');
    let didtop = document.createElement('div');
    didtop.classList.add('didtop');
    didtop.innerText = 'YOU DID IT'
    let diddown = document.createElement('div');
    diddown.classList.add('diddown');
    diddown.innerText = 'Game over! Here"s how you got on...';
    didit.append(didtop);
    didit.append(diddown);

    let elapse = document.createElement('div');
    elapse.classList.add('elapse');
    let elapsetitle = document.createElement('div');
    elapsetitle.classList.add('elapsetitle');
    elapsetitle.innerText = 'Time Elapsed';
    elapse.append(elapsetitle);
    let elapsetime = document.createElement('div');
    elapsetime.classList.add('elapsetitle');
    elapsetime.innerText = '0052';
    elapse.append(elapsetime);

    let movestaken = document.createElement('div');
    movestaken.classList.add('movestaken');
    let movestaken_title = document.createElement('div');
    movestaken_title.classList.add('movestaken_title');
    movestaken.innerText = 'Moves Taken';
    movestaken.append(movestaken_title);
    let movestaken_time = document.createElement('div');
    movestaken_time.classList.add('movestaken_time');
    movestaken_time.innerText = '72 Moves';
    elapse.append(movestaken_time);

    let winstarts = document.createElement('div');
    let winrestart = document.createElement('div');
    winrestart.classList.add('winrestart');
    winrestart.innerText = 'Restart';
    winstarts.append(winrestart);
    let winsetup = document.createElement('div');
    winsetup.classList.add('winsetup');
    winsetup.innerText = 'Setup New Game';
    winsetup.append(winrestart);
    

    winContainer.append(didit, elapse, movestaken)

    // Remove existing content from the "main" element
    overall.empty();


    // Append the new div elements to the "main" element
    overall.append(main1);
    main1.append(top, middle, down, winContainer);
  }
  // END:: Icons, 1 users and 4x4 grid checked



});




