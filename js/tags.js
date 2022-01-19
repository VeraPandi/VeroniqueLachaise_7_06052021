export { tagsArray };

// _______________________________
//
//    DOM ELEMENTS
// _______________________________
// Create the container of the selected tags
const searchSection = document.querySelector(".search-section");
const filters = document.querySelector(".filters");

const newTagsBar = document.createElement("div");
newTagsBar.className = "tags-bar";

searchSection.appendChild(newTagsBar);

const tagsBar = document.querySelector(".tags-bar");
searchSection.insertBefore(tagsBar, filters);

// _________________________
//
//    CREATE A TAGS ARRAY
// _________________________
function tagsArray() {
   const lis = document.querySelectorAll(".filters ul li");

   let array = [];
   for (let i = 0; i < lis.length; i++) {
      const li = lis[i];

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
         },
         false
      );
   }
}

tagsArray();

// ______________________
//
//    CREATE A TAG
// ______________________
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

// ______________________
//
//    DISPLAY A TAG
// ______________________
function displayTag(array, domElement) {
   // Empty the container of the selected tags
   domElement.innerHTML = "";

   // Creates the display of the selected tag
   for (let i = 0; i < array.length; i++) {
      domElement.innerHTML += `
         <div class="selected-tag ${array[i].type}">
         <span class="tag">${array[i].name}</span>
         <span class="far fa-times-circle" data-index="${i}"></span>
         </div>
         `;
   }

   // Get the values to delete from the array
   removeTag(array, domElement);
}

// ______________________
//
//    REMOVE A TAG
// ______________________
function removeTag(array, domElement) {
   const closeIcons = document.querySelectorAll(".fa-times-circle");

   let closeIcon;
   for (let i = 0; i < closeIcons.length; i++) {
      closeIcon = closeIcons[i];

      closeIcon.addEventListener("click", (e) => {
         const indexTag = e.target.getAttribute("data-index");

         array.splice(indexTag, 1);
         displayTag(array, domElement);
      });
   }
}
