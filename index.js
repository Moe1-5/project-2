const main = document.getElementById('main-container')
const drinks = document.querySelector('.drinks')
const snacks = document.querySelector('.snacks')
const hooka = document.querySelector('.hooka')
const all = document.querySelector('.all')
const Menu = [
    {
        name: "Hot Coffee",
        price: "$10",
        Image: "./images/hot-coffee.avif",
        category: "drinks"
    },
    {
        name: "Ice Coffee",
        price: "$10",
        Image: "./images/ice-coffee.png",
        category: "drinks"

    }, {
        name: "Slushie",
        price: "$10",
        Image: "./images/two-color-slushie-1.jpg",
        category: "drinks"
    },
    {
        name: "Croissant",
        price: "$10",
        Image: "./images/croissant-1.jpg",
        category: "snacks"

    },
    {
        name: "Muffin",
        price: "$10",
        Image: "./images/muffin-2.jpg",
        category: "snacks"

    },
    {
        name: "Tropicana",
        price: "$10",
        Image: "./images/tropicana.webp",
        category: "drinks"

    },
    {
        name: "Pepsi",
        price: "$10",
        Image: "./images/pepsi.webp",
        category: "drinks"

    },
    {
        name: "Gallon Milk",
        price: "$10",
        Image: "./images/gallon-milk.webp",
        category: "drinks"

    },
    {
        name: "Water",
        price: "$10",
        Image: "./images/water.webp",
        category: "drinks"

    },
    {
        name: "Oreo",
        price: "$10",
        Image: "./images/oreo.webp",
        category: "snacks"
    },
    {
        name: "Cheetos",
        price: "$10",
        Image: "./images/cheetos.jpeg",
        category: "snacks"

    },
    {
        name: "Takis",
        price: "$10",
        Image: "./images/Takis.jpeg",
        category: "snacks"

    },
    {
        name: "Doritos",
        price: "$10",
        Image: "./images/doritos.jpg",
        category: "snacks"

    },
    {
        name: "Lays",
        price: "$10",
        Image: "./images/lays.jpeg",
        category: "snacks"

    },
    {
        name: "Cereal",
        price: "$10",
        Image: "./images/cereal.jpeg",
        category: "snacks"

    },
    {
        name: "Tissue Scott",
        price: "$10",
        Image: "./images/tissue.jpeg",
        category: "Others"

    },
    {
        name: "Hooka",
        price: "$10",
        Image: "./images/hooka.jpeg",
        category: "Others"

    },
    {
        name: "Raw Papers",
        price: "$10",
        Image: "./images/raw-papers.webp",
        category: "Others"
    },
]


function displayMenu(item) {
    main.innerHTML = '';
    for (let i = 0; i < item.length; i++) {
        const productDiv = document.createElement('div')
        productDiv.className = 'product-container'
        productDiv.innerHTML = ` 
                <span class = 'product-image'>  
                <image src = '${item[i].Image}' alt = '${item[i].name}' />
                </span>
                <div class="product-details">
                    <p class="product-name">${item[i].name}</p>
                    <p>${item[i].price}</p>
                </div>
                `
        main.appendChild(productDiv)
    }
}

displayMenu(Menu)


drinks.addEventListener('click', () => {
    const filterDrinks = Menu.filter(item => item.category === 'drinks')
    displayMenu(filterDrinks)
})


snacks.addEventListener('click', () => {
    const filterSnacks = Menu.filter(item => item.category === 'snacks')
    displayMenu(filterSnacks)
})

hooka.addEventListener('click', () => {
    const filterHooka = Menu.filter(item => item.category === 'Others')
    displayMenu(filterHooka)
})

all.addEventListener('click', () => {
    displayMenu(Menu)
})
