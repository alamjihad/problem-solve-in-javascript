var t =readline();
while(t--)
{
    var n = readline();
    var arr = readline().split(" ");
    var c = 0;
    var s = 0;
    var i = 0;
    var j = n - 1;
    var m = 1;
    while (i < n)
    {
        c += parseInt(arr[i]);
        s += parseInt(arr[j]);
        if (c<1||s<1)
        {
            m = 0;
            break;
        }
        i++;
        j--;
    }
    print((m) ? "YES" : "NO");
}