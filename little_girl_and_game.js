var arr=readline().split('');
ans=0;
var str="abcdefghijklmnopqrstuvwxyz";
for (var i=0;i<str.length;i++)
{
    c=0;
    for (var j=0;j<arr.length;j++)
    {
        if (str[i]==arr[j])
        {
            c^=1;
        }
    }
    if (c)
    {
        ans++;
    }
}
print((!ans||ans%2)?"First":"Second");