(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"P\u0159elo\u017eit",1:"Zru\u0161it",2:"Zav\u0159\u00edt",3:function(a){return"Google tuto str\u00e1nku automaticky p\u0159elo\u017eil do jazyka: "+a},4:function(a){return"P\u0159elo\u017eeno do jazyka: "+a},5:"Chyba: Server v\u00e1\u0161 po\u017eadavek nemohl dokon\u010dit. Zkuste to znovu pozd\u011bji.",6:"Dal\u0161\u00ed informace",7:function(a){return"Pou\u017e\u00edv\u00e1 technologii "+a},8:"P\u0159eklada\u010d",9:"Prob\u00edh\u00e1 p\u0159eklad",10:function(a){return"Chcete tuto str\u00e1nku p\u0159elo\u017eit pomoc\u00ed P\u0159eklada\u010de Google do jazyka: "+
(a+"?")},11:function(a){return"Zobrazit tuto str\u00e1nku v jazyce: "+a},12:"Zobrazit p\u016fvodn\u00ed",13:"Obsah tohoto m\u00edstn\u00edho souboru bude pomoc\u00ed zabezpe\u010den\u00e9ho p\u0159ipojen\u00ed odesl\u00e1n Googlu k p\u0159ekladu.",14:"Obsah t\u00e9to zabezpe\u010den\u00e9 str\u00e1nky bude pomoc\u00ed zabezpe\u010den\u00e9ho p\u0159ipojen\u00ed odesl\u00e1n Googlu k p\u0159ekladu.",15:"Obsah t\u00e9to intranetov\u00e9 str\u00e1nky bude pomoc\u00ed zabezpe\u010den\u00e9ho p\u0159ipojen\u00ed odesl\u00e1n Googlu k p\u0159ekladu.",
16:"Vyberte jazyk",17:function(a){return"Vypnout p\u0159eklady jazyka "+a},18:function(a){return"Vypnout pro jazyk: "+a},19:"V\u017edy skr\u00fdt",20:"P\u016fvodn\u00ed text:",21:"Navrhnout lep\u0161\u00ed p\u0159eklad",22:"P\u0159isp\u011bt",23:"P\u0159elo\u017eit v\u0161e",24:"Obnovit v\u0161e",25:"Zru\u0161it v\u0161e",26:"P\u0159elo\u017eit \u010d\u00e1sti do m\u00e9ho jazyka",27:function(a){return"P\u0159elo\u017eit v\u0161e do jazyka "+a},28:"Zobrazit p\u016fvodn\u00ed jazyky",29:"Mo\u017enosti",
30:"Pro tento web vypnout p\u0159eklad",31:null,32:"Zobrazit alternativn\u00ed p\u0159eklady",33:"Kliknut\u00edm na v\u00fd\u0161e uveden\u00e1 slova z\u00edsk\u00e1te alternativn\u00ed p\u0159eklady",34:"Odeslat",35:"Po\u0159ad\u00ed zm\u011bn\u00edte p\u0159eta\u017een\u00edm s kl\u00e1vesou Shift",36:"Kliknut\u00edm zobraz\u00edte alternativn\u00ed p\u0159eklady",37:"Slova uveden\u00e1 v\u00fd\u0161e p\u0159eskup\u00edte tak, \u017ee stisknete kl\u00e1vesu Shift, kliknete a p\u0159et\u00e1hnete je pomoc\u00ed my\u0161i.",
38:"D\u011bkujeme, \u017ee jste p\u0159isp\u011bli sv\u00fdm n\u00e1vrhem p\u0159ekladu do P\u0159eklada\u010de Google.",39:"Spr\u00e1va p\u0159ekladu pro tento web",40:"Kliknut\u00edm na slovo zobraz\u00edte alternativn\u00ed p\u0159eklady. Dvojit\u00fdm kliknut\u00edm lze p\u0159eklad p\u0159\u00edmo upravit.",41:"P\u016fvodn\u00ed text",42:"P\u0159eklada\u010d",43:"P\u0159elo\u017eit",44:"Va\u0161e oprava byla odesl\u00e1na.",45:"Chyba: Jazyk webov\u00e9 str\u00e1nky nen\u00ed podporov\u00e1n.",
46:"Widget p\u0159ekladu jazyk\u016f"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_cs.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(g._pas+g._pah+A);else{var C=g._pas+g._pah+A,D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=resourcesUrl+"/js/element_main.js";var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)