let Arowbey = {Genre: "Hip/Rap", afkomst:"Congolees",hobbys:"sporten" };

let Booba = {Genre: "Hip/Rap", afkomst:"Senegalees",hobbys:"sporten" };

let Ninho = {Genre: "Hip/Rap", afkomst:"Congolees",hobbys:"Gamen" };
let lijstrappers = [Arowbey, Booba, Ninho];

console.log(lijstrappers.length);

for (let i = 0; i <lijstrappers.length; i++){
rappersPrinten(lijstrappers[i])
}
      
 
function rappersPrinten(parameter) {
    console.log(parameter.Genre + ' ' + parameter.afkomst + ' '+ parameter.hobbys);
}
//rappersPrinten(Arowbey); 