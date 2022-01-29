// ___________________________________________________________________________
//
//    IMPORTS / EXPORTS
// ___________________________________________________________________________

import { recipes } from "../api/recipes.js";

export {
   getAppliances,
   getUtensils,
   getRemainingIngredients,
   getRemainingAppliances,
   getRemainingUtensils,
};

// ___________________________________________________________________________
//
//    DATAS
// ___________________________________________________________________________

// ============================
// APPLIANCE ARRAY
// ============================
function getAppliances() {
   let applianceArray = [];
   recipes.forEach((recipe) => {
      applianceArray.push(recipe.appliance.toLowerCase());
   });

   applianceArray = [...new Set(applianceArray)];

   return applianceArray;
}

// ============================
// UTENSILS ARRAY
// ============================
function getUtensils() {
   return [
      ...new Set(
         recipes
            .map((recipe) =>
               recipe.utensils.map((utensils) => utensils.toLowerCase())
            )
            .flat()
      ),
   ];
}

// ==========================================
// ARRAY OF INGREDIENTS IN DISPLAYED RECIPES
// ==========================================
function getRemainingIngredients() {
   const lis = document.querySelectorAll(".ingredients ul li");

   let ingredients = [];
   lis.forEach((li) => {
      li = li.dataset.name;
      ingredients.push(li);
   });

   // Return the array of ingredients
   return (ingredients = [...new Set(ingredients)]);
}

// ==========================================
// ARRAY OF APPLIANCES IN DISPLAYED RECIPES
// ==========================================
function getRemainingAppliances() {
   const cards = document.querySelectorAll(".card");

   let appliances = [];
   recipes.forEach((recipe) => {
      cards.forEach((card) => {
         card = card.dataset.id;

         if (recipe.id == card) {
            appliances.push(recipe.appliance.toLowerCase());
         }
      });
   });

   // Return the array of appliances
   return (appliances = [...new Set(appliances)]);
}

// ==========================================
// ARRAY OF UTENSILS IN DISPLAYED RECIPES
// ==========================================
function getRemainingUtensils() {
   const cards = document.querySelectorAll(".card");

   let utensils = [];
   recipes.forEach((recipe) => {
      recipe.utensils.forEach((utensil) => {
         utensil = utensil.toLowerCase();

         cards.forEach((card) => {
            card = card.dataset.id;

            if (recipe.id == card) {
               utensils.push(utensil);
            }
         });
      });
   });

   // Return the array of utensils
   return (utensils = [...new Set(utensils)]);
}

// ___________________________________________________________________________
//
//     CREATION OF FILTERS
// ___________________________________________________________________________

// ==========================================
// INGREDIENTS FILTER
// ==========================================
function createIngredientsFilter() {
   // Dom elements
   const filter = document.querySelector(".ingredients-filter");
   const input = document.getElementById("ingredient-search");
   const newList = document.createElement("div");
   newList.className = "ingredients-list";
   newList.setAttribute("data-name", "ingredients");
   const newUl = document.createElement("ul");

   filter.appendChild(newList);
   newList.appendChild(newUl);

   filter.addEventListener("click", displayIngredients);
   input.addEventListener("keyup", displayIngredients);
}

createIngredientsFilter();

// ==========================================
// APPLIANCES FILTER
// ==========================================
function createAppliancesFilter() {
   // Dom elements
   const filter = document.querySelector(".appliance-filter");
   const input = document.getElementById("appliance-search");
   const newList = document.createElement("div");
   newList.className = "appliance-list";
   newList.setAttribute("data-name", "appliance");
   const newUl = document.createElement("ul");

   filter.appendChild(newList);
   newList.appendChild(newUl);

   filter.addEventListener("click", displayAppliances);
   input.addEventListener("keyup", displayAppliances);
}

createAppliancesFilter();

// ==========================================
// UTENSILS FILTER
// ==========================================
function createUtensilsFilter() {
   // Dom elements
   const filter = document.querySelector(".utensils-filter");
   const input = document.getElementById("utensil-search");
   const newList = document.createElement("div");
   newList.className = "utensils-list";
   newList.setAttribute("data-name", "utensils");
   const newUl = document.createElement("ul");

   filter.appendChild(newList);
   newList.appendChild(newUl);

   filter.addEventListener("click", displayUtensils);
   input.addEventListener("keyup", displayUtensils);
}

createUtensilsFilter();

// ___________________________________________________________________________
//
//     DISPLAY ITEM LISTS
// ___________________________________________________________________________

// ==========================================
// INGREDIENTS LIST
// ==========================================
function displayIngredients() {
   const input = document.getElementById("ingredient-search");
   const ul = document.querySelector(".ingredients-list ul");
   ul.style.paddingBottom = "15px";
   input.style.color = "#ffffff8f";

   // Array of ingredients in displayed recipes
   let ingredients = getRemainingIngredients();
   ingredients = ingredients.sort();

   const inputValue = input.value;

   // Filters matches between the ingredient name and the value in the field
   const ingredientToDisplay = ingredients.filter((i) =>
      i.includes(inputValue)
   );

   // Display matches
   ul.innerHTML = "";
   ingredientToDisplay.forEach(
      (i) =>
         (ul.innerHTML += `
               <li class="ingredient">${[i]}</li>
               `)
   );
}

// ==========================================
// APPLIANCES LIST
// ==========================================
function displayAppliances() {
   const input = document.getElementById("appliance-search");
   const ul = document.querySelector(".appliance-list ul");
   ul.style.paddingBottom = "15px";
   input.style.color = "rgba(255, 255, 255, 0.77)";

   // Array of appliances in displayed recipes
   let appliances = getRemainingAppliances();
   appliances = appliances.sort();

   const inputValue = input.value;

   // Filters matches between the appliance name and the value in the field
   const applianceToDisplay = appliances.filter((i) => i.includes(inputValue));

   // Display matches
   ul.innerHTML = "";
   applianceToDisplay.forEach(
      (i) =>
         (ul.innerHTML += `
               <li class="appliance">${[i]}</li>
               `)
   );
}

// ==========================================
// UTENSILS LIST
// ==========================================
function displayUtensils() {
   const input = document.getElementById("utensil-search");
   const ul = document.querySelector(".utensils-list ul");
   ul.style.paddingBottom = "15px";
   input.style.color = "#ffffff8f";

   // Array of utensils in displayed recipes
   let utensils = getRemainingUtensils();
   utensils = utensils.sort();

   const inputValue = input.value;

   // Filters matches between the utensil name and the value in the field
   const utensilToDisplay = utensils.filter((i) => i.includes(inputValue));

   // Display matches
   ul.innerHTML = "";
   utensilToDisplay.forEach(
      (i) =>
         (ul.innerHTML += `
               <li class="utensil">${[i]}</li>
               `)
   );
}
