// ambil elemen form
const form = document.getElementById("signupForm");

// input
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// tombol
const submitBtn = document.getElementById("submitBtn");

// pesan form kosong
const formMessage = document.getElementById("formMessage");

// error text
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");


// VALIDASI FORM
function validateForm() {

    let valid = true;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    // VALIDASI EMAIL
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


    // VALIDASI PASSWORD
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


    // VALIDASI CONFIRM PASSWORD
    if (confirmPassword.value.trim() === "") {
        showError(confirmPassword, confirmPasswordError, "Ulangi sandi terlebih dahulu");
        valid = false;
    }
    else if (confirmPassword.value !== password.value) {
        showError(confirmPassword, confirmPasswordError, "Sandi tidak sama");
        valid = false;
    }
    else {
        hideError(confirmPassword, confirmPasswordError);
    }


    // AKTIF / NONAKTIF TOMBOL
    if (valid) {

        submitBtn.disabled = false;
        submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
        submitBtn.classList.add("hover:bg-blue-400");

        formMessage.classList.add("hidden");

    } else {

        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-50", "cursor-not-allowed");

    }

}


// TAMPILKAN ERROR
function showError(input, errorElement, message) {

    errorElement.textContent = message;
    errorElement.classList.remove("hidden");

    input.classList.add("border-red-500");

}


// SEMBUNYIKAN ERROR
function hideError(input, errorElement) {

    errorElement.classList.add("hidden");

    input.classList.remove("border-red-500");

}


// CEK SAAT USER MENGETIK
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);


// SUBMIT FORM
form.addEventListener("submit", function(e){

    e.preventDefault();

    // jika semua kosong
    if(
        email.value.trim() === "" &&
        password.value.trim() === "" &&
        confirmPassword.value.trim() === ""
    ){

        formMessage.classList.remove("hidden");
        return;

    }

    validateForm();

    // jika valid
    if (!submitBtn.disabled) {

        alert("Pendaftaran berhasil!");

        // nanti bisa disambungkan ke backend
        // contoh redirect:
        // window.location.href = "login.html";

    }

});


// HILANGKAN PESAN SAAT USER MULAI MENGETIK
function hideMessage() {
    formMessage.classList.add("hidden");
}

email.addEventListener("input", hideMessage);
password.addEventListener("input", hideMessage);
confirmPassword.addEventListener("input", hideMessage);