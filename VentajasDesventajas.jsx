// Función que simula una operación asíncrona
function simulateAsyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Operación completada');
        }, 1000);
    });
}

// Función que utiliza async/await para manejar la operación asíncrona
async function handleAsyncOperation() {
    try {
        const result = await simulateAsyncOperation();
        console.log(result);
    } catch (error) {
        console.error('Error en la operación asíncrona:', error);
    }
}

// Llamar a la función que maneja la operación asíncrona
handleAsyncOperation();
