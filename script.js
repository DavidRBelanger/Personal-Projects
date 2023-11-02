fetch('https://www.balldontlie.io/api/v1/players?search=lebron')
  .then(response => response.json())
  .then(data => console.log(data))