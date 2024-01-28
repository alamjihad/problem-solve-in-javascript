var t = readline();
while (t--) {
  var x = readline();
  if (111 * (x % 11) <= x) {
    print("YES");
  }
  else {
    print("NO");
  }
} 