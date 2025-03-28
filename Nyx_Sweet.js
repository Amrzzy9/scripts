// ==UserScript==
// @name         Nyxaval_sweet
// @version      1.1
// @description  A ss theme made by Nyxaval
// @author       Nyxaval(ryz.9)
// @match        https://*.shellshock.io/*
// @match        https://algebra.best/*
// @match        https://algebra.vip/*
// @match        https://biologyclass.club/*
// @match        https://deadlyegg.com/*
// @match        https://deathegg.world/*
// @match        https://egg.dance/*
// @match        https://eggboy.club/*
// @match        https://eggboy.xyz/*
// @match        https://eggcombat.com/*
// @match        https://eggfacts.fun/*
// @match        https://egghead.institute/*
// @match        https://eggisthenewblack.com/*
// @match        https://eggsarecool.com/*
// @match        https://eggshooter.best/*
// @match        https://geometry.best/*
// @match        https://geometry.monster/*
// @match        https://geometry.pw/*
// @match        https://geometry.report/*
// @match        https://hardboiled.life/*
// @match        https://hardshell.life/*
// @match        https://humanorganising.org/*
// @match        https://mathactivity.xyz/*
// @match        https://mathdrills.info/*
// @match        https://mathdrills.life/*
// @match        https://mathfun.rocks/*
// @match        https://mathgames.world/*
// @match        https://math.international/*
// @match        https://mathlete.fun/*
// @match        https://mathlete.pro/*
// @match        https://overeasy.club/*
// @match        https://scrambled.best/*
// @match        https://scrambled.tech/*
// @match        https://scrambled.today/*
// @match        https://scrambled.us/*
// @match        https://scrambled.world/*
// @match        https://shellsocks.com/*
// @match        https://shellshockers.club/*
// @match        https://shellshockers.site/*
// @match        https://shellshockers.us/*
// @match        https://shellshockers.world/*
// @match        https://shellshockers.xyz/*
// @match        https://softboiled.club/*
// @match        https://urbanegger.com/*
// @match        https://violentegg.club/*
// @match        https://violentegg.fun/*
// @match        https://yolk.best/*
// @match        https://yolk.life/*
// @match        https://yolk.quest/*
// @match        https://yolk.rocks/*
// @match        https://yolk.tech/*
// @match        https://yolk.today/*
// @match        https://zygote.cafe/*
// @icon         https://i.ibb.co/t4kwBKK/EggsRezz.png
// ==/UserScript==

(function() {
  const css = document.createElement('style');

  document.body.appendChild(css).textContent = `
/*--------------DO NOT EDIT ANYTHING OR IT WILL BE UR PROBLEM--------------------------------------------------*/

:root {
--select-border: #777;
    --select-focus: blue;
    --select-arrow: var(--select-border);
    --ss-transparent: #00000000;
    --ss-black: #000;
    --ss-adblocker-text: #003449;
    --ss-white: #FFFFFF;
    --ss-offwhite: #FFF3E4;
    --ss-yellow0: #F7FFC1;
    --ss-yellow: #FAF179;
    --ss-yolk0: #351382;
    --ss-yolk: #211353;
    --ss-yolk2: #351382;
    --ss-red0: #e29092;
    --ss-red: #d15354;
    --ss-red2: #801919;
    --ss-egg-org: #EE2524;
    --ss-red-bright: #EF3C39;
    --ss-pink: #EC008C;
    --ss-pink1: #b9006e;
    --ss-pink-light: #ff3aaf;
    --ss-pink-dark: #a7098c;
    --ss-brown: #7e0761e0;
    --ss-blue00: #351f6b;
    --ss-blue0: #211353;
    --ss-blue1: #351382ba;
    --ss-blue2: #211353;
    --ss-blue3: #7134bd;
    --ss-blue4: #62065dd9;
    --ss-blue5: #211353;
    --ss-blue6: #b603ae40;
    --ss-blue7: #b603ae40;
    --ss-blue8: #ce98ee;
    --ss-green0: #b603ae40;
    --ss-green1: #b603ae40;
    --ss-green2: #2110;
    --ss-box-shadow-1: ;
    }
		/* root */
		:root {
			--ss-lightoverlay: url('https://raw.githubusercontent.com/Amrzzy9/scripts/refs/heads/main/heaven1_upscaled.jpeg');
			--ss-popupbackground: url('https://raw.githubusercontent.com/Amrzzy9/scripts/refs/heads/main/heaven1_upscaled.jpeg');
			--ss-me-player-bg: url('https://raw.githubusercontent.com/Amrzzy9/scripts/refs/heads/main/heaven1_upscaled.jpeg');
    }
    .text_blue5 {
    color: #ebebeb !important;
    }

    .main-menu-button svg path:nth-child(1) {
    fill: #211353 !important;
    }

.current-screen .main-nav-item-bg, .main-menu-button:hover .main-nav-item-bg {
    fill: #8f44d2;
    }


.weapon_img {
    background-color: #130533;
    border: var(--ss-common-border-width) solid #ce98ee;
    fill: #ffffff;
}

.egg-color-select {
    border: .2em solid #130533;
}

.ss_button {
    border-color: #cd97ee;
}

.btn_blue_light {
    border-color: #cd97ee;
}

   .main-menu-button {
   color: #b603ae;
   }

   .btn_game_mode .open-close i {
    color: #b603ae99;
   }

   .media-item {
    color: #ffffff;
   }

   .label {
    color: #ffffffd9;
    }

    .text_blue4 {
    color: #ffffffd9 !important;
    }

    #settingsPopup h2, #settingsPopup h3, #settingsPopup h4 {
    color: #ffffff;
    }


    .egg-color-select {
    border: .2em solid #b603ae5c;

   }

   .stream_item a {
    color: #ffffff;
   }
   .menu-item {
    box-shadow: 3px 3px 10px rgba(255, 0, 0, 0.5); /* Changed to red shadow */
   }

.main-nav-item-bg {
    fill: #cd97ee;
    stroke: #340a57;
}

.main-menu-button {
    color: #300146;
    fill-rule: evenodd;
    fill: rgb(145 1 1);
   }

#equip_grid .grid-item:not(.morestuff) {
    background: radial-gradient(circle, #d499f8, #581084db);
}

.giveStuffPopup-content .equip_icon,.primary .equip_icon,.secondary .equip_icon {
    filter: drop-shadow(0 2mm 0 rgb(14 7 49))
}



.stat-wrapper .stat:nth-child(2n)>div {
    background-color: #7134bd;
}
.stat-wrapper .stat:nth-child(odd)>div {
    background-color: #7134bd !important;
}

     .player-challenges-container {
        width: X%;
        background: rgb(33, 19, 83);
    }

  `;
})();