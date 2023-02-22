import { useEffect, useState } from 'react';

const FormSimple = () => {
  // const search = useRef('');
  const [search, setSearch] = useState('');
  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    search.toLowerCase() === 'maxime' ? setIsFriend(true) : setIsFriend(false);
  }, [search]); // [] -> valeur qui sera observée, peut avoir les crochets vides mais sera exécuté une seule fois (utilisé pour les call API)

  return (
    <form className="w-1/2 m-8 p-8 mx-auto bg-gray-100 shadow">
      <div className="form-control input">
        <label htmlFor="search">Recherche</label>
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {isFriend && (
        <p className="text-red-500 pt-2 text-sm">
          Maxime est un homme en or et un ami en or
        </p>
      )}
      <div className="mt-4">
        <button type="submit" className="btn primary">
          Rechercher
        </button>
      </div>
    </form>
  );
};

export default FormSimple;
