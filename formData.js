const scriptURL =
  "https://script.google.com/macros/s/AKfycbzJWCPkXRk4eJ7DmXLVcL4CMoG8lTE0dKJLQOyV6q-_bKDkhB07dXe-X8qJ2dVnZRsn-A/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// response of the sbmission

document.getElementById("btnSubmit").addEventListener("click", function () {
  alert("The Form Submitted Successfully!");
});
