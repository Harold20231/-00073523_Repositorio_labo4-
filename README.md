# -00073523_Repositorio_labo4-

1. ¿Qué ocurre en cada caso con los operadores y por qué JS lo permite?
  
JavaScript es un lenguaje dinámico y de tipado débil, lo que significa que los operadores se comportan de manera flexible. Esto significa que, de acuerdo al contexto, los valores pueden transformarse automáticamente. Por ejemplo, si empleas el operador + con dos cifras, ejecuta una suma de tipo aritmético. No obstante, si uno de los valores es texto, convierte el otro en cadena y los une. La coerción de tipos es el término que se utiliza para referirse a esta conversión implícita, y es lo que permite que JS realice operaciones que en otros lenguajes generarían errores.

3. ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?
   
El flujo de control en JavaScript opera de una manera bastante similar a otros lenguajes de programación como Python, C++ o Java. La misma lógica se aplica a estructuras como while, if/else, for y switch: analizan una condición y ejecutan distintos bloques de código dependiendo del resultado. La diferencia principal es que, en JavaScript, las condiciones pueden incluir también conversiones de tipo implícitas. Esto provoca que valores como 0, "" (cadena vacía) o null sean considerados falsos.
