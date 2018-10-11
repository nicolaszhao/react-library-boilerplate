import React from 'react';
import Home from './Home';

const routes = [
  {
    path: '/',
    component: Home,
    text: 'Home'
  },
  {
    path: '/example1',
    component() { 
      return <div>Example 1</div>;
    },
    text: 'Example 1'
  },
  {
    path: '/example2',
    component() { 
      return <div>Example 2</div>;
    },
    text: 'Example 2'
  }
];

export default routes;
