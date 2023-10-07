import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const apiKey="c8b592990fd14a989eab9f5dd360f019";
  
  const[progress, setProgress]= useState(0);
  
 
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <NavBar/>
        
        <Routes>
          <Route exact path="/"element={<News setProgress={setProgress} apiKey={apiKey} key='general'pageSize='9' country="in" categories="general"/>} />
          <Route exact path="/business"element={<News setProgress={setProgress} apiKey={apiKey} key='business'pageSize='9' country="in" categories="business"/>}/>
          <Route exact path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment'pageSize='9' country="in" categories="entertainment"/>}/>
          <Route exact path="/general"element={<News setProgress={setProgress} apiKey={apiKey} key='general'pageSize='9' country="in" categories="general"/>}/>
          <Route exact path="/health"element={<News setProgress={setProgress} apiKey={apiKey} key='health'pageSize='9' country="in" categories="health"/>}/>
          <Route exact path="/science"element={<News setProgress={setProgress} apiKey={apiKey} key='science'pageSize='9' country="in" categories="science"/>}/>
          <Route exact path="/sports"element={<News setProgress={setProgress} apiKey={apiKey} key='sports'pageSize='9' country="in" categories="sports"/>}/>
          <Route exact path="/technology"element={<News setProgress={setProgress} apiKey={apiKey} key='technology'pageSize='9' country="in" categories="technology"/>}/>
          
          </Routes>
          </BrowserRouter>
      </div>
    )
  
}

export default App;

