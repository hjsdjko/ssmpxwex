(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/maijia/add-or-update"],{1836:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,u){try{var o=e[i](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function o(e){i(u,a,r,o,c,"next",e)}function c(e){i(u,a,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e8b4"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{maijiazhanghao:"",mima:"",maijiaxingming:"",nianling:"",xingbie:"",shouji:"",youxiang:"",zhaopian:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{maijiazhanghao:!1,mima:!1,maijiaxingming:!1,nianling:!1,xingbie:!1,shouji:!1,youxiang:!1,zhaopian:!1,money:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(a.default.mark((function r(){var i,u,o,c;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=e.getStorageSync("nowTable"),r.next=3,t.$api.session(i);case 3:if(u=r.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=14;break}return t.ruleForm.id=n.id,r.next=12,t.$api.info("maijia",t.ruleForm.id);case 12:u=r.sent,t.ruleForm=u.data;case 14:if(!n.cross){r.next=57;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=57;break}if(c=r.t1.value,"maijiazhanghao"!=c){r.next=23;break}return t.ruleForm.maijiazhanghao=o[c],t.ro.maijiazhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=c){r.next=27;break}return t.ruleForm.mima=o[c],t.ro.mima=!0,r.abrupt("continue",17);case 27:if("maijiaxingming"!=c){r.next=31;break}return t.ruleForm.maijiaxingming=o[c],t.ro.maijiaxingming=!0,r.abrupt("continue",17);case 31:if("nianling"!=c){r.next=35;break}return t.ruleForm.nianling=o[c],t.ro.nianling=!0,r.abrupt("continue",17);case 35:if("xingbie"!=c){r.next=39;break}return t.ruleForm.xingbie=o[c],t.ro.xingbie=!0,r.abrupt("continue",17);case 39:if("shouji"!=c){r.next=43;break}return t.ruleForm.shouji=o[c],t.ro.shouji=!0,r.abrupt("continue",17);case 43:if("youxiang"!=c){r.next=47;break}return t.ruleForm.youxiang=o[c],t.ro.youxiang=!0,r.abrupt("continue",17);case 47:if("zhaopian"!=c){r.next=51;break}return t.ruleForm.zhaopian=o[c],t.ro.zhaopian=!0,r.abrupt("continue",17);case 51:if("money"!=c){r.next=55;break}return t.ruleForm.money=o[c],t.ro.money=!0,r.abrupt("continue",17);case 55:r.next=17;break;case 57:t.styleChange();case 58:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.maijiazhanghao){n.next=3;break}return e.$utils.msg("卖家账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=9;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 9:if(!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=12;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 12:if(!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){n.next=15;break}return e.$utils.msg("余额应输入数字"),n.abrupt("return");case 15:if(!e.ruleForm.id){n.next=20;break}return n.next=18,e.$api.update("maijia",e.ruleForm);case 18:n.next=22;break;case 20:return n.next=22,e.$api.add("maijia",e.ruleForm);case 22:e.$utils.msgBack("提交成功");case 23:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"231f":function(e,n,t){"use strict";var a=t("2b96"),r=t.n(a);r.a},"2b96":function(e,n,t){},3165:function(e,n,t){"use strict";t.r(n);var a=t("1836"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a},c14a:function(e,n,t){"use strict";(function(e){t("b14a");a(t("66fd"));var n=a(t("da62"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},c2ae:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},da62:function(e,n,t){"use strict";t.r(n);var a=t("c2ae"),r=t("3165");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("231f");var u,o=t("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"e6db76b8",null,!1,a["a"],u);n["default"]=c.exports}},[["c14a","common/runtime","common/vendor"]]]);