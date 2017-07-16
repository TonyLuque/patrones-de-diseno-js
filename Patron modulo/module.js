//Modulo anónimo
let myModule = ( () => {

    //se genera un objeto que contendra todos nuestros metodos publicos.
    let publicFunction = {};
    //esta variable es private
    let total = 0; 

    //===================================//
    // Metodos privados                  //
    //===================================//

    _privateFunction = () => total * 500;

    //===================================//
    // Metodos publicos                  //
    //===================================//

    publicFunction.suma = (valor_a, valor_b) => {
        let suma = valor_a + valor_b;
        total   += suma;
        console.log(`Resultado de la suma es = ${suma}`);
    };

    publicFunction.getPrivateFunction = () => console.log(`"Valor de _privateFunction es = ${_privateFunction()}`);

    //retornamos nuestros metodos publicos.
    return publicFunction;

})();

//consultando nuestro metodo publico
myModule.suma(10, 5); //esto nos regresa Resultado de la suma es = 15

//consiguiente el resultado de _privateFunction
myModule.getPrivateFunction(); // esto nos regresa 7500

//Accesando ah nuestra funcion privatefunction.
myModule._privateFunction (); //esto nos regresa un error

