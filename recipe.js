import navbar from "./navbar.js";
const Navbar = navbar({
    title1: "Home",
    title2: "Recipe",
    title3:"Latest Recipe"
})
const container = document.getElementById("navbar_container");
container.innerHTML = Navbar;


async function randomRecipe()
{
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        let data = await res.json();
        console.log(data.meals[0]);
        displayRecipe(data.meals[0]);
        return data.meals[0].strInstructions;
    }
    catch {
        
    }
}
 let button = document.createElement("button");
    button.innerHTML = "Read More";
button.id = "btn";
    
function displayRecipe(data)
{
    let container = document.getElementById("container");
    let div = document.createElement("div");
    div.className="recipe"
    let imgDiv = document.createElement("div");
     imgDiv.className="imgDiv"
    let img = document.createElement("img");
    console.log(data.strMeal)
    img.src = data.strMealThumb;
    let mealName = document.createElement("p");
    mealName.innerHTML = data.strMeal;
    let mealCategory = document.createElement("p");
    mealCategory.innerHTML = `Category: ${data.strCategory}`;
   
   
    imgDiv.append(img);
    div.append(imgDiv,mealName,mealCategory,button)
    container.append(div);
    

}

button.addEventListener("click", showInstructions)
let mealInfo = document.createElement("p");
mealInfo.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
mealInfo.style.color="blue"
let data1=await randomRecipe();
function showInstructions()
{
    
    
    let container = document.getElementById("container");
    
    
   
    if (mealInfo.innerHTML == "") {
        mealInfo.innerHTML = data1;
        button.innerHTML = "Read Less"
    }
    else {
        button.innerHTML = "Read More"
        mealInfo.innerHTML = "";
    }
    console.log(data1)
    
    container.append(mealInfo);

}
