import{a as I}from"./chunk-LABBKOOS.js";import{b as y,e as S,h as x}from"./chunk-M5URMTW5.js";import{m as g,o as v}from"./chunk-5V7XEI7E.js";import{$a as r,Ca as m,Ha as l,Oa as s,Pa as n,Qa as i,Wa as u,_a as d,ab as a,gb as f,ta as c,ua as p}from"./chunk-BDJXH6CQ.js";function P(t,o){if(t&1&&(n(0,"div")(1,"h1"),r(2),i(),n(3,"p"),r(4),i()()),t&2){let e=u();c(2),a(e.proyecto.titulo),c(2),a(e.proyecto.descripcion)}}function h(t,o){t&1&&(n(0,"p"),r(1,"Proyecto no encontrado."),i())}var C=class t{constructor(o,e){this.route=o;this.proyectosService=e}proyecto;ngOnInit(){let o=this.route.snapshot.paramMap.get("id")||"";this.proyecto=this.proyectosService.getProyectoBySlug(o)}static \u0275fac=function(e){return new(e||t)(p(y),p(I))};static \u0275cmp=m({type:t,selectors:[["app-slugs"]],decls:6,vars:3,consts:[["notFound",""],[4,"ngIf","ngIfElse"],[3,"routerLink"]],template:function(e,_){if(e&1&&(l(0,P,5,2,"div",1)(1,h,2,0,"ng-template",null,0,f),n(3,"button")(4,"a",2),r(5,"Ver Proyecto"),i()()),e&2){let E=d(2);s("ngIf",_.proyecto)("ngIfElse",E),c(4),s("routerLink","/proyecto")}},dependencies:[v,g,x,S],encapsulation:2})};export{C as SlugsComponent};
