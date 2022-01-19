//______________________________________________
//
//    INGREDIENTS FILTER BUTTON
// _____________________________________________

//    OPEN FILTER
// __________________
function openIngredientsFilter() {
   const ingredientsFilter = document.querySelector(".ingredients-filter");
   const chevronDown = document.querySelector(
      ".ingredients-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(
      ".ingredients-filter .fa-chevron-up"
   );

   chevronDown.addEventListener(
      "click",
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
         const ingredientSearchInput = (document.querySelector(
            "input#ingredient-search"
         ).style.width = "223px");
      },
      false
   );
}
openIngredientsFilter();

//    CLOSE FILTER
// __________________
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
         const ingredientSearchInput = (document.querySelector(
            "input#ingredient-search"
         ).style.width = "140px");
      },
      false
   );
}
closeIngredientsFilter();

// _____________________________________________
//
//    APPLIANCES FILTER BUTTON
// _____________________________________________

//    OPEN FILTER
// __________________
function openAppliancesFilter() {
   const appliancesFilter = document.querySelector(".appliance-filter");
   const chevronDown = document.querySelector(
      ".appliance-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(".appliance-filter .fa-chevron-up");

   chevronDown.addEventListener(
      "click",
      function (e) {
         // Close the filters already open
         closeOpenButtons();

         // Open the filter
         const appliancesList = document.querySelector(".appliance-list ul");

         appliancesFilter.classList.toggle("visible");
         appliancesList.classList.toggle("visible");

         chevronDown.style.display = "none";
         chevronUp.style.display = "flex";

         //  Change the text and width of the placeholder
         const applianceSearch = document
            .getElementById("appliance-search")
            .setAttribute("placeholder", "Rechercher un appareil");
         const applianceSearchInput = (document.querySelector(
            "input#appliance-search"
         ).style.width = "223px");
      },
      false
   );
}
openAppliancesFilter();

//    CLOSE FILTER
// __________________
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
         const applianceSearchInput = (document.querySelector(
            "input#appliance-search"
         ).style.width = "140px");
      },
      false
   );
}
closeAppliancesFilter();

// _____________________________________________
//
//    UTENSILS FILTER BUTTON
// _____________________________________________

//    OPEN FILTER
// __________________
function openUtensilsFilter() {
   const utensilsFilter = document.querySelector(".utensils-filter");
   const chevronDown = document.querySelector(
      ".utensils-filter .fa-chevron-down"
   );
   const chevronUp = document.querySelector(".utensils-filter .fa-chevron-up");

   chevronDown.addEventListener(
      "click",
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
         const utensilSearchInput = (document.querySelector(
            "input#utensil-search"
         ).style.width = "223px");
      },
      false
   );
}
openUtensilsFilter();

//    CLOSE FILTER
// __________________
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
         const utensilSearchInput = (document.querySelector(
            "input#utensil-search"
         ).style.width = "140px");
      },
      false
   );
}
closeUtensilsFilter();

// _____________________________________________
//
//    CLOSE OPENED BUTTONS
// _____________________________________________
function closeOpenButtons() {
   const filtersIsVisible = document.querySelectorAll(".filters div .visible");

   let filterIsVisible;
   for (let i = 0; i < filtersIsVisible.length; i++) {
      filterIsVisible = filtersIsVisible[i];

      if (filterIsVisible) {
         // Template string containing the name of the element that has class "visible"
         const filterName =
            filterIsVisible.parentElement.parentElement.dataset.name;
         const listName = filterIsVisible.parentElement.dataset.name;
         const searchName = filterIsVisible.firstElementChild.className;

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

         // Change the text and width of the placeholder
         const search = document
            .querySelector(`#${searchName}-search`)
            .setAttribute("placeholder", `${filterName}`);

         const searchInput = (document.querySelector(
            `input#${searchName}-search`
         ).style.width = "140px");
      }
   }
}
