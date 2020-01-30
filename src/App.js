import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navtop from './components/Navtop';
import Headsection from './components/Headsection';
import BlogList from './components/BlogList';

function App() {
  return (
    <div>
<Navtop/>
<Headsection/>
<BlogList/>
</div>
  );
}

export default App;
