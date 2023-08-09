import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/notFound/notFound';
import Login from './pages/login/login';
import Search from './pages/search/search';
import Album from './components/album/album';
import Layout from './components/layout/layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route element={ <Layout /> }>
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
      </Route>
      {/* <Route path="/favorites" element={ <Favorites /> } />
      <Route path="/profile" element={ <Profile /> } /> */}
      {/* <Route path="/profile/edit" element={ ProfileEdit }/> */}
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
