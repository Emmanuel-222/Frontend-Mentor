const SendForm = (e) => {
    e.preventDefault();

    const overlay = document.getElementById("successOverlay");
    const spinnerContainer = document.querySelector(".spinner-container");
    const spinner = document.querySelector(".spinner");

    if(spinner && spinnerContainer) {
      spinner.classList.add('active');
      spinnerContainer.classList.add('active');
    }

    const templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    emailjs.send("service_kjr4ioq", "template_wheoytp", templateParams)
      .then((response) => {

        if(spinner && spinnerContainer) {
          spinner.classList.remove('active');
          spinnerContainer.classList.remove('active');
        }
        overlay.classList.add("active");
  
        setTimeout(() => {
          overlay.classList.remove("active");
        }, 3000);
  
        // Reset form
        document.querySelector(".contact-form").reset();
  
        console.log("Success! " + response.status + ": " + response.text);
      })
      .catch((error) => {
        console.log("Failed to send: " + error.text);
      });
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".contact-form").addEventListener("submit", SendForm);
  
    // Add close button handler
    document.getElementById("closeOverlay").addEventListener("click", () => {
      document.getElementById("successOverlay").classList.remove("active");
    });
  });
  