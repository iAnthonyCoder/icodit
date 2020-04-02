import React from 'react';
import About from './index';


import messages from '../../data/messages/es';

export default (props) => (
  
  <About
    {...props}
    i18nMessages={messages}
  />
);