const apiURL = 'https://main-json.onrender.com'
const campList = document.querySelector(".camp-content")
const campDetails = document.querySelector(".camp-details")
const searchInput = document.getElementById('search-form')
const searchResult = document.getElementById('search-result')
const searchBtn = document.querySelector('#search')

//Modal box pop up
//Displays a input form to enter donation details
document.querySelector('.donate-btn').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex'
})

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'
})
  
function fetchCampsData(){
    fetch(`${apiURL}/camps`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((campData)  => {

           const camp = document.createElement('div')
           camp.className = 'camp-list'
           camp.innerHTML = `
                <img src="${campData.image}" alt="${campData.image}" class="camp-poster">
                <h3>${campData.campname}</h3>
                <p>Country: ${campData.location}</p>
           `
           const readMore = document.createElement('button')
           readMore.className = 'read-more'
           readMore.innerText = 'READ MORE'

           camp.appendChild(readMore)
           campList.appendChild(camp)

           readMore.addEventListener('click', (e) => {
                e.preventDefault()
                campsDataDetails(campData)
           })
        })
    })
    .catch(error => {
        console.log('Error:', error);
    })
}

//Function that fetch camp data from db.json
function campsDataDetails(campData){

    campDetails.innerHTML = "";

    const campProfile = document.createElement("div");
    campProfile.className = "camp-list";
    campDetails.appendChild(campProfile);

    const campImage = document.createElement("img");
    campImage.className = "camp-image";
    campImage.src = campData.image;
    campProfile.append(campImage);

    const campName = document.createElement("h3");
    campName.className = "camp-name";
    campName.innerText = campData.campname;
    campProfile.append(campName);

    const campDesc = document.createElement("p");
    campDesc.className = "camp-desc";
    campDesc.innerText = campData.description;
    campProfile.appendChild(campDesc);

    const country = document.createElement("p");
    country.className = "camp-location";
    country.innerText = `Country: ${campData.location}`;
    campProfile.appendChild(country);

    const mail = document.createElement("p");
    mail.className = "camp-mail";
    mail.innerText = `Email Address: ${campData.email}`;
    campProfile.appendChild(mail);

    const cap = document.createElement("p");
    cap.className = "camp-cap";
    cap.innerText = `Capacity: ${campData.people} People`;
    campProfile.appendChild(cap); 
}

//Submitting the values the user entered to the db
document.querySelector("#modal-form").addEventListener('submit', handleDonorSubmit)

function handleDonorSubmit(e){
    e.preventDefault()
    let donorObj = {
        donorName:e.target.donor.value,
        paymentCard:e.target.payment.value,
        donation:e.target.donation.value,
        email:e.target.email.value
    }
    addDonor(donorObj)
}

//function that POST data on the db
function addDonor(donorObj){
        
        fetch(`${apiURL}/donor`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(donorObj)
        })
    .then(res => res.json())
    .then(donorData => {
        console.log(donorData)
    })
    .catch(error => {
        console.log('Error:', error);
    })
}

//Search function to loop through the array and fetch location data
function searchButton() {

    fetch(`${apiURL}/camps`)
    .then(res => res.json())
    .then(data => {

        const fetchLocation = data["location"]

        searchBtn.addEventListener("submit", (e) => {
            e.preventDefault()
            data.forEach(console.log(fetchLocation))
        })
    })
}

function initialize(){

    fetchCampsData()
}
initialize()