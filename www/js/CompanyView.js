var CompanyView = function(company) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(company));
        return this;
    };

    this.initialize();

}
