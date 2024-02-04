t = readline() ; 
while (t--) 
{
  var arr = readline().split(' ').map(x => Number(x)) ; 
  var s = 0 , mx = arr[0] ; 
  for (i = n-1  ; i > 0  ; i--) 
  { 
    if (arr[i] >=  arr[i-1] ) continue ; 
    s+= arr[i-1] -  arr [i]; 
  }
  print(s);  
}