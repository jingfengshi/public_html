webpackJsonp([35],{518:function(e,t,i){function a(e){i(784)}var o=i(0)(i(689),i(912),a,"data-v-1e0bcf38",null);e.exports=o.exports},558:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAADQ0lEQVRoQ+2Zz1UbQQzGJa0fHOMSoIKYCgIVBCqAVBC4ZM0JcwLnAqkAUgGmAkwHpoKQCmKOycPz8XaNCc9/dmSPxviZ3ZuftTP66dNIM7NM7+zhd8ZLJfCyK14qXCq8ZBEoU3rJBB3BKRUuFV6yCMwlpfGdag6yC6DGTFUirvXjiA5AXSa0ROiWv1EndnyjAj+e0B4zHxHzmgYEQDsBjvmQ2hr7WWyiAOOE1pzw1X8lp3MtB1/FDh9Qd7o3/dbmwGjStiO+IOKqf/oiC3SFsWWd5qbAOKFNJ3ITBvr6bXtoM+B+YeKbcGWHw4WuOGzwId1bBNIM+LHJbSb+ZOHUCDLQrtSxZTG2CXBejUUuLByaNIaQ2+GUWqFzmAD3TrlDzB9DnSl+H50kxUboHMHA/RYkv1SOAA/EaIijDiXU7fWoxsz72mCJc+uhazkYuNekfSI58wIDd7KKzXG9tdeUSyLa9Y5B7iBJ6dxvN9kiHPhUzonpq88JYbcxqafijKruL7e9SoN+JHW375ur6P9gYE11BuG2kmKzyJFeUxpEdFS4FVGM4wvGXIBJoYxm06IJXHRgzfrTOKpsbT+T1O35oOKmtKoHoysrWC86DKiWhnNfKoeUFbiZn+CUzgvOP/nj8wCEViXFzjg7lbrAg6xiLfQEFQycAWjSug+KjgANrtN1/qvfw7N2lBUs3xOcztkEJsBTbT58WBP+t9h0mAFnAz2ecouZP8/I43vNRF1T4JgqW6lrCpyvZeWuyyfn0P/HSeo0a1w1rMkaHsz0vEW8J+YPqtm9RvgtK6iFVubX05gC52tZ1Ze9pLmB1Rk4KnAObXD7AeC6Use2LjR6K3OFX/or55cCM6a2fSoPQhIFOC9g2nPyGHHEua1Yl/HRgGdObcXJSp/Ao5ZRgaeu2sBdUsfzd6cQrMnvRgXO13P+JUKuvO5nh4PsY5vR/fOk+aIDazckMddt9LY0Lrqeq1zT3VRRNs1F4aJWFavfvmlKv2w9hz+2FVzdetf8jAZzU3jg30t/nlORGo7L3IEHRUzEXVp/+9WI/ibAGsdi2ZTAsSK7KOOWCi+KErH8KBWOFdlFGbdUeFGUiOVHqXCsyC7KuO9O4SdkclFM9B/H7QAAAABJRU5ErkJggg=="},689:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(15),o=i.n(a),n=(i(14),i(3),i(20)),s=i.n(n),r=i(49),d=i.n(r),c=i(9),l=i(28),h=i(10),u=i(37);t.default={name:"mapchoice",components:{Group:s.a,Cell:d.a},data:function(){return{map:null,itemlist:[],addressItem:""}},computed:o()({},i.i(c.b)(["detail","checkSetInfo"])),beforeDestroy:function(){l.a.$off("searchtextDone")},beforeRouteLeave:function(e,t,i){""!==this.addressItem&&(this.detail&&(this.detail.address=this.addressItem,this.$store.commit("updateDetail",this.detail)),this.checkSetInfo&&(this.checkSetInfo.address=this.addressItem,this.$store.commit("updateCheckSetInfo",this.checkSetInfo))),i()},mounted:function(){if(l.a.$on("searchtextDone",function(e){this.searchContent(e)}.bind(this)),""!==this.detail&&this.detail.type===h.a.SignIn&&""!==this.detail.address){var e=new BMap.Map("choicemap");this.map=e,e.centerAndZoom(this.detail.address.point,15),e.disableDragging(),e.disableDoubleClickZoom(),e.enableScrollWheelZoom(!1),e.enableContinuousZoom(!1),this.addMarkerLabel(this.detail.address.point),this.searchMap(this.detail.address.point)}else if("checkset"===this.checkSetInfo.type&&this.checkSetInfo.address.point){var e=new BMap.Map("choicemap");this.map=e;var t=new BMap.Point(this.checkSetInfo.address.point.lng,this.checkSetInfo.address.point.lat);e.centerAndZoom(t,15),e.disableDragging(),e.disableDoubleClickZoom(),e.enableScrollWheelZoom(!1),e.enableContinuousZoom(!1),this.addMarkerLabel(t),this.searchMap(t)}else{var e=new BMap.Map("choicemap");this.map=e,e.disableDragging(),e.disableDoubleClickZoom(),e.enableScrollWheelZoom(!1),e.enableContinuousZoom(!1);var i=this;if(this.$vux.loading.show({text:"位置获取中"}),"web"!==u.a&&this.isAndroid()){var a=function(t){i.$vux.loading.hide();var a=new BMap.Point(parseFloat(t.longitude),parseFloat(t.latitude));e.centerAndZoom(a,15),i.addMarkerLabel(a),i.searchMap(a)},o=function(e){i.$vux.loading.hide(),i.$vux.toast.text("定位失败","bottom")};baidu_location.getCurrentPosition(a,o)}else if("web"!==u.a&&this.isIOS()){var n=function(e){i.$vux.loading.hide(),i.$vux.toast.text("定位失败","bottom")},s=function(t){i.$vux.loading.hide();var a=new BMap.Point(parseFloat(t.coords.longitude),parseFloat(t.coords.latitude)),o=new BMap.Convertor,n=[];n.push(a),o.translate(n,1,5,function(t){if(0===t.status){var a=t.points[0];e.centerAndZoom(a,15),i.addMarkerLabel(a),i.searchMap(a)}else i.$vux.loading.hide(),i.$vux.toast.text("定位失败","bottom")})};navigator.geolocation.getCurrentPosition(s,n)}}},methods:{isAndroid:function(){var e=navigator.userAgent;return e.indexOf("Android")>-1||e.indexOf("Adr")>-1},isIOS:function(){return!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},getCity:function(e){var t=new BMap.Geocoder,i=this;t.getLocation(e,function(e){e.addressComponents;e.surroundingPois.length>0&&(i.itemlist=[],i.itemlist=e.surroundingPois)})},addMarkerLabel:function(e){this.map.clearOverlays();var t=new BMap.Icon(i(558),new BMap.Size(60,60)),a=new BMap.Marker(e,{icon:t});this.map.addOverlay(a)},selected:function(e){return this.addressItem.title===e},choicePositon:function(e){e.wktype="poi",this.addressItem=e,this.addMarkerLabel(this.addressItem.point),this.map.centerAndZoom(this.addressItem.point,15)},searchMap:function(e,t){var i=this;i.itemlist=[];var a={onSearchComplete:function(e){if(o.getStatus()==BMAP_STATUS_SUCCESS){for(var t=[],a=0;a<e.getCurrentNumPois();a++)t.push(e.getPoi(a));i.itemlist=t}},pageCapacity:20},o=new BMap.LocalSearch(this.map,a);t||(t="公司"),o.searchInBounds(t,this.map.getBounds())},searchContent:function(e){this.detail.type===h.a.SignIn&&this.detail.address.point?this.searchMap(this.detail.address.point,e):"checkset"===this.checkSetInfo.type&&this.checkSetInfo.address.point&&this.searchMap(this.checkSetInfo.address.point,e)}}}},718:function(e,t,i){t=e.exports=i(73)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"MapChoice.vue",sourceRoot:""}])},784:function(e,t,i){var a=i(718);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(476)("f534dc80",a,!0)},912:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{height:"200px",width:"100%",overflow:"hidden"},attrs:{id:"choicemap"}}),e._v(" "),a("group",{attrs:{gutter:"0"}},e._l(e.itemlist,function(t,o){return a("cell",{key:o,attrs:{title:t.title,"inline-desc":t.address},nativeOn:{click:function(i){e.choicePositon(t)}}},[a("div",{staticStyle:{width:"40px",height:"40px"}},[e.selected(t.title)?a("img",{staticStyle:{padding:"10px"},attrs:{src:i(121),height:"20",width:"20"},slot:"value"}):e._e()])])}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=35.60231bf062dc0c3d0997.js.map