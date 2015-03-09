define([
    'backbone',
    'views/main'
], function(
    Backbone,
    mainView
){

    $('#page').append(mainView.$el);
    mainView.$el.hide();


    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        defaultActions: function () {
            // TODO
            mainView.show();
        },
        scoreboardAction: function () {
            // TODO
            alert('alert');
        },
        gameAction: function () {
            // TODO
        },
        loginAction: function () {
            // TODO
        }
    });

    return new Router();
});