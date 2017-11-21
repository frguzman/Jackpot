Proyecto: Tragamonedas
Desarrollar una aplicación de una sola página (single page application, SPA) que permita ingresar con distintos usuarios y jugar al tragamonedas.

Casos de uso: pantalla inicio

Al ingresar un usuario existente, el sistema lo reconoce y dispone de su nombre y créditos disponibles


Al ingresar un usuario inexistente, el sistema informa al usuario que el ingreso fue incorrecto


Se permite registrar nuevos usuarios mediante una opción, estos nuevos usuarios comienzan con 50 créditos

Casos de uso: pantalla juego


El usuario puede apostar créditos
El usuario puede cancelar su apuesta y el sistema le devuelve los créditos
Al presionar el botón (o palanca) de jugar, el sistema entra en modo sorteo
Mientras el sistema está en modo sorteo, se informa al usuario
Mientras el sistema está en modo sorteo, no pueden tocarse los botones de jugar / apostar / volver
Al culminar el sorteo (que sucede luego de N milisegundos) se muestra el resultado
En caso de premio el jugador recibe los créditos correspondientes y obtiene respuesta visual del premio
En caso de fallo el jugador obtiene respuesta visual de seguir participando
En cualquier momento el usuario puede volver al inicio (saliendo del juego, lo que implica un logout)
En caso de mega premio el jugador quedar registrado como el “último en sacar el pozo” (este valor se podría mostrar por ejemplo en la pantalla de inicio).

Reglas de negocio

Cada grupo definirá una tabla de premios, se sugiere que el tragamonedas conste mínimo de 3 rodillos con 6 elementos cada rodillo
Esta tabla de premios estará alojada en un archivo JSON (ubicado en el proyecto plunker) que se cargará de manera asincrónica. Ejemplo de archivo.
El azar será controlado, al jugar el usuario tendrá un 70% de posibilidades de fallar, un 25% de sacar un premio “normal”, un 4% de sacar un premio “elevado” y un 1% de sacar un “mega premio”. Se valorará que venga de la configuración JSON.
Cada vez que el usuario obtiene un fallo, la posibilidad de sacar premio normal se incrementa en un 2%. Ejemplo: el usuario falló 5 veces seguidas, debería tener un 60% de posibilidades de fallo y un 35% de premio normal (elevado y mega premio siguen en sus indices normales).
Ante cualquier premio, vuelven a inicializarse las posibilidades de premio del comienzo

Persistencia de los datos


En principio alcanza con que los datos persistan en memoria(por lo tanto, al refrescar la página se pierden los usuarios nuevos y los créditos gastados / ganados)

Cuestiones que se evaluarán

Código limpio: las variables, funciones y objetos tendrán nombres que permitirán evitar comentarios de código. También se valorará la consistencia (si uso inglés, uso en todos lados, si uso camelCase uso en todos lados).


Separación de intereses: se agruparán funcionalidades en objetos, evitando tener todas funciones sueltas. Se valorará separar claramente cuestiones de lógica, cuestiones de interacción y cuestiones de visualización en pantalla.


Encapsulamiento: se decidirá qué datos deberían estar protegidos, y para ello se usará el patrón “factory” o “module pattern”


Instancias únicas: si existen objetos de instancia única, se evitará que desde el código pueda generarse más de uno


Reutilización de funcionalidad: si hay situaciones similares en el código, se valorará la reutilización de las mismas a través de intermediarios (funciones u objetos)


Reutilización de valores con enumeraciones: se favorecerá el uso de enumeraciones (objetos sin prototipo y frizados) en vez de palabras o números repetidos en el código


Escalabilidad: se valorará abstraer funcionalidad para permitir cambios sin necesidad de reescribir todo (por ejemplo, como hicimos ayer el objeto usuarios que utiliza internamente una DB de memoria pero luego puede ir por ajax sin cambiar nada desde el llamado)


Modularización: se valorará disponer de archivos separados para cada abstracción





Dinámica del parcial
El martes 21/11 deberán asistir con un proyecto avanzado para poder continuar durante el examen. El proyecto puede ser realizado individualmente o en grupos de hasta 3 personas.
En el caso de ser realizado de manera grupal, cada uno de los integrantes debe conocer el código y la arquitectura utilizada como para poder explicarselo a un desconocido o rápidamente integrar cambios.
Le dedicaremos los primeros 30-45 minutos de clase a que cada proyecto exponga muy rápidamente la arquitectura que implementó y cómo funciona lo que tienen (y qué estado de avance tienen).

Recomendaciones
Les conviene trabajar como hacemos en clase, evitando resolver muchos problemas de una sola vez. Por ejemplo, la lógica de premios puede estar primero fija y devolver siempre el premio que quieran (sin premio, normal, elevado, mega). Eso ya hace que se imaginen algún objeto y una interfaz. Después es cuestión de hacer que sea “de verdad”.

Si bien una buena gráfica aporta mucho, traten de tener primero lo mínimo en pantalla.

Lo mismo con funcionalidad adicional, en el caso de agregar o pensar alternativas, son bienvenidas y valoradas, pero no deberían estar por encima de las funcionalidades básicas.

Si trabajan en grupo les convendría dividirse las partes, en ese caso pueden presentarse el martes definiendo claramente quién es el que “sabe” más sobre cada parte del proyecto.

¡Diviertanse! La idea es que sientan que pueden expresarse a través del código.