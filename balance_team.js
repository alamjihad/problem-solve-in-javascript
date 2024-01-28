var n = readline();
var arr = readline().split(" ");
var newArr = arr.sort((a,b) => a-b);
var arr2 = [];

for (var i=0;i<arr.length-1;++i) 
{
  arr2[i] = newArr[i+1] - newArr[i];
}

var s=1;
var c=1;
var d=0;
var l=0;
for (var j=0;j<arr2.length;++j)
{
  d+=arr2[j];
  if(d<=5)
  {
    c++;
  }
  else
  {
    s = (s<c)?c:s;
    c++;
    while (d > 5)
    {
      d-=arr2[l];
      l++;
      c--;
    }
  }
}
s = (s<c)?c:s;
print(s);