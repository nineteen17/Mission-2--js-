// SCROLL Transition

const boxes = document.querySelectorAll(".box");
//Scroll event
document.addEventListener("scroll", boxesTransition);
//Function to trigger the Transition
function boxesTransition() {
  // equals how much of the inner height is shown before it triggers
  const triggerBottom = window.innerHeight / 2; // Half of the screen
  //loop the class of box
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; //show where the top of an elements position is relative to the viewport.
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
//So Basically if the top of the box class is past the center of the screen it should trigger the transition


// POPUP MODAL

const images = [...document.querySelectorAll(".photo")];

const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");
const imageName = document.querySelector(".image-name");
const largeImage = document.querySelector(".large-Image");
const imageIndex = document.querySelector(".index");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let index = 0; // This will track our current image

//Array to store imageNames
let imageNameArray = [
  "Sacai Waffle (Black/White)",
  "Nike Dunk SB (Safari)",
  "Nike Air Max 98 (Mbappe)",
  "NB x Aime Leon Dore 550 (Gray)",
  "NB 2002r (Warm Alpacca)",
  "NB 990v5 (Gray)",
  "Jordan 1 (Mocha)",
  "Dr Marten 1461",
  "Yeezy Slide (Earth Brown)",
];

//Function to update the POPUP Image & Name
const updateImage = (i) => {
  let path = `Photos/${i + 1}.webp`;
  largeImage.src = path; // changes large image src to what image I click on
  imageName.innerHTML = imageNameArray[`${i}`]; //updates the name
  index = i;
};

//for each allows every photo to trigger the click event listener
//all .photo class elements can now be clicked on. updateImage function also reads the index of .photo
images.forEach((shoe, index) => {
  shoe.addEventListener("click", () => {
    updateImage(index); // each image and image name is now linked to the .photo class thanks to the index
    popup.classList.toggle("active"); //popup div activates
    blurMe(); // blur activates
  });
});

//Close POPUP
closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active"); //popup div deactivates
  removeBlurMe(); // blur deactivates
});

//Both Arrow buttons call updateImage()

//LEFT Arrow decreases index
leftArrow.addEventListener("click", () => {
  if (index > -1) {
    updateImage(index - 1);
  }
  if (index === -1) {
    updateImage(index + 9);
  }
  console.log(index);
});
//Right Arrow increases index
rightArrow.addEventListener("click", () => {
  if (index < images.length) {
    updateImage(index + 1);
  }
  if (index === 9) {
    updateImage(index - 9);
  }
});

// SCROLL Transition  2

const boxes2 = document.querySelectorAll(".gallery");
document.addEventListener("scroll", checkBoxes2);

function checkBoxes2() {
  // how much of the screen is shown before it triggers
  const triggerBottom = window.innerHeight / 1;
  boxes2.forEach((gallery) => {
    const boxTop = gallery.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      gallery.classList.add("show");
    } else {
      gallery.classList.remove("show");
    }
  });
}

//Blur effect

let blurBack = document.querySelectorAll(".blur");

function blurMe() {
  for (let i = 0; i < blurBack.length; i++) {
    let blurBackSwitch = (blurBack[i].style.filter = "blur(20px)");
    console.log(blurBackSwitch);
  }
}

function removeBlurMe() {
  for (let i = 0; i < blurBack.length; i++) {
    let blurBackSwitch = (blurBack[i].style.filter = "blur(0px)");
    console.log(blurBackSwitch);
  }
}
removeBlurMe();

//Sub Button popup

let subBtn = document.getElementById("sub-btn");
let closeSubBtn = document.querySelector(".close-btn-sub");
let popUpSub = document.querySelector(".popupSub");

//Make it popup
subBtn.addEventListener("click", popUpSubFunc);

function popUpSubFunc() {
  popUpSub.classList.toggle("active");
  blurMe();
}

//Close Popup
closeSubBtn.addEventListener("click", closePopUpSubFunc);

function closePopUpSubFunc() {
  popUpSub.classList.toggle("active");
  removeBlurMe();
}
