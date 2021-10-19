import navbar from "./navbar.js";

const Navbar = navbar({
    title1: "Home",
    title2: "Recipe",
    title3:"Latest Recipe"
})
const container = document.getElementById("navbar_container");
container.innerHTML = Navbar;


const debounce = function (fn, d)
{
    let timer;
    return function ()
    {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        },d)
        }
}
    const debounceSearch=debounce(foodApp,500)

async function foodApp()
{
    const input = document.getElementById("search").value;
    
    try {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    let data = await res.json();
        console.log(data);
        displayFood(data.meals)
    }
    catch(err) {
        console.log(err)
    }
    
}

function displayFood(data)
{
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < data.length;i++)
    {
        console.log(data[i].strMeal)
        let div = document.createElement("div");
        div.className = "foods";
        let imgDiv = document.createElement("div");
        imgDiv.className="imgDiv"
        let img = document.createElement("img");
        img.src = data[i].strMealThumb;
        let p = document.createElement("p");
        p.innerHTML = data[i].strMeal;
         let mealCategory = document.createElement("p");
    mealCategory.innerHTML = `Category: ${data[i].strCategory}`;
        imgDiv.append(img);
        div.append(imgDiv,p,mealCategory);
        container.append(div);
      }
}

const button = document.getElementById("recipe");
button.addEventListener("click", foodApp);
const input = document.getElementById("search");
input.onkeyup = debounceSearch;


    