/*
    If you are using the sample RESTFul services I published on GitHub, use the following URLs...

      - For the Node.js sample backend (available in https://github.com/ccoenraets/directory-rest-nodejs)
        Use: http://localhost:3000/players

      - For the PHP sample backend (available in https://github.com/ccoenraets/directory-rest-php)
        Use: /directory-rest-php/players

 */

directory.Player = Backbone.Model.extend({

    initialize:function () {
        this.reports = new directory.PlayerCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

directory.PlayerCollection = Backbone.Collection.extend({

    model: directory.Player,

    url:"http://notonlycode-1.bitnamiapp.com:3000/players"

});

directory.Message = Backbone.Model.extend({
    
/*
    initialize:function ( msg ) {
        this.messages = new directory.MessageCollection();
        this.messages.url = this.urlRoot + "/team/" + msg;
    }
*/
});

directory.MessageCollection = Backbone.Collection.extend({

    model: directory.Message,

    urlRoot: "http://notonlycode-1.bitnamiapp.com:3000/voice/team",

});


var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
    if (method === "read") {
        options.dataType = "jsonp";
        return originalSync.apply(Backbone, arguments);
    }

};