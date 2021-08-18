// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require("jquery")

import '@doabit/semantic-ui-sass'

window.scroll_bottom = function() {
    if (('#message').length > 0) {
        var element = document.getElementById("message");
        element.scrollTop = element.scrollHeight
    }
}
window.submit_message = function() {
    $('#message_body').on('keydown', function(e) {
        if (e.keyCode == 13)
        {
            $('button').click();
            e.target.value = "";
        };
    });
};
$(document).on('turbolinks:load', function(){     $(".ui.dropdown").dropdown();  
$('.message .close').on('click', function(){ $(this).closest('.message').transition('fade')   });
    submit_message();
    scroll_bottom();
});



Rails.start()
Turbolinks.start()
ActiveStorage.start()



