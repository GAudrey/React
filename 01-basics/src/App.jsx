import React from 'react';
import { MonsterDrink, MonsterGreen, MonsterLustre, MonsterRed } from './components/Monster';

const TapABeer = () => <div>Bois 5 litres de bière</div>;

const ValidIndicator = () => {
  const isValid = true;
  return (
    <div className='m-8 text-2xl flex justify-center'>
      {isValid ? 'Valide' : 'Pas Valide'}
    </div>
  )
}

// Ecriture propre à React
const Animal = () => {
  const which = 'dog';
  return (
    <>
      {which === 'dog' && "Chien chien"}
      {which === 'cat' && "Chat chat"}
      {which === 'bird' && "Oiseau oiseau"}
    </>
  )
}

const App = () => (
  <div className="py-10 max-w-7xl mx-auto">
    <header>
      <div>
        <img src="/img/logo.png" alt="logo app" className="w-36 mx-auto" />
      </div>
    </header>
    <main>
      <div className="sm:px-6 lg:px-8">
        <div className="px-4 py-8 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg min-h-96 p-8">
            <TapABeer />
            <MonsterDrink />
            <MonsterGreen />
            <MonsterRed />
            <MonsterLustre />
            <ValidIndicator />
            <Animal />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
