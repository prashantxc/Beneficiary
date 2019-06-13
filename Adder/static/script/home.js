window.onload = function() {

    $(function(){

        // NavBar
        $('.navbar-toggler').click(function(event){
            $('.navbar-collapse').toggle(500);
        });

        $('#contact').on('click', function(event){
            alert('Contact us on +9111 25635 698');
        });

        // Selector
        $('.dropdown-toggle').on('click', function(event){
            $('.dropdown-menu').toggle(100);
        });

        $('.dropdown-item').on('click', function(event){
            var selectedData = $(this).html();
            $('.dropdown-toggle').html(selectedData);
            $('.dropdown-menu').toggle(100);

            showList(selectedData);
        });

        function showList(ministryName) {
            $.ajax({
                url: 'peoplecall/',
                type: 'POST',
                data: {data: ministryName},
                success: function(data, status, xhr) {
                    console.log(data);
                },
                error: function(data, status, xhr) {
                    console.log(data);
                }
                
            });
        }

    });

}