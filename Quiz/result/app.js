window.onload = function(){
  //データを取得
  var　score = sessionStorage.getItem('score');
  var　quizLength = sessionStorage.getItem('Quizlength');
  if(score/quizLength === 1){
    document.getElementById('result').textContent = '天才';
  } else if(score/quizLength > 0.5) {
    document.getElementById('result').textContent = '凡才';
  }　else{
    document.getElementById('result').textContent = '馬鹿';
  }
}