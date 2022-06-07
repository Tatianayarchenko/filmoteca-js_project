const refs = {
  header: document.querySelector('#header'),
  //   logo: document.querySelector('#header-logo'),
  //   homeButton: document.querySelector('#home_btn'),
  //   libraryButton: document.querySelector('#library_btn'),
  homeButton: document.querySelector('#home_btn'),
  libraryButton: document.querySelector('#library_btn'),
  homeCurrentPage: document.querySelector('#home-current-page'),
  libraryCurrentPage: document.querySelector('#library-current-page'),
  searchForm: document.querySelector('#search-form'),
  //   heroLibraryContainer: document.querySelector('.hero-library-container'),
  hederLibraryPage: document.querySelector('#header-library'),
  //   formButton: document.querySelector('#form-button'),
  //   libraryWatchedButton: document.querySelector('#library-watched__button'),
  //   libraryQueueButton: document.querySelector('#library-queue__button'),
};

refs.homeButton.addEventListener('click', onHomePage);
refs.libraryButton.addEventListener('click', onLibraryPage);

function onHomePage() {
  console.log('клик по кнопке HOME');
  refs.searchForm.classList.remove('is-hidden');
  refs.hederLibraryPage.classList.add('is-hidden');
  refs.header.classList.remove('library');
  refs.header.classList.add('home');
  refs.homeCurrentPage.classList.add('current-page');
  refs.libraryCurrentPage.classList.remove('current-page');
}

function onLibraryPage() {
  console.log('клик по кнопке Library');
  refs.header.classList.remove('home');
  refs.header.classList.add('library');
  refs.hederLibraryPage.classList.remove('is-hidden');
  refs.searchForm.classList.add('is-hidden');
  refs.hederLibraryPage.classList.add('hero-library-container');
  refs.homeCurrentPage.classList.remove('current-page');
  refs.libraryCurrentPage.classList.add('current-page');
}

// function clearHero() {
//   console.log('страница очистилась');
//   refs.hero.innerHTML = '';
// }

// function renderHomePage() {
//   clearHero();
//   console.log('нарисовали home');
//   const heroHomeMarcup = `<div class="hero-home-container">
//         <form class="search-form" id="search-form">
//           <div class="input-wrap">
//             <input
//               class="input"
//               type="text"
//               name="searchQuery"
//               autocomplete="off"
//               placeholder="Search films..."
//             />
//             <button class="button" type="submit">
//               <svg class="search" width="15" height="15">
//                 <use href="./images/symbol-defs.svg#icon-search"></use>
//               </svg>
//             </button>
//           </div>
//         </form>
//       </div>`;
//   refs.hero.insertAdjacentHTML('beforeend', heroHomeMarcup);
// }

//
