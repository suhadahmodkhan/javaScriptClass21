const showAll = () => {
  const inputField = document.getElementById("search-field")
  const searchText = inputField.value ;
  console.log(searchText)
  fetchData(searchText,true)

}

const searchText = () => {
    const inputField = document.getElementById("search-field")
    const searchText = inputField.value ;
    console.log(searchText)
    fetchData(searchText)
}

const fetchData = (searchText , showAll = false) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
.then(response => response.json())
.then(data => loadData(data.data, showAll))
} 

const loadData = (data ,show) => {
    console.log(show)
    let phones = data ;
    const showAll = document.getElementById("showall")
    const container = document.getElementById("container")
    container.innerHTML = '' ;
  if( phones.length > 6 ){
    if(show  !==  true ){
      phones = phones.slice(0,6)
      showAll.classList.remove("hidden")
    }
    else {
      phones = phones
      showAll.classList.add("hidden")
    }

  }
    phones.forEach(phone => {
        console.log(phone.slug)
        
        const div = document.createElement("div")
        div.innerHTML =` 
         <div class="card bg-base-100 w-60 shadow-xl"  >
                    <figure>
                      <img
                        src="${phone.image}"
                        alt="phones image" />
                    </figure>
                    <div class="card-body text-center">
                      <h2 class="card-title text-center flex justify-center">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <p>$999</p>
                      <div class="card-actions justify-center">
                 <button class="btn btn-primary"  onclick="showDetails('${phone.slug}')" >Show Details</button>
                      </div>
                    </div>
                  </div>`
                    container.appendChild(div)
    }) };
    const showDetails =  (slug) => {
      fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.mainFeatures.storage        )
        const phoneName = document.getElementById("phone-name")
        phoneName.innerText = data.data.name
        const storage = document.getElementById('storage')
        storage.innerText = ` Storage : ${data.data.mainFeatures.storage }` 
        my_model_2.showModal()
      })


      
    }

    const phoneShowDetails = () => {

    }
    
