function ans(){
    var str =readline().split('');
    var l=0;
    var i;
    l=str.length;
    var c=0,s=0;
    for(i=0;i<l; i++)
    {
        s++;
        if(str[i]=='+')
        {
            c++;
        }
        else
        {
            c--;
        } 
        if(c<0)
        {
            c=0;
            s+=(i+1);
        }
    }
    print(s);
}

	var t=readline();
	while(t--)
    {
		ans();
	}