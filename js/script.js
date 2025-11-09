const contents = document.querySelectorAll('.program-line__content')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    //console.log(elem)
    //console.dir(title)

    const descr = elem.querySelector('.program-line__descr')
    console.dir(descr.classList)

    title.addEventListener('click', () => {
        descr.classList.toggle('active')
    })
 })


