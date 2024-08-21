const quiz = [
    {
        question: 'この中で最も優しいのは誰でしょう？',
        answers: ['栗山鉄平', 'お兄ちゃん','お父さん','お母さん'],
        correct: '栗山鉄平'
    },{
        question: 'この中で最も天才なのは誰でしょう？',
        answers: [ 'エジソン','アインシュタイン','栗山鉄平','レオナルド・ダヴィンチ'],
        correct: '栗山鉄平'
    },{
        question: 'この中で最も面白いのは誰でしょう？',
        answers: ['村橋ひかる','栗山鉄平','お父さん','お兄ちゃん'],
        correct: '栗山鉄平'
    }]
const $buttun = document.getElementsByTagName('button');
const quizLength = quiz.length;
let quizIndex = 0;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < $buttun.length){
        $buttun[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};
setupQuiz();
// ボタンをクリックしたら正誤判定
const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('よく分かっていますね！')
        quizIndex++;
    } else {
        window.alert('全然違う！');
    }
    if(quizIndex<quizLength){
        setupQuiz();
    } else{
        window.alert('つまり栗山鉄平が最強ですね！');
    };
};
let handlerIndex = 0;
while(handlerIndex < $buttun.length){
    $buttun[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
