var arr = readline().split(' ');
var n = Number(arr[0]);
var t = Number(arr[1]);
var books = readline().split(' ');
var max = 0;
books[-1] = 0;
var j = -1;
var total = 0;
for (var i = 0; i < n; i++)
{
    if (j === n)
    {
        break;
    }
    if (i == j)
    {
        i++;
    }
    if (Number(books[i]) + total <= t)
    {
        if (i - j > max)
        {
            max = i - j;
        }
        total += Number(books[i]);
    } 
    else
    {
        if (total !== 0) 
        {
            total -= Number(books[j + 1]);
        }
        j++;
        i--;
    }
}
print(max);