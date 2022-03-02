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
  return contexts[randBetweenV1(0, contexts.length - 1)];
}

function randBetweenV1(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randBetweenV2(min, max) {
  return Math.floor(randomV2() * (max - min + 1) + min);
}

function randomV2() {
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
  const min = randBetweenV1(dataValueRange.min, dataValueRange.min + 2);
  const max = randBetweenV1(dataValueRange.max - 2, dataValueRange.max);

  const range = max - min;
  const numberOfClasses = randBetweenV1(
    numberOfClassesRange.min,
    numberOfClassesRange.max
  );
  const interval = Math.floor(range / numberOfClasses);

  const sampleSize = randBetweenV1(sampleSizeRange.min, sampleSizeRange.max);

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

  info.classes = info.classes.reverse();

  for (let i = 0; i < sampleSize - numberOfClasses; i++) {
    let classIndex = randBetweenV2(0, numberOfClasses - 1);
    info.classes[classIndex].frequency += 1;
  }

  for (let i of info.classes) {
    i.fx = i.classMark * i.frequency;
    info.sumOfFx += i.fx;
  }

  info.answer = info.sumOfFx / sampleSize;

  info.roundedAnswer = Math.round((info.answer + Number.EPSILON) * 100) / 100;

  return info;
}

export { generateMeanProblem, randBetweenV1 };
