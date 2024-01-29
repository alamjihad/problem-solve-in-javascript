function ans() {
  var arr = readline().split(" ");
  var x = Number(arr[0]);
  var n = Number(arr[1]);
  var s = 1;
  for (var i = 1; i * i <= x; i++) {
    if (x % i === 0) {
      var a = i;
      var b = x / i;
      if (x / a >= n) {
        s = Math.max(s, a);
      }
      if (x / b >= n) {
        s = Math.max(s, b);
      }
    }
  }
  print(s);
}
var t = readline();
while (t--) {
  ans();
}