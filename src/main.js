const campList = document.getElementById("item-list")
// document.addEventListener('DOMContentLoaded', () => {

// })

function fetchCampsData(){
    fetch('http://localhost:3000/camps')
    .then((res) => res.json())
    .then((data) => {
        data.forEach(campData => {
            const card = document.createElement('list')
            card.className = 'camp-card'
            card.innerHTML = `
                <img src="${campData.image}" alt="shelter" class="image-card">
            `
            campList.appendChild(card)
        })
     })
}

function initialize(){

    fetchCampsData()
}
initialize()