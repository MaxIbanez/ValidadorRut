const validacionDeRut = (rut)=>{
    let dni = rut
    dni = dni.replace(".","")
    dni = dni.replace(".","")
    dni = dni.replace("-","")
    let lista = dni.split("")
    let digitoVerificador = lista[lista.length-1]
    lista.splice(-1,1)
    //console.log(lista);
    let multiplicar = 2
    let total = 0
    let division = 0
    if (lista.length==8) {
      for (let index = lista.length-1; index > -1; index--) {
        if (index==1) {
          multiplicar = 2        
        }
        //console.log(`${index}) ${Number(lista[index])} x ${multiplicar} = ${Number(lista[index])*multiplicar}`);
        total = total + Number(lista[index])*multiplicar
        multiplicar++
      }
    }else{
      for (let index = lista.length-1; index > -1; index--) {
        if (index==0) {
          multiplicar = 2        
        }
        //console.log(`${index}) ${Number(lista[index])} x ${multiplicar} = ${Number(lista[index])*multiplicar}`);
        total = total + Number(lista[index])*multiplicar
        multiplicar++
      }
    }
    division=Math.trunc(total/11)
    division=division*11
    total = total-division
    let digito = String(11-total)
    if (11-total==11) {
      digito = "0"
    }
    if (11-total==10) {
      console.log("digitoVerificador = K");
      digito = "k"
    }
    if (digito==digitoVerificador) {
      return true
    }
    return false

}

console.log(validacionDeRut("11111111-1"));