// ___________________________________________________
//
//    IMPORTS
// ___________________________________________________

import { getIngredients } from "./search-bar.js";
import { recipes } from "../api/recipes.js";

export { ingredientFilter, getAppliances, getUtensils };

// _________________________________________
//
//    DATAS
// _________________________________________
// Filtered appliance array
function getAppliances() {
   let recipe;
   let applianceArray = [];
   for (let i = 0; i < recipes.length; i++) {
      recipe = recipes[i];
      applianceArray.push(recipe.appliance);
   }

   applianceArray = [...new Set(applianceArray)];

   return applianceArray;
}

// Filtered utensils array
function getUtensils() {
   return [
      ...new Set(
         recipes
            .map((recipe) =>
               recipe.utensils.map(
                  (utensils) =>
                     utensils.charAt(0).toUpperCase() + utensils.slice(1)
               )
            )
            .flat()
      ),
   ];
}

// _________________________________________
//
//    DISPLAYS THE INGREDIENTS IN ITS FILTER
// _________________________________________
function ingredientFilter() {
   // Array of ingredients
   const ingredients = getIngredients();

   // Dom elements
   const filter = document.querySelector(".ingredients-filter");
   const newList = document.createElement("div");
   newList.className = "ingredients-list";
   const newUl = document.createElement("ul");

   filter.appendChild(newList);
   newList.appendChild(newUl);

   // Create and display the list of ingredients
   let showList;
   ingredients.forEach((ingredient, i) => {
      showList = `
        <li class="ingredient">${ingredient}</li>
`;
      newUl.innerHTML += showList;
   });
}

ingredientFilter();

// _________________________________________
//
//    DISPLAY THE APPLIANCES IN ITS FILTER
// _________________________________________
function applianceFilter() {
   // Array of appliances
   const appliances = getAppliances();

   // Dom elements
   const filter = document.querySelector(".appliance-filter");
   const newList = document.createElement("div");
   newList.className = "appliance-list";
   const newUl = document.createElement("ul");

   filter.appendChild(newList);
   newList.appendChild(newUl);

   // Create and display the list of appliances
   let showList;
   appliances.forEach((appliance) => {
      showList = `
        <li class="appliance">${appliance}</li>
`;
      newUl.innerHTML += showList;
   });
}

applianceFilter();

// _________________________________________
//
//    DISPLAY THE UTENSILS IN ITS FILTER
// _________________________________________
function utensilFilter() {
   // Array of utensils
   const utensils = getUtensils();

   // Dom elements
   const filter = document.querySelector(".utensils-filter");
   const newList = document.createElement("div");
   newList.className = "utensils-list";
   const newUl = document.createElement("ul");

   filter.appendChild(newList);
   newList.appendChild(newUl);

   // Create and display the list of utensils
   let showList;
   utensils.forEach((utensils) => {
      showList = `
        <li class="utensil">${utensils}</li>
`;
      newUl.innerHTML += showList;
   });
}

utensilFilter();
