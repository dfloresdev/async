const fetchData = require('../utils/fetchData.js');
const API = 'https://rickandmortyapi.com/api/character/';

// Solucion 1
// async function runPromises() {
//   try {
//     const run1 = await fetchData(API);
//     const run2 = await fetchData(`${API}${run1.results[0].id}`);
//     const run3 = await fetchData(run2.origin.url);

//     console.log(run1.info.count);
//     console.log(run2.name);
//     console.log(run3.dimension);
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(runPromises());

const anotherFunction = async url_api => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (err) {
    console.log(err);
  }
};

console.log('before Async');
anotherFunction(API);
console.log('after Async');
