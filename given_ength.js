var arr = readline().split(' ').map(Number);
var m = arr[0];
var s = arr[1];
if (s > 9 * m) 
{
  print('-1 -1');
}
else if (m > 1 && s === 0) 
{
  print('-1 -1');
}
else 
{
    var l = s;
    var k = s;
    var a = '';
    var b = '';
    while (m > 0) 
    {        
        if (l >= 9) 
        { 
          a = a + '9'; 
          l -= 9; 
        }
        else 
        { 
          a = a + l.toString(); 
          l = 0; 
        }    
        var cur = Math.min('9', k - 1);
        if (m == 1) 
        {
          cur++;
        }
        b = cur.toString() + b;
        k -= cur;
        m--;
    }
    print (b + ' ' + a);
}

