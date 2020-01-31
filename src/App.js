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
<BlogList posts={posts}/>
</div>
  );
}


const posts = [
  {id: 1, title: 'First title', content: 'This is the first post'},
  {id: 2, title: 'Second post', content: 'This is the second post'},
  {id: 3, title: 'Third post', content: 'This is the third post'}

]

export default App;
