const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, index) {
    // targeting the style left property so the index will move picture over 100% to the left then increase to 200 with next slide and so on
    slide.style.left = `${index * 100}%`
});

// setting up a counter at 0 to get next and prev button to either increase or decrease to next or prev slide when clicked
let counter = 0;
nextBtn.addEventListener("click", function(){
    counter++;
    carousel()
});
prevBtn.addEventListener("click", function(){
    counter--;
    carousel()
});

// creating a function to navigate through slideshow with transform element and manuevering the counter to increase or decrease
function carousel(){
    // working with slides...basically resetting the slides to go back to the beginning when it reaches the end

    // if (counter === slides.length) {
    //     counter = 0;
    // }
    // // accessing the last slide using -1
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // }

    // working with buttons
    // if counter is less than last slide then show next button in the middle of the screen (block)
    if(counter < slides.length - 1) {
        nextBtn.style.display = "block";
    }
    // else when it gets to the end then don't display the next button anymore
    else {
        nextBtn.style.display = "none";
    }
    // if counter bigger than the first index of 0 then show prev button
    if (counter > 0) {
        prevBtn.style.display = "block";
    }
    // else don't show prev button
    else {
        prevBtn.style.display = "none";
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
// hiding the prev button when the page initially loads
prevBtn.style.display = "none";
