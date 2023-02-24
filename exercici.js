const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
];

//Ex 1
function quadrat(arr) {
    let nouarr = arr.map(x => Math.sqrt(x));
    return nouarr;
}

//Ex 2
function sumapos(arr) {
    const valorinicial = 0;
    const resultat = arr.reduce((accumulator, currentValue) => accumulator + currentValue, valorinicial);
    return resultat;
}

//Ex 3
function factorial(num) {
    const valorinicial = 1;
    //Es fa num+1 i es fa slice(1) per treure el valor 0 del array obtingut i ficar num com a valor final del array
    let num_array = (Array.from(Array(num + 1).keys())).slice(1);
    const resultat = num_array.reduce((accumulator, currentValue) => accumulator * currentValue, valorinicial);
    return resultat;
}

//Ex 4
function midaarray(arr) {
    let resultat = arr.map(x => x.length);
    return resultat;
}

function ex5() {
    //Filtratge d'employees per salary
    let filtrat = employees.filter(employee=> employee.salary < 60000);
    //Obtencio de noms dels employees filtrats
    let resultat = filtrat.map(a => a.name);
    return resultat;
}