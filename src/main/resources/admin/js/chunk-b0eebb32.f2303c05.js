(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0eebb32"],{"7fdf":function(e,t,a){"use strict";var r=function(){var e=this,t=this,a=t.$createElement,r=t._self._c||a;return r("a-drawer",{attrs:{title:"文章设置",width:t.isMobile()?"100%":"460",placement:"right",closable:"",destroyOnClose:"",visible:t.visible},on:{close:t.onClose}},[r("a-skeleton",{attrs:{active:"",loading:t.settingLoading,paragraph:{rows:24}}},[r("div",{staticClass:"post-setting-drawer-content"},[r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[t._v("基本设置")]),r("div",{staticClass:"post-setting-drawer-item"},[r("a-form",{attrs:{layout:"vertical"}},[t.needTitle?r("a-form-item",{attrs:{label:"文章标题："}},[r("a-input",{model:{value:t.selectedPost.title,callback:function(e){t.$set(t.selectedPost,"title",e)},expression:"selectedPost.title"}})],1):t._e(),r("a-form-item",{attrs:{label:"文章路径：",help:t.options.blog_url+"/archives/"+(t.selectedPost.url?t.selectedPost.url:"{auto_generate}")}},[r("a-input",{model:{value:t.selectedPost.url,callback:function(e){t.$set(t.selectedPost,"url",e)},expression:"selectedPost.url"}})],1),r("a-form-item",{attrs:{label:"访问密码："}},[r("a-input-password",{model:{value:t.selectedPost.password,callback:function(e){t.$set(t.selectedPost,"password",e)},expression:"selectedPost.password"}})],1),r("a-form-item",{attrs:{label:"发表时间："}},[r("a-date-picker",{attrs:{showTime:"",defaultValue:t.pickerDefaultValue,format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择文章发表时间"},on:{change:t.onPostDateChange,ok:t.onPostDateOk}})],1),r("a-form-item",{attrs:{label:"开启评论："}},[r("a-radio-group",{attrs:{defaultValue:!1},model:{value:t.selectedPost.disallowComment,callback:function(e){t.$set(t.selectedPost,"disallowComment",e)},expression:"selectedPost.disallowComment"}},[r("a-radio",{attrs:{value:!1}},[t._v("开启")]),r("a-radio",{attrs:{value:!0}},[t._v("关闭")])],1)],1),r("a-form-item",{attrs:{label:"是否置顶："}},[r("a-radio-group",{attrs:{defaultValue:0},model:{value:t.selectedPost.topPriority,callback:function(e){t.$set(t.selectedPost,"topPriority",e)},expression:"selectedPost.topPriority"}},[r("a-radio",{attrs:{value:1}},[t._v("是")]),r("a-radio",{attrs:{value:0}},[t._v("否")])],1)],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[t._v("分类目录")]),r("div",{staticClass:"post-setting-drawer-item"},[r("category-tree",{attrs:{categories:t.categories},model:{value:t.selectedCategoryIds,callback:function(e){t.selectedCategoryIds=e},expression:"selectedCategoryIds"}}),r("div",[r("a-form",{attrs:{layout:"vertical"}},[t.categoryFormVisible?r("a-form-item",[r("category-select-tree",{attrs:{categories:t.categories},model:{value:t.categoryToCreate.parentId,callback:function(e){t.$set(t.categoryToCreate,"parentId",e)},expression:"categoryToCreate.parentId"}})],1):t._e(),t.categoryFormVisible?r("a-form-item",[r("a-input",{attrs:{placeholder:"分类名称"},model:{value:t.categoryToCreate.name,callback:function(e){t.$set(t.categoryToCreate,"name",e)},expression:"categoryToCreate.name"}})],1):t._e(),t.categoryFormVisible?r("a-form-item",[r("a-input",{attrs:{placeholder:"分类路径"},model:{value:t.categoryToCreate.slugNames,callback:function(e){t.$set(t.categoryToCreate,"slugNames",e)},expression:"categoryToCreate.slugNames"}})],1):t._e(),r("a-form-item",[t.categoryFormVisible?r("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"primary"},on:{click:t.handlerCreateCategory}},[t._v("保存")]):t._e(),t.categoryFormVisible?t._e():r("a-button",{staticStyle:{marginRight:"8px"},attrs:{type:"dashed"},on:{click:t.toggleCategoryForm}},[t._v("新增")]),t.categoryFormVisible?r("a-button",{on:{click:t.toggleCategoryForm}},[t._v("取消")]):t._e()],1)],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[t._v("标签")]),r("div",{staticClass:"post-setting-drawer-item"},[r("a-form",{attrs:{layout:"vertical"}},[r("a-form-item",[r("TagSelect",{model:{value:t.selectedTagIds,callback:function(e){t.selectedTagIds=e},expression:"selectedTagIds"}})],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[t._v("摘要")]),r("div",{staticClass:"post-setting-drawer-item"},[r("a-form",{attrs:{layout:"vertical"}},[r("a-form-item",[r("a-input",{attrs:{type:"textarea",autosize:{minRows:5},placeholder:"不填写则会自动生成"},model:{value:t.selectedPost.summary,callback:function(e){t.$set(t.selectedPost,"summary",e)},expression:"selectedPost.summary"}})],1)],1)],1)]),r("a-divider"),r("div",{style:{marginBottom:"16px"}},[r("h3",{staticClass:"post-setting-drawer-title"},[t._v("缩略图")]),r("div",{staticClass:"post-setting-drawer-item"},[r("div",{staticClass:"post-thumb"},[r("img",{staticClass:"img",attrs:{src:t.selectedPost.thumbnail||"/images/placeholder.png"},on:{click:function(){return e.thumbDrawerVisible=!0}}}),r("a-button",{staticClass:"post-thumb-remove",attrs:{type:"dashed"},on:{click:t.handleRemoveThumb}},[t._v("移除")])],1)])]),r("a-divider",{staticClass:"divider-transparent"})],1)]),r("AttachmentSelectDrawer",{attrs:{drawerWidth:460},on:{listenToSelect:t.handleSelectPostThumb},model:{value:t.thumbDrawerVisible,callback:function(e){t.thumbDrawerVisible=e},expression:"thumbDrawerVisible"}}),r("div",{staticClass:"bottom-control"},[t.saveDraftButton?r("a-button",{staticStyle:{marginRight:"8px"},on:{click:t.handleDraftClick}},[t._v("保存草稿")]):t._e(),t.savePublishButton?r("a-button",{attrs:{type:"primary"},on:{click:t.handlePublishClick}},[t._v("发布")]):t._e(),t.saveButton?r("a-button",{attrs:{type:"primary"},on:{click:t.handlePublishClick}},[t._v("保存")]):t._e()],1)],1)},s=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),n=a("ac0d"),i=a("c1df"),c=a.n(i),l=a("eda3"),d=a("fa25"),u=a("edf6"),m=a("3993"),g=a("2f62"),h=a("c405"),f=a("caf6");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(o["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={name:"PostSetting",mixins:[n["a"],n["b"]],components:{CategoryTree:l["a"],CategorySelectTree:d["a"],TagSelect:u["a"],AttachmentSelectDrawer:m["a"]},data:function(){return{thumbDrawerVisible:!1,categoryFormVisible:!1,settingLoading:!0,selectedPost:this.post,selectedTagIds:this.tagIds,selectedCategoryIds:this.categoryIds,categories:[],categoryToCreate:{}}},props:{post:{type:Object,required:!0},tagIds:{type:Array,required:!0},categoryIds:{type:Array,required:!0},visible:{type:Boolean,required:!1,default:!0},needTitle:{type:Boolean,required:!1,default:!1},saveDraftButton:{type:Boolean,required:!1,default:!0},savePublishButton:{type:Boolean,required:!1,default:!0},saveButton:{type:Boolean,required:!1,default:!1}},created:function(){this.loadSkeleton(),this.loadCategories()},watch:{post:function(e){this.selectedPost=e},selectedPost:function(e){this.$emit("onRefreshPost",e)},tagIds:function(e){this.selectedTagIds=e},selectedTagIds:function(e){this.$emit("onRefreshTagIds",e)},categoryIds:function(e){this.selectedCategoryIds=e},selectedCategoryIds:function(e){this.$emit("onRefreshCategoryIds",e)},visible:function(e,t){e&&this.loadSkeleton()}},computed:b({pickerDefaultValue:function(){if(this.selectedPost.createTime){var e=new Date(this.selectedPost.createTime);return c()(e,"YYYY-MM-DD HH:mm:ss")}return c()(new Date,"YYYY-MM-DD HH:mm:ss")}},Object(g["c"])(["options"])),methods:{loadSkeleton:function(){var e=this;this.settingLoading=!0,setTimeout((function(){e.settingLoading=!1}),500)},loadCategories:function(){var e=this;h["a"].listAll().then((function(t){e.categories=t.data.data}))},handleSelectPostThumb:function(e){this.selectedPost.thumbnail=encodeURI(e.path),this.thumbDrawerVisible=!1},handleRemoveThumb:function(){this.selectedPost.thumbnail=null},handlerCreateCategory:function(){var e=this;this.categoryToCreate.name?h["a"].create(this.categoryToCreate).then((function(t){e.loadCategories(),e.categoryToCreate={},e.toggleCategoryForm()})):this.$notification["error"]({message:"提示",description:"分类名称不能为空！"})},toggleCategoryForm:function(){this.categoryFormVisible=!this.categoryFormVisible},handleDraftClick:function(){this.selectedPost.status="DRAFT",this.savePost()},handlePublishClick:function(){this.selectedPost.status="PUBLISHED",this.savePost()},savePost:function(){var e=this;this.createOrUpdatePost((function(){return e.$message.success("文章发布成功")}),(function(){return e.$message.success("文章发布成功")}),!1)},createOrUpdatePost:function(e,t,a){var r=this;this.selectedPost.title?this.selectedPost.originalContent?(this.selectedPost.categoryIds=this.selectedCategoryIds,this.selectedPost.tagIds=this.selectedTagIds,this.selectedPost.id?f["a"].update(this.selectedPost.id,this.selectedPost,a).then((function(e){r.$log.debug("Updated post",e.data.data),t&&(t(),r.$router.push({name:"PostList"}))})):f["a"].create(this.selectedPost,a).then((function(t){r.$log.debug("Created post",t.data.data),e&&(e(),r.$router.push({name:"PostList"})),r.selectedPost=t.data.data}))):this.$notification["error"]({message:"提示",description:"文章内容不能为空！"}):this.$notification["error"]({message:"提示",description:"文章标题不能为空！"})},onClose:function(){this.$emit("close",!1)},onPostDateChange:function(e,t){this.selectedPost.createTime=e.valueOf()},onPostDateOk:function(e){this.selectedPost.createTime=e.valueOf()}}},y=v,C=a("2877"),P=Object(C["a"])(y,r,s,!1,null,null,null);t["a"]=P.exports},c405:function(e,t,a){"use strict";a("7f7f"),a("ac6a");var r=a("9efd"),s="/api/admin/categories",o={};function n(e,t){t.forEach((function(t){e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))})),e.children?e.children.forEach((function(e){return n(e,t)})):e.isLeaf=!0}o.listAll=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:"".concat(s),params:{more:e},method:"get"})},o.listTree=function(){return Object(r["a"])({url:"".concat(s,"/tree_view"),method:"get"})},o.create=function(e){return Object(r["a"])({url:s,data:e,method:"post"})},o.delete=function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"delete"})},o.get=function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"get"})},o.update=function(e,t){return Object(r["a"])({url:"".concat(s,"/").concat(e),data:t,method:"put"})},o.concreteTree=function(e){var t={key:0,title:"top",children:[]};return n(t,e),t.children},t["a"]=o},caf6:function(e,t,a){"use strict";var r=a("9efd"),s="/api/admin/posts",o={listLatest:function(e){return Object(r["a"])({url:"".concat(s,"/latest"),params:{top:e},method:"get"})},query:function(e){return Object(r["a"])({url:s,params:e,method:"get"})},get:function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"get"})},create:function(e,t){return Object(r["a"])({url:s,method:"post",data:e,mute:t,params:{autoSave:t}})},update:function(e,t,a){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"put",data:t,params:{autoSave:a}})},updateStatus:function(e,t){return Object(r["a"])({url:"".concat(s,"/").concat(e,"/status/").concat(t),method:"put"})},delete:function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"delete"})},preview:function(e){return Object(r["a"])({url:"".concat(s,"/preview/").concat(e),method:"get"})},postStatus:{PUBLISHED:{color:"green",status:"success",text:"已发布"},DRAFT:{color:"yellow",status:"warning",text:"草稿"},RECYCLE:{color:"red",status:"error",text:"回收站"},INTIMATE:{color:"blue",status:"success",text:"私密"}}};t["a"]=o},d28d:function(e,t,a){"use strict";var r=a("9efd"),s="/api/admin/tags",o={listAll:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:s,params:{more:e},method:"get"})},createWithName:function(e){return Object(r["a"])({url:s,data:{name:e},method:"post"})},create:function(e){return Object(r["a"])({url:s,data:e,method:"post"})},update:function(e,t){return Object(r["a"])({url:"".concat(s,"/").concat(e),data:t,method:"put"})},delete:function(e){return Object(r["a"])({url:"".concat(s,"/").concat(e),method:"delete"})}};t["a"]=o},eda3:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree",{attrs:{checkable:"",treeData:e.categoryTree,defaultExpandAll:!0,checkedKeys:e.categoryIds},on:{check:e.onCheck}})},s=[],o=a("c405"),n={name:"CategoryTree",model:{prop:"categoryIds",event:"check"},props:{categoryIds:{type:Array,required:!1,default:function(){return[]}},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTree:function(){return o["a"].concreteTree(this.categories)}},methods:{onCheck:function(e,t){this.$log.debug("Chekced keys",e),this.$log.debug("e",t);var a=t.checkedNodes.filter((function(e){return e.data.props.isLeaf})).map((function(e){return e.key}));this.$log.debug("Effectively selected category ids",a),this.$emit("check",a)}}},i=n,c=a("2877"),l=Object(c["a"])(i,r,s,!1,null,null,null);t["a"]=l.exports},edf6:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-select",{staticStyle:{width:"100%"},attrs:{allowClear:"",mode:"tags",placeholder:"选择或输入标签"},on:{blur:e.handleBlur},model:{value:e.selectedTagNames,callback:function(t){e.selectedTagNames=t},expression:"selectedTagNames"}},e._l(e.tags,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.name}},[e._v(e._s(t.name))])})),1)],1)},s=[],o=(a("ac6a"),a("7f7f"),a("d28d")),n=a("bc3a"),i=a.n(n),c={name:"TagSelect",model:{prop:"tagIds",event:"change"},props:{tagIds:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{tags:[],selectedTagNames:[]}},created:function(){this.loadTags()},watch:{tags:function(e,t){var a=this;e&&(this.selectedTagNames=this.tagIds.map((function(e){return a.tagIdMap[e].name})))}},computed:{tagIdMap:function(){var e={};return this.tags.forEach((function(t){e[t.id]=t})),e},tagNameMap:function(){var e={};return this.tags.forEach((function(t){e[t.name]=t})),e}},methods:{loadTags:function(e){var t=this;o["a"].listAll(!0).then((function(a){t.tags=a.data.data,e&&e()}))},handleBlur:function(){var e=this;this.$log.debug("Blured");var t=this.selectedTagNames.filter((function(t){return!e.tagNameMap[t]}));if(this.$log.debug("Tag names to create",t),t!==[]){var a=t.map((function(e){return o["a"].createWithName(e)}));i.a.all(a).then(i.a.spread((function(){e.loadTags((function(){e.$log.debug("Tag name map",e.tagNameMap);var t=e.selectedTagNames.map((function(t){return e.tagNameMap[t].id}));e.$emit("change",t)}))})))}else{var r=this.selectedTagNames.map((function(t){return e.tagNameMap[t].id}));this.$emit("change",r)}}}},l=c,d=a("2877"),u=Object(d["a"])(l,r,s,!1,null,null,null);t["a"]=u.exports},fa25:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree-select",{attrs:{treeData:e.categoryTreeData,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:"",treeDataSimpleMode:!0,allowClear:!0,value:e.categoryIdString},on:{change:e.handleSelectionChange}})},s=[],o=(a("6b54"),a("7f7f"),a("c5f6"),{name:"CategorySelectTree",model:{prop:"categoryId",event:"change"},props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTreeData:function(){return this.categories.map((function(e){return{id:e.id,title:e.name,value:e.id.toString(),pId:e.parentId}}))},categoryIdString:function(){return this.categoryId.toString()}},methods:{handleSelectionChange:function(e,t,a){this.$log.debug("value: ",e),this.$log.debug("label: ",t),this.$log.debug("extra: ",a),this.$emit("change",e?parseInt(e):0)}}}),n=o,i=a("2877"),c=Object(i["a"])(n,r,s,!1,null,null,null);t["a"]=c.exports}}]);