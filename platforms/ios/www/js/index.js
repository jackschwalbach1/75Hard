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

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + ";expires=Fri, 31 Dec 9999 23:59:59 GMT";
  }

  function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name + "=") == 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return "";
  }

  function nextDay() {
    let day = parseInt(getCookie('dayCount')) || 0;
    if(day == 75){
      alert("LET'S FUCKING GOOOOOOOOOOO!!!!!!!!!!\nGOOD SHIT\n75 DAYS AIN'T SHIT");
    }
    setCookie('cals', 0);
    setCookie('prot', 0);
    document.getElementById('macs').innerHTML = 'Calories: 0   Protein: 0gs';
    day++;
    document.getElementById('day').innerHTML = 'Days Complete: ' + day + '/75';
    setCookie('dayCount', day);
    toggleStatus('water1-1', 'blue');
    toggleStatus('water1-2', 'blue');
    toggleStatus('water1-3', 'blue');
    toggleStatus('water1-4', 'blue');
    toggleStatus('indoor1', 'orange');
    toggleStatus('outdoor1', 'green');
    toggleStatus('diet1', 'purple');
    toggleStatus('pic1', 'red')
    
  }
  
  function resetDay(){
    let sure = confirm("Are you sure? This will reset your progress!");
    if(sure == true){
      setCookie('dayCount', -1);
      nextDay();
    }
  }
  
  function updateMacros(){
    let calories = parseInt(getCookie('cals')) || 0;
    let protein = parseInt(getCookie('prot')) || 0;
    let add_cals = prompt("Add Calories: ");
    let add_prot = prompt("Add Protein: ");
    let total_cals = calories + parseInt(add_cals);
    let total_prot = protein + parseInt(add_prot);
    setCookie('cals', total_cals);
    setCookie('prot', total_prot);
    document.getElementById('macs').innerHTML = 'Calories: ' + total_cals + '   Protein: ' + total_prot + 'gs';
  }
  
  function randoMoto(){
    let max = 5;
    let min = 1;
    let rando = Math.floor(Math.random() * (max - min + 1) ) + min;
    if(rando == 1){
      window.location.replace("https://everydaypower.com/");
    }
    else if(rando == 2){
      window.location.replace("https://www.keepinspiring.me/");
    }
    else if(rando == 3){
      window.location.replace("https://www.success.com/");
    }
    else if(rando == 4){
      window.location.replace("https://tinybuddha.com/");
    }
    else if(rando == 5){
      window.location.replace("https://addicted2success.com/");
    }
    
  }


  function fillBorder(id, name) {
    let status = getCookie(id);
    let element = document.getElementById(id);
    if (status === 'true') {
      element.style.backgroundColor = name;
    } else {
        element.style.backgroundColor = 'transparent';
      }
    }

  function toggleStatus(id, name) {
    let status = getCookie(id);
    let newStatus = (status === 'true') ? 'false' : 'true';
    setCookie(id, newStatus);
    fillBorder(id, name);
  }
  
    document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('day').innerHTML = 'Days Complete: ' + getCookie('dayCount') + '/75';
    document.getElementById('macs').innerHTML = 'Calories: ' + getCookie('cals') + '   Protein: ' + getCookie('prot')+ 'gs';
    fillBorder('water1-1', 'blue');
    fillBorder('water1-2', 'blue');
    fillBorder('water1-3', 'blue');
    fillBorder('water1-4', 'blue');
    fillBorder('indoor1', 'orange');
    fillBorder('outdoor1', 'green');
    fillBorder('diet1', 'purple');
    fillBorder('pic1', 'red');
  });