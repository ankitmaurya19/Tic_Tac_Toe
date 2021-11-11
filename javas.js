
flag=1;
function fun1(){
    if(flag == 1){
        document.getElementById("a").value="X";
        document.getElementById("a").disabled=true;
        document.getElementById("a").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("a").value="O";
        document.getElementById("a").disabled=true;
        document.getElementById("a").style.color="#F2EBD3";
        flag=1;
    }
}
function fun2(){
    if(flag == 1){
        document.getElementById("b").value="X";
        document.getElementById("b").disabled=true;
        document.getElementById("b").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("b").value="O";
        document.getElementById("b").disabled=true;
        document.getElementById("b").style.color="#F2EBD3";
        flag=1;
    }
}
function fun3(){
    if(flag == 1){
        document.getElementById("c").value="X";
        document.getElementById("c").disabled=true;
        document.getElementById("c").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("c").value="O";
        document.getElementById("c").disabled=true;
        document.getElementById("c").style.color="#F2EBD3";
        flag=1;
    }
}
function fun4(){
    if(flag == 1){
        document.getElementById("d").value="X";
        document.getElementById("d").disabled=true;
        document.getElementById("d").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("d").value="O";
        document.getElementById("d").disabled=true;
        document.getElementById("d").style.color="#F2EBD3";
        flag=1;
    }
}
function fun5(){
    if(flag == 1){
        document.getElementById("e").value="X";
        document.getElementById("e").disabled=true;
        document.getElementById("e").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("e").value="O";
        document.getElementById("e").disabled=true;
        document.getElementById("e").style.color="#F2EBD3";
        flag=1;
    }
}
function fun6(){
    if(flag == 1){
        document.getElementById("f").value="X";
        document.getElementById("f").disabled=true;
        document.getElementById("f").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("f").value="O";
        document.getElementById("f").disabled=true;
        document.getElementById("f").style.color="#F2EBD3";
        flag=1;
    }
}
function fun7(){
    if(flag == 1){
        document.getElementById("g").value="X";
        document.getElementById("g").disabled=true;
        document.getElementById("g").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("g").value="O";
        document.getElementById("g").disabled=true;
        document.getElementById("g").style.color="#F2EBD3";
        flag=1;
    }
}
function fun8(){
    if(flag == 1){
        document.getElementById("h").value="X";
        document.getElementById("h").disabled=true;
        document.getElementById("h").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("h").value="O";
        document.getElementById("h").disabled=true;
        document.getElementById("h").style.color="#F2EBD3";
        flag=1;
    }
}
function fun9(){
    if(flag == 1){
        document.getElementById("i").value="X";
        document.getElementById("i").disabled=true;
        document.getElementById("i").style.color="#545454";
        flag=0;
    }
    else{
        document.getElementById("i").value="O";
        document.getElementById("i").disabled=true;
        document.getElementById("i").style.color="#F2EBD3";
        flag=1;
    }
}
function fun() {
    var a,b,c,d,e,f,g,h,i,m1,m2;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    e = document.getElementById("e").value;
    f = document.getElementById("f").value;
    g = document.getElementById("g").value;
    h = document.getElementById("h").value;
    i = document.getElementById("i").value;
    m1=document.getElementById("m1");
    m2=document.getElementById("m2");
    // CHECK  FOR X WIN
    if(a=='X' && b=='X' && c=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("a").style.color="#BD022F";
        document.getElementById("b").style.color="#BD022F";
        document.getElementById("c").style.color="#BD022F";
        m2.play();
    } 
    else if(a=='X' && d=='X' && g=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("b").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("a").style.color="#BD022F";
        document.getElementById("d").style.color="#BD022F";
        document.getElementById("g").style.color="#BD022F";
        m2.play();
    } 
    else if(a=='X' && e=='X' && i=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("a").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("i").style.color="#BD022F";
        m2.play();
    } 
    else if(d=='X' && e=='X' && f=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("a").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("d").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("f").style.color="#BD022F";
        m2.play();
    } 
    else if(g=='X' && h=='X' && i=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("g").style.color="#BD022F";
        document.getElementById("h").style.color="#BD022F";
        document.getElementById("i").style.color="#BD022F";
        m2.play();
    } 
    else if(b=='X' && e=='X' && h=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("b").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("h").style.color="#BD022F";
        m2.play();
    } 
    else if(c=='X' && f=='X' && i=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("c").style.color="#BD022F";
        document.getElementById("f").style.color="#BD022F";
        document.getElementById("i").style.color="#BD022F";
        m2.play();
    } 
    else if(c=='X' && e=='X' && g=='X')
    {
        document.getElementById("prt").innerHTML="X won";
        document.getElementById("d").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("g").style.color="#BD022F";
        document.getElementById("c").style.color="#BD022F";
        m2.play();
    } 
    //CHECK FOR O WIN
     
    else if(a=='O' && b=='O' && c=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("a").style.color="#BD022F";
        document.getElementById("b").style.color="#BD022F";
        document.getElementById("c").style.color="#BD022F";
        m2.play();
    } 
    else if(a=='O' && d=='O' && g=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("b").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("a").style.color="#BD022F";
        document.getElementById("d").style.color="#BD022F";
        document.getElementById("g").style.color="#BD022F";
        m2.play();
    } 
    else if(a=='O' && e=='O' && i=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("a").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("i").style.color="#BD022F";
        m2.play();
    } 
    else if(d=='O' && e=='O' && f=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("a").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("d").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("f").style.color="#BD022F";
        m2.play();
    } 
    else if(g=='O' && h=='O' && i=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("g").style.color="#BD022F";
        document.getElementById("h").style.color="#BD022F";
        document.getElementById("i").style.color="#BD022F";
        m2.play();
    } 
    else if(b=='O' && e=='O' && h=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("c").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("b").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("h").style.color="#BD022F";
        m2.play();
    } 
    else if(c=='O' && f=='O' && i=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("d").disabled=true;
        document.getElementById("e").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("g").disabled=true;
        document.getElementById("f").style.color="#BD022F";
        document.getElementById("i").style.color="#BD022F";
        document.getElementById("c").style.color="#BD022F";
        m2.play();
    } 
    else if(c=='O' && e=='O' && g=='O')
    {
        document.getElementById("prt").innerHTML="O won";
        document.getElementById("d").disabled=true;
        document.getElementById("a").disabled=true;
        document.getElementById("f").disabled=true;
        document.getElementById("h").disabled=true;
        document.getElementById("i").disabled=true;
        document.getElementById("b").disabled=true;
        document.getElementById("prt").style.color="#BD022F";
        document.getElementById("e").style.color="#BD022F";
        document.getElementById("g").style.color="#BD022F";
        document.getElementById("c").style.color="#BD022F";
        m2.play();
    } 

    //FOR TIE
    else if( (a=='X'||a=='O') &&(b=='X'||b=='O') &&(c=='X'||c=='O') &&(d=='X'||d=='O') &&(e=='X'||e=='O') 
    && (f=='X'||f=='O') && (h=='X'||h=='O') && (i=='X'||i=='O') ){
        document.getElementById("prt").innerHTML="Match Tie";
        document.getElementById("prt").style.color="red";
        var m3=document.getElementById("m3");
        m3.play();
    } 
    else{
        //TURN CHANGE
        m1.play();
         if(flag==1)
         {
            document.getElementById("prt").innerHTML="X's Turn";
         }
         else{
            document.getElementById("prt").innerHTML="O's Turn";
         }
    }
}

//RESET 
function funrst(){
    location.reload();
    document.getElementById("a").innerHTML="";
    document.getElementById("b").innerHTML="";
    document.getElementById("c").innerHTML="";
    document.getElementById("d").innerHTML="";
    document.getElementById("e").innerHTML="";
    document.getElementById("f").innerHTML="";
    document.getElementById("g").innerHTML="";
    document.getElementById("h").innerHTML="";
    document.getElementById("i").innerHTML="";
}
