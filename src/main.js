const apiURL = 'http://localhost:3000'
const campList = document.querySelector(".camp-content")
const campDetails = document.querySelector(".camp-details")

function searchCamps(){
    document.querySelector('form').addEventListener('submit',(e) => {
        e.preventDefault()
        
        //data validation
        
    })
} 

function fetchCampsData(){
    fetch(`${apiURL}/camps`)
    .then((res) => res.json())
    .then((data) => {
        data.forEach(campData => {

           const camp = document.createElement('div')
           camp.className = 'camp-list'
           camp.innerHTML = `
                <img src="${campData.image}" alt="${campData.image}" class="camp-poster">
                <h3>${campData.campname}</h3>
                <p>Country: ${campData.location}</p>
           `
           campList.appendChild(camp)

           camp.addEventListener('click', () => {
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

    const volunteerBtn = document.createElement("button");
    volunteerBtn.className = "volunteer-btn";
    volunteerBtn.innerText = "Volunteer";
    campProfile.append(volunteerBtn);
   
}

function initialize(){

    fetchCampsData()
}
initialize()