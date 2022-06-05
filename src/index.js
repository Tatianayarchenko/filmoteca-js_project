import heroHome from './templates/hero-home.hbs';
import heroLibrary from './templates/hero-library.hbs';
import svg from './images/symbol-defs.svg';

const refs = {
  hero: document.querySelector('.hero-home'),
  homeButton: document.querySelector('.header-home-button'),
  libraryButton: document.querySelector('.header-library-button'),
};

refs.homeButton.addEventListener('click', onHomePage);
refs.libraryButton.addEventListener('click', onLibraryPage);

function onHomePage() {
  console.log('клик по кнопке HOME');
  renderHomePage();
}

function onLibraryPage() {
  console.log('клик по кнопке Library');
  renderLibraryPage();
}

function renderHomePage() {
  clearHero();
  console.log('нарисовали home');
  const heroHomeMarcup = `<div class="hero-home-container">
        <form class="search-form" id="search-form">
          <div class="input-wrap">
            <input
              class="input"
              type="text"
              name="searchQuery"
              autocomplete="off"
              placeholder="Search films..."
            />
            <button class="button" type="submit">
              <svg class="search" width="15" height="15">
                <use href="./images/symbol-defs.svg#icon-search"></use>
              </svg>
            </button>
          </div>
        </form>
      </div>`;
  refs.hero.insertAdjacentHTML('beforeend', heroHomeMarcup);
}

// function renderHomePage() {
//   clearHero();
//   refs.hero.insertAdjacentHTML('beforeend', heroHome);
// }

function renderLibraryPage() {
  //   clearHero();
  console.log('нарисовали library');
  refs.hero.innerHTML = `<div class="hero-library-container">
        <div class="library-btn-wrap">
          <button class="hero-watched-button hero-library-btn" type="button">WATCHED</button>
          <button class="hero-queue-button hero-library-btn" type="button">QUEUE</button>
        </div>
      </div>`;
}

function clearHero() {
  console.log('страница очистилась');
  refs.hero.innerHTML = '';
}
