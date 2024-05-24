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
function lockIdiots(){
  let password = "zXCVBNM,./";
  let passwordBox = document.getElementById('passwordbox');
  let passwordBoxInput = passwordBox.value;
  console.log(passwordBoxInput);
  if (passwordBoxInput == password){
    window.open('https://littootschika.github.io/tschika-catcher/');
  }
  else{
    alert('doesn\'t have letters or numbers or special characters. Hint: it\'s the upper 2nd lower line from the track >;D');
  }
}
