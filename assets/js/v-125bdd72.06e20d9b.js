"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[31561],{663549:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-125bdd72","path":"/guide/installation/05_windows.html","title":"Windows","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"excerpt":"","headers":[{"level":2,"title":"Install a USB-to-UART Bridge Virtual COM Port driver","slug":"install-a-usb-to-uart-bridge-virtual-com-port-driver","link":"#install-a-usb-to-uart-bridge-virtual-com-port-driver","children":[]},{"level":2,"title":"Determine which COM port is assigned to your device","slug":"determine-which-com-port-is-assigned-to-your-device","link":"#determine-which-com-port-is-assigned-to-your-device","children":[]},{"level":2,"title":"Installing","slug":"installing","link":"#installing","children":[]},{"level":2,"title":"Configuring","slug":"configuring","link":"#configuring","children":[]},{"level":2,"title":"Starting Zigbee2MQTT","slug":"starting-zigbee2mqtt","link":"#starting-zigbee2mqtt","children":[]},{"level":2,"title":"Updating Zigbee2MQTT","slug":"updating-zigbee2mqtt","link":"#updating-zigbee2mqtt","children":[]}],"git":{"updatedTime":1709753037000},"filePathRelative":"guide/installation/05_windows.md"}')},304396:(e,n,a)=>{a.r(n),a.d(n,{default:()=>k});var s=a(166252);const t=a.p+"assets/img/devicemanager.15b524ea.png",i=(0,s._)("h1",{id:"windows",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,s.Uk)(" Windows")],-1),o=(0,s._)("h2",{id:"install-a-usb-to-uart-bridge-virtual-com-port-driver",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#install-a-usb-to-uart-bridge-virtual-com-port-driver","aria-hidden":"true"},"#"),(0,s.Uk)(" Install a USB-to-UART Bridge Virtual COM Port driver")],-1),l=(0,s._)("p",null,"In order to be able to communicate with your USB device over a virtual COM port, you might need a driver for your OS in order for it to be able to be found by your flashing software.",-1),r={href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"},c={href:"https://ftdichip.com/drivers/vcp-drivers/",target:"_blank",rel:"noopener noreferrer"},d=(0,s.uE)('<h2 id="determine-which-com-port-is-assigned-to-your-device" tabindex="-1"><a class="header-anchor" href="#determine-which-com-port-is-assigned-to-your-device" aria-hidden="true">#</a> Determine which COM port is assigned to your device</h2><ol><li>Connect your sniffer device</li><li>Open up Start menu and start typing <code>Device Manager</code></li><li>Expand <code>Ports (COM &amp; LPT)</code></li><li>Look for a node similar to <code>USB Serial Device (COM4)</code></li><li>Take note of the port number, it will be needed during configuration</li></ol><p><img src="'+t+'" alt="Device Manager"></p><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2>',4),p={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.uE)('<li>Open up a <code>Command prompt</code> or <code>Powershell</code> from the Start menu (Powershell has prettier colors)</li><li>Verify Node.js was successfully installed<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">--version</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',2),m={href:"https://github.com/koenkk/zigbee2mqtt",target:"_blank",rel:"noopener noreferrer"},v=(0,s.uE)('<ul><li>if you prefer to use git (which you should), just clone the whole repository<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">--depth</span> <span class="token number">1</span> git@github.com:Koenkk/zigbee2mqtt.git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>otherwise use the green <code>Clone or download</code> button to download the zip archive, then extract it</li></ul>',1),g=(0,s.uE)('<li>Change to the newly created directory and install dependencies with Node.js own package manager <code>npm</code><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> ci\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',1),b=(0,s.uE)('<h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring" aria-hidden="true">#</a> Configuring</h2><ol><li>Copy <code>data\\configuration.example.yaml</code> to <code>data\\configuration.yaml</code></li><li>Open <code>data\\configuration.yaml</code> in a text editor</li><li>Change the serial port configuration to match your setup<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n    <span class="token key atrule">port</span><span class="token punctuation">:</span> \\\\.\\COM4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Make sure other settings are correct as well</li><li>Save and exit</li></ol><p>Congratulations, you&#39;re now ready to start your Zigbee2MQTT installation</p><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt" aria-hidden="true">#</a> Starting Zigbee2MQTT</h2><p>Just change to the root directory of your installation and run the application:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A successful setup produces an output similar to this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; zigbee2mqtt@1.6.0 start C:\\Users\\me\\Documents\\GitHub\\zigbee2mqtt\n&gt; node index.js\n\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: &#39;D:\\Documents\\GitHub\\zigbee2mqtt\\data\\log\\2019-10-18.22-56-22&#39;\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: &#39;20190608&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>Coordinator firmware version: &#39;20190608&#39;</code> entry means that Zigbee2MQTT has successfully communicated with the USB sniffer.</p><p>Zigbee2MQTT can be stopped anytime by pressing <code>CTRL + C</code> and then confirming with <code>Y</code>.</p><h2 id="updating-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#updating-zigbee2mqtt" aria-hidden="true">#</a> Updating Zigbee2MQTT</h2><p>It is recommended to back up the Zigbee2MQTT <code>\\data</code> subdirectory before performing any modifications.</p><ol><li>First, stop Zigbee2MQTT</li><li>Navigate to the directory where the Zigbee2MQTT repository was cloned to in the <a href="#installing">Installing</a> step</li><li>Pull the latest content from the configured source<div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>git pull\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Update NPM dependencies<div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>npm ci\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Restart Zigbee2MQTT<div class="language-bat line-numbers-mode" data-ext="bat"><pre class="language-bat"><code>npm start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>Below is a sample PowerShell script to run which will take care of:</p><ul><li>Backing up the data directory</li><li>Updating Zigbee2MQTT</li><li>Restoring the data directory contents</li></ul><p>The script will automatically check if node is running (in case Zigbee2MQTT is still running) and ask to close if it is. You will need to manually stop and restart it afterwards.</p><p>Ensure you update the relevant paths in the script to match your environment. By default, the script will target <code>D:\\ProgramData\\zigbee2mqtt\\</code> as the install folder and <code>C:\\Temp\\</code> as the folder where to temporarily store the <code>data</code> folder backup</p><p>Run script from an elevated administrative PowerShell console</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token comment"># Z2M must not be running</span>\n<span class="token comment"># This script will NOT re-start it</span>\n\n<span class="token comment"># Modify below paths as necessary</span>\n<span class="token variable">$z2mPath</span> = <span class="token string">&quot;D:\\ProgramData\\zigbee2mqtt&quot;</span>\n<span class="token variable">$backupPath</span> = <span class="token string">&quot;C:\\Temp&quot;</span>\n\n\n<span class="token comment"># DO NOT MODIFY below this line</span>\n<span class="token comment"># ------------------------------------------------------------------------------</span>\n<span class="token comment"># Build paths</span>\n<span class="token variable">$z2mDataPath</span> = <span class="token function">Join-Path</span> <span class="token operator">-</span>Path <span class="token variable">$z2mPath</span> <span class="token operator">-</span>ChildPath <span class="token string">&#39;data&#39;</span>\n<span class="token variable">$z2mBackupPath</span> = <span class="token function">Join-Path</span> <span class="token operator">-</span>Path <span class="token variable">$backupPath</span> <span class="token operator">-</span>ChildPath <span class="token string">&#39;z2mdata&#39;</span>\n\n<span class="token comment"># Check if Z2M is running</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Get-Process</span> <span class="token operator">-</span>Name <span class="token string">&quot;node&quot;</span> <span class="token operator">-</span>ErrorAction SilentlyContinue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment"># Found running instance of node, stop script</span>\n    <span class="token string">&quot;Node still running, please close first&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span> <span class="token operator">-</span>ForegroundColor Red\n    pause\n    <span class="token keyword">return</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">else</span> <span class="token punctuation">{</span>    \n    <span class="token comment"># Continue!</span>\n    <span class="token string">&quot;Node not running, Zigbee2MQTT upgrade will continue&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span> <span class="token operator">-</span>ForegroundColor Green\n<span class="token punctuation">}</span>\n<span class="token comment"># Change working directory to:</span>\n<span class="token string">&quot;Setting location to &quot;</span><span class="token string">&quot;<span class="token function">$<span class="token punctuation">(</span><span class="token variable">$z2mPath</span><span class="token punctuation">)</span></span>&quot;</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span>\n<span class="token function">Set-Location</span> <span class="token operator">-</span>Path <span class="token variable">$z2mPath</span>\n<span class="token comment"># Back up data directory:</span>\n<span class="token string">&quot;Backing up data subdirectory&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span>\n<span class="token function">Copy-Item</span> <span class="token operator">-</span>Path <span class="token variable">$z2mDataPath</span> <span class="token operator">-</span>Destination <span class="token variable">$z2mBackupPath</span> <span class="token operator">-</span>Recurse\n<span class="token comment"># Pull the latest release:</span>\n<span class="token string">&quot;Running &quot;</span><span class="token string">&quot;git pull&quot;</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span>\n&amp; git pull\n<span class="token comment"># Update NPM dependencies:</span>\n<span class="token string">&quot;Running &quot;</span><span class="token string">&quot;npm ci&quot;</span><span class="token string">&quot;&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span>\n&amp; npm ci\n<span class="token comment"># Restore backed-up data:</span>\n<span class="token string">&quot;Restore backed up data directory&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span>\n<span class="token function">Copy-Item</span> <span class="token operator">-</span>Path <span class="token string">&quot;<span class="token function">$<span class="token punctuation">(</span><span class="token variable">$z2mBackupPath</span><span class="token punctuation">)</span></span>\\*&quot;</span> <span class="token operator">-</span>Destination <span class="token variable">$z2mDataPath</span> <span class="token operator">-</span>Recurse <span class="token operator">-</span>Force\n<span class="token comment"># Delete back up folder:</span>\n<span class="token string">&quot;Delete backed up folder&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span>\n<span class="token function">Remove-Item</span> <span class="token operator">-</span>Path <span class="token variable">$z2mBackupPath</span> <span class="token operator">-</span>Recurse\n<span class="token string">&quot;Update completed!&quot;</span> <span class="token punctuation">|</span> <span class="token function">Write-Host</span> <span class="token operator">-</span>ForegroundColor Green\npause\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',19),h={},k=(0,a(983744).Z)(h,[["render",function(e,n){const a=(0,s.up)("ExternalLinkIcon");return(0,s.wg)(),(0,s.iD)("div",null,[i,o,l,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Uk)("For CP210x based chipsets, there is a driver available at "),(0,s._)("a",r,[(0,s.Uk)("Silicon Labs' website"),(0,s.Wm)(a)]),(0,s.Uk)(".")]),(0,s._)("li",null,[(0,s.Uk)("For CC1352/CC2652/CC2538 based chipsets, have a look at "),(0,s._)("a",c,[(0,s.Uk)("FTDI chip's website"),(0,s.Wm)(a)]),(0,s.Uk)(" for drivers.")])]),d,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s.Uk)("Download and install Node.js 20 LTS from "),(0,s._)("a",p,[(0,s.Uk)("their website"),(0,s.Wm)(a)])]),u,(0,s._)("li",null,[(0,s.Uk)("Choose a suitable directory for Zigbee2MQTT and copy all the files from the "),(0,s._)("a",m,[(0,s.Uk)("Zigbee2MQTT repository"),(0,s.Wm)(a)]),v]),g]),b])}]])}}]);