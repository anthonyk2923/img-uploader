(function(){"use strict";var t={7442:function(t,n,o){var r=o(9242),e=o(3396);const a={align:"center",class:"shadow-lg p-3 mb-5 bg-light rounded opacity-75"},s={id:"cards-parent-container",class:"row row-cols-1 row-cols-md-3 g-4 p-5 p-5"};function i(t,n,o,i,l,c){const u=(0,e.up)("Info"),d=(0,e.up)("BtnToggle"),m=(0,e.up)("Form"),p=(0,e.up)("Card");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",a,[(0,e.Wm)(u),(0,e.Wm)(d,{onShowFormButton:c.showFormButton,btnClass:l.btnClass,btnText:l.btnText},null,8,["onShowFormButton","btnClass","btnText"])]),(0,e.wy)((0,e.Wm)(m,{btnClass:l.btnClass,onShowFormButton:c.showFormButton,btnText:l.btnText,onPostData:t.postData},null,8,["btnClass","onShowFormButton","btnText","onPostData"]),[[r.F8,l.showForm]]),(0,e._)("div",s,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(l.data,(t=>((0,e.wg)(),(0,e.j4)(p,{key:t,data:t},null,8,["data"])))),128))])],64)}var l=o(7139);function c(t,n,o,r,a,s){return(0,e.wg)(),(0,e.iD)("button",{onClick:n[0]||(n[0]=n=>t.$emit("showFormButton")),class:(0,l.C_)(["btn",o.btnClass])},(0,l.zw)(o.btnText),3)}var u={name:"btnToggle",props:{showForm:Boolean,btnClass:String,btnText:String}},d=o(89);const m=(0,d.Z)(u,[["render",c]]);var p=m;const f={class:"p-3 m-3"},g={class:"mx-auto col-10 col-md-8 col-lg-6 bg-light shadow-lg p-3",style:{width:"40%"}},b={class:"p-4"},h={action:"/api/img",method:"POST",enctype:"multipart/form-data"},v=(0,e.uE)('<h1 align="center">Upload a Img</h1><p class="description" align="center"> Ensure the image is a .png, .jpg, .jpeg, or .gif </p><div class="form-group"><label for="file">Image:</label><input type="file" accept="image/*" class="form-control file" id="file" placeholder="Username..." name="file" required></div><div class="form-group"><label for="caption">Caption:</label><input type="text" class="form-control caption" id="caption" placeholder="Caption..." name="caption" required></div><div class="form-group"><label for="color">Image backround: </label><input type="color" style="width:100%;" id="color" name="color" value="#f8f9fa"></div><button type="submit" class="btn btn-primary mt-4 p-2 m-1"> Submit </button>',6),w=(0,e._)("hr",null,null,-1),y=(0,e._)("div",{id:"tag-id"},null,-1);function C(t,n,o,r,a,s){const i=(0,e.up)("BtnToggle");return(0,e.wg)(),(0,e.iD)("div",null,[(0,e._)("div",f,[(0,e._)("div",g,[(0,e._)("div",b,[(0,e._)("form",h,[v,(0,e.Wm)(i,{type:"button",onShowFormButton:n[0]||(n[0]=n=>t.$emit("showFormButton")),btnClass:o.btnClass,btnText:"Hide Form",class:"mt-4 p-2 m-1"},null,8,["btnClass"])])])]),w,y])])}var F={name:"Form",components:{BtnToggle:p},props:{btnClass:String}};const _=(0,d.Z)(F,[["render",C]]);var T=_;const x=(0,e._)("h1",{align:"center"},[(0,e._)("strong",null," Upload any image and get a url that you can send to others or use for any other purpose")],-1),B=(0,e._)("p",{align:"center"},[(0,e.Uk)("Click Show Form, enter a caption and select and Image, ensure it is an image and not another type of file, it must also be less than 10mb, you can shrink it with websites such as "),(0,e._)("a",{href:"https://imagecompressor.com/"},"imagecompressor.com"),(0,e.Uk)(),(0,e._)("br"),(0,e._)("strong",null,"ALL UPLOADS ARE PUBLIC AND SHOWN IN THE FEED!")],-1);function S(t,n,o,r,a,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[x,B],64)}var O={name:"Info"};const j=(0,d.Z)(O,[["render",S]]);var k=j;const D={class:"col"},I={class:"card h-100"},E={class:"center card-body"},H=["src"],P={class:"card-footer"},U={class:"text-body-secondary"},A={class:"fw-lighter"};function W(t,n,o,r,a,s){return(0,e.wg)(),(0,e.iD)("div",D,[(0,e._)("div",I,[(0,e._)("div",E,[(0,e._)("img",{src:"data:image/jpeg;base64,"+o.data.imgFile},null,8,H)]),(0,e._)("div",P,[(0,e._)("small",U,[(0,e._)("span",A,(0,l.zw)(o.data.imgCaption),1)])])])])}const Z={name:"Card",props:{data:String}},L=()=>{(0,r.sj)((t=>({"5b9a1560":t.data.color})))},N=Z.setup;Z.setup=N?(t,n)=>(L(),N(t,n)):L;var Y=Z;const q=(0,d.Z)(Y,[["render",W],["__scopeId","data-v-9279a35c"]]);var z=q,$={name:"App",components:{Form:T,BtnToggle:p,Info:k,Card:z},data(){return{showForm:!1,btnClass:"btn-success",btnText:"Show form",data:null}},methods:{showFormButton(){this.showForm=!this.showForm,1==this.showForm?(this.btnClass="btn-danger",this.btnText="Hide form"):(this.btnClass="btn-success",this.btnText="Show form")}},mounted:async function(){const t=await fetch("/api/img").then((t=>t.json()));this.data=t}};const K=(0,d.Z)($,[["render",i]]);var M=K;(0,r.ri)(M).mount("#app")}},n={};function o(r){var e=n[r];if(void 0!==e)return e.exports;var a=n[r]={exports:{}};return t[r].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(n,r,e,a){if(!r){var s=1/0;for(u=0;u<t.length;u++){r=t[u][0],e=t[u][1],a=t[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(t){return o.O[t](r[l])}))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(u--,1);var c=e();void 0!==c&&(n=c)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,e,a]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,r){var e,a,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(n){return 0!==t[n]}))){for(e in i)o.o(i,e)&&(o.m[e]=i[e]);if(l)var u=l(o)}for(n&&n(r);c<s.length;c++)a=s[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(7442)}));r=o.O(r)})();
//# sourceMappingURL=app.8583883b.js.map