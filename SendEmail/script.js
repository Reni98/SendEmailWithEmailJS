(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "PublicKey",
    });
})();

const msg = document.querySelector(".form-message");

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        document.querySelector(".loader").classList.add("show");
        msg.innerHTML = "";
        msg.innerHTML += "<span class='succes-msg'>E-mail sent</span>"
        msg.classList.add("show");
        setTimeout(() => msg.classList.remove("show"), 2000);

        emailjs.sendForm('ServiceKey', 'TemplateKey', this)
            .then(

                function() {
                    document.getElementById("control-form").requestFullscreen();
                },
                
             (error) => {
                console.log('FAILED...', error);
            });
    });
}

