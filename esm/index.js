const got = require('got');

async function randomFact() {
  try {
    const response = await got('http://numbersapi.com/random/');
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

async function triviaFact(number = 'random') {
  try {
    const response = await got(`http://numbersapi.com/${number}/trivia`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

async function mathFact(number = 'random') {
  try {
    const response = await got(`http://numbersapi.com/${number}/math`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

async function yearFact(year = 'random') {
  try {
    const response = await got(`http://numbersapi.com/${year}/year`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

async function dateFact(month = 'random', day = '') {
  try {
    const response = await got(`http://numbersapi.com/${month}/${day}/date`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export { dateFact, mathFact, randomFact, triviaFact, yearFact };
