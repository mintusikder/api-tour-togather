const loadAllData =()=>{
    fetch('https://restcountries.com/v3.1/all').then(res=>res.json())
    .then(data => showAllData(data))
}
const showAllData =(countries)=>{
    const countryContainer =document.getElementById('countries-info')
    countries.forEach(country => {
        console.log(country.flags)
        const div =document.createElement('div')
        div.innerHTML=`
        <div class="card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
  </div>
        `
        countryContainer.appendChild(div)
    });

}
loadAllData()