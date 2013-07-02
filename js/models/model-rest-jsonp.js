/*
    If you are using the sample RESTFul services I published on GitHub, use the following URLs...

      - For the Node.js sample backend (available in https://github.com/ccoenraets/directory-rest-nodejs)
        Use: http://localhost:3000/players

      - For the PHP sample backend (available in https://github.com/ccoenraets/directory-rest-php)
        Use: /directory-rest-php/players

 */

directory.Player = Backbone.Model.extend({
    
    urlRoot:"http://notonlycode-1.bitnamiapp.com:3000/players",
    //urlRoot:"http://localhost:3000/players",

   sync: function (method, model, options){
       options.dataType = 'jsonp';
       return Backbone.sync(method, model, options);
   }

});

directory.Team = Backbone.Collection.extend({
    url:"http://notonlycode-1.bitnamiapp.com:3000/players",
    //url:"http://localhost:3000/players",
    model: directory.Player
});

directory.Message = Backbone.Model.extend({
    
    urlRoot:"http://notonlycode-1.bitnamiapp.com:3000/voice/team",
    //urlRoot: "http://localhost:3000/voice/team"
/*
    initialize:function ( msg ) {
        this.messages = new directory.MessageCollection();
        this.messages.url = this.urlRoot + "/team/" + msg;
    }
*/
});

directory.TeamMessages = Backbone.Collection.extend({

    model: directory.Message

});

/*
var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
        options.dataType = "jsonp";
        return originalSync.sync(method, model, options);
};
*/