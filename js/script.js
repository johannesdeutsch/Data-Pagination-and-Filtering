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
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   console.log(list);
   console.log(page);
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;
   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";
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
           <span class="date">Joined ${list[i].registered.date} | Age: ${list[i].registered.age}</span>
         </div>
         </li>
         `;
         studentList.insertAdjacentHTML('beforeend', studentItem);
      } 
   }
}
showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function paginationButton(list) {
   console.log(list);
   let numberValue = Math.ceil(list.length / 9);
   let selectUL = document.querySelector(".link-list");
   selectUL.innerHTML = "";
   for (let i = 1; i <= numberValue; i++) {
      let createButton = `
      <li>
      <button type="button">${i}</button>
      </li>
      `;
      selectUL.insertAdjacentHTML('beforeend', createButton);
      let selectButton = document.querySelector('button');
      selectButton.className = 'active';
   }
}
paginationButton(data);

// create an Event Listener
selectUL.addEventListener('click', () => {
   if(EventTarget.tagName === button) {
      selectButton = document.querySelector('.active').className = '';
      EventTarget.className = 'active';
      showPage(list, EventTarget.textContent);
   }
});

// Call functions

paginationButton(data);
showPage(data, 1);