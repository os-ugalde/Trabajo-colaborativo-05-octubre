const datos = [];
function agregarDatos(e,form){
    e.preventDefault();
    // Definisión de variable
    let datosUsuarios = {};
    // asignación de datos del formulario
    datosUsuarios.nombre = form.nombre.value;
    datosUsuarios.apellido = form.apellido.value;
    datosUsuarios.rut = form.rut.value;
    datosUsuarios.email = form.email.value;
    datosUsuarios.fecha_de_contrato = form.edad.value;
    datosUsuarios.email = form.email.value;
    datosUsuarios.direccion = form.direccion.value;
    // Se imprime por consola
    datos.push(datosUsuarios);
    listar();
    form.reset();
}


function listar(){
    let tbody = "";
    for(let i=0;i<=datos.length-1;i++){
        let info=datos[i];
        let td = "<tr> <td>"+info.nombre+"</td> <td>"+info.apellido+"</td> <td>"+info.edad+"</td> <td>"+info.email+"</td></tr>"
        tbody=tbody + td;
    }
    document.querySelector("#TablaUsuarios tbody").innerHTML = "";
    document.querySelector("#TablaUsuarios tbody").innerHTML = tbody;
}

function juliodimequeres(btn){
    let valorAttr = btn.getAttribute("coleto");
    let elemento = document.getElementById(valorAttr);
    let rows = document.getElementsByClassName('row')
    for(let i =0; i<=rows.length-1;i++){
        rows[i].classList.add('esconder')
    
    }
    elemento.classList.remove('esconder');
    
}