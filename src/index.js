// import heroHome from './templates/hero-home.hbs';
// import heroLibrary from './templates/hero-library.hbs';
// import svg from './images/symbol-defs.svg';

const refs = {
  //   hero: document.querySelector('.hero-home'),
  logo: document.querySelector('.logo'),
  homeButton: document.querySelector('#home_btn'),
  libraryButton: document.querySelector('#library_btn'),
  heroHomeContainer: document.querySelector('.hero-home-container'),
  heroLibraryContainer: document.querySelector('.hero-library-container'),
};

refs.homeButton.addEventListener('click', onHomePage);
refs.libraryButton.addEventListener('click', onLibraryPage);

function onHomePage() {
  console.log('клик по кнопке HOME');
  refs.heroHomeContainer.classList.remove('is-hidden');
  refs.heroHomeContainer.classList.add('hero-home-container');
  refs.heroLibraryContainer.classList.add('is-hidden');
}

function onLibraryPage() {
  console.log('клик по кнопке Library');
  //   renderLibraryPage();
  refs.heroLibraryContainer.classList.remove('is-hidden');
  refs.heroHomeContainer.classList.add('is-hidden');
  refs.heroLibraryContainer.classList.add('hero-library-container');
}

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

// function renderLibraryPage() {
//   console.log('нарисовали library');
//   refs.hero.innerHTML = `<div class="hero-library-container">
//         <div class="library-btn-wrap">
//           <button class="hero-watched-button hero-library-btn" type="button">WATCHED</button>
//           <button class="hero-queue-button hero-library-btn" type="button">QUEUE</button>
//         </div>
//       </div>`;
// }

// function clearHero() {
//   console.log('страница очистилась');
//   refs.hero.innerHTML = '';
// }
