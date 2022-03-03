const contexts = [
  {
    title: "Height(cm)",
    heading: "Height(cm)",
    dataValueRange: {
      min: 150,
      max: 180,
    },
    sampleSizeRange: {
      min: 30,
      max: 60,
    },
    numberOfClassesRange: {
      min: 5,
      max: 6,
    },
  },
  {
    title: "Weight(kg)",
    heading: "Weight(kg)",

    dataValueRange: {
      min: 40,
      max: 90,
    },
    sampleSizeRange: {
      min: 30,
      max: 60,
    },
    numberOfClassesRange: {
      min: 5,
      max: 7,
    },
  },
  {
    title: "General Weighted Average",
    heading: "GWA",
    dataValueRange: {
      min: 75,
      max: 100,
    },
    sampleSizeRange: {
      min: 30,
      max: 60,
    },
    numberOfClassesRange: {
      min: 5,
      max: 6,
    },
  },
  {
    title: "Math Test Scores",
    heading: "Score",
    dataValueRange: {
      min: 30,
      max: 100,
    },
    sampleSizeRange: {
      min: 30,
      max: 60,
    },
    numberOfClassesRange: {
      min: 5,
      max: 8,
    },
  },
  {
    title: "Science Test Scores",
    heading: "Score",
    dataValueRange: {
      min: 60,
      max: 100,
    },
    sampleSizeRange: {
      min: 30,
      max: 60,
    },
    numberOfClassesRange: {
      min: 5,
      max: 7,
    },
  },
  {
    title: "Filipino Test Scores",
    heading: "Score",
    dataValueRange: {
      min: 70,
      max: 100,
    },
    sampleSizeRange: {
      min: 30,
      max: 60,
    },
    numberOfClassesRange: {
      min: 5,
      max: 6,
    },
  },
];

const schoolNames = [
  "UP Rural High School",
  "Los Baños National High School",
  "Southville Integrated National High School",
  "Santo Tomas Integrated High School",
  "Mayondon High School",
];

function settings() {
  // Selects a random context
  return contexts[randBetweenV1(0, contexts.length - 1)];
}

function randBetweenV1(min, max) {
  // Selects a uniformly random integer from min to max, inclusive.
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randBetweenV2(min, max) {
  // Selects a middle-value-biased random integer from min to max, inclusive.
  return Math.floor(randomV2() * (max - min + 1) + min);
}

function randomV2() {
  // Selects a middle-value-biased random float from 0 (inclusive) to 1 (exclusive).
  return (Math.random() + Math.random()) / 2;
}

function generateMeanProblem() {
  const {
    title,
    heading,
    dataValueRange,
    sampleSizeRange,
    numberOfClassesRange,
  } = settings();

  // Selects a valid minimum and maximum data value for the problem.
  const min = randBetweenV1(dataValueRange.min, dataValueRange.min + 2);
  const max = randBetweenV1(dataValueRange.max - 2, dataValueRange.max);

  // Computes the range of the data values.
  const range = max - min;

  // Randomly selects a valid number of classes.
  const numberOfClasses = randBetweenV1(
    numberOfClassesRange.min,
    numberOfClassesRange.max
  );

  // Computes the class interval
  const interval = Math.floor(range / numberOfClasses);

  // Computes the sample size or the total frequency of the data.
  const sampleSize = randBetweenV1(sampleSizeRange.min, sampleSizeRange.max);

  // Creates an object that will later be used by the application
  // to display the problem, check user's answer, and show the solution.
  const info = {
    title,
    heading,
    schoolName: schoolNames[randBetweenV1(0, schoolNames.length - 1)],
    classes: [],
    sampleSize,
    numberOfClasses,
    sumOfFx: 0,
    answer: 0,
    roundedAnswer: 0,
  };

  // Constructs the classes by determining
  // the lower and upper limits of each class.
  // The frequency of each class is also initialized to 1.
  for (let i = 0; i < numberOfClasses; i++) {
    info.classes.push({
      id: i,
      lowerLimit: min + interval * i,
      upperLimit: min + interval * i + interval - 1,
      classMark: (min + interval * i + (min + interval * i + interval - 1)) / 2,
      frequency: 1,
      fx: 0,
    });
  }

  // Reverses the order of the classes.
  info.classes = info.classes.reverse();

  // Tallying Process
  // The (sampleSize - numberOfClasses) will be distributed to the classes,
  // giving priority to the middle classes to make it seem that the data is
  // normally distributed.
  for (let i = 0; i < sampleSize - numberOfClasses; i++) {
    let classIndex = randBetweenV2(0, numberOfClasses - 1);
    info.classes[classIndex].frequency += 1;
  }

  // Computes the summation of fX.
  for (let i of info.classes) {
    i.fx = i.classMark * i.frequency;
    info.sumOfFx += i.fx;
  }

  // Computes the answer.
  info.answer = info.sumOfFx / sampleSize;

  // Rounds off the answer up to 2 decimal places.
  info.roundedAnswer = Math.round((info.answer + Number.EPSILON) * 100) / 100;

  return info;
}

export { generateMeanProblem, randBetweenV1 };
