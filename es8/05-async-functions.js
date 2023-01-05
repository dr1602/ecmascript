// if para validar siun valor era verdadero para que entrara el resolve
const fnAsync = () => {
    return new Promise ((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('AsynC!!'), 3000)
    : reject(new Error('Error!'));
    });
}

// syntaxis de async y await para trabajar sobre asincronismo

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

// se peuden ejecutar bloques de código consecuentes y que no deben ser bloqueantes, debe ser ejecutado sin ningun problema, independiente a la proemsa

console.log('Before');
anotherFn();
console.log('After');

// cómo cambia si cambiamos la syntaxis

const fnAsync = () => {
    return new Promise ((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('AsynC!!'), 2000)
    : reject(new Error('Error!'));
    });
}

const anotherFn = () => {
    const something = fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('Before');
anotherFn();
console.log('After');

// para el manejo de errores en async await se usan un try catch

async function getProcessedData(url) {
    let v;
    try {
        v = await downloadData(Url);
    } catch(e) {
        v = await dowloadFallbackData(url);
    } return processDataInWorker(v);
}

// ejmplo con notas claras

const fnAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Luego de esperar 2 segundos'),2000)
            :reject(new Error('Error!'));
    });
}

const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Antes');
anotherFn();
console.log('Despues');

