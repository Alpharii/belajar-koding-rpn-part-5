// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai



// algoritma
//membuat sebuah game sederhana bernama Proxytia
//pertama-tama menyiapkan 2 variabel yaitu nama dan peran yang berisi data
//kalau nama kosong kita mendapat peringatan dari gamenya
//kalau peran kosong kita mendapat peringatan dari gamenya
//terdapat 3 peran kstaria,tabib,penyihir
//terdapat 4 output yang tergantung dari peran yang dipilih (ksatria,tabib,penyihir, dan peran selain 3 ini)
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

let nama = "alphari";
let peran = "";


//code disini gunakan console.log untuk outputnya
if (nama.length <= 0) {
    console.log("Nama wajib diisi")
};

if (peran.length <= 0) {
    console.log("Pilih Peranmu untuk memulai game")
};

if (peran == "ksatria"){
    console.log("halo ksatria " + nama + " kamu dapat menyerang dengan senjatamu ")
} else if (peran == "tabib"){
    console.log("halo tabib " + nama + " kamu akan membantu temanmu yang terluka ")
} else if (peran == "penyihir"){
    console.log("halo penyihir " + nama + " ciptakan keajaiban yang membantu kemenanganmu! ")
} else {
    console.log("tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada")
}
