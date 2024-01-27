function ans()
{
    r=readline().split(" ");
    m=1000000007;
    n=r[0];
    k=r[1];
    a=1;
    for(i=0;i<k;i++)
    {
        a=(a*n)%m;
    }
    print(a);
}
t=readline();
while(t--)
{
    ans();
}