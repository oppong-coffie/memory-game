// START:: Get the variables
var form = document.getElementById("form");
var numbers = document.getElementById("numbers-input");
var icons = document.getElementById("icons-input");
var player1 = document.getElementById("player1-input");
var player2 = document.getElementById("player2-input");
var player3 = document.getElementById("player3-input");
var player4 = document.getElementById("player4-input");
var fxf = document.getElementById("fxf-input");
var sxs = document.getElementById("sxs-input");
var main = document.querySelector(".main-container");
var overall = document.querySelector(".overall");
var restart = document.querySelector(".restart");
var newgame = document.querySelector(".newgame");


let playercount = [0, 0, 0, 0];
let currentplayer = 1;
let numberOfPlayers = 0;

form.addEventListener("submit", function (event) {
event.preventDefault();
  // START:: Numbers, multiple users and 4x4 grid checked
  if (numbers.checked && fxf.checked && !player1.checked) {
    if (player4.checked) {
      numberOfPlayers = 4;
    } else if (player3.checked) {
      numberOfPlayers = 3;
    } else if (player2.checked) {
      numberOfPlayers = 2;
    }
  
    let top = document.createElement("div");
    let main1 = document.createElement("div");
    let middle = document.createElement("div");
    let down = document.createElement("div");
    let memoryDiv = document.createElement("div");
    let startsDiv = document.createElement("div");
    startsDiv.classList.add('startDivDesktop');
    let restartButton = document.createElement("button");
    restartButton.classList.add("restart");
    restartButton.addEventListener("click", function (event) {
      document.querySelector('.playersdown.active-player').classList.remove('active-player');
      currentplayer = 1;
      document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
      playercount[0] = 0;
      playercount[1] = 0;
      playercount[2] = 0;
      playercount[3] = 0;
      const playerwinCount = document.querySelectorAll('.scorename');
      playerwinCount.forEach(function (element) {
        element.textContent = 0;
      });
      document.querySelectorAll(".item").forEach(function (element) {
        element.classList.remove("boxMatch");
        element.classList.remove("boxOpen");
      });
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement("button");
    newgameButton.classList.add("newgame");
    newgameButton.innerText = "New Game";
    newgameButton.addEventListener("click", function (event) {
      location.reload();
    });
  
    let startsDiv2 = document.createElement('div');
    startsDiv2.classList.add('startsDiv2');
    startsDiv2.innerText = "Menu";
    let restart2 = document.createElement('li');
    restart2.innerText = 'Restart';
  
    restart2.addEventListener("click", function (event) {
      document.querySelector('.playersdown.active-player').classList.remove('active-player');
      currentplayer = 1;
      document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
      playercount[0] = 0;
      playercount[1] = 0;
      playercount[2] = 0;
      playercount[3] = 0;
      const playerwinCount = document.querySelectorAll('.scorename');
      playerwinCount.forEach(function (element) {
        element.textContent = 0;
      });
      document.querySelectorAll(".item").forEach(function (element) {
        element.classList.remove("boxMatch");
        element.classList.remove("boxOpen");
      });
    });
  
    let newgame2 = document.createElement('li');
    newgame2.innerText = 'New Game';
    newgame2.addEventListener("click", function (event) {
      location.reload();
    });
    startsDiv2.addEventListener("click", function (event) {
      startsDiv2.append(restart2, newgame2);
    });
  
    top.classList.add("top");
    middle.classList.add("fxfmiddle");
    down.classList.add("down");
    main1.classList.add("main1");
    top.append(memoryDiv, startsDiv, startsDiv2);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement("img");
    logo.setAttribute("src", "./logo.svg");
    memoryDiv.append(logo);
  
    function handledivs() {
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"];
  
      function switchplayer() {
        document.querySelector('.playersdown.active-player').classList.remove('active-player');
        currentplayer = (currentplayer % numberOfPlayers) + 1;
        document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
      }
  
      var shuf_numbers = numbers.sort(() => (Math.random() > 0.5 ? 2 : -1));
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.innerHTML = shuf_numbers[i];
  
        box.onclick = function () {
          this.classList.add("boxOpen");
          setTimeout(function () {
            if (document.querySelectorAll(".boxOpen").length > 1) {
              if (document.querySelectorAll(".boxOpen")[0].innerHTML == document.querySelectorAll(".boxOpen")[1].innerHTML) {
                document.querySelectorAll(".boxOpen")[0].classList.add("boxMatch");
                document.querySelectorAll(".boxOpen")[1].classList.add("boxMatch");
  
                document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
                document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
                const playerwinCount = document.querySelector('.playersdown.active-player .scorename');
                playercount[currentplayer - 1]++;
                playerwinCount.textContent = playercount[currentplayer - 1];
  
                if (document.querySelectorAll(".boxMatch").length == numbers.length) {
                  for (let i = 0; i < numberOfPlayers; i++) {
                    let elapse = document.createElement("div");
                    elapse.classList.add("elapse");
                    let elapsetitle = document.createElement("div");
                    elapsetitle.classList.add("elapsetitle");
                    elapsetitle.innerText = "Player " + (i + 1);
                    elapse.append(elapsetitle);
                    let elapsetime = document.createElement("div");
                    elapsetime.classList.add("elapsetitletime");
                    elapsetime.innerText = playercount[i];
                    elapse.append(elapsetime);
                    winContainer.append(elapse);
                  }
                  main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                  main1.style.backdropFilter = "blur(5px)";
                  winContainer.style.marginTop = "-37rem";
                  main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                  main1.style.backdropFilter = "blur(5px)";
                  winContainer.style.marginTop = "-37rem";
                }
              } else {
                document.querySelectorAll(".boxOpen")[1].classList.remove("boxOpen");
                document.querySelectorAll(".boxOpen")[0].classList.remove("boxOpen");
                switchplayer();
              }
            }
          }, 500);
        };
  
        middle.appendChild(box);
      }
    }
    handledivs();
  
    function handleplayers() {
      for (let players = 1; players <= numberOfPlayers; players++) {
        let playerDiv = document.createElement("div");
        playerDiv.classList.add("playersdown");
        let p = document.createElement("div");
        p.classList.add("playername");
        p.innerText = "Player " + players;
  
        let h = document.createElement("div");
        h.classList.add("scorename");
        h.innerText = playercount[1];
  
        playerDiv.appendChild(p);
        playerDiv.appendChild(h);
        down.appendChild(playerDiv);
  
        if (players === currentplayer) {
          playerDiv.classList.add("active-player");
        }
      }
    }
  
    handleplayers();
  
    let currentDiv = document.createElement("div");
    currentDiv.classList.add("current");
    currentDiv.innerText = "Current Turn";
  
    let winContainer = document.createElement("div");
    winContainer.classList.add("wincontainer");
  
    let didit = document.createElement("div");
    let didtop = document.createElement("div");
    didtop.classList.add("didtop");
    didtop.innerText = "YOU DID IT";
  
    let diddown = document.createElement("div");
    diddown.classList.add("diddown");
    diddown.innerText = 'Game over! Here"s how you got on...';
  
    didit.appendChild(didtop);
    didit.appendChild(diddown);
    winContainer.appendChild(didit);
  
    overall.innerHTML = ''; // Clear existing content
  
    overall.appendChild(main1);
    main1.appendChild(top);
    main1.appendChild(middle);
    main1.appendChild(down);
    main1.appendChild(currentDiv);
  
    overall.appendChild(winContainer);
  }
    // END:: Numbers, multiple users and 4x4 grid checked

  

    // START:: Numbers, multiple users and 6x6 grid checked
   else if (numbers.checked && sxs.checked && !player1.checked) {
    let numberOfPlayers;
    if (player4.checked) {
      numberOfPlayers = 4;
    } else if (player3.checked) {
      numberOfPlayers = 3;
    } else if (player2.checked) {
      numberOfPlayers = 2;
    }

    let top = document.createElement("div");
    let main1 = document.createElement("div");
    let middle = document.createElement("div");
    let down = document.createElement("div");
    let memoryDiv = document.createElement("div");
    let startsDiv = document.createElement("div");
    startsDiv.classList.add('startDivDesktop');
    let restartButton = document.createElement("button");
    restartButton.classList.add("restart");
    restartButton.addEventListener("click", function (event) {
      document.querySelector('.playersdown.active-player').classList.remove('active-player');
      currentplayer = 1;
      document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
      playercount[0] = 0;
      playercount[1] = 0;
      playercount[2] = 0;
      playercount[3] = 0;
      const playerwinCount = document.querySelectorAll('.scorename');
      playerwinCount.forEach(function (element) {
        element.textContent = 0;
      });
      document.querySelectorAll(".sxsitem").forEach(function (element) {
        element.classList.remove("boxMatch");
        element.classList.remove("boxOpen");
      });
    });
    restartButton.innerText = "Restart";
    let newgameButton = document.createElement("button");
    newgameButton.classList.add("newgame");
    newgameButton.innerText = "New Game";
    newgameButton.addEventListener("click", function (event) {
      location.reload();
    });

    let startsDiv2 = document.createElement('div');
    startsDiv2.classList.add('startsDiv2');
    startsDiv2.innerText = "Menu";
    let restart2 = document.createElement('li');
    restart2.innerText = 'Restart';
    restart2.addEventListener("click", function (event) {
      document.querySelector('.playersdown.active-player').classList.remove('active-player');
      currentplayer = 1;
      document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
      playercount[0] = 0;
      playercount[1] = 0;
      playercount[2] = 0;
      playercount[3] = 0;
      const playerwinCount = document.querySelectorAll('.scorename');
      playerwinCount.forEach(function (element) {
        element.textContent = 0;
      });
      document.querySelectorAll(".sxsitem").forEach(function (element) {
        element.classList.remove("boxMatch");
        element.classList.remove("boxOpen");
      });
    });
    let newgame2 = document.createElement('li');
    newgame2.innerText = 'New Game';
    newgame2.addEventListener("click", function (event) {
      location.reload();
    });
    startsDiv2.addEventListener("click", function (event) {
      startsDiv2.append(restart2, newgame2);
    });

    top.classList.add("top");
    middle.classList.add("sxsmiddle");
    down.classList.add("down");
    main1.classList.add("main1");
    top.append(memoryDiv, startsDiv, startsDiv2);
    startsDiv.append(restartButton, newgameButton);
    let logo = document.createElement("img");
    logo.setAttribute("src", "./logo.svg");
    memoryDiv.append(logo);

    function handledivs() {
      const numbers = [
        "1", "2", "3", "4", "5", "6", "7", "8",
        "9", "10", "11", "12", "13", "14", "15", "16",
        "17", "18", "1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12", "13", "14",
        "15", "16", "17", "18",
      ];

      function switchplayer() {
        document.querySelector('.playersdown.active-player').classList.remove('active-player');
        currentplayer = (currentplayer % numberOfPlayers) + 1;
        document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
      }

      var shuf_numbers = numbers.sort(() => (Math.random() > 0.5 ? 2 : -1));
      for (var i = 0; i < numbers.length; i++) {
        let box = document.createElement("div");
        box.className = "sxsitem";
        box.innerHTML = shuf_numbers[i];

        box.onclick = function () {
          this.classList.add("boxOpen");
          setTimeout(function () {
            if (document.querySelectorAll(".boxOpen").length > 1) {
              if (document.querySelectorAll(".boxOpen")[0].innerHTML == document.querySelectorAll(".boxOpen")[1].innerHTML) {
                document.querySelectorAll(".boxOpen")[0].classList
                .add("boxMatch");
                document
                  .querySelectorAll(".boxOpen")[1]
                  .classList.add("boxMatch");

                document
                  .querySelectorAll(".boxOpen")[1]
                  .classList.remove("boxOpen");
                document
                  .querySelectorAll(".boxOpen")[0]
                  .classList.remove("boxOpen");

                const playerwinCount = document.querySelector('.playersdown.active-player .scorename');
                playercount[currentplayer - 1]++;
                playerwinCount.textContent = playercount[currentplayer - 1];

                if (document.querySelectorAll(".boxMatch").length == numbers.length) {
                  for (let i = 0; i < numberOfPlayers; i++) {
                    let elapse = document.createElement("div");
                    elapse.classList.add("elapse");
                    let elapsetitle = document.createElement("div");
                    elapsetitle.classList.add("elapsetitle");
                    elapsetitle.innerText = "Player " + (i + 1);
                    elapse.append(elapsetitle);
                    let elapsetime = document.createElement("div");
                    elapsetime.classList.add("elapsetitletime");
                    elapsetime.innerText = playercount[i];
                    elapse.append(elapsetime);
                    winContainer.append(elapse);
                  }

                  // When all the boxes are opened
                  main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                  main1.style.backdropFilter = "blur(5px)";
                  winContainer.style.marginTop = "-37rem";
                }
              } else {
                document
                  .querySelectorAll(".boxOpen")[1]
                  .classList.remove("boxOpen");
                document
                  .querySelectorAll(".boxOpen")[0]
                  .classList.remove("boxOpen");
                switchplayer();
              }
            }
          }, 500);
        };

        middle.appendChild(box);
      }
    }

    handledivs();

    function handleplayers() {
      for (let players = 1; players <= numberOfPlayers; players++) {
        let playerDiv = document.createElement("div");
        playerDiv.classList.add("playersdown");

        let p = document.createElement("div");
        p.classList.add("playername");
        p.innerText = "Player " + players;

        let h = document.createElement("div");
        h.classList.add("scorename");

        h.innerText = playercount[1];

        playerDiv.appendChild(p);
        playerDiv.appendChild(h);
        down.appendChild(playerDiv);

        if (players === currentplayer) {
          playerDiv.classList.add("active-player");
        }
      }
    }

    handleplayers();

    let currentDiv = document.createElement("div");
    currentDiv.classList.add("current");
    currentDiv.innerText = "Current Turn";

    let winContainer = document.createElement("div");
    winContainer.classList.add("wincontainer");

    let didit = document.createElement("div");
    let didtop = document.createElement("div");
    didtop.classList.add("didtop");
    didtop.innerText = "YOU DID IT";

    let diddown = document.createElement("div");
    diddown.classList.add("diddown");
    diddown.innerText = 'Game over! Here"s how you got on...';

    didit.appendChild(didtop);
    didit.appendChild(diddown);
    winContainer.appendChild(didit);

    let winstarts = document.createElement("div");
    winstarts.classList.add("winstarts");
    let winrestart = document.createElement("div");
    winrestart.classList.add("winrestart");
    winrestart.innerText = "Restart";
    winstarts.appendChild(winrestart);
    let winsetup = document.createElement("div");
    winsetup.classList.add("winsetup");
    winsetup.innerText = "Setup New Game";
    winsetup.addEventListener("click", function (event) {
      location.reload();
  });
    winstarts.appendChild(winsetup);

    winContainer.appendChild(winstarts);

    overall.innerHTML = ''; // Clear existing content

    overall.appendChild(main1);
    main1.appendChild(top);
    main1.appendChild(middle);
    main1.appendChild(down);
    main1.appendChild(currentDiv);

    overall.appendChild(winContainer);
  }
      // END:: Numbers, multiple users and 6x6 grid checked


    // START:: Numbers, 1 users and 6x6 grid checked
    else if (numbers.checked && sxs.checked && player1.checked) {
      var numberOfMoves = 0;
      var sec = 0;
      var isrunning = false;
      var intervalId;
      if (player4.checked) {
        numberOfPlayers = 4;
      } else if (player3.checked) {
        numberOfPlayers = 3;
      } else if (player2.checked) {
        numberOfPlayers = 2;
      }
  
      // Create three div elements
      var top = document.createElement("div");
      var main1 = document.createElement("div");
      var middle = document.createElement("div");
      var down = document.createElement("div");
      var memoryDiv = document.createElement("div");
      var startsDiv = document.createElement("div");
      startsDiv.classList.add('startDivDesktop');
      var restartButton = document.createElement("button");
      restartButton.classList.add("restart");
      // restart under large screens
      restartButton.addEventListener("click", function (event) {
          numberOfMoves = 0;
          moves.innerText = numberOfMoves;
          sec = 0;
          clearInterval(intervalId);
          isrunning = false;
          time.innerText = "00:" + sec.toString().padStart(2, "0");
          document.querySelectorAll(".sxsitem").forEach(function (element) {
              element.classList.remove("boxMatch");
          });
      });
      restartButton.innerText = "Restart";
      var newgameButton = document.createElement("button");
      newgameButton.classList.add("newgame");
      newgameButton.innerText = "New Game";
      newgameButton.addEventListener("click", function (event) {
          location.reload();
      });
  
      // small screen
      var startsDiv2 = document.createElement('div');
      startsDiv2.classList.add('startsDiv2');
      startsDiv2.innerText = "Menu";
      var restart2 = document.createElement('li');
      restart2.innerText = 'Restart';
      // restart under small screens
      restart2.addEventListener("click", function (event) {
          numberOfMoves = 0;
          moves.innerText = numberOfMoves;
          sec = 0;
          clearInterval(intervalId);
          isrunning = false;
          time.innerText = "00:" + sec.toString().padStart(2, "0");
          document.querySelectorAll(".sxsitem").forEach(function (element) {
              element.classList.remove("boxMatch");
          });
      });
      var newgame2 = document.createElement('li');
      newgame2.innerText = 'New Game';
      newgame2.addEventListener("click", function (event) {
          location.reload();
      });
      startsDiv2.addEventListener("click", function (event) {
          startsDiv2.append(restart2, newgame2);
      });
  
      top.classList.add("top");
      middle.classList.add("sxsmiddle");
      down.classList.add("down");
      main1.classList.add("main1");
      top.append(memoryDiv, startsDiv, startsDiv2);
      startsDiv.append(restartButton, newgameButton);
      var logo = document.createElement("img");
      logo.setAttribute("src", "./logo.svg");
  
      memoryDiv.append(logo);
  
      function handledivs() {
          const numbers = [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
          ];
          var shuf_numbers = numbers.sort(() => (Math.random() > 0.5 ? 2 : -1));
          for (var i = 0; i < numbers.length; i++) {
              var box = document.createElement("div");
              box.className = "sxsitem";
              box.innerHTML = shuf_numbers[i];
  
              box.onclick = function () {
  
                  if (!isrunning) {
                      isrunning = true;
                      intervalId = setInterval(() => {
                          time.innerText = "00:" + sec.toString().padStart(2, "0");
                          elapsetime.innerText = "00:" + sec.toString().padStart(2, "0");
                          sec++;
                      }, 1000);
                  }
                  numberOfMoves += 0.5;
                  moves.innerText = Math.floor(numberOfMoves);
                  movestaken_time.innerText = numberOfMoves + "Moves";
  
                  this.classList.add("boxOpen");
                  setTimeout(function () {
                      if (document.querySelectorAll(".boxOpen").length > 1) {
                          if (
                              document.querySelectorAll(".boxOpen")[0].innerHTML ==
                              document.querySelectorAll(".boxOpen")[1].innerHTML
                          ) {
                              document
                                  .querySelectorAll(".boxOpen")[0]
                                  .classList.add("boxMatch");
                              document
                                  .querySelectorAll(".boxOpen")[1]
                                  .classList.add("boxMatch");
  
                              document
                                  .querySelectorAll(".boxOpen")[1]
                                  .classList.remove("boxOpen");
                              document
                                  .querySelectorAll(".boxOpen")[0]
                                  .classList.remove("boxOpen");

                            // when all boxes are opened
                              if (
                                  document.querySelectorAll(".boxMatch").length ==
                                  numbers.length
                              ) {
                                  winContainer.style.display = "block";
                                  main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                  main1.style.backdropFilter = "blur(5px)";
                                  winContainer.style.marginTop = "-35rem";
                                  clearInterval(intervalId);
                                  isrunning = false;
                              }
                          } else {
                              document
                                  .querySelectorAll(".boxOpen")[1]
                                  .classList.remove("boxOpen");
                              document
                                  .querySelectorAll(".boxOpen")[0]
                                  .classList.remove("boxOpen");
                          }
                      }
                  }, 500);
              };
  
              middle.appendChild(box);
          }
      }
      handledivs();
  
      var timeDiv = document.createElement("div");
      timeDiv.classList.add("timediv");
  
      var timetitle = document.createElement("div");
      timetitle.classList.add("timetitle");
      timetitle.innerHTML = "Time:";
  
      var time = document.createElement("div");
      time.classList.add("time");
      time.innerText = '00:00';
  
      timeDiv.append(timetitle);
      timeDiv.append(time);
  
      var movesDiv = document.createElement("div");
      movesDiv.classList.add("movesdiv");
  
      var movestitle = document.createElement("div");
      movestitle.classList.add("movestitle");
      movestitle.innerHTML = "Moves:";
  
      var moves = document.createElement("div");
      moves.classList.add("moves");
      moves.innerText = '0';
  
      movesDiv.append(movestitle);
      movesDiv.append(moves);
  
      down.appendChild(timeDiv); // Add timeDiv to "down" element
      down.appendChild(movesDiv); // Add movesDiv to "down" element
  
      // START:: Result
      var winContainer = document.createElement("div");
      winContainer.classList.add("wincontainer");
      var didit = document.createElement("div");
      var didtop = document.createElement("div");
      didtop.classList.add("didtop");
      didtop.innerText = "YOU DID IT";
      var diddown = document.createElement("div");
      diddown.classList.add("diddown");
      diddown.innerText = 'Game over! Here"s how you got on...';
      didit.append(didtop);
      didit.append(diddown);
  
      var elapse = document.createElement("div");
      elapse.classList.add("elapse");
      var elapsetitle = document.createElement("div");
      elapsetitle.classList.add("elapsetitle");
      elapsetitle.innerText = "Time Elapsed";
      elapse.append(elapsetitle);
      var elapsetime = document.createElement("div");
      elapsetime.classList.add("elapsetitletime");
      elapsetime.innerText = "1:52";
      elapse.append(elapsetime);
  
      var movestaken = document.createElement("div");
      movestaken.classList.add("movestaken");
      var movestaken_title = document.createElement("div");
      movestaken_title.classList.add("movestaken_time");
      movestaken.innerText = "Moves Taken";
      movestaken.append(movestaken_title);
      var movestaken_time = document.createElement("div");
      movestaken_time.classList.add("movestaken_time");
      movestaken_time.innerText = "72 Moves";
      movestaken.append(movestaken_time);
  
      var winstarts = document.createElement("div");
      winstarts.classList.add("winstarts");
      var winrestart = document.createElement("div");
      winrestart.classList.add("winrestart");
      winrestart.innerText = "Restart";
      winstarts.append(winrestart);
      var winsetup = document.createElement("div");
      winsetup.classList.add("winsetup");
      winsetup.innerText = "Setup New Game";
      winsetup.addEventListener("click", function (event) {
        location.reload();
    });
      winstarts.append(winsetup);
  
      winContainer.append(didit, elapse, movestaken, winstarts);
      // END:: Result
      // Remove existing content from the "main" element
      overall.innerHTML = "";
  
      // Append the new div elements to the "main" element
      overall.append(main1);
      main1.append(top, middle, down);
      overall.append(winContainer);
  }
      // END:: Numbers, 1 users and 6x6 grid checked

  
  

    // START:: icons, multiple users and 6x6 grid checked
    else if (icons.checked && sxs.checked && !player1.checked) {
      if (player4.checked) {
        numberOfPlayers = 4;
      } else if (player3.checked) {
        numberOfPlayers = 3;
      } else if (player2.checked) {
        numberOfPlayers = 2;
      }
  
      // Create three div elements
      let top = document.createElement("div");
      let main1 = document.createElement("div");
      let middle = document.createElement("div");
      let down = document.createElement("div");
      let memoryDiv = document.createElement("div");
      let startsDiv = document.createElement("div");
      startsDiv.classList.add('startDivDesktop');
      let restartButton = document.createElement("button");
      restartButton.classList.add("restart");
      restartButton.addEventListener("click", function (event) {
          document.querySelector('.playersdown.active-player').classList.remove('active-player');
          currentplayer = 1;
          document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
          playercount[0] = 0;
          playercount[1] = 0;
          playercount[2] = 0;
          playercount[3] = 0;
          const playerwinCount = document.querySelectorAll('.scorename');
          playerwinCount.forEach(function (element) {
              element.textContent = 0;
          });
          document.querySelectorAll(".sxsitem").forEach(function (element) {
              element.classList.remove("boxMatch");
              element.classList.remove("boxOpen");
          });
      });
      restartButton.innerText = "Restart";
      let newgameButton = document.createElement("button");
      newgameButton.classList.add("newgame");
      newgameButton.innerText = "New Game";
      newgameButton.addEventListener("click", function (event) {
          location.reload();
      });
  
      // small screen
      let startsDiv2 = document.createElement('div');
      startsDiv2.classList.add('startsDiv2');
      startsDiv2.innerText = "Menu";
      let restart2 = document.createElement('li');
      restart2.innerText = 'Restart';
      restart2.addEventListener("click", function (event) {
          document.querySelector('.playersdown.active-player').classList.remove('active-player');
          currentplayer = 1;
          document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
          playercount[0] = 0;
          playercount[1] = 0;
          playercount[2] = 0;
          playercount[3] = 0;
          const playerwinCount = document.querySelectorAll('.scorename');
          playerwinCount.forEach(function (element) {
              element.textContent = 0;
          });
          document.querySelectorAll(".sxsitem").forEach(function (element) {
              element.classList.remove("boxMatch");
              element.classList.remove("boxOpen");
          });
      });
      let newgame2 = document.createElement('li');
      newgame2.innerText = 'New Game';
      newgame2.addEventListener("click", function (event) {
          location.reload();
      });
      startsDiv2.addEventListener("click", function (event) {
          startsDiv2.append(restart2, newgame2);
      });
  
      top.classList.add("top");
      middle.classList.add("sxsmiddle");
      down.classList.add("down");
      main1.classList.add("main1");
      top.append(memoryDiv, startsDiv, startsDiv2);
      startsDiv.append(restartButton, newgameButton);
      let logo = document.createElement("img");
      logo.setAttribute("src", "./logo.svg");
  
      memoryDiv.append(logo);
  
      function handledivs() {
          const numbers = [
              "anchor", "flask", "hand-spock", "trophy", "snowflake", "sun", "moon", "hourglass-half",
              "expand-arrows-alt", "retweet", "sync", "compress-arrows-alt", "random", "balance-scale",
              "apple-alt", "graduation-cap", "wifi", "euro-sign", "anchor", "flask", "hand-spock", "trophy",
              "snowflake", "sun", "moon", "hourglass-half", "expand-arrows-alt", "retweet", "sync",
              "compress-arrows-alt", "random", "balance-scale", "apple-alt", "graduation-cap", "wifi", "euro-sign"
          ];
          function switchplayer() {
              document.querySelector('.playersdown.active-player').classList.remove('active-player');
              currentplayer = (currentplayer % numberOfPlayers) + 1;
              document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
          }
  
          var shuf_numbers = numbers.sort(() => (Math.random() > 0.5 ? 2 : -1));
          for (var i = 0; i < numbers.length; i++) {
              let box = document.createElement("div");
              box.className = "sxsitem";
              let iclass = document.createElement("i");
              iclass.classList.add("fa", "fa-" + shuf_numbers[i]);
              box.append(iclass);
              box.onclick = function () {
                  this.classList.add("boxOpen");
                  setTimeout(function () {
                      if (document.querySelectorAll(".boxOpen").length > 1) {
                          if (
                              document.querySelectorAll(".boxOpen")[0].innerHTML ==
                              document.querySelectorAll(".boxOpen")[1].innerHTML
                          ) {
                              document
                                  .querySelectorAll(".boxOpen")[0]
                                  .classList.add("boxMatch");
                              document
                                  .querySelectorAll(".boxOpen")[1]
                                  .classList.add("boxMatch");
  
                              document
                                  .querySelectorAll(".boxOpen")[1]
                                  .classList.remove("boxOpen");
                              document
                                  .querySelectorAll(".boxOpen")[0]
                                  .classList.remove("boxOpen");
  
                              const playerwinCount = document.querySelector('.playersdown.active-player .scorename');
                              playercount[currentplayer - 1]++;
                              playerwinCount.textContent = playercount[currentplayer - 1];
  
                              if (
                                  document.querySelectorAll(".boxMatch").length ==
                                  numbers.length
                              ) {
                                  for (let i = 0; i < numberOfPlayers; i++) {
                                      let elapse = document.createElement("div");
                                      elapse.classList.add("elapse");
                                      let elapsetitle = document.createElement("div");
                                      elapsetitle.classList.add("elapsetitle");
                                      elapsetitle.innerText = "Player " + (i + 1);
                                      elapse.append(elapsetitle);
                                      let elapsetime = document.createElement("div");
                                      elapsetime.classList.add("elapsetitletime");
                                      elapsetime.innerText = playercount[i];
                                      elapse.append(elapsetime);
                                      winContainer.append(elapse);
                                  }
                                  main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                  main1.style.backdropFilter = "blur(5px)";
                                  winContainer.style.marginTop = "-37rem";
                                  clearInterval(intervalId);
                                  isrunning = false;
                              }
                          } else {
                              document
                                  .querySelectorAll(".boxOpen")[1]
                                  .classList.remove("boxOpen");
                              document
                                  .querySelectorAll(".boxOpen")[0]
                                  .classList.remove("boxOpen");
                              switchplayer();
                          }
                      }
                  }, 500);
              };
  
              middle.appendChild(box);
          }
      }
      handledivs();
  
      function handleplayers() {
          for (let players = 1; players <= numberOfPlayers; players++) {
              let playerDiv = document.createElement("div");
              playerDiv.classList.add("playersdown");
  
              let p = document.createElement("div");
              p.classList.add("playername");
              p.innerText = "Player " + players;
  
              let h = document.createElement("div");
              h.classList.add("scorename");
  
              h.innerText = 0;
  
              playerDiv.appendChild(p);
              playerDiv.appendChild(h);
  
              down.appendChild(playerDiv);
  
              if (players === currentplayer) {
                  playerDiv.classList.add("active-player");
              }
          }
      }
  
      handleplayers();
  
      let currentDiv = document.createElement("div");
      currentDiv.classList.add("current");
      currentDiv.innerText = "Current Turn";
  
      // START:: Result
      let winContainer = document.createElement("div");
      winContainer.classList.add("wincontainer");
      let didit = document.createElement("div");
      let didtop = document.createElement("div");
      didtop.classList.add("didtop");
      didtop.innerText = "YOU DID IT";
      let diddown = document.createElement("div");
      diddown.classList.add("diddown");
      diddown.innerText = 'Game over! Here"s how you got on...';
      didit.append(didtop);
      didit.append(diddown);
      winContainer.append(didit);
  
      let winstarts = document.createElement("div");
      winstarts.classList.add("winstarts");
      let winrestart = document.createElement("div");
      winrestart.classList.add("winrestart");
      winrestart.innerText = "Restart";
      winrestart.addEventListener("click", function (event) {
        document.querySelector('.playersdown.active-player').classList.remove('active-player');
        currentplayer = 1;
        document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
        playercount[0] = 0;
        playercount[1] = 0;
        playercount[2] = 0;
        playercount[3] = 0;
        const playerwinCount = document.querySelectorAll('.scorename');
        playerwinCount.forEach(function (element) {
            element.textContent = 0;
        });
        document.querySelectorAll(".sxsitem").forEach(function (element) {
            element.classList.remove("boxMatch");
            element.classList.remove("boxOpen");
        });
    });
      winstarts.append(winrestart);
      let winsetup = document.createElement("div");
      winsetup.classList.add("winsetup");
      winsetup.innerText = "Setup New Game";
      winsetup.addEventListener("click", function (event) {
        location.reload();
    });
      winstarts.append(winsetup);
  
      winContainer.append(winstarts);
      // END:: Result
  
      // Remove existing content from the "main" element
      overall.innerHTML = "";
  
      // Append the new div elements to the "main" element
      overall.append(main1);
      main1.append(top, middle, down, currentDiv);
      overall.append(winContainer);
  }
      // END:: icons, multiple users and 6x6 grid checked

  



      // START:: Icons, 1 user and 6x6 grid checkedssw
      else if (icons.checked && sxs.checked && player1.checked) {
        var numberOfMoves = 0;
        var sec = 0;
        var isrunning = false;
        if (player4.checked) {
          numberOfPlayers = 4;
        } else if (player3.checked) {
          numberOfPlayers = 3;
        } else if (player2.checked) {
          numberOfPlayers = 2;
        }
    
        // Create three div elements
        let top = document.createElement("div");
        let main1 = document.createElement("div");
        let middle = document.createElement("div");
        let down = document.createElement("div");
        let memoryDiv = document.createElement("div");
        let startsDiv = document.createElement("div");
        startsDiv.classList.add('startDivDesktop');
        let restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        // restart under large screens
        restartButton.addEventListener("click", function (event) {
            numberOfMoves = 0;
            moves.innerText = numberOfMoves;
            sec = 0;
            clearInterval(intervalId);
            isrunning = false;
            time.innerText = "00:" + sec.toString().padStart(2, "0");
            document.querySelectorAll(".sxsitem").forEach(function (element) {
                element.classList.remove("boxMatch");
            });
        });
        restartButton.innerText = "Restart";
        let newgameButton = document.createElement("button");
        newgameButton.classList.add("newgame");
        newgameButton.innerText = "New Game";
        newgameButton.addEventListener("click", function (event) {
            location.reload();
        });
    
        // small screens
        let startsDiv2 = document.createElement('div');
        startsDiv2.classList.add('startsDiv2');
        startsDiv2.innerText = "Menu";
        let restart2 = document.createElement('li');
        restart2.innerText = 'Restart';
        // restart under small screens
        restart2.addEventListener("click", function (event) {
            numberOfMoves = 0;
            moves.innerText = numberOfMoves;
            sec = 0;
            clearInterval(intervalId);
            isrunning = false;
            time.innerText = "00:" + sec.toString().padStart(2, "0");
            document.querySelectorAll(".sxsitem").forEach(function (element) {
                element.classList.remove("boxMatch");
            });
        });
        let newgame2 = document.createElement('li');
        newgame2.innerText = 'New Game';
        newgame2.addEventListener("click", function (event) {
            location.reload();
        });
        startsDiv2.addEventListener("click", function (event) {
            startsDiv2.append(restart2, newgame2);
        });
    
        top.classList.add("top");
        middle.classList.add("sxsmiddle");
        down.classList.add("down");
        main1.classList.add("main1");
        top.append(memoryDiv, startsDiv, startsDiv2);
        startsDiv.append(restartButton, newgameButton);
        let logo = document.createElement("img");
        logo.setAttribute("src", "./logo.svg");
    
        memoryDiv.append(logo);
    
        function handledivs() {
            const numbers = [
                "anchor", "flask", "hand-spock", "trash", "snowflake", "sun", "moon", "hourglass-half",
                "expand-arrows-alt", "retweet", "sync", "compress-arrows-alt", "random", "balance-scale",
                "apple-alt", "graduation-cap", "wifi", "euro-sign", "anchor", "flask", "hand-spock", "trash",
                "snowflake", "sun", "moon", "hourglass-half", "expand-arrows-alt", "retweet", "sync",
                "compress-arrows-alt", "random", "balance-scale", "apple-alt", "graduation-cap", "wifi", "euro-sign"
            ];
            var shuf_numbers = numbers.sort(() => (Math.random() > 0.5 ? 2 : -1));
            for (var i = 0; i < numbers.length; i++) {
                let box = document.createElement("div");
                box.className = "sxsitem";
                let iclass = document.createElement("i");
                iclass.classList.add("fa", "fa-" + shuf_numbers[i]);
                box.append(iclass);
                box.onclick = function () {
    
    
                    if (!isrunning) {
                        isrunning = true;
                        intervalId = setInterval(() => {
                            time.innerText = "00:" + sec.toString().padStart(2, "0");
                            elapsetime.innerText = "00:" + sec.toString().padStart(2, "0");
                            sec++;
                        }, 1000);
                    }
                    numberOfMoves += 0.5;
                    moves.innerText = Math.floor(numberOfMoves);
                    movestaken_time.innerText = numberOfMoves + "Moves";
    
                    this.classList.add("boxOpen");
                    setTimeout(function () {
                        if (document.querySelectorAll(".boxOpen").length > 1) {
                            if (
                                document.querySelectorAll(".boxOpen")[0].innerHTML ==
                                document.querySelectorAll(".boxOpen")[1].innerHTML
                            ) {
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.add("boxMatch");
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.add("boxMatch");
    
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
    
                                if (
                                    document.querySelectorAll(".boxMatch").length ==
                                    numbers.length
                                ) {
                                    // WHEN ALL BOXES ARE OPENED;
                                    winContainer.style.display = "block";
                                    main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    main1.style.backdropFilter = "blur(5px)";
                                    winContainer.style.marginTop = "-37rem";
                                    main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    main1.style.backdropFilter = "blur(5px)";
                                    winContainer.style.marginTop = "-35rem";
                                    clearInterval(intervalId);
                                    isrunning = false;
                                }
                            } else {
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
                            }
                        }
                    }, 500);
                };
    
                middle.appendChild(box);
            }
        }
        handledivs();
    
        let timeDiv = document.createElement("div");
        timeDiv.classList.add("timediv");
    
        let timetitle = document.createElement("div");
        timetitle.classList.add("timetitle");
        timetitle.innerHTML = "Time:";
    
        let time = document.createElement("div");
        time.classList.add("time");
        time.innerText = '00:00';
    
        timeDiv.append(timetitle);
        timeDiv.append(time);
    
        let movesDiv = document.createElement("div");
        movesDiv.classList.add("movesdiv");
    
        let movestitle = document.createElement("div");
        movestitle.classList.add("movestitle");
        movestitle.innerHTML = "Moves:";
    
        let moves = document.createElement("div");
        moves.classList.add("moves");
        moves.innerText = '0';
    
        movesDiv.append(movestitle);
        movesDiv.append(moves);
    
        down.appendChild(timeDiv); // Add timeDiv to "down" element
        down.appendChild(movesDiv); // Add movesDiv to "down" element
    
        // START:: Result
        let winContainer = document.createElement("div");
        winContainer.classList.add("wincontainer");
        let didit = document.createElement("div");
        let didtop = document.createElement("div");
        didtop.classList.add("didtop");
        didtop.innerText = "YOU DID IT";
        let diddown = document.createElement("div");
        diddown.classList.add("diddown");
        diddown.innerText = 'Game over! Here"s how you got on...';
        didit.append(didtop);
        didit.append(diddown);
    
        let elapse = document.createElement("div");
        elapse.classList.add("elapse");
        let elapsetitle = document.createElement("div");
        elapsetitle.classList.add("elapsetitle");
        elapsetitle.innerText = "Time Elapsed";
        elapse.append(elapsetitle);
        let elapsetime = document.createElement("div");
        elapsetime.classList.add("elapsetitletime");
        elapsetime.innerText = "1:52";
        elapse.append(elapsetime);
    
        let movestaken = document.createElement("div");
        movestaken.classList.add("movestaken");
        let movestaken_title = document.createElement("div");
        movestaken_title.classList.add("movestaken_time");
        movestaken.innerText = "Moves Taken";
        movestaken.append(movestaken_title);
        let movestaken_time = document.createElement("div");
        movestaken_time.classList.add("movestaken_time");
        movestaken_time.innerText = "72 Moves";
        movestaken.append(movestaken_time);
    
        let winstarts = document.createElement("div");
        winstarts.classList.add("winstarts");
        let winrestart = document.createElement("div");
        winrestart.classList.add("winrestart");
        winrestart.innerText = "Restart";
        winrestart.addEventListener("click", function (event) {
          numberOfMoves = 0;
          moves.innerText = numberOfMoves;
          sec = 0;
          clearInterval(intervalId);
          isrunning = false;
          time.innerText = "00:" + sec.toString().padStart(2, "0");
          document.querySelectorAll(".sxsitem").forEach(function (element) {
              element.classList.remove("boxMatch");
          });
      });
        winstarts.append(winrestart);
        let winsetup = document.createElement("div");
        winsetup.classList.add("winsetup");
        winsetup.innerText = "Setup New Game";
        winsetup.addEventListener("click", function (event) {
          location.reload();
      });
        winstarts.append(winsetup);
    
        winContainer.append(didit, elapse, movestaken, winstarts);
        // END:: Result
        // Remove existing content from the "main" element
        overall.innerHTML = "";
    
        // Append the new div elements to the "main" element
        overall.append(main1);
        main1.append(top, middle, down);
        overall.append(winContainer);
    }
          // START:: Icons, 1 user and 6x6 grid checkedssw





      // START:: Numbers, 1 users and 4x4 grid checked
      else if (numbers.checked && fxf.checked && player1.checked) {
        var sec = 0;
        var isrunning = false;
        var numberOfMoves = 0;
        let intervalId;
        if (player4.checked) {
          numberOfPlayers = 4;
        } else if (player3.checked) {
          numberOfPlayers = 3;
        } else if (player2.checked) {
          numberOfPlayers = 2;
        }
    
        // Create three div elements
        let top = document.createElement("div");
        let main1 = document.createElement("div");
        let middle = document.createElement("div");
        let down = document.createElement("div");
        let memoryDiv = document.createElement("div");
        let startsDiv = document.createElement("div");
        startsDiv.classList.add('startDivDesktop');
        let restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        // restart under large screens
        restartButton.addEventListener("click", function (event) {
            numberOfMoves = 0;
            moves.innerText = numberOfMoves;
            sec = 0;
            clearInterval(intervalId);
            isrunning = false;
            time.innerText = "00:" + sec.toString().padStart(2, "0");
            document.querySelectorAll(".item").forEach(function (element) {
                element.classList.remove("boxMatch");
            });
        });
        restartButton.innerText = "Restart";
        let newgameButton = document.createElement("button");
        newgameButton.classList.add("newgame");
        newgameButton.innerText = "New Game";
        newgameButton.addEventListener("click", function (event) {
            location.reload();
        });
    
        // small screen
        let startsDiv2 = document.createElement('div');
        startsDiv2.classList.add('startsDiv2');
        startsDiv2.innerText = "Menu";
        let restart2 = document.createElement('li');
        restart2.innerText = 'Restart';
        // restart under small screens
        restart2.addEventListener("click", function (event) {
            numberOfMoves = 0;
            moves.innerText = numberOfMoves;
            sec = 0;
            clearInterval(intervalId);
            isrunning = false;
            time.innerText = "00:" + sec.toString().padStart(2, "0");
            document.querySelectorAll(".item").forEach(function (element) {
                element.classList.remove("boxMatch");
            });
        });
        let newgame2 = document.createElement('li');
        newgame2.innerText = 'New Game';
        newgame2.addEventListener("click", function (event) {
            location.reload();
        });
        startsDiv2.addEventListener("click", function (event) {
            startsDiv2.append(restart2, newgame2);
        });
    
        top.classList.add("top");
        middle.classList.add("fxfmiddle");
        down.classList.add("down");
        main1.classList.add("main1");
        top.append(memoryDiv, startsDiv, startsDiv2);
        startsDiv.append(restartButton, newgameButton);
        let logo = document.createElement("img");
        logo.setAttribute("src", "./logo.svg");
    
        memoryDiv.append(logo);
    
        // The middle div
        function handledivs() {
            const numbers = [
                "1", "2", "3", "4", "5", "6", "7", "8", "1", "2", "3", "4", "5", "6", "7", "8"
            ];
            var shuf_numbers = numbers.sort(() => (Math.random() > 0.5 ? 2 : -1));
            for (var i = 0; i < numbers.length; i++) {
                let box = document.createElement("div");
                box.className = "item";
                box.innerHTML = shuf_numbers[i];
                box.onclick = function () {
                    if (!isrunning) {
                        isrunning = true;
                        intervalId = setInterval(() => {
                            time.innerText = "00:" + sec.toString().padStart(2, "0");
                            elapsetime.innerText = "00:" + sec.toString().padStart(2, "0");
                            sec++;
                        }, 1000);
                    }
                    numberOfMoves += 0.5;
                    moves.innerText = Math.floor(numberOfMoves);
                    movestaken_time.innerText = numberOfMoves + "Moves";
    
                    this.classList.add("boxOpen");
                    setTimeout(function () {
                        if (document.querySelectorAll(".boxOpen").length > 1) {
                            if (
                                document.querySelectorAll(".boxOpen")[0].innerHTML ==
                                document.querySelectorAll(".boxOpen")[1].innerHTML
                            ) {
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.add("boxMatch");
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.add("boxMatch");
    
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
                                // WHEN ALL BOXES ARE OPENED
                                if (
                                    document.querySelectorAll(".boxMatch").length ==
                                    numbers.length
                                ) {
                                    winContainer.style.display = "block";
                                    main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    main1.style.backdropFilter = "blur(5px)";
                                    winContainer.style.marginTop = "-33rem";
                                    clearInterval(intervalId);
                                    isrunning = false;
                                }
                            } else {
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
                            }
                        }
                    }, 500);
                };
    
                middle.appendChild(box);
            }
        }
        handledivs();
    
        let timeDiv = document.createElement("div");
        timeDiv.classList.add("timediv");
    
        let timetitle = document.createElement("div");
        timetitle.classList.add("timetitle");
        timetitle.innerHTML = "Time:";
    
        let time = document.createElement("div");
        time.classList.add("time");
        time.innerText = "0:00";
    
        timeDiv.append(timetitle);
        timeDiv.append(time);
    
        let movesDiv = document.createElement("div");
        movesDiv.classList.add("movesdiv");
    
        let movestitle = document.createElement("div");
        movestitle.classList.add("movestitle");
        movestitle.innerHTML = "Moves:";
    
        let moves = document.createElement("div");
        moves.classList.add("moves");
        moves.innerText = "0";
    
        movesDiv.append(movestitle);
        movesDiv.append(moves);
    
        down.appendChild(timeDiv); // Add timeDiv to "down" element
        down.appendChild(movesDiv); // Add movesDiv to "down" element
    
        // START:: Result
        let winContainer = document.createElement("div");
        winContainer.classList.add("wincontainer");
        let didit = document.createElement("div");
        let didtop = document.createElement("div");
        didtop.classList.add("didtop");
        didtop.innerText = "YOU DID IT";
        let diddown = document.createElement("div");
        diddown.classList.add("diddown");
        diddown.innerText = 'Game over! Here"s how you got on...';
        didit.append(didtop);
        didit.append(diddown);
    
        let elapse = document.createElement("div");
        elapse.classList.add("elapse");
        let elapsetitle = document.createElement("div");
        elapsetitle.classList.add("elapsetitle");
        elapsetitle.innerText = "Time Elapsed";
        elapse.append(elapsetitle);
        let elapsetime = document.createElement("div");
        elapsetime.classList.add("elapsetitletime");
        elapse.append(elapsetime);
    
        let movestaken = document.createElement("div");
        movestaken.classList.add("movestaken");
        let movestaken_title = document.createElement("div");
        movestaken_title.classList.add("movestaken_time");
        movestaken.innerText = "Moves Taken";
        movestaken.append(movestaken_title);
        let movestaken_time = document.createElement("div");
        movestaken_time.classList.add("movestaken_time");
        movestaken.append(movestaken_time);
    
        let winstarts = document.createElement("div");
        winstarts.classList.add("winstarts");
        let winrestart = document.createElement("div");
        winrestart.classList.add("winrestart");
        winrestart.innerText = "Restart";
        winrestart.addEventListener("click", function (event) {
          numberOfMoves = 0;
          moves.innerText = numberOfMoves;
          sec = 0;
          clearInterval(intervalId);
          isrunning = false;
          time.innerText = "00:" + sec.toString().padStart(2, "0");
          document.querySelectorAll(".item").forEach(function (element) {
              element.classList.remove("boxMatch");
          });
      });
        winstarts.append(winrestart);
        let winsetup = document.createElement("div");
        winsetup.classList.add("winsetup");
        winsetup.innerText = "Setup New Game";
        winsetup.addEventListener("click", function (event) {
          location.reload();
      });
        winstarts.append(winsetup);
    
        winContainer.append(didit, elapse, movestaken, winstarts);
    
        // Remove existing content from the "main" element
        overall.innerHTML = "";
    
        // Append the new div elements to the "main" element
        overall.append(main1);
        main1.append(top, middle, down);
        overall.append(winContainer);
    }
      // END:: Numbers, 1 users and 4x4 grid checked



      // START:: Icons, 1 users and 4x4 grid checked
      else if (icons.checked && fxf.checked && player1.checked) {
        var numberOfMoves = 0;
        var sec = 0;
        var isrunning = false;
        
        if (player4.checked) {
          numberOfPlayers = 4;
        } else if (player3.checked) {
          numberOfPlayers = 3;
        } else if (player2.checked) {
          numberOfPlayers = 2;
        }
    
        // Create three div elements
        let top = document.createElement("div");
        let main1 = document.createElement("div");
        let middle = document.createElement("div");
        let down = document.createElement("div");
        let memoryDiv = document.createElement("div");
        let startsDiv = document.createElement("div");
        startsDiv.classList.add('startDivDesktop');
    
        // small screen
        let startsDiv2 = document.createElement('div');
        startsDiv2.classList.add('startsDiv2');
        startsDiv2.innerText = "Menu";
        let restart2 = document.createElement('li');
        restart2.innerText = 'Restart';
        // restart under small screens
        restart2.addEventListener("click", function (event) {
            numberOfMoves = 0;
            moves.innerText = numberOfMoves;
            sec = 0;
            clearInterval(intervalId);
            isrunning = false;
            time.innerText = "00:" + sec.toString().padStart(2, "0");
            document.querySelectorAll(".item").forEach(function (element) {
                element.classList.remove("boxMatch");
            });
        });
    
        let newgame2 = document.createElement('li');
        newgame2.innerText = 'New Game';
        newgame2.addEventListener("click", function (event) {
            location.reload();
        });
        startsDiv2.addEventListener("click", function (event) {
            startsDiv2.append(restart2, newgame2);
        });
    
        let restartButton = document.createElement("button");
        restartButton.classList.add("restart");
        restartButton.innerText = 'Restart';
        // restart under large screens
        restartButton.addEventListener("click", function (event) {
            numberOfMoves = 0;
            moves.innerText = numberOfMoves;
            sec = 0;
            clearInterval(intervalId);
            isrunning = false;
            time.innerText = "00:" + sec.toString().padStart(2, "0");
            document.querySelectorAll(".item").forEach(function (element) {
                element.classList.remove("boxMatch");
            });
        });
    
        let newgameButton = document.createElement("button");
        newgameButton.classList.add("newgame");
        newgameButton.innerText = "New Game";
        newgameButton.addEventListener("click", function (event) {
            location.reload();
        });
        top.classList.add("top");
        middle.classList.add("fxfmiddle");
        down.classList.add("down");
        main1.classList.add("main1");
        top.append(memoryDiv, startsDiv, startsDiv2);
        startsDiv.append(restartButton, newgameButton);
        let logo = document.createElement("img");
        logo.setAttribute("src", "./logo.svg");
    
        memoryDiv.append(logo);
    
        //The middle div
        function handledivs() {
            const icons = [
                "anchor", "flask", "hand-spock", "sun", "hourglass-half",
                "moon", "random", "apple-alt", "anchor", "flask", "hand-spock",
                "sun", "hourglass-half", "moon", "random", "apple-alt"
            ];
    
            var shuf_icons = icons.sort(() => (Math.random() > 0.5 ? 2 : -1));
    
            for (var i = 0; i < icons.length; i++) {
                let box = document.createElement("div");
                box.className = "item";
                let iclass = document.createElement("i");
                iclass.classList.add("fa", "fa-" + shuf_icons[i]);
                box.append(iclass);
    
                box.onclick = function () {
    
                    if (!isrunning) {
                        isrunning = true;
                        intervalId = setInterval(() => {
                            time.innerText = "00:" + sec.toString().padStart(2, "0");
                            elapsetime.innerText = "00:" + sec.toString().padStart(2, "0");
                            sec++;
                        }, 1000);
                    }
                    numberOfMoves += 0.5;
                    moves.innerText = Math.floor(numberOfMoves);
                    movestaken_time.innerText = numberOfMoves + "Moves";
    
                    this.classList.add("boxOpen");
                    setTimeout(function () {
                        if (document.querySelectorAll(".boxOpen").length > 1) {
                            if (
                                document.querySelectorAll(".boxOpen")[0].innerHTML ==
                                document.querySelectorAll(".boxOpen")[1].innerHTML
                            ) {
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.add("boxMatch");
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.add("boxMatch");
    
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
                                // WHEN ALL BOXES ARE OPENED
                                if (
                                    document.querySelectorAll(".boxMatch").length ==
                                    icons.length
                                ) {
                                    winContainer.style.display = "block";
                                    main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    main1.style.backdropFilter = "blur(5px)";
                                    winContainer.style.marginTop = "-33rem";
                                    clearInterval(intervalId);
                                    isrunning = false;
                                }
                            } else {
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
                            }
                        }
                    }, 500);
                };
    
                restart2.addEventListener("click", function (event) {
                    numberOfMoves = 0;
                });
    
                middle.appendChild(box);
            }
        }
        handledivs();
    
        let timeDiv = document.createElement("div");
        timeDiv.classList.add("timediv");
    
        let timetitle = document.createElement("div");
        timetitle.classList.add("timetitle");
        timetitle.innerHTML = "Time:";
    
        let time = document.createElement("div");
        time.classList.add("time");
        time.innerHTML = '0:00';
    
        timeDiv.append(timetitle);
        timeDiv.append(time);
    
        let movesDiv = document.createElement("div");
        movesDiv.classList.add("movesdiv");
    
        let movestitle = document.createElement("div");
        movestitle.classList.add("movestitle");
        movestitle.innerHTML = "Moves:";
    
        let moves = document.createElement("div");
        moves.classList.add("moves");
        moves.innerHTML = '0';
    
        movesDiv.append(movestitle);
        movesDiv.append(moves);
    
        down.appendChild(timeDiv); // Add timeDiv to "down" element
        down.appendChild(movesDiv); // Add movesDiv to "down" element
    
        // START:: Result
        let winContainer = document.createElement("div");
        winContainer.classList.add("wincontainer");
        let didit = document.createElement("div");
        let didtop = document.createElement("div");
        didtop.classList.add("didtop");
        didtop.innerText = "YOU DID IT";
        let diddown = document.createElement("div");
        diddown.classList.add("diddown");
        diddown.innerText = 'Game over! Here"s how you got on...';
        didit.append(didtop);
        didit.append(diddown);
    
        let elapse = document.createElement("div");
        elapse.classList.add("elapse");
        let elapsetitle = document.createElement("div");
        elapsetitle.classList.add("elapsetitle");
        elapsetitle.innerText = "Time Elapsed";
        elapse.append(elapsetitle);
        let elapsetime = document.createElement("div");
        elapsetime.classList.add("elapsetitletime");
        elapse.append(elapsetime);
    
        let movestaken = document.createElement("div");
        movestaken.classList.add("movestaken");
        let movestaken_title = document.createElement("div");
        movestaken_title.classList.add("movestaken_time");
        movestaken.innerText = "Moves Taken";
        movestaken.append(movestaken_title);
        let movestaken_time = document.createElement("div");
        movestaken_time.classList.add("movestaken_time");
        movestaken.append(movestaken_time);
    
        let winstarts = document.createElement("div");
        winstarts.classList.add("winstarts");
        let winrestart = document.createElement("div");
        winrestart.classList.add("winrestart");
        winrestart.innerText = "Restart";
        winrestart.addEventListener("click", function (event) {
          numberOfMoves = 0;
          moves.innerText = numberOfMoves;
          sec = 0;
          clearInterval(intervalId);
          isrunning = false;
          time.innerText = "00:" + sec.toString().padStart(2, "0");
          document.querySelectorAll(".item").forEach(function (element) {
              element.classList.remove("boxMatch");
          });
      });
        winstarts.append(winrestart);
        let winsetup = document.createElement("div");
        winsetup.classList.add("winsetup");
        winsetup.innerText = "Setup New Game";
        winsetup.addEventListener("click", function (event) {
          location.reload();
      });
        winstarts.append(winsetup);
    
        winContainer.append(didit, elapse, movestaken, winstarts);
        // END:: Result
    
        // Remove existing content from the "main" element
        overall.innerHTML = "";
    
        // Append the new div elements to the "main" element
        overall.append(main1);
        main1.append(top, middle, down);
        overall.append(winContainer);
    }
          // END:: Icons, 1 users and 4x4 grid checked

    
    

      // START:: Icons, multiple users and 4x4 grid checked
      else if (icons.checked && fxf.checked && !player1.checked) {

        if (player4.checked) {
          numberOfPlayers = 4;
        } else if (player3.checked) {
          numberOfPlayers = 3;
        } else if (player2.checked) {
          numberOfPlayers = 2;
        }
    
        // Create three div elements
        let top = document.createElement("div");
        let main1 = document.createElement("div");
        let middle = document.createElement("div");
        let down = document.createElement("div");
        let memoryDiv = document.createElement("div");
        let startsDiv = document.createElement("div");
        startsDiv.classList.add('startDivDesktop');
        let restartButton = document.createElement("button");
        restartButton.classList.add("restart");
    
        // restart on large screens
        restartButton.addEventListener("click", function (event) {
            document.querySelector('.playersdown.active-player').classList.remove('active-player');
            currentplayer = 1;
            document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
            playercount[0] = 0;
            playercount[1] = 0;
            playercount[2] = 0;
            playercount[3] = 0;
            const playerwinCount = document.querySelectorAll('.scorename');
            playerwinCount.forEach(function (element) {
                element.textContent = 0;
            });
            document.querySelectorAll(".item").forEach(function (element) {
                element.classList.remove("boxMatch");
                element.classList.remove("boxOpen");
            });
        });
    
        restartButton.innerText = "Restart";
        let newgameButton = document.createElement("button");
        newgameButton.classList.add("newgame");
        newgameButton.innerText = "New Game";
        newgameButton.addEventListener("click", function (event) {
            location.reload();
        });
    
        // small screen
        let startsDiv2 = document.createElement('div');
        startsDiv2.classList.add('startsDiv2');
        startsDiv2.innerText = "Menu";
        let restart2 = document.createElement('li');
        restart2.innerText = 'Restart';
    
        // restart on small screen
        restart2.addEventListener("click", function (event) {
            document.querySelector('.playersdown.active-player').classList.remove('active-player');
            currentplayer = 1;
            document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
            playercount[0] = 0;
            playercount[1] = 0;
            playercount[2] = 0;
            playercount[3] = 0;
            const playerwinCount = document.querySelectorAll('.scorename');
            playerwinCount.forEach(function (element) {
                element.textContent = 0;
            });
            document.querySelectorAll(".item").forEach(function (element) {
                element.classList.remove("boxMatch");
                element.classList.remove("boxOpen");
            });
        });
    
        let newgame2 = document.createElement('li');
        newgame2.innerText = 'New Game';
        newgame2.addEventListener("click", function (event) {
            location.reload();
        });
        startsDiv2.addEventListener("click", function (event) {
            startsDiv2.append(restart2, newgame2);
        });
    
        top.classList.add("top");
        middle.classList.add("fxfmiddle");
        down.classList.add("down");
        main1.classList.add("main1");
        top.append(memoryDiv, startsDiv, startsDiv2);
        startsDiv.append(restartButton, newgameButton);
        let logo = document.createElement("img");
        logo.setAttribute("src", "./logo.svg");
    
        memoryDiv.append(logo);
    
        // The middle div
        function handledivs() {
            const icons = [
                "anchor", "flask", "hand-spock", "sun", "hourglass-half",
                "moon", "random", "apple-alt", "anchor", "flask", "hand-spock",
                "sun", "hourglass-half", "moon", "random", "apple-alt"
            ];
    
            // FUNCTION TO SWITCH BETWEEN PLAYERS
            function switchplayer() {
                document.querySelector('.playersdown.active-player').classList.remove('active-player');
                currentplayer = (currentplayer % numberOfPlayers) + 1;
                document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
            }
    
            var shuf_icons = icons.sort(() => (Math.random() > 0.5 ? 2 : -1));
            for (var i = 0; i < icons.length; i++) {
                let box = document.createElement("div");
                box.className = "item";
                let iclass = document.createElement("i");
                iclass.classList.add("fa", "fa-" + shuf_icons[i]);
                box.append(iclass);
                box.onclick = function () {
                    this.classList.add("boxOpen");
                    setTimeout(function () {
                        if (document.querySelectorAll(".boxOpen").length > 1) {
                            if (
                                document.querySelectorAll(".boxOpen")[0].innerHTML ==
                                document.querySelectorAll(".boxOpen")[1].innerHTML
                            ) {
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.add("boxMatch");
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.add("boxMatch");
    
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
    
                                // display count for the player
                                const playerwinCount = document.querySelector('.playersdown.active-player .scorename');
                                playercount[currentplayer - 1]++;
                                playerwinCount.textContent = playercount[currentplayer - 1];
    
                                if (
                                    document.querySelectorAll(".boxMatch").length ==
                                    icons.length
                                ) {
                                    for (let i = 0; i < numberOfPlayers; i++) {
                                        let elapse = document.createElement("div");
                                        elapse.classList.add("elapse");
                                        let elapsetitle = document.createElement("div");
                                        elapsetitle.classList.add("elapsetitle");
                                        elapsetitle.innerText = "Player " + (i + 1);
                                        elapse.append(elapsetitle);
                                        let elapsetime = document.createElement("div");
                                        elapsetime.classList.add("elapsetitletime");
                                        elapsetime.innerText = playercount[i];
                                        elapse.append(elapsetime);
                                        scoreDiv.append(elapse);
                                    }
                                    // WHEN ALL BOXES ARE OPENED;
                                    winContainer.style.display = "block";
                                    main1.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                                    main1.style.backdropFilter = "blur(5px)";
                                    winContainer.style.marginTop = "-37rem";
                                    clearInterval(intervalId);
                                    isrunning = false;
                                }
                            } else {
                                document
                                    .querySelectorAll(".boxOpen")[1]
                                    .classList.remove("boxOpen");
                                document
                                    .querySelectorAll(".boxOpen")[0]
                                    .classList.remove("boxOpen");
                                switchplayer();
                            }
                        }
                    }, 500);
                };
    
                middle.appendChild(box);
            }
        }
        handledivs();
    
        function handleplayers() {
            for (let players = 1; players <= numberOfPlayers; players++) {
                let playerDiv = document.createElement("div");
                playerDiv.classList.add("playersdown"); // Add the "players" class to the playerDiv
    
                let p = document.createElement("div");
                p.classList.add("playername");
                p.innerText = "Player " + players;
    
                let h = document.createElement("div");
                h.classList.add("scorename");
    
                h.innerText = 0;
    
                playerDiv.appendChild(p); // Append the <p> element to playerDiv
                playerDiv.appendChild(h); // Append the <h1> element to playerDiv
    
                down.appendChild(playerDiv);
    
                if (players === currentplayer) {
                    playerDiv.classList.add("active-player");
                }
            }
        }
    
        handleplayers();
    
        let currentDiv = document.createElement("div");
        currentDiv.classList.add("current");
        currentDiv.innerText = "Current Turn";
    
        // START:: Result
        let winContainer = document.createElement("div");
        winContainer.classList.add("wincontainer");
        let didit = document.createElement("div");
        let didtop = document.createElement("div");
        didtop.classList.add("didtop");
        didtop.innerText = "YOU DID IT";
        let diddown = document.createElement("div");
        diddown.classList.add("diddown");
        diddown.innerText = 'Game over! Here"s how you got on...';
        didit.append(didtop);
        didit.append(diddown);
        winContainer.append(didit);
    
        let scoreDiv = document.createElement('div');
        winContainer.append(scoreDiv);
    
        let winstarts = document.createElement("div");
        winstarts.classList.add("winstarts");
        let winrestart = document.createElement("div");
        winrestart.classList.add("winrestart");
        winrestart.innerText = "Restart";
        winrestart.addEventListener("click", function (event) {
          document.querySelector('.playersdown.active-player').classList.remove('active-player');
          currentplayer = 1;
          document.querySelector('.playersdown:nth-child(' + currentplayer + ')').classList.add('active-player');
          playercount[0] = 0;
          playercount[1] = 0;
          playercount[2] = 0;
          playercount[3] = 0;
          const playerwinCount = document.querySelectorAll('.scorename');
          playerwinCount.forEach(function (element) {
              element.textContent = 0;
          });
          document.querySelectorAll(".item").forEach(function (element) {
              element.classList.remove("boxMatch");
              element.classList.remove("boxOpen");
          });
      });
        winstarts.append(winrestart);
        let winsetup = document.createElement("div");
        winsetup.classList.add("winsetup");
        winsetup.addEventListener("click", function (event) {
          location.reload();
      });
        winsetup.innerText = "Setup New Game";
        winstarts.append(winsetup);
    
        winContainer.append(winstarts);
        // END:: Result
    
        // Remove existing content from the "main" element
        overall.innerHTML = "";
    
        // Append the new div elements to the "main" element
        overall.append(main1);
        main1.append(top, middle, down, currentDiv);
        overall.append(winContainer);
    }
          // END:: Icons, multiple users and 4x4 grid checked

    
    
});
