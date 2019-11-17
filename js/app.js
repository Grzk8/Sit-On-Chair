document.addEventListener("DOMContentLoaded", function () {


    console.log("DOM");

    var next = document.querySelector(".btn-next");
    var prev = document.querySelector('.btn-prev');
    var list = document.querySelectorAll('.list li');
    var listArr = [];

    console.log(list);

    for (var i=0; i<list.length; i++){
        listArr.push(list[i]);
    }

    var index = 0;

    listArr[index].style.display = "initial";

    prev.addEventListener("click", function() {
        console.log("click");
        listArr[index].style.display = "none";
        index--;
        if (index < 0) {
            index = listArr.length - 1;
        }
        listArr[index].style.display = "initial";
    });

    next.addEventListener("click", function() {
        listArr[index].style.display = "none";
        index++;
        if (index >= listArr.length) {
            index = 0;
        }
        listArr[index].style.display = "initial";
    });


})


var clair = document.querySelector(".image1");

clair.addEventListener('mouseover',function () {
    clair.firstElementChild.classList.add("hide-name");
});

clair.addEventListener('mouseout',function () {
    clair.firstElementChild.classList.remove("hide-name");
});

var margarita = document.querySelector(".image2");

margarita.addEventListener('mouseover',function () {
    margarita.firstElementChild.classList.add("hide-name");
});

margarita.addEventListener('mouseout',function () {
    margarita.firstElementChild.classList.remove("hide-name");
});