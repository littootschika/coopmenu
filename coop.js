window.onload = function() {
  var images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ];

  var randomIndex = Math.floor(Math.random() * images.length);
  var selectedImage = images[randomIndex];

  document.body.style.backgroundImage = "url('" + selectedImage + "')";
};
