
/**************************************************************/
/*                            Data                            */
/**************************************************************/

let photoDataList = [
  {
    src: "https://www.w3schools.com/w3images/fjords.jpg",
    alt: "Fjords",
    width: "600",
    height: "400",
  },
  {
    src: "https://www.w3schools.com/w3images/lights.jpg",
    alt: "Northern Lights",
    width: "600",
    height: "400",
  },
  {
    src: "https://www.w3schools.com/w3images/mountains.jpg",
    alt: "Mountains",
    width: "600",
    height: "400",
  },
  {
    src: "https://www.w3schools.com/w3images/forest.jpg",
    alt: "Forest",
    width: "600",
    height: "400",
  },
];

const body = document.querySelector("body");
const divGallery = document.createElement("div");
const divGalleryBtn = document.createElement("div");
const btnLeft = document.createElement("button");
const btnRight = document.createElement("button");

// Gallery img
body.appendChild(divGallery);
divGallery.classList.add("gallery");

// Gallery btn
body.appendChild(divGalleryBtn);
divGalleryBtn.classList.add("gallery-button");
btnLeft.innerText = "Précédent";
btnRight.innerText = "Suivant";
btnRight.classList.add("button-right");
btnLeft.classList.add("button-left");
divGalleryBtn.appendChild(btnLeft);
divGalleryBtn.appendChild(btnRight);
let currentIndex = 0;
/**************************************************************/
/*                         Functions                          */
/**************************************************************/

function afficherImg() {
  for (let i = 0; i < photoDataList.length; i++) {
    console.log(photoDataList[i]);
    let src = photoDataList[i].src;
    let alt = photoDataList[i].alt;
    let width = photoDataList[i].width;
    let height = photoDataList[i].height;
    divGallery.innerHTML = `<img class="gallery-item" src="${src}" alt= "${alt}" width= "${width}" height="${height}"/>`;
  }
}

function changeImg() {
  btnRight.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= photoDataList.length) {
      currentIndex = 0;
    }

    let src = photoDataList[currentIndex].src;
    let alt = photoDataList[currentIndex].alt;
    let width = photoDataList[currentIndex].width;
    let height = photoDataList[currentIndex].height;
    divGallery.innerHTML = `<img class="gallery-item" src="${src}" alt= "${alt}" width= "${width}" height="${height}"/>`;
    console.log(currentIndex);
  });
  btnLeft.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 3;
    }

    let src = photoDataList[currentIndex].src;
    let alt = photoDataList[currentIndex].alt;
    let width = photoDataList[currentIndex].width;
    let height = photoDataList[currentIndex].height;
    divGallery.innerHTML = `<img class="gallery-item" src="${src}" alt= "${alt}" width= "${width}" height="${height}"/>`;
    console.log(currentIndex);
  });
}


afficherImg();
changeImg();
