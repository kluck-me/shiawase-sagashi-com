parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jxeS":[function(require,module,exports) {
var a,t="mainimage",e="photoimg",s=new Array("https://shiawase-sagashi.com/top/mainimage2.jpg","https://shiawase-sagashi.com/top/mainimage3.jpg","https://shiawase-sagashi.com/top/mainimage4.jpg","https://shiawase-sagashi.com/top/mainimage5.jpg","https://shiawase-sagashi.com/top/mainimage6.jpg","https://shiawase-sagashi.com/top/mainimage7.jpg","https://shiawase-sagashi.com/top/mainimage8.jpg","https://shiawase-sagashi.com/top/mainimage9.jpg","https://shiawase-sagashi.com/top/mainimage1.jpg"),i=3.25,o=.85,m=100,g=s.length,h=100,p=0,n=g*(m+1);function c(){var o=document.getElementById(e);a=o.src,document.getElementById(t).style.backgroundImage="url("+s[p]+")",setTimeout("photoShufflerFade()",1e3*i)}function l(){var a=document.getElementById(e),t=100/(30*o);if(h<2*t){if(h=100,n<1)return;u(),setTimeout("photoShufflerFade()",1e3*i)}else r(a,h-=t),setTimeout("photoShufflerFade()",30)}function u(){var i=document.getElementById(t),o=document.getElementById(e);o.src=s[p],r(o,100),p=++p%g,--n<1&&(s[p]=a),i.style.backgroundImage="url("+s[p]+")"}function r(a,t){t=100==t?99.999:t,a.style.filter="alpha(opacity:"+t+")",a.style.KHTMLOpacity=t/100,a.style.MozOpacity=t/100,a.style.opacity=t/100}window.onload=c;
},{}]},{},["jxeS"], null)
//# sourceMappingURL=photoshuffler.623861b5.js.map