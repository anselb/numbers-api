const got = require('got');

export async function randomFact() {
  try {
    const response = await got('http://numbersapi.com/random/');
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function triviaFact(number = 'random') {
  try {
    const response = await got(`http://numbersapi.com/${number}/trivia`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function mathFact(number = 'random') {
  try {
    const response = await got(`http://numbersapi.com/${number}/math`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function yearFact(number = 'random') {
  try {
    const response = await got(`http://numbersapi.com/${number}/year`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function dateFact(month = 'random', day = '') {
  try {
    const response = await got(`http://numbersapi.com/${month}/${day}/date`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}
