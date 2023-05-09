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

  function replaceTextOnScreenResize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 430) {
      var textContainer = document.getElementById("textContainer");
      var text = textContainer.innerHTML;
      text = text.replace("24小时在线客服", "客服");
      textContainer.innerHTML = text;
    }
  }

  // Call the function initially
  replaceTextOnScreenResize();

  // Add event listener to call the function when the screen is resized
  window.addEventListener("resize", replaceTextOnScreenResize);