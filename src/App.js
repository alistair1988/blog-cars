import React from 'react';
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
  {id: 3, title: 'Third post', content: 'This is the third post'},
  {id: 4, title: 'fourth post', content: 'This is the fourth post'},
  

]

export default App;
