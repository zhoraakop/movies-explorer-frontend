
import Movies from "./components/Movies";
import SavedMovies from "./components/SavedMovies";
import SearchForm from "./components/SearchForm";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="page">
      <Header />
      <SearchForm />
      <Movies/>
      <Footer />
    </div>
  );
}

export default App;
