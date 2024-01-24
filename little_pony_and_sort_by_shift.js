var i,t=0,b=0;
var n=readline();
var arr=readline().split(" ");
for(i=0;i<n;i++)
{
	if(i>0&&arr[i]<arr[i-1])
	{
	    t++;
	    b=i;
	}
}
if(t===0)
{
    print(0);
}
else 
{
    if(t===1&&arr[n-1]<=arr[0])
    {
        print(n-b);
    }
      else 
      {
          print(-1);
          
      }
}