export function* getId() {
    while (true) {
        yield Math.random().toString(36).substring(5).toUpperCase();
    }
}

/*
Results examples

["I84P6YK","O7QL83M8","N5NCIQ1","JY6GGDYF","KLUY7TJQ","PAIU4RJB","Y5HUKX1M","SJWKL74O","62C1OBY7","783334YA"]

*/

export function* getId() {
    let michiId = 1;
    while (true) {
        yield michiId++
    }
}

const michiId = getI();
console.log(michiId.next());

// other exercise

export function* getId() {
    let catId = 1;
    while (true) {
        yield catId++
    }
}

// other example

export function* getId() {
    let newMichi = 0;
    // es una variables que sirve para llevar el control de los nuevos ingresos
    let id = Math.random().toString(36).substring(5).toUpperCase();
    // aquí se genera un número aleatorio alfanumérico
    while(true) {
        yield `${newMichi += 1}${id};`
    // aquí concateno mi número de control y los códigos que irán variando para evitar que existan Id's duplicados 
    }
}

const michiId = getId();
console.log(michiId.next().value);

//another last example

function hash(number) {
    return
    `MN${number*Math.random(),toFixed(10)}-${number}`
}

export function* getId() {
    let indexPoss = 0, id = 0;
    while (true) {
        id++;
        yield indexPoss = hash(id);
    }
}

// mine

export function* getId() {
    let initial = "catId";
    // es una variables que sirve para llevar el control de los nuevos ingresos
    let newMichi = 0;
    // es una variables que sirve para llevar el control de los nuevos ingresos
    let uniqueNumber = Math.random().toString(36).substring(5).toUpperCase();
    // aquí se genera un número aleatorio alfanumérico
    while(true) {
        yield `${initial}${newMichi += 1}${uniqueNumber};`
    // aquí concateno mi número de control y los códigos que irán variando para evitar que existan Id's duplicados 
    }
}

const id = getId();
console.log(id.next().value);
