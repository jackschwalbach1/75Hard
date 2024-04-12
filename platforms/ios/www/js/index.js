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

  setCookie('water1-1', false);
  setCookie('water1-2', false);
  setCookie('water1-3', false);
  setCookie('water1-4', false);
  setCookie('indoor1', false);
  setCookie('outdoor1', false);
  setCookie('diet1',false);
  setCookie('pic1',false);

  function nextDay() {
    let day = parseInt(getCookie('dayCount')) || 0;
    if(day == 75){
      alert("LET'S GOOOOOOOOOOO!!!!!!!!!!\nCHALLENGE COMPLETE");
    }
    setCookie('cals', 0);
    setCookie('prot', 0);
    document.getElementById('macs').innerHTML = 'Calories: 0   Protein: 0gs';
    day++;
    document.getElementById('day').innerHTML = 'Days Complete: ' + day + '/75';
    setCookie('dayCount', day);
    resetBoard();
  }

  function resetBoard(){
    alert(getCookie('water1-1'));
    if(getCookie('water1-1') == true){
        alert("in");
        toggleStatus('water1-1', 'blue');
    }
    if(getCookie('water1-2') == true){
        toggleStatus('water1-2', 'blue');
    }
    if(getCookie('water1-3') == true){
        toggleStatus('water1-3', 'blue');
    }
    if(getCookie('water1-4') == true){
        toggleStatus('water1-4', 'blue');
    }
    if(getCookie('indoor1') == true){
        toggleStatus('indoor1', 'orange');
    }
    if(getCookie('outdoor1') == true){
        toggleStatus('outdoor1', 'green');
    }
    if(getCookie('diet1') == true){
        toggleStatus('diet1', 'purple');
    }
    if(getCookie('pic1') == true){
        toggleStatus('pic1', 'red')
    }
  }
  
  function resetDay(){
    let sure = confirm("Are you sure? This will reset your progress!");
    if(sure == true){
      setCookie('dayCount', -1);
      nextDay();
      resetBoard();
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
    let newStatus = null;
    if(status == true){
        newStatus = false;
    }
    else{
        newStatus = true;
    }
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

  document.addEventListener('deviceready', onDeviceReady, false);

  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
  

  function onDeviceReady() {
      document.getElementById('nextDayButton').addEventListener('click', nextDay);
      document.getElementById('macrosButton').addEventListener('click', updateMacros);
      document.getElementById('resetButton').addEventListener('click', resetDay);

      var waterDivs = document.querySelectorAll('.water1');
      waterDivs.forEach(function(div) {
          div.addEventListener('click', function() {
              toggleStatus(this.id, 'blue');
          });
      });

      document.getElementById('indoor1').addEventListener('click', function() {
        toggleStatus('indoor1', 'orange');
      });
      document.getElementById('outdoor1').addEventListener('click', function() {
        toggleStatus('outdoor1', 'green')
      });
      document.getElementById('diet1').addEventListener('click', function() {
        toggleStatus('diet1', 'purple')
      });
      document.getElementById('pic1').addEventListener('click', function() {
        toggleStatus('pic1', 'red')
      });
  }

  
