function showImageOnMobile() {
    var windowWidth = window.innerWidth;
    var h5PicImage = document.querySelector(".h5-pic img");

    if (windowWidth <= 430) {
      h5PicImage.style.display = "block";
    } else {
      h5PicImage.style.display = "none";
    }
  }

  // Call the function when the window is resized
  window.addEventListener("resize", showImageOnMobile);

  // Call the function initially to set the image visibility based on the initial window size
  showImageOnMobile();