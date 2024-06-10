let form = document.getElementById("google-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch(
    "https://script.google.com/macros/s/AKfycbyEf6TrDldjgYfmnKx0prld-E77vZS065Y-iX8JdUj9fVBnjP3El7LHHVVNokgDeU2I/exec",
    {
      method: "POST",
      body: data,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      if (data === "Success") {
        Swal.fire("We'll Contact you soon !");

        // Clear placeholders
        document.getElementById("name").placeholder = "";
        document.getElementById("mail").placeholder = "";
        document.getElementById("mobile").placeholder = "";
        document.getElementById("message").placeholder = "";
        // Reset form fields
        form.reset();
      }
    })
    .catch((error) => console.error("Error:", error));
});
