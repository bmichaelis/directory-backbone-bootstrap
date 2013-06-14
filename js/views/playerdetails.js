directory.PlayerView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        $('#details', this.el).html(new directory.PlayerSummaryView({model:this.model}).render().el);
/*
        this.model.reports.fetch({
            success:function (data) {
                if (data.length == 0)
                    $('.no-reports').show();
            }
        });
        $('#reports', this.el).append(new directory.PlayerListView({model:this.model.reports}).render().el);
*/
        return this;
    },

    events: {
        "click .toggle": "playerToggle"
     },

    playerToggle: function () {
        var player = this.model
        var self = this;
        console.log("Before Change:")
        console.log(player.toJSON());
        player.set({disabled: (player.attributes.disabled == true ? false : true)});
        console.log("After Change:")
        console.log(player.toJSON());
        player.save();
    }
});

directory.PlayerSummaryView = Backbone.View.extend({

    initialize:function () {
        this.model.on("change", this.render, this);
    },

    render:function () {
        this.model.attributes.thumbs = this.model.attributes.disabled == true ? 'icon-thumbs-down' : "icon-thumbs-up";
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});