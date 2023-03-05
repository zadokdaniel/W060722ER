import {
  getAllCountriesNames,
  getCountryByName,
} from "./services/countries.js";

const DEFAULT_COUNTRY_OFFICIAL_NAME = "State of Israel";

const $countrySelector = document.getElementById("country-selector");
const $countryInformation = document.getElementById("country-information");

init();

async function init() {
  await populateCountriesSelector();
  $countrySelector.addEventListener("change", (e) =>
    renderCountry(e.target.value)
  );

  $countrySelector.value = DEFAULT_COUNTRY_OFFICIAL_NAME;
  renderCountry(DEFAULT_COUNTRY_OFFICIAL_NAME);
}

async function renderCountry(officialName) {
  // get the country
  const countryInformation = await getCountryByName(officialName);

  // render country information
  $countryInformation.innerHTML = renderCountryCard(countryInformation);
}

async function populateCountriesSelector() {
  // get all countries names
  const countriesName = await getAllCountriesNames();

  // generate option elements
  $countrySelector.innerHTML = countriesName
    .sort((a, b) => {
      return a.name.common > b.name.common ? 1 : -1;
    })
    .map((country) => {
      //   const { common, official } = country.name;
      const common = country.name.common;
      const official = country.name.official;

      return `<option value="${official}">${common}</option>`;
    })
    .join("");

  //   let html = "";
  //   for (const countryName of countriesName) {
  //     const { common, official } = countryName.name;
  //     html += `<option value="${official}">${common}</option>`;
  //   }

  //   // insert into document
  //   $countrySelector.innerHTML = html;
}

function renderCountryCard(countryInformation) {
  // generate country's html

  return `
  <div class="card w-100">
  <img
    src="${countryInformation.flags.svg}"
    class="card-img-top"
    alt="${countryInformation.name.common} flag"
  />

  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-clock"></i>
      <span class="fw-bold">Timezone: </span>
      <span class="flex-fill text-center">${countryInformation.timezones.join(
        ", "
      )}</span>
    </li>
    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-people-fill"></i>
      <span class="fw-bold">Population: </span>
      <span class="flex-fill text-center">${countryInformation.population.toLocaleString()}</span>
    </li>

    ${
      countryInformation.capital && countryInformation.capital.length
        ? `
      <li class="list-group-item d-flex">
        <i class="me-2 bi bi-building"></i>
        <span class="fw-bold">Capital: </span>
        <span class="flex-fill text-center">${countryInformation.capital.join(
          ", "
        )}</span>
      </li>
      `
        : ""
    }

    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-geo-fill"></i>
      <span class="fw-bold">Area: </span>
      <span class="flex-fill text-center">
        ${countryInformation.area.toLocaleString()} m<sup>2</sup>
      </span>
    </li>
    <li class="list-group-item d-flex">
      <i class="me-2 bi bi-translate"></i>
      <span class="fw-bold">Languages: </span>
      <span class="flex-fill text-center">${
        countryInformation.languages
          ? Object.values(countryInformation.languages).join(", ")
          : "unknown"
      }</span>
    </li>
    <li class="list-group-item d-flex">
        <i class="me-2 bi bi-cash-coin"></i>
        <span class="fw-bold">Currencies: </span>
        <span class="flex-fill text-center"> ${
          countryInformation.currencies
            ? Object.values(countryInformation.currencies)[0].name
            : "unknown"
        } (${
    countryInformation.currencies
      ? Object.values(countryInformation.currencies)[0].symbol
      : "unknown"
  }) </span>
    </li>
  </ul>
</div>
`;
}
