import React from 'react';
import 'my-react/dist/index.css';
import TestAPIServices from './components/TestAPIServices';
import { ErrorHandler } from 'my-react'


const App = () => {

  const baseUrl = "https://jsonplaceholder.typicode.com"
 
  return (
    <>
      <ErrorHandler>
        <TestAPIServices baseUrl={baseUrl} />
      </ErrorHandler>
    </>
  );
};

export default App;
