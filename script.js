for(var i=1;i<=5;i++){
    
document.write("★");
}
document.write("<br><br><br>");

for(var i=1;i<=2;i++){
    for(var b=1;b<=3;b++){
document.write("★");
        }
    document.write("<br>");
}
document.write("<br><br><br>");

for(var a=1;a<=2;a++){
    for(var b=1;b<=5;b++){
        document.write("☆")
    }
    document.write("<br>")
}

document.write("<br><br><br>");

for(var a=1;a<=4;a++){
    for(var b=1;b<=5;b++){
        document.write("★");
    }
    document.write("<br>");
}

document.write("<br><br><br>");

for(var a=1;a<=4;a++){
    for(var b=1;b<=3;b++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br><br><br>");

for(var a=1;a<=3;a++){
    for(var b=1;b<=3;b++){
        if(b%2==0){
            document.write("☆");
        }else{
        document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br><br><br>");

for(var a=1;a<=5;a++){
    for(var b=1;b<=5;b++){
        if(b%2==0){
            document.write("☆");
            //２で割り切れる場合
        }else{
        document.write("★");
            //そうでない場合
        }
    }
    document.write("<br>");
}
document.write("<br><br><br>");

for(var a=1;a<=5;a++){
    for(var b=1;b<=a;b++){
        //bにaを代入するとなった。
        document.write("★");
    }
    document.write("<br>");
}





