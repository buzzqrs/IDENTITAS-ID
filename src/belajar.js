const soal = [

{
pertanyaan:
"Pada lambang Garuda Pancasila, jumlah bulu pada masing-masing sayap melambangkan tanggal Proklamasi Kemerdekaan. Berapakah jumlah bulu pada setiap sayap?",

pilihan:[
"16",
"17",
"18",
"19"
],

jawaban:1,

penjelasan:
"Setiap sayap Garuda memiliki 17 bulu yang melambangkan tanggal 17 Agustus 1945."
},

{
pertanyaan:
"Semboyan 'Bhinneka Tunggal Ika' yang terdapat pada pita Garuda Pancasila memiliki makna...",

pilihan:[
"Semua budaya harus sama",
"Persatuan dalam keberagaman",
"Indonesia hanya memiliki satu budaya",
"Persatuan melalui kekuatan militer"
],

jawaban:1,

penjelasan:
"Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu."
},

{
pertanyaan:
"Bahasa Indonesia ditetapkan sebagai bahasa persatuan melalui peristiwa...",

pilihan:[
"Pembukaan UUD 1945",
"Konferensi Meja Bundar",
"Sumpah Pemuda 1928",
"Proklamasi Kemerdekaan"
],

jawaban:2,

penjelasan:
"Bahasa Indonesia diikrarkan sebagai bahasa persatuan pada Sumpah Pemuda tahun 1928."
},

{
pertanyaan:
"Makna warna merah pada bendera Sang Merah Putih adalah...",

pilihan:[
"Kesucian",
"Keberanian",
"Keadilan",
"Persatuan"
],

jawaban:1,

penjelasan:
"Warna merah melambangkan keberanian, sedangkan putih melambangkan kesucian."
},

{
pertanyaan:
"Lagu kebangsaan Indonesia Raya pertama kali diperkenalkan kepada publik pada...",

pilihan:[
"Sumpah Pemuda II tahun 1928",
"Proklamasi Kemerdekaan",
"Sidang BPUPKI",
"Konferensi Asia Afrika"
],

jawaban:0,

penjelasan:
"Indonesia Raya pertama kali diperdengarkan pada Kongres Pemuda II tahun 1928."
},

{
pertanyaan:
"Pancasila berkedudukan sebagai...",

pilihan:[
"Undang-Undang Dasar",
"Dasar Negara dan Ideologi Nasional",
"Lambang Negara",
"Konstitusi Sementara"
],

jawaban:1,

penjelasan:
"Pancasila merupakan dasar negara sekaligus ideologi bangsa Indonesia."
},

{
pertanyaan:
"Lambang bintang pada sila pertama Pancasila melambangkan...",

pilihan:[
"Persatuan",
"Cahaya Ketuhanan",
"Kesejahteraan",
"Keadilan Sosial"
],

jawaban:1,

penjelasan:
"Bintang emas melambangkan cahaya Ketuhanan Yang Maha Esa."
},

{
pertanyaan:
"Pelestarian budaya lokal penting dilakukan karena...",

pilihan:[
"Mengurangi keberagaman",
"Menjadi identitas dan kekayaan bangsa",
"Menggantikan budaya nasional",
"Hanya untuk kebutuhan pariwisata"
],

jawaban:1,

penjelasan:
"Budaya lokal merupakan bagian penting dari identitas nasional Indonesia."
}

];


let index = 0;

let skor = 0;


const pertanyaan =
document.getElementById("pertanyaan");


const pilihan =
document.getElementById("pilihan");


const nomor =
document.getElementById("nomor");


const next =
document.getElementById("next");



function tampilkanSoal(){


let data = soal[index];


nomor.innerHTML =
`${index+1}/${soal.length}`;


pertanyaan.innerHTML =
data.pertanyaan;


pilihan.innerHTML="";


data.pilihan.forEach((item,i)=>{


let button=document.createElement("button");


button.innerHTML=item;


button.className =
"block w-full text-left bg-white p-5 rounded-2xl transition-all duration-300 hover:bg-[#F7D87F] hover:scale-[1.02] font-semibold";


button.onclick=()=>cekJawaban(i);


pilihan.appendChild(button);


});


}



function cekJawaban(jawaban){

const data = soal[index];
const buttons = pilihan.children;

// matikan semua tombol
for(let btn of buttons){
    btn.disabled = true;
}

// kasih efek tombol yang dipilih
buttons[jawaban].classList.add("scale-95");

setTimeout(()=>{

    buttons[jawaban].classList.remove("scale-95");

    if(jawaban === data.jawaban){

        skor++;

        buttons[jawaban].style.backgroundColor="#22c55e";
        buttons[jawaban].style.color="white";

    }else{

        buttons[jawaban].style.backgroundColor="#ef4444";
        buttons[jawaban].style.color="white";

        buttons[data.jawaban].style.backgroundColor="#22c55e";
        buttons[data.jawaban].style.color="white";
    }

    next.classList.remove("hidden");

},150);

}



next.onclick=()=>{


index++;


next.classList.add("hidden");



if(index < soal.length){

tampilkanSoal();

}

else{


document.querySelector("#pertanyaan")
.parentElement.classList.add("hidden");


document.querySelector("#hasil")
.classList.remove("hidden");


document.querySelector("#score")
.innerHTML=
`Kamu mendapatkan ${skor}/${soal.length} poin 🎉`;

}


}



tampilkanSoal();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, {
    threshold: 0.15,
});

document.querySelectorAll(".animate-card").forEach((card) => {
    observer.observe(card);
});

// ==========================
// ACCORDION
// ==========================

const accordionButtons =
document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((button)=>{

button.addEventListener("click",()=>{

const content =
button.nextElementSibling;

const icon =
button.querySelector("span:last-child");

document.querySelectorAll(".accordion-content").forEach((item)=>{

if(item!==content){

item.classList.add("hidden");

}

});

document.querySelectorAll(".accordion-btn span:last-child").forEach((i)=>{

if(i!==icon){

i.innerHTML="+";

}

});

content.classList.toggle("hidden");

icon.innerHTML=
content.classList.contains("hidden") ? "+" : "−";

});

});

// =========================
// IMAGE SLIDER
// =========================

const slider = document.getElementById("slider");

const slides = slider.children;

const prev = document.getElementById("prevSlide");

const nextSlide = document.getElementById("nextSlide");

const dots = document.getElementById("dots");

let currentSlide = 0;

// buat indikator
for(let i=0;i<slides.length;i++){

    let dot=document.createElement("div");

    dot.className=
    "w-3 h-3 rounded-full bg-white/60 cursor-pointer";

    dot.onclick=()=>{

        currentSlide=i;

        updateSlider();

    };

    dots.appendChild(dot);

}

function updateSlider(){

    slider.style.transform=
    `translateX(-${currentSlide*100}%)`;

    [...dots.children].forEach((dot,index)=>{

        if(index===currentSlide){

            dot.classList.remove("bg-white/60");

            dot.classList.add("bg-[#F7D87F]");

        }else{

            dot.classList.remove("bg-[#F7D87F]");

            dot.classList.add("bg-white/60");

        }

    });

}

nextSlide.onclick=()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    updateSlider();

}

prev.onclick=()=>{

    currentSlide--;

    if(currentSlide<0){

        currentSlide=slides.length-1;

    }

    updateSlider();

}

setInterval(()=>{

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    updateSlider();

},5000);

updateSlider();