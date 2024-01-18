function ans(n)
{
    var i,j,x,y,s=0;
    var arr=readline().split(" ");
    for(i=30;i>=0;i--)
    {
        c = 0;
        for(j=0;j<n;++j)
        {
            x = 1<<i;
            y = 1<<(i+1);
            if(arr[j]>=x && arr[j]<y)
            {
                c++;
            }
        }
        s+=(c*(c-1)/2);
    }
    print(s);
}
t=readline();
while(t--)
{
    n=readline();
    ans(n);
}