import axios from 'axios';

const KEY_API = '1d1120e9d6d730509fa5db5176245d73';
const baseUrl = 'https://www.themoviedb.org/';

const popularFilmsUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY_API}`;
// const onSeachUrl = `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false&query=${query}`;
// const onIdUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=en-US`;

const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_API}&language=en-US`;

// const query = ''; // нужно потом найти значение квери и записать его в эту переменную
const movieId = ''; // нужно потом найти значение ID и записать его в эту переменную

// export async function getGenres() {
//   try {
//     const genres = await axios.get(genreUrl);
//     console.log(genres.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

export default class ApiMovie {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async getPopularMovies() {
    const popularMovies = await axios(popularFilmsUrl);
    console.log(popularMovies.data.results);
    this.incrementPage();
    return popularMovies.data;
  }

  //     async function getGenres() {
  //   try {
  //     const genres = await axios.get(genreUrl);
  //     console.log(genres.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// export default class PixabayService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   async fetchImages() {
//     const response = await axios(
//       `https://${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`,
//     );

//     this.incrementPage();
//     return response.data;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
