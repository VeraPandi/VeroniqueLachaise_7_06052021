// ___________________________________________________
//
//    IMPORT / EXPORT
// ___________________________________________________

import { recipes } from "../api/recipes.js";

export { createCard };

// _______________________________
//
//    DOM ELEMENTS
// _______________________________
const main = document.querySelector("main");
const section = document.createElement("section");
section.className = "card-section";
main.appendChild(section);
const cardSection = document.querySelector(".card-section");

// _______________________________
//
//    CARDS CREATION
// _______________________________
function createCard(recipes) {
   // Empty the cards section
   cardSection.innerHTML = "";

   // Create and display cards
   let recipe;
   let card;
   for (let i = 0; i < recipes.length; i++) {
      recipe = recipes[i];

      card = `
        <article class="card" data-id="${recipe.id}">
                  <div class="card-container">
                     <a href="#"></a>
                    <div class="infos">
                       <div class="infos-header">
                           <h2 class="title">${recipe.name}</h2>
                           <div class="time">
                             <span class="far fa-clock"></span>
                              <span class="text">${recipe.time} min</span>
                           </div>
                        </div>
                        <div class="infos-footer">
                            <div class="ingredients">
                                <ul>`;
      recipe.ingredients.forEach((ingredient) => {
         card += `<li>${ingredient.ingredient} ${
            ingredient.quantity
               ? "<span class='quantity-unit'>: " + ingredient.quantity
               : ""
         } ${ingredient.unit ? ingredient.unit : ""}</span></li>`;
      });
      card += `</ul>
                           </div>
                           <p class="description">${recipe.description}</p>
                        </div>
                     </div>
                  </div>
               </article>
        `;

      cardSection.innerHTML += card;
   }
}

createCard(recipes);