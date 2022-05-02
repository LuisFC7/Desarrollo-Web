function valor(){
    let va1= document.getElementById('color1').value;
    let va2=document.getElementById('color2').value;
    let va3=document.getElementById('color3').value;
    let va4=document.getElementById('color4').value;
    let aux=0, aux1=0, aux2=0;
    switch(va1){
        case '#986a44':
            aux=1;
        break;

        case '#c01c28':
            aux=2;
        break;

        case 'ff7800':
            aux=3;
        break;

        case '#f6d32d':
            aux=4;
        break;

        case '#33d17a':
            aux=5;
        break;

        case '#3584e4':
            aux=6;
        break;

        case '#9141ac':
            aux=7;
        break;

        case '#77767b':
            aux=8;
        break;

        case '##ffffff':
            aux=9;
        break;
    }

    switch(va2){
        case '#000000':
            aux1=0;
        break;

        case '#986a44':
            aux1=1;
        break;
        
        case '#c01c28':
            aux1=2;
        break;

        case 'ff7800':
            aux1=3;
        break;

        case '#f6d32d':
            aux1=4;
        break;

        case '#33d17a':
            aux1=5;
        break;

        case '#3584e4':
            aux1=6;
        break;

        case '#9141ac':
            aux1=7;
        break;

        case '#77767b':
            aux1=8;
        break;

        case '##ffffff':
            aux1=9;
        break;
    }

    switch(va3){
        case '#000000':
            aux2=((aux*1)+(aux1*10)*1);
        break;

        case '#986a44':
            aux2=((aux*100)+(aux1*10));
        break;

        case 'ff7800':
            aux2=(aux*1000);
        break;

        
        
    }

    alert("Valor de resistencia: "+aux2);
}

function prueba()
{
    let v1= document.getElementById('color1').value; 
    alert("Valor: "+v1)
}