t =Number(readline());
 while(t--)
 {
     x=Number(readline());
     if(x<=1399)
        {
            print("Division ",4);
        }
        else if(x>=1400&&x<=1599)
        {
            print("Division ",3);
        }
        else if(x>=1600&&x<=1899)
        {
            print("Division ",2);
        }
        else
        {
            print("Division ",1);
        }
 }
