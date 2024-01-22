// Importar la biblioteca RxJS
const { Observable } = require('rxjs');
const { filter } = require('rxjs/operators');

// Crear un observable que emite números cada segundo
const numbersObservable = new Observable(subscriber => {
    let count = 0;
    setInterval(() => {
        subscriber.next(count++);
    }, 1000);
});

// Crear un observador que muestra los números en la consola
const numbersObserver = {
    next: number => console.log('Número emitido:', number),
    error: error => console.error('Error:', error),
    complete: () => console.log('Observable completado'),
};

// Aplicar un operador para filtrar los números pares
const filteredObservable = numbersObservable.pipe(filter(number => number % 2 === 0));

// Suscribir el observador al observable filtrado
filteredObservable.subscribe(numbersObserver);