(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1423:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var o=n(14),r=n(8),a=n(13);function i(e){r.a.dispatch({action:a.a.EditEvent,event:null,timelineRenderingType:e.timelineRenderingType}),r.a.dispatch({action:a.a.FocusSendMessageComposer,context:e.timelineRenderingType})}function c(e,t){const n=t.getEvent().replacingEvent();!n||n.status!==o.EventStatus.QUEUED&&n.status!==o.EventStatus.NOT_SENT||e.cancelPendingEvent(n)}},1537:function(e,t,n){"use strict";n.r(t),n.d(t,"sendMessage",(function(){return R})),n.d(t,"editMessage",(function(){return W}));var o=n(27),r=n.n(o),a=n(33),i=n(110),c=n(5),s=n(364),l=n(224),d=n(429),m=n(656),u=n(8),p=n(359),g=n(1423),b=n(1),y=n.n(b),f=n(1445),v=n(14),O=n(47),h=n(143),j=n(280);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){y()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const T="/me ";const w=e=>e instanceof v.MatrixEvent;async function C(e,t,{relation:n,replyToEvent:o,permalinkCreator:r,includeReplyLegacyFallback:a=!0,editedEvent:i}){const s=w(i),l=s?Boolean(i.replyEventId):w(o),d=s&&l,m=e.startsWith(T);m&&(e=e.slice(T.length)),e.startsWith("//")&&(e=e.slice(1));const u=t?await Object(f.richToPlain)(e):function(e){const t=(new DOMParser).parseFromString(e,"text/html");return Array.from(t.querySelectorAll("a[data-mention-type]")).forEach((e=>{switch(e.getAttribute("data-mention-type")){case"at-room":e.replaceWith("@room");break;case"user":{const t=e.innerHTML;e.replaceWith(t);break}case"room":{const t=e.getAttribute("href");if(null===t)break;const n=Object(O.h)(t);Object(j.a)(n)&&Object(j.a)(n.roomIdOrAlias)&&e.replaceWith(n.roomIdOrAlias);break}}})),t.body.innerHTML}(e),p=d&&function(e){const t=e.getContent().body;if("string"!=typeof t)return"";const n=t.split("\n").map((e=>e.trim()));return n.length>2&&n[0].startsWith("> ")&&0===n[1].length?`${n[0]}\n\n`:""}(i)||"",g=d&&function(e){const t=e.getContent().formatted_body;if(!t)return"";const n=(new DOMParser).parseFromString(t,"text/html").body.querySelector("mx-reply");return n&&n.outerHTML||""}(i)||"",b={msgtype:m?v.MsgType.Emote:v.MsgType.Text,body:s?`${p} * ${u}`:u},y=c.b.getValue("MessageComposerInput.useMarkdown"),E=t?e:y?await Object(f.plainToRich)(e,!0):null;E&&(b.format="org.matrix.custom.html",b.formatted_body=s?`${g} * ${E}`:E),s&&(b["m.new_content"]={msgtype:b.msgtype,body:u},E&&(b["m.new_content"].format="org.matrix.custom.html",b["m.new_content"].formatted_body=E));return function(e,t){t&&(e["m.relates_to"]=_(_({},e["m.relates_to"]||{}),t))}(b,s?_(_({},n),{},{rel_type:"m.replace",event_id:i.getId()}):n),!s&&o&&r&&Object(h.a)(b,o,{permalinkCreator:r,includeLegacyFallback:a}),b}var M=n(129),k=n(256),x=n(13),S=n(355);const P=["roomContext","mxClient"];async function R(e,t,n){var o;let{roomContext:p,mxClient:g}=n,b=r()(n,P);const{relation:y,replyToEvent:f,permalinkCreator:v}=b,{room:O}=p,j=null==O?void 0:O.roomId;if(!j)return;const E={eventName:"Composer",isEditing:!1,isReply:Boolean(f),inThread:(null==y?void 0:y.rel_type)===a.d.name};i.a.instance.trackEvent(E);let _=null;if(e.startsWith("/")&&!e.startsWith("//")&&!e.startsWith(T)){const{cmd:t,args:n}=Object(M.d)(e);if(t){const e=(null==y?void 0:y.rel_type)===a.d.name?null==y?void 0:y.event_id:null;let o;if([_,o]=await Object(k.c)(g,t,n,j,null!=e?e:null),!o)return;if(!_||t.category!==M.a.messages&&t.category!==M.a.effects)return;var w,R;Object(S.b)(_,y),f&&Object(h.a)(_,f,{permalinkCreator:v,includeLegacyFallback:null===(w=null===(R=_.msgtype)||void 0===R?void 0:R.startsWith("m."))||void 0===w||w})}else{const t=await Object(k.d)(e);if(u.a.dispatch({action:x.a.FocusAComposer,context:p.timelineRenderingType}),!t)return}}if(null!==(o=_)&&void 0!==o||(_=await C(e,t,b)),!_.body.trim())return;c.b.getValue("Performance.addSendMessageTimingMetadata")&&Object(s.a)(_);const W=null!=y&&y.event_id&&(null==y?void 0:y.rel_type)===a.d.name?y.event_id:null,F=Object(l.a)(j,(e=>g.sendMessage(e,W,_)),g);return f&&u.a.dispatch({action:"reply_to_event",event:null,context:p.timelineRenderingType}),u.a.dispatch({action:"message_sent"}),d.CHAT_EFFECTS.forEach((e=>{if(_&&Object(m.containsEmoji)(_,e.emojis)){(null==y?void 0:y.rel_type)!==a.d.name&&u.a.dispatch({action:`effects.${e.command}`})}})),c.b.getValue("Performance.addSendMessageTimingMetadata")&&F.then((e=>{Object(s.b)(g,j,e.event_id)})),c.b.getValue("scrollToBottomOnMessageSent")&&u.a.dispatch({action:"scroll_to_bottom",timelineRenderingType:p.timelineRenderingType}),F}async function W(e,{roomContext:t,mxClient:n,editorStateTransfer:o}){const r=o.getEvent();i.a.instance.trackEvent({eventName:"Composer",isEditing:!0,inThread:Boolean(null==r?void 0:r.getThread()),isReply:Boolean(r.replyEventId)});const a=await C(e,!0,{editedEvent:r}),c=a["m.new_content"];if(""===(null==c?void 0:c.body))return Object(g.a)(n,o),void Object(p.a)({mxEvent:r,onCloseDialog:()=>{Object(g.b)(t)}});let s;const l=r.getRoomId();if(function(e,t){const n=t.getEvent().getContent();return n.msgtype!==e.msgtype||n.body!==e.body||n.format!==e.format||n.formatted_body!==e.formatted_body}(c,o)&&l){Object(g.a)(n,o);const e=o.getEvent().threadRootId||null;s=n.sendMessage(l,e,a),u.a.dispatch({action:"message_sent"})}return Object(g.b)(t),s}}}]);
//# sourceMappingURL=38.js.map