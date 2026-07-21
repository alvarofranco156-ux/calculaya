const categoryPurposes: Record<string, string> = {
  Finanzas: "tomar decisiones económicas con una estimación clara antes de comprar, ahorrar, financiar o comparar opciones",
  Matemáticas: "resolver operaciones y comprobar resultados sin tener que hacer los cálculos manualmente",
  Salud: "obtener una referencia orientativa sobre medidas corporales, hábitos y necesidades diarias",
  Fechas: "organizar plazos, calcular intervalos y planificar fechas con precisión",
  Conversores: "convertir unidades de forma rápida y evitar errores al trabajar con sistemas de medida distintos",
  Utilidades: "resolver tareas digitales y cotidianas de forma rápida desde el navegador"
};

const categoryWarnings: Record<string, string> = {
  Finanzas: "Los resultados son estimaciones y pueden no incluir comisiones, impuestos, redondeos o condiciones particulares. Para decisiones importantes, revisa la documentación oficial o consulta con un profesional.",
  Salud: "Esta herramienta ofrece una orientación general y no sustituye una valoración médica, nutricional o deportiva individualizada.",
  Matemáticas: "Comprueba los datos introducidos y el redondeo cuando necesites un resultado académico, técnico o profesional exacto.",
  Fechas: "Los calendarios laborales pueden variar según país, comunidad autónoma, municipio y convenio.",
  Conversores: "El resultado puede mostrarse redondeado. Conserva más decimales cuando trabajes con cálculos técnicos.",
  Utilidades: "El cálculo se realiza localmente en tu navegador. Revisa el resultado antes de utilizarlo en procesos sensibles."
};

const specific: Record<string, { purpose: string; uses: string[]; interpretation: string }> = {
  iva: { purpose: "calcular el IVA de una base imponible y conocer el precio final con impuestos", uses: ["Preparar presupuestos o facturas", "Comprobar el IVA de una compra", "Comparar precios con y sin impuestos"], interpretation: "El resultado separa la cuota de IVA y el total final. El tipo habitual en España es el 21 %, aunque existen tipos reducidos." },
  discount: { purpose: "averiguar cuánto pagarás después de aplicar un descuento y cuánto dinero ahorras", uses: ["Comparar ofertas", "Comprobar rebajas", "Calcular promociones comerciales"], interpretation: "El precio final es el importe original menos el porcentaje descontado." },
  margin: { purpose: "medir el beneficio bruto de una venta respecto al precio final", uses: ["Fijar precios", "Analizar rentabilidad", "Comparar productos o servicios"], interpretation: "Margen y recargo no son lo mismo: el margen se calcula sobre el precio de venta y el recargo sobre el coste." },
  loan: { purpose: "estimar la cuota periódica, el coste total y los intereses de un préstamo o hipoteca", uses: ["Comparar financiaciones", "Planificar una hipoteca", "Valorar distintos plazos e intereses"], interpretation: "Una cuota más baja por ampliar el plazo suele implicar pagar más intereses en total." },
  compound: { purpose: "estimar cómo crece un capital cuando los intereses se reinvierten", uses: ["Planificar inversiones", "Comparar rentabilidades", "Visualizar el efecto del tiempo"], interpretation: "El crecimiento se acelera porque cada periodo genera intereses sobre el capital y sobre los intereses anteriores." },
  bmi: { purpose: "calcular el índice de masa corporal a partir del peso y la altura", uses: ["Obtener una referencia general", "Seguir cambios de peso", "Preparar una consulta profesional"], interpretation: "El IMC es una medida orientativa y no diferencia masa muscular, grasa ni distribución corporal." },
  bmr: { purpose: "estimar la energía que tu cuerpo utiliza en reposo", uses: ["Planificar calorías", "Entender el gasto basal", "Complementar una estimación de gasto diario"], interpretation: "Es una estimación estadística; la edad, composición corporal y actividad real pueden modificar el gasto." },
  calories: { purpose: "estimar las calorías diarias necesarias según tus datos y nivel de actividad", uses: ["Mantener peso", "Planificar una dieta", "Ajustar objetivos deportivos"], interpretation: "Utiliza el resultado como punto de partida y ajusta según evolución, hambre, rendimiento y recomendación profesional." },
  percent: { purpose: "calcular porcentajes, proporciones y partes de una cantidad", uses: ["Resolver ejercicios", "Calcular impuestos o descuentos", "Comparar variaciones"], interpretation: "Un porcentaje expresa una cantidad por cada cien unidades." },
  rule3: { purpose: "resolver relaciones proporcionales directas de forma automática", uses: ["Escalar recetas", "Convertir precios y cantidades", "Resolver problemas de proporcionalidad"], interpretation: "La regla de tres funciona cuando ambas magnitudes mantienen una relación proporcional." },
  quadratic: { purpose: "resolver ecuaciones de segundo grado y mostrar sus posibles soluciones", uses: ["Comprobar ejercicios", "Analizar funciones", "Resolver problemas algebraicos"], interpretation: "El discriminante determina si existen dos soluciones reales, una solución doble o soluciones complejas." },
  temp: { purpose: "convertir temperaturas entre Celsius y Fahrenheit", uses: ["Viajes", "Recetas", "Interpretar previsiones y manuales"], interpretation: "Las escalas no empiezan en el mismo punto, por eso la conversión incluye multiplicación y suma." },
  datediff: { purpose: "calcular el tiempo exacto transcurrido entre dos fechas", uses: ["Medir plazos", "Calcular antigüedad", "Planificar proyectos"], interpretation: "El resultado depende de si se cuentan días naturales completos y del orden de las fechas." },
  workdays: { purpose: "estimar cuántos días laborables hay entre dos fechas", uses: ["Planificar entregas", "Calcular jornadas", "Organizar vacaciones"], interpretation: "La estimación suele excluir fines de semana; los festivos deben revisarse según el calendario aplicable." },
  password: { purpose: "generar una contraseña aleatoria difícil de adivinar", uses: ["Crear accesos nuevos", "Sustituir contraseñas repetidas", "Mejorar seguridad básica"], interpretation: "Guárdala en un gestor de contraseñas y activa la verificación en dos pasos cuando esté disponible." },
  words: { purpose: "contar palabras y conocer rápidamente la extensión de un texto", uses: ["Redacción SEO", "Trabajos académicos", "Publicaciones y formularios"], interpretation: "El recuento considera palabras separadas por espacios; algunas plataformas pueden aplicar criterios distintos." }
};

export function getToolContent(tool: { name: string; category: string; kind: string; description: string }) {
  const detail = specific[tool.kind];
  const purpose = detail?.purpose ?? `${tool.name.toLowerCase()} para ${categoryPurposes[tool.category] ?? "obtener un resultado útil de forma rápida"}`;
  const uses = detail?.uses ?? [
    `Resolver un cálculo de ${tool.name.toLowerCase()} sin hacerlo a mano`,
    "Comparar distintos valores y escenarios",
    "Comprobar un resultado antes de tomar una decisión"
  ];
  const interpretation = detail?.interpretation ?? "Introduce datos coherentes y presta atención a las unidades. El resultado se muestra con un redondeo pensado para facilitar su lectura.";
  const warning = categoryWarnings[tool.category] ?? categoryWarnings.Utilidades;
  const metaDescription = `${tool.name} online gratis para ${purpose}. Resultado inmediato, explicación sencilla y sin registro.`.slice(0, 158);
  return { purpose, uses, interpretation, warning, metaDescription };
}
