"use strict"
const $=(y)=>document.querySelector(y);
const $$=(y)=>document.querySelectorAll(y);


	function ajxpost(key,val){
		let opt = {
			headers: {
				"Accept": "text/plain",
				"Content-Type": "application/x-www-form-urlencoded"
			},
			method: "POST",
			body : key+"/"+val		
		};	
		let u = 'http://82.145.73.169:8888/'+key+'/'+val; 
		fetch(u,opt)
		.then(function(e){return e.json()})
		.then(function(json){
			if(json){
            $('#radio').innerHTML =(JSON.stringify(json[0]));
            $('#title').textContent = json[0].title;
            $('#info').textContent  = json[0].info;
            
         }
      }).catch(function(err) { });
	} //ajaxpost




// DOM READY
document.addEventListener('DOMContentLoaded', function() {
   $('#info').innerHTML = 'dom ready'
   ajxpost("radio","info");
   setInterval(function(){ajxpost("radio","info")},60000);
});// dom ready


let pogody = [
'https://www.yr.no/place/Poland/West_Pomerania/Szczecin/avansert_meteogram.png',
'https://www.yr.no/place/Poland/West_Pomerania/Szczecin_Dąbie/avansert_meteogram.png',
'https://www.yr.no/place/Poland/Masovia/Warsaw/avansert_meteogram.png',
'https://www.yr.no/place/Poland/Kuyavian-Pomerania/Bydgoszcz/avansert_meteogram.png',
'https://www.yr.no/place/Germany/Berlin/Berlin/avansert_meteogram.png'
];

let pokazPogoda =function(nr){
   $('#info').innerHTML = '<img src="'+pogody[nr]+'">'
}
let pokazInfo =function(nr){
   $('#info').innerHTML = '<img src="'+pogody[1]+'">'
}
let JasnoCiemno = function(nr){
   if(nr===0) {document.body.style.background = '#fff';document.body.style.color = '#000';}
   if(nr===1) {document.body.style.background = '#666';document.body.style.color = '#fff';}
}



/*
{
	"type": "info",
	"active": "4",
	"title": "Polskie Radio S.A. -- Program 1 -- http://moje.polskieradio.pl",
	"info": "Polskie Radio S.A. -- Program 1 -- http://moje.polskieradio.pl\n[playing] #4/65   0:00/0:00 (0%)\nvolume: 89%   repeat: off   random: off   single: on    consume: off",
	"vol": "89",
	"extra": "",
	"actualPlaylist": "radio",
	"mm": ["#4/65   0:00/0:00 (0%)\nvolume: 89%   repeat: off   random: off   single: on ", "4", "89", "off", "off", "on"],
	"rnd": "off",
	"repeat": "off",
	"single": "on"
}
*/
