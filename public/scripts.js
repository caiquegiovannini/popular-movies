const moviesList = document.querySelector('main.movies__list');

const movies = [
    {
      image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
      title: 'Batman',
      rating: 9.2,
      year: 2022,
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      isFavorited: true,
    },
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Outro filme',
        rating: 8.5,
        year: 2020,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: true,
      },
      {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Filme Qualquer',
        rating: 7.8,
        year: 2021,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: false,
      },
      {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Filme ruim',
        rating: 5.5,
        year: 2022,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        isFavorited: false,
      },
];

function renderMovieCard(movie) {
    const movieCard = document.createElement('article');
    movieCard.classList.add('movie');
    moviesList.appendChild(movieCard);

    // add image
    const movieImageContainer = document.createElement('div');
    movieImageContainer.classList.add('movie__image');
    movieCard.appendChild(movieImageContainer);
    const movieImage = document.createElement('img');
    movieImage.src = movie.image;
    movieImage.alt = `${movie.title} image`
    movieImageContainer.appendChild(movieImage);

    // movie info
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie__info');
    movieCard.appendChild(movieInfo);

    const movieTitle = document.createElement('h3');
    movieTitle.classList.add('movie__title');
    movieTitle.textContent = `${movie.title} (${movie.year})`;
    movieInfo.appendChild(movieTitle);

    const movieRateContainer = document.createElement('div');
    movieRateContainer.classList.add('movie__rate');
    movieInfo.appendChild(movieRateContainer);
    const starIcon = document.createElement('img');
    starIcon.src = 'public/assets/star.svg';
    starIcon.alt = 'star-icon';
    movieRateContainer.appendChild(starIcon);
    const movieRate = document.createElement('p');
    movieRate.textContent = movie.rating;
    movieRateContainer.appendChild(movieRate);

    const favoriteContainer = document.createElement('div');
    favoriteContainer.classList.add('favorite');
    movieInfo.appendChild(favoriteContainer);
    const favoriteIcon = document.createElement('img');
    favoriteIcon.src = `public/assets/heart${movie.isFavorited ? '-full' : ''}.svg`;
    favoriteIcon.alt = 'heart-icon';
    favoriteContainer.appendChild(favoriteIcon);
    const favoriteText = document.createElement('p');
    favoriteText.textContent = 'Favoritar';
    favoriteContainer.appendChild(favoriteText);

    //movie description
    const movieDescriptionContainer = document.createElement('div');
    movieDescriptionContainer.classList.add('movie__description');
    movieCard.appendChild(movieDescriptionContainer);
    const movieDescription = document.createElement('p');
    movieDescription.textContent = movie.description;
    movieDescriptionContainer.appendChild(movieDescription);
};

movies.forEach(movie => renderMovieCard(movie));