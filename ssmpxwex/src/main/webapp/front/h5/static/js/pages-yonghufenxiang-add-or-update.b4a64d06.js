(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-yonghufenxiang-add-or-update"],{"484f":function(e,r,i){"use strict";i.r(r);var t=i("911b"),n=i("e666");for(var a in n)"default"!==a&&function(e){i.d(r,e,(function(){return n[e]}))}(a);i("cab2");var o,u=i("f0c5"),s=Object(u["a"])(n["default"],t["b"],t["c"],!1,null,"c5757a46",null,!1,t["a"],o);r["default"]=s.exports},"6aab":function(e,r,i){var t=i("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-c5757a46]{padding:%?20?%}.content[data-v-c5757a46]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-c5757a46]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-c5757a46]{width:%?180?%}.avator[data-v-c5757a46]{width:%?150?%;height:%?60?%}.right-input[data-v-c5757a46]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-c5757a46]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-c5757a46]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-c5757a46]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-c5757a46]{border:0}.cu-form-group uni-input[data-v-c5757a46]{padding:0 %?30?%}.uni-input[data-v-c5757a46]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-c5757a46]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-c5757a46]::after{line-height:%?88?%}.select .uni-input[data-v-c5757a46]{line-height:%?88?%}.input .right-input[data-v-c5757a46]{line-height:%?110?%}',""]),e.exports=r},"6b1d":function(e,r,i){"use strict";var t=i("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,i("ac6a"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o={data:function(){return{ruleForm:{fenxiangbiaoti:"",fenxiangleixing:"",fenxiangneirong:"",fenxiangtupian:"",fenxiangriqi:"",zhanghao:"",xingming:"",thumbsupnum:"",crazilynum:"",clicktime:"",clicknum:"",userid:""},fenxiangleixingOptions:[],fenxiangleixingIndex:0,user:{},ro:{fenxiangbiaoti:!1,fenxiangleixing:!1,fenxiangneirong:!1,fenxiangtupian:!1,fenxiangriqi:!1,zhanghao:!1,xingming:!1,thumbsupnum:!1,crazilynum:!1,clicktime:!1,clicknum:!1,userid:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var i,t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(i);case 3:return t=e.sent,this.user=t.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,e.next=9,this.$api.option("fenxiangleixing","fenxiangleixing",{});case 9:if(t=e.sent,this.fenxiangleixingOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=19;break}return this.ruleForm.id=r.id,e.next=17,this.$api.info("yonghufenxiang",this.ruleForm.id);case 17:t=e.sent,this.ruleForm=t.data;case 19:if(!r.cross){e.next=74;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 22:if((e.t1=e.t0()).done){e.next=74;break}if(a=e.t1.value,"fenxiangbiaoti"!=a){e.next=28;break}return this.ruleForm.fenxiangbiaoti=n[a],this.ro.fenxiangbiaoti=!0,e.abrupt("continue",22);case 28:if("fenxiangleixing"!=a){e.next=32;break}return this.ruleForm.fenxiangleixing=n[a],this.ro.fenxiangleixing=!0,e.abrupt("continue",22);case 32:if("fenxiangneirong"!=a){e.next=36;break}return this.ruleForm.fenxiangneirong=n[a],this.ro.fenxiangneirong=!0,e.abrupt("continue",22);case 36:if("fenxiangtupian"!=a){e.next=40;break}return this.ruleForm.fenxiangtupian=n[a],this.ro.fenxiangtupian=!0,e.abrupt("continue",22);case 40:if("fenxiangriqi"!=a){e.next=44;break}return this.ruleForm.fenxiangriqi=n[a],this.ro.fenxiangriqi=!0,e.abrupt("continue",22);case 44:if("zhanghao"!=a){e.next=48;break}return this.ruleForm.zhanghao=n[a],this.ro.zhanghao=!0,e.abrupt("continue",22);case 48:if("xingming"!=a){e.next=52;break}return this.ruleForm.xingming=n[a],this.ro.xingming=!0,e.abrupt("continue",22);case 52:if("thumbsupnum"!=a){e.next=56;break}return this.ruleForm.thumbsupnum=n[a],this.ro.thumbsupnum=!0,e.abrupt("continue",22);case 56:if("crazilynum"!=a){e.next=60;break}return this.ruleForm.crazilynum=n[a],this.ro.crazilynum=!0,e.abrupt("continue",22);case 60:if("clicktime"!=a){e.next=64;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,e.abrupt("continue",22);case 64:if("clicknum"!=a){e.next=68;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",22);case 68:if("userid"!=a){e.next=72;break}return this.ruleForm.userid=n[a],this.ro.userid=!0,e.abrupt("continue",22);case 72:e.next=22;break;case 74:this.styleChange();case 75:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fenxiangriqiChange:function(e){this.ruleForm.fenxiangriqi=e.target.value,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fenxiangleixingChange:function(e){this.fenxiangleixingIndex=e.target.value,this.ruleForm.fenxiangleixing=this.fenxiangleixingOptions[this.fenxiangleixingIndex]},fenxiangtupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.fenxiangtupian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.fenxiangbiaoti){e.next=3;break}return this.$utils.msg("分享标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.fenxiangleixing){e.next=6;break}return this.$utils.msg("分享类型不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=9;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=12;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=15;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 15:if(this.ruleForm.userid){e.next=18;break}return this.$utils.msg("用户id不能为空"),e.abrupt("return");case 18:if(!this.ruleForm.id){e.next=23;break}return e.next=21,this.$api.update("yonghufenxiang",this.ruleForm);case 21:e.next=25;break;case 23:return e.next=25,this.$api.add("yonghufenxiang",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,i=r.getFullYear(),t=r.getMonth()+1,n=r.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"911b":function(e,r,i){"use strict";var t={"w-picker":i("e2b1").default},n=function(){var e=this,r=e.$createElement,i=e._self._c||r;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("分享标题")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.fenxiangbiaoti,placeholder:"分享标题"},model:{value:e.ruleForm.fenxiangbiaoti,callback:function(r){e.$set(e.ruleForm,"fenxiangbiaoti",r)},expression:"ruleForm.fenxiangbiaoti"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("分享类型")]),i("v-uni-picker",{attrs:{value:e.fenxiangleixingIndex,range:e.fenxiangleixingOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.fenxiangleixingChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.fenxiangleixing?e.ruleForm.fenxiangleixing:"请选择分享类型"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.fenxiangtupianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("分享图片")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.fenxiangtupian?i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.fenxiangtupian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("分享日期")]),i("v-uni-picker",{attrs:{mode:"date",value:e.ruleForm.fenxiangriqi},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.fenxiangriqiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.fenxiangriqi?e.ruleForm.fenxiangriqi:"请选择分享日期"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("账号")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.zhanghao,placeholder:"账号"},model:{value:e.ruleForm.zhanghao,callback:function(r){e.$set(e.ruleForm,"zhanghao",r)},expression:"ruleForm.zhanghao"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("姓名")]),i("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.xingming,placeholder:"姓名"},model:{value:e.ruleForm.xingming,callback:function(r){e.$set(e.ruleForm,"xingming",r)},expression:"ruleForm.xingming"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("分享内容")]),i("v-uni-textarea",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"分享内容"},model:{value:e.ruleForm.fenxiangneirong,callback:function(r){e.$set(e.ruleForm,"fenxiangneirong",r)},expression:"ruleForm.fenxiangneirong"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),i("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)},a=[];i.d(r,"b",(function(){return n})),i.d(r,"c",(function(){return a})),i.d(r,"a",(function(){return t}))},cab2:function(e,r,i){"use strict";var t=i("ddf3"),n=i.n(t);n.a},ddf3:function(e,r,i){var t=i("6aab");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var n=i("4f06").default;n("5f46da0c",t,!0,{sourceMap:!1,shadowMode:!1})},e666:function(e,r,i){"use strict";i.r(r);var t=i("6b1d"),n=i.n(t);for(var a in t)"default"!==a&&function(e){i.d(r,e,(function(){return t[e]}))}(a);r["default"]=n.a}}]);