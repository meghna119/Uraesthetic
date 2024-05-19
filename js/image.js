function displayImages() {
    const imageFolder = "images/Capsule wardrobe management"; // Replace with the actual path
    const imageCount = 50; // Adjust based on the actual number of images
  
    const imageContainer = document.getElementById("image-container"); // Assuming an element with this ID exists
  
    for (let i = 1; i <= imageCount; i++) {
      const imageUrl = imageFolder + "image" + i + ".jpg"; // Assuming image format is JPG
  
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", imageUrl);
      imageElement.setAttribute("alt", "Image Description " + i); // Provide a descriptive alt text for accessibility
  
      // Error handling to gracefully handle missing images:
      imageElement.onerror = function() {
        this.src = "path/to/placeholder-image.jpg"; // Replace with a placeholder image path
        console.error("Error loading image:", imageUrl);
      };
  
      imageContainer.appendChild(imageElement);
    }
  }
  
  // Call the function to display images when the page loads
  window.onload = displayImages;
  function showImages(gender) {
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    const basePath = gender === 'male' ? 'images/Capsule wardrobe management men/' : 'images/Capsule wardrobe management women/';
    for (let i = 1; i <= 40; i++) {
        const img = document.createElement('img');
        img.src = basePath + i + '.png';
        img.alt = `Image ${i}`;
        imageContainer.appendChild(img);
    }
}
