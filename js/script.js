/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Function, that displays a page of nine students from the data.js array
*/
function showPage(list, page) {
   console.log(list);
   console.log(page);
   
   // two variables that calculate the index for the first and the last student to display on the page
   
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   
   // select the UL element to place the student data there and remove any previously existing students

   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
   
   
   // loop that runs over the list parameter and a conditional statement that determines the indeces for the students. 
   // For these a template literatl is created and placed into the DOM
   
   for (let i = 0; i < list.length; i++) {
      if ( i >= startIndex && i < endIndex ) {
         let studentItem = `
         <li class="student-item">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.thumbnail}" alt="${list[i].picture.thumbnail}">
           <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">"${list[i].email}"</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      } 
   }
}

// calling the function to test the code
showPage(data, 1);


/*
create the following function for the pagination buttons
*/

function paginationButton(list) {
   console.log(list);
   let numberValue = Math.ceil(list.length / 9); // calculates the number of pagination buttons
   let selectUL = document.querySelector(".link-list");
   console.log(numberValue);
   selectUL.innerHTML = "";
   for (let i = 1; i <= numberValue; i++) {
      let createButton = `
      <li>
      <button type="button">${i}</button>
      </li>
      `;
      selectUL.insertAdjacentHTML('beforeend', createButton);
   }
   let selectButton = document.querySelector('button');
   selectButton.className = 'active';
   console.log(selectButton);
   

   // Event Listener with a conditional, that checks if the event target's tag name is a button
   // if it's true, than the active class of the previous button is removed, and set to the button which was clicked

   selectUL.addEventListener('click', (event) => {
      if(event.target.tagName === 'BUTTON') {
         let selectButton = document.querySelector('.active');
         selectButton.className = '';
         event.target.className = 'active';
         showPage(list, event.target.textContent);
         console.log(selectButton);
      }
   });
}


// function call

paginationButton(data);
showPage(data, 1);


/*
search bar
*/

let accessHeader = document.querySelector('.header');

let searchbar = `
   <label for="search" class="student-search">
  <input id="search" placeholder="Search by name...">
  <button type="button" id="search-button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`
accessHeader.insertAdjacentHTML('beforeend', searchbar);

const searchButton = document.querySelector('#search-button');

// functionality of the search field
function searchPerformance(searchInput, data) {
   console.log(searchInput);
   console.log(data);

   for (let i = 0; i < data.length; i++) {
      data[i].className = '';
      if (searchInput.value.length !== 0 && data[i].textContent.toLowerCase() === searchInput.value.toLowerCase()) {
         data[i].className = 'match';
      }
   }
}

let searchFieldInput = document.getElementById('search');

searchButton.addEventListener('click', (event) => {
   event.preventDefault();
  searchPerformance(searchButton, data);
 
   console.log('Submit button is functional!');
 });
 
 /* submit listener */
 searchFieldInput.addEventListener('keyup', () => {
 
   // Invoke your search function here - Arguments: search, tableCells
 searchPerformance(searchButton, data);
 
   console.log('Keyup event on the Search input is functional!');
 });


