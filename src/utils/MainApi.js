export const URL = "https://akop.nomoredomainsmonster.ru/api";

function check(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Во время запроса произошла ошибка.");
  }
}

export const signup = ({ name, email, password }) => {
  return fetch(`${URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(check);
};

export const signin = ({ email, password }) => {
  return fetch(`${URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(check);
};

export const logout = () => {
  return fetch(`${URL}/signout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return check(res);
  });
};

export const getCurrentUser = () => {
  return fetch(`${URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(check);
};

export const editUserProfile = ({ name, email }) => {
  return fetch(`${URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, email }),
  }).then(check);
};

export const saveMovie = (movie) => {
  return fetch(`${URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
    }),
  }).then(check);
};

export const deleteMovie = (id) => {
  return fetch(`${URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(check);
};

export const getSavedMovies = () => {
  return fetch(`${URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then(check);
};
