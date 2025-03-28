// ==UserScript==
// @name         Nyxaval_sweet
// @version      3.02
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
    --ss-blue00: #211353;
    --ss-blue0: #c8edf8;
    --ss-blue1: #351382ba;
    --ss-blue2: #211353;
    --ss-blue3: #b704ae;
    --ss-blue4: #62065dd9;
    --ss-blue5: #211353;
    --ss-blue6: #b603ae40;
    --ss-blue7: #b603ae40;
    --ss-blue8: #f947c5;
    --ss-green0: #b603ae40;
    --ss-green1: #b603ae40;
    --ss-green2: #2110;
    --ss-box-shadow-1: ;
    --ss-lightbackground: linear-gradient(#b603ae38, #b603ae38);
    }
		/* root */
		:root {
			--ss-lightoverlay: url('https://r4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-2940880dd18afdbb0677781f2021963d.jpg');
			--ss-popupbackground: url('https://r4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-2940880dd18afdbb0677781f2021963d.jpg');
			--ss-me-player-bg: url('https://r4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-2940880dd18afdbb0677781f2021963d.jpg');
    }
    .text_blue5 {
    color: #ebebeb !important;
    }

    .main-menu-button svg path:nth-child(1) {
    fill: #211353 !important;
    }

    .option-box {
    box-shadow: .26em .26em 0 rgb(155 3 147 / 49%);
    }

    .weapon_img {
    background-color: #b603ae40;
    border: var(--ss-common-border-width) solid #b603aed6;
    fill: #ffffff;
   }

   .ss_button {
   border-color: #b603ae99;
   }

   .btn_blue_light {
   border-color: #b603ae99;
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
    background: color:;
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
    fill: #b704ae99;
    stroke: #b704aec7;
    stroke-width: var(--ss-common-border-width) !important;
   }

.main-menu-button {
    color: #300146;
    fill-rule: evenodd;
    fill: rgb(145 1 1);
   }

   #equip_grid .grid-item:not(.morestuff) {
    background:
        radial-gradient(circle, #4f2e9e, #000000);
;
.giveStuffPopup-content .equip_icon,.primary .equip_icon,.secondary .equip_icon {
    filter: drop-shadow(0 1.8mm 0 rgb(21 11 45));
}

.stat-wrapper .stat:nth-child(2n)>div {
    background-color: #462ba7;
}


       #ico-checkmark path {
        fill: X !important;
        }
        .player-challenges-container {
        width: X%;
        background: #211353;
        /*background: linear-gradient(180deg, rgba(93, 82, 196, 1) 60%, rgba(36, 42, 137, 1) 40%);*/
        }

  `;
})();