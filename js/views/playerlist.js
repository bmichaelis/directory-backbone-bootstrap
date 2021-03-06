directory.PlayerListView = Backbone.View.extend({

    tagName:'ul',

    className:'nav nav-list',

    initialize:function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (player) {
            self.$el.append(new directory.PlayerListItemView({model:player}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (player) {
            this.$el.append(new directory.PlayerListItemView({model:player}).render().el);
        }, this);
        return this;
    }
});

directory.PlayerListItemView = Backbone.View.extend({

    tagName:"li",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        // The clone hack here is to support parse.com which doesn't add the id to model.attributes. For all other persistence
        // layers, you can directly pass model.attributes to the template function
        var data = _.clone(this.model.attributes);
        data.id = this.model.id;
        data.thumbs = this.model.attributes.disabled == true ? 'icon-thumbs-down' : "icon-thumbs-up";
        this.$el.html(this.template(data));
        return this;
    }

});