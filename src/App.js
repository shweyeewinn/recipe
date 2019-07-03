import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = '565ccdb5';
  const APP_KEY = '7673504cb19be659b79b42ea454ae095';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
        {/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
      </form>
    </div>
  );
};
export default App;
