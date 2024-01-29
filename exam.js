var n = readline();
var arr = [];
for (var i=0;i<n;++i)
{
  arr.push(readline().split(" ").map(v => +v));
}
arr.sort((a,b)=> 
{
  if (a[0] === b[0])
  {
    return a[1] - b[1];
  }
  else
  {
    return a[0] - b[0];
  }
});
var s = 0;
for (var i=0;i<n;++i)
{
  var t=(arr[i][1]<s)?0:1;
  s = arr[i][t];
}
print(s);