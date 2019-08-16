const got = require('got');

async function randomFact() {
  try {
    const response = await got('http://numbersapi.com/random/');
    console.log(response.body);
  } catch (error) {
    console.log(error.response.body);
  }
}

randomFact()
