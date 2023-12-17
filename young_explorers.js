var t = readline();
while(t--)
{
    var n = parseInt(readline());
    var arr = readline().split(' ');
    arr.sort(function(a, b){return a - b});
    var s=0, c=0;
    for(var i=0;i<n;++i)
    {
        c++;
        if(c==arr[i])
        {
            s++;
            c=0;
        }
    }
    print(s);         
}