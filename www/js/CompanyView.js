var CompanyView = function(company) {

    this.initialize = function() {
        this.$el = $('<div/>');
    };

    this.render = function() {
        this.$el.html(this.template(company));
/*        this.$el.click(function() {
            $('.media-body').hide();
        });*/
        return this;
    };

    this.initialize();

}
