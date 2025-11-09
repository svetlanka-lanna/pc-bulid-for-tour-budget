const navbar = document.querySelector('.header__nav')

//console.log(navbar)

// Получаем коллекцию всех тегов ссылок
const links = navbar.querySelectorAll('a')

//console.log(links)

// Вешаем на каждый элемент обработчик события по клику:
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        // предотвращаем стандартное поведение браузера методом события event .preventDefault:
        event.preventDefault()

        //console.log(seamless); // {elementScroll: ƒ, elementScrollBy: ƒ, elementScrollByPolyfill: ƒ, elementScrollIntoView: ƒ, elementScrollIntoViewPolyfill: ƒ, …}

        const section = document.querySelector(link.getAttribute('href'))
        if (section) {

            // Новый метод .scrollIntoView не работает в IOS и Safari:
            //section.scrollIntoView({
            //    block: 'start',
            //    behavior: 'smooth'
            //})

            // Поэтому подключив библиотеку https://www.npmjs.com/package/seamless-scroll-polyfill, выводим кроссбраузерное решение с двумя аргументами:
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    })
})


