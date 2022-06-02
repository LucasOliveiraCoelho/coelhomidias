import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Router from './config/Router';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
