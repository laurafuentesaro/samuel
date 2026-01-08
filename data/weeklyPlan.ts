export type DayPlan = {
  day: string;
  training: string;
  focus: string;
  targetCalories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: {
    breakfast: { description: string; kcal: number };
    lunch: { description: string; kcal: number };
    snack: { description: string; kcal: number };
    dinner: { description: string; kcal: number };
  };
};

export const WEEKLY_PLAN: DayPlan[] = [
  {
    day: "Lunes",
    training: "CALIDAD: 10x1000m a 21km/h",
    focus: "Carga de Glucógeno & Cafeína",
    targetCalories: 2950,
    macros: { protein: 115, carbs: 420, fat: 70 },
    meals: {
      breakfast: {
        description: "06:20 AM - Bowl Frío: 250g Yogurt Natural + 1 Banana + 60g avena hidratada + 30g Nueces + 1 cda Miel.",
        kcal: 650
      },
      lunch: {
        description: "11:30 - 14:30 (Vianda): Bowl 'Mediterráneo': 200g Quinoa cocida + 1 lata Atún (170g) + 2 Huevos duros + Tomate + Aceitunas + 1 cda Aceite Oliva.",
        kcal: 780
      },
      snack: {
        description: "18:00 HS: 1 Banana + 2 Tostadas Pan Integral con 2 cdas Mantequilla de Maní + 200ml Yogurt.",
        kcal: 550
      },
      dinner: {
        description: "21:00 HS - 200g Pechuga de Pollo grillada + 200g Arroz integral + Ensalada completa (Rúcula, Tomate, Remolacha) + 1 cda Aceite de Oliva.",
        kcal: 970
      }
    }
  },
  {
    day: "Martes",
    training: "Rodaje Suave (10-12km)",
    focus: "Mantenimiento & Grasas Saludables",
    targetCalories: 3200,
    macros: { protein: 120, carbs: 500, fat: 65 },
    meals: {
      breakfast: {
        description: "07:20 AM - Licuado CARGADO: 2 Bananas + 300ml Yogurt + 60g avena hidratada + 1 cda Miel. + 2 Tostadas Pan Integral con Mermelada.",
        kcal: 750
      },
      lunch: {
        description: "11:30 - 14:30 (Vianda Carga): Bowl 'Energía': 250g Arroz Blanco + 150g Pollo + Mango + Zanahoria + 1 cda Salsa Soja. + 1 Banana de postre.",
        kcal: 850
      },
      snack: {
        description: "18:00 HS (Pre-Entreno): 2 Sandwiches Pan Integral con Queso y Dulce de Membrillo + Café/Matcha frío + 1 Banana.",
        kcal: 600
      },
      dinner: {
        description: "Post-Series (Recuperación CRITICA): 300g Pasta/Fideos cocidos + 150g Pescado o Pollo o Carne + 2 Huevos + 1 cda Aceite Oliva. (Prioridad: Rellenar glucógeno).",
        kcal: 1000
      }
    }
  },
  {
    day: "Miércoles",
    training: "CALIDAD: 10x1000m a 21km/h",
    focus: "Carga de Glucógeno & Cafeína",
    targetCalories: 2700,
    macros: { protein: 115, carbs: 370, fat: 70 },
    meals: {
      breakfast: {
        description: "06:20 AM - 3 Tostadas Pan Integral con 1 Palta entera pisada + 2 Huevos revueltos + 1 Naranja.",
        kcal: 650
      },
      lunch: {
        description: "11:30 - 14:30 (Vianda): Bowl 'Vegetariano Proteico': 150g Lentejas + 150g Arroz + 2 Huevos duros + 30g Almendras + Vegetales.",
        kcal: 750
      },
      snack: {
        description: "18:30 HS: Bowl Grande de Frutas (300g) con 200g Yogurt y 40g Mix Frutos Secos + 1 cda Miel.",
        kcal: 500
      },
      dinner: {
        description: "Omelette de 3 huevos con queso + Ensalada de tomate + 2 Rebanadas Pan Integral + 150g Boniato asado.",
        kcal: 800
      }
    }
  },
  {
    day: "Jueves",
    training: "Rodaje Suave (10-12km)",
    focus: "Mantenimiento & Grasas Saludables",
    targetCalories: 3200,
    macros: { protein: 120, carbs: 500, fat: 65 },
    meals: {
      breakfast: {
        description: "07:20 AM - Avena Hidratada CARGADA: 300ml Yogurt + 80g Avena hidratada + Chía + 2 cdas Mantequilla Maní + 1 Banana picada + Miel.",
        kcal: 750
      },
      lunch: {
        description: "11:30 - 14:30 (Vianda Carga): Bowl 'Criollo': 250g Arroz Yamani + 150g Carne magra (Peceto) + 150g Calabaza asada + Semillas + 1 fruta.",
        kcal: 850
      },
      snack: {
        description: "17:30 HS (Pre-Series): 3 Tostadas Pan Integral con Mermelada + Queso untable + 1 Banana + 200ml Yogurt.",
        kcal: 650
      },
      dinner: {
        description: "22:00 HS (Post-Series): Wok abundante: 200g Pollo + Vegetales + 250g Boniato al horno + 150g Arroz. (Carbos para recuperar).",
        kcal: 950
      }
    }
  },
  {
    day: "Viernes",
    training: "CALIDAD: 10x1000m a 21km/h",
    focus: "Carga de Glucógeno & Cafeína",
    targetCalories: 2600,
    macros: { protein: 115, carbs: 340, fat: 75 },
    meals: {
      breakfast: {
        description: "06:20 AM - Ensalada de Frutas abundante (400g) + 250g Yogurt + 50g Granola + 20g Nueces.",
        kcal: 600
      },
      lunch: {
        description: "11:30 - 14:30 (Vianda): Ensalada de 200g Pasta Integral + 1 lata Atún + 2 Huevos + 1/2 Palta + Aceitunas + Aceite Oliva.",
        kcal: 780
      },
      snack: {
        description: "18:30 HS: 2 Sandwiches de Pan Integral con 100g Pollo y Tomate + 1 Yogurt bebible.",
        kcal: 500
      },
      dinner: {
        description: "150g Salmón/Atún a la plancha + Vegetales al vapor + 200g Papas al natural + Ensalada con Aceite Oliva.",
        kcal: 720
      }
    }
  },
  {
    day: "Sábado",
    training: "Tirada Larga (20-30km)",
    focus: "Carbohidratos y Grasas Saludables",
    targetCalories: 3300,
    macros: { protein: 115, carbs: 520, fat: 70 },
    meals: {
      breakfast: {
        description: "PRE-LARGO (7:00 AM): 4 Tostadas Pan Integral con Miel + 2 Bananas + té verde o café frío. (Carbos de fácil absorción).",
        kcal: 700
      },
      lunch: {
        description: "POST-LARGO (12:00): Bowl 'Carga Completa': 300g Arroz Blanco + 150g Pollo + 2 Huevos + Remolacha + 1 cda Aceite. + Jugo natural (preferir remolacha).",
        kcal: 950
      },
      snack: {
        description: "16:00 - Licuado Recuperador GRANDE: 400ml Yogurt + 2 Bananas + 2 cdas Cacao + 1 cda Miel + 40g Avena hidratada.",
        kcal: 650
      },
      dinner: {
        description: "Cena Libre GANADA: Pizza casera (3 porciones) o 300g Pasta con salsa y queso + Ensalada.",
        kcal: 1000
      }
    }
  },
  {
    day: "Domingo",
    training: "Descanso",
    focus: "Recuperación & Comida Casera",
    targetCalories: 2500,
    macros: { protein: 110, carbs: 320, fat: 80 },
    meals: {
      breakfast: {
        description: "Horario Libre (9-10 AM): Mate/Té + 3 Tostadas integrales con Manteca y Mermelada + 1 Fruta + Jugo.",
        kcal: 550
      },
      lunch: {
        description: "ALMUERZO: 200g Carne al Horno (Colita/Vacío) + 250g Papas/Boniatos/Calabaza asados + Ensalada con Aceite.",
        kcal: 900
      },
      snack: {
        description: "17:00 - 200g Yogurt con frutas frescas + 1 porción de Helado o 2 Medialunas.",
        kcal: 400
      },
      dinner: {
        description: "Cena Completa: Sopa de verduras fría + 2 Tostadas con queso + Ensalada Caprese + 1 fruta de postre.",
        kcal: 650
      }
    }
  }
];
