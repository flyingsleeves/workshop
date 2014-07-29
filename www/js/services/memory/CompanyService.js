var CompanyService = function() {

    this.initialize = function() {
        // No Initialization required
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        var deferred = $.Deferred();
        var company = null;
        var l = companies.length;
        for (var i=0; i < l; i++) {
            if (companies[i].id === id) {
                company = companies[i];
                break;
            }
        }
        deferred.resolve(company);
        return deferred.promise();
    }

    this.findByName = function(searchKey) {
        var deferred = $.Deferred();
        var results = companies.filter(function(element) {
            var fullName = element.companyName + " ";
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        deferred.resolve(results);
        return deferred.promise();
    }

    var companies = [
        {
            "id": 1,
            "companyName": "Weyland-Yutani Corp",
            "industryType": "Spaceship Construction",
            "fundingSought": "$2M",
            "dateSubmitted": "7/23/2014"
        },

        {
            "id": 2,
            "companyName": "Tyrell Corporation",
            "industryType": "Human Replicants",
            "fundingSought": "$1M",
            "dateSubmitted": "6/23/2014"
        },

        {
            "id": 3,
            "companyName": "Starfleet",
            "industryType": "Space Exploration",
            "fundingSought": "$500K",
            "dateSubmitted": "5/13/2014"
        },
    ];

}
