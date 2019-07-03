import React,  from 'react';
import './App.css';

const App = () => {
  const APP_ID = '565ccdb5';
  const APP_KEY = '7673504cb19be659b79b42ea454ae095';
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default App;
