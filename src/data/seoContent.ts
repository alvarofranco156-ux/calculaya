const categoryContext: Record<string, { audience: string; cautions: string[]; relatedTerms: string[] }> = {
  Finanzas: {
    audience: "personas que quieren comparar importes, presupuestos, préstamos, ahorro o rentabilidad antes de tomar una decisión económica",
    cautions: ["No confundas una estimación con una oferta vinculante.", "Revisa comisiones, impuestos, seguros y condiciones particulares.", "Compara siempre el coste total, no solo la cuota o el porcentaje principal."],
    relatedTerms: ["importe", "porcentaje", "coste total", "intereses"]
  },
  Matemáticas: {
    audience: "estudiantes, profesionales y cualquier persona que necesite comprobar una operación de forma rápida",
    cautions: ["Comprueba que las unidades sean coherentes.", "Evita redondear demasiado pronto.", "Revisa los signos y el orden de los valores introducidos."],
    relatedTerms: ["fórmula", "resultado", "proporción", "redondeo"]
  },
  Salud: {
    audience: "personas que buscan una referencia general sobre medidas corporales, gasto energético o hábitos diarios",
    cautions: ["Los resultados son orientativos y no sustituyen una valoración profesional.", "La composición corporal y el contexto personal pueden cambiar la interpretación.", "No tomes decisiones médicas únicamente con el resultado de una calculadora."],
    relatedTerms: ["estimación", "referencia", "hábitos", "medidas corporales"]
  },
  Fechas: {
    audience: "personas que organizan plazos, vencimientos, vacaciones, antigüedad o planificación de proyectos",
    cautions: ["Comprueba si el cálculo incluye o excluye la fecha inicial.", "Los festivos pueden variar por territorio.", "Revisa la zona horaria cuando compares fechas de lugares distintos."],
    relatedTerms: ["plazo", "días naturales", "días laborables", "calendario"]
  },
  Conversores: {
    audience: "personas que trabajan con unidades distintas en viajes, estudios, recetas, deporte o documentación técnica",
    cautions: ["Mantén suficientes decimales en cálculos técnicos.", "Comprueba que has elegido la unidad de origen correcta.", "No mezcles magnitudes diferentes aunque usen símbolos parecidos."],
    relatedTerms: ["unidad de origen", "unidad de destino", "factor de conversión", "precisión"]
  },
  Utilidades: {
    audience: "personas que necesitan resolver tareas digitales o cotidianas directamente desde el navegador",
    cautions: ["Revisa el resultado antes de usarlo en un entorno profesional.", "No compartas información sensible innecesaria.", "Guarda una copia cuando el resultado sea importante."],
    relatedTerms: ["herramienta online", "resultado inmediato", "privacidad", "uso gratuito"]
  }
};

const specific: Record<string, any> = {
  iva: { query: "calcular IVA", benefit: "conocer la base imponible, la cuota de IVA y el precio final", example: "Si la base es 100 € y aplicas un 21 %, la cuota es 21 € y el total asciende a 121 €.", mistakes: ["Introducir el precio final como si fuera la base imponible", "Usar un tipo de IVA que no corresponde", "Confundir añadir IVA con desglosarlo"] },
  discount: { query: "calcular un descuento", benefit: "saber el precio rebajado y el ahorro exacto", example: "Un artículo de 80 € con un 25 % de descuento queda en 60 € y supone un ahorro de 20 €.", mistakes: ["Restar el porcentaje como si fueran euros", "Aplicar dos descuentos sumándolos", "Calcular el descuento sobre un precio incorrecto"] },
  margin: { query: "calcular margen comercial", benefit: "medir el beneficio bruto respecto al precio de venta", example: "Si un producto cuesta 60 € y se vende por 100 €, el beneficio bruto es 40 € y el margen es del 40 %.", mistakes: ["Confundir margen con recargo", "Olvidar costes adicionales", "Usar el coste como denominador cuando se busca margen"] },
  loan: { query: "calcular cuota de préstamo o hipoteca", benefit: "estimar la cuota mensual, los intereses y el coste total", example: "Al aumentar el plazo, la cuota suele bajar, pero normalmente aumenta el total de intereses pagados.", mistakes: ["Comparar solo la cuota", "Olvidar comisiones y seguros", "Introducir TAE cuando la herramienta solicita tipo nominal"] },
  simple: { query: "calcular interés simple", benefit: "estimar intereses sin reinversión", example: "1.000 € al 5 % anual durante 3 años generan 150 € de intereses simples.", mistakes: ["Aplicar capitalización compuesta", "Confundir porcentaje anual y mensual", "No adaptar el tiempo a la misma unidad"] },
  compound: { query: "calcular interés compuesto", benefit: "visualizar el crecimiento cuando los intereses se reinvierten", example: "Con interés compuesto, cada periodo genera rendimiento sobre el capital inicial y sobre los intereses acumulados.", mistakes: ["Usar una tasa anual como mensual", "Ignorar la frecuencia de capitalización", "Esperar un crecimiento lineal"] },
  percent: { query: "calcular porcentajes", benefit: "obtener una parte porcentual de cualquier cantidad", example: "El 15 % de 200 es 30.", mistakes: ["Dividir entre 100 dos veces", "Cambiar el valor base", "Confundir porcentaje con variación porcentual"] },
  change: { query: "calcular variación porcentual", benefit: "medir cuánto aumenta o disminuye un valor respecto al inicial", example: "Pasar de 100 a 125 supone una subida del 25 %.", mistakes: ["Usar el valor final como base", "Ignorar el signo de la variación", "Intentar calcular desde un valor inicial igual a cero"] },
  rule3: { query: "resolver una regla de tres", benefit: "hallar un valor desconocido en una relación proporcional", example: "Si 2 unidades cuestan 10 €, 5 unidades cuestan 25 € cuando la relación es directa.", mistakes: ["Invertir el orden de la proporción", "Usarla cuando la relación no es proporcional", "Mezclar unidades distintas"] },
  bmi: { query: "calcular IMC", benefit: "obtener una referencia del peso en relación con la altura", example: "El IMC se interpreta como orientación general y no distingue masa muscular, grasa ni distribución corporal.", mistakes: ["Introducir la altura en metros cuando se piden centímetros", "Tomarlo como diagnóstico", "Ignorar edad, composición corporal y contexto"] },
  bmr: { query: "calcular metabolismo basal", benefit: "estimar la energía utilizada por el cuerpo en reposo", example: "El metabolismo basal no equivale al gasto diario total, porque este también depende de la actividad.", mistakes: ["Confundir metabolismo basal con calorías de mantenimiento", "Elegir datos incorrectos", "Tratar la estimación como una cifra exacta"] },
  calories: { query: "calcular calorías diarias", benefit: "estimar necesidades energéticas según actividad", example: "La cifra sirve como punto de partida y puede ajustarse según evolución, rendimiento y objetivo.", mistakes: ["Sobreestimar el nivel de actividad", "Hacer cambios extremos", "No revisar la evolución real"] },
  temp: { query: "convertir Celsius y Fahrenheit", benefit: "traducir temperaturas entre las dos escalas", example: "0 °C equivalen a 32 °F y 100 °C equivalen a 212 °F.", mistakes: ["Aplicar solo una multiplicación", "Olvidar sumar o restar 32", "Confundir unidad de origen y destino"] },
  datediff: { query: "calcular diferencia entre fechas", benefit: "conocer el intervalo exacto entre dos días", example: "Es útil para plazos, antigüedad, viajes o duración de proyectos.", mistakes: ["Invertir fecha inicial y final", "No aclarar si se cuentan ambos extremos", "Ignorar años bisiestos"] },
  workdays: { query: "calcular días laborables", benefit: "estimar jornadas entre dos fechas excluyendo fines de semana", example: "Los festivos nacionales, autonómicos y locales deben revisarse aparte si no están incluidos.", mistakes: ["Asumir que todos los festivos son iguales", "Confundir días naturales con laborables", "No revisar el convenio aplicable"] },
  words: { query: "contar palabras", benefit: "medir la extensión de un texto", example: "Resulta útil para artículos, trabajos, formularios y límites editoriales.", mistakes: ["Comparar con plataformas que usan otro criterio", "Incluir texto oculto o duplicado", "No distinguir palabras y caracteres"] },
  password: { query: "generar contraseña segura", benefit: "crear una clave aleatoria difícil de adivinar", example: "Una contraseña larga, única y almacenada en un gestor suele ser más segura que una frase corta reutilizada.", mistakes: ["Reutilizar la misma contraseña", "Compartirla por canales inseguros", "No activar verificación en dos pasos"] },
  quadratic: { query: "resolver ecuación de segundo grado", benefit: "obtener las raíces y analizar el discriminante", example: "El discriminante indica si hay dos soluciones reales, una doble o ninguna solución real.", mistakes: ["Olvidar que el coeficiente a no puede ser cero", "Cambiar signos en la fórmula", "Redondear antes de terminar"] }
};

function normalize(text: string) { return text.charAt(0).toLowerCase() + text.slice(1); }

export function getSeoContent(tool: { name: string; category: string; kind: string; slug: string }) {
  const ctx = categoryContext[tool.category] ?? categoryContext.Utilidades;
  const detail = specific[tool.kind] ?? {
    query: normalize(tool.name),
    benefit: `obtener el resultado de ${normalize(tool.name)} de forma rápida y comprensible`,
    example: `Introduce valores de prueba, calcula el resultado y modifica un dato cada vez para observar cómo cambia.`,
    mistakes: ["Introducir datos en una unidad equivocada", "No revisar los valores antes de calcular", "Usar un resultado redondeado como si fuera exacto"]
  };
  const title = `${tool.name} online gratis: cálculo rápido | Calculaya`;
  const metaDescription = `${tool.name} online gratis para ${detail.benefit}. Calcula al instante, consulta ejemplos, fórmula, errores frecuentes y preguntas resueltas.`.slice(0, 158);
  const intro = `${tool.name} es una herramienta online gratuita diseñada para ${detail.benefit}. Está pensada para ${ctx.audience}. Puedes cambiar los datos tantas veces como necesites, comparar escenarios y consultar la explicación del resultado sin crear una cuenta.`;
  const howItWorks = `La herramienta procesa los valores introducidos directamente en tu navegador y aplica la operación correspondiente. Para conseguir una estimación útil, utiliza datos coherentes, mantén las mismas unidades durante todo el cálculo y revisa el resultado antes de utilizarlo en una decisión importante.`;
  const example = detail.example;
  const mistakes = detail.mistakes;
  const tips = [
    "Empieza con datos que conozcas para comprobar que has entendido cada campo.",
    "Cambia un solo valor cada vez cuando quieras comparar escenarios.",
    "Conserva más decimales si vas a reutilizar el resultado en otro cálculo.",
    ...ctx.cautions.slice(0, 2)
  ];
  const faq = [
    { question: `¿Para qué sirve ${normalize(tool.name)}?`, answer: `Sirve para ${detail.benefit}. Permite obtener una estimación inmediata y comparar distintos valores sin hacer la operación manualmente.` },
    { question: `¿Cómo puedo ${detail.query} correctamente?`, answer: `Introduce los datos solicitados, comprueba las unidades, pulsa el botón de cálculo y revisa tanto el valor principal como la explicación mostrada debajo.` },
    { question: `¿El resultado de ${normalize(tool.name)} es exacto?`, answer: `La operación se calcula con los datos introducidos, pero el resultado puede mostrarse redondeado y, según el tipo de herramienta, puede ser solo orientativo. Revisa siempre el contexto y las condiciones reales.` },
    { question: "¿Se guardan los datos introducidos?", answer: "No es necesario registrarse. El cálculo se realiza en el navegador y la herramienta no necesita enviar los valores a un servidor para obtener el resultado." }
  ];
  return { title, metaDescription, intro, howItWorks, example, mistakes, tips, faq, relatedTerms: ctx.relatedTerms };
}
