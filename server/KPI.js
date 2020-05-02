const cloneDeep = require('lodash/cloneDeep');

const principlesCountItems = {
  Principle1: { name: 'Воспринимаемость', count: 71, ratio: 0.3, result: 71 },
  Principle2: { name: 'Понятность', count: 27, ratio: 0.25, result: 27 },
  Principle3: { name: 'Управляемость ', count: 14, ratio: 0.25, result: 14 },
  Principle4: { name: 'Надежность ', count: 9, ratio: 0.2, result: 9 },
};

function KPI(issues){
  const principles = cloneDeep(principlesCountItems);

  issues.forEach(({ code }) => {
    const [_,principle] = code.split('.');

    principles[principle].result = principles[principle].result - 1;
  });

  const values = Object.values(principles).map(value => value);

  const result = values.reduce((percent, { result, count, ratio }) => {
    percent += (100 / count * result) * ratio;

    return percent;
  }, 0);

  return { values, result }
}

module.exports = KPI;