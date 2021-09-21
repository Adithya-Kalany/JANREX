module.exports = () => {
const css = `
@import url(https://envyxyz.github.io/removal/removal.css);
@font-face {
	font-family: gamefont;
	src: url(https://raw.githubusercontent.com/South-Paw/typeface-vag-rounded/master/files/vag-rounded-400.woff2);
}
@font-face {
	font-family: hpammo;
	src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2);
}
#gameNameHolder {
    display: none;
}
.button {
    background-color: transparent;
}
.headerBar {
    background-color: transparent;
}
#menuBtnHost {
	font-size: 0px !important;
}
#menuBtnHost:after {
	content: "Host";
	font-size: 22px !important;
}
#menuBtnRanked {
	font-size: 0px !important;
}
#menuBtnRanked:after {
	content: "Competitive";
	font-size: 22px !important;
}
#inviteButton {
	font-size: 0px !important;
}
#inviteButton:after {
	content: "Copy Link";
	font-size: 22px !important;
}
#menuBtnJoin {
	font-size: 0px !important;
}
#menuBtnJoin:after {
	content: "Paste Link";
	font-size: 22px !important;
}
#mLevelCont {
    background-color: transparent;
}
.menuItem .menuItemTitle {
    font-size: 0px !important;
}
#subLogoButtons {
    bottom: 10px;
}
#menuItemContainer {
    left: calc(50% - 420px);
    top: 10px;
    bottom: auto;
    width: 840px;
    flex-direction: row;
    background: white;
	padding-bottom: 40px;
	padding-top: 10px;
	border: 4px solid #000;;
	border-radius: 0px 0px 40px 40px;
	pointer-events: all;
	height: 26px;
	transition: 1s;
}
#menuItemContainer:hover {
	height: 69px;
	transition: 1s;
}
#termsInfo {
    background-color: transparent;
    margin-right: -40px;
}
.terms {
    font-size: 0px !important;
	pointer-events: none;
}
.standout:after {
	content: "CSS by auntPSYCHO#1000";
	font-size: 22px !important;
}
.verticalSeparatorInline {
    display: none;
}
#instructions {
	font-size: 0px !important;
}
#instructions:after {
	content: "click to krunk";
	font-size: 32px !important;
}
.voteHint {
    display: none;
}
#chatHolder {
    left: 30px ;
    bottom: 30px ;
}
#chatList {
    background-color: transparent;
}
#chatInputHolder {
    background-color: transparent;
    border: none;
}
#chatInput {
    background-color: transparent;
    border: none;
}
#initLoader {
    background-image: url("https://cdn.discordapp.com/attachments/855315193051217945/882483602208735232/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.gif");
	background-repeat: no-repeat;
	background-size: cover;
	image-rendering: pixelated;
}
#loadHeader {
	display: none;
}
#loadTipsHolder {
	display: none;
}
#loadInfoRHolder {
	display: none;
}
#loadInfoLHolder {
	display: none;
}
#lC-cont {
	display: none;
}
#loadGamNm {
	display: none;
}
#windowHolder.popupWin {
    backdrop-filter: blur(0px);
	background-color: transparent;	
}
#instructionHolder {
  backdrop-filter: saturate(0) blur(5px);
}
.menuItem:hover .menBtnIcn {
    transform: rotate(10deg) scale(1.3);
    color: black !important;
	transition: all 1s;
}
.menuItem:active .menBtnIcn {
    transform: scale(0.7) rotate(10deg);
}
.menuItem {
    background: transparent;
}
.menBtnIcn {
	color: black !important;
	transition: all 1s;
}
#uiBase.onMenu #chatHolder {
    left: 40px;
    bottom: 40px;
	background-color: black !important;
	border-radius: 40px;
	border: 4px solid white;
}
#uiBase.onMenu #chatList {
	
	border-radius: 40px;
	
}

#uiBase.onMenu #chatList::-webkit-scrollbar { 
	display: none 
}
#uiBase.onMenu #chatInputHolder {
    background-color: transparent;
    border: none;
	border-radius: 40px;
}
#uiBase.onMenu #chatInput {
    background-color: black;
    border: none;

}
#chatHolder {
    transition: all 1s cubic-bezier(0.43, 0.32, 0.35, 1.32);
}
#windowHolder {
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    transform: translateY(-100%) scale(0.1);
    display: block !important;
    z-index: 0;
    transition: all 0.5s;
    opacity: 0
}
#windowHolder[style='display: block;'] {
    content: " ";
    position: fixed;
    width: 100%;
    height: 100%;
    transform: translateY(0);
    z-index: 99999999;
    transition: all 0.5s;
    opacity: 1
}
#mapInfo {
	position: absolute;
	right: 20px;
	bottom: 40px;
	font-size: 22px !important;
	color: white !important;
}
#ammoDisplay {
	font-size: 60px;
	position: fixed;
	right: 31%;
	bottom: 31%;
}
#ammoMax {
	display: none;
}
#ammoIcon {
	display: none;
}
#ammoVal {
	color: white;
	text-shadow: 0 0 6px rgb(128, 128, 128), 0 0 10px rgb(128, 128, 128);
}
#healthValueHolder {
	background-color: transparent;
	position: fixed;
	left: calc(50% - 300px);
	bottom: 100px;
}
#healthValue {
	color: white;
	text-shadow: 0 0 6px rgb(128, 128, 128), 0 0 10px rgb(128, 128, 128);
	font-size: 84px;
}
#maxHP {
	display: none;
}
#challIcon {
	display: none;
}
#timerDisplay {
    text-align: center;
    position: fixed;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    width: 150px;
    height: 35px;
    padding: 0;
    padding-left: 0;
    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    margin-left: 0;
    margin-top: 0;
    margin-right: 0;
    margin-bottom: 0;
    border-radius: 0;
    background-color: transparent;
    will-change: unset;
}

#timerVal {
    font-size: 42px;
    padding-left: 0;
    will-change: unset;
}

#timerIcon {
    display: none;
}
#healthBar {
	display: none;
}
#hudClassIcon {
	display: none;
}
.countIcon {
	background-color: transparent;
	font-size: 20px;
}
#deathsVal::after {
	content: ' Deaths';
}
#killsVal::after {
	content: ' Kills';
}
#streakVal::after {
	content: ' Streak';
}
#myScoreVal::after {
	content: ' Score';
}
#livesDisp::after {
	content: ' Lives';
}
#killsIcon,
#deathsIcon,
#streakIcon,
#scoreCount .material-icons,
#livesCount .material-icons {
	display: none;
}
#weapDisplay {
	bottom: 15%;
	right: 46%;
}
.weapItem {
	position: absolute;
	bottom: 0;
	right: 0;
}
.weapIcon {
	filter: brightness(0) drop-shadow(-2px 0px 1px #fff) drop-shadow(0px 0px 1px #fff) drop-shadow(2px 0px 1px var(--accent));
	opacity: 0 !important;
	transition: all !important;
	transition-duration: 0.75s;
	height: 0;
}
.weapIcon[style*="1"] {
	opacity: 1 !important;
	height: 70px;
}
.weapKey {
	display: none;
}
#ammoDisplay {
    transform:unset;
    background-color:transparent;
    position:fixed;
    left:calc(50% - 40px);
    bottom:calc(50% - 60px);
    height:8px;
    width:80px;
    padding:0;
    margin:0;
}
#ammoVal {
    position:fixed;
    right:calc(50% - 300px);
    bottom:110px;
	color: white;
	text-shadow: 0 0 6px rgb(128, 128, 128), 0 0 10px rgb(128, 128, 128);
	font-size: 84px;
}
#ammoIcon,#ammoMax {
    display:none;
}
.leftUIB {
	background-color: transparent;
}
#subLogoButtons {
	background: white;
	border: 4px solid #000;
	border-radius: 40px 40px 0px 0px;
	height: 64px;
	pointer-events: all;
	transition: 1s;
}
#subLogoButtons:hover {
	height: 104px;
	transition: 1s;
}
.button.small {
	color: black;
}	
.button.small:hover {
	color: black !important;
}	
.button.lgn .material-icons, .button.lgn {
	color: black !important;
}
#signedOutHeaderBar {
	background: white;
	border: 4px solid #000;
	border-radius: 0px 0px 40px 0px; 
	position: absolute;
	left: 10px;
	top: 10px;
	pointer-events: all;
	transition: 1s;
	width: 300px;
}
#signedOutHeaderBar:hover {
	height: 100px;
	width: 350px;
	transition: 1s;
}
.headerBarRight {
	background-color: white;
	position: absolute;
	right: 10px;
	top: 10px;
	border: 4px solid #000;
	border-radius: 0px 0px 0px 40px;
	pointer-events: all;
	transition: 1s;
	height: 70px;
	width: 80px;
}
.headerBarRight:hover {
	height: 100px;
	width: 100px;
	transition: 1s;
}
#menuRegionLabel {
    color: black;
}
#menuPingDisplay, #menuFPSDisplay {
    font-size: 12px;
    color: black;
}
#menuFPSDisplay [style*="color:#9eeb56"] {
    color: #000 !important;
}
#menuPingDisplay .material-icons {
	color: black !important;
}
#menuPingText {
	color: black;
}
#ingameFPS {
	color: white !important;
}
.rankClck {
	display: none;
}
#signedInHeaderBar {
	background-color: white;
	border: 4px solid #000;
	border-bottom-right-radius: 40px !important;
	padding-right: 220px;
	left: 10px;
	top: 10px;
	width: 355px;
	pointer-events: all;
	transition: 1s;
}
#signedInHeaderBar:hover {
	height: 100px;
	width: 360px;
	transition: 1s;
}
.verticalSeparator {
	opacity: 0;
}
#menuMiniProfilePic {
	display: none;
}
#menuAccountUsername {
    color: black;
}
#menuKRCount {
    color: black;
}
#menuKRCount [style="color:#fff"] {
	color: black !important;
}
#mLevelContV {
	color: black;
	padding-right: 15px;
}
#mailIcon {
	color: black !important;
}
.progressBar {
    background: white;
}
.progressBarInner {
    background: black;
}
#customizeButton {
	border: 4px solid #000 !important;
	border-radius: 40px 40px 40px 40px;
	background-color: white !important;
	transition: transform 1s;
	color: black !important;
	width: fit-content;
	height: fit-content;
}
#customizeButton .material-icons {
	display: none;
}
.bigShadowT {
	text-shadow: none !important;
}
#customizeButton:hover {
	transform: scale(1.1);
	transition: transform 1s;
}
#policeButton {
	border: 4px solid #000 !important;
	border-radius: 40px 40px 40px 40px;
	background-color: white !important;
	transition: transform 1s;
	margin-right: 20px;
}
#policeButton:hover {
	transform: scale(1.1);
	transition: transform 1s;
}
#uiBase.onMenu .chatItem {
    word-wrap: break-word;
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 70px;
    color: #fff;
    font-size: 14px;
    max-width: 310px;
	transition: all 1s cubic-bezier(0.43, 0.32, 0.35, 1.32);
}
.chatItem {
    word-wrap: break-word;
    display: inline-block;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-left: 10px;
    color: #fff;
    font-size: 14px;
    max-width: 310px;
	transition: all 1s cubic-bezier(0.43, 0.32, 0.35, 1.32);
}
#menuWindow::-webkit-scrollbar {
	display: none;
}
`;


//--------------------------------
document.addEventListener('DOMContentLoaded', () => {document.head.appendChild(Object.assign(document.createElement('style'), {innerText: css, id: 'janrex-custom-css'}))})
}
