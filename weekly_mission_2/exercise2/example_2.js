const explorers = [{
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]

/* Imprimir nombre */
console.log("1.) Nombre de los explorers")
explorers.forEach(element =>
  console.log("Nombre: " + element.name)
)
console.log("\n");

/* Imprimir stack */
console.log("2.) Stack de los explorers")
explorers.forEach(element =>
  console.log(element.stack)
)
console.log("\n");

/* Crear lista usando map */
console.log("3.) Nueva lista de stack")
const newStack = explorers.map(newElement => newElement.stack)
console.log(newStack)
console.log("\n");

/* Obtener lista de explorer con stack "js" usando filter */
console.log('4.) Filtro de explorers con stack "js"');
const stackFilter = explorers.filter(element =>
  element.stack.includes("js")
)
console.log(stackFilter);
console.log("\n");

/* Explorers de la CDMX */
console.log("5.) Explorers de CDMX");
const cityFind = explorers.find(city_explorers => city_explorers.city === "CDMX")
console.log(cityFind);
console.log("\n");

/* Suma de todos los exercises usando reduce */
console.log("6.) Suma de todos los exercises");
const sumaExercises = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log("La suma es: " + sumaExercises + "\n");

/* validación si al menos tiene la propiedad exercisesFinished en frontend como true, usa SOME */
console.log("7.) Validación con SOME");
const exercisesFinish_front = explorers.some(element =>
  element.missions.frontend.exercisesFinished == true
)
console.log(exercisesFinish_front + "\n");

/* validación si todos tienen la propiedad isFinished del onboarding como true. Usa EVERY */
console.log("8.) Validación con EVERY");
const exercisesFinish_onbor = explorers.every((element) => 
typeof element.missions.onboarding.exercisesFinished === 'true'
)
console.log(exercisesFinish_onbor);