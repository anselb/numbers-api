# Numbers API Wrapper
A wrapper for the Numbers API, an API that return number facts.

## Methods you can use
All of the listed functions return a promise, which resolves with a string that contains the number fact. If parameters are not specified, the function will return a random fact of that type (`mathFact()` will return a random math fact).

- `randomFact()` - Get a random number fact from the API.
- `triviaFact(number)` - Get a trivia fact related to the passed in number.
- `mathFact(number)` - Get a math fact related to the passed in number.
- `yearFact(year)` - Get a number fact related to the passed in year.
- `dateFact(month, day)` - Get a number fact related to the passed in month and day.
