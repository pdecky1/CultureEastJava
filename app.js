const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})




const dmakanan = "json/indexmakanan.json";
const MContainer = document.querySelector('#dataM-container');

const getListM = () => {
    fetch(dmakanan)
    .then(response =>  {
        return response.json();
    }).then(responseJson => {
        console.log(responseJson);
        MContainer.innerHTML = "";
        let mkn = responseJson;
        mkn.forEach(item => {
            MContainer.innerHTML += `
            
                <a href="${item.link}" id="popup-link" class="mx-5 ">
                    <div class="flex flex-col items-center py-7 px-8">
                        <div>
                        <img src="${item.imageUrl}" alt="">
                        </div>
            
                        <div class="flex flex-col items-center py-9 pt-4" >
                        <h1 class="font-bold text-2xl text-center pb-4">${item.judul}</h1>
                        <p class="font-semibold text-xl text-justify" style="max-width: 500px;">${item.deskripsi}</p>
                        </div>
                    </div>
                </a>
            
            `
        });

    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', getListM);


const dkesenian = "json/indexkesenian.json";
const KContainer = document.querySelector('#dataK-container');

const getListK = () => {
    fetch(dkesenian)
    .then(response =>  {
        return response.json();
    }).then(responseJson => {
        console.log(responseJson);
        KContainer.innerHTML = "";
        let ksn = responseJson;

        ksn.forEach(item => {
            KContainer.innerHTML += `
            
            <a href="${item.link}" class="mx-5">
            <div class="flex flex-col items-center py-7 px-8">
                <div>
                <img src="${item.imageUrl}" alt="">
                </div>
    
                <div class="flex flex-col items-center py-9 pt-4" >
                <h1 class="font-bold text-2xl text-center pb-4">${item.judul}</h1>
                <p class="font-semibold text-xl text-justify" style="max-width: 500px;">${item.deskripsi}</p>
                </div>
            </div>
        </a>
            
            `
        });

    }).catch(error => {
        console.error(error);
    })
}

document.addEventListener('DOMContentLoaded', getListK);



