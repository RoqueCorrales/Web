var REG = {
    property: 10,

    initialize: function() {
      
    },

    initializeEvents: function() {
    },

 
    addUser: function(user) {
      
        // agregarlo a localStorage
        var users = [];
        if (localStorage.getItem('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

			
    },

};

