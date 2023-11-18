t=Number (readline())
while(t--)
{
    n=Number(readline())
    var b=Math.floor(n/3);
    if(n%3===0)
    {
        print(b+" "+b);
    }
    else
    {
        if(b*3+1==n)
        {
            print((b+1)+" "+b);
        }
        else
        {
            print(b+" "+(b+1));
        }
    }
}