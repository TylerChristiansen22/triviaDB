import { AppState } from "../AppState.js"
import { generateId } from "../utils/generateId.js"

export class Question {
    constructor(results) {
        this.id = generateId()
        this.difficulty = results.difficulty
        this.question = results.question
        this.type = results.type
        this.category = results.category
        this.correct_answer = results.correct_answer
        this.incorrect_answers = results.incorrect_answers || []
    }

    get QuestionsCard() {
        return /*html*/ `
        <section class="row container-fluid">
    <div class="col-10 d-flex justify-content-center">${this.question}</div>
    <div class="row justify-content-around">
${this.computeRandomAnswer}
    </div>
  </section>
  <section class = "row container-fluid">
  <div class = "col-12">Score: ${AppState.answeredCorrect}/${AppState.answeredQuestions}`
    }

    //   <button class="btn btn-primary col-4 m-1">${this.correct_answer}</button>
    // <button class="btn btn-primary col-4 m-1">${this.incorrect_answers[0]}</button>

    //  <div class="row justify-content-around">
    //     <button class="btn btn-primary col-4 m-1">${this.incorrect_answers[1]}</button>
    //     <button class="btn btn-primary col-4 m-1">${this.incorrect_answers[2]}</button>
    // </div>


    get computeRandomAnswer() {
        let answersArray = [...this.incorrect_answers, this.correct_answer]
        answersArray = answersArray.sort()
        let template = ''
        answersArray.forEach(a => template += `<button onclick="app.QuestionsController.checkAnswer('${a}')" class="btn btn-primary col-6 m-1">${a}</button>`)
        return template
    }



}