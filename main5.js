let contador = 0
let numero1
let numero2 = 0
const ids= ["nombre","apellido","email","pasword"]
const usuario = {}

const contar =()=>{
    contador++; 
    alert(contador)
}
/*
const sumar= ()=>{
    contador++
    alert(contador)
}
const restar= ()=>{
    contador--
    alert(contador)
}
*/
// const operacion =(op="+",e)=>{
//     op === "+"? contador++ : contador--
//     alert(e)
// }
const handlerImput = (e)=>{
    operacion(e)
}
const handlerImputEvent =(e)=>{
    console.log(e.target.value)
}
const handlerImputNumber =(e)=>{
    console.log(e.id)
    const valor = e.value
    e.id ==="numero1" ?numero1 = parseInt(e.value) :numero2= parseInt(e.value)
    
}

const operacion = (op)=>{
    //
    
    switch(op){
        case "+":
            alert(numero1+numero2)
            break
            
        case "-":
            //numero 1 - numero 2
            alert(numero1-numero2)
            break
        case "*":
            //numero 1 * numero 2
            alert(numero1*numero2)
            break
        case "/":
            //numero 1 / numero 2
            alert(numero2===0   ? "no se puede dividirpor cero":numero1/numero2)
            break
         case "sqr":
            //numero 1 sqr numero 2
        case "**":
             //numero 1 **  numero 2
            alert(Math.pow(numero1,numero2))
            break
        default:
            //operacion no permitida 
            alert("no se que paso")
            
    }
}

const showpassword=()=>{
    const element = document.getElementById("password")
   
    element.type === "text"?  element.type ="password" : null 
    element.type ="text"
    }
const register = ()=>{
    // const nombre = document.getElementById("nombre").value.toLowerCase() || ""
    // const apellido = document.getElementById("apellido").value.toLowerCase() || ""
    // const password = document.getElementById("password").value.toLowerCase() || ""
    // const correo = document.getElementById("correo").value.toLowerCase() || ""
    for(id of ids){
        const id = document.getElementById("id").value.toLowerCase() || ""
        console.log(id)
    } 
   
    Object.assign(usuario,{
        nombre,apellido,correo,password
    })
    console.log(usuario)
}