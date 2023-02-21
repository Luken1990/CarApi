import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarTable from './component/CarTable';
import { createContext } from 'react';
import React, { useState, useEffect } from 'react';
import InputForm from './component/InputForm';
import SearchField from './component/SearchField';
import EditMulti from './component/EditMulti'

export const CarContext = createContext();

//import react context to manage car state globally
//wrap entire content in car context to use and set state of cars within nested components
//asynchronous function to get a api and return a json response
//set state to api response
function App() {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const response = await fetch('/api');
    const carApi = await response.json();
    setCars(carApi);
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <CarContext.Provider value={[cars, setCars]}>
      <main>
        <div className="grid-container">
          <div className="form-container">
            <InputForm />
            <SearchField carApi={getCars} />
            <EditMulti/>
          </div>
          <div className="cars-container">
            <CarTable />
          </div>
        </div>
      </main>
    </CarContext.Provider>
  );
}

export default App;
