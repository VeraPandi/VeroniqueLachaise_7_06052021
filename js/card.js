// ___________________________________________________________________________
//
//    IMPORT / EXPORT
// ___________________________________________________________________________

import { recipes } from "../api/recipes.js";

export { createCard };

// ___________________________________________________________________________
//
//    DOM ELEMENTS
// ___________________________________________________________________________

const main = document.querySelector("main");
const section = document.createElement("section");
section.className = "card-section";
main.appendChild(section);
const cardSection = document.querySelector(".card-section");

// ___________________________________________________________________________
//
//    CARDS CREATION
// ___________________________________________________________________________

function createCard(recipes) {
   cardSection.innerHTML = "";

   recipes.forEach((recipe) => {
      let card = `
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
                                <ul data-id="${recipe.id}">`;
      recipe.ingredients.forEach((ingredient) => {
         card += `<li data-name="${ingredient.ingredient.toLowerCase()}">${
            ingredient.ingredient
         } ${
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
   });
}

createCard(recipes);
