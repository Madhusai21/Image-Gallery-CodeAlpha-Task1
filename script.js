const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterImages = document.querySelectorAll(".filter-image");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterImages.forEach(filterImage => {
        filterImage.classList.add("hide");
        if (filterImage.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            filterImage.classList.remove("hide");
        }
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));


const fullImgBox = document.getElementById("fullImgBox");
const  fullImg = document.getElementById("fullImg");
function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src= pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}
