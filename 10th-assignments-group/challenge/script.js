let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar","Abdullah","Omair","Sewar"];
let numberOfAdmins = 0;
let counter = 0;
for(let i = 0; i < myAdmins.length; i++) {
    if(myAdmins[i] == "Stop") {
        break;
    }
    else
    {
        numberOfAdmins++;
    }
}
document.write(`<div>We Have ${numberOfAdmins} Admins</div>`);
document.write(`<hr>`);
for(let j = 0; j < numberOfAdmins; j++) {
    document.write(`<div>`);
    document.write(`The Admin For Team ${j+1} Is ${myAdmins[j]}`);
    document.write("\n");
    document.write(`<h3>Team Members:</h3>`);
    for(let k = 0; k < myEmployees.length; k++) {
        if(myEmployees[k].startsWith(myAdmins[j].charAt(0))) {
            document.write(`<p> -${++counter} ${myEmployees[k]}`);
        }
    }
    counter = 0;
    if( j < numberOfAdmins - 1) {
    document.write(`<hr>`);
    }
    document.write(`</div>`);
}
