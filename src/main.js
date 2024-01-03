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
            console.log(data);
            data.forEach((campData) => {

                const camp = document.createElement('div')
                camp.className = 'camp-list'
                camp.innerHTML = `
                    <img src="${campData.image}" alt="${campData.image}" class="camp-poster">
                    <h3>${campData.campname}</h3>
                    <p><span>Country:</span> ${campData.location}</p>
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
function campsDataDetails(campData) {

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

    const cap = document.createElement("p");
    cap.className = "camp-cap";
    cap.innerText = `Capacity: ${campData.people} People`;
    campProfile.appendChild(cap);
}

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