import { useState } from 'react';

const ClickButton = () => {
  // Règle n°1 : jamais de hook dans une condition
  /*
        if(machin) {
            const [count, setCount] = useState(0);
        }
  */
  // Règle n°2 : Les hooks seront toujours réclarés tout en haut de notre component. L'ordre est important.
  const [count, setCount] = useState(0);
  return (
    <button type="button" className="btn primary" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
};

export default ClickButton;
