import{c,s as a}from"./index-D-er3ob1.js";import{b as i}from"./vendor-query-x9duGGBI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=c("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]),n=a.rpc.bind(a);function u(){return i({mutationFn:async r=>{const{data:t,error:e}=await n("create_lead",{payload:r});if(e)throw e;return{id:t}}})}export{l as C,u};
