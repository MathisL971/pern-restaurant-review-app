import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantDetail from './routes/RestaurantDetail';
import Update from './routes/Update';
import Home from './routes/Home';
import { RestaurantsContextProvider } from './context/RestaurantsContext';

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className='container'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/restaurants/:id/update" element={<Update/>}/>
            <Route exact path="/restaurants/:id" element={<RestaurantDetail/>}/>
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;