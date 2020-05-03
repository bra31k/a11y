const cloneDeep = require('lodash/cloneDeep');

const principlesCountItems = {
  Principle1: { name: 'Воспринимаемость', count: 71, ratio: 0.3, result: 71 },
  Principle2: { name: 'Понятность', count: 27, ratio: 0.25, result: 27 },
  Principle3: { name: 'Управляемость ', count: 14, ratio: 0.25, result: 14 },
  Principle4: { name: 'Надежность ', count: 9, ratio: 0.2, result: 9 },
};

const points = {
  Principle1: {
    Guideline1_1: 18,
    Guideline1_2: 5,
    Guideline1_3: 39,
    Guideline1_4: 10,
  },
  Principle2: {
    Guideline2_1: 7,
    Guideline2_2: 5,
    Guideline2_3: 1,
    Guideline3_4: 14,
  },
  Principle3: {
    Guideline3_1: 6,
    Guideline3_2: 4,
    Guideline3_3: 4,
  },
  Principle4: {
    Guideline4_1: 9,
  }
};

function KPI(issues){
  const principles = { ...cloneDeep(principlesCountItems) };
  const deletedPoints = [];

  issues.forEach(({ code }) => {
    const [_, principle, subPrinciple] = code.split('.');

    if (!deletedPoints.includes(code)) {
      principles[principle].result = principles[principle].result - 1;
      deletedPoints.push(code);

      if (points[principle][subPrinciple]) {
        delete points[principle][subPrinciple];
      }
    }
  });

  const values = Object.values(principles).map(value => value);

  const result = Object.keys(points).reduce((percent, principle) => {
    const { count, ratio } = principlesCountItems[principle];
    const sum = Object.values(points[principle]).reduce((sum, value) => sum += value, 0);

    percent += (100 / count * sum) * ratio;

    return percent;
  }, 0);

  return { values, result }
}

module.exports = KPI;