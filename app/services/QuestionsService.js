import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"


class QuestionsService {
    checkAnswer(answer) {
        if (answer == AppState.Questions[0].correct_answer) {
            AppState.answeredQuestions++
            AppState.answeredCorrect++
            window.alert('Correct Answer!')
            this.getQuestions()
        } else {
            AppState.answeredQuestions++
            window.alert('Incorrect Answer!')
            this.getQuestions()
        }
    }
    async getQuestions() {
        console.log("Getting Questions")
        const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple')
        const data = await response.json()
        console.log(data.results)
        let newQuestions = data.results.map(question => new Question(question))
        AppState.Questions = newQuestions
    }
}


export const questionsService = new QuestionsService