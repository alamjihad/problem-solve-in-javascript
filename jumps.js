function ans(l)
{
  var y = 0;
  var s = 0;
  
  for(var k=1;k<=l;k++)
  {
    y += k;
    s++;
    if (y == l)
    {
      break;
    }
    else if (y>l)
    {
      if (y-l==1) 
      {
        s++;
      }
      break;
    }
  }
  print(s);  
}
var t = readline();
while(t--)
{
  var l = readline();
  ans(l);
}
