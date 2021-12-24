import { recipes } from "./api/recipes.js";

async function getData(recipes) {
   let response = await fetch("api/recipes.js");
   console.log(recipes);
   return recipes;
}

getData(recipes);
