// ==UserScript==
// @name         Empornium floating bar redesign
// @include      /https?://www\.empornium\.(me|sx)/torrents\.php.*/
// @version      0.2
// @description  Redesign of the floating bar on empornium torrent pages
// @require      http://code.jquery.com/jquery-2.1.1.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    $('#modal_content').css({'margin-top': '0px', 'padding-bottom': '0px'});
    $('.thin > h2:first-child').css({'margin-bottom': '5px'});

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

    if(GM_getValue('floating_bar_hidden') === true) {
        $('#details-sidebar').hide();
    } else {
        $('#user-sidebar').append(
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
})();

