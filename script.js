let boxes = document.querySelectorAll('.box')

boxes.forEach ( box => {
    box.onmouseenter = () => {
        box.classList.add('active')
    }
})