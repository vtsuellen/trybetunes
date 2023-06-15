import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound';
import Login from './components/login/login';
import Search from './components/search/search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/search" element={ <Search /> } />
      {/* <Route path="/album/:id" element={ Album}/> */}
      {/* <Route path="/favorites" element={ Favorites }/> */}
      {/* <Route path="/profile" element={ Profile }/> */}
      {/* <Route path="/profile/edit" element={ ProfileEdit }/> */}
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
