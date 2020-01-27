// up button
let btnToUp = document.querySelector('.btn-to-up'); //we hang function to the button ,insert your button class names
btnToUp.addEventListener('click', function() {
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', function() {
    buttonUp('invisible'); // insert the name of the class that hides the elements on the page
});
function buttonUp(classToHide) {
    if (document.documentElement.scrollTop > 500 && btnToUp.classList.contains(classToHide)) {
        btnToUp.classList.remove(classToHide);
    } else if (document.documentElement.scrollTop < 500 && btnToUp.classList.contains(classToHide) == false) {
        btnToUp.classList.add(classToHide);
    }
}