/* GLOBAL FUNCTIONS */
    /* GET HTML CONTENT DOCUMENT FUNCTION */
        function getHTMLFromDocument(documentItem){
            // GET THE HTML OF THE DOCUMENT AND RETURN THE INFORMATION
            xhReq.open("GET", "content/"+documentItem+".html", false);
            xhReq.send(null); 
            return xhReq.responseText;          
        }

    /* AUX FUNCTIONS */
        /* AJAX FUNCTION */
        function ajax(url,post = '',id = ''){
            var result ="";
            var POSTData = '';

            if(typeof post === 'object'){
                var data = new FormData();
                for(field in post){
                    if (document.getElementById(field) != null){
                        if(document.getElementById(field).type == 'file'){
                            jQuery.each(jQuery('#'+field)[0].files, function(i, file) {
                                data.append(field, file);
                            });
                            data.append('check_'+field, $('#check_'+field).val());
                        }else{                      
                            if(post[field]['type'] == 'html'){
                                data.append(field, tinyMCE.get(field).getContent());
                            }else{
                                data.append(field, $('#'+field).val());
                            }
                        }
                    }
                }
                data.append('id', id);
                POSTData = data;

                var result ="";
                $.ajax({ type : "POST", url : url, data : POSTData, cache: false, contentType: false, processData: false, datatype: "json", async: false, 
                   success:function(data){
                        result = data;
                   },timeout: 1
                }); 
            }else{
                POSTData = post;

                $.ajax({ type : "POST", url : url, data : POSTData, datatype: "json", async: false, 
                   success:function(data){
                        result = data;
                   },timeout: 1
                });
            }

            return result;
        }

        /* DIALOG DIMISSED */
        function alertDismissed() {
            // do something
        }

        /* NOTIFICATION */
        function notification(title, message, close_btn_title){
            navigator.notification.alert(
                message,                // message
                alertDismissed,         // callback
                title,                  // title
                close_btn_title         // buttonName
            );
        }

        /* LOAD SCROLL */
        function loadScroll(scroll, destroy = false){
            if(destroy)
            myScroll.destroy();

            myScroll = new IScroll(scroll, {
                scrollbars: true,
                mouseWheel: true,
                interactiveScrollbars: true,
                shrinkScrollbars: 'scale',
                fadeScrollbars: true,
                hideScrollbar: true
            }); 
        }