function ChangeBackground() {
const images = [
  "docs/assets/old fashion chicken.png",
  "docs/assets/tschika fetch the chips.png",
  "docs/assets/justice for shrimp.png",
  "docs/assets/find your inner tschika.png"
];
var randomIndex = Math.floor(Math.random() * images.length);
var selectedImage = images[randomIndex];

document.body.style.backgroundImage = "url('" + selectedImage + "')";
};
