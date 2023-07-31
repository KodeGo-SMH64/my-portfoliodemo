//================SIMPLE EFFECT ONLY======================
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// document.querySelector("h1").onmouseover = event => {
//   let iterations = 0;

//   const interval = setInterval(() => {  
//     event.target.innerText = event.target.innerText.split("")
//       .map((letter, index) => {
//         if (index < iterations) {
//           return event.target.dataset.value[index];
//         }
//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iterations >= event.target.dataset.value.length) {
//       clearInterval(interval);
//     }

//     iterations += 1 / 3;
//   }, 30);
// };


//=================MODIFIED TEXT EFFECT=====================
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.addEventListener("DOMContentLoaded", () => {
  const h1Element = document.querySelector("h1");
  const value = h1Element.dataset.value;
  const randomLetters = getRandomLetters(value.length);

  animateText(h1Element, randomLetters);
});

document.querySelector("h1").addEventListener("mouseover", event => {
  const h1Element = event.target;
  const value = h1Element.dataset.value;

  animateText(h1Element, value);
});

function getRandomLetters(length) {
  let randomLetters = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    randomLetters += letters[randomIndex];
  }
  return randomLetters;
}

function animateText(element, targetText) {
  let iterations = 0;
  const interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return targetText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations >= targetText.length) {
      clearInterval(interval);
    }

    iterations++;
  }, 30);
}

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const { clientX, clientY } = event;

  const blobRect = blob.getBoundingClientRect();
  const offsetX = blobRect.width / 2;
  const offsetY = blobRect.height / 2;

  const left = clientX - offsetX;
  const top = clientY - offsetY;

  blob.style.left = `${left}px`;
  blob.style.top = `${top}px`;
};

const heading = document.getElementById("animated-heading");

function animateGradient() {
  const gradientAnimation = `linear-gradient(to right, #ff6e7f, #bfe9ff)`;
  const animationDuration = 10; // Animation duration in seconds
  const animationDelay = 0.2; // Delay before animation starts in seconds

  heading.style.animation = `gradientAnimation ${animationDuration}s ease-in-out infinite`;
  heading.style.animationDelay = `${animationDelay}s`;
}

animateGradient();



