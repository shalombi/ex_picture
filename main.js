const gPossibleAns = 2;

var gGamer = { isGameOver: false, isWin: false };

var gQuests = [
  { id: 1, opts: ['bitcoin', 'etherium'], correctOptIndex: 0, isAns: false },
  {
    id: 2,
    opts: ['solana-coin', 'etherium'],
    correctOptIndex: 1,
    isAns: false,
  },
  { id: 3, opts: ['doge-coin', 'shiba-coin'], correctOptIndex: 1 },
];

// init();
function init() {
  initMsgGame();
  renderQuest(gQuests, 0);
  console.log('init');
}

function renderQuest(quests = gQuests, i) {
  var strHTML = '';

  //render img quest
  //TODO: IMG -- TO elImg
  //   var elImg = document.querySelector();
  strHTML += `<div class="img-quest"> <img`;

  strHTML += `  src = "img/${i}.jpg" class = "question" /> </div>`;

  //render button ans
  for (var j = 0; j < gPossibleAns; j++) {
    //TODO: use  j index to know if correct answer instead string comparison
    strHTML += `<button class = "answers" onclick="checkAns(this,${i})" >${quests[i].opts[j]}
      </button> `;
  }

  var elBoard = document.querySelector('div.quest');
  elBoard.innerHTML = strHTML;
}

function checkAns(ans, idQuest) {
  //correct ans
  var realCurrIdxAns = gQuests[idQuest].correctOptIndex;
  var realCurrAns = gQuests[idQuest].opts[realCurrIdxAns];

  //curr ans entered
  var currAns = ans.innerText;

  if (currAns === realCurrAns) {
    console.log('cool');
    gQuests[idQuest].isAns = true;

    //next quest
    idQuest++;
    //todo: gCurrQuestIdx instead nextQuest(gQuests, idQuest);
    if (idQuest <= gQuests.length - 1) nextQuest(gQuests, idQuest);
    //NOTE:If we got here, surely the player answered all the questions correctly
    if (idQuest === gQuests.length) gameDone();
  }
}

function nextQuest(gQuests, idQuest) {
  renderQuest(gQuests, idQuest);
}
// gameDone();
function gameDone() {
  gGamer.isGameOver = true;
  gGamer.isWin = true;

  var elGame = document.querySelector('.game');
  elGame.style.display = 'none';

  //TODO:
  //   elGame.classList.add ('nameClass')

  var elModal = document.querySelector('.modal');
  elModal.style.display = 'block';
  var msgGameDone = gGamer.isWin ? 'win' : 'lose 🕹';
  msgGameDone +=
    ' <button class ="restartBtn" onclick="init()">restart</button>';

  elModal.innerHTML = msgGameDone;

  return;
}

function initMsgGame() {
  var elGame = document.querySelector('.game');
  elGame.style.display = 'block';

  var elModal = document.querySelector('.modal');
  elModal.style.display = 'none';
}
