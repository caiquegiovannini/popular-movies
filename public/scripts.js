import { movies_api_key } from '../movies_api_key.js';

const moviesList = document.querySelector('main.movies__list');
const MOVIES_BASE_URL = 'https://api.themoviedb.org'

async function getPopularMovies() {
    const fetchResponse = await (await fetch(`${MOVIES_BASE_URL}/3/movie/popular?api_key=${movies_api_key}`)).json();
    return fetchResponse.results;
};

function renderMovieCard(movie) {
    const {
        poster_path,
        original_title,
        vote_average,
        release_date,
        overview,
    } = movie;
    const isFavorited = false;

    const movieCard = document.createElement('article');
    movieCard.classList.add('movie');
    moviesList.appendChild(movieCard);
    
    addMovieImageToCard();
    addMovieInfoToCard();
    addMovieDescriptionToCard();

    function addMovieImageToCard() {
        const movieImageContainer = document.createElement('div');
        movieImageContainer.classList.add('movie__image');
        movieCard.appendChild(movieImageContainer);
        const movieImage = document.createElement('img');
        movieImage.src = `${MOVIES_BASE_URL}${poster_path}`;
        movieImage.alt = `${original_title} image`
        movieImageContainer.appendChild(movieImage);
    };

    function addMovieInfoToCard() {
        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie__info');
        movieCard.appendChild(movieInfo);
    
        const year = release_date.slice(0,4);
        const movieTitle = document.createElement('h3');
        movieTitle.classList.add('movie__title');
        movieTitle.textContent = `${original_title} (${year})`;
        movieInfo.appendChild(movieTitle);
    
        const movieRateContainer = document.createElement('div');
        movieRateContainer.classList.add('movie__rate');
        movieInfo.appendChild(movieRateContainer);
        const starIcon = document.createElement('img');
        starIcon.src = 'public/assets/star.svg';
        starIcon.alt = 'star-icon';
        movieRateContainer.appendChild(starIcon);
        const movieRate = document.createElement('p');
        movieRate.textContent = vote_average;
        movieRateContainer.appendChild(movieRate);
    
        const favoriteContainer = document.createElement('div');
        favoriteContainer.classList.add('favorite');
        movieInfo.appendChild(favoriteContainer);
        const favoriteIcon = document.createElement('img');
        favoriteIcon.src = `public/assets/heart${isFavorited ? '-full' : ''}.svg`;
        favoriteIcon.alt = 'heart-icon';
        favoriteContainer.appendChild(favoriteIcon);
        const favoriteText = document.createElement('p');
        favoriteText.textContent = 'Favoritar';
        favoriteContainer.appendChild(favoriteText);
    };

    function addMovieDescriptionToCard() {
        const movieDescriptionContainer = document.createElement('div');
        movieDescriptionContainer.classList.add('movie__description');
        movieCard.appendChild(movieDescriptionContainer);
        const movieDescription = document.createElement('p');
        movieDescription.textContent = overview;
        movieDescriptionContainer.appendChild(movieDescription);
    };
};


movies.forEach(movie => renderMovieCard(movie));