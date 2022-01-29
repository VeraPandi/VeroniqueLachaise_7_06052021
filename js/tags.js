// ___________________________________________________________________________
//
//    IMPORTS / EXPORTS
// ___________________________________________________________________________

import { recipes } from "../api/recipes.js";
import { createCard } from "./card.js";
import { displayWarningMessage } from "./search-bar.js";

export { tagsArray };

// ___________________________________________________________________________
//
//    DOM ELEMENTS
// ___________________________________________________________________________

// Create the container of the selected tags
const searchSection = document.querySelector(".search-section");
const filters = document.querySelector(".filters");

const newTagsBar = document.createElement("div");
newTagsBar.className = "tags-bar";

searchSection.appendChild(newTagsBar);

const tagsBar = document.querySelector(".tags-bar");
searchSection.insertBefore(tagsBar, filters);

let array = [];

// ___________________________________________________________________________
//
//    TAGS
// ___________________________________________________________________________

// ============================
// CREATE A TAGS ARRAY
// ============================
function tagsArray() {
   const lis = document.querySelectorAll(".filters ul");

   lis.forEach((li) => {
      li.addEventListener(
         "click",
         (e) => {
            // Selected tag
            const tag = createTag(e);

            // Add the selected tag to a array, then remove duplicates
            array.push(tag);
            array = [...new Map(array.map((tag) => [tag.name, tag])).values()];

            // Display of the selected tag
            const tagsBar = document.querySelector(".tags-bar");
            displayTag(array, tagsBar);

            getsRecipesToDisplay();
         },
         false
      );
   });
}

tagsArray();

// ============================
// CREATE A RECIPES ARRAY
// ============================
function getsRecipesToDisplay() {
   const input = document.getElementById("search-entry");

   // Returns the recipes to display
   const recipesToDisplay = recipes.filter((recipe) => {
      return array.every(
         (a) =>
            recipe.description.includes(a.name) &&
            recipe.description.includes(input.value)
      );
   });

   createCard(recipesToDisplay);

   // Display the warning message if there is no recipe containing a tag
   if (recipesToDisplay.length === 0) {
      displayWarningMessage();
   } else if (recipesToDisplay.length > 0) {
      const warningMessage = document.querySelector(".warning-message");
      warningMessage.style.display = "none";
   }
}

// ============================
// CREATE A TAG
// ============================
function createTag(e) {
   // Name and attribute of selected tag
   const getTarget = e.target.innerHTML;
   const getAttribute = e.target.getAttribute("class");

   // Creates the object of the selected tag
   let object;
   return (object = {
      type: getAttribute,
      name: getTarget,
   });
}

// ============================
// DISPLAY A TAG
// ============================
function displayTag(array, domElement) {
   // Empty the container of the selected tags
   domElement.innerHTML = "";

   // Creates the display of the selected tag
   array.forEach((tag, i) => {
      domElement.innerHTML += `
         <div class="selected-tag ${tag.type}">
         <span class="tag">${tag.name}</span>
         <span class="far fa-times-circle" data-index="${i}"></span>
         </div>
         `;
   });

   // Get the values to delete from the array
   removeTag(array, domElement);
}

// ============================
// REMOVE A TAG
// ============================
function removeTag(array, domElement) {
   const closeIcons = document.querySelectorAll(".fa-times-circle");

   closeIcons.forEach((closeIcon) => {
      closeIcon.addEventListener("click", (e) => {
         const indexTag = e.target.getAttribute("data-index");

         array.splice(indexTag, 1);
         displayTag(array, domElement);

         getsRecipesToDisplay();
      });
   });
}
