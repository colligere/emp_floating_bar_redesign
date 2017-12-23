// ==UserScript==
// @name         Empornium floating bar redesign
// @include      /https?://www\.empornium\.(me|sx)/torrents\.php.*/
// @version      1.0
// @description  Redesign of the floating bar on empornium torrent pages
// @updateURL    https://github.com/colligere/emp_floating_bar_redesign/raw/master/emp_floating_bar_redesign.user.js
// @require      http://code.jquery.com/jquery-2.1.1.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    
    // Add toggle button
    $('#slide_button').parent().append(
        $('<a>')
        .attr('class', 'button toggle infoButton')
        .attr('title', 'Toggle bar')
        .text('Toggle bar')
        .click(function(event) {
            if(GM_getValue('floating_bar_hidden') === true) {
                GM_setValue('floating_bar_hidden', false);
                $('#details-sidebar').show();
            } else {
                $('#btn_hide_floating_bar').click();
            }
        })
    );
    
    // Add container for custom controls
    $('#user-sidebar').append(
        $('<div>').attr('id', 'sidebar_custom_controls')
    );
    
    // Add position list
    $('#sidebar_custom_controls').append(
        $('<select>')
            .attr('id', 'floating_bar_position')
            .change(function(event) {
                GM_setValue('floating_bar_position', $('#floating_bar_position').val());
                console.log(GM_getValue('floating_bar_position'));
                style_bar();
            })
    );
    
    $('#sidebar_custom_controls').prepend(
        $('<label>')
            .attr('for', 'floating_bar_position')
            .text('Position: ')
            .css({'color': '#def'})
    );
    
    $('#floating_bar_position')
        .append(
            $('<option>')
                .attr('value', 'top')
                .text('Top')
        )
        .append(
            $('<option>')
                .attr('value', 'bottom')
                .text('Bottom')
        )
        .append(
            $('<option>')
                .attr('value', 'right')
                .text('Right')
        )
        .append(
            $('<option>')
                .attr('value', 'left')
                .text('Left')
        );
    
    // Select stored option
    $('#floating_bar_position')
        .find('option[value=' + GM_getValue('floating_bar_position') + ']')
            .attr('selected', true);
    
    if(GM_getValue('floating_bar_hidden') === true) {
        $('#details-sidebar').hide();
    } else {
        $('#sidebar_custom_controls').append(
            $('<input>')
            .attr('type', 'button')
            .attr('value', 'Hide floating bar')
            .attr('id', 'btn_hide_floating_bar')
            .click(function(event) {
                $('#details-sidebar').hide();
                GM_setValue('floating_bar_hidden', true);
            })
        );
    }
    
    // Style the bar
    style_bar();
})();


function style_bar() {
    switch(GM_getValue('floating_bar_position')) {
        case 'bottom':
            $('#modal_content').css({
                'margin': '0px auto 0px auto',
                'padding-bottom': '0px',
                'border-radius': '0 0 14px 14px',
                'width': '90%',
                'min-width': '350px',
                'max-width': '1300px',
            });
            $('#user-sidebar > input').css({'width': 'unset'});
            $('#sidebar_custom_controls > input').css({'width': 'unset'});
            $('#details-sidebar').css({
                'top': 'unset',
                'bottom': '0px',
                'right': 'unset',
                'left': '0px',
                'width': '100%',
            });
            $('.thin').css({
                'min-width': '920px',
                'padding-left': 'unset',
                'padding-right': 'unset',
                'padding-top': 'unset',
                'padding-bottom': 'unset',
            });
            $('.thin > h2:first-child').css({'margin-bottom': '5px'});
            $('#sidebar_custom_controls').css({
                'float': 'right',
                'margin-top': 'unset',
            });
            $('#floating_bar_position').css({'margin': '2px'});
            $('.thin > h2').show();
            
            break;
        case 'right':
            $('#modal_content').css({
                'margin-right': '0px',
                'padding-bottom': '0px',
                'border-radius': '14px 0 0 14px',
                'width': 'unset',
                'min-width': 'unset',
            });
            $('#user-sidebar > input').css({'width': '92%'});
            $('#sidebar_custom_controls > input').css({'width': '92%'});
            $('#details-sidebar').css({
                'top': '150px',
                'bottom': 'unset',
                'right': '0px',
                'left': 'unset',
                'width': '150px',
            });
            $('.thin').css({
                'min-width': 'unset',
                'padding-left': '7px',
                'padding-right': 'unset',
                'padding-top': '15px',
                'padding-bottom': '15px',
            });
            $('#sidebar_custom_controls').css({
                'float': 'unset',
                'margin-top': '10px',
            });
            $('#floating_bar_position').css({'margin': '2px'});
            $('.thin > h2').hide();
            
            break;
        case 'left':
            $('#modal_content').css({
                'margin-left': '0px',
                'padding-bottom': '0px',
                'border-radius': '0 14px 14px 0',
                'width': 'unset',
                'min-width': 'unset',
            });
            $('#user-sidebar > input').css({'width': '92%'});
            $('#sidebar_custom_controls > input').css({'width': '92%'});
            $('#details-sidebar').css({
                'top': '150px',
                'bottom': 'unset',
                'right': 'unset',
                'left': '0px',
                'width': '150px',
            });
            $('.thin').css({
                'min-width': 'unset',
                'padding-left': '5px',
                'padding-right': '5px',
                'padding-top': '15px',
                'padding-bottom': '15px',
            });
            $('#sidebar_custom_controls').css({
                'float': 'unset',
                'margin-top': '10px',
            });
            $('#floating_bar_position').css({'margin': '2px'});
            $('.thin > h2').hide();
            
            break;
        default:
            $('#modal_content').css({
                'margin': '0px auto 0px auto',
                'padding-bottom': '0px',
                'border-radius': '14px 14px 0 0',
                'width': '90%',
                'min-width': '350px',
                'max-width': '1300px'
            });
            $('#user-sidebar > input').css({'width': 'unset'});
            $('#sidebar_custom_controls > input').css({'width': 'unset'});
            $('#details-sidebar').css({
                'top': '0px',
                'bottom': 'unset',
                'right': 'unset',
                'left': '0px',
                'width': '100%',
            });
            $('.thin').css({
                'min-width': '920px',
                'padding-left': 'unset',
                'padding-right': 'unset',
                'padding-top': 'unset',
                'padding-bottom': 'unset',
            });
            $('.thin > h2:first-child').css({'margin-bottom': '5px'});
            $('#sidebar_custom_controls').css({
                'float': 'right',
                'margin-top': 'unset',
            });
            $('#floating_bar_position').css({'margin': '2px'});
            $('.thin > h2').show();
    }
}






