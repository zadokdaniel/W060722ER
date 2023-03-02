const API_BASE = "https://restcountries.com/v3.1";

async function getAllCountriesNames() {
  const response = await fetch(`${API_BASE}/all?fields=name`);
  return await response.json();
}

async function getCountryByName(officialName) {
  const response = await fetch(
    `${API_BASE}/name/${officialName}?fullText=true`
  );
  const countriesInformation = await response.json();
  return countriesInformation[0];
}

// getAllCountriesNames().then((countries) => {
//   for (const country of countries) {
//     getCountryByName(country.name.official).then((countryInformation) =>
//       console.log(countryInformation.length)
//     );
//   }
// });

getCountryByName("united kingdom").then(console.log);
