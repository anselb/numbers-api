const got = require('got');

function checkNumber(number) {
  // Checks if the number is a number and integer, or if it is a string and "random"
  if (!(typeof number === 'number' && number % 1 === 0) && !((typeof number === 'string' && number === 'random'))) {
    throw TypeError('Expected an integer or the string "random"');
  }
}

export async function randomFact() {
  try {
    const response = await got('http://numbersapi.com/random/');
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function triviaFact(number = 'random') {
  checkNumber(number);

  try {
    const response = await got(`http://numbersapi.com/${number}/trivia`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function mathFact(number = 'random') {
  checkNumber(number);

  try {
    const response = await got(`http://numbersapi.com/${number}/math`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function yearFact(year = 'random') {
  checkNumber(year);

  try {
    const response = await got(`http://numbersapi.com/${year}/year`);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}

export async function dateFact(month = 'random', day = 'random') {
  checkNumber(month);
  checkNumber(day);

  let dateFactURL;

  if (month === 'random' && day === 'random') {
    dateFactURL = 'http://numbersapi.com/random/date';
  } else if (typeof month === 'number' && typeof month === 'number') {
    dateFactURL = `http://numbersapi.com/${month}/${day}/date`;
  } else {
    throw TypeError('month and day must be either two integers or two of the string, "random"');
  }

  try {
    const response = await got(dateFactURL);
    return response.body;
  } catch (error) {
    return error.response.body;
  }
}
