document.addEventListener("DOMContentLoaded", () => {
  // --- Button Interaction ---
  const clickMeButton = document.getElementById("clickMeButton");
  if (clickMeButton) {
    clickMeButton.addEventListener("click", function() {
      this.textContent = "You clicked me!";
      this.classList.add("clicked"); // Add a class for styling
      setTimeout(() => {
        this.textContent = "Click me";
        this.classList.remove("clicked"); // Remove the class
      }, 2000);
    });
  }

  // --- Gallery Hover Effect ---
  const gallery = document.getElementById("gallery");
  if (gallery) {
    gallery.style.cursor = "pointer";
    gallery.addEventListener("mouseover", () => {
      gallery.classList.add("hovered"); // Add a class for hover styling
    });
    gallery.addEventListener("mouseout", () => {
      gallery.classList.remove("hovered"); // Remove the hover class
    });
  }

  // --- Keypress Detection ---
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      alert("You pressed Enter or Space!");
    }
  });

  // --- Double Click Detection ---
  let lastClickTime = 0;
  document.documentElement.addEventListener("click", () => {
    const currentTime = Date.now();
    if (currentTime - lastClickTime < 600) {
      alert("Double click detected!");
    } else {
      lastClickTime = currentTime;
    }
  });

  // --- Image Gallery Slideshow ---
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  let currentImageIndex = 0;
  const galleryImg = document.getElementById("galleryImg");
  if (galleryImg) {
    setInterval(() => {
      galleryImg.src = images[currentImageIndex];
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }, 3000);
    galleryImg.addEventListener("click", () => {
      galleryImg.src = images[0];
    });
  }

  // --- Form Validation ---
  const form = document.getElementById("myForm");
  if (form) {
    form.addEventListener("input", (event) => {
      const target = event.target;
      const feedbackElement = target.nextElementSibling;

      const updateValidation = (isValid, message) => {
        target.style.borderColor = isValid ? "green" : "red";
        feedbackElement.textContent = message;
      };

      if (target.name === "name") {
        updateValidation(target.value !== "", "Name is required.");
      } else if (target.name === "email") {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value);
        updateValidation(isValidEmail, isValidEmail ? "" : "Not a valid email format.");
      } else if (target.name === "password") {
        updateValidation(target.value.length >= 8, "Password should be at least 8 characters.");
      }
    });
  }
});