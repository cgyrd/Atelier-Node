import chalk from 'chalk'; 


function nomcolleague() {
  
    const colleagues = [
        { name: 'Camille', color: chalk.red },
        { name: 'Bob', color: chalk.green },
        { name: 'Manon', color: chalk.blue },
        { name: 'Charles', color: chalk.yellow }
    ];


    colleagues.forEach(colleague => {
        console.log(colleague.color(colleague.name));
    });
}


nomcolleague();