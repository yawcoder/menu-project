const menu = [
  {
    id: 1,
    title: "bugatti chiron",
    category: "sports",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `The CHIRON is the fastest, most powerful, and exclusive production super sports car in BUGATTI's history. Its sophisticated design, innovative technology, and iconic, performance-oriented form make it a unique masterpiece of art.`,
  },
  {
    id: 2,
    title: "mercedes s-class",
    category: "sedan",
    price: 13.99,
    img: "./images/item-2.jpg",
    desc: `The 2021 S-class sedan ushers in an all-new generation. It attempts to improve on the outgoing model by offering more style, more luxury, more space, and even more technology. `,
  },
  {
    id: 3,
    title: "jaguar f-type",
    category: "coupe",
    price: 6.99,
    img: "./images/item-3.jpg",
    desc: `Jaguar offers the 2022 F-Type with two versions of its supercharged 5.0-liter V8 engine. The base and R-Dynamic models produce 444 horsepower, while the F-Type R generates 575 horses.`,
  },
  {
    id: 4,
    title: "lamborghini aventador",
    category: "sports",
    price: 20.99,
    img: "./images/item-4.jpg",
    desc: `Listen to the iconic naturally aspirated V12 engine, a throbbing 740 CV heart that unleashes maximum power with a breathtaking soundtrack, reaching speeds of more than 217 mph (350 km/h). `,
  },
  {
    id: 5,
    title: "bentley flying spur",
    category: "sedan",
    price: 22.99,
    img: "./images/item-5.jpg",
    desc: `The Flying Spur offers an accomplished balance of luxurious comfort and thrilling performance, driven by either a 4.0 litre V8 engine or a 2.9 litre V6 hybrid powertrain. A sedan designed to stand out. `,
  },
  {
    id: 6,
    title: "ford mustang gt",
    category: "coupe",
    price: 18.99,
    img: "./images/item-6.jpg",
    desc: `In continuous production since 1964, the Mustang is currently the longest-produced Ford car nameplate. Currently in its sixth generation, it is the fifth-best selling Ford car nameplate.`,
  },
  {
    id: 7,
    title: "lykan hypersports",
    category: "sports",
    price: 8.99,
    img: "./images/item-7.jpg",
    desc: `The twin-turbocharged 3.7 liter flat-six engine makes a healthy 700 plus horsepower and is made in house by Ruf, legendary tuners of Porsches.`,
  },
  {
    id: 8,
    title: "audi a8",
    category: "sedan",
    price: 12.99,
    img: "./images/item-8.jpg",
    desc: `The A8 comes with a turbocharged V-6 rated at 335 horsepower which is augmented by a 48-volt hybrid system. At our test track, the A8 we tested sprinted from zero to 60 mph in 5.3 seconds.`,
  },
  {
    id: 9,
    title: "porsche 718 cayman",
    category: "coupe",
    price: 16.99,
    img: "./images/item-9.jpg",
    desc: `The 718 Cayman S comes equipped with a larger 2.5L turbocharged boxer 4-cylinder with 350 horsepower. For maximum exhilaration, the Porsche 718 Cayman GT4 is powered by a legendary 4.0 liter naturally aspirated six-cylinder engine`,
  },
];


const sectionCenter = document.querySelector(".section-center");
const  filterBtns = document.querySelectorAll(".filter-btn");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});
//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.value;
    const menuCategory = menu.filter(function(menuItem){
    //console.log(menuItem.category);
if(menuItem.category === category) {
  return menuItem;
}
    });
    //console.log(menuCategory);
    if(category === 'all'){
      displayMenuItems(menu);
    }
    else{
      displayMenuItems(menuCategory);
    }
  });
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item) {
    //console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo"  alt=${item.title}>
    <div class="item-info">
      <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
      </header>
      <p>${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};