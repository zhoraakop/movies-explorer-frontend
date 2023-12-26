import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import { useState } from "react";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  function handleClickMenuPopup() {
    setIsOpenPopup(true);
  }

  function closeAll() {
    setIsOpenPopup(false);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              onClickMenuIsClose={closeAll}
              onClickMenu={isOpenPopup}
              onClickMenuIsOpen={handleClickMenuPopup}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              onClickMenuIsClose={closeAll}
              onClickMenu={isOpenPopup}
              onClickMenuIsOpen={handleClickMenuPopup}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              onClickMenuIsClose={closeAll}
              onClickMenu={isOpenPopup}
              onClickMenuIsOpen={handleClickMenuPopup}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              onClickMenuIsClose={closeAll}
              onClickMenu={isOpenPopup}
              onClickMenuIsOpen={handleClickMenuPopup}
            />
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
