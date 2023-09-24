function ChangeBackground() {
const images = [
  "docs/assets/old fashion chicken.png",
  "docs/assets/tschika fetch the chips.png",
  "docs/assets/justice for shrimp.png",
  "docs/assets/find your inner tschika.png",
  "docs/assets/littoo tschika find about cybersaftey meme.png",
  "docs/assets/Tschika rave.png"
];
var randomIndex = Math.floor(Math.random() * images.length);
var selectedImage = images[randomIndex];
document.body.style.backgroundImage = "url('" + selectedImage + "')";
};

const stars = document.querySelectorAll('.rating input');

stars.forEach(star => {
  star.addEventListener('change', (e) => {
    const rating = e.target.value;
    console.log(`You rated with ${rating} stars!`);
  });
});
