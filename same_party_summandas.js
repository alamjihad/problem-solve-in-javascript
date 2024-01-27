var t=readline();
while(t--)
{
  var line = readline().split(" ");
  var n = Number(line[0]);
  var k = Number(line[1]);
  var str = '';
  if (n%2===0&&(n-((k-1)*2))%2===0&&n-((k-1)*2)>0)
  {
    print("YES");
    for (var j=0;j<k-1;++j)
    {
      str += "2 ";
    }
    str += ""+ (n-((k-1)*2));
  }
  else if ((n-(k-1))%2!==0&&(n-(k-1))%2>0){
    print('YES');
    for (var j=0;j<k-1;++j){
      str += '1 ';
    }
    str += '' + (n - (k - 1));
  }
  else{ 
    print('NO');
    continue;
  }
  print(str);
}