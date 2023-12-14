var str=readline();
var c=0;
var l=str.length;
while(l>1)
{
    var s=0;
    for(var i=0;i<l;++i)
    {
        s+=str[i]-'0';
    }
    str=s.toString();
    l=str.length;
    c++;
}
print(c);