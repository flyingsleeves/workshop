var CompanyListView = function () {

    var companies

    this.initialize = function () {
        this.$el = $('<div/>');
        this.render();
    };

    this.setCompanies = function (list) {
        companies = list;
        this.render();
    };

    this.render = function () {
        this.$el.html(this.template(companies));
        return this;
    };

    this.initialize();

}
