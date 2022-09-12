
function calculoFecha (carnet,poesia, fecha){
    const lastChar = carnet.charAt(carnet.length-1);
    let res
    if(lastChar=='1'&&poesia=='dramatico'){
        res=carnetTermina1(fecha);
    }
    else if(lastChar=='3'&&poesia=='epica'){
        res=carnetTermina3(new Date(fecha));
    }else{
        res=dermasTerminaciones(fecha);
    }
    return res
}

function carnetTermina1(fecha){
    let fechaNueva = new Date(fecha);
    let diaDeLaSemana = fechaNueva.getDay();
    let dias = 5;
    for(let i =0; i<6; i++){
        if(diaDeLaSemana==6){
            diaDeLaSemana=0;
        }
        else{
            diaDeLaSemana++;
        }
        if(diaDeLaSemana==6){
            dias++;
        }
    }
    fechaNueva.setDate(fechaNueva.getDate()+dias);
    return fechaNueva;

}

function carnetTermina3(fecha){
    let fechita = fecha.getFullYear()+'-'+(fecha.getMonth()+1)+'-'+fecha.getDate();
    let fechaArray=fechita.split("-");
    let fechaNueva= new Date(fechaArray[0],fechaArray[1],0).getDate();
    //console.log('este mes tiene estos dias '+fechaNueva);
    let futuraFecha = new Date(fechaArray[0],fechaArray[1]-1,fechaNueva);
    let diaDeLaSemana = futuraFecha.getDay();

    if(diaDeLaSemana==6){
        futuraFecha.setDate(futuraFecha.getDate()-1);
    }
    if(diaDeLaSemana==0){
        futuraFecha.setDate(futuraFecha.getDate()-2);
    }
    return futuraFecha;
}

function dermasTerminaciones(fecha){
    let fechaNueva = new Date(fecha);
    let diaDeLaSemana = fechaNueva.getDay();
    //console.log('dia de la semana '+diaDeLaSemana);
    let dias =0;
    for(let i =0; i<8; i++){
        if(diaDeLaSemana==5){
            fechaNueva.setDate(fechaNueva.getDate()+dias);
            //console.log('agregue '+dias+' dias');
        }
        if(diaDeLaSemana==6){
            diaDeLaSemana=0;
        }
        else{
            diaDeLaSemana++;
        }
        dias++;
    }
    return fechaNueva;
}

module.exports = calculoFecha;