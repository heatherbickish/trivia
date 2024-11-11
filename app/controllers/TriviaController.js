import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";
import { triviaService } from "../services/TriviaService.js";

export class TriviaController {
  constructor() {
    console.log('🧠🎮');
    AppState.on('trivias', this.drawTrivia)
    this.fetchTrivia()
  }

  async fetchTrivia() {
    await triviaService.fetchTrivia()
  }

  drawTrivia() {
    console.log('🖋️🧠')
    const triviaQAElm = document.getElementById('trivia-qa')
    triviaQAElm.innerHTML = ''
    AppState.trivias.forEach(trivia => triviaQAElm.innerHTML += trivia.triviaCard)
  }

}