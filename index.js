const openPopup = document.querySelector(".openPopup");
const popupContent = document.querySelector(".popupContent");
const closeIcon = document.querySelector(".closeIcon")

openPopup.addEventListener("click", ()=> {
    popupContent.style.display = 'block';
});

closeIcon.addEventListener("click", ()=> {
    popupContent.style.display = 'none'
})
