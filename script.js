let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};
let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add("text-center", "d-flex", "flex-column", "justify-content-center");
profileContainerEl.font = "Roboto"
let imgContainer = document.getElementById("imgContainer");

let imgEl = document.createElement("img");
imgEl.src = profileDetails.imgSrc;
imgContainer.appendChild(imgEl)

let nameEl = document.createElement("h1");
nameEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.textContent = "Age : " + profileDetails.age;
profileContainerEl.appendChild(ageEl);