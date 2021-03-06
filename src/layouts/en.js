import React from 'react';
import Layout from './index';


import messages from '../data/messages/en';

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
    lang={"en"}
  />
);