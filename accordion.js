// Accordion UI JS
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const accordion = question.querySelector('.accordion');

        accordion.addEventListener('click', function() {
            question.classList.toggle('active');

            if (question.classList.contains('active')) {
                accordion.textContent = '-';
            } else {
                accordion.textContent = '+';
            }
        });
    });
         //  Comment UI JS
    const customQuestionForm = document.getElementById('custom-question-form');

    customQuestionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const customQuestionTextarea = document.getElementById('custom-question');
        const customQuestion = customQuestionTextarea.value.trim();
       
        if (customQuestion !== '') {
            const faqSection = document.querySelector('.faq');
            const newQuestionDiv = document.createElement('div');
            newQuestionDiv.classList.add('question');
            const newQuestionHeading = document.createElement('h3');
            newQuestionHeading.innerHTML = `</button> Comment: ${customQuestion}`;
            const newQuestionAnswer = document.createElement('p');
            newQuestionAnswer.classList.add('answer');
            newQuestionAnswer.textContent = 'Answer will be added soon.';
            newQuestionDiv.appendChild(newQuestionHeading);
            newQuestionDiv.appendChild(newQuestionAnswer);
            faqSection.insertBefore(newQuestionDiv, document.querySelector('.submit-question'));
            customQuestionTextarea.value = '';
            
            
            alert("Thank you for submitting a Comment! We will get back to you shortly.");
        } else {
            alert('Please enter a valid Comment.');
        }
    });
});
