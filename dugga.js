var answers = document.querySelectorAll('li');
answers.forEach(setupClick);


function setupClick(element) {
    // when the element is clicked, call the answerClicked function
    element.onclick = answerClicked;
    console.log('kalle')
}

function clearAnswer(element) {
    // Remove classes from the element
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function rightAnswer(element) {
    // Add class "correct" to the element
    element.classList.add('correct');
}

function wrongAnswer(element) {
    // Add class "incorrect" to the element
    element.classList.add('incorrect');
}

function calculateResult() {
    // Find all elements with class "correct" and count them
    var result = document.querySelectorAll('.correct').length;
    // Change the text of the result element to the current count
    document.querySelector('.result').innerHTML = result + ' / 15';
}

function answerClicked(clickEvent) {
    // Get the answer (li) element
    var answerElement = clickEvent.currentTarget;
    // Get all sibling elements, e.g. the other li elements for the current question
    var siblingElements = Array.from(answerElement.parentElement.children);
    // Clear classes for all siblings
    siblingElements.forEach(clearAnswer);

    // Set class to the clicked event to be either "correct" or "incorrect"
    // Use the data-attribute "correct" to determine which it is
    if (answerElement.dataset.correct === "true") {
        rightAnswer(answerElement);
    }
    else {
        wrongAnswer(answerElement)
    }
    // Calculate the current result
    calculateResult();
}
