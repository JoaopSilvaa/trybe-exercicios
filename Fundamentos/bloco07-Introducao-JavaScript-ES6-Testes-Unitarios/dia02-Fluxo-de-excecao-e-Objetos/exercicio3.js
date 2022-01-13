const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNigth = (object, key, value) => object[key] = value;

  addNigth(lesson2, 'turno', 'noite');

  const listKeys = (object) => Object.keys(object);
  
  const lenghtObject = (object) => Object.keys(object).length;

  const listValues = (object) => Object.values(object);

  const allLessons = {}
  Object.assign(allLessons, {lesson1, lesson2, lesson3});

  const sumStudents = (object) => {
    const number1 = object.lesson1.numeroEstudantes;
    const number2 = object.lesson2.numeroEstudantes;
    const number3 = object.lesson3.numeroEstudantes;
    return number1 + number2 + number3;
  }

  const getValueByNumber = (object, number) => Object.values(object)[number];

  const verifyPair = (object, key, value) => {
      const array = Object.entries(object);
      let caso = true;
      for(let i in array)
       array[i][0] === key && array[i][1] == value ? caso = true : caso = false;
    return caso;
  }

  console.log(verifyPair(lesson3, 'turno', 'noite'));