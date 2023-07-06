const apiURL = 'http://localhost:3000'
const campList = document.querySelector("#camp-profile")

// document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelector('form').addEventListener('submit',(e) => {
        e.preventDefault()
        
        //data validation
        
    })
// })

function fetchCampsData(){
    fetch(`${apiURL}/camps`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(campData => {
            
            const campImage = document.createElement('img')
            campImage.className = 'camp-image'
            campImage.src = campData.image
            campList.append(campImage)

            const campName = document.createElement('h3')
            campName.className = 'camp-name'
            campName.innerText = campData.campname
            campList.appendChild(campName)

            const campDesc = document.createElement('p')
            campDesc.className = 'camp-desc'
            campDesc.innerText = campData.description
            campList.appendChild(campDesc)

            const country = document.createElement('p')
            country.className = 'camp-location'
            country.innerText = `Country: ${campData.location}`
            campList.appendChild(country)

            const mail = document.createElement('p')
            mail.className = 'camp-mail'
            mail.innerText = `Email Address: ${campData.email}`
            campList.appendChild(mail)

            const cap = document.createElement('p')
            cap.className = 'camp-cap'
            cap.innerText = `Capacity: ${campData.people} People`
            campList.appendChild(cap)

            const donateBtn = document.createElement('button')
            donateBtn.className = 'donote-btn'
            donateBtn.innerText = 'donate'
            campList.appendChild(donateBtn)


        })
     })
    .catch(error => {
        console.log('Error:', error);
    })
}

function initialize(){

    fetchCampsData()
}
initialize()