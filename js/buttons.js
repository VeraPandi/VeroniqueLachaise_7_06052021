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
         const openIngredientsFilterBox = document.querySelector(
            ".ingredients-filter"
         );
         const openIngredientsList = document.querySelector(
            ".ingredients-list ul"
         );

         openIngredientsFilterBox.classList.toggle("visible");
         openIngredientsList.classList.toggle("visible");
         openIngredientsFilter.style.display = "none";
         closeIngredientsFilter.style.display = "flex";

         // Change the text and width of the placeholder
         const ingredientSearch = document
            .getElementById("ingredient-search")
            .setAttribute("placeholder", "Rechercher un ingrédient");
         const ingredientSearchInput = (document.querySelector(
            "input#ingredient-search"
         ).style.width = "223px");

         // CLOSE FILTER
         closeIngredientsFilter.addEventListener(
            "click",
            function (e) {
               closeIngredientsFilter.style.display = "none";
               openIngredientsFilterBox.classList.toggle("visible");
               openIngredientsList.classList.toggle("visible");
               openIngredientsFilter.style.display = "flex";

               // Change the text and width of the placeholder
               const ingredientSearch = document
                  .getElementById("ingredient-search")
                  .setAttribute("placeholder", "Ingrédients");
               const ingredientSearchInput = (document.querySelector(
                  "input#ingredient-search"
               ).style.width = "140px");
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
         const openAppliancesFilterBox =
            document.querySelector(".appliance-filter");
         const openAppliancesList =
            document.querySelector(".appliance-list ul");

         openAppliancesFilterBox.classList.toggle("visible");
         openAppliancesList.classList.toggle("visible");
         openAppliancesFilter.style.display = "none";
         closeAppliancesFilter.style.display = "flex";

         // Change the text and width of the placeholder
         const applianceSearch = document
            .getElementById("appliance-search")
            .setAttribute("placeholder", "Rechercher un appareil");
         const applianceSearchInput = (document.querySelector(
            "input#appliance-search"
         ).style.width = "223px");

         // CLOSE FILTER
         closeAppliancesFilter.addEventListener(
            "click",
            function (e) {
               closeAppliancesFilter.style.display = "none";
               openAppliancesFilterBox.classList.toggle("visible");
               openAppliancesList.classList.toggle("visible");
               openAppliancesFilter.style.display = "flex";

               // Change the text and width of the placeholder
               const applianceSearch = document
                  .getElementById("appliance-search")
                  .setAttribute("placeholder", "Appareils");
               const applianceSearchInput = (document.querySelector(
                  "input#appliance-search"
               ).style.width = "140px");
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
         const openUtensilsFilterBox =
            document.querySelector(".utensils-filter");
         const openUtensilsList = document.querySelector(".utensils-list ul");

         openUtensilsFilterBox.classList.toggle("visible");
         openUtensilsList.classList.toggle("visible");
         openUtensilsFilter.style.display = "none";
         closeUtensilsFilter.style.display = "flex";

         // Change the text and width of the placeholder
         const utensilSearch = document
            .getElementById("utensils-search")
            .setAttribute("placeholder", "Rechercher un ustensile");
         const utensilSearchInput = (document.querySelector(
            "input#utensils-search"
         ).style.width = "223px");

         // CLOSE FILTER
         closeUtensilsFilter.addEventListener(
            "click",
            function (e) {
               closeUtensilsFilter.style.display = "none";
               openUtensilsFilterBox.classList.toggle("visible");
               openUtensilsList.classList.toggle("visible");
               openUtensilsFilter.style.display = "flex";

               // Change the text and width of the placeholder
               const utensilSearch = document
                  .getElementById("utensils-search")
                  .setAttribute("placeholder", "Ustensiles");
               const utensilSearchInput = (document.querySelector(
                  "input#utensils-search"
               ).style.width = "140px");
            },
            false
         );
      },
      false
   );
}

utensilFilterBtn();
