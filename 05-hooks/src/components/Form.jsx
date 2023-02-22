import { useState } from 'react';

const Form = () => {
  const [{ name, username, password, gender }, setSignUp] = useState({
    name: '',
    username: '',
    password: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    // Destructuration de e.target, même chose que :
    // const value = e.target.value
    // const key = e.target.name
    const { value, name: key } = e.target;

    setSignUp((previousState) => {
      console.log(previousState);
      console.log(value, key);

      const newState = {
        ...previousState,
        [key]: value,
      };

      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Le nom est ${name}, le mot de passe est ${password}, le nom d'utilisation est ${username}. Vous êtes ${
        gender === 'male' ? 'un homme.' : 'une femme.'
      }`,
    );
  };

  return (
    <form className="w-1/2 p-8 m-8 mx-auto bg-gray-100 shadow" onSubmit={handleSubmit}>
      <div className="form-control input">
        <label htmlFor="name">Nom</label>
        <input type="text" id="name" name="name" value={name} onChange={handleChange} />
      </div>
      <div className="form-control input">
        <label htmlFor="username">Pseudo</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div className="form-control input">
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="form-control radio">
        <div>
          <label htmlFor="male">Homme</label>
          <input
            type="radio"
            id="male"
            name="gender"
            checked={gender === 'male'}
            value="male"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="female">Femme</label>
          <input
            type="radio"
            id="female"
            name="gender"
            checked={gender === 'female'}
            value="female"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mt-8">
        <button type="submit" className="btn primary">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default Form;
