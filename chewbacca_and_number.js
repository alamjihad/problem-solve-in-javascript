n=readline();
l=n.length;
ans="";
for(var i=0;i<l;++i)
{
    if(n[i]<5)
    {
        ans=ans+n[i];
    }
    else if(n[i]<9)
    {
        ans=ans+(9-n[i]);
    }
    else
    {
        if(i!==0)
        {
            ans=ans+'0';
        }
        else
        {
            ans=ans+'9';
        }
    }
}
print(ans);