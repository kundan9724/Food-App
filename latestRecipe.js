import navbar from "./navbar.js";

const Navbar = navbar({
    title1: "Home",
    title2: "Recipe",
    title3:"Latest Recipe"
})
const container = document.getElementById("navbar_container");
container.innerHTML = Navbar;

async function latestRecipe()
{
   
    
    try {
        let res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s`)
    let data = await res.json();
        console.log(data);
        displayFood(data.meals)
    }
    catch(err) {
        console.log(err)
    }
    
}
latestRecipe()
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
