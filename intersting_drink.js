var num=readline();
var shop=readline().split(" ");
var num1=readline();
var days=[];
for(var i=0;i<num1;++i)
{
    days.push(readline());
}
shop.sort((a , b) => a-b);
var sum=0;
var low;
var up;
var mid;
for(var i=0;i<num1;++i)
{
    low=0;
    up=num-1;
    while(low<=up){
        mid=low + Math.floor((up-low)/2);
        if(parseInt(shop[mid])<=days[i])
        {
            low=mid+1;
        }
        else
        {
            
            up=mid-1;
        }
    }
    sum=low;
    print(sum);
}