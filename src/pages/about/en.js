import React from 'react';
import About from './index';


import messages from '../../data/messages/en';

export default (props) => (
    <About
    {...props}
    i18nMessages={messages}
  />
);