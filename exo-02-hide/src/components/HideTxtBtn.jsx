import { useState } from 'react';

const HideTxtBtn = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <button
        type="button"
        className="btn primary"
        onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? 'Cacher le texte' : 'Afficher le texte'}
      </button>

      {isHidden && (
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore nobis
            deserunt, consectetur at accusamus provident necessitatibus inventore fugiat
            dolores nisi natus blanditiis eum id libero doloribus quidem laborum quo
            corporis.
          </p>
        </div>
      )}
    </>
  );
};

export default HideTxtBtn;
