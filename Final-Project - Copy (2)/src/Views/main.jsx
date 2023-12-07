import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../index.css';
import LocalLibrary from '../Components/LocalLibrary.jsx';
import SpotifySearch from '../Components/SpotifySearch.jsx';
import LocalLibraryData from '../Components/LocalLibrary.jsx';
const Root = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'local-library':
        return <LocalLibrary goBack={() => setCurrentPage('home')} />;
      case 'spotify-search':
        return <SpotifySearch goBack={() => setCurrentPage('home')} />;
      default:
        return <App navigateToLibrary={() => setCurrentPage('local-library')} navigateToSearch={() => setCurrentPage('spotify-search')} />;
    }
  };

  return <React.StrictMode>{renderPage()}</React.StrictMode>;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

