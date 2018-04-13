/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    createTable: function() {
        var tablero= $("#tablero");
        var letras =["","A","B","C","D","E","F","G","H"];
        var numeros=["","1","2","3","4","5","6","7","8"];
        var contador =0;
        var fila = $("<tr></tr>");
        var celda = $("<td></td>");

        //FILAS
        for (var i=0; i<=8; i++) {
            tablero.append("<tr> </tr>");
            
            //COLUMNAS
            for (var c=0; c<=8; c++) {
                

                //Si es la primera fila printo la lista letras
                if (i==0) {

                    tablero.append("<th>"+letras[c]+"</th>"); 
                    
                                      
                }

                //Si no es la primera fila y es la primera columna printo un numero
                else if (i!=0 & c==0){
                    tablero.append("<tr> </tr>");
                    tablero.append("<th>"+i+"</th>"); 
                }

                //Si no es ni la primera fila ni la primera columna le doy una clase para luego darle color
                else if (i!=0 & c!=0){

                    //Si el contador es parejo printara una negra
                    if (contador%2==0){                          
                        tablero.append("<td class=negras style='background-color:black; '></td>");    
                                            
                        
                        }

                    //Si no , printara una blanca
                    else{
                            
                        tablero.append("<td class=blancas style='background-color:white';></td>"); 
                        
                        
                         }
                        
                }
             contador ++;  
                 
             
             
            
        }


    }
}};

app.initialize();

app.createTable();