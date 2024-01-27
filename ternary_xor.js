var t=readline();
while(t--)
{
	var a="";
	var b="";
	var n= readline();
	var s=readline();
	var c=1;
	for (var i=0;i<n;i++)
	if (c==1)
	{
		if (s[i]=='2')
		{
		    a+='1',b+='1';
		}
		else if (s[i]=='0') 
		{
		    a+='0',b+='0';
		}
		else
		{
		    a+='1',b+='0',c=0;
		}
	}
	else 
	{
	    a+='0',b+=s[i];
	}
	print(a);
	print(b);
}