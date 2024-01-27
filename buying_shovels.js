var t = readline();
while(t--) 
{
  var input = readline().split(" ");
  var n = Number(input[0]);
  var k = Number(input[1]);
  var ans = n;
  for (i=1;i*i<=n;++i)
  {
        if (n%i===0)
        {
			if (i<=k)
			{
				ans=(ans<n/i)?ans:n/i;
			}
			if (n/i<= k)
			{
			    ans=(ans<n)?ans:n;
				ans = Math.min(ans,i);
			}
		}
  }
  print(ans);
}