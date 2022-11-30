function game() {
    var points = 0;

    alert("Hola, vamos a iniciar una aventura.");
    alert("En que consiste te preguntaras?");
    alert("Bueno, yo tampoco lo se, jejeje... empecemos.");

    var Name = prompt("Como te llamas?");
    while (Name === null|| Name==="") {
    alert("Elige un nombre!!!!")
    var Name = prompt("Elige tu nombre");
    } 
    alert("Hola " + Name + "-chan");

    var age = prompt("Cual es tu edad?");
    while (age === null|| age==="") {
        alert("La pregunta fue clara...")
            var age = prompt("Cual es tu edad?");
    }
    while (!/^[0-9]+$/.test(age)) {
        alert("La pregunta fue clara... ingresa un numero o tu edad esta en letras?")
            var age = prompt("Cual es tu edad?");
    }
        

    if (age < 13) { 
        alert("Aun eres muy joven, procede con cuidado.");
    }

    if (age > 25) { 
        alert("Genial, empecemos con la aventura, abuelito.");
    }
    
    else { 
        alert("Genial, empecemos!");
    }

    alert("Acabas de despertar y lo primero que ves es un perrito.");
    alert("Si, un perrito.");

    var perrito = prompt("Que nombre le pondras?");
    while (perrito === null|| perrito==="") {
    alert("El perrito exige un nombre!!! *Te ladra*")
    var perrito = prompt("Que nombre le pondras?");
    } 
    alert(perrito + " ... pudiste elegir algo mejor.... bueno por lo menos ahora tiene nombre");

    alert("parece que "+perrito+" tiene sed, deseas darle agua?")

    var userAnswer1 = prompt("<si o no>").toLowerCase();
    
    if (userAnswer1 === "no") {
        alert(perrito + " ha muerto :(");
        alert(perrito + " vivira en nuestros corazones.");
        var points = points - 1;
        alert("Has perdido " + points + " punto.");
        alert("Fin del juego, tu puntaje es " + points);
       return;
    }

    if (userAnswer1 === "si") {
        alert(perrito + " comienza a tomar agua");
        alert("pschlopschlopschlopschlopschlopschlopschlopschlopschlopschlopschlopschlopschlopschlopschlopschlo");
        alert(perrito + " mueve la colita UWU");

        var points = points + 1;
        alert("Has ganado " + points + " punto.");
    }

 else {
    alert(perrito + " murio por tu falta de comprension lectora");
    alert(perrito + " dice wau wau, pero no logras entender lo que dice.");
    var points = points + -8;
    alert("Has perdido " + points + " puntos.");
    alert("Fin del juego, tu puntaje es " + points);
    return;
 }
 
 var points = points + 4;
    alert("*wau wau*, escuchas ladrar a " + perrito);
    alert("Que estara diciendo, te preguntas?");
    alert("Lastimosamente no entiendes nada pero haces tu mayor esfuerzo");
    let answer4 = prompt("Que esta diciendo");
    alert("Asi es, dijo: "+answer4+". Adivinaste!!");
    alert("Has ganado " + points + " puntos.");
    alert("No habia respuesta incorrecta, solo te queria regalar los puntos.");
    alert(perrito+ " te hace una pregunta");
    alert("Me amarias si fuera un gusano? logra articular..");
    alert("Con toda la seguridad del mundo le contestas");

    let userAnswer2 = prompt("a) Si, claro que si, tkm. \nb) Claro que no, dejarias de ser un perrito... \n\n <Responder con a o b>").toLowerCase();
    
    if (userAnswer2 === "a") {
        alert(perrito + " te abraza y mueve la colita");
        alert("muchas gracias, yo tambien te quiero mucho, dijo " +perrito);
        var points = points +10;
        alert("has ganado " +points+ " puntos");
        var points = points +6;
        alert("Fin del juego, tu puntaje es " + points);
        alert("Has obtenido el final verdadero.");
return;
    }

    if (userAnswer2 === "b") {
        alert(perrito + " comienza a llorar");
        alert("te odio dijo " +perrito);
        var points = points -10;
        alert("has perdido " +points + " puntos");
        var points = 6 + points;
        alert("Fin del juego, tu puntaje es " + points);
        alert("Has obtenido el final Malo.");
        alert("Es el final malo porque "+perrito+" no muere y sufre por toda la eternidad por tu falta de amor.");

return;
    }

    else {
        alert(perrito + " murio por tu falta de comprension lectora");
        alert(perrito + " dice wau wau, pero no logras entender lo que dice.");
        var points = points -6;
        alert("has perdido " +points + " puntos");
        alert("Fin del juego, tu puntaje es" + points);
return;
}
}
