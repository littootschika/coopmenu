function changeBackground() {
const images = [
  "docs/assets/old fashion chicken.png",
  "docs/assets/tschika fetch the chips.png",
  "docs/assets/justice for shrimp.png",
  "docs/assets/find your inner tschika.png",
  "docs/assets/littoo tschika find about cybersaftey meme.png",
  "docs/assets/Tschika rave.png"
];
const randomIndex = Math.floor(Math.random() * images.length);
let selectedImage = images[randomIndex];
document.body.style.backgroundImage = "url('" + selectedImage + "')";
};
function lockIdiots() {
  const keyboardLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
  const passwordBox = document.getElementById('passwordbox');
  let passwordBoxInput = passwordBox.valueOf();
  try {
    if (passwordBoxInput.includes(keyboardLetters) && passwordBoxInput !== "zxcvbnm,./"){
      throw "The password does not contain letters";
    }
  }
  catch(err){
    alert(err);
  }
  if (passwordBoxInput == 'zxcvbnm,./'){
    alert('YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    window.open('https://littootschika.github.io/tschika-catcher/');
  }
}
