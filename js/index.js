document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });




    let usuario = localStorage.getItem('nombre');
    if (usuario=="" || usuario==null){
        location.href='login.html';
    }else{
        document.getElementById('nombre').innerHTML += usuario;
    }

    let logout = document.getElementById('salir');
    logout.addEventListener('click', function(){
        localStorage.removeItem('nombre');
        localStorage.removeItem('email');
        alert('Desconexion exitosa', 'Vuelve pronto');
        location.href="login.html";
        
    })
});

