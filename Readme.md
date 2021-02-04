# EXPRESS

## npx express-generator --ejs nodepop 

(Para crear una aplicación de nodejs que utiliza express en la carpeta donde queramos crear nuestra api)

 ## npm install

(Para instalar dentro de nuestra aplicación todas las dependencias incluidas en nuestro package.json. Lee el archivo package.json e instala todas las librerías indicadas en ese archivo en nuestra aplicación)

## node ./bin/www

(Para ejecutar nuestra aplicación)

 ## npm run start

  (Para arrancar también nuestra aplicación express sin necesidad de utilizar node ./bin/www tal y como aparece en nuestro package.json. De esta forma se ejectuta el script start sin necesidad de poner todo el texto).

 ## npm i nodemon

  (Para instalar nodemon en el proyecto concreto en el que estemos trabajando y no tener que andar arrancando el servidor cada vez que metamos un cambio sino que se actualiza cada vez que guardamos)

  ## Variables de entorno de desarrollo, pruebas y producción

  Podemos establecer variables para que nuestro servidor sepa que está en desarrollo, pruebas o en producción. Es importante hacer esta distincion. Lo establecemos en el script de dev del package.json

### npm install cross-env

Permite poner distintas variables de entorno a lo largo de distintos sistema operativos. Traducirá nuestra variable de entorno al sistema operativo que estemos usando. No hay problema si usas windows, mac, linux....

### npm install express-validator

Para instalar la librería de validaciones express-validator



