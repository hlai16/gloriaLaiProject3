// I am so not good at this...

// 1) Document Ready
// 2) Add event listener to form submit
// 3) Add e.preventDefault() to prevent page refresh
// 4) listen to user checked radio buttons.
// 5) retrieve and store user's choice of radio buttons in a const(s)
// 6) post correct answers once user submits answers.

// const app
const quizApp = {};

// init
quizApp.init = () => {
    // console.log('init worked');
    quizApp.getUserChoice();
}

quizApp.getUserChoice = () => {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const userChoices = $('input[type="radio"]:checked').val();
        console.log('userChoices', userChoices);
        let scoreTally = 0;
        //QUESTION 1
        const userChoice1 = $('.questionOne input[name="question1"]:checked').val();
        console.log('userChoice1', userChoice1);
        if (userChoice1 === 'option1') {
            // console.log('yep!');
            $('.answer1 p').text('Correct!  +1')
            scoreTally = scoreTally+1;
            console.log('score', scoreTally);
        } else if (userChoice1 !== 'option1'){
            $('.answer1 p').text('Not correct. Try again please')
            console.log('score', scoreTally);
        } else {
            $('.answer1 p').text('Please finish question')
        }
        //QUESTION 2
        const userChoice2 = $('.questionTwo input[name="question2"]:checked').val();
        console.log('userChoice2', userChoice2);
        if (userChoice2 === 'option3') {
            // console.log('yep!');
            $('.answer2 p').text('Correct!  +1')
            scoreTally = scoreTally + 1;
            console.log('score', scoreTally);
        } else if (userChoice2 !== 'option3'){
            $('.answer2 p').text('Not correct. Try again please')
            console.log('score', scoreTally);
        } else {
            $('.answer2 p').text('Please finish question')
        }


        //RESULTS

        const finalScore = 1+scoreTally
        if (finalScore === 3) {
            $('.results').html(`
            <p>Your total score is: <span class="finalScore">${finalScore}</span>.</p>
            <p>Great Job!!! You got Perfect!!! 👏👏💯💯</p>
            <p>Thank you for Participation 😊😊</p>`
            );
        }else if (finalScore === 2) {
            $('.results').html(`
            <p>Your total score is: <span class="finalScore">${finalScore}</span>.</p>
            <p>Not Bad. Feel free to browse the site to learn more about cultured meat and biochar. 👏👏</p>
            <p>Thank you for Participation 😊😊</p>`);
        }else if (finalScore === 1) {
            $('.results').html(`
            <p>Your total score is: <span class="finalScore">${finalScore}</span>.</p>
            <p>It is a GOOD Attempt. Feel free to try one more time 😉😉</p>
            <p>Thank you for Participation 😊😊</p>`);
        }else if (scoreTally === 0){
            $('.results').html(`<p>Please complete quizlet.</p>`);
        }
    })
}

//Doc. ready
$(function () {
    quizApp.init();
})