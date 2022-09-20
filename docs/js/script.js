const btnOpen = document.querySelectorAll(".j-panel-btn");
const panel = document.querySelector(".j-panel");

btnOpen.forEach(function (btn){
    btn.addEventListener("click", function () {
            panel.classList.toggle('panel-show');
        }
    )
})