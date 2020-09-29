// Implementation of Math.pow
function powBinary(base, power) {
  if (power === 0) return 1;
  if (power === 1) return base;

  const half = pow(base, Math.floor(power / 2));
  if (power % 2 === 0) {
    return half * half;
  } else {
    return half * half * base;
  }
}

function pow(base, power) {
  if (power < 0) {
    return 1 / powBinary(base, -power);
  }

  return powBinary(base, power);
}

console.log(powBinary(2, 10));
