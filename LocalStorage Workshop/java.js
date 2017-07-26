 REG.initializeEvents = function() {
      if(document.getElementById('addUserButton')) {
        document.getElementById('addUserButton').addEventListener('click', function() {
        	// obtener la información del form
  				var user = {
            userName: document.getElementById('username').value,
            name: document.getElementById('name').value,
          };

           REG.addUser(user);
        });
      }
};

 REG.initializeEvents();