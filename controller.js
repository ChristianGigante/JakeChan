$(document).ready(function () {

    $('#btnSearch').click(function () {
        var search = $('#search').val().toLowerCase();
        var url = "https://restcountries.eu/rest/v2/name/" + search + ""

        $(document).ajaxStart(function () {
            $('#btnSearch').text('Searching..,');
            $('#btnSearch').attr('disable', true);
            emptyTable();
        })

        $(document).ajaxStop(function () {
            $('#btnSearch').attr('disable', false);
            $('#btnSearch').text('Search');
        })

        $.getJSON(url, function (data) {
            $.each(data, function (key, val) {
                if (val.name.toLowerCase().substring(0, search.length) == search) {
                    counter++;
                    addRow(val.name, val.flag, val.alpha3Code, val.population);
                }

            });

        });

    })

});





