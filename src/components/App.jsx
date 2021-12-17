import React from 'react';
import PeopleView from './PeopleView/PeopleView';
import Nav from './Nav/Nav';
import '../styles/app.scss'


const App = () => (
  <>
  <div className='app'>
      <header className='app__title'>Ravn Star Wars Registry</header>
      <div className='app__components'>
        <Nav/>
        <PeopleView/>
      </div>
  </div>
  </>
  
)



export default App;