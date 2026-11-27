const schemes = {
  "b1t1": {
    "map": "Constitución → norma suprema → organiza Estado, reconoce derechos y limita poderes.",
    "branches": [
      "1) Características y estructura",
      "2) Principios y valores",
      "3) Derechos, garantías y suspensión",
      "4) Administración Pública"
    ],
    "memory": "Fechas: 31 oct aprobación; 6 dic referéndum; 27 dic sanción; 29 dic BOE. Estructura: 169 artículos, 10 títulos, 4 adicionales, 9 transitorias, 1 derogatoria, 1 final. Valores art. 1.1: libertad, justicia, igualdad, pluralismo. Reforma: 167 ordinaria / 168 agravada. Administración: art. 103."
  },
  "b1t3": {
    "map": "AEAT → ente de derecho público → aplica efectivamente el sistema tributario estatal y aduanero.",
    "branches": [
      "1) Creación, naturaleza y régimen jurídico",
      "2) Objetivos",
      "3) Funciones",
      "4) Organización central",
      "5) Organización periférica"
    ],
    "memory": "Creación: art. 103 Ley 31/1990. Adscripción: Ministerio de Hacienda mediante Secretaría de Estado de Hacienda. Diferenciar objetivos (para qué existe) de funciones (qué hace). Áreas operativas: gestión, inspección, recaudación, aduanas. Organización: central y territorial."
  },
  "b1t4": {
    "map": "V Convenio → regula condiciones laborales del personal AEAT: ámbito, órganos, clasificación, acceso/movilidad, derechos y obligaciones.",
    "branches": [
      "1) Ámbito de aplicación",
      "2) Negociación y seguimiento",
      "3) Clasificación profesional",
      "4) Selección y provisión",
      "5) Derechos",
      "6) Obligaciones"
    ],
    "memory": "Comisión Negociadora = negocia. CPVIE = vigilancia, interpretación y estudio. Clasificación: grupo profesional → área funcional → puesto/especialidad. Provisión: traslados, reingreso y otras movilidades. Derechos: promoción, jornada, permisos, formación, excedencias, retribuciones y representación."
  },
  "b1t5": {
    "map": "Prevención de riesgos laborales → identificar peligros, evaluar riesgos y aplicar medidas para evitar daños en el trabajo.",
    "branches": [
      "1) Conceptos y marco preventivo",
      "2) Medidas generales: orden, limpieza, iluminación, señalización y primeros auxilios",
      "3) Riesgos generales: electricidad e incendios",
      "4) Riesgos específicos: PVD, ambiente y voz",
      "5) Acoso",
      "6) Violencia externa",
      "7) Teletrabajo"
    ],
    "memory": "Distinguir accidente de trabajo / enfermedad profesional. Cadena preventiva: peligro → riesgo → evaluación → medida preventiva → seguimiento. Riesgos generales no son lo mismo que riesgos específicos de PVD. Acoso psicológico, acoso sexual y por razón de sexo son categorías diferenciadas. Teletrabajo también requiere prevención."
  },
  "b1t6": {
    "map": "Igualdad efectiva y protección social → políticas y normas frente a discriminación, violencia, exclusión y falta de transparencia.",
    "branches": [
      "1) Introducción",
      "2) LO 3/2007 igualdad efectiva",
      "3) IV Plan de Igualdad",
      "4) Violencia de género y ley integral",
      "5) Protocolo de acoso sexual/por razón de sexo",
      "6) Discapacidad (RDL 1/2013)",
      "7) Dependencia (Ley 39/2006)",
      "8) Transparencia y buen gobierno"
    ],
    "memory": "No confundir igualdad formal con igualdad efectiva. Separar violencia de género del acoso sexual o por razón de sexo en el ámbito laboral. Discapacidad: derechos, inclusión y accesibilidad. Dependencia: autonomía personal y atención. Transparencia: publicidad activa, acceso a información y buen gobierno; Consejo de Transparencia."
  },
  "b2t1": {
    "map": "Ayudante T5 → tareas complementarias de apoyo bajo órdenes y supervisión; mantenimiento, recepción/distribución, franqueo, accesos y atención.",
    "branches": [
      "1) Funciones y marco del puesto",
      "2) Mantenimiento preventivo y correctivo",
      "3) Instalaciones: apertura, cierre y puesta en marcha/parada",
      "4) Materiales y herramientas",
      "5) Recepción y distribución de paquetería/documentación",
      "6) Franqueo, depósito, almacenamiento y control",
      "7) Accesos y atención ciudadana",
      "8) Confidencialidad y protección de datos"
    ],
    "memory": "Preventivo = conservar/prevenir fallos; correctivo = actuar tras detectar avería. Apertura/cierre exige comprobar instalaciones y que no quede nadie dentro. Circuito documental: recibir → registrar/identificar → distribuir → controlar. En accesos: identificar, orientar y aplicar instrucciones, sin divulgar información. Confidencialidad: acceso solo por necesidad funcional."
  },
  "b2t2": {
    "map": "Equipos de oficina + servicios postales → uso correcto, mantenimiento y trazabilidad de envíos/notificaciones.",
    "branches": [
      "1) Fotocopiadoras: clasificación, elementos, copia, incidencias, mantenimiento y ubicación",
      "2) Escáneres y tipos",
      "3) Fax y emuladores",
      "4) Encuadernación",
      "5) Destructoras",
      "6) Proyectores: partes y mantenimiento",
      "7) Sonido/megafonía: entrada, amplificación y salida",
      "8) Tipos de envíos",
      "9) Certificados postales",
      "10) Notificaciones administrativas"
    ],
    "memory": "Fotocopiadora: original → ajustes → alimentación → reproducción → acabado. Escáner digitaliza; fax transmite documentos. Destructora elimina soportes según nivel de seguridad. Sistema de sonido: transductor de entrada → amplificador → transductor de salida. Distinguir envío ordinario, certificado y notificación; certificado acredita imposición/entrega según servicio, notificación sigue reglas administrativas."
  },
  "b2t3": {
    "map": "Manipulación segura de mercancías → planificar, mover y pesar cargas con medios adecuados, minimizando lesiones y daños.",
    "branches": [
      "1) Introducción",
      "2) Carga y descarga: concepto y normas",
      "3) Manipulación manual: obligaciones, formación, factores de riesgo, riesgos y medidas",
      "4) Pesaje: finalidad, medios y uso",
      "5) Herramientas y útiles de paquetería",
      "6) Normativa básica"
    ],
    "memory": "Antes de mover: valorar peso, volumen, agarre, recorrido y obstáculos. Factores: carga, esfuerzo, entorno y exigencias de la tarea. Medidas: reducir peso/recorrido, ayudas mecánicas, técnica segura y formación. Pesaje: básculas/balanzas y sistemas integrados; comprobar capacidad y puesta a cero. Herramienta adecuada + inspección + uso seguro."
  },
  "b2t4": {
    "map": "Carga/estiba → inmovilizar mercancía; paletización/almacenamiento → estabilidad y orden; equipos mecánicos → movimiento seguro.",
    "branches": [
      "1) Concepto de carga y estiba",
      "2) Principios técnicos",
      "3) Inmovilización y sistemas de sujeción",
      "4) Inspección, formación y responsabilidades",
      "5) Paletización",
      "6) Almacenamiento seguro y equipos",
      "7) Manipulación mecánica/automatizada",
      "8) Normativa"
    ],
    "memory": "Sujeción: fricción/amarre superior, amarre directo, bloqueo por forma, antideslizantes o combinación. Paletizar: distribuir peso, estabilidad, compatibilidad y fijación. Almacenar: capacidad de estantería, pasillos, apilado, señalización e inspección. Equipos: seleccionar por carga, altura, recorrido y entorno; no superar capacidad nominal."
  },
  "b2t5": {
    "map": "Transporte + embalaje + almacenamiento + orden → conservar materiales y evitar daños y accidentes durante todo el flujo logístico.",
    "branches": [
      "1) Principios preventivos",
      "2) Transporte: tipos y riesgos de manipulación manual",
      "3) Envases y embalajes",
      "4) Almacenamiento: sistemas y prevención",
      "5) Orden y limpieza: obligación preventiva y buenas prácticas"
    ],
    "memory": "Flujo: preparar → transportar → recibir → almacenar → localizar/retirar. Transporte: elegir medio según carga, distancia y entorno. Embalaje protege, agrupa e identifica; envase contiene. Almacenamiento: ubicación estable, carga admisible y pasillos libres. Orden/limpieza reduce caídas, golpes, incendios y deterioro; limpiar sin crear nuevos riesgos."
  },
  "b2t6": {
    "map": "Pintura → preparar soporte y aplicar acabado; albañilería → preparar mezclas, replantear y ejecutar operaciones básicas con nivel y aplomo.",
    "branches": [
      "1) Pintura: técnicas de aplicación de pinturas, barnices y revestimientos",
      "2) Mantenimiento de superficies pintadas/barnizadas",
      "3) Albañilería: herramientas y comprobaciones",
      "4) Morteros, yesos y hormigón",
      "5) Fábricas de ladrillo y alicatado"
    ],
    "memory": "Pintura: soporte → preparación → imprimación si procede → aplicación → secado/repintado → mantenimiento. Parámetros: rendimiento, secado al tacto e intervalo de repintado. Barniz protege y deja ver la veta; lasur impregna madera. Albañilería: medir/replantear → comprobar nivel/plomo → preparar mezcla → colocar → rejuntar/acabar. Mortero = conglomerante + arena + agua; hormigón incorpora árido grueso."
  },
  "b2t7": {
    "map": "Montaje de mueble → planificar, medir, preparar piezas, ensamblar, fijar y ajustar; herrajes permiten unión, giro, cierre y manejo.",
    "branches": [
      "1) Planificación: bosquejo, croquis, escala, modelo/maqueta y nota de madera",
      "2) Medición y marcado",
      "3) Herramientas",
      "4) Secuencia de montaje",
      "5) Tornillos y clavos",
      "6) Bisagras y uniones articuladas",
      "7) Fijaciones desmontables",
      "8) Cierres, tirantas/tiradores",
      "9) Colocación y ajuste de herrajes"
    ],
    "memory": "Secuencia: interpretar plano → ordenar piezas → seleccionar componentes/herramientas → presentar en seco → aplicar adhesivo → prensar → comprobar escuadra/medidas → fijar → limpiar → ajustar. Tornillo = unión roscada; clavo = fijación por penetración. Bisagra = giro articulado. Fijación desmontable permite desmontar sin destruir unión. Herrajes deben alinearse y probarse al final."
  }
};
