import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Homepage/Home';
import MovieList from './components/List/List';
import Movie from './components/Details/Details';


function App() {
  return (
    <div className="App">
            
      <Router>
      <Navbar />
        <Routes>
          <Route index element = {<Home />}></Route>
          <Route path = "movie/:id" element = {<Movie />}></Route>
          <Route path = "movies/:type" element = {<MovieList />}></Route>
          <Route path = "/*" element = {<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
