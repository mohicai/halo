(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78dfb9ad"],{"12de":function(e,t,a){"use strict";var n=a("9efd"),o="/api/admin/themes",i={listAll:function(){return Object(n["a"])({url:"".concat(o),method:"get"})},listFilesActivated:function(){return Object(n["a"])({url:"".concat(o,"/activation/files"),method:"get"})},listFiles:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/files"),method:"get"})},customTpls:function(){return Object(n["a"])({url:"".concat(o,"/files/custom"),method:"get"})},active:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/activation"),method:"post"})},getActivatedTheme:function(){return Object(n["a"])({url:"".concat(o,"/activation"),method:"get"})},update:function(e){return Object(n["a"])({url:"".concat(o,"/fetching/").concat(e),timeout:6e4,method:"put"})},delete:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e),method:"delete"})},fetchConfiguration:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/configurations"),method:"get"})},fetchSettings:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/settings"),method:"get"})},saveSettings:function(e,t){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/settings"),data:t,method:"post"})},getProperty:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e),method:"get"})},upload:function(e,t,a){return Object(n["a"])({url:"".concat(o,"/upload"),timeout:864e5,data:e,onUploadProgress:t,cancelToken:a,method:"post"})},updateByUpload:function(e,t,a,i){return Object(n["a"])({url:"".concat(o,"/upload/").concat(i),timeout:864e5,data:e,onUploadProgress:t,cancelToken:a,method:"put"})},fetching:function(e){return Object(n["a"])({url:"".concat(o,"/fetching"),timeout:6e4,params:{uri:e},method:"post"})},getContent:function(e){return Object(n["a"])({url:"".concat(o,"/files/content"),params:{path:e},method:"get"})}};i.getContent=function(e,t){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/files/content"),params:{path:t},method:"get"})},i.saveContent=function(e,t){return Object(n["a"])({url:"".concat(o,"/files/content"),data:{path:e,content:t},method:"put"})},i.saveContent=function(e,t,a){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/files/content"),data:{path:t,content:a},method:"put"})},i.reload=function(){return Object(n["a"])({url:"".concat(o,"/reload"),method:"post"})},i.exists=function(e){return Object(n["a"])({url:"".concat(o,"/activation/template/exists"),method:"get",params:{template:e}})},t["a"]=i},ed66:function(e,t,a){"use strict";var n=a("9efd"),o="/api/admin/sheets",i={list:function(){return Object(n["a"])({url:o,method:"get"})},listInternal:function(){return Object(n["a"])({url:"".concat(o,"/internal"),method:"get"})},get:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e),method:"get"})},create:function(e,t){return Object(n["a"])({url:o,method:"post",data:e,params:{autoSave:t}})},update:function(e,t,a){return Object(n["a"])({url:"".concat(o,"/").concat(e),method:"put",data:t,params:{autoSave:a}})},updateStatus:function(e,t){return Object(n["a"])({url:"".concat(o,"/").concat(e,"/").concat(t),method:"put"})},delete:function(e){return Object(n["a"])({url:"".concat(o,"/").concat(e),method:"delete"})},preview:function(e){return Object(n["a"])({url:"".concat(o,"/preview/").concat(e),method:"get"})},sheetStatus:{PUBLISHED:{color:"green",status:"success",text:"已发布"},DRAFT:{color:"yellow",status:"warning",text:"草稿"},RECYCLE:{color:"red",status:"error",text:"回收站"}}};t["a"]=i},f542:function(e,t,a){"use strict";var n=function(){var e=this,t=this,a=t.$createElement,n=t._self._c||a;return n("a-drawer",{attrs:{title:"页面设置",width:t.isMobile()?"100%":"460",placement:"right",closable:"",destroyOnClose:"",visible:t.visible},on:{close:t.onClose}},[n("a-skeleton",{attrs:{active:"",loading:t.settingLoading,paragraph:{rows:18}}},[n("div",{staticClass:"post-setting-drawer-content"},[n("div",{style:{marginBottom:"16px"}},[n("h3",{staticClass:"post-setting-drawer-title"},[t._v("基本设置")]),n("div",{staticClass:"post-setting-drawer-item"},[n("a-form",{attrs:{layout:"vertical"}},[t.needTitle?n("a-form-item",{attrs:{label:"页面标题："}},[n("a-input",{model:{value:t.selectedSheet.title,callback:function(e){t.$set(t.selectedSheet,"title",e)},expression:"selectedSheet.title"}})],1):t._e(),n("a-form-item",{attrs:{label:"页面路径：",help:t.options.blog_url+"/s/"+(t.selectedSheet.url?t.selectedSheet.url:"{auto_generate}")}},[n("a-input",{model:{value:t.selectedSheet.url,callback:function(e){t.$set(t.selectedSheet,"url",e)},expression:"selectedSheet.url"}})],1),n("a-form-item",{attrs:{label:"发表时间："}},[n("a-date-picker",{attrs:{showTime:"",defaultValue:t.pickerDefaultValue,format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择页面发表时间"},on:{change:t.onSheetDateChange,ok:t.onSheetDateOk}})],1),n("a-form-item",{attrs:{label:"开启评论："}},[n("a-radio-group",{attrs:{defaultValue:!1},model:{value:t.selectedSheet.disallowComment,callback:function(e){t.$set(t.selectedSheet,"disallowComment",e)},expression:"selectedSheet.disallowComment"}},[n("a-radio",{attrs:{value:!1}},[t._v("开启")]),n("a-radio",{attrs:{value:!0}},[t._v("关闭")])],1)],1),n("a-form-item",{attrs:{label:"自定义模板："}},[n("a-select",{model:{value:t.selectedSheet.template,callback:function(e){t.$set(t.selectedSheet,"template",e)},expression:"selectedSheet.template"}},[n("a-select-option",{key:"",attrs:{value:""}},[t._v("无")]),t._l(t.customTpls,(function(e){return n("a-select-option",{key:e,attrs:{value:e}},[t._v(t._s(e))])}))],2)],1)],1)],1)]),n("a-divider"),n("div",{style:{marginBottom:"16px"}},[n("h3",{staticClass:"post-setting-drawer-title"},[t._v("缩略图")]),n("div",{staticClass:"post-setting-drawer-item"},[n("div",{staticClass:"sheet-thumb"},[n("img",{staticClass:"img",attrs:{src:t.selectedSheet.thumbnail||"/images/placeholder.png"},on:{click:function(){return e.thumbDrawerVisible=!0}}}),n("a-button",{staticClass:"sheet-thumb-remove",attrs:{type:"dashed"},on:{click:t.handlerRemoveThumb}},[t._v("移除")])],1)])]),n("a-divider",{staticClass:"divider-transparent"})],1)]),n("AttachmentSelectDrawer",{attrs:{drawerWidth:460},on:{listenToSelect:t.handleSelectSheetThumb},model:{value:t.thumbDrawerVisible,callback:function(e){t.thumbDrawerVisible=e},expression:"thumbDrawerVisible"}}),n("div",{staticClass:"bottom-control"},[n("a-button",{staticStyle:{marginRight:"8px"},on:{click:t.handleDraftClick}},[t._v("保存草稿")]),n("a-button",{attrs:{type:"primary"},on:{click:t.handlePublishClick}},[t._v("发布")])],1)],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("ac0d"),r=a("c1df"),c=a.n(r),l=a("3993"),u=a("2f62"),h=a("12de"),d=a("ed66");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={name:"SheetSetting",mixins:[s["a"],s["b"]],components:{AttachmentSelectDrawer:l["a"]},data:function(){return{thumbDrawerVisible:!1,settingLoading:!0,selectedSheet:this.sheet,customTpls:[]}},props:{sheet:{type:Object,required:!0},needTitle:{type:Boolean,required:!1,default:!1},visible:{type:Boolean,required:!1,default:!0}},created:function(){this.loadSkeleton(),this.loadCustomTpls()},watch:{sheet:function(e){this.selectedSheet=e},selectedSheet:function(e){this.$emit("onRefreshSheet",e)},visible:function(e,t){e&&this.loadSkeleton()}},computed:f({pickerDefaultValue:function(){if(this.selectedSheet.createTime){var e=new Date(this.selectedSheet.createTime);return c()(e,"YYYY-MM-DD HH:mm:ss")}return c()(new Date,"YYYY-MM-DD HH:mm:ss")}},Object(u["c"])(["options"])),methods:{loadSkeleton:function(){var e=this;this.settingLoading=!0,setTimeout((function(){e.settingLoading=!1}),500)},loadCustomTpls:function(){var e=this;h["a"].customTpls().then((function(t){e.customTpls=t.data.data}))},handleSelectSheetThumb:function(e){this.selectedSheet.thumbnail=encodeURI(e.path),this.thumbDrawerVisible=!1},handlerRemoveThumb:function(){this.selectedSheet.thumbnail=null},handlePublishClick:function(){this.selectedSheet.status="PUBLISHED",this.saveSheet()},handleDraftClick:function(){this.selectedSheet.status="DRAFT",this.saveSheet()},saveSheet:function(){var e=this;this.createOrUpdateSheet((function(){return e.$message.success("页面发布成功！")}),(function(){return e.$message.success("页面发布成功！")}),!1)},createOrUpdateSheet:function(e,t,a){var n=this;this.selectedSheet.title?this.selectedSheet.originalContent?this.selectedSheet.id?d["a"].update(this.selectedSheet.id,this.selectedSheet,a).then((function(e){n.$log.debug("Updated sheet",e.data.data),t&&t()})):d["a"].create(this.selectedSheet,a).then((function(t){n.$log.debug("Created sheet",t.data.data),e&&e(),n.selectedSheet=t.data.data})):this.$notification["error"]({message:"提示",description:"页面内容不能为空！"}):this.$notification["error"]({message:"提示",description:"页面标题不能为空！"})},onClose:function(){this.$emit("close",!1)},onSheetDateChange:function(e,t){this.selectedSheet.createTime=e.valueOf()},onSheetDateOk:function(e){this.selectedSheet.createTime=e.valueOf()}}},g=p,b=a("2877"),S=Object(b["a"])(g,n,o,!1,null,null,null);t["a"]=S.exports},f585:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"page-header-index-wide"},[n("a-row",{attrs:{gutter:12}},[n("a-col",{attrs:{span:24}},[n("div",{staticStyle:{"margin-bottom":"16px"}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入页面标题"}]}],expression:"['title', { rules: [{ required: true, message: '请输入页面标题' }] }]"}],attrs:{size:"large",placeholder:"请输入页面标题"},model:{value:t.sheetToStage.title,callback:function(e){t.$set(t.sheetToStage,"title",e)},expression:"sheetToStage.title"}})],1),n("div",{attrs:{id:"editor"}},[n("halo-editor",{ref:"md",attrs:{boxShadow:!1,toolbars:t.toolbars,ishljs:!0,autofocus:!1},on:{imgAdd:t.handleAttachmentUpload},nativeOn:{keydown:[function(e){return(e.type.indexOf("key")||83===e.keyCode)&&e.ctrlKey?t.handleSaveDraft(e):null},function(e){return(e.type.indexOf("key")||83===e.keyCode)&&e.metaKey?t.handleSaveDraft(e):null}]},model:{value:t.sheetToStage.originalContent,callback:function(e){t.$set(t.sheetToStage,"originalContent",e)},expression:"sheetToStage.originalContent"}})],1)])],1),n("SheetSetting",{attrs:{sheet:t.sheetToStage,visible:t.sheetSettingVisible},on:{close:t.onSheetSettingsClose,onRefreshSheet:t.onRefreshSheetFromSetting}}),n("AttachmentDrawer",{model:{value:t.attachmentDrawerVisible,callback:function(e){t.attachmentDrawerVisible=e},expression:"attachmentDrawerVisible"}}),n("footer-tool-bar",{style:{width:t.isSideMenu()&&t.isDesktop()?"calc(100% - "+(t.sidebarOpened?256:80)+"px)":"100%"}},[n("a-button",{attrs:{type:"danger"},on:{click:t.handleSaveDraft}},[t._v("保存草稿")]),n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handlePreview}},[t._v("预览")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:t.handleShowSheetSetting}},[t._v("发布")]),n("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"dashed"},on:{click:function(){return e.attachmentDrawerVisible=!0}}},[t._v("附件库")])],1)],1)},o=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("ac0d"),r=a("2f62"),c=a("c1df"),l=a.n(c),u=a("2749"),h=a("f542"),d=a("ed4e"),m=a("5a70"),f=a("6ea2"),p=(a("6648"),a("ed66")),g=a("a796");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={components:{haloEditor:f["haloEditor"],FooterToolBar:m["a"],AttachmentDrawer:d["a"],SheetSetting:h["a"]},mixins:[s["a"],s["b"]],data:function(){return{toolbars:u["a"],wrapperCol:{xl:{span:24},sm:{span:24},xs:{span:24}},attachmentDrawerVisible:!1,sheetSettingVisible:!1,sheetToStage:{}}},beforeRouteEnter:function(e,t,a){var n=e.query.sheetId;a((function(e){n&&p["a"].get(n).then((function(t){var a=t.data.data;e.sheetToStage=a}))}))},destroyed:function(){this.sheetSettingVisible&&(this.sheetSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),window.onbeforeunload=null},beforeRouteLeave:function(e,t,a){if(this.sheetSettingVisible&&(this.sheetSettingVisible=!1),this.attachmentDrawerVisible&&(this.attachmentDrawerVisible=!1),this.sheetToStage.originalContent){var n=window.confirm("当前页面数据未保存，确定要离开吗？");n?a():a(!1)}else a()},mounted:function(){window.onbeforeunload=function(e){return e=e||window.event,e&&(e.returnValue="当前页面数据未保存，确定要离开吗？"),"当前页面数据未保存，确定要离开吗？"}},computed:S({},Object(r["c"])(["options"])),methods:{handleSaveDraft:function(){var e=this;this.sheetToStage.status="DRAFT",this.sheetToStage.title||(this.sheetToStage.title=l()(new Date).format("YYYY-MM-DD-HH-mm-ss")),this.sheetToStage.originalContent||(this.sheetToStage.originalContent="开始编辑..."),this.sheetToStage.id?p["a"].update(this.sheetToStage.id,this.sheetToStage,!1).then((function(t){e.$log.debug("Updated sheet",t.data.data),e.$message.success("保存草稿成功！")})):p["a"].create(this.sheetToStage,!1).then((function(t){e.$log.debug("Created sheet",t.data.data),e.$message.success("保存草稿成功！"),e.sheetToStage=t.data.data}))},handleAttachmentUpload:function(e,t){var a=this,n=new FormData;n.append("file",t),g["a"].upload(n).then((function(t){var n=t.data;if(200===n.status){var o=a.$refs.md;o.$img2Url(e,encodeURI(n.data.path)),a.$message.success("图片上传成功！")}else a.$message.error("图片上传失败："+n.message)}))},handleShowSheetSetting:function(){this.sheetSettingVisible=!0},handlePreview:function(){var e=this;this.sheetToStage.status="DRAFT",this.sheetToStage.title||(this.sheetToStage.title=l()(new Date).format("YYYY-MM-DD-HH-mm-ss")),this.sheetToStage.originalContent||(this.sheetToStage.originalContent="开始编辑..."),this.sheetToStage.id?p["a"].update(this.sheetToStage.id,this.sheetToStage,!1).then((function(t){e.$log.debug("Updated sheet",t.data.data),p["a"].preview(e.sheetToStage.id).then((function(e){window.open(e.data,"_blank")}))})):p["a"].create(this.sheetToStage,!1).then((function(t){e.$log.debug("Created sheet",t.data.data),e.sheetToStage=t.data.data,p["a"].preview(e.sheetToStage.id).then((function(e){window.open(e.data,"_blank")}))}))},onSheetSettingsClose:function(){this.sheetSettingVisible=!1},onRefreshSheetFromSetting:function(e){this.sheetToStage=e}}},w=v,O=a("2877"),D=Object(O["a"])(w,n,o,!1,null,null,null);t["default"]=D.exports}}]);