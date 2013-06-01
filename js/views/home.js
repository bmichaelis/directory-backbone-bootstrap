directory.HomeView = Backbone.View.extend({

    initialize: function () {
    },

    events:{
        "click #showMeBtn"  : "showMeBtnClick",
        "click #teamMsgBtn" : "sendTeamMessage"
    },

    render:function () {
        this.$el.html(this.template());
        return this;
    },

    showMeBtnClick:function () {
        console.log("showme");
        directory.shellView.search();
    },

    sendTeamMessage:function () {
        $("#teamMsgBtn").load('http://notonlycode-1.bitnamiapp.com:3000/voice/team?msg=' + encodeURIComponent($("#teamMsgTxt").val()));
    },

});