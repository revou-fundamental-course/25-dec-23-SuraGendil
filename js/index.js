// Logika perhitungan untuk Luas
function calculateArea() {
    // Tampilkan konten Luas
    document.getElementById('luasResult').style.display = 'block';

    // Sembunyikan konten Keliling
    document.getElementById('kelilingResult').style.display = 'none';
}

// Logika perhitungan untuk Keliling
function calculatePerimeter() {
    // Tampilkan konten Keliling
    document.getElementById('kelilingResult').style.display = 'block';

    // Sembunyikan konten Luas
    document.getElementById('luasResult').style.display = 'none';
}

function calculateLuas() {
    // Ambil nilai panjang atas dan tinggi dari input
    var panjangAtas = parseFloat(document.getElementById('panjangAtas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    // Hitung luas
    var luas = 0.5 * panjangAtas * tinggi;

    // Tampilkan hasil luas
    document.getElementById('hasilLuas').innerHTML = "<p>Luas Segitiga: " + luas + "</p>";
}

function calculateKeliling() {
    // Ambil nilai panjang sisi A, B, dan C dari input
    var sisiA = parseFloat(document.getElementById('sisiA').value);
    var sisiB = parseFloat(document.getElementById('sisiB').value);
    var sisiC = parseFloat(document.getElementById('sisiC').value);

    // Hitung keliling
    var keliling = sisiA + sisiB + sisiC;

    // Menampilkan langkah-langkah perhitungan
    document.getElementById('hasilKeliling').innerHTML = "<p>Keliling Segitiga: " + keliling + "</p>";
    document.getElementById('hasilKeliling').style.display = 'block';
}

// Fungsi untuk mereset formulir
function resetForm() {
    document.getElementById('panjangAtas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('hasilLuas').innerHTML = '';
    document.getElementById('hasilKeliling').innerHTML = '';
}
