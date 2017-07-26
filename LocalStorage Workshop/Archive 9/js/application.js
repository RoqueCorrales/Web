var RIDES = {
    property: 10,

    initialize: function() {
      RIDES.clearFields();
      RIDES.loadUsers();
    },

    initializeEvents: function() {
    },

    loadUsers: function() {
      //leer de localStorage los usuarios
      var users = [];
      if (localStorage.getItem('users')) {
          users = JSON.parse(localStorage.getItem('users'));
      }
      //agregar cada usuario al DOM
      users.forEach(function(user, index, users) {
        RIDES.addUser(user);
      });

    },
    addUser: function(user) {
        // crear una HTML fila
				var row = "<tr><td>"+user.name+"</td><td>"+user.userName+"</td></tr>";

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

				//clear field
				RIDES.clearFields();
    },

    clearFields: function() {
			document.getElementById('username').value = '';
			document.getElementById('name').value = '';
			document.getElementById('password').value = '';
			document.getElementById('name').focus();
    }
};

RIDES.initialize();
RIDES.initializeEvents();


// var users = JSON.parse(localStorage.getItem('users'));
//
// if (!users) {
// 	users = [];
// }
//
//
// function saveToLocalStorage(username, password) {
// 	var user = {
// 		"username": username,
// 		"password": password
// 	};
// 	users.push(user);
//
// 	localStorage.setItem('users', JSON.stringify(users));
// 	loadUsers();
// }
//
//
// function loadUsers() {
//
// 	// read users from localstorage
// 	// loop users
// 	var user_html = "";
// 	for (var i = 0; i < users.length; i++) {
// 		// add users to the table
// 		var u = users[i];
// 		user_html = user_html + "<tr><td>"+u.username+"</td><td>"+
// 		u.password+"</td></tr>";
// 	}
//
// 	$('#users_table').html(user_html);
//
// }
//
//
//
//
// // var MYAPP = {
// // 	year: 2015,
// // 	month: 'feb',
// // 	Client: function (firstName, lastName) {
// // 	  this.firstName = firstName;
// // 	  this.lastName = lastName;
//
// // 	  this.save = function() {
// // 	  	//insert into
// // 	  	console.log('Saving user', this.firstName, this.lastName);
// // 	  	// save to localstorage
// // 	  };
// // 	},
// // 	validateUser: function() {
// // 		var year = 2020;
//
//
// // 		var username = $('#username').val();
// // 		var password = $('#password').val();
// // 		debugger;
// // 		var errorElement = jQuery('#error_msg');
//
// // 		if (username == 'admin' && password == 'password') {
// // 			console.log('logged in')
// // 			errorElement.hide();
// // 		} else {
// // 			errorElement.html('Username or Password invalid').addClass('error').show();
// // 		}
// // 	},
// // 	saveClient: function() {
// // 		var firstName = document.getElementById('firstName').value;
// // 		var lastName = document.getElementById('lastName').value;
//
// // 		var client1 = new MYAPP.Client(firstName, lastName);
// // 		client1.save();
// // 	},
// // 	bindEvents: function() {
// // 		//jQuery('#login-button').click(MYAPP.validateUser);
//
// // 		jQuery('#save-client').bind('click',function(){
// // 			MYAPP.saveClient();
// // 		});
//
//
// // 	},
// // };
//
// // jQuery(document).ready( function() {
// // 	MYAPP.bindEvents();
// // });
