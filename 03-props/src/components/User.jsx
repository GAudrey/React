const User = ({ name, age, bisou }) => (
  <div className="py-2 mx-4 mb-3 border-b">
    <h1 className="text-2xl font-bold">Hello {name}</h1>
    <h2>
      {age < 25
        ? 'Tu es trop jeune pour avoir ce contenu.'
        : 'Voici le lien vers... Oh et puis merde.'}
    </h2>
    <p className="mt-2">{bisou}</p>
  </div>
);

export default User;
