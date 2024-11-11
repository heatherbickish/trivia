import { AppState } from "../AppState.js";
import { Trivia } from "../models/Trivia.js";

class TriviaService {

  async fetchTrivia() {
    console.log('fetching')
    let response = await fetch('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple')
    console.log('response', response)
    let data = await response.json()
    console.log('data', data);
    const trivias = data.results.map(triviaData => new Trivia(triviaData))
    console.log('🧠🧠🧠', trivias)
    AppState.trivias = trivias

  }

}

export const triviaService = new TriviaService()