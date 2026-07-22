
const soal = [

{
pertanyaan:
"Dasar negara Republik Indonesia adalah?",

pilihan:[
"Pancasila",
"UUD 1945",
"Garuda Pancasila",
"Indonesia Raya"
],

jawaban:0,

penjelasan:
"Pancasila merupakan dasar negara dan ideologi bangsa Indonesia."
},


{
pertanyaan:
"Semboyan Bhinneka Tunggal Ika memiliki arti?",

pilihan:[
"Bersatu kita teguh",
"Berbeda-beda tetapi tetap satu",
"Indonesia negara besar",
"Semua budaya sama"
],

jawaban:1,

penjelasan:
"Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu."
},



{
pertanyaan:
"Bahasa resmi negara Indonesia adalah?",

pilihan:[
"Bahasa Jawa",
"Bahasa Inggris",
"Bahasa Indonesia",
"Bahasa Melayu"
],

jawaban:2,

penjelasan:
"Bahasa Indonesia menjadi bahasa persatuan bangsa."
},



{
pertanyaan:
"Lambang negara Indonesia adalah?",

pilihan:[
"Burung Garuda",
"Komodo",
"Harimau",
"Rajawali"
],

jawaban:0,

penjelasan:
"Garuda Pancasila merupakan lambang resmi negara Indonesia."
},



{
pertanyaan:
"Lagu kebangsaan Indonesia adalah?",

pilihan:[
"Bagimu Negeri",
"Indonesia Raya",
"Tanah Airku",
"Maju Tak Gentar"
],

jawaban:1,

penjelasan:
"Indonesia Raya merupakan lagu kebangsaan Indonesia."
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


button.className=
"block w-full text-left bg-white p-5 rounded-2xl hover:bg-[#F7D87F] transition font-semibold";


button.onclick=()=>cekJawaban(i);


pilihan.appendChild(button);


});


}



function cekJawaban(jawaban){


let data=soal[index];


let buttons=pilihan.children;


for(let btn of buttons){

btn.disabled=true;

}



if(jawaban===data.jawaban){

skor++;

buttons[jawaban].classList.add(
"bg-green-300"
);

}

else{

buttons[jawaban].classList.add(
"bg-red-300"
);

buttons[data.jawaban].classList.add(
"bg-green-300"
);

}


next.classList.remove("hidden");


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