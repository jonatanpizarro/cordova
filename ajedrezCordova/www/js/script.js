$('#userName').val('hola');
$('#userPassword').val('asdasd');



//login
$('#submit').click(function(){
    var user = $('#userName').val();
    var pass = $('#userPassword').val();
    

        $.ajax({
            type: 'GET',
            url: 'https://ajedrezap.herokuapp.com/api/login/'+user+'/'+pass,
           

            success: function (msg) {
                
                
                msg = JSON.parse(msg);
                
                
                if( msg.estado == 'ok'){
                    localStorage.setItem("token", msg.token);
                    localStorage.setItem("id" , msg.id);
                    window.location.replace("espera.html");
                }
            },
            error: function (request, status, error) {
               
                alert(JSON.stringify(request));
            }
        });
    });




$('#lista').click(function(){
        
        $.ajax({
            type: 'GET',
            url: 'https://ajedrezap.herokuapp.com/api/en_espera/'+localStorage.getItem("token"),


            success: function (msg) {       
                
                msg = JSON.parse(msg);
               // alert(msg);
                var tablero= $("#tabla");
                $("#tabla tr").remove();

                for (var i =0; i<msg.nombre.length;i++){
                    var td =$("<td>"+msg.nombre[i].name+"</td>");
                    var td1 =$("<td></td>");
                    var boton =$ ("<button id='"+msg.id[i].id+"' >Jugar</button>").click(function(e) { crearPartida(e.target.id);});
                    var tr =$("<tr></tr>");
                    tablero.append(tr);
                    tr.append(td);
                    td1.append(boton);
                    tr.append(td1);
                }


                
            },
            error: function (request, status, error) {

                alert(JSON.stringify(request));
            }
        });
    });



$('#partidas').click(function(){

    setInterval(ajaxCall, 2000); //2 sec"

                function ajaxCall() {
                    $.ajax({
                            type: 'GET',
                            url: 'https://ajedrezap.herokuapp.com/api/comprovar_partida/'+localStorage.getItem("id")+'/'+localStorage.getItem("token"),


                            success: function (msg) {  
                               ;
                               msg = JSON.parse(msg);
                               
                               if (msg.estado == 'Partida encontrada'){
                                localStorage.setItem("idPartida", msg.idPartida);
                                window.location.replace("tablero.html");


                               };              
                                         
                                
                            },
                            error: function (request, status, error) {
                                
                            }
                        });
                };
});



function crearPartida(e){  
    
        
        $.ajax({
            type: 'GET',
            url: 'https://ajedrezap.herokuapp.com/api/crear_partida/'+localStorage.getItem("id")+'/'+e+'/'+localStorage.getItem("token"),


            success: function (msg) {  
                msg = JSON.parse(msg);
                               
                if (msg.estado == 'Partida creada'){
                    localStorage.setItem("idPartida", msg.idPartida);               
                    window.location.replace("tablero.html");
                         
                
            }},
            error: function (request, status, error) {
                alert('https://ajedrezap.herokuapp.com/api/crear_partida/'+localStorage.getItem("id")+'/'+e+'/'+localStorage.getItem("token")) ;    
                alert(JSON.stringify(request));
            }
        });
    };



