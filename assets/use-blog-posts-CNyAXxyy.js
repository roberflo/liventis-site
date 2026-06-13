import{c as s,s as a}from"./index-D-er3ob1.js";import{u as t}from"./vendor-query-x9duGGBI.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);function l(){return t({queryKey:["blog-posts"],queryFn:async()=>{const{data:r,error:e}=await a.from("blog_posts").select("*").eq("published",!0).order("published_at",{ascending:!1});if(e)throw e;return r},staleTime:5*60*1e3})}export{c as T,l as u};
