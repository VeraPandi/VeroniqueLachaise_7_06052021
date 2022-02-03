// ___________________________________________________________________________
//
//    INGREDIENTS FILTER BUTTON
// ___________________________________________________________________________

// ============================
// OPEN FILTER
// ============================
function openIngredientsFilter() {
   const ingredientsFilter = document.querySelector(".ingredients-filter");
   const filterInput = document.querySelector(".ingredients-filter input");

   const chevronDown = document.querySelector(
      ".ingredients-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(
      ".ingredients-filter .fa-chevron-up"
   );

   filterInput.addEventListener(
      "focus",
      function (e) {
         // Close the filters already open
         closeOpenButtons();

         // Open the filter
         const ingredientsList = document.querySelector(".ingredients-list ul");

         ingredientsFilter.classList.toggle("visible");
         ingredientsList.classList.toggle("visible");

         chevronDown.style.display = "none";
         chevronUp.style.display = "flex";

         // Change the text and width of the placeholder
         const ingredientSearch = document
            .getElementById("ingredient-search")
            .setAttribute("placeholder", "Rechercher un ingrédient");
         const ingredientSearchInput = document.querySelector(
            "input#ingredient-search"
         );
         ingredientSearchInput.style.width = "223px";
         ingredientSearchInput.style.color = "#ffffff8f";
      },
      false
   );
}
openIngredientsFilter();

// ============================
// CLOSE FILTER
// ============================
function closeIngredientsFilter() {
   const ingredientsFilter = document.querySelector(".ingredients-filter");

   const chevronDown = document.querySelector(
      ".ingredients-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(
      ".ingredients-filter .fa-chevron-up"
   );

   chevronUp.addEventListener(
      "click",
      function (e) {
         const ingredientsList = document.querySelector(".ingredients-list ul");

         ingredientsFilter.classList.toggle("visible");
         ingredientsList.classList.toggle("visible");

         chevronDown.style.display = "flex";
         chevronUp.style.display = "none";

         // Change the text and width of the placeholder
         const ingredientSearch = document
            .getElementById("ingredient-search")
            .setAttribute("placeholder", "Ingrédients");
         const ingredientSearchInput = document.querySelector(
            "input#ingredient-search"
         );
         ingredientSearchInput.style.width = "140px";
         ingredientSearchInput.style.color = "#fff";
      },
      false
   );
}
closeIngredientsFilter();

// ___________________________________________________________________________
//
//    APPLIANCES FILTER BUTTON
// ___________________________________________________________________________

// ============================
// OPEN FILTER
// ============================
function openAppliancesFilter() {
   const appliancesFilter = document.querySelector(".appliance-filter");
   const filterInput = document.querySelector(".appliance-filter input");
   const chevronDown = document.querySelector(
      ".appliance-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(".appliance-filter .fa-chevron-up");

   filterInput.addEventListener(
      "focus",
      function (e) {
         // Close the filters already open
         closeOpenButtons();

         // Open the filter
         const appliancesList = document.querySelector(".appliance-list ul");

         appliancesFilter.classList.toggle("visible");
         appliancesList.classList.toggle("visible");

         chevronDown.style.display = "none";
         chevronUp.style.display = "flex";

         // Change the text and width of the placeholder
         const applianceSearch = document
            .getElementById("appliance-search")
            .setAttribute("placeholder", "Rechercher un appareil");
         const applianceSearchInput = document.querySelector(
            "input#appliance-search"
         );
         applianceSearchInput.style.width = "223px";
         applianceSearchInput.style.color = "rgba(255, 255, 255, 0.77)";
      },
      false
   );
}
openAppliancesFilter();

// ============================
// CLOSE FILTER
// ============================
function closeAppliancesFilter() {
   const appliancesFilter = document.querySelector(".appliance-filter");
   const chevronDown = document.querySelector(
      ".appliance-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(".appliance-filter .fa-chevron-up");

   chevronUp.addEventListener(
      "click",
      function (e) {
         const appliancesList = document.querySelector(".appliance-list ul");

         appliancesFilter.classList.toggle("visible");
         appliancesList.classList.toggle("visible");

         chevronDown.style.display = "flex";
         chevronUp.style.display = "none";

         // Change the text and width of the placeholder
         const applianceSearch = document
            .getElementById("appliance-search")
            .setAttribute("placeholder", "Appareils");
         const applianceSearchInput = document.querySelector(
            "input#appliance-search"
         );
         applianceSearchInput.style.width = "140px";
         applianceSearchInput.style.color = "#fff";
      },
      false
   );
}
closeAppliancesFilter();

// ___________________________________________________________________________
//
//    UTENSILS FILTER BUTTON
// ___________________________________________________________________________

// ============================
// OPEN FILTER
// ============================
function openUtensilsFilter() {
   const utensilsFilter = document.querySelector(".utensils-filter");
   const filterInput = document.querySelector(".utensils-filter input");
   const chevronDown = document.querySelector(
      ".utensils-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(".utensils-filter .fa-chevron-up");

   filterInput.addEventListener(
      "focus",
      function (e) {
         // Close the filters already open
         closeOpenButtons();

         // Open the filter
         const utensilsList = document.querySelector(".utensils-list ul");

         utensilsFilter.classList.toggle("visible");
         utensilsList.classList.toggle("visible");

         chevronDown.style.display = "none";
         chevronUp.style.display = "flex";

         // Change the text and width of the placeholder
         const utensilSearch = document
            .getElementById("utensil-search")
            .setAttribute("placeholder", "Rechercher un ustensile");
         const utensilSearchInput = document.querySelector(
            "input#utensil-search"
         );
         utensilSearchInput.style.width = "223px";
         utensilSearchInput.style.color = "#ffffff8f";
      },
      false
   );
}
openUtensilsFilter();

// ============================
// CLOSE FILTER
// ============================
function closeUtensilsFilter() {
   const utensilsFilter = document.querySelector(".utensils-filter");
   const chevronDown = document.querySelector(
      ".utensils-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(".utensils-filter .fa-chevron-up");

   chevronUp.addEventListener(
      "click",
      function (e) {
         const utensilsList = document.querySelector(".utensils-list ul");

         utensilsFilter.classList.toggle("visible");
         utensilsList.classList.toggle("visible");

         chevronDown.style.display = "flex";
         chevronUp.style.display = "none";

         // Change the text and width of the placeholder
         const utensilSearch = document
            .getElementById("utensil-search")
            .setAttribute("placeholder", "Ustensiles");
         const utensilSearchInput = document.querySelector(
            "input#utensil-search"
         );
         utensilSearchInput.style.width = "140px";
         utensilSearchInput.style.color = "#fff";
      },
      false
   );
}
closeUtensilsFilter();

// ___________________________________________________________________________
//
//    CLOSE OPENED BUTTONS
// ___________________________________________________________________________

function closeOpenButtons() {
   const filtersIsVisible = document.querySelectorAll(
      ".filters div ul.visible"
   );

   filtersIsVisible.forEach((filterIsVisible) => {
      filterIsVisible = filterIsVisible.parentElement.parentElement;

      if (filterIsVisible) {
         // Template string containing the name of the element that has class "visible"
         const filterName = filterIsVisible.dataset.name;
         const listName = filterIsVisible.lastChild.dataset.name;
         const searchName = filterIsVisible.children[1].dataset.name;

         // Dom elements
         const filter = document.querySelector(`.${filterName}-filter`);
         const list = document.querySelector(`.${listName}-list ul`);
         const chevronDown = document.querySelector(
            `.${filterName}-filter .fa-chevron-down`
         );
         const chevronUp = document.querySelector(
            `.${filterName}-filter .fa-chevron-up`
         );

         filter.classList.toggle("visible");
         list.classList.toggle("visible");

         chevronDown.style.display = "flex";
         chevronUp.style.display = "none";

         // Change the text of the placeholder
         if (filterName === "ingredients") {
            const search = document
               .querySelector(`#${searchName}-search`)
               .setAttribute("placeholder", "Ingrédients");
         } else if (filterName === "appliance") {
            const search = document
               .querySelector(`#${searchName}-search`)
               .setAttribute("placeholder", "Appareils");
         } else if (filterName === "utensils") {
            const search = document
               .querySelector(`#${searchName}-search`)
               .setAttribute("placeholder", "Ustensiles");
         }

         // Change the width of the placeholder
         const searchInput = document.querySelector(
            `input#${searchName}-search`
         );
         searchInput.style.width = "140px";
         searchInput.style.color = "#fff";
      }
   });
}
