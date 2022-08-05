// https://calculator.swiftutors.com/heat-transfer-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const heatTransferRadio = document.getElementById('heatTransferRadio');
const massRadio = document.getElementById('massRadio');
const specificHeatRadio = document.getElementById('specificHeatRadio');
const temperatureDifferenceRadio = document.getElementById('temperatureDifferenceRadio');

let heatTransfer;
let mass = v1;
let specificHeat = v2;
let temperatureDifference = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

heatTransferRadio.addEventListener('click', function() {
  variable1.textContent = '(m) Mass (kg)';
  variable2.textContent = '(c) Specific Heat (kj/kg K)';
  variable3.textContent = '(ΔT) Temperature Difference (k)';
  mass = v1;
  specificHeat = v2;
  temperatureDifference = v3;
  result.textContent = '';
});

massRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Heat Transfer (J)';
  variable2.textContent = '(c) Specific Heat (kj/kg K)';
  variable3.textContent = '(ΔT) Temperature Difference (k)';
  heatTransfer = v1;
  specificHeat = v2;
  temperatureDifference = v3;
  result.textContent = '';
});

specificHeatRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Heat Transfer (J)';
  variable2.textContent = '(m) Mass (kg)';
  variable3.textContent = '(ΔT) Temperature Difference (k)';
  heatTransfer = v1;
  mass = v2;
  temperatureDifference = v3;
  result.textContent = '';
});

temperatureDifferenceRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Heat Transfer (J)';
  variable2.textContent = '(m) Mass (kg)';
  variable3.textContent = '(c) Specific Heat (kj/kg K)';
  heatTransfer = v1;
  mass = v2;
  specificHeat = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(heatTransferRadio.checked)
    result.textContent = `Heat Transfer = ${computeHeatTransfer().toFixed(2)} J`;

  else if(massRadio.checked)
    result.textContent = `Mass = ${computeMass().toFixed(2)} kg`;

  else if(specificHeatRadio.checked)
    result.textContent = `Specific Heat = ${computeSpecificHeat().toFixed(2)} kj/kg K`;

  else if(temperatureDifferenceRadio.checked)
    result.textContent = `Temperature Difference = ${computeTemperatureDifference().toFixed(2)} k`;
})

// calculation

function computeHeatTransfer() {
  return Number(mass.value) * Number(specificHeat.value) * Number(temperatureDifference.value);
}

function computeMass() {
  return Number(heatTransfer.value) / (Number(specificHeat.value) * Number(temperatureDifference.value));
}

function computeSpecificHeat() {
  return Number(heatTransfer.value) / (Number(mass.value) * Number(temperatureDifference.value));
}

function computeTemperatureDifference() {
  return Number(heatTransfer.value) / (Number(mass.value) * Number(specificHeat.value));
}