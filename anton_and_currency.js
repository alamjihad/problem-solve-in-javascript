
var str=readline().split('');
var l=0;
var temp;
l=str.length;
var x=l-1;
var ni =x;
for(var i=0;i<l;++i)
{
    if((str[i]-'0')%2===0)
    {
        ni=i;
       if(str[x]>str[i])
       {
            break;
       } 
    }
}
if(l-1===ni)
{
    print("-1");
}
else
{
    temp=str[x];
    str[x]=str[ni];
    str[ni]=temp;
    str=str.join('');
    print(str);
}