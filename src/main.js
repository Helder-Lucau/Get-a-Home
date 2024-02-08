const campList = document.querySelector(".camp-content")
const campDetails = document.querySelector(".camp-details")

//Modal box pop up
//Displays a input form to enter donation details
// document.querySelector('.donate-btn').addEventListener('click', function () {
//     document.querySelector('.bg-modal').style.display = 'flex'
// })

// document.querySelector('.close').addEventListener('click', function () {
//     document.querySelector('.bg-modal').style.display = 'none'
// })

function fetchCampsData() {
    fetch('camps.json')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            data.forEach((campData) => {

                const campCardDetails = document.createElement('div')
                campCardDetails.className = 'camp-card'
                campCardDetails.innerHTML = `
                    <img src="${campData.image}" alt="${campData.image}"/>
                    <h1>${campData.location}</h1>
                    <h3>${campData.campname}</h3>
                    <p>Capacity<span>${campData.capacity}</span></p>
                    <p>Available Space<span>${campData.available}</span></p>
               `
                campList.appendChild(campCardDetails)
            })
        })
        .catch(error => {
            console.log('Error:', error);
        })
}

//Function that fetch camp data from db.json
// function campsDataDetails(campData) {

//     campDetails.innerHTML = "";

//     const campProfile = document.createElement("div");
//     campProfile.className = "camp-list";
//     campDetails.appendChild(campProfile);

//     const campImage = document.createElement("img");
//     campImage.className = "camp-image";
//     campImage.src = campData.image;
//     campProfile.append(campImage);

//     const campName = document.createElement("h3");
//     campName.className = "camp-name";
//     campName.innerText = campData.campname;
//     campProfile.append(campName);

//     const campDesc = document.createElement("p");
//     campDesc.className = "camp-desc";
//     campDesc.innerText = campData.description;
//     campProfile.appendChild(campDesc);

//     const country = document.createElement("p");
//     country.className = "camp-location";
//     country.innerText = `Country: ${campData.location}`;
//     campProfile.appendChild(country);

//     const cap = document.createElement("p");
//     cap.className = "camp-cap";
//     cap.innerText = `Capacity: ${campData.people} People`;
//     campProfile.appendChild(cap);
// }

//Open & Close sidebar Menu
function Menu(event) {
    let icon = document.querySelector('ul');
    event.name === 'menu'
        ? ((event.name = 'close'),
            icon.classList.add('top-[80px]'),
            icon.classList.add('opacity-100'))
        : ((event.name = 'menu'),
            icon.classList.remove('top-[80px]'),
            icon.classList.remove('opacity-100'));
}

function initialize() {

    fetchCampsData()

}
initialize()