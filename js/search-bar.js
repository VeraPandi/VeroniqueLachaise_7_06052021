// ___________________________________________________
//
//    IMPORTS
// ___________________________________________________

import { recipes } from "../api/recipes.js";
import { createCard } from "./card.js";

// _______________________________
//
//    WARNING MESSAGE
// _______________________________
// Displays a warning message if there are no recipes matching the search
function warningMessage() {
   const displayWarningMessage = document.querySelector(".warning-message");
   displayWarningMessage.style.display = "block";
   displayWarningMessage.innerHTML =
      'Aucune recette ne correspond à votre critère... Vous pouvez chercher "tarte aux pommes", "poisson" etc';
}

// _______________________________
//
//    FILTERED INGREDIENTS ARRAY
// _______________________________
// The returned ingredients ​​are unique (with "new Set"), filtered (with "map"), concatenated (with "flat").
function getIngredients() {
   return [
      ...new Set(
         recipes
            .map((recipe) =>
               recipe.ingredients.map((ingredient) => ingredient.ingredient)
            )
            .flat()
      ),
   ];
}

// _______________________________
//
//    SEARCH INPUT
// _______________________________
function searchInput() {
   const input = document.getElementById("search-entry");

   // Array of ingredients to match
   const ingredients = getIngredients();

   input.addEventListener(
      "keyup",
      (e) => {
         input.style.color = "#000";

         // Array containing the recipes to display
         let displayRecipes = [];

         let recipe;
         for (let i = 0; i < recipes.length; i++) {
            recipe = recipes[i];

            // Match checks
            if (input.textLength >= 3) {
               const matchName = recipe.name // <= Recipe title
                  .toLowerCase()
                  .includes(input.value);

               const matchDescription = recipe.description
                  .toLowerCase()
                  .includes(input.value);

               const matchIngredient = ingredients[i]
                  .toLowerCase()
                  .includes(input.value);

               if (matchName || matchDescription || matchIngredient) {
                  displayRecipes.push(recipe);

                  // Hide warning message
                  const displayWarningMessage =
                     document.querySelector(".warning-message");
                  displayWarningMessage.style.display = "none";
               }

               // Display warning message if there is no match
               if (displayRecipes.length === 0 && input.textLength > 0) {
                  warningMessage();
               }
            }
         }

         createCard(displayRecipes);
      },
      false
   );
}

searchInput();
