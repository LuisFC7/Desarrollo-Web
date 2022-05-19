function valor(){
    let va1=parseInt(document.getElementById('color1').value);
    let va2=parseInt(document.getElementById('color2').value);
    let va3=parseInt(document.getElementById('color3').value);
    var va4=document.getElementById('color4').value;
    let ty2=0;
    let result=0;
    let fin;
    if(va1==404 || va2==404 || va3==404 || va4==404){
        alert('Debe seleccionar todos los valores.');    
    }
    
    switch(va3){
        case 1:
            ty2=((va1*10)+va2);
            fin="Valor de Resistencia: " +ty2+ "Ω    ±" +va4;
            
        break;

        case 10:
            ty2=((va1*10)+va2)*10;
            fin="Valor de Resistencia: " +ty2+ "Ω    ±" +va4;
        break;

        case 100:
            ty2=(((va1*10)+va2))/10;
            fin="Valor de Resistencia: " +ty2+ "kΩ    ±" +va4;
        break;

        case 100:
            ty2=(((va1*10)+va2))/10;
            fin="Valor de Resistencia: " +ty2+ "kΩ    ±" +va4;
        break;

        case 1000:
            ty2=(((va1*10)+va2));
            fin="Valor de Resistencia: " +ty2+ "kΩ    ±" +va4;
        break;

        case 10000:
            ty2=(((va1*10)+va2))*10;
            fin="Valor de Resistencia: " +ty2+ "kΩ    ±" +va4;
        break;

        case 100000:
            ty2=(((va1*10)+va2))/10;
            fin="Valor de Resistencia: " +ty2+ "MΩ    ±" +va4;
        break;

        case 1000000:
            ty2=(((va1*10)+va2));
            fin="Valor de Resistencia: " +ty2+ "MΩ    ±" +va4;
        break;

        case 10000000:
            ty2=(((va1*10)+va2))*10;
            fin="Valor de Resistencia: " +ty2+ "MΩ    ±" +va4;
        break;


        case 100000000:
            ty2=(((va1*10)+va2))/10;
            fin="Valor de Resistencia: " +ty2+ "GΩ    ±" +va4;
        break;

        case 1000000000:
            ty2=(((va1*10)+va2));
            result=ty2;
            fin="Valor de Resistencia: " +ty2+ "GΩ    ±" +va4;
        break;
    }
    result=document.getElementById('resultado');
    result.innerHTML=fin;
   // let tolerancia=document.getElementById('tolerancia');
   // tolerancia.innerHTML=va4;
}

function fivebands(){
    let va1=parseInt(document.getElementById('color1').value);
    let va2=parseInt(document.getElementById('color2').value);
    let va3=parseInt(document.getElementById('color3').value);
    let va4=parseInt(document.getElementById('color4').value);
    let va5=document.getElementById('color5').value;
    let conca=((va1*100)+(va2*10)+(va1));
    let result=0;
    let fin=0;

    if(va1==404 || va2==404 || va3==404 || va4==404 || va5==404){
        alert('Debe seleccionar todos los valores.');    
    }
    console.log(conca);

    switch(va4){
        case 1:
            result=conca*1;
            fin="Valor de Resistencia: " +result+ "Ω    ±" +va5;
            alert(fin);
        break;

    }
}