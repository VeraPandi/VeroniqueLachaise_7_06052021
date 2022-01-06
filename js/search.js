//________________________________
//
//    INGREDIENTS FILTER BUTTON
// _______________________________
function ingredientFilterBtn() {
   const openIngredientsFilter = document.querySelector(
      ".ingredients-filter .fa-chevron-down"
   );
   const closeIngredientsFilter = document.querySelector(
      ".ingredients-filter .fa-chevron-up"
   );

   // OPEN FILTER
   openIngredientsFilter.addEventListener(
      "click",
      function (e) {
         const openIngredientsList = document.querySelector(
            ".ingredients-list ul"
         );

         openIngredientsList.classList.toggle("visible");
         openIngredientsFilter.style.display = "none";
         closeIngredientsFilter.style.display = "flex";

         // Change the text of the placeholder
         const ingredientSearchInput = document
            .getElementById("ingredient-search")
            .setAttribute("placeholder", "Rechercher un ingrédient");

         // CLOSE FILTER
         closeIngredientsFilter.addEventListener(
            "click",
            function (e) {
               closeIngredientsFilter.style.display = "none";
               openIngredientsList.classList.toggle("visible");
               openIngredientsFilter.style.display = "flex";

               // Change the text of the placeholder
               const ingredientSearchInput = document
                  .getElementById("ingredient-search")
                  .setAttribute("placeholder", "Ingrédients");
            },
            false
         );
      },
      false
   );
}

ingredientFilterBtn();

// _______________________________
//
//    APPLIANCES FILTER BUTTON
// _______________________________
function applianceFilterBtn() {
   const openAppliancesFilter = document.querySelector(
      ".appliance-filter .fa-chevron-down"
   );
   const closeAppliancesFilter = document.querySelector(
      ".appliance-filter .fa-chevron-up"
   );

   // OPEN FILTER
   openAppliancesFilter.addEventListener(
      "click",
      function (e) {
         const openAppliancesList =
            document.querySelector(".appliance-list ul");

         openAppliancesList.classList.toggle("visible");
         openAppliancesFilter.style.display = "none";
         closeAppliancesFilter.style.display = "flex";

         // Change the text of the placeholder
         const applianceSearchInput = document
            .getElementById("appliance-search")
            .setAttribute("placeholder", "Rechercher un appareil");

         // CLOSE FILTER
         closeAppliancesFilter.addEventListener(
            "click",
            function (e) {
               closeAppliancesFilter.style.display = "none";
               openAppliancesList.classList.toggle("visible");
               openAppliancesFilter.style.display = "flex";

               // Change the text of the placeholder
               const applianceSearchInput = document
                  .getElementById("appliance-search")
                  .setAttribute("placeholder", "Appareils");
            },
            false
         );
      },
      false
   );
}

applianceFilterBtn();

// _______________________________
//
//    UTENSILS FILTER BUTTON
// _______________________________
function utensilFilterBtn() {
   const openUtensilsFilter = document.querySelector(
      ".utensils-filter .fa-chevron-down"
   );
   const closeUtensilsFilter = document.querySelector(
      ".utensils-filter .fa-chevron-up"
   );

   // OPEN FILTER
   openUtensilsFilter.addEventListener(
      "click",
      function (e) {
         const openUtensilsList = document.querySelector(".utensils-list ul");

         openUtensilsList.classList.toggle("visible");
         openUtensilsFilter.style.display = "none";
         closeUtensilsFilter.style.display = "flex";

         // Change the text of the placeholder
         const utensilSearchInput = document
            .getElementById("utensils-search")
            .setAttribute("placeholder", "Rechercher un ustensile");

         // CLOSE FILTER
         closeUtensilsFilter.addEventListener(
            "click",
            function (e) {
               closeUtensilsFilter.style.display = "none";
               openUtensilsList.classList.toggle("visible");
               openUtensilsFilter.style.display = "flex";

               // Change the text of the placeholder
               const utensilSearchInput = document
                  .getElementById("utensils-search")
                  .setAttribute("placeholder", "Ustensiles");
            },
            false
         );
      },
      false
   );
}

utensilFilterBtn();
