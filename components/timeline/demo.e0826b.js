(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1598:function(n,s,a){n.exports={alternate:a(2214),basic:a(2215),color:a(2216),custom:a(2217),pending:a(2218),right:a(2219)}},2214:function(n,s,a){n.exports={content:{"zh-CN":[["p","内容在时间轴两侧轮流出现。"]],"en-US":[["p","Alternate timeline."]]},meta:{order:3,title:{"zh-CN":"交替展现","en-US":"Alternate"},filename:"components/timeline/demo/alternate.md",id:"components-timeline-demo-alternate"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alternate<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"clock-circle-o"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium<span class="token punctuation">,</span> totam rem aperiam<span class="token punctuation">,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Network problems being solved <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"clock-circle-o"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>Technical testing <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Timeline,{mode:"alternate"},n.createElement(s.Timeline.Item,null,"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,{color:"green"},"Solve initial network problems 2015-09-01"),n.createElement(s.Timeline.Item,{dot:n.createElement(s.Icon,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."),n.createElement(s.Timeline.Item,{color:"red"},"Network problems being solved 2015-09-01"),n.createElement(s.Timeline.Item,null,"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,{dot:n.createElement(s.Icon,{type:"clock-circle-o",style:{fontSize:"16px"}})},"Technical testing 2015-09-01"))}}},2215:function(n,s,a){n.exports={content:{"zh-CN":[["p","基本的时间轴。"]],"en-US":[["p","Basic timeline."]]},meta:{order:0,title:{"zh-CN":"基本用法","en-US":"Basic"},filename:"components/timeline/demo/basic.md",id:"components-timeline-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Technical testing <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Network problems being solved <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Timeline,null,n.createElement(s.Timeline.Item,null,"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,null,"Solve initial network problems 2015-09-01"),n.createElement(s.Timeline.Item,null,"Technical testing 2015-09-01"),n.createElement(s.Timeline.Item,null,"Network problems being solved 2015-09-01"))}}},2216:function(n,s,a){n.exports={content:{"zh-CN":[["p","圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。"]],"en-US":[["p","Set the color of circles. ",["code","green"]," means completed or success status, ",["code","red"]," means warning or error, and ",["code","blue"]," means ongoing or other default status."]]},meta:{order:1,title:{"zh-CN":"圆圈颜色","en-US":"Color"},filename:"components/timeline/demo/color.md",id:"components-timeline-demo-color"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">3</span> <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Technical testing <span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Technical testing <span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Technical testing <span class="token number">3</span> <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Timeline,null,n.createElement(s.Timeline.Item,{color:"green"},"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,{color:"green"},"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,{color:"red"},n.createElement("p",null,"Solve initial network problems 1"),n.createElement("p",null,"Solve initial network problems 2"),n.createElement("p",null,"Solve initial network problems 3 2015-09-01")),n.createElement(s.Timeline.Item,null,n.createElement("p",null,"Technical testing 1"),n.createElement("p",null,"Technical testing 2"),n.createElement("p",null,"Technical testing 3 2015-09-01")))}}},2217:function(n,s,a){n.exports={content:{"zh-CN":[["p","可以设置为图标或其他自定义元素。"]],"en-US":[["p","Set a node as an icon or other custom element."]]},meta:{order:4,title:{"zh-CN":"自定义时间轴点","en-US":"Custom"},filename:"components/timeline/demo/custom.md",id:"components-timeline-demo-custom"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"clock-circle-o"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> color<span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>Technical testing <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Network problems being solved <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Timeline,null,n.createElement(s.Timeline.Item,null,"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,null,"Solve initial network problems 2015-09-01"),n.createElement(s.Timeline.Item,{dot:n.createElement(s.Icon,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),n.createElement(s.Timeline.Item,null,"Network problems being solved 2015-09-01"))}}},2218:function(n,s,a){n.exports={content:{"zh-CN":[["p","当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。"]],"en-US":[["p","When the timeline is incomplete and ongoing, put a ghost node at last. Set ",["code","pending"]," as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, ",["code","pendingDot={a React Element}"]," is used to customize the dot of the pending item.\n",["code","reverse={true}"]," is used for reversing nodes."]]},meta:{order:2,title:{"zh-CN":"最后一个及排序","en-US":"Last node and Reversing"},filename:"components/timeline/demo/pending.md",id:"components-timeline-demo-pending"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PendingTimeLine</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    reverse<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> reverse<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>reverse <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">pending</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Recording...<span class="token punctuation">"</span></span> <span class="token attr-name">reverse</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>reverse<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Technical testing <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Toggle Reverse<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PendingTimeLine</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function p(n){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function o(n,s){return(o=Object.setPrototypeOf||function(n,s){return n.__proto__=s,n})(n,s)}function c(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}var i=function(a){function i(){var n,s,a,e;!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,i);for(var o=arguments.length,u=new Array(o),k=0;k<o;k++)u[k]=arguments[k];return a=this,e=(n=p(i)).call.apply(n,[this].concat(u)),s=!e||"object"!==t(e)&&"function"!=typeof e?c(a):e,l(c(c(s)),"state",{reverse:!1}),l(c(c(s)),"handleClick",function(){s.setState({reverse:!s.state.reverse})}),s}var u,k,r;return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),s&&o(n,s)}(i,n.Component),u=i,(k=[{key:"render",value:function(){return n.createElement("div",null,n.createElement(s.Timeline,{pending:"Recording...",reverse:this.state.reverse},n.createElement(s.Timeline.Item,null,"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,null,"Solve initial network problems 2015-09-01"),n.createElement(s.Timeline.Item,null,"Technical testing 2015-09-01")),n.createElement(s.Button,{type:"primary",style:{marginTop:16},onClick:this.handleClick},"Toggle Reverse"))}}])&&e(u.prototype,k),r&&e(u,r),i}();return n.createElement(i,null)}}},2219:function(n,s,a){n.exports={content:{"zh-CN":[["p","时间轴点可以在内容的右边。"]],"en-US":[["p","Right alternate timeline."]]},meta:{order:4,title:{"zh-CN":"右侧时间轴点","en-US":"Right alternate"},filename:"components/timeline/demo/right.md",id:"components-timeline-demo-right"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Timeline<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Create a services site <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Solve initial network problems <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span> <span class="token attr-name">dot</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"clock-circle-o"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">\'16px\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span> color<span class="token operator">=</span><span class="token string">"red"</span><span class="token operator">></span>Technical testing <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timeline.Item</span><span class="token punctuation">></span></span>Network problems being solved <span class="token number">2015</span><span class="token operator">-</span><span class="token number">09</span><span class="token operator">-</span><span class="token number">01</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Timeline</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(8),a(10));return n.createElement(s.Timeline,{mode:"right"},n.createElement(s.Timeline.Item,null,"Create a services site 2015-09-01"),n.createElement(s.Timeline.Item,null,"Solve initial network problems 2015-09-01"),n.createElement(s.Timeline.Item,{dot:n.createElement(s.Icon,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),n.createElement(s.Timeline.Item,null,"Network problems being solved 2015-09-01"))}}}}]);