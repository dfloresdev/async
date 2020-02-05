const fetchData = require('../utils/fetchData.js');
const API_MARVEL = 'http://gateway.marvel.com/v1/public/';
const API_KEY =
  '?ts=15&apikey=ae7d355fc025d92bc850f19728ca07cf&hash=82bfa5421cfe0ed76fc35c72eb96dd34';

const runSuperQuery = async super_api => {
  // The API only get a first 20 characters
  // Check the documentation

  // get a super hero
  const theBestSuperHero = await fetchData(
    `${super_api}characters/1009368${API_KEY}`
  );

  // get id of the first comic
  const firstComic = await fetchData(
    `${theBestSuperHero.data.results[0].comics.collectionURI}${API_KEY}`
  );

  // get a workers in the comic id
  const workersInThisComic = await fetchData(
    `${API_MARVEL}comics/${firstComic.data.results[0].id}/characters${API_KEY}`
  );

  console.log('Hello, im ', theBestSuperHero.data.results[0].name);
  console.log(
    'The first Comic was: #',
    firstComic.data.results[0].id,
    firstComic.data.results[0].title
  );
  console.log(
    'Collaborated in this comic was: ',
    workers(workersInThisComic.data.results)
  );
};

function workers(listOfWorkers) {
  let workers = '';

  for (let index = 0; index < listOfWorkers.length; index++) {
    workers += ` ${index + 1}.- ${listOfWorkers[index].id} ${
      listOfWorkers[index].name
    }`;
  }

  return workers;
}

runSuperQuery(API_MARVEL);
