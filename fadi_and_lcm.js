main();

function findSqrt(x) {
  if (x < 2) {
    return x;
  }
  var y = x;
  var z = (y + (x / y)) / 2;

  while (Math.abs(y - z) >= 0.00001) {
    y = z;
    z = (y + (x / y)) / 2;
  }
  return z;
}

function lcm(a, b) {
  return a * b / gcd(a, b);
}

function gcd(a, b) {
  while (a > 0) {
    var temp = a;
    a = b % a;
    b = temp;
  }
  return b;
}
function main() {
  var x = readline();
  var guess = Math.round(findSqrt(x));
  for (var i = guess; i >= 1; i--) {
    if (x % i === 0) {
      if (x == lcm(i, x / i)) {
        print(i + " " + x / i);
        return;

      }
    }
  }
}