let Personne = function (name, firstName, age, job) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.job = job;

    this.getNameFirstNameAge = function () {
        return this.name + " " + this.firstName + " " + this.age + " " + this.job;
    }

    this.changeElement = function (newName, newAge) {
        this.name = newName;
        this.age = newAge;
    }
}

let stefan = new Personne("Hanotiau", "Stefan", 28, "Chomeur");
let samuel = new Personne("Coquelet", "Samuel", 31, "Développeur Novice");

document.getElementById('propriete1').innerHTML = stefan.name;
document.getElementById('propriete2').innerHTML = stefan.firstName;
document.getElementById('propriete3').innerHTML = stefan.age;
document.getElementById('propriete4').innerHTML = stefan.job;

document.getElementById('methode1').innerHTML = stefan.getNameFirstNameAge();
stefan.changeElement("Robert", 56);
document.getElementById('methode2').innerHTML = stefan.getNameFirstNameAge();


document.getElementById('prop1').innerHTML = samuel.name;
document.getElementById('prop2').innerHTML = samuel.firstName;
document.getElementById('prop3').innerHTML = samuel.age;
document.getElementById('prop4').innerHTML = samuel.job;

document.getElementById('metho1').innerHTML = samuel.getNameFirstNameAge();
samuel.changeElement("Jules", 90);
document.getElementById('metho2').innerHTML = samuel.getNameFirstNameAge();
