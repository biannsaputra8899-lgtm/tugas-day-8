let students = [
    { name: "Fabian", score: 95 },
    { name: "Domba", score: 85 },
    { name: "Ariq", score: 70 },
    { name: "Ujang", score: 90 },
    { name: "Tama", score: 60 }
];

console.log("=== DAFTAR NILAI SISWA ===");

students.forEach((siswa) => {
    console.log(`Nama: ${siswa.name}, Nilai: ${siswa.score}`);
});


console.log("\n=== SISWA YANG LULUS ===");

let siswaLulus = students.filter((siswa) => {
    return siswa.score >= 75;
});

console.log(siswaLulus);


console.log("\n=== DAFTAR NAMA SISWA ===");

let daftarNama = students.map((siswa) => {
    return siswa.name;
});

console.log(daftarNama);


console.log("\n=== SISWA DENGAN NILAI MINIMAL 90 ===");

let siswaTerbaik = students.find((siswa) => {
    return siswa.score >= 90;
});

console.log(siswaTerbaik);


console.log("\n=== HASIL AKHIR ===");
console.log("Semua Siswa:", students);
console.log("Siswa Lulus:", siswaLulus);
console.log("Daftar Nama:", daftarNama);
console.log("Siswa Nilai Minimal 90:", siswaTerbaik);