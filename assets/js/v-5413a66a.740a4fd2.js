"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58100],{799391:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-5413a66a","path":"/devices/ZM25RX-08_30.html","title":"Zemismart ZM25RX-08/30 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Zemismart ZM25RX-08/30 control via MQTT","description":"Integrate your Zemismart ZM25RX-08/30 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-09-30T20:52:51.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Work state (text)","slug":"work-state-text","link":"#work-state-text","children":[]},{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Program (enum)","slug":"program-enum","link":"#program-enum","children":[]},{"level":3,"title":"Click control (enum)","slug":"click-control-enum","link":"#click-control-enum","children":[]},{"level":3,"title":"Motor direction (enum)","slug":"motor-direction-enum","link":"#motor-direction-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1709753037000},"filePathRelative":"devices/ZM25RX-08_30.md"}')},942438:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var i=o(166252);const r=(0,i._)("h1",{id:"zemismart-zm25rx-08-30",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#zemismart-zm25rx-08-30","aria-hidden":"true"},"#"),(0,i.Uk)(" Zemismart ZM25RX-08/30")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ZM25RX-08/30")],-1),n=(0,i._)("td",null,"Vendor",-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Tubular motor")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"work_state, cover (state, position), battery, program, click_control, motor_direction, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZM25RX-08-30.png",alt:"Zemismart ZM25RX-08/30"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("h3",{id:"pairing",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,i.Uk)(" Pairing")],-1),p=(0,i._)("p",null,"Using either the up or down button, press and release 4 times, then long press and release. There should be a red light blinking to indicate the device is in pairing mode.",-1),m=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),g=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="work-state-text" tabindex="-1"><a class="header-anchor" href="#work-state-text" aria-hidden="true">#</a> Work state (text)</h3><p>Value can be found in the published state on the <code>work_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="program-enum" tabindex="-1"><a class="header-anchor" href="#program-enum" aria-hidden="true">#</a> Program (enum)</h3><p>Set the upper/bottom limit. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;program&quot;: NEW_VALUE}</code>. The possible values are: <code>set_bottom</code>, <code>set_upper</code>, <code>reset</code>.</p><h3 id="click-control-enum" tabindex="-1"><a class="header-anchor" href="#click-control-enum" aria-hidden="true">#</a> Click control (enum)</h3><p>Control motor in steps (ignores set limits; normal/micro = 120deg/5deg movement). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_control&quot;: NEW_VALUE}</code>. The possible values are: <code>upper</code>, <code>upper_micro</code>, <code>lower</code>, <code>lower_micro</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum" aria-hidden="true">#</a> Motor direction (enum)</h3><p>Motor direction. Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>reversed</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),b={},v=(0,o(983744).Z)(b,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),r,(0,i._)("table",null,[a,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[n,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Zemismart"},{default:(0,i.w5)((()=>[(0,i.Uk)("Zemismart")])),_:1})])]),l,s,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i.kq)(" Notes END: Do not edit below this line "),m,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),g])}]])}}]);