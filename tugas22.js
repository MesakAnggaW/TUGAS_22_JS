let kalimat = "Saya ingin belajar bersama";
kalimat = kalimat.split(" ");

kalimat.forEach(tampilkan);

function tampilkan(x, y) {
    console.log("Item :", x, "Index ke ", y);
}