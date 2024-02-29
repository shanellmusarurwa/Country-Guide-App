let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
  let counrtyName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${counrtyName}?fullText=true`;
  console.log(finalURL);
});
