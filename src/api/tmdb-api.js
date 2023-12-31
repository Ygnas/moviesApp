export const getMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    import.meta.env.VITE_TMDB_KEY +
    "&language=en-US"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
    .catch((error) => {
      throw error
    });
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      return json.results;
    });
};

export const getUpcomingMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getTrendingMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=${import.meta.env.VITE_TMDB_KEY}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

export const getMediaCast = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((res) => res.json())
    .then((json) => {
      return json.cast;
    });
};

export const getActor = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US&api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export const searchMovies = ({ title, includeAdult, language, currentPage, year }) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&query=${title}&language=${language}&include_adult=${includeAdult}&page=${currentPage}&year=${year}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
};
