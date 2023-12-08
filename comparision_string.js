t=Number(readline());
while(t--)
{
    n=Number(readline());
    arr=readline();
    var s=0,c=0,m=0,l=0;
    for(var i=0;i<n;++i)
    {
        if(arr[i]==='<')
        {
	        c=0,
	        s++;
	        m=Math.max(s,m);
        }
    	else if(arr[i]==='>')
    	{
    	    s=0,
    	    c++,
    	    l=Math.max(c,l);
    	}
    }
    print(Math.max(m,l)+1);
}