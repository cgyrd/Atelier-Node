import chalk from 'chalk'; 


function nomcolleague() {
    // Créer un tableau avec les noms et leurs couleurs
    const colleagues = [
        { name: 'Camille', color: chalk.red },
        { name: 'Bob', color: chalk.green },
        { name: 'Manon', color: chalk.blue },
        { name: 'Charles', color: chalk.yellow }
    ];

    // Afficher chaque nom dans sa couleur respective
    colleagues.forEach(colleague => {
        console.log(colleague.color(colleague.name));
    });
}

// Appeler la fonction pour afficher les noms
nomcolleague();