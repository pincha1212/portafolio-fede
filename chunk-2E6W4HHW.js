import{a as _}from"./chunk-ZLRSTFNI.js";import{b as x,e as b,h as v}from"./chunk-M5URMTW5.js";import{m as u,o as y}from"./chunk-5V7XEI7E.js";import{$a as i,Ca as l,Ha as m,Oa as p,Pa as n,Qa as r,Wa as d,_a as f,ab as s,gb as g,ta as c,ua as a}from"./chunk-BDJXH6CQ.js";function I(o,t){if(o&1&&(n(0,"div",2)(1,"h1",3),i(2),r(),n(3,"p",4),i(4),r(),n(5,"div",5)(6,"button",6),i(7,"Volver "),r()()()),o&2){let e=d();c(2),s(e.proyecto.titulo),c(2),s(e.proyecto.descripcion),c(2),p("routerLink","/proyecto")}}function S(o,t){o&1&&(n(0,"p",7),i(1,"Proyecto no encontrado."),r())}var C=class o{constructor(t,e){this.route=t;this.proyectosService=e}proyecto;ngOnInit(){let t=this.route.snapshot.paramMap.get("id")||"";this.proyecto=this.proyectosService.getProyectoBySlug(t)}static \u0275fac=function(e){return new(e||o)(a(x),a(_))};static \u0275cmp=l({type:o,selectors:[["app-slugs"]],decls:3,vars:2,consts:[["notFound",""],["class","proyecto-contenedor",4,"ngIf","ngIfElse"],[1,"proyecto-contenedor"],[1,"proyecto-titulo"],[1,"proyecto-descripcion"],[1,"button-container"],[1,"proyecto-boton",3,"routerLink"],[1,"proyecto-error"]],template:function(e,P){if(e&1&&m(0,I,8,3,"div",1)(1,S,2,0,"ng-template",null,0,g),e&2){let h=f(2);p("ngIf",P.proyecto)("ngIfElse",h)}},dependencies:[y,u,v,b],styles:[".proyecto-contenedor[_ngcontent-%COMP%]{max-width:80%;margin:0 auto;padding:2rem;background:linear-gradient(135deg,#f3e6ff,#e3f6ff);border-radius:.625rem;box-shadow:0 .125rem .5rem #0000001a;animation:1s ease-in-out _ngcontent-%COMP%_fadeIn;font-family:Poppins,sans-serif}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}.proyecto-titulo[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:1.8rem;color:#5a189a;margin-bottom:15px}.proyecto-descripcion[_ngcontent-%COMP%]{font-size:18px;line-height:1.8;color:#2c3e50;font-family:Georgia,serif;margin:15px 0;text-align:justify;background-color:#f7f9fa;padding:20px;border-left:4px solid #34495e;border-radius:5px;box-shadow:0 2px 4px #0000001a}.boton-container[_ngcontent-%COMP%]{margin-top:20px;font-family:Poppins,sans-serif;display:inline-block}.proyecto-boton[_ngcontent-%COMP%]{border:none;background-color:#5a189a;color:#fff;padding:.625rem 1.25rem;border-radius:.3125rem;text-decoration:none;text-align:center;transition:background-color .3s,transform .3s;font-size:1rem;font-weight:600}.proyecto-boton[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#3c096c;transform:scale(1.05);box-shadow:0 .25rem .375rem #0000001a}.proyecto-error[_ngcontent-%COMP%]{font-size:18px;line-height:1.6;color:#e74c3c;font-family:Arial,sans-serif;background-color:#fbeaea;padding:15px 20px;margin:20px 0;text-align:center;border:2px solid #e74c3c;border-radius:5px;box-shadow:0 2px 4px #0000001a}"]})};export{C as SlugsComponent};
