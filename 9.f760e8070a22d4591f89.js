(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1bd+":function(t,o,e){"use strict";e.r(o),e.d(o,"ProductModule",(function(){return tt}));var c=e("ofXK"),r=e("OLFy"),a=e("tyNb"),i=e("M9IT"),n=e("2Vo4"),b=e("LRne"),l=e("JIr8"),m=e("nYR2");class u{constructor(t){this.productService=t,this.productSubject=new n.a([]),this.loadingSubject=new n.a(!1),this.loading$=this.loadingSubject.asObservable()}connect(t){return this.productSubject.asObservable()}disconnect(t){this.productSubject.complete(),this.loadingSubject.complete()}loadLessons(){console.log("estamos aqui en mexico"),this.loadingSubject.next(!0),this.productService.getAll().pipe(Object(l.a)(()=>Object(b.a)([])),Object(m.a)(()=>this.loadingSubject.next(!1))).subscribe(t=>{console.log("we are over the horizon"),console.log(t),this.productSubject.next(t)})}}var s=e("fXoL"),d=e("IeDO"),f=e("/t3+"),p=e("XiUz"),g=e("bTqV"),S=e("NFeN"),h=e("znSr"),T=e("+0xr");function y(t,o){1&t&&(s.Tb(0,"th",20),s.zc(1,"id"),s.Sb())}function O(t,o){if(1&t&&(s.Tb(0,"td",21),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.Ac(t.idProducto)}}function v(t,o){1&t&&(s.Tb(0,"th",20),s.zc(1,"Nombre"),s.Sb())}function C(t,o){if(1&t&&(s.Tb(0,"td",21),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.Ac(t.nombre)}}function z(t,o){1&t&&(s.Tb(0,"th",20),s.zc(1,"Precio"),s.Sb())}function x(t,o){if(1&t&&(s.Tb(0,"td",21),s.zc(1),s.gc(2,"currency"),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.Bc(" ",s.ic(2,1,t.precio,"CLP","$")," ")}}function w(t,o){1&t&&(s.Tb(0,"th",20),s.zc(1,"Codigo de Barra"),s.Sb())}function B(t,o){if(1&t&&(s.Tb(0,"td",21),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.Bc(" ",t.codigodebarra," ")}}function P(t,o){1&t&&(s.Tb(0,"th",20),s.zc(1,"Stock"),s.Sb())}function k(t,o){if(1&t&&(s.Tb(0,"td",21),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.Bc(" ",t.stock," ")}}function L(t,o){1&t&&(s.Tb(0,"th",20),s.zc(1,"Categoria"),s.Sb())}function R(t,o){if(1&t&&(s.Tb(0,"td",21),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.Ac(t.categoria)}}function D(t,o){1&t&&s.Ob(0,"th",20)}function N(t,o){if(1&t&&(s.Tb(0,"td",22),s.Tb(1,"a",23),s.Tb(2,"mat-icon",24),s.zc(3,"edit"),s.Sb(),s.Sb(),s.Sb()),2&t){const t=o.$implicit;s.Bb(1),s.mc("routerLink","editar/",t.idProducto,"")}}function A(t,o){1&t&&s.Ob(0,"th",20)}function I(t,o){if(1&t){const t=s.Ub();s.Tb(0,"td",22),s.Tb(1,"a",25),s.bc("click",(function(e){s.rc(t);const c=o.$implicit;return s.fc().deleteProduct(e,c.idProducto)})),s.Tb(2,"mat-icon",24),s.zc(3,"backspace"),s.Sb(),s.Sb(),s.Sb()}}function F(t,o){1&t&&s.Ob(0,"tr",26)}function q(t,o){1&t&&s.Ob(0,"tr",27)}const M=function(){return[5,10,20]};let j=(()=>{class t{constructor(t){this.productService=t,this.displayedColumns=["id","nombre","precio","codigoBarra","stock","categoria","edit","delete"]}ngOnInit(){this.dataSource=new u(this.productService),this.dataSource.loadLessons()}deleteProduct(t,o){this.productService.delete(o).subscribe(t=>{this.dataSource.loadLessons()},t=>{console.log(t)})}}return t.\u0275fac=function(o){return new(o||t)(s.Nb(d.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-products"]],viewQuery:function(t,o){var e;1&t&&s.vc(i.a,!0),2&t&&s.oc(e=s.cc())&&(o.paginator=e.first)},decls:40,vars:5,consts:[["fxLayout","row","fxLayoutAlign","space-between center"],["routerLink","agregar","mat-raised-button","","color","primary"],["fxLayout","column"],["fxLayout","column","ngClass.xs","scrollable",1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","id","fxFlex","auto"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","precio"],["matColumnDef","codigoBarra"],["matColumnDef","stock"],["matColumnDef","categoria"],["matColumnDef","edit"],["mat-cell","","class","action-link",4,"matCellDef"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxFlexOffset","auto"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",1,"action-link"],[3,"routerLink"],["aria-hidden","false","aria-label","Example home icon"],["routerLink","./",1,"a-warning",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,o){1&t&&(s.Tb(0,"mat-toolbar",0),s.Tb(1,"div"),s.Tb(2,"span"),s.zc(3,"Productos"),s.Sb(),s.Sb(),s.Tb(4,"div"),s.Tb(5,"button",1),s.Tb(6,"mat-icon"),s.zc(7,"person"),s.Sb(),s.zc(8," Agregar Producto "),s.Sb(),s.Sb(),s.Sb(),s.Tb(9,"section",2),s.Tb(10,"div",3),s.Tb(11,"table",4),s.Rb(12,5),s.yc(13,y,2,0,"th",6),s.yc(14,O,2,1,"td",7),s.Qb(),s.Rb(15,8),s.yc(16,v,2,0,"th",6),s.yc(17,C,2,1,"td",7),s.Qb(),s.Rb(18,9),s.yc(19,z,2,0,"th",6),s.yc(20,x,3,5,"td",7),s.Qb(),s.Rb(21,10),s.yc(22,w,2,0,"th",6),s.yc(23,B,2,1,"td",7),s.Qb(),s.Rb(24,11),s.yc(25,P,2,0,"th",6),s.yc(26,k,2,1,"td",7),s.Qb(),s.Rb(27,12),s.yc(28,L,2,0,"th",6),s.yc(29,R,2,1,"td",7),s.Qb(),s.Rb(30,13),s.yc(31,D,1,0,"th",6),s.yc(32,N,4,1,"td",14),s.Qb(),s.Rb(33,15),s.yc(34,A,1,0,"th",6),s.yc(35,I,4,0,"td",14),s.Qb(),s.yc(36,F,1,0,"tr",16),s.yc(37,q,1,0,"tr",17),s.Sb(),s.Sb(),s.Tb(38,"div",18),s.Ob(39,"mat-paginator",19),s.Sb(),s.Sb()),2&t&&(s.Bb(11),s.lc("dataSource",o.dataSource),s.Bb(25),s.lc("matHeaderRowDef",o.displayedColumns),s.Bb(1),s.lc("matRowDefColumns",o.displayedColumns),s.Bb(2),s.lc("pageSizeOptions",s.nc(4,M)))},directives:[f.a,p.e,p.d,g.b,a.d,S.a,h.a,T.j,T.c,p.b,T.e,T.b,T.g,T.i,p.c,i.a,T.d,T.a,a.f,T.f,T.h],pipes:[c.d],styles:["mat-toolbar[_ngcontent-%COMP%]{height:7%}section[_ngcontent-%COMP%]{height:93%}table[_ngcontent-%COMP%]{width:100%}.scrollable[_ngcontent-%COMP%]{overflow-x:scroll}.a-warning[_ngcontent-%COMP%]{color:red}mat-paginator[_ngcontent-%COMP%]{font-weight:500;color:#000}"]}),t})();var _=e("3Pt+"),G=e("e5Xn"),$=e("Wp6s"),E=e("kmnG"),Q=e("qFsG"),U=e("d3UM"),H=e("FKr1"),V=e("iadO");function K(t,o){if(1&t&&(s.Tb(0,"mat-option",19),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.lc("value",t.idCategoria),s.Bb(1),s.Bc(" ",t.nombre," ")}}function X(t,o){1&t&&(s.Tb(0,"mat-error"),s.zc(1,"Porfavor seleccione una categoria"),s.Sb())}function J(t,o){if(1&t&&(s.Tb(0,"mat-option",16),s.zc(1),s.Sb()),2&t){const t=o.$implicit;s.lc("value",t.idCategoria),s.Bb(1),s.Bc(" ",t.nombre," ")}}function W(t,o){1&t&&(s.Tb(0,"mat-error"),s.zc(1,"Please choose an animal"),s.Sb())}const Y=[{path:"",component:j},{path:"agregar",component:(()=>{class t{constructor(t,o,e,c){this.formBuilder=t,this.productService=o,this.categoriaService=e,this.router=c,this.buildForm()}ngOnInit(){this.categoriaService.getAll().subscribe(t=>{this.categorias=t.categorias,console.log(t)},t=>{console.log(t)})}addProduct(t){t.preventDefault(),this.form.valid&&this.productService.add(this.form.value).subscribe(t=>{console.log(t),!0===t&&this.router.navigate(["/admin/productos"])},t=>{console.log(t)})}buildForm(){this.form=this.formBuilder.group({nombre:["",[_.p.required]],precio:["",[_.p.required]],codigodebarra:["",[_.p.required]],stock:["",[_.p.required]],categoria:["",[_.p.required]],fechaVencimiento:["",[_.p.required]]})}}return t.\u0275fac=function(o){return new(o||t)(s.Nb(_.c),s.Nb(d.a),s.Nb(G.a),s.Nb(a.c))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-add"]],decls:48,vars:6,consts:[["fxLayout","row","fxLayoutAlign","space-between center"],["fxLayout","row"],["routerLink","../","mat-icon-button","","color","primary"],["fxFlexAlign","center"],["fxLayout","column"],["id","formProduct","fxLayout","column",3,"formGroup","ngSubmit"],["fxFlex","auto"],["matInput","","formControlName","nombre","type","text"],["matInput","","formControlName","precio","type","number","min","0"],["matInput","","formControlName","stock","type","number","min","0"],["matInput","","formControlName","codigodebarra","type","text"],["formControlName","categoria","required",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matInput","","formControlName","fechaVencimiento",3,"matDatepicker","click"],["matSuffix","",3,"for"],["touchUi",""],["picker",""],["fxFlex","auto","color","primary","mat-raised-button","","form","formProduct","type","submit"],[3,"value"]],template:function(t,o){if(1&t){const t=s.Ub();s.Tb(0,"mat-toolbar",0),s.Tb(1,"div",1),s.Tb(2,"a",2),s.Tb(3,"mat-icon"),s.zc(4,"arrow_back"),s.Sb(),s.Sb(),s.Tb(5,"span",3),s.zc(6,"Agregar Producto"),s.Sb(),s.Sb(),s.Ob(7,"div"),s.Sb(),s.Tb(8,"section",4),s.Tb(9,"mat-card",4),s.Tb(10,"mat-card-content"),s.Tb(11,"form",5),s.bc("ngSubmit",(function(t){return o.addProduct(t)})),s.Tb(12,"mat-form-field",6),s.Tb(13,"mat-label"),s.zc(14,"NOMBRE:"),s.Sb(),s.Ob(15,"input",7),s.Sb(),s.Tb(16,"mat-form-field",6),s.Tb(17,"mat-label"),s.zc(18,"PRECIO:"),s.Sb(),s.Ob(19,"input",8),s.Sb(),s.Tb(20,"mat-form-field",6),s.Tb(21,"mat-label"),s.zc(22,"Stock"),s.Sb(),s.Ob(23,"input",9),s.Sb(),s.Tb(24,"mat-form-field",6),s.Tb(25,"mat-label"),s.zc(26,"CODIGO DE BARRA:"),s.Sb(),s.Ob(27,"input",10),s.Sb(),s.Tb(28,"mat-form-field"),s.Tb(29,"mat-label"),s.zc(30,"Categoria"),s.Sb(),s.Tb(31,"mat-select",11),s.Tb(32,"mat-option"),s.zc(33,"--"),s.Sb(),s.yc(34,K,2,2,"mat-option",12),s.Sb(),s.yc(35,X,2,0,"mat-error",13),s.Tb(36,"mat-hint"),s.zc(37),s.Sb(),s.Sb(),s.Tb(38,"mat-form-field"),s.Tb(39,"mat-label"),s.zc(40,"Ingrese la fecha de vencimiento"),s.Sb(),s.Tb(41,"input",14),s.bc("click",(function(){return s.rc(t),s.pc(44).open()})),s.Sb(),s.Ob(42,"mat-datepicker-toggle",15),s.Ob(43,"mat-datepicker",16,17),s.Sb(),s.Sb(),s.Sb(),s.Tb(45,"mat-card-actions",1),s.Tb(46,"button",18),s.zc(47," AGREGAR PRODUCTO "),s.Sb(),s.Sb(),s.Sb(),s.Sb()}if(2&t){const t=s.pc(44);s.Bb(11),s.lc("formGroup",o.form),s.Bb(23),s.lc("ngForOf",o.categorias),s.Bb(1),s.lc("ngIf",o.form.get("categoria").getError("required")),s.Bb(2),s.Ac(null==o.form.get("categoria").value?null:o.form.get("categoria").value.sound),s.Bb(4),s.lc("matDatepicker",t),s.Bb(1),s.lc("for",t)}},directives:[f.a,p.e,p.d,a.f,g.a,S.a,p.a,$.a,$.d,_.q,_.k,_.e,E.c,p.b,E.g,Q.b,_.b,_.j,_.d,_.m,U.a,_.o,H.k,c.k,c.l,E.f,V.b,V.d,E.h,V.a,$.b,g.b,E.b],styles:["mat-toolbar[_ngcontent-%COMP%]{height:7%}section[_ngcontent-%COMP%]{height:93%}mat-card[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})()},{path:"editar/:id",component:(()=>{class t{constructor(t,o,e,c,r){this.formBuilder=t,this.activatedRoute=o,this.productService=e,this.router=c,this.categoriaService=r,this.buildForm()}ngOnInit(){this.getAllCategories(),this.activatedRoute.params.subscribe(t=>{this.id=t.id,this.productService.get(this.id).subscribe(t=>{this.form.setValue({nombre:t.nombre,precio:t.precio,codigodebarra:t.codigodebarra,stock:t.stock,categoria:t.idCategoria})},t=>{console.log(t)})})}ngOnDestroy(){}editProduct(t){if(t.preventDefault(),this.form.valid){let t=this.form.value;t.idProducto=this.id,this.productService.edit(t).subscribe(t=>{!0===t&&this.router.navigate(["/admin/productos"])},t=>{console.log(t)})}}buildForm(){this.form=this.formBuilder.group({nombre:["",[_.p.required]],precio:["",[_.p.required]],codigodebarra:["",[_.p.required]],stock:["",[_.p.required]],categoria:["",[_.p.required]]})}getAllCategories(){this.categoriaService.getAll().subscribe(t=>{this.categorias=t.categorias,console.log(t)},t=>{console.log(t)})}}return t.\u0275fac=function(o){return new(o||t)(s.Nb(_.c),s.Nb(a.a),s.Nb(d.a),s.Nb(a.c),s.Nb(G.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-edit"]],decls:41,vars:5,consts:[["fxLayout","row","fxLayoutAlign","space-between center"],["fxLayout","row"],["routerLink","../../","mat-icon-button","","color","primary"],["fxFlexAlign","center"],["fxLayout","column","fxLayoutAlign","center center"],["fxLayout","column"],["id","formProduct","fxLayout","column",3,"formGroup","ngSubmit"],["fxFlex","auto"],["matInput","","formControlName","nombre","type","text"],["matInput","","formControlName","precio","type","number","min","0"],["matInput","","formControlName","codigodebarra","type","text"],["matInput","","formControlName","stock","type","number","min","0"],["formControlName","categoria","required",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["fxFlex","auto","color","primary","mat-raised-button","","form","formProduct","type","submit"],[3,"value"]],template:function(t,o){1&t&&(s.Tb(0,"mat-toolbar",0),s.Tb(1,"div",1),s.Tb(2,"a",2),s.Tb(3,"mat-icon"),s.zc(4,"arrow_back"),s.Sb(),s.Sb(),s.Tb(5,"span",3),s.zc(6),s.Sb(),s.Sb(),s.Ob(7,"div"),s.Sb(),s.Tb(8,"section",4),s.Tb(9,"mat-card",5),s.Tb(10,"mat-card-content"),s.Tb(11,"form",6),s.bc("ngSubmit",(function(t){return o.editProduct(t)})),s.Tb(12,"mat-form-field",7),s.Tb(13,"mat-label"),s.zc(14,"NOMBRE:"),s.Sb(),s.Ob(15,"input",8),s.Sb(),s.Tb(16,"mat-form-field",7),s.Tb(17,"mat-label"),s.zc(18,"PRECIO:"),s.Sb(),s.Ob(19,"input",9),s.Sb(),s.Tb(20,"mat-form-field",7),s.Tb(21,"mat-label"),s.zc(22,"CODIGO DE BARRA:"),s.Sb(),s.Ob(23,"input",10),s.Sb(),s.Tb(24,"mat-form-field",7),s.Tb(25,"mat-label"),s.zc(26,"Stock"),s.Sb(),s.Ob(27,"input",11),s.Sb(),s.Tb(28,"mat-form-field"),s.Tb(29,"mat-label"),s.zc(30,"Categoria"),s.Sb(),s.Tb(31,"mat-select",12),s.Tb(32,"mat-option"),s.zc(33,"--"),s.Sb(),s.yc(34,J,2,2,"mat-option",13),s.Sb(),s.yc(35,W,2,0,"mat-error",14),s.Tb(36,"mat-hint"),s.zc(37),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(38,"mat-card-actions",1),s.Tb(39,"button",15),s.zc(40," AGREGAR PRODUCTO "),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Bb(6),s.Bc("Producto ID: ",o.id,""),s.Bb(5),s.lc("formGroup",o.form),s.Bb(23),s.lc("ngForOf",o.categorias),s.Bb(1),s.lc("ngIf",o.form.get("categoria").getError("required")),s.Bb(2),s.Ac(null==o.form.get("categoria").value?null:o.form.get("categoria").value.sound))},directives:[f.a,p.e,p.d,a.f,g.a,S.a,p.a,$.a,$.d,_.q,_.k,_.e,E.c,p.b,E.g,Q.b,_.b,_.j,_.d,_.m,U.a,_.o,H.k,c.k,c.l,E.f,$.b,g.b,E.b],styles:["mat-card[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{width:100%}mat-form-field[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(o){return new(o||t)},imports:[[a.g.forChild(Y)],a.g]}),t})(),tt=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(o){return new(o||t)},imports:[[c.c,Z,r.a,_.n,_.f]]}),t})()}}]);