t=Number(readline())
while(t--)
{
    a=Number(readline())
    b=Number(readline())
    c=Number(readline())
    var s=a+b+c;
    var k=s/9;
    if(s%9==0&&a>=k&&b>=k&&c>=k)
    {
        print("Yes");
    }
    else
    {
        print("NO");
    }
}