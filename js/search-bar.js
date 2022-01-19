// ___________________________________________________
//
//    IMPORTS / EXPORTS
// ___________________________________________________

import { recipes } from "../api/recipes.js";
import { createCard } from "./card.js";
import { ingredientFilter, getAppliances, getUtensils } from "./filters.js";

export { getIngredients, mainInput };

// _______________________________
//
//    WARNING MESSAGE
// _______________________________
// Displays a warning message if there are no recipes matching the search
function displayWarningMessage() {
   const warningMessage = document.querySelector(".warning-message");
   warningMessage.style.display = "block";
   warningMessage.innerHTML =
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
               recipe.ingredients.map((ingredient) =>
                  ingredient.ingredient.toLowerCase()
               )
            )
            .flat()
      ),
   ];
}

// _______________________________
//
//    SEARCH INPUT
// _______________________________
function mainInput() {
   const input = document.getElementById("search-entry");

   // Array of ingredients to match
   const ingredients = getIngredients();

   input.addEventListener(
      "keyup",
      (e) => {
         input.style.color = "#000";

         // Change the input value to lowercase
         input.value = input.value.toLowerCase();

         // Array containing the recipes to display
         let displayRecipes = [];

         let recipe;
         for (let i = 0; i < recipes.length; i++) {
            recipe = recipes[i];

            // Fill the array with all the recipes until the matches are verified
            if (input.textLength < 3) {
               const warningMessage =
                  document.querySelector(".warning-message");
               warningMessage.style.display = "none";
               displayRecipes.push(recipe);
            }

            if (input.textLength >= 3) {
               // Checks matches
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
                  const warningMessage =
                     document.querySelector(".warning-message");
                  warningMessage.style.display = "none";
               }

               // Display warning message if there is no match
               if (displayRecipes.length === 0) {
                  displayWarningMessage();
               }
            }
         }

         createCard(displayRecipes);

         // Get values
         inputIngredients(displayRecipes);
         inputAppliances(displayRecipes);
         inputUtensils(displayRecipes);
      },
      false
   );
}

mainInput();

// _______________________________
//
//    INGREDIENTS SEARCH FILTER
// _______________________________
function inputIngredients(displayRecipes) {
   const input = document.getElementById("ingredient-search");

   // Variable containing the remaining recipes
   const recipes = displayRecipes;

   // Array of ingredients to match
   const ingredients = getIngredients();

   input.addEventListener("keyup", (e) => {
      // Change the input value to lowercase
      input.value = input.value.toLowerCase();

      // Array containing the recipes to display
      let displayRecipes = [];

      let recipe;
      for (let i = 0; i < recipes.length; i++) {
         recipe = recipes[i];

         // Fill the array with all the recipes until the matches are verified
         if (input.textLength < 3) {
            const warningMessage = document.querySelector(".warning-message");
            warningMessage.style.display = "none";
            displayRecipes.push(recipe);
         }

         // Fill the array with all the recipes until the matches are verified
         if (input.textLength) {
            // Checks matches
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
               const warningMessage =
                  document.querySelector(".warning-message");
               warningMessage.style.display = "none";
            }

            // Display warning message if there is no match
            if (displayRecipes.length === 0) {
               displayWarningMessage();
            }
         }
      }

      createCard(displayRecipes);
   });
}

// _______________________________
//
//    APPLIANCES SEARCH FILTER
// _______________________________
function inputAppliances(displayRecipes) {
   const input = document.getElementById("appliance-search");

   // Variable containing the remaining recipes
   const recipes = displayRecipes;

   // Array of appliances to match
   const appliances = getAppliances();

   input.addEventListener("keyup", (e) => {
      // Change the input value to lowercase
      input.value = input.value.toLowerCase();

      // Array containing the recipes to display
      let displayRecipes = [];

      let recipe;
      for (let i = 0; i < recipes.length; i++) {
         recipe = recipes[i];

         // Fill the array with all the recipes until the matches are verified
         if (input.textLength < 3) {
            const warningMessage = document.querySelector(".warning-message");
            warningMessage.style.display = "none";
            displayRecipes.push(recipe);
         }

         // Fill the array with all the recipes until the matches are verified
         if (input.textLength) {
            const matchAppliance = recipe.appliance
               .toLowerCase()
               .includes(input.value);

            if (matchAppliance) {
               displayRecipes.push(recipe);

               // Hide warning message
               const warningMessage =
                  document.querySelector(".warning-message");
               warningMessage.style.display = "none";
            }

            // Display warning message if there is no match
            if (displayRecipes.length === 0) {
               displayWarningMessage();
            }
         }
      }

      createCard(displayRecipes);
   });
}

// _______________________________
//
//    UTENSILS SEARCH FILTER
// _______________________________
function inputUtensils(displayRecipes) {
   const input = document.getElementById("utensil-search");

   // Variable containing the remaining recipes
   const recipes = displayRecipes;

   // Array of utensils to match
   const utensils = getUtensils();

   input.addEventListener("keyup", (e) => {
      // Change the input value to lowercase
      input.value = input.value.toLowerCase();

      // Array containing the recipes to display
      let displayRecipes = [];

      let recipe;
      for (let i = 0; i < recipes.length; i++) {
         recipe = recipes[i];

         // Fill the array with all the recipes until the matches are verified
         if (input.textLength < 3) {
            const warningMessage = document.querySelector(".warning-message");
            warningMessage.style.display = "none";
            displayRecipes.push(recipe);
         }

         // Fill the array with all the recipes until the matches are verified
         if (input.textLength) {
            const matchUtensil = utensils[i]
               .toLowerCase()
               .includes(input.value);

            if (matchUtensil) {
               displayRecipes.push(recipe);

               // Hide warning message
               const warningMessage =
                  document.querySelector(".warning-message");
               warningMessage.style.display = "none";
            }

            // Display warning message if there is no match
            if (displayRecipes.length === 0) {
               displayWarningMessage();
            }
         }
      }

      createCard(displayRecipes);
   });
}

// _______________________________
//
//    FILTER WITH TAGS
// _______________________________

//    INGREDIENTS
// _________________
function searchIngredientInFilter() {
   // Ingredients array
   const ingredients = getIngredients();

   const input = document.getElementById("search-entry");
   const parentLis = document.querySelector(".ingredients-list ul");

   input.addEventListener("keyup", (e) => {
      const inputValue = input.value;

      // Filters matches between the ingredient name and the value in the field
      const ingredientToDisplay = ingredients.filter((i) =>
         i.includes(inputValue)
      );

      // Display matches
      parentLis.innerHTML = "";
      ingredientToDisplay.forEach(
         (i) =>
            (parentLis.innerHTML += `
               <li class="ingredient">${[i]}</li>
               `)
      );
   });
}
searchIngredientInFilter();
