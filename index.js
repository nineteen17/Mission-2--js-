// SCROLL Animation 
const boxes = document.querySelectorAll('.box')

document.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    // how much of the screen is shown before it triggers
    const triggerBottom = window.innerHeight / 2 
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
 

// POPUP MODAL

const images = [...document.querySelectorAll('.photo')]

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-Image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0 // This will track our current image

//Array to store imageNames
let imageNameArray = ["Sacai Waffle (Black/White)", "Nike Dunk SB (Safari)", "Nike Air Max 98 (Mbappe)", "NB x Aime Leon Dore 550 (Gray)", "NB 2002r (Warm Alpacca)", "NB 990v5 (Gray)", "Jordan 1 (Mocha)", "Dr Marten 1461", "Yeezy Slide (Earth Brown)"]

//Function to update the POPUP Image & Name
const updateImage = (i) => {
    let path = `Photos/${i+1}.webp`;
    largeImage.src = path; // changes to what image I click on
    imageName.innerHTML = imageNameArray[`${i}`]; 
    index = i
}

//for each method calls a function for each element in an array. .
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i)
        popup.classList.toggle('active');
        
    })    
})

//Close POPUP
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

//Both Arrow buttons call updateImage()

//LEFT Arrow decreases index
leftArrow.addEventListener('click', () => {
    if(index > -1) {
        updateImage(index - 1)
    } if (index === -1) {
        updateImage(index + 9)
    }
    console.log(index);
})
//Right Arrow increases index 
rightArrow.addEventListener('click', () => {
    if(index < images.length ) {
        updateImage(index + 1)
    } if (index === 9 ) {
        updateImage(index - 9)
    }
})



// SCROLL Animation  2

const boxes2 = document.querySelectorAll('.gallery')
document.addEventListener('scroll', checkBoxes2)

function checkBoxes2() {
    // how much of the screen is shown before it triggers
    const triggerBottom = window.innerHeight / 1 
    boxes2.forEach(gallery => {
        const boxTop = gallery.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            gallery.classList.add('show')
        } else {
            gallery.classList.remove('show')
        }
    })
}
 











