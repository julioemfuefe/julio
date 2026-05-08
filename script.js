// Fungsi untuk Pesan via WhatsApp
function pesanWA(namaProduk) {
    const nomorWA = "6282337522021";
    const pesan = `Halo Kedai Digital, saya ingin memesan menu: *${namaProduk}*. Mohon informasi selanjutnya.`;
    const url = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(pesan)}`;
    
    window.open(url, '_blank');
}

// Logika Login Sederhana
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    
    if(user === "admin" && pass === "kedai123") {
        alert("Login Berhasil! Selamat datang admin.");
    } else {
        alert("Username atau Password salah. Silakan coba lagi.");
    }
});
