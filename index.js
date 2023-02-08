// SCROLL Animation 
const boxes = document.querySelectorAll('.box')
// const boxes2 = document.querySelectorAll('.gallery')
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


//for each method calls a function for each element in an array. The forEach() method is not executed for empty elements.

const updateImage = (i) => {
    let path = `Photos/${i+1}.webp`;
    largeImage.src = path;
    imageName.innerHTML = imageNameArray[`${i}`]; 
    // imageIndex.innerHTML = `0${i+1}`
    index = i;
    
}


images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i)
        popup.classList.toggle('active');
        
    })    
})


closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})


leftArrow.addEventListener('click', () => {
    if(index > -1) {
        updateImage(index - 1)
    } if (index === -1) {
        updateImage(index + 9)
    }
    console.log(index);
})

rightArrow.addEventListener('click', () => {
    if(index < images.length ) {
        updateImage(index + 1)
    } if (index === 9 ) {
        updateImage(index - 9)
    }
})















