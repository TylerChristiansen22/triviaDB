import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuestionCards() {
    console.log("drawing Questions")

    let questions = AppState.Questions
    let content = ''
    questions.forEach(q => content += q.QuestionsCard)
    setHTML('questions', content)
}

export class QuestionsController {
    constructor() {
        console.log("question time!")
        this.getQuestions()
        AppState.on('Questions', _drawQuestionCards)
    }

    async getQuestions() {
        await questionsService.getQuestions()
    }

    checkAnswer(answer) {
        console.log("you clicked", answer)
        questionsService.checkAnswer(answer)
    }
}