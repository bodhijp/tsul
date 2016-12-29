    (function() {

        function set_div_cn(id, cn) {
            document.getElementById(id).className = cn;
        }

        function set_div_bg(id, bg) {
            set_el_bg(document.getElementById(id), bg);
        }

        function set_el_bg(el, bg) {
            if (el != null) el.style.backgroundImage = "url(https://bgcdn.bodhijp.org/" + bg + ")";
        }

        function set_bg(bg) {
            set_div_bg('homg-div', bg); //set bg to header div
            //set_el_bg(document.body, bg);//set bg to whole body
        }

        function loadCSS(e, t, n) {
            "use strict";
            var i = window.document.createElement("link");
            var o = t || document.head;
            i.rel = "stylesheet";
            i.href = e;
            o.parentNode.insertBefore(i, o);
        }
        function load_send_mail() {        
            $('#contact-form').submit(function (event) {
                event.preventDefault()
                
                var URL = 'https://sapi.bodhijp.org/mail/query'
                
                var data = {
                    name: $('#name-input').val(),
                    email: $('#email-input').val(),
                    description: $('#description-input').val()
                }
                
                $.ajax({
                    type: 'POST',
                    url: URL,
                
                    dataType: 'json',
                    contentType: 'application/json',
                    data: JSON.stringify(data),
                    success: function () {
                    // clear form and show a success message
                    },
                    error: function () {
                    // show an error message
                    }
                })
                })

        }

        function body_load() {
            console.log('Set body load');

            set_bg("970.jpg");
           

            set_div_bg('play-div', "pre1.jpg");

            // load css file async
            loadCSS("https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css");

            var ma = document.getElementById('m2me');
            if (ma != null)
                ma.onclick = function() {
                    var lfhrefs = location.href.split('.');
                    window.location.href = 'mailto:info@' + lfhrefs[1] + '.org';
                };

            var gfrm =  document.getElementById('gfrm');
            if (gfrm != null) {
                gfrm.setAttribute("src",gfrm.getAttribute("datasrc"));
            }

            var youtubeDiv = document.getElementById('play-a');
            if (youtubeDiv != null) {
                youtubeDiv.onclick = function() {
                    console.log('Clk play');
                    $("#p-video").attr("src", $("#p-video").attr("dsrc"));
                    set_div_cn('iframe-div', 'embed-responsive embed-responsive-16by9');
                    set_div_cn('play-div', 'hide');
                }
            }
            load_send_mail();

            //var table0 = document.getElementsByTagName("table")[0];
            //if (table0 != undefined) table0.className = "table";
            $(".lazy").lazyload();
        }

        document.body.addEventListener("load", body_load(), false);

    })();