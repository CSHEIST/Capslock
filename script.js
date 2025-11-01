<script>
const textElement = document.querySelector('.typing-text');
const texts = ["We amplify", "Your presence"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;

function typeEffect() {
  const currentText = texts[textIndex];
  
  if (!isDeleting) {
    textElement.textContent = currentText.slice(0, ++charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      delay = 1000; // pause before deleting
    }
  } else {
    textElement.textContent = currentText.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 300;
    }
  }

  setTimeout(typeEffect, delay);
}

typeEffect();
</script>
