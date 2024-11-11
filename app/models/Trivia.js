export class Trivia {
  constructor(data) {
    this.difficulty = data.difficulty
    this.catagory = data.catagory
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }






  get triviaCard() {
    return `
  <div class="col-md-4">
        <div class="card bg-dark border border-white shadow sm mb-3 mt-3">
          <div class="card-body text-light">
            <p>${this.question}</p>
            <hr class="text-light"/>
            <div class="d-flex ">
            <span><button class="btn btn-success btn-sm fs-6">${this.correctAnswer}</button></span>
            ${this.answerButtons}
            </div>
          </div>
         
        </div>
      </div>
  
  `
  }

  get answerButtons() {
    let buttonsHTML = ''
    this.incorrectAnswers.forEach(answer => buttonsHTML += `<span><button class="btn btn-primary btn-sm fs-6">${answer}</button></span>`)
    return buttonsHTML
  }


}