// var moveDiv = document.getElementById('cursor_custom');

//  window.onmousemove = function (e) {
//      var x = e.pageX,
//          y = e.pageY;
//      moveDiv.style.top = (y + 0) + 'px';
//      moveDiv.style.left = (x + 0) + 'px';
//  };

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})


