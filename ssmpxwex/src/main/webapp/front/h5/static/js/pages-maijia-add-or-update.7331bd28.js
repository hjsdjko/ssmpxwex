(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-maijia-add-or-update"],{"22b3":function(r,e,t){"use strict";t.r(e);var i=t("c172"),a=t("5df6");for(var o in a)"default"!==o&&function(r){t.d(e,r,(function(){return a[r]}))}(o);t("eaf8");var n,l=t("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"787aeb06",null,!1,i["a"],n);e["default"]=s.exports},"5ad9":function(r,e,t){"use strict";var i=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("ac6a"),t("28a5"),t("96cf");var a=i(t("3b8d")),o=i(t("e2b1")),n={data:function(){return{ruleForm:{maijiazhanghao:"",mima:"",maijiaxingming:"",nianling:"",xingbie:"",shouji:"",youxiang:"",zhaopian:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{maijiazhanghao:!1,mima:!1,maijiaxingming:!1,nianling:!1,xingbie:!1,shouji:!1,youxiang:!1,zhaopian:!1,money:!1}}},components:{wPicker:o.default},computed:{},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(e){var t,i,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(t);case 3:if(i=r.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=14;break}return this.ruleForm.id=e.id,r.next=12,this.$api.info("maijia",this.ruleForm.id);case 12:i=r.sent,this.ruleForm=i.data;case 14:if(!e.cross){r.next=57;break}a=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(a);case 17:if((r.t1=r.t0()).done){r.next=57;break}if(o=r.t1.value,"maijiazhanghao"!=o){r.next=23;break}return this.ruleForm.maijiazhanghao=a[o],this.ro.maijiazhanghao=!0,r.abrupt("continue",17);case 23:if("mima"!=o){r.next=27;break}return this.ruleForm.mima=a[o],this.ro.mima=!0,r.abrupt("continue",17);case 27:if("maijiaxingming"!=o){r.next=31;break}return this.ruleForm.maijiaxingming=a[o],this.ro.maijiaxingming=!0,r.abrupt("continue",17);case 31:if("nianling"!=o){r.next=35;break}return this.ruleForm.nianling=a[o],this.ro.nianling=!0,r.abrupt("continue",17);case 35:if("xingbie"!=o){r.next=39;break}return this.ruleForm.xingbie=a[o],this.ro.xingbie=!0,r.abrupt("continue",17);case 39:if("shouji"!=o){r.next=43;break}return this.ruleForm.shouji=a[o],this.ro.shouji=!0,r.abrupt("continue",17);case 43:if("youxiang"!=o){r.next=47;break}return this.ruleForm.youxiang=a[o],this.ro.youxiang=!0,r.abrupt("continue",17);case 47:if("zhaopian"!=o){r.next=51;break}return this.ruleForm.zhaopian=a[o],this.ro.zhaopian=!0,r.abrupt("continue",17);case 51:if("money"!=o){r.next=55;break}return this.ruleForm.money=a[o],this.ro.money=!0,r.abrupt("continue",17);case 55:r.next=17;break;case 57:this.styleChange();case 58:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(r){this.xingbieIndex=r.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.zhaopian=r.$base.url+"upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.maijiazhanghao){r.next=3;break}return this.$utils.msg("卖家账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){r.next=9;break}return this.$utils.msg("手机应输入手机格式"),r.abrupt("return");case 9:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){r.next=12;break}return this.$utils.msg("邮箱应输入邮件格式"),r.abrupt("return");case 12:if(!this.ruleForm.money||this.$validate.isNumber(this.ruleForm.money)){r.next=15;break}return this.$utils.msg("余额应输入数字"),r.abrupt("return");case 15:if(!this.ruleForm.id){r.next=20;break}return r.next=18,this.$api.update("maijia",this.ruleForm);case 18:r.next=22;break;case 20:return r.next=22,this.$api.add("maijia",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(r){this.$refs[r].show()}}};e.default=n},"5df6":function(r,e,t){"use strict";t.r(e);var i=t("5ad9"),a=t.n(i);for(var o in i)"default"!==o&&function(r){t.d(e,r,(function(){return i[r]}))}(o);e["default"]=a.a},"7a5a":function(r,e,t){var i=t("7a8b");"string"===typeof i&&(i=[[r.i,i,""]]),i.locals&&(r.exports=i.locals);var a=t("4f06").default;a("0e4e2871",i,!0,{sourceMap:!1,shadowMode:!1})},"7a8b":function(r,e,t){var i=t("24fb");e=i(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-787aeb06]{padding:%?20?%}.content[data-v-787aeb06]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-787aeb06]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-787aeb06]{width:%?180?%}.avator[data-v-787aeb06]{width:%?150?%;height:%?60?%}.right-input[data-v-787aeb06]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-787aeb06]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-787aeb06]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-787aeb06]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-787aeb06]{border:0}.cu-form-group uni-input[data-v-787aeb06]{padding:0 %?30?%}.uni-input[data-v-787aeb06]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-787aeb06]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-787aeb06]::after{line-height:%?88?%}.select .uni-input[data-v-787aeb06]{line-height:%?88?%}.input .right-input[data-v-787aeb06]{line-height:%?110?%}',""]),r.exports=e},c172:function(r,e,t){"use strict";var i,a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("卖家账号")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.maijiazhanghao,placeholder:"卖家账号"},model:{value:r.ruleForm.maijiazhanghao,callback:function(e){r.$set(r.ruleForm,"maijiazhanghao",e)},expression:"ruleForm.maijiazhanghao"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("密码")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.mima,placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("卖家姓名")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.maijiaxingming,placeholder:"卖家姓名"},model:{value:r.ruleForm.maijiaxingming,callback:function(e){r.$set(r.ruleForm,"maijiaxingming",e)},expression:"ruleForm.maijiaxingming"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("年龄")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.nianling,placeholder:"年龄"},model:{value:r.ruleForm.nianling,callback:function(e){r.$set(r.ruleForm,"nianling",e)},expression:"ruleForm.nianling"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("性别")]),t("v-uni-picker",{attrs:{value:r.xingbieIndex,range:r.xingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("手机")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.shouji,placeholder:"手机"},model:{value:r.ruleForm.shouji,callback:function(e){r.$set(r.ruleForm,"shouji",e)},expression:"ruleForm.shouji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("邮箱")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.youxiang,placeholder:"邮箱"},model:{value:r.ruleForm.youxiang,callback:function(e){r.$set(r.ruleForm,"youxiang",e)},expression:"ruleForm.youxiang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==r.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.zhaopianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("照片")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[r.ruleForm.zhaopian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:r.ruleForm.zhaopian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[r._v("余额")]),t("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:r.ro.money,placeholder:"余额"},model:{value:r.ruleForm.money,callback:function(e){r.$set(r.ruleForm,"money",e)},expression:"ruleForm.money"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}))},eaf8:function(r,e,t){"use strict";var i=t("7a5a"),a=t.n(i);a.a}}]);