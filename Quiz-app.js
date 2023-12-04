    

  /* const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
        answer: "B",
    },
    {
        question: "What is the capital of France?",
        options: ["A. Rome", "B. London", "C. Berlin", "D. Paris"],
        answer: "D",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["A. Charles Dickens", "B. William Shakespeare", "C. Jane Austen", "D. Leo Tolstoy"],
        answer: "B",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["A. Elephant", "B. Giraffe", "C. Blue Whale", "D. Lion"],
        answer: "C",
    },
    {
        question: "In which country is the Great Wall of China located?",
        options: ["A. Japan", "B. China", "C. India", "D. Russia"],
        answer: "B",
    },
    {
        question: "What is the currency of Japan?",
        options: ["A. Yen", "B. Won", "C. Baht", "D. Dollar"],
        answer: "A",
    },
    {
        question: "Who is known as the father of modern physics and is famous for his theory of relativity?",
        options: ["A. Sir Isaac Newton", "B. Galileo Galilei", "C. Albert Einstein", "D. Stephen Hawking"],
        answer: "C",
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["A. Heart", "B. Liver", "C. Skin", "D. Kidney"],
        answer: "C",
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["A. Earth", "B. Mars", "C. Venus", "D. Mercury"],
        answer: "D",
    },
    {
        question: "Which gas do plants absorb from the atmosphere and release oxygen during photosynthesis?",
        options: ["A. Nitrogen", "B. Oxygen", "C. Carbon Dioxide", "D. Hydrogen"],
        answer: "C",
    },
    {
        question: "What is the largest desert in the world?",
        options: ["A. Sahara Desert", "B. Gobi Desert", "C. Atacama Desert", "D. Arabian Desert"],
        answer: "A",
    },
    {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        options: ["A. Galileo Galilei", "B. Isaac Newton", "C. Albert Einstein", "D. Charles Darwin"],
        answer: "B",
    },
    {
        question: "In which year did Christopher Columbus first reach the Americas?",
        options: ["A. 1492", "B. 1521", "C. 1588", "D. 1607"],
        answer: "A",
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["A. Europe", "B. Africa", "C. Asia", "D. North America"],
        answer: "C",
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["A. Carbon Dioxide", "B. Oxygen", "C. Nitrogen", "D. Hydrogen"],
        answer: "C",
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["A. J.K. Rowling", "B. Mark Twain", "C. Harper Lee", "D. George Orwell"],
        answer: "C",
    },
    {
        question: "What is the capital of Australia?",
        options: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
        answer: "C",
    },
    {
        question: "What is the longest river in the world?",
        options: ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"],
        answer: "A",
    },
    {
        question: "Which famous physicist is known for the theory of black holes and Hawking radiation?",
        options: ["A. Albert Einstein", "B. Carl Sagan", "C. Stephen Hawking", "D. Richard Feynman"],
        answer: "C",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["A. Go", "B. Au", "C. Ag", "D. Ge"],
        answer: "B",
    },
    // Add more questions and answers as needed
];

  


  let currentQuestionIndex = 0;

  const questionElement = document.querySelector(".questions");
  const optionElements = document.querySelectorAll("span");
  let nextButton = document.getElementById("next-button");
    
 let num = 0;
nextButton.onclick = (num) =>{
    questionElement.textContent = questions[num].question;
   
} 

*/
const questions = [
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["A. Venus", "B. Mars", "C. Jupiter", "D. Saturn"],
        answer: "B",
    },
    {
        question: "What is the capital of France?",
        options: ["A. Rome", "B. London", "C. Berlin", "D. Paris"],
        answer: "D",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["A. Charles Dickens", "B. William Shakespeare", "C. Jane Austen", "D. Leo Tolstoy"],
        answer: "B",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["A. Elephant", "B. Giraffe", "C. Blue Whale", "D. Lion"],
        answer: "C",
    },
    {
        question: "In which country is the Great Wall of China located?",
        options: ["A. Japan", "B. China", "C. India", "D. Russia"],
        answer: "B",
    },
    {
        question: "What is the currency of Japan?",
        options: ["A. Yen", "B. Won", "C. Baht", "D. Dollar"],
        answer: "A",
    },
    {
        question: "Who is known as the father of modern physics and is famous for his theory of relativity?",
        options: ["A. Sir Isaac Newton", "B. Galileo Galilei", "C. Albert Einstein", "D. Stephen Hawking"],
        answer: "C",
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["A. Heart", "B. Liver", "C. Skin", "D. Kidney"],
        answer: "C",
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["A. Earth", "B. Mars", "C. Venus", "D. Mercury"],
        answer: "D",
    },
    {
        question: "Which gas do plants absorb from the atmosphere and release oxygen during photosynthesis?",
        options: ["A. Nitrogen", "B. Oxygen", "C. Carbon Dioxide", "D. Hydrogen"],
        answer: "C",
    },
    {
        question: "What is the largest desert in the world?",
        options: ["A. Sahara Desert", "B. Gobi Desert", "C. Atacama Desert", "D. Arabian Desert"],
        answer: "A",
    },
    {
        question: "Which famous scientist formulated the laws of motion and universal gravitation?",
        options: ["A. Galileo Galilei", "B. Isaac Newton", "C. Albert Einstein", "D. Charles Darwin"],
        answer: "B",
    },
    {
        question: "In which year did Christopher Columbus first reach the Americas?",
        options: ["A. 1492", "B. 1521", "C. 1588", "D. 1607"],
        answer: "A",
    },
    {
        question: "What is the largest continent on Earth?",
        options: ["A. Europe", "B. Africa", "C. Asia", "D. North America"],
        answer: "C",
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["A. Carbon Dioxide", "B. Oxygen", "C. Nitrogen", "D. Hydrogen"],
        answer: "C",
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["A. J.K. Rowling", "B. Mark Twain", "C. Harper Lee", "D. George Orwell"],
        answer: "C",
    },
    {
        question: "What is the capital of Australia?",
        options: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
        answer: "C",
    },
    {
        question: "What is the longest river in the world?",
        options: ["A. Nile", "B. Amazon", "C. Mississippi", "D. Yangtze"],
        answer: "A",
    },
    {
        question: "Which famous physicist is known for the theory of black holes and Hawking radiation?",
        options: ["A. Albert Einstein", "B. Carl Sagan", "C. Stephen Hawking", "D. Richard Feynman"],
        answer: "C",
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["A. Go", "B. Au", "C. Ag", "D. Ge"],
        answer: "B",
    },
    // Add more questions and answers as needed
];


  //count-correctp-answer-variable
 
 
 


let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionElements = document.querySelectorAll("span");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < optionElements.length; i++) {
      optionElements[i].textContent = currentQuestion.options[i];
    }

}

 

let countCorrect = 0;
let CorrectReporter =  document.querySelector('.informer')

function checkAnswer() {

          const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            // Correct answer
           
           countCorrect = countCorrect +1;
           //pushing the number of correct answer

           document.querySelector('.js-correct-count').innerHTML = `Score ${countCorrect}/20`;
           alert("Correct!" );
           
          CorrectReporter.innerHTML = 'Correct';
      //    CorrectReporter.computedStyleMap.
          
           
           
        } else {
            // Incorrect answer
            alert("Incorrect. The correct answer is " + questions[currentQuestionIndex].answer);

            document.querySelector('.informer').innerHTML = 'Incorrect';
        }

       currentQuestionIndex++;
       console.log(currentQuestionIndex);
 // this  displayQuestion(); function will never end if the currentQuestionIndex is still less than questions.length
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            // Quiz finished

            alert(`Quiz finished. Your result is ${countCorrect}/20.`);
        }
    } else {
        alert("Please select an answer.");
    }
}

displayQuestion();
nextButton.addEventListener("click", checkAnswer);

    
