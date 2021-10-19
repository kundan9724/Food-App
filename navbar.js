function navbar({ title1 = "Title",
    title2 = "Title",
title3="Title"})
{
    return `
    <div id="navbar">
    <div class="left"><a href="index.html">${title1}</a>  
    </div>
    <div class="right"><a href="recipe.html">${title2}</a> 
    </div>
    <div class="mid"><a href="latestRecipe.html">${title3}</a> 
    </div>
    </div>
    
    
    `
}
export default navbar;