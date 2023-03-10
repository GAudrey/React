/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import ThemeContext from './themeContext';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const contextValue = {
    theme,
    updateTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        className={`py-10 w-full h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <header>
          <div>
            <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
          </div>
        </header>
        <main>
          <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="px-4 py-8 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96 p-8">
                <Toolbar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
