(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4912:function(e,t,a){Promise.resolve().then(a.bind(a,2315))},2315:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var d=a(7437);let c=e=>e instanceof HTMLElement,f=e=>{let t;for(let d of e.childNodes){var a;if(c(d)&&d.childNodes.length?t=f(d):d.nodeType===Node.TEXT_NODE&&(null===(a=d.textContent)||void 0===a?void 0:a.trim())&&(t=d),t)break}return t};class i{init(){let{element:e,hiddenTrigger:t}=this;e.addEventListener("click",e=>this.handleClick(e)),t.addEventListener("copy",e=>this.handleCopy(e))}createHiddenTrigger(){let{element:e}=this,t=document.createElement("button");return t.contentEditable="true",Object.assign(t.style,{position:"absolute",clip:"rect(1px, 1px, 1px, 1px)",clipPath:"inset(0px 0px 99.9% 99.9%)",overflow:"hidden",height:"1px",width:"1px",padding:"0",border:"0"}),(e.parentElement||document.body).appendChild(t),t}handleClick(e){e.preventDefault(),this.hiddenTrigger.focus(),document.execCommand("copy")}handleCopy(e){try{var t;null===(t=e.clipboardData)||void 0===t||t.setData("application/json",JSON.stringify(this.copyData).trim()),e.preventDefault(),this.triggerNotification("success")}catch(e){this.triggerNotification("error")}}triggerNotification(e){let{notificationActive:t,notificationDuration:a,originalText:d,element:c,successCSSClass:f,successText:i,errorText:b}=this;t||(this.notificationActive=!0,this.textNode.textContent="success"===e?i:b,f&&c.classList.add(f),window.setTimeout(()=>{this.textNode.textContent=d,f&&c.classList.remove(f),this.notificationActive=!1},a))}updateCopyData(e){this.copyData=e}updateTextContent(e){this.textNode.textContent=e,this.originalText=e}constructor({element:e,copyData:t,successText:a,errorText:d,notificationDuration:c,successCSSClass:i}){this.successText="Copied!",this.errorText="Something went wrong",this.notificationDuration=500,this.notificationActive=!1,this.element=e,this.copyData=t,a&&(this.successText=a),d&&(this.errorText=d),c&&(this.notificationDuration=c),i&&(this.successCSSClass=i),this.textNode=f(e)||e,this.originalText=this.textNode.textContent||"",this.hiddenTrigger=this.createHiddenTrigger(),this.init()}}var b=JSON.parse('{"type":"@webflow/XscpData","payload":{"nodes":[{"_id":"47a36371-d483-13ac-5cf8-12b76882b2c3","type":"DOM","tag":"div","classes":["ffd69b22-6479-bb55-02db-1470da03155a"],"children":["2d4d53c0-a0cf-6ca0-8218-82892b06ba6e","2564cdb7-3289-838b-6c0d-4e49c048d38c","e9a5cb42-df28-9ec1-553e-4a97a62c67dd"],"data":{"tag":"table","attributes":[]}},{"_id":"2d4d53c0-a0cf-6ca0-8218-82892b06ba6e","type":"DOM","tag":"div","classes":["7c44a6d8-7114-4f96-9b7e-4bcf31d97fb6"],"children":["4c151c3d-bd0d-b686-0bb0-b942af984a5f"],"data":{"tag":"thead","attributes":[]}},{"_id":"4c151c3d-bd0d-b686-0bb0-b942af984a5f","type":"DOM","tag":"div","classes":["e543ce88-0894-d738-cafc-24ff93208133"],"children":["8c2ddbce-8621-d926-3b35-adb0fa6b544e","97a2503c-bf7a-42a4-b84c-12f47a881eb7","6926dee7-4f89-9419-5add-abf10e45808a","4c6a0cee-eb3f-bcbe-a776-f6e9bb8d78f9"],"data":{"tag":"tr","attributes":[]}},{"_id":"8c2ddbce-8621-d926-3b35-adb0fa6b544e","type":"DOM","tag":"div","classes":["3321c920-00e3-1281-a0a8-5db010a7cea4"],"children":["046e0b69-646c-75a9-e3a0-ab06edc16557"],"data":{"tag":"th","attributes":[]}},{"_id":"046e0b69-646c-75a9-e3a0-ab06edc16557","text":true,"v":"Header"},{"_id":"97a2503c-bf7a-42a4-b84c-12f47a881eb7","type":"DOM","tag":"div","classes":["3321c920-00e3-1281-a0a8-5db010a7cea4"],"children":["701ecdb7-493d-76e0-ba9c-85c146666681"],"data":{"tag":"th","attributes":[]}},{"_id":"701ecdb7-493d-76e0-ba9c-85c146666681","text":true,"v":"Header"},{"_id":"6926dee7-4f89-9419-5add-abf10e45808a","type":"DOM","tag":"div","classes":["3321c920-00e3-1281-a0a8-5db010a7cea4"],"children":["33b340ce-b136-4e3a-52ee-7e83bfce352f"],"data":{"tag":"th","attributes":[]}},{"_id":"33b340ce-b136-4e3a-52ee-7e83bfce352f","text":true,"v":"Header"},{"_id":"4c6a0cee-eb3f-bcbe-a776-f6e9bb8d78f9","type":"DOM","tag":"div","classes":["3321c920-00e3-1281-a0a8-5db010a7cea4"],"children":["fa6aaa1f-ed6d-e5f8-5651-5cffafd27510"],"data":{"tag":"th","attributes":[]}},{"_id":"fa6aaa1f-ed6d-e5f8-5651-5cffafd27510","text":true,"v":"Header"},{"_id":"2564cdb7-3289-838b-6c0d-4e49c048d38c","type":"DOM","tag":"div","classes":["4d3737e4-3f1e-5af0-e700-b6f79acb0e4e"],"children":["8631de20-dd69-1542-e8ac-23b472a44ac4","431670d1-c3c9-29db-97c9-7334ce757b63","3673ed36-ba9a-a167-b7d8-d1b209314c46","39ed4aad-0639-f242-2503-53bf29cae3ce"],"data":{"tag":"tbody","attributes":[]}},{"_id":"8631de20-dd69-1542-e8ac-23b472a44ac4","type":"DOM","tag":"div","classes":["e543ce88-0894-d738-cafc-24ff93208133"],"children":["756c4721-0943-5888-c072-40cb00570143","b4e1b8f7-fd95-2466-39b1-b87246c2bc0a","9d08458c-6315-3c79-4ffe-c1d102bdc69e","035fb73e-9405-584d-f148-306db8751ee5"],"data":{"tag":"tr","attributes":[]}},{"_id":"756c4721-0943-5888-c072-40cb00570143","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["9f47bd40-20bd-74d9-f840-f488ff1dae7d"],"data":{"tag":"td","attributes":[]}},{"_id":"9f47bd40-20bd-74d9-f840-f488ff1dae7d","text":true,"v":"Cell"},{"_id":"b4e1b8f7-fd95-2466-39b1-b87246c2bc0a","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["4d1bab5d-2955-5d59-b68c-5c0f98dea734"],"data":{"tag":"td","attributes":[]}},{"_id":"4d1bab5d-2955-5d59-b68c-5c0f98dea734","text":true,"v":"Cell"},{"_id":"9d08458c-6315-3c79-4ffe-c1d102bdc69e","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["b78190a8-fab5-6c1b-b0d6-54b7b1d229d5"],"data":{"tag":"td","attributes":[]}},{"_id":"b78190a8-fab5-6c1b-b0d6-54b7b1d229d5","text":true,"v":"Cell"},{"_id":"035fb73e-9405-584d-f148-306db8751ee5","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["0132c194-46a1-8e4f-6882-48463d73ef12"],"data":{"tag":"td","attributes":[]}},{"_id":"0132c194-46a1-8e4f-6882-48463d73ef12","text":true,"v":"Cell"},{"_id":"431670d1-c3c9-29db-97c9-7334ce757b63","type":"DOM","tag":"div","classes":["e543ce88-0894-d738-cafc-24ff93208133"],"children":["0da7d041-249b-aedc-09fe-3c881344a70a","8c122151-3b61-ee5a-5af3-798170832a7f","acce2ce4-4296-f477-d8ed-c39ea2501442","38989d7d-e401-50f7-55f8-1322ec421ef9"],"data":{"tag":"tr","attributes":[]}},{"_id":"0da7d041-249b-aedc-09fe-3c881344a70a","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["ebcfb1e6-e800-2915-1ffd-9d002ce56b0a"],"data":{"tag":"td","attributes":[]}},{"_id":"ebcfb1e6-e800-2915-1ffd-9d002ce56b0a","text":true,"v":"Cell"},{"_id":"8c122151-3b61-ee5a-5af3-798170832a7f","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["1279490b-3075-dda4-bfe1-d5c2d8706e92"],"data":{"tag":"td","attributes":[]}},{"_id":"1279490b-3075-dda4-bfe1-d5c2d8706e92","text":true,"v":"Cell"},{"_id":"acce2ce4-4296-f477-d8ed-c39ea2501442","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["117fce0e-df0d-afa6-cf2f-a1809bb64af1"],"data":{"tag":"td","attributes":[]}},{"_id":"117fce0e-df0d-afa6-cf2f-a1809bb64af1","text":true,"v":"Cell"},{"_id":"38989d7d-e401-50f7-55f8-1322ec421ef9","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["9ff7e606-ff8c-5799-aff8-e7417f2d89d1"],"data":{"tag":"td","attributes":[]}},{"_id":"9ff7e606-ff8c-5799-aff8-e7417f2d89d1","text":true,"v":"Cell"},{"_id":"3673ed36-ba9a-a167-b7d8-d1b209314c46","type":"DOM","tag":"div","classes":["e543ce88-0894-d738-cafc-24ff93208133"],"children":["c6fadffb-e982-f871-be20-1e645bd045ea","5154a50b-9737-73c2-c410-fd24cedd9c7c","2b211e2d-e148-26b3-fbaa-528b3a081c10","6504cc1c-8c8d-9479-db1f-f758f3104865"],"data":{"tag":"tr","attributes":[]}},{"_id":"c6fadffb-e982-f871-be20-1e645bd045ea","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["0d4718e0-f6f7-728b-3500-4655afb4241b"],"data":{"tag":"td","attributes":[]}},{"_id":"0d4718e0-f6f7-728b-3500-4655afb4241b","text":true,"v":"Cell"},{"_id":"5154a50b-9737-73c2-c410-fd24cedd9c7c","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["b22b0f70-846c-c270-964e-a09a3eed09ee"],"data":{"tag":"td","attributes":[]}},{"_id":"b22b0f70-846c-c270-964e-a09a3eed09ee","text":true,"v":"Cell"},{"_id":"2b211e2d-e148-26b3-fbaa-528b3a081c10","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["69d4ef2e-7c01-0a3b-9934-0a05d4406bbf"],"data":{"tag":"td","attributes":[]}},{"_id":"69d4ef2e-7c01-0a3b-9934-0a05d4406bbf","text":true,"v":"Cell"},{"_id":"6504cc1c-8c8d-9479-db1f-f758f3104865","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["0b41bc19-7f1e-35bf-197d-b7da1b01638d"],"data":{"tag":"td","attributes":[]}},{"_id":"0b41bc19-7f1e-35bf-197d-b7da1b01638d","text":true,"v":"Cell"},{"_id":"39ed4aad-0639-f242-2503-53bf29cae3ce","type":"DOM","tag":"div","classes":["e543ce88-0894-d738-cafc-24ff93208133"],"children":["374fbe5d-23a9-4662-944f-875d990f98b0","7618f109-3f61-4aaa-7f12-f6a50e1ad60b","5ee34258-4d5a-6ab9-0da9-6ca09e0902b1","5e9b04b9-73e3-9e7c-e592-29704846b839"],"data":{"tag":"tr","attributes":[]}},{"_id":"374fbe5d-23a9-4662-944f-875d990f98b0","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["aa49a1b6-429b-ef86-4365-6a4670a93182"],"data":{"tag":"td","attributes":[]}},{"_id":"aa49a1b6-429b-ef86-4365-6a4670a93182","text":true,"v":"Cell"},{"_id":"7618f109-3f61-4aaa-7f12-f6a50e1ad60b","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["c6f5599c-b668-8c78-67e4-6b930d828576"],"data":{"tag":"td","attributes":[]}},{"_id":"c6f5599c-b668-8c78-67e4-6b930d828576","text":true,"v":"Cell"},{"_id":"5ee34258-4d5a-6ab9-0da9-6ca09e0902b1","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["36008d24-bbed-59dc-c37f-9c0eaa1ea999"],"data":{"tag":"td","attributes":[]}},{"_id":"36008d24-bbed-59dc-c37f-9c0eaa1ea999","text":true,"v":"Cell"},{"_id":"5e9b04b9-73e3-9e7c-e592-29704846b839","type":"DOM","tag":"div","classes":["4b49f2d7-273e-9470-1ff8-c00371cd03ee"],"children":["e4f8ef1f-56e0-2a37-664f-95d3ba88a176"],"data":{"tag":"td","attributes":[]}},{"_id":"e4f8ef1f-56e0-2a37-664f-95d3ba88a176","text":true,"v":"Cell"},{"_id":"e9a5cb42-df28-9ec1-553e-4a97a62c67dd","type":"DOM","tag":"div","classes":["93e01399-28fe-cece-f178-0d45c6f04e72"],"children":["c85e54ef-4a97-0b84-e609-099dfec89efd"],"data":{"tag":"caption","attributes":[]}},{"_id":"c85e54ef-4a97-0b84-e609-099dfec89efd","text":true,"v":"Sample Caption"}],"styles":[{"_id":"ffd69b22-6479-bb55-02db-1470da03155a","fake":false,"type":"class","name":"table_component","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null},{"_id":"7c44a6d8-7114-4f96-9b7e-4bcf31d97fb6","fake":false,"type":"class","name":"table_head","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null},{"_id":"e543ce88-0894-d738-cafc-24ff93208133","fake":false,"type":"class","name":"table_row","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null},{"_id":"3321c920-00e3-1281-a0a8-5db010a7cea4","fake":false,"type":"class","name":"table_header","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null},{"_id":"4d3737e4-3f1e-5af0-e700-b6f79acb0e4e","fake":false,"type":"class","name":"table_body","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null},{"_id":"4b49f2d7-273e-9470-1ff8-c00371cd03ee","fake":false,"type":"class","name":"table_cell","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null},{"_id":"93e01399-28fe-cece-f178-0d45c6f04e72","fake":false,"type":"class","name":"table_caption","namespace":"","comb":"","styleLess":"","variants":{},"children":[],"createdBy":null,"selector":null}],"assets":[],"ix1":[],"ix2":{"interactions":[],"events":[],"actionLists":[]}},"meta":{"unlinkedSymbolCount":0,"droppedLinks":0,"dynBindRemovedCount":0,"dynListBindRemovedCount":0,"paginationRemovedCount":0,"universalBindingsRemovedCount":0}}');function s(){let e=async()=>{let e=document.getElementById("buttonous");console.log(e),e&&new i({element:e,copyData:b,successText:"Copied! Paste in Webflow",errorText:"Didn't work"})};return(0,d.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24",children:[(0,d.jsx)("div",{className:"text-white",children:"Welcome to Webflow!"}),(0,d.jsx)("button",{id:"buttonous",type:"button",className:"text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2",onClick:e,children:"Click Me!"})]})}},622:function(e,t,a){"use strict";var d=a(2265),c=Symbol.for("react.element"),f=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,a){var d,s={},l=null,n=null;for(d in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(n=t.ref),t)f.call(t,d)&&!b.hasOwnProperty(d)&&(s[d]=t[d]);if(e&&e.defaultProps)for(d in t=e.defaultProps)void 0===s[d]&&(s[d]=t[d]);return{$$typeof:c,type:e,key:l,ref:n,props:s,_owner:i.current}}t.jsx=s,t.jsxs=s},7437:function(e,t,a){"use strict";e.exports=a(622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=4912)}),_N_E=e.O()}]);