import React, {useState} from 'react';
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import Topbar from './components/Topbar';

import {fruitData}  from './fruitData';

  const App = () =>{

    const [searchValue, setSearchValue] = useState('');
    const searchChange = (event) =>{
        setSearchValue(event.target.value);
    };

    const filteredArray = fruitData.filter(element =>{
        return element.fruitName.toLowerCase().includes(searchValue);
    })

    return(
      <>
          <Navbar />
          <Topbar fruitData={fruitData} search={searchChange} />
          <CardList fruitData={fruitData}  fruitList={filteredArray} />
      </>
    )
  }
  




export default App;
