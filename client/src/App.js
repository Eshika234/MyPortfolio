// eslint-disable-next-line no-unused-vars

import React from 'react';
import { PortfolioContainer } from './PortfolioContainer/PortfolioContainer'
import { LoaderBar } from './Utilities/commonUtils'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
     <ToastContainer />
      <LoaderBar />
      <PortfolioContainer />
    </div>
  );
}

export default App;
