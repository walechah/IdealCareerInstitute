const scriptURL = 'https://script.google.com/macros/s/AKfycbxd7xZGFsvHkyzC7okmz9hxbAKDhLBkX5cn4iNuEd2ACA3EN_8xP3Rhflmo-F0H-Invgw/exec';
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        alert("Thank you! Your form is submitted successfully.");
        form.reset(); // Reset the form after successful submission
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    })
    .catch(error => console.error('Error!', error.message));
});
