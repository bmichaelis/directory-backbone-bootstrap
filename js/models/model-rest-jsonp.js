/*
    If you are using the sample RESTFul services I published on GitHub, use the following URLs...

      - For the Node.js sample backend (available in https://github.com/ccoenraets/directory-rest-nodejs)
        Use: http://localhost:3000/players

      - For the PHP sample backend (available in https://github.com/ccoenraets/directory-rest-php)
        Use: /directory-rest-php/players

 */

directory.Player = Backbone.Model.extend({

    urlRoot:"http://localhost:3000/players",
//    urlRoot:"/directory-rest-php/players",

    initialize:function () {
        this.reports = new directory.PlayerCollection();
        this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

});

directory.PlayerCollection = Backbone.Collection.extend({

    model: directory.Player,

    url:"http://localhost:3000/players"
//    url:"/directory-rest-php/players"

});

var originalSync = Backbone.sync;
Backbone.sync = function (method, model, options) {
    if (method === "read") {
        options.dataType = "jsonp";
        return originalSync.apply(Backbone, arguments);
    }

};