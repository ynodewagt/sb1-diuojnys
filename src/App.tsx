import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IframeContainer } from './components/IframeContainer';

// Add type declaration for the Google Translate initialization function
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="GTranslate Example" />
      
      <main className="flex-1 flex justify-center items-center p-8">
        <IframeContainer src="https://avalon.pro/account/login/?language_edit=2" />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;