// Règle n°1 : Lorsque vous créez un composant et qu'il comporte uniquement un code HTML(JSX), on écrira le component comme cas 2 et 3.
// Règle n°2 : Pas de parenthèse quand code HTML(JSX) court, comme le 2.
// Règle n°3 : Parenthèses quand code long.
// Règle n°4 : Quand le component contient du code JS, il faut mettre des accolades{} et faire un return de notre code HTML (et on ajoute des parenthèses si le code est long comme dans le cas 1)
// Règle n°5 : Toujours retourner du JSX avec un elem parent et unique qui contient plusieurs elem comme dans le cas 4.

// Cas 1
export const MonsterGreen = () => {
    const color = 'green';
    return (
        <div>
            Le monstre marin est {color}, et il mange des tractopelles tous les soirs à partir de 20h sur TF1.
        </div>
    );
};

// Cas 2
export const MonsterDrink = () => <div>Le monster est cool.</div>;

// Cas 3
export const MonsterRed = () => (
    <div>
        Ceci est un message pour la population belge. Il y a des promotions sur les tractopelles. Affaire à saisir tout de suite ou jamais.
    </div>
);

// Cas 4
export const MonsterLustre = () => (
    <>
        {/* <></> s'appelle un fragment, toujours le parent, utilisé pour éviter de mettre une div inutile */}
        <div>Tractopelles</div>
        <div>Chartreuse</div>
        <div>Burlywood</div>
    </>
    
);