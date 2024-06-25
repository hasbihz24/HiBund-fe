function Validation(values) {
    let error = {};

    // Email validation pattern
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password validation pattern
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,32}$/;

    // Nama validation
    if (values.nama === "") {
        error.nama = "Nama tidak boleh kosong";
    } else {
        error.nama = "";
    }

    // Nomor Telephone validation
    if (values.no_tlp === "") {
        error.no_tlp = "Nomor telephone tidak boleh kosong";
    } else {
        error.no_tlp = "";
    }

    // Email validation
    if (values.email === "") {
        error.email = "Email tidak boleh kosong";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Format email tidak valid";
    } else {
        error.email = "";
    }

    // Password validation
    if (values.password === "") {
        error.password = "Password tidak boleh kosong";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password harus antara 8 sampai 32 karakter, mengandung huruf besar, angka, dan satu karakter khusus";
    } else {
        error.password = "";
    }

    return error;
}

export default Validation;
