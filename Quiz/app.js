const quiz = [
  {
    question: '山口耀平の黒子の位置は？',
    answer: [
      '尻',
      '足',
      '腹',
      '首'
    ],
    correct: '尻'
  },
  {
    question: '俺がゲロを初めて吐いた場所は？',
    answer: [
      '小田原',
      '高田馬場',
      'フランシスコ',
      'ディズニーシー'
    ],
    correct: '高田馬場'
  },
  {
    question: '初めて女の子に告白した場所は',
    answer: [
      '小田原',
      '押上駅の改札の外',
      '東京スカイツリー',
      '押上駅の改札のの中'
    ],
    correct: '押上駅の改札の外'
  },
  {
    question: '山口耀平の初彼女の名前は？',
    answer: [
      '尻',
      '足',
      '腹',
      '首'
    ],
    correct: '腹'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex]
    buttonIndex++;
  }
};
setupQuiz();

//ボタンをクリックしたら正誤判定

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
      window.alert('正解');
      score++;
    }else {
      window.alert('不正解');
    }
    quizIndex++;

    if(quizIndex < quizLength){
      setupQuiz();
      
    } else {
      sessionStorage.setItem('score', score);
      sessionStorage.setItem('Quizlength', quizLength);
      location.href = '/result';
    }
};
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}; 
