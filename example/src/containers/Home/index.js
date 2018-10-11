import React from 'react';
import Nav from '../Nav';
import routes from '../routes';
import style from './home.scss';

const NavItem = Nav.Item;

const Home = () => (
  <ul className={style.container}>
    {routes.map((route, i) => (
      <NavItem 
        key={i} 
        label={route.text} 
        to={route.path} 
      />
    ))}
  </ul>
);

export default Home;
