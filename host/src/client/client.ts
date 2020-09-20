import type { InjectionData } from "./types/injection_data.ts";

export const getTemplate = (data: InjectionData) => {
    return `<html><head><style>body,html{margin:0;padding:0;background-color:#333}#Image{width:100%;height:100%}</style></head><body> <script>
        Object.assign(window, {
            behold: {
                file: {
                    title: "${data.file.title}",
                    base64File: {
                        data: "${data.file.base64File.data}"
                    },
                    mime: "${data.file.mime}"
                }
            }
        });
    </script> <img id="Image" alt="Not able to load image"> <script>parcelRequire=function(e,r,t,i){var n,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function a(t,i){if(!r[t]){if(!e[t]){var n="function"==typeof parcelRequire&&parcelRequire;if(!i&&n)return n(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var f=new Error("Cannot find module '"+t+"'");throw f.code="MODULE_NOT_FOUND",f}c.resolve=function(r){return e[t][1][r]||r},c.cache={};var l=r[t]=new a.Module(t);e[t][0].call(l.exports,c,l,l.exports,this)}return r[t].exports;function c(e){return a(c.resolve(e))}}a.isParcelRequire=!0,a.Module=function(e){this.id=e,this.bundle=a,this.exports={}},a.modules=e,a.cache=r,a.parent=o,a.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var f=0;f<t.length;f++)try{a(t[f])}catch(e){n||(n=e)}if(t.length){var l=a(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd&&define(function(){return l})}if(parcelRequire=a,n)throw n;return a}({QCba:[function(e,r,t){"use strict";var i,n;Object.defineProperty(t,"__esModule",{value:!0});var o=document.getElementById("Image"),u=window.behold;if(o&&void 0!==(null===(n=null===(i=null==u?void 0:u.file)||void 0===i?void 0:i.base64File)||void 0===n?void 0:n.data)){var a=u.file,f=a.mime,l=a.base64File;o.src="data:"+f+";base64, "+l.data}alert(u)},{}]},{},["QCba"]);</script> </body></html>`
};