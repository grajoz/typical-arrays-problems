
exports.min = function min (array) {
  if (!Array.isArray(array)) {return 0};
  if (array.length == 0) { return 0 };
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  let min=array.sort(compareNumeric)[0];
  return min;
}

exports.max = function max (array) {
if (!Array.isArray(array)) {return 0};
  if (array.length == 0) { return 0 };
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  let max=array.sort(compareNumeric).reverse()[0];
  return max;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array)) {return 0};
  if (array.length==0) { return 0 };
avg=0;
  for (i=0;i<array.length;i++){
    array[i] = Number(array[i]);
    avg=avg+array[i]
  }
  avg=avg/(array.length);
  return avg;
}

