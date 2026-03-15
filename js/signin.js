// ambil elemen
const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const loginBtn = document.getElementById("loginBtn");

const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e){

    // cek apakah kosong
    if(email.value.trim() === "" && password.value.trim() === ""){

        e.preventDefault();

        formMessage.classList.remove("hidden");

        return;
    }

});

// sembunyikan pesan saat mulai mengetik
email.addEventListener("input", hideMessage);
password.addEventListener("input", hideMessage);

function hideMessage() {

    formMessage.classList.add("hidden");

}

// fungsi validasi
function validateForm() {

    let valid = true;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    // validasi email
    if (email.value.trim() === "") {
        showError(email, emailError, "Email tidak boleh kosong");
        valid = false;
    }
    else if (!emailPattern.test(email.value)) {
        showError(email, emailError, "Format email tidak valid");
        valid = false;
    }
    else {
        hideError(email, emailError);
    }

    // validasi password
    if (password.value.trim() === "") {
        showError(password, passwordError, "Sandi tidak boleh kosong");
        valid = false;
    }
    else if (password.value.length < 8) {
        showError(password, passwordError, "Sandi minimal 8 karakter");
        valid = false;
    }
    else {
        hideError(password, passwordError);
    }

    // aktif / nonaktif tombol
    if (valid) {

        loginBtn.disabled = false;
        loginBtn.classList.remove("opacity-50", "cursor-not-allowed");

        formMessage.classList.add("hidden");

    } else {

        loginBtn.disabled = true;
        loginBtn.classList.add("opacity-50", "cursor-not-allowed");

        formMessage.classList.remove("hidden");
    }

}


// tampilkan error
function showError(input, errorElement, message) {

    errorElement.textContent = message;
    errorElement.classList.remove("hidden");

    input.classList.add("border-red-500");

}


// sembunyikan error
function hideError(input, errorElement) {

    errorElement.classList.add("hidden");

    input.classList.remove("border-red-500");

}


// cek saat user mengetik
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);


// saat submit
form.addEventListener("submit", function(e){

    e.preventDefault();

    // jika kedua input kosong
    if(email.value.trim() === "" && password.value.trim() === ""){

        formMessage.classList.remove("hidden");
        return;

    }

    validateForm();

    if (!loginBtn.disabled) {

        alert("Login berhasil!");

        // redirect jika perlu
        // window.location.href = "dashboard.html";
    }

});