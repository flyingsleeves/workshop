var HomeView = function (service) {

    var companyListView;

    this.initialize = function () {
        // Define a div wrapper for the view (used to attach events)
        this.$el = $('<div/>');
        this.$el.on('keyup', '.search-key', this.findByName);
        this.findByName;
        companyListView = new CompanyListView();
        this.displayAll();
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template());
        $('.content', this.$el).html(companyListView.$el);
        return this;
    };

    this.findByName = function() {
        service.findByName($('.search-key').val()).done(function(companies) {
            companyListView.setCompanies(companies);
        });
    };

    this.displayAll = function() {
        service.findByName(' ').done(function(companies) {
            companyListView.setCompanies(companies);
        });
    };

    this.initialize();

}
