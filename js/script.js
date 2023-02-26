const loadAllData =()=>{
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json())
    .then(data => showAllData(data))
}
const showAllData =(countries)=>{
    const countryContainer =document.getElementById('countries-info')
    countries.forEach(country => {
        console.log(country)
        const div =document.createElement('div')
        div.innerHTML=`
        <div class="card w-full  bg-base-100 shadow-2xl ">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
  <h2 class="card-title">${country.name.common}</h2>
  <p>Name: ${country.population}</p>
  <p>Timezones: ${country.timezones}</p>
  <p>Capital: ${country.capital}</p>
  <div class="card-actions">
    <button class="btn btn-primary">Details</button>
  </div>
</div>
  </div>
        `
        countryContainer.appendChild(div)
    });

}
loadAllData()