var REG = {
    property: 10,

    initialize: function() {
   
    },

    initializeEvents: function() {
    },

loadUsers: function() {
    REG.deleteTableRows();
      //leer de localStorage los usuarios
      var users = [];
      if (localStorage.getItem('users')) {
          users = JSON.parse(localStorage.getItem('users'));
          localStorage.clear();
      }
      //agregar cada usuario al DOM
      users.forEach(function(user, index, users) {
        REG.addUser(user);
      });

    },
     addUser: function(user) {
         //Carga los Ususarios
        
        // crear una HTML fila
				var row = "<tr><td>"+user.name+"</td><td>"+user.userName+"</td><td>"+user.telefono+"</td></tr>";

				// agregar a la tabla
				var table = document.getElementById("users_table");
				table.innerHTML = table.innerHTML + row;

        // agregarlo a localStorage
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

			
    },
    deleteUsers: function() {
      //leer de localStorage los usuarios
      var users = [];
      if (localStorage.getItem('users')) {
          users = JSON.parse(localStorage.getItem('users'));
      }
   // users.pop();
    users.pop();
      localStorage.clear();
      REG.deleteTableRows();
       users.forEach(function(user, index, users) {
        REG.addUser(user);
       });

    },
    deleteTableRows: function(){
        //Eliminar rows de la tabla.
        var tableHeaderRowCount = 0;
var table = document.getElementById('users_table');
var rowCount = table.rows.length;

for (var i = tableHeaderRowCount; i < rowCount; i++) {
    table.deleteRow(tableHeaderRowCount);

}
    }
   // addUser: function(user) {
      
        // agregarlo a localStorage
     //   var users = [];
      //  if (localStorage.getItem('users')) {
      //      users = JSON.parse(localStorage.getItem('users'));
      //  }
     //   users.push(user);
      //  localStorage.setItem('users', JSON.stringify(users));
        
       // var datos = showUser(users, 'myData');
       // document.getElementById('myData').appendChild(datos);

			
   // },
   // showUser: function(users, idTable){
        //Mostrar el Json
   //     var array = JSON.parse(users);
   //     var table =document.getElementById(idTable);
//
   //     for (var i = 0; i < array.length; i++) {
 //           var row = table.insertRow(i+1);
 //       var x =0;
  //  for(var index in array[i]){
  //      var cell = row.insertCell(x);
  //      cell.innerHTML = array[i][index];
  //      x++;
 //   }      
//}
//return table;
 //   },

};

