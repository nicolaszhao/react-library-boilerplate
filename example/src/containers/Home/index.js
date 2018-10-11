import React from 'react';
import Nav from '../Nav';

const NavItem = Nav.Item;

const Home = ({ routes }) => (
  <ul>
    {routes.map((route, i) => (
      <NavItem 
        key={i} 
        label={route.text} 
        to={route.path} 
        activeOnlyWhenExact={route.path === '/'} 
      />
    ))}
  </ul>
);

export default Home;
