const quizData = [
    {
        question: 'How old is Justas?',
        a: '10',
        b: '17',
        c: '22',
        d: '55',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US',
        a: 'Kanye West',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Justin Bieber',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Json Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '2014',
        c: '1996',
        d: 'None of the above',
        correct: 'd'
    },
]
const quiz = document.getElementById('quiz');
let questionEl = document.getElementById('question');
const answers = document.querySelectorAll(".answer");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected() {
    let answer = undefined;
    answers.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answers.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    console.log(answer);
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});