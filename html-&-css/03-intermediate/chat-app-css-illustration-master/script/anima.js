// document.addEventListener("DOMContentLoaded", function() {
//     const messages = document.querySelectorAll('.anima');
//     let delay = 1000;
//     let initialTranslateY = 310;
//     let increment = -38.75;

//     messages.forEach((message, index) => {
//         setTimeout(() => {
//             message.style.visibility = 'visible';
//             message.style.opacity = 1;
//             let translateY = initialTranslateY + (increment * index);
//             message.style.transform = `translateY(${translateY}px)`;
//         }, delay * (index + 1));
//     });
// });