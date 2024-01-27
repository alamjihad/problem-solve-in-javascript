var n = readline();
var s = readline().split(' ').map(Number);
var d = -1;
for (var i=0; i<n-1; i++)
{
    if (s[i]>s[i+1])
    {
		d = i+1;
		s = s.slice(d).concat(s.slice(0, d));
		break;
	}
}
if (d == -1) 
{
    print(0);
}
else 
{
	for (var i=0; i<n-1; i++)
	{
		if (s[i]>s[i+1]) 
		{
    		print(-1);
    		d = -1;
    		break;
		}
	}
	if (d != -1)
	{
	    print(n-d);
	}
}