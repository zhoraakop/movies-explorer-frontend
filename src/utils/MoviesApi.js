function check(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Во время запроса произошла ошибка.");
  }
}

function getMovies() {
  return fetch("https://api.nomoreparties.co/beatfilm-movies", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return check(res);
  });
}

export default getMovies;
