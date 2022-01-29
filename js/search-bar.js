// ___________________________________________________________________________
//
//    IMPORTS / EXPORTS
// ___________________________________________________________________________

import { recipes } from "../api/recipes.js";
import { createCard } from "./card.js";

export { getIngredients, displayWarningMessage };

// ___________________________________________________________________________
//
//    DATAS : FILTERED INGREDIENTS ARRAY
// ___________________________________________________________________________

function getIngredients() {
   return [
      ...new Set(
         recipes
            .map((recipe) =>
               recipe.ingredients.map((ingredient) =>
                  ingredient.ingredient.toLowerCase()
               )
            )
            .flat()
      ),
   ];
}

// ___________________________________________________________________________
//
//    SEARCH INPUT
// ___________________________________________________________________________

// ============================
// WARNING MESSAGE
// ============================
// Display a warning message if there are no recipes matching the search
function displayWarningMessage() {
   const warningMessage = document.querySelector(".warning-message");
   warningMessage.style.display = "block";
   warningMessage.innerHTML =
      'Aucune recette ne correspond à votre critère... Vous pouvez chercher "tarte aux pommes", "poisson" etc';
}

// ============================
// MAIN SEARCH BAR
// ============================
function mainInput() {
   const input = document.getElementById("search-entry");
   const searchBtn = document.querySelector(".fa-search");

   searchBtn.addEventListener(
      "click",
      (e) => {
         input.style.color = "#000";

         // Remove capital letters from search words
         input.value = input.value.toLowerCase();

         // Array containing the recipes to display
         let displayRecipes = [];
         recipes.forEach((recipe) => {
            if (input.textLength < 3) {
               displayWarningMessage();
            }

            // Checks matches
            if (input.textLength >= 3) {
               const matchName = recipe.name // <= Recipe title
                  .toLowerCase()
                  .includes(input.value);

               const matchDescription = recipe.description
                  .toLowerCase()
                  .includes(input.value + " ");

               const matchIngredient = recipe.ingredients.forEach((i) => {
                  i.ingredient.toLowerCase().includes(input.value);
               });

               const matchAppliance = recipe.appliance
                  .toLowerCase()
                  .includes(input.value);

               const matchUtensil = recipe.utensils.forEach((utensil) => {
                  utensil.toLowerCase().includes(input.value);
               });

               if (
                  matchName ||
                  matchDescription ||
                  matchIngredient ||
                  matchAppliance ||
                  matchUtensil
               ) {
                  displayRecipes.push(recipe);

                  // Hide the warning message if there is a match
                  const warningMessage =
                     document.querySelector(".warning-message");
                  warningMessage.style.display = "none";
               }

               // Display warning message if there is no match
               if (displayRecipes.length === 0) {
                  displayWarningMessage();
               }
            }
         });

         createCard(displayRecipes);
      },
      false
   );

   input.addEventListener("keyup", (e) => {
      // Display all recipes when the search field is emptied by the user
      if (input.textLength === 0) {
         let displayRecipes = [];
         recipes.forEach((recipe) => {
            displayRecipes.push(recipe);
         });

         // Hide warning message
         const warningMessage = document.querySelector(".warning-message");
         warningMessage.style.display = "none";

         createCard(displayRecipes);
      }
   });
}

mainInput();
