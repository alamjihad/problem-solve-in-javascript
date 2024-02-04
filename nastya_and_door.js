var t=readline();
while(t--)
{
    var ar = readline().split(" ");
    var n = Number(ar[0]);
    var k = Number(ar[1]);
    var arr = readline().split(" ");
    var h = 0, s = 0, p = [];
    p.push(0);
    for (var i = 1; i < n - 1; i++) {
        var l = Number(arr[i - 1]);
        var m = Number(arr[i]);
        var r = Number(arr[i + 1]);
        if (m > l && m > r) {
            p.push(1);
        }
        else {
            p.push(0);
        }
    }
    var c = 0;
    for (var i = 1; i < k - 1; i++) {
        if (p[i] === 1) {
            c++;
        }
    }
    h = c;
    for (var i = 1; i <= (n - k); i++) 
    {
        c -= p[i];
        c += p[(i + k) - 2];
        if (c > h) {
            h = c;
            s = i;
        }
    }
    print(h + 1," ".concat(s + 1));
}