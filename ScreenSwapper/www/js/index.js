/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 var home = $('#home')[0];
 var page01 = $('#page01')[0];
 var page02 = $('#page02')[0];

 var wrapperHome = $('#wrapper-home')[0];
 var wrapperPage01 = $('#wrapper-page01')[0];
 var wrapperPage02 = $('#wrapper-page02')[0];

var app = {
    // Application Constructor
    initialize: function() {
        var heightHome=window.innerHeight - 60;
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.containers { position:absolute; z-index:2; left:0; width:100%; top:60px; height: '+heightHome+'px; overflow:auto;}';
        document.getElementsByTagName('head')[0].appendChild(style);
            
        
        //ADD THE CLASS TO THE CONTAINERS // THE PAGE CENTER WILL BE THE MAIN SCREEN
        home.className = 'page center';
        page01.className = 'page right';
        page02.className = 'page right';

        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        new FastClick(document.body);
    },
};

/* MENU */
    /* MENU OPTIONS */
    function menu(screen){
        // SHOW THE NEW SCREEN
        document.getElementById(screen).className = 'page transition center';   
    }

    /* RETURN SCREEN FUNCTION */
    function backmenu(actual_screen, new_screen){
        // HIDE LAST SCREEN
        document.getElementById(actual_screen).className = 'page transition right';   
        // LOAD THE MENU CONTENT TO THE NEW OPTION            
        menu(new_screen);
    }
