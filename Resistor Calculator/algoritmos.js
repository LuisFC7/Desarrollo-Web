function valor(){
    let va1=parseInt(document.getElementById('color1').value);
    let va2=parseInt(document.getElementById('color2').value);
    let va3=parseInt(document.getElementById('color3').value);
    let ty2=0;
    let result=0;

    switch(va3){
        case 1:
            ty2=((va1*10)+va2);
            alert("Valor de Resistencia: " +ty2+ "Ω");
        break;

        case 10:
            ty2=((va1*10)+va2)*10;
            alert("Valor de Resistencia: " +ty2+ "Ω");
        break;

        case 100:
            ty2=(((va1*10)+va2))/10;
            alert("Valor de Resistencia: " +ty2+ "kΩ");
        break;

        case 100:
            ty2=(((va1*10)+va2))/10;
            alert("Valor de Resistencia: " +ty2+ "kΩ");
        break;

        case 1000:
            ty2=(((va1*10)+va2));
            alert("Valor de Resistencia: " +ty2+ "kΩ");
        break;

        case 10000:
            ty2=(((va1*10)+va2))*10;
            alert("Valor de Resistencia: " +ty2+ "kΩ");
        break;

        case 100000:
            ty2=(((va1*10)+va2))/10;
            alert("Valor de Resistencia: " +ty2+ "MΩ");
        break;

        case 1000000:
            ty2=(((va1*10)+va2));
            alert("Valor de Resistencia: " +ty2+ "MΩ");
        break;

        case 10000000:
            ty2=(((va1*10)+va2))*10;
            alert("Valor de Resistencia: " +ty2+ "MΩ");
        break;


        case 100000000:
            ty2=(((va1*10)+va2))/10;
            alert("Valor de Resistencia: " +ty2+ "GΩ");
        break;

        case 1000000000:
            ty2=(((va1*10)+va2));
            result=ty2;
            alert("Valor de Resistencia: " +ty2+ "GΩ");
        break;
    }
    result=document.getElementById('prueba');
    result.innerHTML=ty2;
    
}

