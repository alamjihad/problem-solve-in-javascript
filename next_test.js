var n = readline();
var array = readline().split(' ').sort((a, b) => a - b);
var l=array.length;
if (array[0]!=1)
{
  print(1);
}
else
{
  for (var i= 1;i<l;++i)
  {
    if (array[i]-array[i-1]!=1)
    {
        break;
    }
  }
  print(i + 1);
}