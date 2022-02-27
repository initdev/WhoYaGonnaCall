$(document).ready( function () {
    $('.single-select').select2({
        placeholder: "Select"
    });

    $('#btn-login').click(function(){
        window.location.href = 'search.html';
        return false;
    });

    $('.open-overlay').click(function() {
        var overlay_navigation = $('.overlay-navigation'),
          nav_item_1 = $('nav li:nth-of-type(1)'),
          nav_item_2 = $('nav li:nth-of-type(2)'),
          nav_item_3 = $('nav li:nth-of-type(3)'),
          nav_item_4 = $('nav li:nth-of-type(4)'),
          nav_item_5 = $('nav li:nth-of-type(5)'),
          top_bar = $('.bar-top'),
          middle_bar = $('.bar-middle'),
          bottom_bar = $('.bar-bottom');
      
        overlay_navigation.toggleClass('overlay-active');
        if (overlay_navigation.hasClass('overlay-active')) {
      
          top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
          middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
          bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
          overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
          nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
          nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
          nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
          nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
          nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
        } else {
          top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
          middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
          bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
          overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
          nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
          nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
          nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
          nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
          nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
        }
      })

   var tech_table = $('#technical-skills-table').DataTable({
        paging: false,
        searching: false,
        info: false,
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class=\"table-button\"><i class=\"fas fa-thumbs-up\"></i></button>"
        } ],
    });
    var soft_table = $('#soft-skills-table').DataTable({
        paging: false,
        searching: false,
        info: false,
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "defaultContent": "<button class=\"table-button\"><i class=\"fas fa-thumbs-up\"></i></button>"
        } ]
    });

    $('#technical-skills-table tbody').on( 'click', 'button', function () {
        var data = tech_table.row( $(this).parents('tr') ).data();
        var row = tech_table.row( $(this).parents('tr'));
        data[2] += 1;
        tech_table.row(row).data(data).draw();
    } );

    $('#soft-skills-table tbody').on( 'click', 'button', function () {
        var data = soft_table.row( $(this).parents('tr') ).data();
        var row = soft_table.row( $(this).parents('tr'));
        data[1] += 1;
        soft_table.row(row).data(data).draw();
    } );


    $('#btn-tech-skills').click(function(){
        var skill = $('#tech-skill option:selected').text();
        var level = $('#tech-skill-level option:selected').text();
        let add = true;
        
        tech_table.rows().every(function(){
            var data = this.data();
            if(data[0] === skill){
                alert("Skill has already been added");
                add = false;
            }
        });

        if(add){
            if(skill && level){
                tech_table.row.add([
                    skill,
                    level,
                    0,
                    " "
                ]).draw(false);
            }else{
                alert("Must Select both values to add a skill")
            }
        }
    });

    $('#btn-soft-skills').click(function(){
        var skill = $('#soft-skill option:selected').text();
        let add = true;
        
        soft_table.rows().every(function(){
            var data = this.data();
            if(data[0] === skill){
                alert("Skill has already been added");
                add = false;
            }
        });

        if(add){
            if(skill){
                soft_table.row.add([
                    skill,
                    0,
                    " "
                ]).draw(false);
            }else{
                alert("Must Select both values to add a skill")
            }
        }
    });
});


