var Arowbey = {Genre: "Hip/Rap", afkomst:"Congolees",hobbys:"sporten" };

var Booba = {Genre: "Hip/Rap", afkomst:"Senegalees",hobbys:"sporten" };

var Ninho = {Genre: "Hip/Rap", afkomst:"Congolees",hobbys:"Gamen" };

var lijstrappers = [Arowbey, Booba, Ninho];
for (let rappers of lijstrappers) {
    console.log(rappers);
}

const namen = ["Dirk", "Sandy", "Tormund", "Dahlia"];

for (let i = 0; i < namen.length; i++) {
    // Gebruik de teller i als index van de array
    // Elke iteratie wordt er dus een nieuw element aangesproken
    console.log(namen[i]);
}