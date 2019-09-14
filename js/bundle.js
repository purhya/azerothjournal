!function(){return function e(t,i,s){function n(o,l){if(!i[o]){if(!t[o]){var a="function"==typeof require&&require;if(!l&&a)return a(o,!0);if(r)return r(o,!0);var h=new Error("Cannot find module '"+o+"'");throw h.code="MODULE_NOT_FOUND",h}var c=i[o]={exports:{}};t[o][0].call(c.exports,function(e){return n(t[o][1][e]||e)},c,c.exports,e,t,i,s)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<s.length;o++)n(s[o]);return n}}()({1:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("fui"),o=e("./game/data-manager"),l=e("ff");e("./components");const a=e("flit"),h=e("./components"),c=e("./translate");window.flit=a,r.theme.changeTheme("dark"),r.theme.set("backgroundColor","#222"),r.theme.set("layerBackgroundColor",new r.Color("#222").lighten(5).toString()),r.theme.set("borderRadius",2),r.theme.set("layerBorderRadius",2);let d=class extends r.Router{constructor(){super(...arguments),this.page=l.firstMatch(location.search,/\?(\w+)/),this.prepared=!1,this.selectedUserSideAndClass=l.storage.get("selectedUserSideAndClass",!1)}render(){if(!o.dataManager.fixedData)return null;if(!this.selectedUserSideAndClass)return n.html`<wow-app-entry
				.fixedData=${o.dataManager.fixedData}
				@go=${this.go}
			/>`;if(!this.prepared)return n.html`<wow-app-progress />`;let e="";return"comparer"===this.page&&(e=n.html`<item-comparer />`),n.html`
			<div class="app-content">
				${e}
			</div>

			<div class="app-toolbar">
				<!-- <wow-button icon="inv_sword_27"
					:class.active=${"comparer"===this.page}
					:goto="?comparer"
					:tooltip=${c.tr("Open Item Comparer@@0037")}
				/> -->

				<wow-button icon="trade_engineering"
					:goto="?comparer"
					:tooltip=${c.tr("Open Settings@@0038")}
					@@click=${this.showSettings}
				/>
			</div>
		`}async onCreated(){this.page||(this.page="comparer"),window.app=i.app=this,await o.dataManager.fixedReady,this.update(),await o.dataManager.ready,this.prepared=!0}go(){this.selectedUserSideAndClass=!0,l.storage.set("selectedUserSideAndClass",!0),this.update()}showSettings(){a.renderComponent(n.html`<wow-settings />`).show()}};d=s([n.define("wow-app")],d),i.WoWApp=d;let u=class extends n.Component{render(){return n.html`
		<template class="app-entry">
			<div class="app-entry-select">
				<div class="app-entry-select-line">
					<span>${c.tr("My prefered side@@0002")}:</span>
					<side-select
						.value=${h.settings.data.userSide}
						@change=${e=>h.settings.set("userSide",e)}
					/>
				</div>
				
				<div class="app-entry-select-line">
					<span>${c.tr("My prefered class@@0004")}:</span>
					<class-select
						.value=${h.settings.data.userClass}
						@change=${e=>h.settings.set("userClass",e)}
					/>
				</div>
			</div>

			<button class="app-entry-go" @click=${this.onClickGo}>${c.tr("Go@@0005")}</button>
		</template>
		`}onClickGo(){this.emit("go")}};u=s([n.define("wow-app-entry")],u),i.WoWAppEntry=u;let p=class extends n.Component{constructor(){super(...arguments),this.dataProgress=0}render(){return n.html`
		<template class="app-progress">
			${this.dataProgress}%
		</template>
		`}async onCreated(){o.dataManager.loader.on("progress",(e,t)=>{this.dataProgress=Math.floor(e/t*100)})}};p=s([n.define("wow-app-progress")],p),i.WoWAppProgress=p},{"./components":4,"./game/data-manager":11,"./translate":15,ff:45,flit:74,fui:128}],2:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit");let r=class extends n.Component{constructor(){super(...arguments),this.icon=""}render(){return n.html`
		<template class="wow-button">
			<img src="https://wow.zamimg.com/images/wow/icons/medium/${this.icon}.jpg">
		</template>
		`}};r.properties=["icon"],r=s([n.define("wow-button")],r),i.WoWButton=r},{flit:74}],3:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../game/data-manager"),o=e("fui"),l=e("../game/types"),a=e("../translate"),h={[l.ClassType.Warrior]:"#c69b6d",[l.ClassType.Paladin]:"#f48cba",[l.ClassType.Hunter]:"#aad372",[l.ClassType.Rogue]:"#fff468",[l.ClassType.Priest]:"#ffffff",[l.ClassType.Shaman]:"#2359ff",[l.ClassType.Mage]:"#68ccef",[l.ClassType.Warlock]:"#9382c9",[l.ClassType.Druid]:"#ff7c0a"};let c=class extends o.Select{constructor(){super(...arguments),this.data=[[null,a.tr("Not limit@@0027")]].concat(Object.entries(r.dataManager.fixedData.classes).map(e=>[Number(e[0]),e[1].name]))}render(){return n.html`
		<f-select
			:style.color=${this.value?h[this.value]:""}
		/>
		`.inherit(super.render())}renderOptionStyle(e){return"color: "+(e?h[e]:"inherit")}};c=s([n.define("class-select")],c),i.ClassSelect=c},{"../game/data-manager":11,"../game/types":17,"../translate":15,flit:74,fui:128}],4:[function(e,t,i){"use strict";function s(e){for(var t in e)i.hasOwnProperty(t)||(i[t]=e[t])}Object.defineProperty(i,"__esModule",{value:!0}),s(e("./button")),s(e("./item-comparer")),s(e("./item")),s(e("./tooltip")),s(e("./side-select")),s(e("./quality-select")),s(e("./class-select")),s(e("./settings"))},{"./button":2,"./class-select":3,"./item":6,"./item-comparer":5,"./quality-select":7,"./settings":8,"./side-select":9,"./tooltip":10}],5:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../game/data-manager"),o=e("ff"),l=e("fui"),a=e("../game/types"),h=e("../wowhead"),c=e("./settings"),d=e("../game/item-ranking"),u=e("../game/item-category"),p=e("../translate"),m=e("./quality-select");let f=class extends n.Component{constructor(){super(...arguments),this.store=new l.Store({key:"id"}),this.generator=new u.CategoryGenerator}render(){return n.html`
		<template class="comparer">
			<div class="comparer-head">
				<span style="margin-right: 10px">${p.tr("Class@@0006")}:</span>
				<class-select placeholder="Select class"
					.value=${this.generator.selectedClass}
					@change=${this.onChangeClass}
				/>

				<span style="margin-left: 20px; margin-right: 10px">${p.tr("Minimal quality@@0007")}:</span>
				<quality-select
					.value=${this.generator.minimalQuality}
					@change=${this.onChangeMinimalQuality}
				/>

				<f-checkbox style="margin-left: 20px;"
					.checked=${this.generator.mergeSameHandedWeapons}
					@change=${this.onChangeIfMergeSameHandedWeapons}
				>
					${p.tr("Merge same handed weapons@@0008")}
				</f-checkbox>
			</div>

			<div class="comparer-toolbar-container">
				${this.renderItemTypeButtons()}
				${this.renderClassRoles()}
			</div>
				
			<comparer-grid live resizable page-size="30"
				:ref="grid"
				.store=${this.store}
				.typeAndSlot=${this.generator.selectedTypeAndSlot}
				.shouldRenderSlotColumn=${this.shouldRenderSlotColumn()}
				.shouldRenderScoreColumn=${this.shouldRenderScoreColumn()}
				.averageScore=${this.generator.averageScore}
				.maxScore=${this.generator.maxScore}
			 />
		</template>
		`}renderItemTypeButtons(){let e=[r.dataManager.fixedData.itemTypes[a.ItemType.Cloth],r.dataManager.fixedData.itemTypes[a.ItemType.Leather],r.dataManager.fixedData.itemTypes[a.ItemType.Mail],r.dataManager.fixedData.itemTypes[a.ItemType.Plate],p.tr("Jewelry@@0028")];return n.html`
		${this.generator.armorTypeAndSlotsGroup.map((t,i)=>n.html`
			<div class="comparer-toolbar-line" :style.margin-top=${i>0?0:5}>
				<span>${this.generator.armorTypeAndSlotsGroup.length>1?e[i]:p.tr("Armors@@0009")}:</span>
				<div class="comparer-toolbar">
					${t.map(e=>this.renderItemTypeButton(e))}
				</div>
			</div>
		`)}

		<div class="comparer-toolbar-line">
			<span>${p.tr("Weapons@@0010")}:</span>
			<div class="comparer-toolbar">
				${this.generator.weaponTypeAndSlots.map(e=>this.renderItemTypeButton(e))}
			</div>
		</div>

		${c.settings.data.hideOthersCategory?"":n.html`
			<div class="comparer-toolbar-line">
				<span>${p.tr("Others@@0029")}:</span>
				<div class="comparer-toolbar">
					${this.generator.otherTypeAndSlots.map(e=>this.renderItemTypeButton(e))}
				</div>
			</div>
		`}
		`}renderItemTypeButton(e){let{type:t,slot:i,name:s}=e,r=this.generator.findIcon(t,i);return n.html`
		<wow-button
			.icon=${r}
			:class.active=${this.generator.selectedTypeAndSlot.type===t&&this.generator.selectedTypeAndSlot.slot===i}
			:tooltip=${s}
			@@click=${()=>this.generator.setSelectedTypeAndSlot(e)}
		/>
		`}renderClassRoles(){if(!this.generator.selectedClass)return"";let e=d.classRoles[this.generator.selectedClass].map(e=>{let{talent:t}=d.roleWeights[e],{name:i,icon:s}=r.dataManager.fixedData.classTalents[this.generator.selectedClass].find(e=>e.id===t);return e===d.ClassRole.DruidFeralCombatBear?i+=" - "+p.tr("Bear@@0011"):e===d.ClassRole.DruidFeralCombatCat&&(i+=" - "+p.tr("Cat@@0012")),{role:Number(e),icon:s,tooltip:i}});return e.unshift({role:null,icon:r.dataManager.fixedData.classes[this.generator.selectedClass].icon,tooltip:p.tr("Any talent@@0039"),category:null}),n.html`
		<div class="comparer-toolbar-line">
			<span>${p.tr("Ranking@@0013")}: </span>
			<div class="comparer-toolbar">
			${e.map(({role:e,tooltip:t,icon:i})=>n.html`
				<wow-button
					.icon=${i}
					:class.active=${this.generator.selectedClassRole===e}
					:tooltip=${t}
					@@click=${()=>this.setClassRole(e)}
				/>
			`)}
			</div>
		</div>
		`}onCreated(){this.loadData(this.generator.data,!1),this.generator.on("datachange",(e,t)=>{this.loadData(e,t)})}loadData(e,t){e=o.orderBy(e,"itemLevel"),this.store.clear(),this.store.push(...e);let i=n.getComponent(this.refs.grid);i&&t&&i.setStartIndex(0)}onConnected(){let e=e=>{["minimalRequiredLevel","hideRandomEnchantment","hideNotUsefulItems","debugOnlyShowNotUsefulItems"].includes(e)&&this.generator.generateItemData(!0)};c.settings.on("change",e),this.once("disconnected",()=>{c.settings.off("change",e)})}onChangeClass(e){this.generator.setClass(e)}onChangeMinimalQuality(e){this.generator.setMinimalQuality(e)}onChangeIfMergeSameHandedWeapons(e){this.generator.setMergeSameHandedWeapons(e)}shouldRenderSlotColumn(){let e=Number(this.generator.selectedTypeAndSlot.type.split(".")[0]);return e===a.ItemMainType.Containers||e===a.ItemMainType.Quivers}shouldRenderScoreColumn(){return!this.generator.isSelectedOthers()}setAsCategoryIcon(e){this.generator.setAsCategoryIcon(e)}setClassRole(e){this.generator.setClassRole(e)}};f=s([n.define("item-comparer")],f),i.ItemComparer=f;let g=class extends l.Grid{constructor(){super(...arguments),this.orderedColumnName=o.storage.get("comparerGridOrderName","itemLevel"),this.orderedDirection=o.storage.get("comparerGridOrderDirection",""),this.shouldRenderSlotColumn=!1,this.shouldRenderScoreColumn=!1,this.averageScore=null,this.maxScore=null}get columns(){let e=[{name:"name",title:p.tr("Name@@0040"),orderBy:"zhcn"===r.dataManager.lang?void 0:"name",width:300,flex:1}];return this.shouldRenderSlotColumn&&e.push({name:"slot",title:p.tr("Slot@@0014"),width:100,orderBy:e=>e.slotCount}),e.push({name:"requiresLevel",title:p.tr("Requires level@@0033"),orderBy:"requiresLevel",width:100}),e.push({name:"itemLevel",title:p.tr("Item level@@0034"),orderBy:"itemLevel",width:100}),this.shouldRenderScoreColumn&&e.push({name:"score",title:p.tr("Score@@0035"),orderBy:"score",flex:1,width:200}),e}renderRow(e,t){return n.html`
		<tr ${l.contextmenu(this.renderContextMenu(e))}>
			<td><wow-item .id=${e.id} /></td>

			${this.shouldRenderSlotColumn?n.html`
				<td><span class="double-decimal-column">${e.slotCount}</span></td>
			`:""}
			
			<td><span class="double-decimal-column requires-level-column">${e.requiresLevel}</span></td>
			<td><span class="double-decimal-column item-level-column">${e.itemLevel}</span></td>

			${this.shouldRenderScoreColumn?n.html`
			<td>
				${c.settings.data.onlyShowScoreNumber?n.html`
				<span class="triple-decimal-column">
					${this.renderScoreNumber(e)}
				</span>
				`:this.renderScoreGraph(e)}
			</td>
			`:""}
		</tr>
		`}renderContextMenu(e){return()=>n.html`
				<f-menu>
					<f-menuitem @@click=${()=>this.openWowhead(e)}>${p.tr("Open in wowhead@@0015")}</f-menuitem>
					<f-menuitem @@click=${()=>this.setAsCategoryIcon(e.icon)}>${p.tr("Set icon of item as category icon@@0016")}</f-menuitem>
				</f-menu>
			`}renderScoreNumber(e){return e.additionalPropertiesFor?e.score?n.html`${e.score}<span class="more">+</span>`:"+":e.score?n.html`${e.score}`:"--"}renderScoreGraph(e){let t=c.settings.data.scoreChartBorderSize;return n.html`<div class="score"
			:tooltip=${this.renderScoreNumber(e)}
			:style.padding-right=${t}
		>
			<div class="score-percent"
				:style.width.percent=${e.score/this.maxScore*100}
				:style.background-color=${m.qualityColors[e.quality]}
				:style.height=${t}
			/>
			${e.additionalPropertiesFor||e.randomEnchantment?n.html`
				<div class="score-additional"
					:style.background-color=${new l.Color(m.qualityColors[e.quality]).alpha(.4)}
					:style.width=${t}
					:style.height=${t}
					:style.padding-right=${-t}
				/>
			`:""}
		</div>`}onCreated(){super.onCreated(),this.on("orderchanged",(e,t)=>{o.storage.set("comparerGridOrderName",e),o.storage.set("comparerGridOrderDirection",t)})}setAsCategoryIcon(e){this.closest(f).setAsCategoryIcon(e)}openWowhead(e){h.wowheadResources.open(`/item=${e.id}`)}};g=s([n.define("comparer-grid")],g),i.ComparerGrid=g},{"../game/data-manager":11,"../game/item-category":12,"../game/item-ranking":14,"../game/types":17,"../translate":15,"../wowhead":16,"./quality-select":7,"./settings":8,ff:45,flit:74,fui:128}],6:[function(e,t,i){"use strict";var s,n=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const r=e("flit"),o=e("../game/data-manager"),l=e("ff"),a=e("./settings"),h=e("../wowhead"),c=e("../translate");let d=s=class extends r.Component{constructor(){super(...arguments),this.id=0,this.tooltip=null}render(){let e=o.dataManager.itemMap[this.id];return r.html`
		<template class="wow-item">
			<wow-button :ref="button"
				@@mouseenter=${this.onMouseEnter}
				@@mouseleave=${this.onMouseLeave}
				.icon=${e.icon}
			/>
			<div class="wow-item-right">
				<div class="wow-item-right-top q${e.quality}">
					<span class="wow-item-name"
						@mouseenter=${this.onMouseEnter}
						@mouseleave=${this.onMouseLeave}
					>
						${e.name}
					</span>
					${this.renderSideLogo(e.side)}
					${this.renderRaceRequirement(e.requiresRaces)}
					${this.renderSkillRequirement(e.requiresSkill)}
				</div>
				${this.renderClasses(e.classes)}
			</div>
		</template>
		`}renderClasses(e){return e?r.html`<div class="wow-item-classes">${e.map((t,i)=>r.html`<span class="c${t}">
					${o.dataManager.fixedData.classes[t].name}
				</span>${i===e.length-1?"":", "}`)}</div>`:""}renderSideLogo(e){return 1===e?r.html`<span class="wow-item-side-alliance"
				:tooltip=${c.tr("{0} only@@0017",o.dataManager.fixedData.sides[1])}
			/>`:2===e?r.html`<span class="wow-item-side-horde"
				:tooltip=${c.tr("{0} only@@0017",o.dataManager.fixedData.sides[2])}
			/>`:""}renderRaceRequirement(e){return e?e.map(e=>{let{name:t,icon:i}=o.dataManager.fixedData.races[e];return r.html`
				<span class="wow-item-skill-requirement"
					:tooltip=${c.tr("Requires race@@0018")+": "+t}
				>
					<img src=${h.wowheadResources.getIconSmall(i)}>
				</span>
				`}):""}renderSkillRequirement(e){if(e){let{name:t,icon:i}=o.dataManager.fixedData.professionTypes[e[0]];return r.html`
			<span class="wow-item-skill-requirement"
				:tooltip=${c.tr("Requires@@0019")+t+`(${e[1]})`}
			>
				<img src=${h.wowheadResources.getIconSmall(i)}>
			</span>
			`}return""}async onMouseEnter(e){let t=e.target,i=o.dataManager.itemMap[this.id].tooltip.split("\n").map(e=>e.startsWith("<div")||e.startsWith("<br>")?e:`<div>${e}</div>`).join("");if(this.tooltip=s.sharedTooltip||(s.sharedTooltip=r.renderComponent(r.html`<wow-tooltip />`)),a.settings.data.showItemId&&(i+=`<div class="q0">id: ${this.id}</div>`),this.tooltip.code=i,this.tooltip.el.style.opacity="0",this.tooltip.applyAppendTo(),s.tooltipLeaveTransition&&s.tooltipLeaveTransition.clean(),await r.renderComplete(),this.tooltip&&(l.align(this.tooltip.el,t,"rt",{margin:[2,-4]}),this.tooltip.el.style.opacity="",!s.tooltipLeaveTransition)){let e=new r.Transition(this.tooltip.el,"fade");s.tooltipLeaveTransition=e,e.enter().then(e=>{e&&(s.tooltipLeaveTransition=null)})}}onMouseLeave(){if(this.tooltip){let e=new r.Transition(this.tooltip.el,"fade");s.tooltipLeaveTransition=e,this.tooltip=null,e.leave().then(e=>{e&&(s.sharedTooltip.el.remove(),s.tooltipLeaveTransition=null)})}}};d.sharedTooltip=null,d.tooltipLeaveTransition=null,d=s=n([r.define("wow-item")],d),i.WoWItem=d},{"../game/data-manager":11,"../translate":15,"../wowhead":16,"./settings":8,ff:45,flit:74}],7:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../game/data-manager"),o=e("fui"),l=e("../game/types");i.qualityColors={[l.ItemQuality.Poor]:"#9d9d9d",[l.ItemQuality.Common]:"#dddddd",[l.ItemQuality.Uncommon]:"#1eff00",[l.ItemQuality.Rare]:"#0070dd",[l.ItemQuality.Epic]:"#a335ee",[l.ItemQuality.Legendary]:"#ff8000",[l.ItemQuality.Artifact]:"#e5cc80"};let a=class extends o.Select{constructor(){super(...arguments),this.data=[l.ItemQuality.Common,l.ItemQuality.Uncommon,l.ItemQuality.Rare,l.ItemQuality.Epic].map(e=>[e,r.dataManager.fixedData.itemQualities[e]])}render(){return n.html`
		<f-select
			:style.color=${i.qualityColors[this.value]}
		/>
		`.inherit(super.render())}renderOptionStyle(e){return"color: "+i.qualityColors[e]}};a=s([n.define("quality-select")],a),i.QualitySelect=a},{"../game/data-manager":11,"../game/types":17,flit:74,fui:128}],8:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("fui"),o=e("ff"),l=e("../app"),a=e("../translate");var h;!function(e){e[e.Thin=5]="Thin",e[e.Medium=10]="Medium",e[e.Thick=15]="Thick",e[e.VeryThick=20]="VeryThick"}(h||(h={}));const c={userSide:null,userClass:null,showItemId:!1,hideRandomEnchantment:!1,hideOthersCategory:!1,hideNotUsefulItems:!0,onlyShowScoreNumber:!1,scoreChartBorderSize:h.Medium,minimalRequiredLevel:0};i.settings=new class extends n.ObservedEmitter{constructor(){super(),this.data=Object.assign({},c,o.storage.get("settings",{}))}set(e,t){this.data[e]=t,this.save(),this.emit("change",e)}save(){o.storage.set("settings",this.data)}};let d=class extends r.Modal{constructor(){super(...arguments),this.title=a.tr("Settings@@0030"),this.tab="global",this.tabs=[["global",a.tr("Global@@0031")],["comparer",a.tr("Item Comparer@@0032")]]}render(){return n.html`
		<f-modal class="settings">

			<div class="settings-body" slot="body">
				<ul class="settings-nav">
				${this.tabs.map(([e,t])=>n.html`
					<li
						:class.active=${this.tab===e}
						@click=${()=>this.tab=e}
					>${t}</li>
				`)}
				</ul>

				<div class="settings-tab" :show=${"global"===this.tab}>
					<div class="settings-line">
						<span>${a.tr("My prefered side@@0002")}:</span>
						<side-select
							.value=${i.settings.data.userSide}
							@change=${e=>i.settings.set("userSide",e)}
						/>
					</div>

					<div class="settings-line">
						<span>${a.tr("My prefered class@@0004")}:</span>
						<class-select
							.value=${i.settings.data.userClass}
							@change=${e=>i.settings.set("userClass",e)}
						/>
					</div>
					
					<div class="settings-line">
						<f-checkbox
							.checked=${i.settings.data.showItemId}
							@change=${e=>i.settings.set("showItemId",e)}
						>
							${a.tr("Show Item Id in tooltip@@0021")}
						</f-checkbox>
					</div>
				</div>

				<div class="settings-tab" :show=${"comparer"===this.tab}>
					<div class="settings-line">
						<f-checkbox
							.checked=${i.settings.data.hideRandomEnchantment}
							@change=${e=>i.settings.set("hideRandomEnchantment",e)}
						>
							${a.tr("Hide green random enchantment items@@0022")}
						</f-checkbox>
					</div>

					<div class="settings-line">
						<f-checkbox
							.checked=${i.settings.data.hideOthersCategory}
							@change=${e=>i.settings.set("hideOthersCategory",e)}
						>
							${a.tr('Hide "Others" category@@0023')}
						</f-checkbox>
					</div>

					<div class="settings-line">
						<f-checkbox
							.checked=${i.settings.data.hideNotUsefulItems}
							@change=${e=>i.settings.set("hideNotUsefulItems",e)}
						>
							${a.tr("Hide not useful items for current class@@0041")}
						</f-checkbox>
					</div>

					${"127.0.0.1"===location.hostname?n.html`
					<div class="settings-line">
						<f-checkbox
							.checked=${i.settings.data.debugOnlyShowNotUsefulItems}
							@change=${e=>i.settings.set("debugOnlyShowNotUsefulItems",e)}
						>
							Only show not useful items to debug
						</f-checkbox>
					</div>
					`:""}

					<div class="settings-line">
						<f-checkbox
							.checked=${i.settings.data.onlyShowScoreNumber}
							@change=${e=>i.settings.set("onlyShowScoreNumber",e)}
						>
							${a.tr("Only show a score number instead of chart@@0042")}
						</f-checkbox>
					</div>

					<div class="settings-line" :disable=${i.settings.data.onlyShowScoreNumber}>
						<span>${a.tr("Score chart border size@@0043")}:</span>
						<f-select
							.data=${[[h.Thin,a.tr("Thin@@0044")],[h.Medium,a.tr("Medium@@0045")],[h.Thick,a.tr("Thick@@0046")],[h.VeryThick,a.tr("Very Thick@@0047")]].map(([e,t])=>[e,t+` - ${e}`])}
							.value=${i.settings.data.scoreChartBorderSize}
							@change=${e=>i.settings.set("scoreChartBorderSize",e)}
						/>
					</div>

					<div class="settings-line">
						<span>${a.tr("Hide items belows level@@0024")}:</span>
						<f-select
							.data=${[0,5,10,15,20,25,30,35,40,45,50,55,60].map(e=>[e,e||a.tr("Not limit@@0027")])}
							.value=${i.settings.data.minimalRequiredLevel}
							@change=${e=>i.settings.set("minimalRequiredLevel",e)}
						/>
					</div>
				</div>
			</div>

			<button filled @click=${this.hide} slot="foot">${a.tr("Close@@0036")}</button>
		</f-modal>
		`.inherit(super.render())}onCreated(){this.tabs.find(([e])=>e===l.app.page)&&(this.tab=l.app.page)}};d=s([n.define("wow-settings")],d),i.WoWSettings=d},{"../app":1,"../translate":15,ff:45,flit:74,fui:128}],9:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../game/data-manager"),o=e("fui"),l=e("../game/types"),a=e("../translate"),h={[l.Side.Alliance]:new o.Color("#3399ff").toString(),[l.Side.Horde]:new o.Color("#ff3333").toString()};let c=class extends o.Select{constructor(){super(...arguments),this.data=[[null,a.tr("Not limit@@0027")]].concat(Object.entries(r.dataManager.fixedData.sides).map(e=>[Number(e[0]),e[1]]))}render(){return n.html`
		<f-select
			:style.color=${this.value?h[this.value]:""}
		/>
		`.inherit(super.render())}renderOptionStyle(e){return`color: ${e?h[e]:"inherit"}`}};c=s([n.define("side-select")],c),i.SideSelect=c},{"../game/data-manager":11,"../game/types":17,"../translate":15,flit:74,fui:128}],10:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("fui");let o=class extends r.Layer{constructor(){super(...arguments),this.code=""}render(){return n.html`
		<template class="wow-tooltip" :html=${this.code}></template>
		`}};o=s([n.define("wow-tooltip")],o),i.WoWTooltip=o},{flit:74,fui:128}],11:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("ff");i.dataManager=new class{constructor(){this.lang=document.documentElement.lang.toLowerCase(),this.loader=new s.ResourceLoader,this.fixedReady=this.loadFixedAndLang(),this.ready=this.load()}async loadFixedAndLang(){this.translationData=await(await fetch(`translations/${this.lang}.json`)).json(),this.fixedData=await(await fetch(`data/${this.lang}/fixed.json`)).json()}async load(){await this.loader.load([`data/${this.lang}/items.json`,`data/${this.lang}/npcs.json`,`data/${this.lang}/objects.json`,`data/${this.lang}/quests.json`,`data/${this.lang}/spells.json`]),this.items=await this.loader.getAsJSON(`data/${this.lang}/items.json`),this.npcs=await this.loader.getAsJSON(`data/${this.lang}/npcs.json`),this.objects=await this.loader.getAsJSON(`data/${this.lang}/objects.json`),this.quests=await this.loader.getAsJSON(`data/${this.lang}/quests.json`),this.spells=await this.loader.getAsJSON(`data/${this.lang}/spells.json`),this.itemMap=s.indexBy(this.items,e=>[e.id,e]),this.npcMap=s.indexBy(this.npcs,e=>[e.id,e]),this.objectMap=s.indexBy(this.objects,e=>[e.id,e]),this.questMap=s.indexBy(this.quests,e=>[e.id,e]),this.spellMap=s.indexBy(this.spells,e=>[e.id,e])}},window.dataManager=i.dataManager},{ff:45}],12:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./data-manager"),n=e("ff"),r=e("./types"),o=e("../components/settings"),l=e("./item-ranking"),a=e("flit"),h=e("./item-only-for-role");i.CategoryGenerator=class extends a.ObservedEmitter{constructor(){super(),this.selectedClass=n.storage.get("comparerClass",o.settings.data.userClass||null),this.selectedTypeAndSlot=n.storage.get("comparerSelectedTypeAndSlot",null),this.selectedClassRole=null,this.armorTypeAndSlotsGroup=[],this.weaponTypeAndSlots=[],this.otherTypeAndSlots=[],this.minimalQuality=n.storage.get("comparerMinimalQuality",r.ItemQuality.Uncommon),this.mergeSameHandedWeapons=n.storage.get("comparerMergeSameHandedWeapons",!1),this.iconOverwrites=n.storage.get("comparerIconOverwrites",[]),this.typeAndSlotIcons=[],this.data=[],this.averageScore=null,this.maxScore=null,this.generateTypeAndSlotIcons(),this.generateItemTypesAndSlots()}generateTypeAndSlotIcons(){this.typeAndSlotIcons=[...this.iconOverwrites];for(let e of s.dataManager.fixedData.itemTypeSlotIconOverwrites)this.typeAndSlotIcons.find(t=>t.class===e.class&&t.type===e.type&&t.slot===e.slot)||this.typeAndSlotIcons.push(e);for(let e of s.dataManager.fixedData.itemTypeSlotMap)this.typeAndSlotIcons.find(t=>null===t.class&&t.type===e.type&&t.slot===e.slot)||this.typeAndSlotIcons.push(Object.assign({class:null},e))}generateItemTypesAndSlots(){this.generateArmorTypesAndSlots();let e=s.dataManager.fixedData,t=this.selectedClass?e.classCanEquipItemTypes[this.selectedClass]:n.unique(Object.values(e.classCanEquipItemTypes).flat()),i=e.itemTypeSlotMap,o=n.groupBy(i,"slot"),l=[r.ItemSlotType.TwoHand,r.ItemSlotType.OneHand,r.ItemSlotType.Shield,r.ItemSlotType.HeldInOffhand,r.ItemSlotType.Ranged,r.ItemSlotType.Thrown,r.ItemSlotType.Projectile,r.ItemSlotType.Relic],a=[r.ItemSlotType.Bag];this.weaponTypeAndSlots=[],this.otherTypeAndSlots=[];for(let i of l){let s=o[i].map(e=>e.type).filter(e=>t.includes(e));for(let t of s){let s=e.itemTypes[t];t===r.ItemType.FishingPoles||this.weaponTypeAndSlots.push({type:t,slot:i,name:s})}}this.mergeSameHandedWeapons&&this.mergeWeaponTypes();for(let e of this.weaponTypeAndSlots)e.slot===r.ItemSlotType.OneHand&&(e.slot=null);for(let i of a){let s=(o[i]||[]).map(e=>e.type).filter(e=>t.includes(e));for(let t of s){let s=e.itemTypes[t];this.otherTypeAndSlots.push({type:t,slot:i,name:s})}}this.otherTypeAndSlots.push({type:r.ItemType.FishingPoles,slot:r.ItemSlotType.TwoHand,name:e.itemTypes[r.ItemType.FishingPoles]}),this.selectedClass&&s.dataManager.fixedData.classCanEquipItemTypes[this.selectedClass].includes("4.-5")||this.otherTypeAndSlots.push({type:r.ItemType.OffhandFrills,slot:r.ItemSlotType.HeldInOffhand,name:e.itemTypes[r.ItemType.OffhandFrills]}),this.updateSelectedTypeAndSlot()}generateArmorTypesAndSlots(){let e=s.dataManager.fixedData,t=this.selectedClass?e.classCanEquipItemTypes[this.selectedClass]:n.unique(Object.values(e.classCanEquipItemTypes).flat()),i=e.itemTypeSlotMap,o=n.groupBy(i,"slot"),l=[r.ItemSlotType.Head,r.ItemSlotType.Neck,r.ItemSlotType.Shoulder,r.ItemSlotType.Back,r.ItemSlotType.Chest,r.ItemSlotType.Wrist,r.ItemSlotType.Hands,r.ItemSlotType.Waist,r.ItemSlotType.Legs,r.ItemSlotType.Feet,r.ItemSlotType.Finger,r.ItemSlotType.Trinket];if(this.armorTypeAndSlotsGroup=this.selectedClass?[[]]:[[],[],[],[],[]],this.selectedClass)for(let i of l){let s=o[i].map(e=>e.type).filter(e=>t.includes(e)).sort(),n=e.slotsHasDifferentArmorTypes.includes(i);n&&(s=[s.pop()]);for(let t of s){let s=n?e.itemSlots[i]:e.itemTypes[t];this.armorTypeAndSlotsGroup[0].push({type:t,slot:i,name:s})}}else for(let i of l){let s=o[i].map(e=>e.type).filter(e=>t.includes(e)).sort();if(e.slotsHasDifferentArmorTypes.includes(i)){let t=e.itemSlots[i];this.armorTypeAndSlotsGroup[0].push({type:r.ItemType.Cloth,slot:i,name:t}),this.armorTypeAndSlotsGroup[1].push({type:r.ItemType.Leather,slot:i,name:t}),this.armorTypeAndSlotsGroup[2].push({type:r.ItemType.Mail,slot:i,name:t}),this.armorTypeAndSlotsGroup[3].push({type:r.ItemType.Plate,slot:i,name:t})}else for(let t of s){let s=e.itemTypes[t];this.armorTypeAndSlotsGroup[4].push({type:t,slot:i,name:s})}}}mergeWeaponTypes(){for(let e=0;e<this.weaponTypeAndSlots.length;e++){let t=this.weaponTypeAndSlots[e];if(this.canMerge(t))for(let i=e+1;i<this.weaponTypeAndSlots.length;i++){let e=this.weaponTypeAndSlots[i];if(e.slot===t.slot||15===e.slot&&25===t.slot||25===e.slot&&15===t.slot){if(!this.canMerge(e))continue;this.weaponTypeAndSlots.splice(i--,1),t.type+=","+e.type,t.name=s.dataManager.fixedData.itemSlots[t.slot],e.slot!==t.slot&&(t.slot=null)}}}}canMerge(e){return!![r.ItemSlotType.TwoHand,r.ItemSlotType.OneHand,r.ItemSlotType.Ranged,r.ItemSlotType.Thrown].includes(e.slot)&&(this.selectedClass!==r.ClassType.Rogue||e.type!==r.ItemType.Daggers)&&e.type!==r.ItemType.Wands}updateSelectedTypeAndSlot(){let e,t=this.selectedTypeAndSlot;if(t){let i=Number(t.type.split(".")[0]);if((this.armorTypeAndSlotsGroup.some(e=>e.find(e=>e.type===t.type&&e.slot===t.slot))||this.weaponTypeAndSlots.find(e=>e.type===t.type&&e.slot===t.slot)||this.otherTypeAndSlots.find(e=>e.type===t.type&&e.slot===t.slot))&&(e=t),e||i!==r.ItemMainType.Armor||(e=this.armorTypeAndSlotsGroup[0].find(e=>e.slot===t.slot)),!e&&i===r.ItemMainType.Weapons)if(t.type.includes(",")){let i=t.type.split(",")[0];e=this.weaponTypeAndSlots.find(e=>e.type===i)}else e=this.weaponTypeAndSlots.find(e=>e.type.split(",").includes(t.type))}e||(e=this.weaponTypeAndSlots[0]),this.setSelectedTypeAndSlot(e)}setSelectedTypeAndSlot(e){let t=e.slot!==this.selectedTypeAndSlot.slot||e.type!==this.selectedTypeAndSlot.type;this.selectedTypeAndSlot=e,n.storage.set("comparerSelectedTypeAndSlot",e),this.generateItemData(t)}generateItemData(e){let t=s.dataManager.fixedData,{slot:i,type:r}=this.selectedTypeAndSlot,a=null;this.selectedClass&&i&&t.slotsHasDifferentArmorTypes.includes(i)&&t.classesUpgradeArmorTypeAfterLevel40.includes(this.selectedClass)&&(a=n.before(r,".")+"."+(Number(n.after(r,"."))-1));let h=this.filterItems(r,i);if(a&&(h=h.filter(e=>e.requiresLevel>=35)).push(...this.filterItems(a,i).filter(e=>e.requiresLevel<=45)),this.isSelectedOthers())this.averageScore=null;else{let e=l.rankItems(h,this.selectedClass,this.selectedClassRole);for(let t=0;t<h.length;t++)Object.assign(h[t],e[t]);o.settings.data.debugOnlyShowNotUsefulItems?h=h.filter(e=>!1===e.useful):o.settings.data.hideNotUsefulItems&&(h=h.filter(e=>e.useful));let t=h.filter(e=>e.score).map(e=>e.score);this.averageScore=n.avg(t),this.maxScore=n.max(t)}this.data=h,this.emit("datachange",h,e)}filterItems(e,t){return e.includes(",")?e.split(",").map(e=>this.filterItemsBySingleType(e,t)).flat():this.filterItemsBySingleType(e,t)}filterItemsBySingleType(e,t){return s.dataManager.items.filter(i=>!(i.type!==e||null!==t&&i.slot!==t||this.minimalQuality>0&&i.quality<this.minimalQuality&&this.isArmorOrWeapons(e)||this.selectedClass&&i.classes&&!i.classes.includes(this.selectedClass)||o.settings.data.hideRandomEnchantment&&i.quality===r.ItemQuality.Uncommon&&i.randomEnchantment||o.settings.data.minimalRequiredLevel&&i.requiresLevel<o.settings.data.minimalRequiredLevel||this.selectedClassRole&&h.ItemOnlyForRole[i.id]&&!h.ItemOnlyForRole[i.id].includes(this.selectedClassRole)))}isArmorOrWeapons(e){let t=Number(e.split(".")[0]),i=Number(e.split(".")[1]);return t===r.ItemMainType.Weapons&&e!==r.ItemType.FishingPoles||t===r.ItemMainType.Armor&&i>=-6||t===r.ItemMainType.Projectiles}isSelectedOthers(){let e=this.selectedTypeAndSlot;return this.otherTypeAndSlots.find(t=>t.type===e.type&&t.slot===e.slot)}findIcon(e,t){let i="",s=e.includes(",")?e.split(",")[0]:e,n=this.typeAndSlotIcons.find(i=>i.class===this.selectedClass&&i.type===e&&(null===t||i.slot===t));if(!(i=n?n.icon:i)){let s=this.typeAndSlotIcons.find(i=>null===i.class&&i.type===e&&(null===t||i.slot===t));i=s?s.icon:i}return i||s===e||(i=this.findIcon(s,t)),i||"inv_helmet_67"}setClass(e){this.selectedClass=e,n.storage.set("comparerClass",e),this.selectedClassRole=n.storage.get("roleForClass"+e,null),this.generateItemTypesAndSlots()}setMinimalQuality(e){this.minimalQuality=e,n.storage.set("comparerMinimalQuality",e),this.generateItemData(!0)}setMergeSameHandedWeapons(e){this.mergeSameHandedWeapons=e,n.storage.set("comparerMergeSameHandedWeapons",e),this.generateItemTypesAndSlots()}setClassRole(e){this.selectedClassRole=e,n.storage.set("roleForClass"+this.selectedClass,e),this.generateItemData(!1)}setAsCategoryIcon(e){n.removeWhere(this.iconOverwrites,e=>e.class===this.selectedClass&&e.type===this.selectedTypeAndSlot.type&&e.slot===this.selectedTypeAndSlot.slot),this.iconOverwrites.push({class:this.selectedClass,type:this.selectedTypeAndSlot.type,slot:this.selectedTypeAndSlot.slot,icon:e}),this.generateTypeAndSlotIcons(),n.storage.set("comparerIconOverwrites",this.iconOverwrites)}}},{"../components/settings":8,"./data-manager":11,"./item-only-for-role":13,"./item-ranking":14,"./types":17,ff:45,flit:74}],13:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./item-ranking");i.ItemOnlyForRole={2243:[s.ClassRole.ShamanEnhancement],20035:[s.ClassRole.MageFrost],20036:[s.ClassRole.MageFire,s.ClassRole.WarlockDestruction]}},{"./item-ranking":14}],14:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./types"),n=e("ff"),r={stamina:1,strength:1,agility:1,intellect:1,spirit:1,meleeDPS:5,rangedDPS:5,wandDPS:1,weaponDamage:2,axeSkill:5,daggerSkill:5,swordSkill:5,maceSkill:5,bowSkill:5,crossBowSkill:5,gunSkill:5,spellPower:1,naturalSpellPower:.8,shadowSpellPower:.8,fireSpellPower:.8,frostSpellPower:.8,arcaneSpellPower:.8,holySpellPower:.8,spellCriticalStrikePercentage:10,spellHitPercentage:10,decreaseSpellResistance:1,spellHealing:.5,manaRestore:5,attackPower:.5,criticalStrikePercentage:10,hitPercentage:10,rangedAttackPower:.5,rangedCriticalStrikePercentage:10,feralAttackPower:.5,armor:.1,defense:2,parryPercentage:15,dodgePercentage:10,block:.5,blockPercentage:5,healthRestore:2,magicResistance:2,naturalResistance:2,shadowResistance:2,forstResistance:2,fireResistance:2,arcaneResistance:2},o={defenseWithShield:{stamina:1,strength:.5,agility:.5,hitPercentage:1,armor:1,meleeWeapons:1,defense:1,parryPercentage:1,dodgePercentage:1,block:1,blockPercentage:1,healthRestore:1},defenseWithoutShield:{stamina:1,strength:.5,agility:.5,hitPercentage:1,armor:2,defense:1,dodgePercentage:1,healthRestore:1},meleeWeapons:{axeSkill:1,swordSkill:1,maceSkill:1,weaponDamage:1},healing:{intellect:1,spirit:.5,stamina:.5,spellPower:1,spellCriticalStrikePercentage:.5,spellHealing:1,manaRestore:1},meleeDamage:{agility:1,strength:1,stamina:.5,meleeDPS:1,meleeWeapons:1,attackPower:1,criticalStrikePercentage:1,hitPercentage:1},rangedDamage:{agility:1,stamina:.5,intellect:.25,spirit:.25,rangedDPS:1,rangedWeapons:1,attackPower:1,rangedAttackPower:1,criticalStrikePercentage:1,rangedCriticalStrikePercentage:1,hitPercentage:1,manaRestore:.25},rangedWeapons:{bowSkill:1,crossBowSkill:1,gunSkill:1},spellDamage:{intellect:1,stamina:.5,spirit:.5,spellPower:1,spellCriticalStrikePercentage:1,spellHitPercentage:1,decreaseSpellResistance:1,manaRestore:.5,wandDPS:1},allResistance:{magicResistance:1,naturalResistance:1,shadowResistance:1,forstResistance:1,fireResistance:1,arcaneResistance:1},leveling:{stamina:1,spirit:.5},PVP:{stamina:1,allResistance:1}};var l;function a(e){let t=function e(t,i=3){let s={};let n=!0;for(let[e,i]of Object.entries(t))if(o[e]){for(let[t,n]of Object.entries(o[e]))s[t]=Math.max(s[t]||0,n*i);delete t[e],n=!0}n&&i>0&&(s=e(s,i-1));return Object.assign(s,t)}(e);for(let e in t)t[e]=t[e]*r[e];return t}!function(e){e[e.WarriorProtection=1]="WarriorProtection",e[e.WarriorArms=2]="WarriorArms",e[e.WarriorFury=3]="WarriorFury",e[e.PaladinRetribution=4]="PaladinRetribution",e[e.PaladinProtection=5]="PaladinProtection",e[e.PaladinHoly=6]="PaladinHoly",e[e.HunterBeastMastery=7]="HunterBeastMastery",e[e.HunterSurvival=8]="HunterSurvival",e[e.HunterMarksmanship=9]="HunterMarksmanship",e[e.RogueCombat=10]="RogueCombat",e[e.RogueSubtlety=11]="RogueSubtlety",e[e.RogueAssassination=12]="RogueAssassination",e[e.PriestHoly=13]="PriestHoly",e[e.PriestShadowMagic=14]="PriestShadowMagic",e[e.PriestDiscipline=15]="PriestDiscipline",e[e.ShamanEnhancement=16]="ShamanEnhancement",e[e.ShamanRestoration=17]="ShamanRestoration",e[e.ShamanElementalCombat=18]="ShamanElementalCombat",e[e.MageFrost=19]="MageFrost",e[e.MageFire=20]="MageFire",e[e.MageArcane=21]="MageArcane",e[e.WarlockDemonology=22]="WarlockDemonology",e[e.WarlockAffliction=23]="WarlockAffliction",e[e.WarlockDestruction=24]="WarlockDestruction",e[e.DruidFeralCombatBear=25]="DruidFeralCombatBear",e[e.DruidFeralCombatCat=26]="DruidFeralCombatCat",e[e.DruidRestoration=27]="DruidRestoration",e[e.DruidBalance=28]="DruidBalance"}(l=i.ClassRole||(i.ClassRole={})),i.roleWeights={[l.WarriorArms]:{class:s.ClassType.Warrior,talent:s.ClassTalent.WarriorArms,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{strength:1,agility:.5,meleeDamage:1}},[l.WarriorFury]:{class:s.ClassType.Warrior,talent:s.ClassTalent.WarriorFury,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{strength:1,agility:.5,meleeDamage:1,criticalStrikePercentage:1.5}},[l.WarriorProtection]:{class:s.ClassType.Warrior,talent:s.ClassTalent.WarriorProtection,teamRole:s.TeamRole.Tank,relativeWeights:{defenseWithShield:1,meleeDamage:.5}},[l.PaladinHoly]:{class:s.ClassType.Paladin,talent:s.ClassTalent.PaladinHoly,teamRole:s.TeamRole.Healer,relativeWeights:{healing:1}},[l.PaladinProtection]:{class:s.ClassType.Paladin,talent:s.ClassTalent.PaladinProtection,teamRole:s.TeamRole.Tank,relativeWeights:{defenseWithShield:1,holySpellPower:.4,spellDamage:.4,meleeDamage:.1}},[l.PaladinRetribution]:{class:s.ClassType.Paladin,talent:s.ClassTalent.PaladinRetribution,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{strength:1,agility:.75,spellDamage:.2,meleeDamage:.8,criticalStrikePercentage:1.5}},[l.HunterBeastMastery]:{class:s.ClassType.Hunter,talent:s.ClassTalent.HunterBeastMastery,teamRole:s.TeamRole.RangedDamage,relativeWeights:{rangedDamage:.8,agility:1,stamina:1,attackPower:1,rangedAttackPower:1}},[l.HunterMarksmanship]:{class:s.ClassType.Hunter,talent:s.ClassTalent.HunterMarksmanship,teamRole:s.TeamRole.RangedDamage,relativeWeights:{rangedDamage:1}},[l.HunterSurvival]:{class:s.ClassType.Hunter,talent:s.ClassTalent.HunterSurvival,teamRole:s.TeamRole.RangedDamage,relativeWeights:{rangedDamage:1}},[l.RogueAssassination]:{class:s.ClassType.Rogue,talent:s.ClassTalent.RogueAssassination,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{agility:1,strength:.5,meleeDamage:1,daggerSkill:1}},[l.RogueCombat]:{class:s.ClassType.Rogue,talent:s.ClassTalent.RogueCombat,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{agility:1,strength:.5,meleeDamage:1,daggerSkill:1}},[l.RogueSubtlety]:{class:s.ClassType.Rogue,talent:s.ClassTalent.RogueSubtlety,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{agility:1,strength:.5,meleeDamage:1,daggerSkill:1}},[l.PriestDiscipline]:{class:s.ClassType.Priest,talent:s.ClassTalent.PriestDiscipline,teamRole:s.TeamRole.Healer,relativeWeights:{healing:1,spirit:1,wandDPS:1}},[l.PriestHoly]:{class:s.ClassType.Priest,talent:s.ClassTalent.PriestHoly,teamRole:s.TeamRole.Healer,relativeWeights:{healing:1,spirit:1,wandDPS:1}},[l.PriestShadowMagic]:{class:s.ClassType.Priest,talent:s.ClassTalent.PriestShadowMagic,teamRole:s.TeamRole.SpellDamage,relativeWeights:{spirit:1,spellDamage:1,shadowSpellPower:1}},[l.ShamanElementalCombat]:{class:s.ClassType.Shaman,talent:s.ClassTalent.ShamanElementalCombat,teamRole:s.TeamRole.SpellDamage,relativeWeights:{spellDamage:1,naturalSpellPower:1}},[l.ShamanEnhancement]:{class:s.ClassType.Shaman,talent:s.ClassTalent.ShamanEnhancement,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{strength:1,agility:.5,meleeDamage:1,manaRestore:.5,intellect:.5}},[l.ShamanRestoration]:{class:s.ClassType.Shaman,talent:s.ClassTalent.ShamanRestoration,teamRole:s.TeamRole.Healer,relativeWeights:{healing:1}},[l.MageArcane]:{class:s.ClassType.Mage,talent:s.ClassTalent.MageArcane,teamRole:s.TeamRole.SpellDamage,relativeWeights:{spellDamage:1,arcaneSpellPower:1}},[l.MageFire]:{class:s.ClassType.Mage,talent:s.ClassTalent.MageFire,teamRole:s.TeamRole.SpellDamage,relativeWeights:{spellDamage:1,fireSpellPower:1}},[l.MageFrost]:{class:s.ClassType.Mage,talent:s.ClassTalent.MageFrost,teamRole:s.TeamRole.SpellDamage,relativeWeights:{spellDamage:1,frostSpellPower:1}},[l.WarlockAffliction]:{class:s.ClassType.Warlock,talent:s.ClassTalent.WarlockAffliction,teamRole:s.TeamRole.SpellDamage,relativeWeights:{stamina:1,intellect:.5,spirit:.25,spellDamage:1,shadowSpellPower:1,manaRestore:.1}},[l.WarlockDemonology]:{class:s.ClassType.Warlock,talent:s.ClassTalent.WarlockDemonology,teamRole:s.TeamRole.SpellDamage,relativeWeights:{stamina:1,intellect:.5,spirit:.25,spellDamage:1,shadowSpellPower:1,manaRestore:.1}},[l.WarlockDestruction]:{class:s.ClassType.Warlock,talent:s.ClassTalent.WarlockDestruction,teamRole:s.TeamRole.SpellDamage,relativeWeights:{stamina:1,intellect:.5,spirit:.25,spellDamage:1,shadowSpellPower:1,fireSpellPower:1,manaRestore:.1}},[l.DruidBalance]:{class:s.ClassType.Druid,talent:s.ClassTalent.DruidBalance,teamRole:s.TeamRole.SpellDamage,relativeWeights:{spellDamage:1,naturalSpellPower:1,spellCriticalStrikePercentage:1.5,spirit:.5}},[l.DruidFeralCombatBear]:{class:s.ClassType.Druid,talent:s.ClassTalent.DruidFeralCombat,teamRole:s.TeamRole.Tank,relativeWeights:{defenseWithoutShield:1,meleeDamage:.5,meleeWeapons:0,meleeDPS:0,feralAttackPower:1}},[l.DruidFeralCombatCat]:{class:s.ClassType.Druid,talent:s.ClassTalent.DruidFeralCombat,teamRole:s.TeamRole.MeleeDamage,relativeWeights:{strength:1,agility:.5,meleeDamage:1,meleeWeapons:0,meleeDPS:0,feralAttackPower:1,criticalStrikePercentage:1.5}},[l.DruidRestoration]:{class:s.ClassType.Druid,talent:s.ClassTalent.DruidRestoration,teamRole:s.TeamRole.Healer,relativeWeights:{healing:1}}};for(let e of Object.values(i.roleWeights))e.weights=a(e.relativeWeights);function h(e,t){return!!e.additionalPropertiesFor&&(!t||0===e.additionalPropertiesFor.length||!!e.additionalPropertiesFor.includes(i.roleWeights[t].teamRole))}function c(e,t,i,s){let r=t.map(t=>[t,(e[t]||0)*(i[t]||0)]);n.orderBy(r,[1,-1]);for(let t=0;t<r.length;t++){let[i,n]=r[t];t>=s&&n>0&&(e[i]=0)}}i.classRoles=n.aggregate(Object.entries(i.roleWeights),([,{class:e}])=>e,e=>e.map(e=>Number(e[0]))),i.rankItems=function e(t,s,l){if(s&&!l){let r=i.classRoles[s].map(i=>e(t,s,i)),o=[];for(let e=0;e<r[0].length;e++)o.push({score:n.max(r.map(t=>t[e].score)),useful:r.some(t=>t[e].useful)});return o}let a=s&&l?i.roleWeights[l].weights:r,d=Object.assign({},a),u=Object.assign({},r),p=[...Object.keys(o.meleeWeapons),...Object.keys(o.rangedWeapons)],m=p.some(e=>a[e]>0),f=Object.keys(o.allResistance),g=f.some(e=>a[e]>0);for(let e of["stamina","armor","meleeDPS","rangedDPS","wandDPS",...f])d[e]?d[e]>0&&(d[e]*=.1,u[e]*=.1):u[e]=0;for(let e of["feralAttackPower"])d[e]>0&&(d[e]=1,u[e]=1);return t.map(e=>{let t=0,i=0,s=0,n=!1,r=Object.assign({},e.properties);if(!r)return{score:t,useful:h(e,l)};m&&Object.keys(r).some(e=>p.includes(e))&&c(r,p,a,1),g&&Object.keys(r).some(e=>f.includes(e))&&c(r,f,a,2);for(let[e,n]of Object.entries(r))t+=(a[e]||0)*n,i+=(d[e]||0)*n,s+=u[e]*n;let o=i/s;return s>0&&o>=.4?n=!0:(0===s||o>=.2)&&h(e,l)&&(n=!0),{score:t=Math.round(t),useful:n}})}},{"./types":17,ff:45}],15:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("ff"),n=e("./game/data-manager");i.tr=function(e,...t){let i=s.firstMatch(e,/@(\d+)\s*$/);return e=e.replace(/@(\d+)\s*$/,""),i&&(e=n.dataManager.translationData[i]||e),s.format(e,t)}},{"./game/data-manager":11,ff:45}],16:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e){function t(){return"zhCN"===document.documentElement.lang?"https://cn.classic.wowhead.com":"https://classic.wowhead.com"}e.getDomain=t,e.open=function(e){window.open(t()+e)},e.getScreenshotSmall=function(e){return`https://wow.zamimg.com/uploads/screenshots/small/${e}.jpg`},e.getScreenshotNormal=function(e){return`https://wow.zamimg.com/uploads/screenshots/normal/${e}.jpg`},e.getItemAppearanceSetModel=function(e,t){return`https://wow.zamimg.com/modelviewer/classic/transmog/${e}/1/${t}.jpg`},e.getHunterPetModel=function(e){return`https://wow.zamimg.com/modelviewer/classic/thumbs/npc/${e}.png`},e.getMapSmall=function(e){return`https://wow.zamimg.com/images/wow/classic/maps/zhcn/small/${e}.jpg`},e.getMapNormal=function(e){return`https://wow.zamimg.com/images/wow/classic/maps/zhcn/normal/${e}.jpg`},e.getMapOriginal=function(e){return`https://wow.zamimg.com/images/wow/classic/maps/zhcn/original/${e}.jpg`},e.getIconSmall=function(e){return`https://wow.zamimg.com/images/wow/icons/small/${e}.jpg`},e.getIconMedium=function(e){return`https://wow.zamimg.com/images/wow/icons/medium/${e}.jpg`},e.getIconLarge=function(e){return`https://wow.zamimg.com/images/wow/icons/large/${e}.jpg`}}(i.wowheadResources||(i.wowheadResources={}))},{}],17:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e){e[e.Alliance=1]="Alliance",e[e.Horde=2]="Horde"}(i.Side||(i.Side={})),function(e){e[e.Warrior=1]="Warrior",e[e.Paladin=2]="Paladin",e[e.Hunter=3]="Hunter",e[e.Rogue=4]="Rogue",e[e.Priest=5]="Priest",e[e.Shaman=7]="Shaman",e[e.Mage=8]="Mage",e[e.Warlock=9]="Warlock",e[e.Druid=11]="Druid"}(i.ClassType||(i.ClassType={})),function(e){e[e.Consumables=0]="Consumables",e[e.Containers=1]="Containers",e[e.Weapons=2]="Weapons",e[e.Armor=4]="Armor",e[e.Projectiles=6]="Projectiles",e[e.TradeGoods=7]="TradeGoods",e[e.Recipes=9]="Recipes",e[e.Currency=10]="Currency",e[e.Quivers=11]="Quivers",e[e.Quest=12]="Quest",e[e.Keys=13]="Keys",e[e.Miscellaneous=15]="Miscellaneous"}(i.ItemMainType||(i.ItemMainType={})),function(e){e.ItemEnhancementsTemporary="0.-3",e.Consumables="0.0",e.Potions="0.1",e.Elixirs="0.2",e.Flasks="0.3",e.Scrolls="0.4",e.FoodDrinks="0.5",e.ItemEnhancementsPermanent="0.6",e.Bandages="0.7",e.ConsumableOthers="0.8",e.Bags="1.0",e.SoulBags="1.1",e.HerbBags="1.2",e.EnchantingBags="1.3",e.EngineeringBags="1.4",e.GemBags="1.5",e.MiningBags="1.6",e.LeatherworkingBags="1.7",e.InscriptionBags="1.8",e.TackleBoxes="1.9",e.CookingBags="1.10",e.OneHandedAxes="2.0",e.TwoHandedAxes="2.1",e.Bows="2.2",e.Guns="2.3",e.OneHandedMaces="2.4",e.TwoHandedMaces="2.5",e.Polearms="2.6",e.OneHandedSwords="2.7",e.TwoHandedSwords="2.8",e.Staves="2.10",e.FistWeapons="2.13",e.WeaponMiscellaneous="2.14",e.Daggers="2.15",e.Thrown="2.16",e.Crossbows="2.18",e.Wands="2.19",e.FishingPoles="2.20",e.Shirts="4.-8",e.Tabards="4.-7",e.Cloaks="4.-6",e.OffhandFrills="4.-5",e.Trinkets="4.-4",e.Amulets="4.-3",e.Rings="4.-2",e.Miscellaneous="4.0",e.Cloth="4.1",e.Leather="4.2",e.Mail="4.3",e.Plate="4.4",e.Shields="4.6",e.Libram="4.7",e.Idol="4.8",e.Totem="4.9",e.Arrows="6.2",e.Bullets="6.3",e.Parts="7.1",e.Explosives="7.2",e.Devices="7.3",e.TradeCloth="7.5",e.TradeLeather="7.6",e.MetalStone="7.7",e.Meat="7.8",e.Herbs="7.9",e.Elemental="7.10",e.TradeGoodsOther="7.11",e.TradeGoodsEnchanting="7.12",e.Materials="7.13",e.ArmorEnchantments="7.14",e.WeaponEnchantments="7.15",e.Books="9.0",e.Leatherworking="9.1",e.Tailoring="9.2",e.Engineering="9.3",e.Blacksmithing="9.4",e.Cooking="9.5",e.Alchemy="9.6",e.Enchanting="9.8",e.Fishing="9.9",e.Mining="9.12",e.Quiver="11.2",e.AmmoPouch="11.3",e.ArmorTokens="15.-2",e.Junk="15.0",e.Reagents="15.1",e.Companions="15.2",e.Holiday="15.3",e.Other="15.4",e.Mounts="15.5",e.Battle="0.2.1",e.Guardian="0.2.2"}(i.ItemType||(i.ItemType={})),function(e){e[e.Poor=0]="Poor",e[e.Common=1]="Common",e[e.Uncommon=2]="Uncommon",e[e.Rare=3]="Rare",e[e.Epic=4]="Epic",e[e.Legendary=5]="Legendary",e[e.Artifact=6]="Artifact"}(i.ItemQuality||(i.ItemQuality={})),function(e){e[e.Head=1]="Head",e[e.Neck=2]="Neck",e[e.Shoulder=3]="Shoulder",e[e.Shirt=4]="Shirt",e[e.Chest=5]="Chest",e[e.Waist=6]="Waist",e[e.Legs=7]="Legs",e[e.Feet=8]="Feet",e[e.Wrist=9]="Wrist",e[e.Hands=10]="Hands",e[e.Finger=11]="Finger",e[e.Trinket=12]="Trinket",e[e.OneHand=13]="OneHand",e[e.Shield=14]="Shield",e[e.Ranged=15]="Ranged",e[e.Back=16]="Back",e[e.TwoHand=17]="TwoHand",e[e.Bag=18]="Bag",e[e.Tabard=19]="Tabard",e[e.MainHand=21]="MainHand",e[e.OffHand=22]="OffHand",e[e.HeldInOffhand=23]="HeldInOffhand",e[e.Projectile=24]="Projectile",e[e.Thrown=25]="Thrown",e[e.Relic=28]="Relic"}(i.ItemSlotType||(i.ItemSlotType={})),function(e){e[e.WarriorArms=26]="WarriorArms",e[e.WarriorFury=256]="WarriorFury",e[e.WarriorProtection=257]="WarriorProtection",e[e.PaladinRetribution=184]="PaladinRetribution",e[e.PaladinProtection=267]="PaladinProtection",e[e.PaladinHoly=594]="PaladinHoly",e[e.HunterBeastMastery=50]="HunterBeastMastery",e[e.HunterSurvival=51]="HunterSurvival",e[e.HunterMarksmanship=163]="HunterMarksmanship",e[e.RogueCombat=38]="RogueCombat",e[e.RogueSubtlety=39]="RogueSubtlety",e[e.RoguePoisons=40]="RoguePoisons",e[e.RogueAssassination=253]="RogueAssassination",e[e.RogueLockpicking=633]="RogueLockpicking",e[e.PriestHoly=56]="PriestHoly",e[e.PriestShadowMagic=78]="PriestShadowMagic",e[e.PriestDiscipline=613]="PriestDiscipline",e[e.ShamanEnhancement=373]="ShamanEnhancement",e[e.ShamanRestoration=374]="ShamanRestoration",e[e.ShamanElementalCombat=375]="ShamanElementalCombat",e[e.MageFrost=6]="MageFrost",e[e.MageFire=8]="MageFire",e[e.MageArcane=237]="MageArcane",e[e.WarlockDemonology=354]="WarlockDemonology",e[e.WarlockAffliction=355]="WarlockAffliction",e[e.WarlockDestruction=593]="WarlockDestruction",e[e.DruidFeralCombat=134]="DruidFeralCombat",e[e.DruidRestoration=573]="DruidRestoration",e[e.DruidBalance=574]="DruidBalance"}(i.ClassTalent||(i.ClassTalent={})),function(e){e[e.NotBind=0]="NotBind",e[e.BindWhenPickedUp=1]="BindWhenPickedUp",e[e.BindWhenEquipped=2]="BindWhenEquipped"}(i.ItemBindType||(i.ItemBindType={})),function(e){e[e.Tank=0]="Tank",e[e.Healer=1]="Healer",e[e.MeleeDamage=2]="MeleeDamage",e[e.RangedDamage=3]="RangedDamage",e[e.SpellDamage=4]="SpellDamage"}(i.TeamRole||(i.TeamRole={})),function(e){e[e.ExactDrop=0]="ExactDrop",e[e.MapDrop=1]="MapDrop",e[e.WorldDrop=2]="WorldDrop",e[e.Sell=3]="Sell",e[e.QuestReward=4]="QuestReward",e[e.SkillCraft=5]="SkillCraft",e[e.ContainedInItem=6]="ContainedInItem",e[e.ContainedInObject=7]="ContainedInObject"}(i.ItemSourceType||(i.ItemSourceType={}))},{}],18:[function(e,t,i){"use strict";function s(e,t){let i=n(e,t);return-1===i?void 0:e[i]}function n(e,t){if(0===e.length)return-1;let i=t(e[0]);if(0===i)return 0;if(-1===i)return-1;if(1===e.length)return-1;if(0===(i=t(e[e.length-1])))return e.length-1;if(1===i)return-1;let s=0,n=e.length-1;for(;n-s>1;){let i=Math.floor((n+s)/2),r=t(e[i]);if(0===r)return i;-1===r?n=i:s=i}return-1}function r(e,t){if(0===e.length)return 0;let i=t(e[0]);if(0===i||-1===i)return 0;if(1===e.length)return 1;if(0===(i=t(e[e.length-1])))return e.length-1;if(1===i)return e.length;let s=0,n=e.length-1;for(;n-s>1;){let i=Math.floor((n+s)/2),r=t(e[i]);if(0===r)return i;-1===r?n=i:s=i}return n}Object.defineProperty(i,"__esModule",{value:!0}),i.repeatTimes=function(e,t){let i=[];for(let s=0;s<t;s++)i.push(e);return i},i.add=function(e,...t){for(let i of t)e.includes(i)||e.push(i);return e},i.remove=function(e,...t){let i=[];for(let s of t){let t=e.indexOf(s);t>-1&&i.push(...e.splice(t,1))}return i},i.removeFirst=function(e,t){for(let i=e.length-1;i>=0;i--)if(t(e[i],i))return e.splice(i,1)[0]},i.removeWhere=function(e,t){let i=[];for(let s=0;s<e.length;s++)t(e[s],s)&&i.push(e.splice(s--,1)[0]);return i},i.unique=function(e){return[...new Set(e)]},i.union=function(...e){let t=new Set;for(let i of e)for(let e of i)t.add(e);return[...t]},i.intersect=function(...e){let t=[];if(!e.length)return t;let i=new Map;for(let t of e[0])i.set(t,1);for(let t of e.slice(1))for(let e of t)i.has(e)&&i.set(e,i.get(e)+1);for(let[s,n]of i.entries())n===e.length&&t.push(s);return t},i.difference=function(e,...t){let i=new Set(e);for(let e of t)for(let t of e)i.delete(t);return[...i]},i.binaryFind=s,i.binaryFindIndex=n,i.binaryFindIndexToInsert=r;class o{constructor(e,...t){this.orders=[];for(let i of[e,...t])if(["string","number","function"].includes(typeof i))this.orders.push([i,1]);else{if(!Array.isArray(i)||!["string","number","function"].includes(typeof i[0]))throw new Error(JSON.stringify(t)+" doesn't specify any valid key or order.");this.orders.push([i[0],-1===i[1]||"desc"===i[1]?-1:1])}}sortArray(e){e.sort((e,t)=>this.compare(e,t))}compare(e,t){for(let[i,s]of this.orders){let n,r;if("function"==typeof i?(n=i(e),r=i(t)):(n=e[i],r=t[i]),n<r)return-s;if(n>r)return s;if(n!==r)return null==n?-s:s}return 0}binaryFind(e,t){return s(e,e=>this.compare(t,e))}binaryFindIndex(e,t){return n(e,e=>this.compare(t,e))}binaryInsert(e,t){let i=r(e,e=>this.compare(t,e));e.splice(i,0,t)}}function l(e,t){let i={};for(let s=0,n=e.length;s<n;s++){let n=e[s],[r,o]=t(n,s);i[r]=o}return i}function a(e,t){let i={};for(let s of e){let e;(i[e="function"==typeof t?t(s):s[t]]||(i[e]=[])).push(s)}return i}function h(e){return e.reduce((e,t)=>e+t,0)}i.Order=o,i.orderBy=function(e,t,...i){return(t=t instanceof o?t:new o(t,...i)).sortArray(e),e},i.indexBy=l,i.keyBy=function(e,t){let i={};for(let s of e){let e;i[e="function"==typeof t?t(s):s[t]]=s}return i},i.groupBy=a,i.aggregate=function(e,t,i){let s=a(e,t);return l(Object.keys(s),e=>[e,i(s[e],e)])},i.count=function(e){return e.length},i.sum=h,i.avg=function(e){return 0===e.length?0:h(e)/e.length},i.max=function(e){return Math.max(...e)},i.min=function(e){return Math.min(...e)}},{}],19:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./duration");function n(e,t){switch(t){case"y":return e.getFullYear();case"M":return e.getMonth();case"d":return e.getDate();case"h":return e.getHours();case"m":return e.getMinutes();case"s":return e.getSeconds();default:throw new Error(`"${t}" is not a valid date unit`)}}function r(e,t,i){switch(i){case"y":return e.setFullYear(t);case"M":return e.setMonth(t);case"d":return e.setDate(t);case"h":return e.setHours(t);case"m":return e.setMinutes(t);case"s":return e.setSeconds(t);default:throw new Error(`"${i}" is not a valid date unit`)}}function o(e){let t=e.getFullYear();return t%4==0&&(t%100!=0||t%400==0)}function l(e,t="yyyy-MM-dd hh:mm:ss"){return t.replace(/y+|M+|d+|h+|m+|s+/g,t=>{let i=t[0],s=n(e,i[0]);return"M"===i&&(s+=1),String(s).padStart(t.length,"0")})}i.dateUnits="yMdhms",i.getDateByUnit=n,i.setDateByUnit=r,i.isValidDate=function(e,t,i=1,s=0,n=0,r=0){let o=new Date(e,t,i,s,n,r);return e===o.getFullYear()&&t===o.getMonth()&&i===o.getDate()&&s===o.getHours()&&n===o.getMinutes()&&r===o.getSeconds()},i.isLeapYear=o,i.getDaysOfYear=function(e){return o(e)?366:365},i.getDaysOfMonth=function(e){let t=new Date(e.getTime());return t.setDate(32),32-t.getDate()},i.cloneDate=function(e=new Date,t=i.dateUnits){let s=[...i.dateUnits].map(i=>t.includes(i)?n(e,i):"d"===i?1:0);return new Date(s[0],s[1],s[2],s[3],s[4],s[5])},i.addDurationToDate=function(e,t){let i="-"===t[0];i&&(t=t.slice(1));let o=i?-1:1,l=s.parseDurationToObject(t),a=new Date(e);for(let e of Object.keys(l))r(a,n(a,e)+l[e]*o,e);return a},i.formatDate=l,i.formatToShortDate=function(e,t={y:"yyyy-MM-dd hh:mm",M:"MM-dd hh:mm",h:"hh:mm"}){let s=new Date,r=!1,o=Object.values(t)[0];for(let l of i.dateUnits)if(r=r||n(e,l)!==n(s,l),o=t[l]||o,r)break;return l(e,o)}},{"./duration":20}],20:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./string"),n=e("./date"),r={y:31536e3,M:2592e3,w:604800,d:86400,h:3600,m:60,s:1};function o(e){let t={y:0,M:0,d:0,h:0,m:0,s:0};if(e.includes(":")){let[i,n,r]=s.subMatches(e,/(?:(\d\d):)?(\d\d):(\d\d(?:\.\d+)?)/)[0].map(e=>Number(e)||0);t.h=i,t.m=n,t.s=r}else{let i=s.subMatches(e,/(\d+(?:\.\d+)?) ?([yMwdhms])/g);for(let[e,s]of i)t[s]=Number(e)}return t}function l(e,t=n.dateUnits){let i={y:0,M:0,d:0,h:0,m:0,s:0};for(let s of t){let t=r[s],n=Math.floor(e/t);n>0&&(i[s]=n,e%=t)}return i}i.parseDurationToObject=o,i.parseDurationToSeconds=function(e){let t=o(e),i=0;for(let e of Object.keys(t))i+=t[e]*r[e];return i},i.parseSecondsToDurationObject=l,i.formatSecondsToDuration=function(e,t=n.dateUnits,i=t.length){let s=l(e,t),r="",o=0;for(let e of Object.keys(s)){let t=s[e];if(t>0&&(r+=t+e,o++),o>=i)break}return r},i.formatSecondsToTime=function(e){let t=Math.floor(e/3600),i=Math.floor(e%3600/60)||0,s=Math.floor(e%60)||0;return(t?String(t).padStart(2,"0")+":":"")+String(i).padStart(2,"0")+":"+String(s).padStart(2,"0")}},{"./date":19,"./string":28}],21:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.Emitter=class{constructor(){this.__events={}}on(e,t,i){(this.__events[e]||(this.__events[e]=[])).push({listener:t,scope:i,once:!1})}once(e,t,i){(this.__events[e]||(this.__events[e]=[])).push({listener:t,scope:i,once:!0})}off(e,t,i){let s=this.__events[e];if(s)for(let e=s.length-1;e>=0;e--){let n=s[e];n.listener!==t||i&&n.scope!==i||s.splice(e,1)}}hasListener(e,t,i){let s=this.__events[e];if(!t)return!!s&&s.length>0;if(s&&t)for(let e=0,n=s.length;e<n;e++){let n=s[e];if(n.listener===t&&(!i||n.scope===i))return!0}return!1}emit(e,...t){let i=this.__events[e];if(i)for(let e=0;e<i.length;e++){let s=i[e];!0===s.once&&i.splice(e--,1),s.listener.apply(s.scope,t)}}removeAllListeners(){this.__events={}}}},{}],22:[function(e,t,i){"use strict";String.prototype.padStart||Object.defineProperty(String.prototype,"padStart",{value:function(e,t){let i=this.length,s=t.length;if(e<i||!s)return String(this);{let n=Math.floor((e-i)/s),r=t.slice(0,e-i-n*s);return t.repeat(n)+r+this}}}),String.prototype.padEnd||Object.defineProperty(String.prototype,"padEnd",{value:function(e,t){let i=this.length,s=t.length;if(e<i||!s)return String(this);{let n=Math.floor((e-i)/s),r=t.slice(0,e-i-n*s);return this+t.repeat(n)+r}}}),RegExp.escape||Object.defineProperty(RegExp,"escape",{value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}})},{}],23:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});class s{constructor(e,t){this.id=null,this.canceled=!1,this.fn=e,this.ms=t}}i.TimedFunction=s;class n extends s{constructor(e,t){super(e,t),this.wrapped=this.wrap(),this.wrapped.__original=e}}i.WrappedTimedFunction=n;class r extends s{constructor(e,t){super(e,t),this.reset()}reset(){return this.id&&clearTimeout(this.id),this.id=setTimeout(this.onTimeout.bind(this),this.ms),!0}onTimeout(){this.id=null,this.fn()}flush(){return!!this.id&&(clearTimeout(this.id),this.id=null,this.fn(),!0)}cancel(){return!!this.id&&(clearTimeout(this.id),this.id=null,!0)}}i.Timeout=r,i.timeout=function(e,t=0){return new r(e,t)};class o extends s{constructor(e,t){super(e,t),this.reset()}reset(){return this.id&&clearInterval(this.id),this.id=setInterval(this.onInterval.bind(this),this.ms),!0}onInterval(){this.fn()}flush(){return!!this.id&&(this.fn(),this.reset(),!0)}cancel(){return!!this.id&&(clearInterval(this.id),this.id=null,!0)}}i.Interval=o,i.interval=function(e,t){return new o(e,t)};class l extends n{constructor(e,t=0){super(e,t)}wrap(){let e=this;return function(...t){e.canceled?e.fn.apply(this,t):e.id||(e.setThrottle(),e.fn.apply(this,t))}}setThrottle(){this.ms?this.id=setTimeout(this.onTimeout.bind(this),this.ms):this.id=requestAnimationFrame(this.onTimeout.bind(this))}onTimeout(){this.id=null}reset(){return this.id&&this.clearThrottle(),this.canceled=!1,!0}clearThrottle(){this.ms?clearTimeout(this.id):cancelAnimationFrame(this.id),this.id=null}flush(){return!1}cancel(){return!this.canceled&&(this.canceled=!0,!0)}}i.Throttle=l,i.throttle=function(e,t=0){return new l(e,t)};class a extends n{constructor(e,t){super(e,t),this.lastArgs=null,this.lastThis=null,this.wrapped=this.wrap()}wrap(){let e=this;return function(...t){e.canceled?e.fn.apply(this,t):(e.lastArgs=t,e.lastThis=this,e.id||e.setThrottle())}}setThrottle(){this.ms?this.id=setTimeout(this.onTimeout.bind(this),this.ms):this.id=requestAnimationFrame(this.onTimeout.bind(this))}onTimeout(){this.lastArgs?(this.fn.apply(this.lastThis,this.lastArgs),this.lastArgs=null,this.lastThis=null,this.setThrottle()):this.id=null}reset(){return this.id&&this.clearThrottle(),this.lastArgs=null,this.lastThis=null,this.canceled=!1,!0}flush(){return!!this.lastArgs&&(this.setThrottle(),this.fn.apply(this.lastThis,this.lastArgs),this.lastArgs=null,this.lastThis=null,!0)}clearThrottle(){this.ms?clearTimeout(this.id):cancelAnimationFrame(this.id),this.id=null}cancel(){return!this.canceled&&(this.canceled=!0,!0)}}i.SmoothThrottle=a,i.smoothThrottle=function(e,t){return new a(e,t)};class h extends n{constructor(e,t){super(e,t),this.lastArgs=null,this.lastThis=null,this.wrapped=this.wrap()}wrap(){let e=this;return function(...t){e.canceled?e.fn.apply(this,t):(e.id&&clearTimeout(e.id),e.id=setTimeout(e.onTimeout.bind(e),e.ms),e.lastArgs=t,e.lastThis=this)}}onTimeout(){this.id=null,this.lastArgs&&(this.fn.apply(this.lastThis,this.lastArgs),this.lastArgs=null,this.lastThis=null)}reset(){return this.id&&(clearTimeout(this.id),this.id=null),this.lastArgs=null,this.lastThis=null,!0}flush(){return this.id&&(clearTimeout(this.id),this.id=0),!!this.lastArgs&&(this.fn.apply(this.lastThis,this.lastArgs),this.lastArgs=null,this.lastThis=null,!0)}cancel(){return!this.canceled&&(this.canceled=!0,!0)}}i.Debounce=h,i.debounce=function(e,t){return new h(e,t)}},{}],24:[function(e,t,i){"use strict";function s(e){for(var t in e)i.hasOwnProperty(t)||(i[t]=e[t])}Object.defineProperty(i,"__esModule",{value:!0}),e("./es-polyfill"),s(e("./object")),s(e("./array")),s(e("./string")),s(e("./number")),s(e("./function")),s(e("./time")),s(e("./duration")),s(e("./date")),s(e("./emitter")),s(e("./queue"))},{"./array":18,"./date":19,"./duration":20,"./emitter":21,"./es-polyfill":22,"./function":23,"./number":25,"./object":26,"./queue":27,"./string":28,"./time":29}],25:[function(e,t,i){"use strict";function s(e,t=0){if(e<0)return-s(-e);if(0===e)return 0;let i=Math.floor(Math.log(e)/Math.log(10));if((t=Math.min(i,t))>0){let i=Math.pow(10,t);return Math.round(e/i)*i}{let i=Math.pow(10,-t);return Math.round(e*i)/i}}Object.defineProperty(i,"__esModule",{value:!0}),i.toDecimal=function(e,t=0){return s(e,-t)},i.toPower=s,i.mod=function(e,t){return(e%t+Math.abs(t))%t},i.constrain=function(e,t,i){return t>i&&([t,i]=[i,t]),e<t?e=t:e>i&&(e=i),e}},{}],26:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.assign=function(e,t,i=Object.keys(t)){for(let s of i){let i=t[s];void 0!==i&&(e[s]=i)}return e},i.deepClone=function e(t,i=10){if("object"!=typeof t||!t||0===i)return t;if(Array.isArray(t))return t.map(t=>"object"==typeof t&&t?e(t,i-1):t);{let s={};for(let n of Object.keys(t)){let r=t[n];s[n]=e(r,i-1)}return s}},i.deepEqual=function e(t,i,s=10){if(t===i)return!0;if(0===s)return!1;if("object"!=typeof t||"object"!=typeof i||!t||!i)return!1;if(t.constructor!==i.constructor)return!1;let n=Object.keys(t),r=Object.keys(i);if(n.length!==r.length)return!1;for(let r of n){if(!i.hasOwnProperty(r))return!1;if(!e(t[r],i[r],s-1))return!1}return!0}},{}],27:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./object"),n=e("./array"),r=e("./emitter");var o;!function(e){e[e.Pending=0]="Pending",e[e.Running=1]="Running",e[e.Paused=2]="Paused",e[e.Finish=3]="Finish",e[e.Aborted=4]="Aborted"}(o=i.QueueState||(i.QueueState={}));class l extends r.Emitter{constructor(e){super(),this.key=null,this.concurrency=5,this.continueOnError=!1,this.maxRetryTimes=0,this.tasks=[],this.state=o.Pending,this.keyValues=null,this.seed=1,this.handledCount=0,this.runningItems=[],this.failedItems=[],this.resumePromise=null,this.resumeResolve=null,e.tasks&&(e.tasks=[...e.tasks]),s.assign(this,e),this.key&&(this.keyValues=new Set)}getTotalCount(){return this.getHandledCount()+this.getUnhandledCount()+this.getFailedCount()}getHandledCount(){return this.handledCount}getUnhandledCount(){return this.tasks.length+this.getRunningCount()}getRunningCount(){return this.runningItems.length}getFailedCount(){return this.failedItems.length}getUnhandledTasks(){return[...this.getRunningTasks(),...this.tasks]}getRunningTasks(){return this.runningItems.map(e=>e.task)}getFailedTasks(){return this.failedItems.map(e=>e.task)}start(){return this.state===o.Paused?this.resume():this.tasks.length>0?(this.state=o.Running,this.mayHandleNextTask()):Promise.resolve().then(()=>this.onFinish()),this.state===o.Running}untilFinish(){return this.getUnhandledCount()>0?new Promise((e,t)=>{this.once("end",i=>i?t(i):e())}):Promise.resolve()}pause(){return this.state===o.Running&&(this.state=o.Paused,this.resumePromise=new Promise(e=>{this.resumeResolve=(()=>{this.resumeResolve=null,this.resumePromise=null,e()})}),this.emit("pause"),!0)}resume(){return this.state===o.Paused&&(this.state=o.Running,this.resumeResolve&&this.resumeResolve(),this.emit("resume"),this.mayHandleNextTask(),!0)}mayHandleNextTask(){if(this.state===o.Running){for(;this.getRunningCount()<this.concurrency&&this.tasks.length>0;){let e=this.tasks.shift();this.handleItem({id:this.seed++,task:e,retriedTimes:0,abort:null})}if(this.maxRetryTimes>0&&this.getRunningCount()<this.concurrency&&this.failedItems.length)for(let e=0;e<this.failedItems.length;e++){let t=this.failedItems[e];if(t.retriedTimes<this.maxRetryTimes&&(t.retriedTimes++,this.failedItems.splice(e--,1),this.handleItem(t),this.getRunningCount()>=this.concurrency))break}0===this.getRunningCount()&&this.onFinish()}}handleItem(e){let{task:t}=e,i=this.onItemFinish.bind(this,e),s=this.onItemError.bind(this,e);this.runningItems.push(e);let n=this.handler(t);n&&"object"==typeof n&&n.promise instanceof Promise&&"function"==typeof n.abort?(n.promise.then(i,s),e.abort=n.abort):n instanceof Promise?n.then(i,s):Promise.resolve().then(()=>i(n))}async onItemFinish(e,t){await this.prepareItem(e),this.removeFromRunning(e)&&(this.handledCount++,this.state===o.Running&&(this.emit("taskfinish",e.task,t),this.mayHandleNextTask()))}async onItemError(e,t){await this.prepareItem(e),this.removeFromRunning(e)&&(this.failedItems.push(e),this.emit("error",e.task,t),this.continueOnError||0!==this.maxRetryTimes?this.mayHandleNextTask():this.onFatalError(t))}async prepareItem(e){e.abort=null,this.resumePromise&&await this.resumePromise}removeFromRunning(e){let t=this.runningItems.findIndex(t=>t.id===e.id);return t>-1&&(this.runningItems.splice(t,1),!0)}onFinish(){this.state!==o.Pending&&this.state!==o.Running||(this.state=o.Finish,this.emit("finish"),this.emit("end",null))}onFatalError(e){this.abort(e)}retry(){let e=this.getFailedCount()>0;return e&&(this.tasks.push(...this.getFailedTasks()),this.failedItems=[]),this.start()&&e}abort(e="manually"){return(this.state===o.Running||this.state===o.Paused)&&(this.state=o.Aborted,this.failedItems.push(...this.runningItems),this.abortRunningItems(),this.emit("abort",e),this.emit("end",e),!0)}abortRunningItems(){this.runningItems.map(e=>this.abortItem(e)),this.runningItems=[]}abortItem(e){let{task:t,abort:i}=e;i&&i(),this.emit("taskabort",t)}clear(){return(this.state===o.Running||this.state===o.Paused||this.state===o.Finish)&&(this.state=o.Finish,this.tasks=[],this.failedItems=[],this.handledCount=0,this.abortRunningItems(),this.emit("finish"),this.emit("end"),this.resumeResolve&&this.resumeResolve(),!0)}clearNotRunning(){this.tasks=[],this.failedItems=[],this.handledCount=0}push(...e){if(this.keyValues)for(let t of e)this.keyValues.add(t[this.key]);this.tasks.push(...e),this.state===o.Finish&&this.start(),this.mayHandleNextTask()}unshift(...e){if(this.keyValues)for(let t of e)this.keyValues.add(t[this.key]);this.tasks.unshift(...e),this.state===o.Finish&&this.start(),this.mayHandleNextTask()}has(e){return!!this.keyValues&&this.keyValues.has(e[this.key])}add(...e){(e=e.filter(e=>!this.has(e))).length>0&&this.push(...e)}addToStart(...e){(e=e.filter(e=>!this.has(e))).length>0&&this.unshift(...e)}find(e){let t=this.runningItems.find(t=>e(t.task));if(t)return t.task;if(t=this.failedItems.find(t=>e(t.task)))return t.task;let i=this.tasks.find(t=>e(t));return i||void 0}remove(...e){let t=[];for(let i of e){let s=this.runningItems.findIndex(e=>e.task===i);s>-1?(this.abortItem(this.runningItems.splice(s,1)[0]),t.push(i)):(s=this.failedItems.findIndex(e=>e.task===i))>-1&&(this.failedItems.splice(s,1),t.push(i)),-1===s&&(s=this.tasks.findIndex(e=>e===i))>-1&&(e.splice(s,1),t.push(i))}return this.mayHandleNextTask(),t}removeWhere(e){let t=[],i=n.removeWhere(this.runningItems,t=>e(t.task));return i.forEach(e=>this.abortItem(e)),t.push(...i.map(e=>e.task)),t.push(...n.removeWhere(this.failedItems,t=>e(t.task)).map(e=>e.task)),t.push(...n.removeWhere(this.tasks,t=>e(t))),this.mayHandleNextTask(),t}}function a(e,t,i){return new Promise((s,n)=>{let r=new l({concurrency:i,tasks:e,handler:t});r.on("taskfinish",(e,t)=>{t&&(s(!0),r.clear())}),r.on("finish",()=>s(!1)),r.on("error",n),r.start()})}i.Queue=l,i.queueEach=function(e,t,i){return new Promise((s,n)=>{let r=new l({concurrency:i,tasks:e,handler:t});r.on("finish",s),r.on("error",n),r.start()})},i.queueMap=function(e,t,i){return new Promise((s,n)=>{let r=[],o=e.map((e,t)=>({task:e,index:t})),a=new l({concurrency:i,tasks:o,handler:async({task:e,index:i})=>{r[i]=await t(e)}});a.on("finish",()=>s(r)),a.on("error",n),a.start()})},i.queueSome=a,i.queueEvery=function(e,t,i){return a(e,async e=>!await t(e),i).then(e=>!e)}},{"./array":18,"./emitter":21,"./object":26}],28:[function(e,t,i){"use strict";function s(e,t){return e.replace(/\$(?:([$&\d])|<(\w+)>)/g,(e,i,s)=>s?t.groups&&t.groups[s]||"":"$"===i?"$":"&"===i?t[0]:"string"==typeof t[i]?t[i]:"")}function n(e,t,i){let s=t.exec(e);return s&&s[i]||""}Object.defineProperty(i,"__esModule",{value:!0}),i.select=function(e,t,i){if(t.global){let n,r=[];for(;n=t.exec(e);)r.push(s(i,n));return r}{let n=e.match(t);return n?s(i,n):""}},i.subMatchAt=n,i.firstMatch=function(e,t){return n(e,t,1)},i.subMatchesAt=function(e,t,i){if(t.global){let s,n=[];for(;s=t.exec(e);)n.push(s[i]||"");return n}{let s=e.match(t);return s?[s[i]||""]:[]}},i.subMatches=function(e,t,i=1){if(t.global){let s,n=[];for(;s=t.exec(e);)n.push([...s].slice(i));return n}{let s=e.match(t);return s?[[...s].slice(i)]:[]}},i.format=function(e,t){return e.replace(/\{(\w+)\}/g,(e,i)=>{let s=t[i];return void 0===s&&(s=e),s})},i.before=function(e,t,i=!1){let s=e.indexOf(t);return s<0?i?e:"":e.slice(0,s)},i.after=function(e,t,i=!1){let s=e.indexOf(t);return s<0?i?e:"":e.slice(s+t.length)},i.beforeLast=function(e,t,i=!1){let s=e.lastIndexOf(t);return s<0?i?e:"":e.slice(0,s)},i.afterLast=function(e,t,i=!1){let s=e.lastIndexOf(t);return s<0?i?e:"":e.slice(s+1)},i.capitalize=function(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()},i.toCamerCase=function(e){return e.replace(/[-_][a-z]/g,e=>e[1].toUpperCase())},i.toDashCase=function(e){return e.replace(/(^|.)[A-Z]+/g,(e,t)=>t&&/\w/.test(t)?t+"-"+e.toLowerCase():e.toLowerCase()).replace(/_/g,"-")}},{}],29:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.sleep=function(e=0){return new Promise(t=>setTimeout(t,e))}},{}],30:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./css"),n=e("./node"),r=e("./util");function o(e){const t={t:"b",b:"t",c:"c",l:"r",r:"l"};if(!/^(?:[tbc][lrc]-[tbc][lrc]|[tbclr]-[tbclr]|[tbc][lrc]|[tbclr])/.test(e))throw`"${e}" is not a valid position`;1===e.length?e="tb".includes(e)?t[e]+"c-"+e+"c":"c"+t[e]+"-c"+e:2===e.length&&(e="tb".includes(e[0])?t[e[0]]+e[1]+"-"+e:e[1]+t[e[0]]+"-"+e[1]+e[0]);let i=e.split("-");return[l(i[0]),l(i[1])]}function l(e){return 1===e.length&&(e="tb".includes(e)?e+"c":"c"+e),e}i.align=function(e,t,i,s={}){new a(e,t,i,s)},i.getAlignDirection=function(e){let t=o(e);return t[0].includes("b")&&t[1].includes("t")?"t":t[0].includes("l")&&t[1].includes("r")?"r":t[0].includes("t")&&t[1].includes("b")?"b":t[0].includes("r")&&t[1].includes("l")?"l":"cc"===t[0]&&"cc"===t[1]?"c":""};class a{constructor(e,t,i,s={}){this.x=0,this.y=0,this.el=e,this.target=t,this.trangle=s.trangle||null,this.position=o(i),this.canShrinkInY=!!s.canShrinkInY,this.direction=this.getDirections(),this.margin=this.parseMargin(s.margin||0),this.targetRect=this.getExtendedRect(),this.w=this.el.offsetWidth,this.canShrinkInY?this.h=this.getNaturalHeight():this.h=this.el.offsetHeight,this.align()}align(){r.getClosestFixedElement(this.target)&&s.setStyle(this.el,"position","fixed");let e=this.getFixedAnchor(this.w,this.h,this.position[0]),t=this.getAbsoluteAnchor(this.targetRect,this.position[1]);if(this.y=t[1]-e[1],this.alignVertical()&&(this.w=this.el.offsetWidth,e=this.getFixedAnchor(this.w,this.h,this.position[0])),this.x=t[0]-e[0],this.alignHerizontal(),this.trangle&&this.alignTrangle(),"fixed"!==getComputedStyle(this.el).position&&this.target!==document.body&&this.target!==document.documentElement){var i=this.el.offsetParent;if(i){var n=i.getBoundingClientRect();this.x-=n.left,this.y-=n.top}}s.setStyle(this.el,{left:Math.round(this.x),top:Math.round(this.y)})}getDirections(){return{top:this.position[0].includes("b")&&this.position[1].includes("t"),right:this.position[0].includes("l")&&this.position[1].includes("r"),bottom:this.position[0].includes("t")&&this.position[1].includes("b"),left:this.position[0].includes("r")&&this.position[1].includes("l")}}parseMargin(e){return"number"==typeof e&&(e=[e]),e[0]=e[0]||0,e[1]=void 0!==e[1]?e[1]||0:e[0],e[2]=void 0!==e[2]?e[2]||0:e[0],e[3]=void 0!==e[3]?e[3]||0:e[1],this.trangle&&((this.direction.top||this.direction.bottom)&&(e[0]+=this.trangle.offsetHeight,e[2]+=this.trangle.offsetHeight),(this.direction.left||this.direction.right)&&(e[1]+=this.trangle.offsetWidth,e[3]+=this.trangle.offsetWidth)),e}getExtendedRect(){let e=n.getRect(this.target);return e.top-=this.margin[0],e.height+=this.margin[0]+this.margin[2],e.bottom=e.top+e.height,e.left-=this.margin[3],e.width+=this.margin[1]+this.margin[3],e.right=e.left+e.width,e}getNaturalHeight(){let e=this.el.offsetHeight,t=this.el.scrollHeight-this.el.clientHeight;return t<=(this.trangle?this.trangle.offsetHeight:0)&&(t=Math.max(...[...this.el.children].map(e=>e.scrollHeight-e.clientHeight))),t>0?e+=t:(s.setStyle(this.el,"height",""),e=this.el.offsetHeight),e}getFixedAnchor(e,t,i){return[i.includes("l")?0:i.includes("r")?e:e/2,i.includes("t")?0:i.includes("b")?t:t/2]}getAbsoluteAnchor(e,t){let i=t.includes("l")?0:t.includes("r")?e.width:e.width/2,s=t.includes("t")?0:t.includes("b")?e.height:e.height/2;return[i+=e.left,s+=e.top]}alignVertical(){let e=document.documentElement.clientHeight,t=this.targetRect.top,i=e-this.targetRect.bottom,n=!1,r=this.y;return this.direction.top||this.direction.bottom?this.direction.top&&r<0&&t<i?(r=this.targetRect.bottom,this.direction.top=!1,this.direction.bottom=!0):r+this.h>e&&t>i&&(r=this.targetRect.top-this.h,this.direction.top=!0,this.direction.bottom=!1):(r+this.h>e&&(r=e-this.h),r<0&&(r=0)),r<0?this.direction.top&&this.canShrinkInY&&(r=0,s.setStyle(this.el,"height",t),n=!0):this.direction.bottom&&r+this.h>e&&this.canShrinkInY&&(s.setStyle(this.el,"height",i),n=!0),this.y=r,n}alignHerizontal(){let e=document.documentElement.clientWidth,t=this.targetRect.left,i=e-this.targetRect.right,s=this.x;this.direction.left||this.direction.right?this.direction.left&&s<0&&t<i?(s=this.targetRect.right,this.direction.left=!1,this.direction.right=!0):this.direction.right&&s>e-this.w&&t>i&&(s=this.targetRect.left-this.w,this.direction.left=!0,this.direction.right=!1):(s+this.w>e&&(s=e-this.w),s<0&&(s=0)),this.x=s}alignTrangle(){let e=!1,t=!1,i=this.trangle;if(this.direction.top||this.direction.bottom){let e;e=this.w>=this.targetRect.width?this.targetRect.left+this.targetRect.width/2-this.x-i.offsetWidth/2:this.w/2-i.offsetWidth/2,s.setStyle(i,{left:e,right:"",top:"",bottom:""});let n=s.getNumeric(i,"top"),r=s.getNumeric(i,"bottom");n<0&&this.direction.top&&(t=!0,s.setStyle(i,{top:"auto",bottom:n})),r<0&&this.direction.bottom&&(t=!0,s.setStyle(i,{top:r,bottom:"auto"}))}if(this.direction.left||this.direction.right){let t;t=this.h>=this.targetRect.height?this.targetRect.top+this.targetRect.height/2-this.y-i.offsetHeight/2:this.h/2-i.offsetHeight/2,s.setStyle(i,{top:t,bottom:"",left:"",right:""});let n=s.getNumeric(i,"left"),r=s.getNumeric(i,"right");n<0&&this.direction.left&&(e=!0,s.setStyle(i,{left:"auto",right:n})),r<0&&this.direction.right&&(e=!0,s.setStyle(i,{left:r,right:"auto"}))}if(e||t){let n="";e&&(n+="rotateY(180deg)"),t&&(n+=e?" ":"",n+="rotateX(180deg)"),s.setStyle(i,"transform",n)}else s.setStyle(i,"transform","")}}i.Aligner=a,i.alignToEvent=function(e,t,i=[0,0]){if("fixed"!==s.getStyle(e,"position"))throw new Error('Element to call "alignToEvent" must be fixed layout');let n=document.documentElement.clientWidth,r=document.documentElement.clientHeight,o=e.offsetWidth,l=e.offsetHeight,a=t.clientX,h=t.clientY,c=a+i[0],d=h+i[1];c+o>n&&(c=n-o),d+l>r&&(d=r-l),s.setStyle(e,{left:Math.round(c),top:Math.round(d)})}},{"./css":32,"./node":38,"./util":43}],31:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./css"),n=e("./util");i.defaultAnimationDuration=200,i.defaultAnimationEasing="ease-out-quad";const r=new WeakMap,o={ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1],"ease-in-quad":[.55,.085,.68,.53],"ease-in-cubic":[.55,.055,.675,.19],"ease-in-quart":[.895,.03,.685,.22],"ease-in-quint":[.755,.05,.855,.06],"ease-in-sine":[.47,0,.745,.715],"ease-in-expo":[.95,.05,.795,.035],"ease-in-circ":[.6,.04,.98,.335],"ease-in-back":[.6,-.28,.735,.045],"ease-out-quad":[.25,.46,.45,.94],"ease-out-cubic":[.215,.61,.355,1],"ease-out-quart":[.165,.84,.44,1],"ease-out-quint":[.23,1,.32,1],"ease-out-sine":[.39,.575,.565,1],"ease-out-expo":[.19,1,.22,1],"ease-out-circ":[.075,.82,.165,1],"ease-out-back":[.175,.885,.32,1.275],"ease-in-out-quad":[.455,.03,.515,.955],"ease-in-out-cubic":[.645,.045,.355,1],"ease-in-out-quart":[.77,0,.175,1],"ease-in-out-quint":[.86,0,.07,1],"ease-in-out-sine":[.445,.05,.55,.95],"ease-in-out-expo":[1,0,0,1],"ease-in-out-circ":[.785,.135,.15,.86],"ease-in-out-back":[.68,-.55,.265,1.55]},l={linear:function(e){return e}};function a(e){return"linear"===e?l[e]:l[e]=function(e){let[t,i,s,n]=o[e],r=3*t-3*s+1,l=-6*t+3*s,a=3*t,h=3*i-3*n+1,c=-6*i+3*n,d=3*i;return function(e){if(0===e)return 0;if(1===e)return 1;let t=-e,i=0,s=1,n=(i+s)/2;for(;s-i>1e-4;){let e=((r*n+l)*n+a)*n+t;e<0?i=n:s=n,n=(i+s)/2}return((h*n+c)*n+d)*n}}(e)}function h(e){return o.hasOwnProperty(e)?"cubic-bezier("+o[e].join(", ")+")":e}function c(e=i.defaultAnimationDuration,t=i.defaultAnimationEasing,s,n){let r=performance.now(),o=a(t),l=0,h=()=>{l=requestAnimationFrame(t=>{let i=(t-r)/e;if(i>=1)l=0,s(1),n&&n(!0);else{let e=o(i);s(e),h()}})};return h(),()=>{l&&(cancelAnimationFrame(l),n&&n(!1))}}function d(e,t,n,r,o,l=i.defaultAnimationEasing){let a;return{promise:new Promise(i=>{a=c(o,l,i=>{let o=n+(r-n)*i;"scrollTop"===t||"scrollLeft"===t?e[t]=o:s.setStyle(e,t,o)},i)}),stop:a}}function u(e,t,s,o=i.defaultAnimationDuration,l=i.defaultAnimationEasing){if(!e.animate)return Promise.resolve(!1);f(e),t=n.normativeStyleObject(t),s=n.normativeStyleObject(s);let a=h(l),c=e.animate([t,s],{easing:a,duration:o});return e.style.pointerEvents="none",r.set(e,c),new Promise(t=>{c.addEventListener("finish",()=>{e.style.pointerEvents="",r.delete(e),t(!0)},!1),c.addEventListener("cancel",()=>{r.delete(e),t(!1)},!1)})}i.getEasingFunction=a,i.getEasing=h,i.animateProperty=d,i.animatePropertyFrom=function(e,t,n,r,o=i.defaultAnimationEasing){let l;return d(e,t,n,l="scrollTop"===t||"scrollLeft"===t?e[t]:s.getNumeric(e,t),r,o)},i.animatePropertyTo=function(e,t,n,r,o=i.defaultAnimationEasing){let l;return d(e,t,l="scrollTop"===t||"scrollLeft"===t?e[t]:s.getNumeric(e,t),n,r,o)},i.animateByFunction=function(e,t,s,n,r=i.defaultAnimationEasing){let o;return{promise:new Promise(i=>{o=c(n,r,i=>{e(t+(s-t)*i)},i)}),stop:o}},i.animate=u;const p={transform:"none"};function m(e,t,s=i.defaultAnimationDuration,n=i.defaultAnimationEasing){let r={},o=getComputedStyle(e);for(let e in t)r[e]=o[e]||p[e]||"0";return u(e,t,r,s,n)}function f(e){let t=r.get(e);t&&(t.cancel(),e.style.pointerEvents="",r.delete(e))}i.animateFrom=m,i.animateTo=async function(e,t,n=i.defaultAnimationDuration,r=i.defaultAnimationEasing){let o={},l=getComputedStyle(e),a=Object.assign({},t);for(let e in a)""===a[e]&&(a[e]=p[e]||"0");for(let e in t)o[e]=l[e]||p[e]||"0";let h=await u(e,o,a,n,r);return h&&s.setStyle(e,t),h},i.animateToNextFrame=function(e,t,s=i.defaultAnimationDuration,n=i.defaultAnimationEasing){if(!e.animate)return Promise.resolve(!1);f(e),"string"==typeof t&&(t=[t]);let r={},o=getComputedStyle(e);for(let e of t)r[e]=o[e];return new Promise(t=>{requestAnimationFrame(()=>{m(e,r,s,n).then(t)})})},i.stopAnimation=f},{"./css":32,"./util":43}],32:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./util");function n(e,t){return getComputedStyle(e)[t]}i.getNumeric=function(e,t){let i=n(e,t);return parseFloat(i)||0},i.getStyle=n,i.setStyle=function e(t,i,n){if("object"==typeof i)for(let s of Object.keys(i))e(t,s,i[s]);else t.style.setProperty(i,s.normativeStyleValue(i,n))}},{"./util":43}],33:[function(e,t,i){"use strict";function s(e,t,i){return new Promise(s=>{let n=document.createElement("input");n.type="file",n.hidden=!0,n.accept=e,n.multiple=i,t&&(n.setAttribute("directory",""),n.setAttribute("webkitdirectory","")),n.onchange=(()=>{n.files?s(i?[...n.files]:n.files[0]||null):s(null)}),document.addEventListener("focus",function e(){document.removeEventListener("focus",e,!1),n.onchange=null,n.remove()},!1),document.body.appendChild(n),n.click()})}async function n(e){let t=[];return new Promise(async(i,s)=>{if(e){if(e.isFile)e.file(s=>{s.path=s.path||e.fullPath,t.push(s),i(t)},s);else if(e.isDirectory){let n=e.createReader();try{for(;;){let e=await r(n);if(t.push(...e),!e.length)break}}catch(e){s(e)}i(t)}}else i()})}function r(e){return new Promise((t,i)=>{let s=[];e.readEntries(async e=>{if(e&&e.length){try{for(let t of e)s.push(...await n(t))}catch(e){i(e)}t(s)}else t(s)},i)})}Object.defineProperty(i,"__esModule",{value:!0}),i.downloadURL=function(e,t){let i=document.createElement("a");i.hidden=!0,i.href=e,t&&(i.download=t),document.body.appendChild(i),i.click(),i.remove()},i.downloadText=function(e,t,i="text/plain"){let s=new Blob([t],{type:i}),n=new FileReader;n.onload=(()=>{n.onload=null;let t=document.createElement("a");t.download=e,t.href=n.result,document.body.append(t),t.click(),t.remove()}),n.readAsDataURL(s)},i.selectFile=function(e){return s(e,!1,!1)},i.selectMultipleFile=function(e){return s(e,!1,!0)},i.selectFolder=function(){return s("*",!0,!1)},i.selectMultipleFolder=function(){return s("*",!0,!0)},i.getFilesFromTransfer=async function(e){let t=[...e.files],i=[];if(e.items&&"function"==typeof DataTransferItem&&(DataTransferItem.prototype.hasOwnProperty("getAsEntry")||DataTransferItem.prototype.webkitGetAsEntry)){let s=[...e.items].filter(e=>"file"===e.kind);try{for(let e of s){let t=e.hasOwnProperty("getAsEntry")?e.getAsEntry():e.webkitGetAsEntry();i.push(...await n(t))}}catch(e){i=t}}else i=t;return i}},{}],34:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.encodeHTML=function(e){return e.replace(/&lt;/g,"<").replace(/&gt;/g,">")},i.decodeHTML=function(e){return(new DOMParser).parseFromString(`<!DOCTYPE html><body>${e}</body></html>`,"text/html").body.textContent}},{}],35:[function(e,t,i){"use strict";function s(e){for(var t in e)i.hasOwnProperty(t)||(i[t]=e[t])}Object.defineProperty(i,"__esModule",{value:!0}),s(e("./css")),s(e("./node")),s(e("./align")),s(e("./scroll")),s(e("./animate")),s(e("./pan")),s(e("./mouse-leave")),s(e("./file")),s(e("./query")),s(e("./storage")),s(e("./watch")),s(e("./net")),s(e("./html"))},{"./align":30,"./animate":31,"./css":32,"./file":33,"./html":34,"./mouse-leave":36,"./net":37,"./node":38,"./pan":39,"./query":40,"./scroll":41,"./storage":42,"./watch":44}],36:[function(e,t,i){"use strict";function s(e,t,i,s){let n=Array.isArray(t)?t:[t],r=!1,o=!1,l=null;function a(){r=!0,c()}function h(){r=!1,c(),l=setTimeout(function(){l=null,r||function(){if(o)return;e&&d();i()}()},s)}function c(){l&&(clearTimeout(l),l=null)}function d(){l&&clearTimeout(l);for(let e of n)e.removeEventListener("mouseenter",a,!1),e.removeEventListener("mouseleave",h,!1);o=!0}for(let e of n)e.addEventListener("mouseenter",a,!1),e.addEventListener("mouseleave",h,!1);return d}Object.defineProperty(i,"__esModule",{value:!0}),i.onMouseLeaveAll=function(e,t,i=200){return s(!1,e,t,i)},i.onceMouseLeaveAll=function(e,t,i=200){return s(!0,e,t,i)}},{}],37:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../base/string"),n=e("../base");i.ResourceLoader=class extends n.Emitter{constructor(e={}){super(),this.base="",this.continueOnError=!1,this.blobMap=new Map,Object.assign(this,e)}async load(e){let t=this.normalizeResources(e),i=(await this.getTotalSizes(t.map(e=>e.url))).map(e=>e||0),s=n.sum(i),r=0;for(let{url:e,type:n}of t)try{let t=await this.loadOne(e,e=>{this.emit("progress",Math.min(r+e,s),s)});r+=i.shift(),t&&await this.handleBlob(n,t)}catch(e){if(!this.continueOnError)throw e}}async getTotalSizes(e){let t=[];for(let i of e)t.push(this.getURLSize(i));return await Promise.all(t)}async getURLSize(e){let t=(await fetch(this.getAbsoluteURL(e),{method:"HEAD"})).headers.get("content-length");return null===t?null:Number(t)||null}getAbsoluteURL(e){return/^(?:https?:|\/\/)/.test(e)||!this.base?e:this.base+e}normalizeResources(e){return e.map(e=>"string"==typeof e?{url:e,type:this.inferResourceTypeFromURL(e)}:{url:e.url,type:e.type||"blob"})}inferResourceTypeFromURL(e){let t=s.firstMatch(e,/\.(\w+)(?:\?.*?)?$/).toLowerCase();return["css","js"].includes(t)?t:"blob"}async loadOne(e,t){let i=this.getAbsoluteURL(e);return new Promise((e,s)=>{let n=new XMLHttpRequest;n.responseType="blob",n.open("GET",i),n.onprogress=(e=>{e.lengthComputable&&t(e.loaded,e.total)}),n.onloadend=(()=>{n.status>=200&&n.status<400?(this.blobMap.set(i,n.response),e(n.response)):s()}),n.send()})}async handleBlob(e,t){"css"===e?await this.loadStyle(t):"js"===e&&await this.loadScript(t)}loadStyle(e){return new Promise((t,i)=>{let s=document.createElement("link");s.rel="stylesheet",s.href=URL.createObjectURL(e),document.head.append(s),s.addEventListener("load",()=>t()),s.addEventListener("error",()=>i())})}loadScript(e){return new Promise((t,i)=>{let s=document.createElement("script");s.async=!1,s.src=URL.createObjectURL(e),document.head.append(s),s.addEventListener("load",()=>t()),s.addEventListener("error",()=>i())})}getAsBlobURL(e){let t=this.blobMap.get(this.getAbsoluteURL(e));return t?URL.createObjectURL(t):null}getAsText(e){return new Promise(t=>{let i=this.blobMap.get(this.getAbsoluteURL(e));if(!i)return t(null);let s=new FileReader;s.onload=(()=>{t(s.result)}),s.readAsText(i)})}async getAsHTML(e){let t=await this.getAsText(e);return t?(new DOMParser).parseFromString(t,"text/html"):null}async getAsJSON(e){let t=await this.getAsText(e);return t?JSON.parse(t):null}async getAsBuffer(e){return new Promise(t=>{let i=this.blobMap.get(this.getAbsoluteURL(e));if(!i)return t(null);let s=new FileReader;s.onload=(()=>{t(s.result)}),s.readAsArrayBuffer(i)})}async getAsImage(e){return new Promise(t=>{let i=this.getAsBlobURL(e);if(!i)return t(null);let s=new Image;s.src=i,s.onload=(()=>t(s))})}}},{"../base":24,"../base/string":28}],38:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./css");function n(e){if(e===document.documentElement){let e=document.documentElement.clientWidth,t=document.documentElement.clientHeight;return{top:0,right:e,bottom:t,left:0,width:e,height:t}}{let t=e.getBoundingClientRect();return{top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}}}function r(e,t,i){if(t&&e===t)return null;let s=e.previousElementSibling;for(;s;){if(!(i&&s instanceof HTMLElement&&s.hidden))break;s=s.previousElementSibling}if(s)for(;s;){let e=s.lastElementChild;if(!(i&&e instanceof HTMLElement&&e.hidden))break;s=s.lastElementChild}else{if(s=e.parentElement,t&&s===t)return null;if(s&&i&&s instanceof HTMLElement&&s.hidden)return r(s,t,!0)}return s}function o(e,t,i){let s=null;if(!(i&&e instanceof HTMLElement&&e.hidden)&&(s=e.firstElementChild)){if(i&&s instanceof HTMLElement&&s.hidden)return o(s,t,i)}if(!s&&(s=e.nextElementSibling)){if(i&&s instanceof HTMLElement&&s.hidden)return o(s,t,i)}if(!s){for(s=e;s;){if(s=s.parentElement,t&&s===t)return null;if(s&&s.nextElementSibling){s=s.nextElementSibling;break}}if(s){if(i&&s instanceof HTMLElement&&s.hidden)return o(s,t,i)}}return s}i.getNodeIndex=function(e){if(e.parentNode){let t=0;for(let i of e.parentNode.childNodes){if(i===e)return t;t++}}return-1},i.getElementIndex=function(e){if(e.parentNode){let t=0;for(let i of e.parentNode.children){if(i===e)return t;t++}}return-1},i.getInnerWidth=function(e){return e.clientWidth?e.clientWidth-s.getNumeric(e,"paddingLeft")-s.getNumeric(e,"paddingRight"):0},i.getInnerHeight=function(e){let t=e.clientHeight;return t?t-s.getNumeric(e,"paddingTop")-s.getNumeric(e,"paddingBottom"):0},i.getOuterWidth=function(e){let t=e.offsetWidth;return t?t+s.getNumeric(e,"marginLeft")+s.getNumeric(e,"marginRight"):0},i.getOuterHeight=function(e){let t=e.offsetHeight;return t?t+s.getNumeric(e,"marginTop")+s.getNumeric(e,"marginBottom"):0},i.getRect=n,i.isInview=function(e,t=.5){let i=document.documentElement.clientWidth,s=document.documentElement.clientHeight,r=n(e),o=Math.min(i,r.right)-Math.max(0,r.left),l=Math.min(s,r.bottom)-Math.max(0,r.top);return o/Math.min(r.width,i)>t&&l/Math.min(r.height,s)>t},i.getPreviousNode=function(e,t){if(t&&e===t)return null;let i=e.previousSibling;if(i)for(;i.lastChild;)i=i.lastChild;else if(i=e.parentNode,t&&i===t)return null;return i},i.getNextNode=function(e,t){let i=e.firstChild||e.nextSibling;if(!i)for(i=e;i;){if(i=i.parentNode,t&&i===t)return null;if(i&&i.nextSibling){i=i.nextSibling;break}}return i},i.getPreviousElement=function(e,t){return r(e,t||null,!1)},i.getPreviousVisibleElement=function(e,t){return r(e,t||null,!0)},i.getNextElement=function(e,t){return o(e,t||null,!1)},i.getNextVisibleElement=function(e,t){return o(e,t||null,!0)}},{"./css":32}],39:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./css");i.onPan=function(e,t){let i,n;function r(t){s.setStyle(e,"transition","none"),i=t.changedTouches[0].pageX,n=t.changedTouches[0].pageY,document.addEventListener("touchmove",o,!1),document.addEventListener("touchend",l,!1)}function o(t){let r=t.changedTouches[0].pageX,o=t.changedTouches[0].pageY,l=r-i,a=o-n;Math.abs(l/a)>1&&(t.preventDefault(),s.setStyle(e,"transform",`translateX(${l}px)`))}function l(r){s.setStyle(e,{transition:"",transform:""}),document.removeEventListener("touchmove",o,!1),document.removeEventListener("touchend",l,!1);let a=r.changedTouches[0].pageX,h=r.changedTouches[0].pageY,c=a-i,d=h-n;Math.abs(c/d)>1&&Math.abs(c)>20?(r.preventDefault(),t(c>0?"l":"r")):Math.abs(c/d)<1&&Math.abs(d)>20&&(r.preventDefault(),t(d>0?"b":"t"))}return e.addEventListener("touchstart",r,!1),function(){e.removeEventListener("touchstart",r,!1)}}},{"./css":32}],40:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.parseQuery=function(e){let t=e.match(/\?(.+)/),i=t?t[1].split("&"):[],s={};for(let e of i){let[t,i]=e.split("=");t&&(i=decodeURIComponent(i||""),s[t]=i)}return s},i.useQuery=function(e,t){let i=e.includes("?");if("string"==typeof t)return e+(i?"&":"?")+t;if(t&&"object"==typeof t)for(let s in t)e+=(i?"&":"?")+s+"="+encodeURIComponent(t[s]),i=!0;return e}},{}],41:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./animate");i.isContentOverflow=function(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth};let n=null;function r(e){for(;e&&e.scrollWidth<=e.clientWidth&&e.scrollHeight<=e.clientHeight;)e=e.parentElement;return e}function o(e){let t="";return e.scrollHeight>e.clientHeight?t="y":e.scrollWidth>e.clientWidth&&(t="x"),t}function l(e,t,i){let s="x"===i?"offsetLeft":"offsetTop",n=e.offsetParent,r=e[s];if(n&&n!==t)if(n.contains(t))r-=t[s];else for(;n.offsetParent&&n.offsetParent!==t;)r+=(n=n.offsetParent)[s];else;return r}i.getScrollbarWidth=function(){if(null!==n)return n;let e=document.createElement("div");return e.style.cssText="width:100px; height:100px; overflow:scroll; position:absolute; left:-100px; top:-100px;",document.body.append(e),n=e.offsetWidth-e.clientWidth,e.remove(),n},i.getClosestScrollWrapper=r,i.scrollToView=function(e,t=0,i=0,n="ease-out"){let a=r(e);if(!a)return!1;let h=o(a);if(!h)return!1;if("y"===h){let r=a.scrollTop,o=null,c=l(e,a,h),d=c-t-r,u=c+e.offsetHeight+t-a.clientHeight-r;return d<0&&u<0?o=Math.max(d,u)+r:u>0&&d>0&&(o=Math.min(u,d)+r),null!==o&&o!==r&&(i?s.animatePropertyTo(a,"scrollTop",o,i,n):a.scrollTop=o,!0)}if("x"===h){let r=l(e,a,h),o=a.scrollLeft,c=0,d=r-t-o,u=r+e.offsetWidth+t-o-a.clientWidth;if(d<0&&u<0||e.offsetWidth>a.clientWidth?c=Math.max(0,r-t):u>0&&d>0&&(c=Math.min(a.scrollWidth,r+e.offsetWidth+t)-a.clientWidth),c!==o)return i?s.animatePropertyTo(a,"scrollLeft",c,i,n):a.scrollLeft=c,!0}return!1},i.getScrollDirection=o,i.getScrollOffset=l,i.scrollToTop=function(e,t=0,i=0,n="ease-out"){let o=r(e);if(!o)return!1;let a=l(e,o,"y"),h=o.scrollTop,c=Math.max(0,a-t);return c!==h&&(i?s.animatePropertyTo(o,"scrollTop",c,i,n):o.scrollTop=c,!0)}},{"./animate":31}],42:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});class s{constructor(e){this.prefix="",this.expireSuffix="_expires_",this.supported=null,this.prefix=e}isSupported(){if(null!==this.supported)return this.supported;try{let e=this.prefix+"test_supported";return localStorage[e]=1,delete localStorage[e],!0}catch(e){return!1}}has(e){return this.isSupported()?(e=this.prefix+e)in localStorage:null}get(e,t=null){if(!this.isSupported())return null;e=this.prefix+e;let i=localStorage[e];if(void 0===i)return t;if(!i||"string"!=typeof i)return t;try{i=JSON.parse(i);let s=localStorage[e+this.expireSuffix];return s&&s<Date.now()?(delete localStorage[e],delete localStorage[e+this.expireSuffix],t):i}catch(e){return t}}set(e,t,i){return this.isSupported()?(e=this.prefix+e,localStorage[e]=JSON.stringify(t),i&&i>0&&(localStorage[e+this.expireSuffix]=Date.now()+1e3*i),!0):null}delete(e){return this.isSupported()?(e=this.prefix+e,delete localStorage[e+this.expireSuffix],delete localStorage[e]):null}group(e){return new s(this.prefix+e)}}i.storage=new s("_ff_")},{}],43:[function(e,t,i){"use strict";function s(e,t){return"number"==typeof t&&/(?:width|height|left|right|top|bottom|size)$/i.test(e)?t+="px":t=t.toString(),t}Object.defineProperty(i,"__esModule",{value:!0}),i.normativeStyleValue=s,i.normativeStyleObject=function(e){for(let t of Object.keys(e))e[t]=s(t,e[t]);return e},i.getClosestFixedElement=function(e){for(;e&&e!==document.documentElement&&"fixed"!==getComputedStyle(e).position;)e=e.parentElement;return e===document.documentElement?null:e}},{}],44:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./node");function n(e,t,s,n,o,l){let a,h=i.WATCH_STATE_FN[o],c=null,d=null;if(!h)throw new Error(`Failed to watch, type "${o}" is not supported`);function u(e){for(let{contentRect:t}of e)m({width:t.width,height:t.height})}function p(e){for(let{intersectionRatio:t}of e){m("inview"===o?t>0:0===t)}}function m(i){(function(e,t){if(e===t)return!0;if("object"!=typeof e||"object"!=typeof t||!e||!t)return!1;let i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(let s of i){if(!t.hasOwnProperty(s))return!1;let i=e[s],n=t[s];if(i!==n)return!1}return!0})(i,a)||(l(a=i),(e||t&&i)&&f())}function f(){c?c.cancel():d&&d.unobserve(n)}return requestAnimationFrame(()=>{(t||s)&&((a=h(n))&&t||s)&&l(a),t&&a||("size"===o&&"function"==typeof window.ResizeObserver?(d=new window.ResizeObserver(u)).observe(n):"inview"!==o&&"outview"!==o||"function"!=typeof IntersectionObserver?(a=h(n),c=new r(()=>{m(h(n))})):(d=new IntersectionObserver(p)).observe(n))}),f}i.WATCH_STATE_FN={show:e=>e.offsetWidth>0||e.offsetHeight>0,hide:e=>0===e.offsetWidth&&0===e.offsetHeight,inview:e=>s.isInview(e),outview:e=>!s.isInview(e),size:e=>({width:e.clientWidth,height:e.clientHeight}),rect:e=>s.getRect(e)},i.watchLayout=function(e,t,i){return n(!1,!1,!1,e,t,i)},i.watchLayoutImmediately=function(e,t,i){return n(!1,!1,!0,e,t,i)},i.watchLayoutOnce=function(e,t,i){return n(!0,!1,!1,e,t,i)},i.watchLayoutUntil=function(e,t,i){return n(!0,!0,!1,e,t,i)};const r=class{constructor(e){this.ended=!1,this.callback=e,this.next()}next(){this.ended||(this.callback.call(null),requestAnimationFrame(()=>this.next()))}cancel(){this.ended=!0}}},{"./node":38}],45:[function(e,t,i){"use strict";function s(e){for(var t in e)i.hasOwnProperty(t)||(i[t]=e[t])}Object.defineProperty(i,"__esModule",{value:!0}),s(e("./base")),s(e("./dom"))},{"./base":24,"./dom":35}],46:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../style");s.defineBinding("class",class{constructor(e,t,i){if(this.lastClassNames=null,i){if(i.length>1)throw new Error(`Modifier "${i.join(".")}" is not allowed, at most one modifier as class name can be specified for ":class"`);if(!/^\$?[\w-]+$/.test(i[0]))throw new Error(`Modifier "${i[0]}" is not a valid class name`)}this.el=e,this.modifiers=i,this.scopeName=t?t.el.localName:"",this.scopedClassNameSet=this.scopeName?n.getScopedClassNameSet(this.scopeName):void 0}update(e){if(this.lastClassNames&&this.el.classList.remove(...this.lastClassNames),e){let t=this.lastClassNames=this.parseClass(e);this.el.classList.add(...t)}}parseClass(e){let t={};if(this.modifiers)e&&(t[this.modifiers[0]]=!0);else if(Array.isArray(e))for(let i of e)t[i]=!0;else if(e&&"object"==typeof e)for(let i of Object.keys(e))t[i]=!!e[i];else if("string"==typeof e)for(let i of e.split(/\s+/))i&&(t[i]=!0);let i=[];for(let e in t)t[e]&&(this.scopedClassNameSet&&this.scopedClassNameSet.has(e)&&(e=e+"__"+this.scopeName),i.push(e));return i}remove(){this.lastClassNames&&this.el.classList.remove(...this.lastClassNames)}})},{"../style":102,"./define":47}],47:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=new Map;i.defineBinding=function e(t,i){return s.has(t)&&console.warn(`You are trying to overwrite binding definition "${t}"`),i?(s.set(t,i),function(...e){return new n(t,...e)}):i=>e(t,i)},i.getDefinedBinding=function(e){return s.get(e)};class n{constructor(e,...t){this.name=e,this.args=t}}i.BindingResult=n},{}],48:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define");s.defineBinding("enable",class{constructor(e){this.el=e}update(e){e?this.el.removeAttribute("disabled"):this.el.setAttribute("disabled","")}remove(){this.el.removeAttribute("disabled")}}),s.defineBinding("disable",class{constructor(e){this.el=e}update(e){e?this.el.setAttribute("disabled",""):this.el.removeAttribute("disabled")}remove(){this.el.removeAttribute("disabled")}})},{"./define":47}],49:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e("./define").defineBinding("html",class{constructor(e){this.el=e}update(e){this.el.innerHTML=null==e?"":String(e)}remove(){this.el.innerHTML=""}})},{"./define":47}],50:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("./define");i.defineBinding=s.defineBinding,i.getDefinedBinding=s.getDefinedBinding,i.BindingResult=s.BindingResult,e("./class"),e("./style"),e("./model"),e("./ref"),e("./html"),e("./enable-disable"),e("./show-hide"),function(e){for(var t in e)i.hasOwnProperty(t)||(i[t]=e[t])}(e("./show-hide"))},{"./class":46,"./define":47,"./enable-disable":48,"./html":49,"./model":51,"./ref":52,"./show-hide":53,"./style":54}],51:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../component"),r=e("../dom-event"),o=["lazy","number"];s.defineBinding("model",class{constructor(e,t,i){if(this.isBooleanValue=!1,this.isMultiSelect=!1,this.unwatch=null,!t)throw new Error('A context must be provided when using ":model=property"');if(i){if(i.length>2)throw new Error(`Modifier "${i.join(".")}" is not allowed, at most two modifiers can be specified for ":model"`);for(let e of i)if(!o.includes(e))throw new Error(`Modifier "${i}" is not allowed, it must be one of ${o.map(e=>`"${e}"`).join(", ")}`)}if(this.el=e,this.modifiers=i,this.context=t,this.isComModel=e.localName.includes("-"),this.isComModel)this.property="value",this.eventName="change";else{let t=["input","select","textarea"].includes(e.localName),s=i&&"lazy"===i[0];this.isBooleanValue="input"===e.localName&&("checkbox"===e.type||"radio"===e.type),this.isMultiSelect="select"===e.localName&&e.multiple,this.isBooleanValue?(this.property="checked",this.eventName="change"):t?(this.property="value",this.eventName=s?"change":"input"):(this.property="innerHTML",this.eventName=s?"blur":"input")}}update(e){if(!e||"string"!=typeof e)throw new Error(`"${e}" is not a valid model name`);if(this.modelName=e,this.isComModel){let e=n.getComponent(this.el);e?this.bindCom(e):n.onComponentCreatedAt(this.el,this.bindCom.bind(this))}else this.watchContextModelValue(),r.on(this.el,this.eventName,this.onEventInputOrChange.bind(this))}bindCom(e){this.com||(this.com=e,e.hasOwnProperty("checked")&&"boolean"==typeof e.checked&&(this.property="checked"),e.on(this.eventName,this.setModelValueToContext,this)),this.watchContextModelValue()}watchContextModelValue(){this.unwatch&&this.unwatch(),this.unwatch=this.context.watchImmediately(this.getModelValueFromContext.bind(this),this.setModelValueToTarget.bind(this))}getModelValueFromContext(){let e=this.modelName.split("."),t=this.context;for(let i of e){if(!t||"object"!=typeof t){t=void 0;break}t=t[i]}return t}setModelValueToContext(e){let t=this.modelName.split("."),i=this.context;for(let s=0;s<t.length;s++){let n=t[s];if(!i||"object"!=typeof i)break;s<t.length-1?i=i[n]:i[n]=e}}onEventInputOrChange(e){let t,i=this.modifiers&&this.modifiers.includes("number");this.isMultiSelect?(t=Array.from(this.el.options).filter(e=>e.selected).map(e=>e.value),i&&(t=t.map(Number))):(t=this.el[this.property],i&&(t=Number(t))),this.setModelValueToContext(t)}setModelValueToTarget(e){if(this.isComModel){let t=this.com;t[this.property]!==e&&(t[this.property]=e)}else this.setInputValue(e)}setInputValue(e){if(this.isMultiSelect&&!Array.isArray(e))throw new Error(`:model="${this.modelName}" of select[multiple] requires an array as value`);if(this.isMultiSelect)for(let t of this.el.options)t.selected=e.includes(t.value);else{let t=this.el;e=null==e?"":e,t[this.property]!==e&&(t[this.property]=e)}}remove(){this.setInputValue("")}})},{"../component":58,"../dom-event":71,"./define":47}],52:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e("./define").defineBinding("ref",class{constructor(e,t){if(!t)throw new Error('A context must be provided when using ":ref"');this.el=e,this.context=t}update(e){"string"==typeof e?this.context.refs[e]=this.el:"function"==typeof e&&e.call(this.context,this.el)}remove(){}})},{"./define":47}],53:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../directives");class r{constructor(e,t){this.value=void 0,this.el=e,this.transition=new n.DirectiveTransition(t)}update(e,t){if(e=!!e,this.transition.setOptions(t),e!==this.value){let t=void 0===this.value;e?(this.el.hidden=!1,this.transition.shouldPlayEnter(t)&&this.transition.mayPlayEnter(this.el)):this.transition.shouldPlayLeave(t)?this.transition.mayPlayLeave(this.el).then(e=>{e&&(this.el.hidden=!0)}):this.el.hidden=!0,this.value=e}}remove(){this.el.hidden=!1}}i.show=s.defineBinding("show",r);i.hide=s.defineBinding("hide",class extends r{update(e,t){super.update(!e,t)}})},{"../directives":63,"./define":47}],54:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=["px","percent","url"];s.defineBinding("style",class{constructor(e,t,i){if(this.lastStyle=null,i){if(i.length>2)throw new Error(`Modifier "${i.join(".")}" is not allowed, at most two modifiers (as style name property value modifier) can be specified for ":style"`);if(2===i.length&&!n.includes(i[1]))throw new Error(`Modifier "${i[1]}" is not allowed, it must be one of ${n.join(", ")}`);if(!/^[\w-]+$/.test(i[0])||n.includes(i[0]))throw new Error(`Modifier "${i[0]}" is not a valid style property`)}this.el=e,this.modifiers=i}update(e){this.lastStyle&&this.removeStyle(this.lastStyle),""!==e&&null!=e&&this.addStyle(this.lastStyle=this.parseStyle(e))}removeStyle(e){for(let t of Object.keys(e))this.el.style[t]=""}addStyle(e){let t=this.modifiers?this.modifiers[1]:"";for(let i of Object.keys(e)){let s=e[i];null==s?s="":"px"===t?s+="px":"percent"===t?s+="%":"url"===t&&(s='url("'+s+'")'),"number"==typeof s&&(s+="px"),this.el.style[i]=s}}parseStyle(e){let t={};if(this.modifiers)""!==e&&null!=e&&(t[this.modifiers[0]]=e);else if(Array.isArray(e))for(let i of e.join(";").split(/\s*;\s*/)){let[e,s]=i.split(/\s*:\s*/);e&&s&&(t[e]=s)}else if(e&&"object"==typeof e)t=e;else if(e&&"string"==typeof e)for(let i of e.split(/\s*;\s*/)){let[e,s]=i.split(/\s*:\s*/);e&&s&&(t[e]=s)}return t}remove(){this.lastStyle&&this.removeStyle(this.lastStyle)}})},{"./define":47}],55:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../libs/emitter"),n=e("../parts"),r=e("../queue"),o=e("../observer"),l=e("../watcher"),a=e("../style"),h=e("../libs/node-helper"),c=e("../element"),d=e("./from-element"),u=e("./life-cycle"),p=e("./slot");class m extends s.Emitter{constructor(e){return super(),this.refs={},this.slots={},this.__slotProcesser=null,this.__rootPart=null,this.__updated=!1,this.__watcherGroup=null,this.__connected=!0,this.el=e,o.observeComTarget(this)}__emitCreated(){d.setComponentAtElement(this.el,this),u.emitComponentCreatedCallbacks(this.el,this),this.onCreated(),this.emit("created"),this.el.childNodes.length>0&&(this.__slotProcesser=new p.SlotProcesser(this))}__emitConnected(){this.__connected||(o.restoreAsDependency(o.targetMap.get(this)),this.__watcherGroup&&this.__watcherGroup.connect(),this.__connected=!0),this.update(),this.onConnected(),this.emit("connected"),u.onComponentConnected(this)}__emitDisconnected(){o.clearDependencies(this),o.clearAsDependency(o.targetMap.get(this)),this.__watcherGroup&&this.__watcherGroup.disconnect(),this.__connected=!1,this.onDisconnected(),this.emit("disconnected"),u.onComponentDisconnected(this)}__updateImmediately(){if(!this.__connected)return;o.startUpdating(this);let e=this.render();o.endUpdating(this),this.__rootPart?this.__rootPart.update(e):null!==e&&(this.__slotProcesser&&this.__slotProcesser.initRestSlotRange(),this.__rootPart=new n.NodePart(new h.NodeAnchor(this.el,h.NodeAnchorType.Root),e,this)),this.__slotProcesser&&this.__slotProcesser.mayFillSlots(),!this.__updated&&(this.onReady(),this.emit("ready"),this.__updated=!0),this.onUpdated(),this.emit("updated")}__updateWatcherGroup(){this.__watcherGroup&&this.__watcherGroup.update()}__foundSlotsWhenRendering(){this.__slotProcesser&&this.__slotProcesser.needToFillSlotsLater()}render(){return null}update(){r.enqueueComponentUpdate(this)}closest(e){return c.getClosestComponent(this.el,e)}onCreated(){}onReady(){}onUpdated(){}onRendered(){}onConnected(){}onDisconnected(){}watch(e,t){return this.__watcherGroup=this.__watcherGroup||new l.WatcherGroup,this.__watcherGroup.watch(e,t.bind(this))}watchImmediately(e,t){return this.__watcherGroup=this.__watcherGroup||new l.WatcherGroup,this.__watcherGroup.watchImmediately(e,t.bind(this))}watchOnce(e,t){return this.__watcherGroup=this.__watcherGroup||new l.WatcherGroup,this.__watcherGroup.watchOnce(e,t.bind(this))}watchUntil(e,t){return this.__watcherGroup=this.__watcherGroup||new l.WatcherGroup,this.__watcherGroup.watchUntil(e,t.bind(this))}scopeClassName(e){let t="."===e[0]?e.slice(1):e,i=a.getScopedClassNameSet(this.el.localName);return i&&i.has(t)?e+"__"+this.el.localName:e}}m.style=null,m.properties=null,i.Component=m},{"../element":72,"../libs/emitter":75,"../libs/node-helper":76,"../observer":78,"../parts":90,"../queue":100,"../style":102,"../watcher":104,"./from-element":57,"./life-cycle":59,"./slot":60}],56:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=new Map;i.defineComponent=function(e,t){if(s.has(e)&&console.warn(`You are trying to overwrite component definition "${e}"`),t.properties)for(let e=0;e<t.properties.length;e++){let i=t.properties[e];/[A-Z]/.test(i)&&(t.properties[e]=i.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()))}s.set(e,t)},i.getComponentConstructorByName=function(e){return s.get(e)}},{}],57:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./life-cycle"),n=new WeakMap;i.setComponentAtElement=function(e,t){n.set(e,t)},i.getComponent=function(e){return n.get(e)},i.getComponentAsync=function(e){if(e.localName.includes("-")){let t=n.get(e);return t?Promise.resolve(t):new Promise(t=>{s.onComponentCreatedAt(e,t)})}return Promise.resolve(void 0)}},{"./life-cycle":59}],58:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("./define");i.defineComponent=s.defineComponent,i.getComponentConstructorByName=s.getComponentConstructorByName;var n=e("./component");i.Component=n.Component;var r=e("./from-element");i.getComponent=r.getComponent,i.getComponentAsync=r.getComponentAsync;var o=e("./life-cycle");i.onComponentCreatedAt=o.onComponentCreatedAt,i.update=o.update},{"./component":55,"./define":56,"./from-element":57,"./life-cycle":59}],59:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../watcher"),n=new WeakMap;i.onComponentCreatedAt=function(e,t){let i=n.get(e);i||n.set(e,i=[]),i.push(t)},i.emitComponentCreatedCallbacks=function(e,t){let i=n.get(e);if(i){for(let e of i)e(t);n.delete(e)}};const r=new Set;i.onComponentConnected=function(e){r.add(e)},i.onComponentDisconnected=function(e){r.delete(e)},i.update=function(){s.globalWatcherGroup.update();for(let e of r)e.update(),e.__updateWatcherGroup()}},{"../watcher":104}],60:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../libs/node-helper");i.SlotProcesser=class{constructor(e){this.restSlotNodeRange=null,this.hasSlotsToBeFilled=!1,this.com=e,this.initSlotNodes()}initSlotNodes(){let e=this.com.slots;for(let t of[...this.com.el.children]){let i=t.getAttribute("slot");if(i){let s=e[i];s||(s=e[i]=[]),s.push(t),t.remove()}}}initRestSlotRange(){let e=document.createDocumentFragment();e.append(...this.com.el.childNodes),this.restSlotNodeRange=new s.NodeRange(e)}needToFillSlotsLater(){this.hasSlotsToBeFilled=!0}mayFillSlots(){if(this.hasSlotsToBeFilled){let e=this.com.slots,t=this.com.el.querySelectorAll("slot");for(let i of t){let t=i.getAttribute("name");t?e&&e[t]&&i.replaceWith(...e[t]):this.restSlotNodeRange&&i.replaceWith(this.restSlotNodeRange.getFragment())}this.hasSlotsToBeFilled=!1}}}},{"../libs/node-helper":76}],61:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../parts"),r=e("../parts/template-result"),o=e("../libs/node-helper"),l=e("./libs/directive-transition");i.cache=s.defineDirective(class{constructor(e,t){this.templates=[],this.currentTemplate=null,this.anchor=e,this.context=t,this.transition=new l.DirectiveTransition(t)}async playEnterTransition(e){let t=e.range.getFirstElement();t&&await this.transition.mayPlayEnter(t)}canMergeWith(e){return!0}merge(e,t){if(this.transition.setOptions(t),e)if("string"==typeof e&&(e=r.text`${e}`),this.currentTemplate&&this.currentTemplate.canMergeWith(e))this.currentTemplate.merge(e);else{this.currentTemplate&&this.cacheCurrentTemplate();let t=this.templates.find(t=>t.canMergeWith(e));t?(t.merge(e),this.anchor.insert(t.range.getFragment()),this.playEnterTransition(t),this.currentTemplate=t):this.initTrueResult(e)}else this.currentTemplate&&this.cacheCurrentTemplate()}initTrueResult(e){"string"==typeof e&&(e=r.text`${e}`);let t=0===this.templates.length,i=new n.Template(e,this.context),s=i.range.getFragment();this.anchor.insert(s),this.transition.shouldPlayEnter(t)&&this.playEnterTransition(i),this.currentTemplate=i,this.templates.push(i)}async cacheCurrentTemplate(){let e=this.currentTemplate,t=e.range.getFirstElement();this.anchor.type===o.NodeAnchorType.Next&&t&&t.parentNode&&t.parentNode!==this.anchor.el.parentNode&&(this.anchor=new o.NodeAnchor(t.parentNode,o.NodeAnchorType.Parent)),this.transition.shouldPlay()&&t?this.transition.mayPlayLeave(t).then(t=>{t&&e.range.cacheFragment()}):e.range.cacheFragment(),this.currentTemplate=null}remove(){this.currentTemplate&&this.currentTemplate.remove()}})},{"../libs/node-helper":76,"../parts":90,"../parts/template-result":98,"./define":62,"./libs/directive-transition":64}],62:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});let s=0;const n=new Map;i.defineDirective=function(e){let t=s++;return n.set(t,e),function(...e){return new r(t,...e)}};class r{constructor(e,...t){this.id=e,this.args=t}}i.DirectiveResult=r,i.createDirectiveFromResult=function(e,t,i){let s=new(n.get(i.id))(e,t);return s.merge(...i.args),s}},{}],63:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("./libs/directive-transition");i.DirectiveTransition=s.DirectiveTransition;var n=e("./define");i.defineDirective=n.defineDirective,i.DirectiveResult=n.DirectiveResult,i.createDirectiveFromResult=n.createDirectiveFromResult;var r=e("./cache");i.cache=r.cache;var o=e("./repeat");i.repeat=o.repeat;var l=e("./live-repeat");i.liveRepeat=l.liveRepeat,i.LiveRepeatDirective=l.LiveRepeatDirective;var a=e("./live-async-repeat");i.liveAsyncRepeat=a.liveAsyncRepeat,i.LiveAsyncRepeatDirective=a.LiveAsyncRepeatDirective},{"./cache":61,"./define":62,"./libs/directive-transition":64,"./live-async-repeat":68,"./live-repeat":69,"./repeat":70}],64:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../../transition");i.DirectiveTransition=class{constructor(e,t){this.options=null,this.enterAtStart=!1,this.leaveAtStart=!1,this.onend=null,this.context=e,this.setOptions(t)}setOptions(e){if(e&&"object"==typeof e&&e.hasOwnProperty("transition")){let t=e;this.enterAtStart=!!t.enterAtStart,this.leaveAtStart=!!t.leaveAtStart,this.onend=t.onend||null,this.options=s.formatShortTransitionOptions(t.transition)}else this.enterAtStart=!1,this.leaveAtStart=!1,this.onend=null,this.options=e?s.formatShortTransitionOptions(e):null}shouldPlay(){return!!this.options}shouldPlayEnter(e=!1){return!(!this.shouldPlay()||e&&!this.enterAtStart)}shouldPlayLeave(e=!1){return!(!this.shouldPlay()||e&&!this.leaveAtStart)}async mayPlayEnter(e){if(!this.shouldPlay())return!0;let t=await new s.Transition(e,this.options).enter();return this.onend&&this.onend.call(this.context,"enter",t),t}async mayPlayLeave(e){if(!this.shouldPlay())return!0;let t=await new s.Transition(e,this.options).leave();return this.onend&&this.onend.call(this.context,"leave",t),t}}},{"../../transition":103}],65:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./util");i.PageDataCacher=class{constructor(e){this.map={},this.requestingMap=new Map,this.pageSize=e}setDataGetter(e){this.dataGetter=e}getExistingData(e,t){let i,n=Math.floor(e/this.pageSize),r=Math.floor((t-1)/this.pageSize),o=[],l=!0;for(let a=n;a<=r;a++){let h=this.map[a],c=h?h.items:i||(i=s.repeatValue(null,this.pageSize));h&&!h.fresh&&(l=!1),a===n&&a===r?o.push(...c.slice(e-n*this.pageSize,t-r*this.pageSize)):a===n?o.push(...c.slice(e-n*this.pageSize)):a===r?o.push(...c.slice(0,t-r*this.pageSize)):o.push(...c)}return i&&(l=!1),{data:o,fresh:l}}async getFreshData(e,t){let i=Math.floor(e/this.pageSize),s=Math.floor((t-1)/this.pageSize),n=[];for(let e=i;e<=s;e++){let t=this.map[e];t&&t.fresh||n.push(this.loadPageData(e))}return await Promise.all(n),this.getExistingData(e,t).data}loadPageData(e){if(this.requestingMap.has(e))return this.requestingMap.get(e);let t=this.dataGetter(e*this.pageSize,this.pageSize);if(t instanceof Promise){let i=t.then(t=>{this.map[e]={items:[...t],fresh:!0},this.requestingMap.delete(e)});return this.requestingMap.set(e,i),i}return this.map[e]={items:[...t],fresh:!0},Promise.resolve()}moveData(e,t){0!==t&&(t>0?this.moveDataRight(e,t):this.moveDataLeft(e,-t))}moveDataRight(e,t){let i=Math.floor(e/this.pageSize),s=Object.keys(this.map).map(Number),n=-1,r=new Set;for(let o=s.length-1;o>=0;o--){let l=s[o];if(l<i)continue;r.add(l);let a=l+Math.floor(t/this.pageSize),h=l+Math.ceil(t/this.pageSize);if(h!==n){let i=h*this.pageSize-t;this.generateNewCacheItem(h,i,e,e)&&r.delete(h)}if(a!==h){let i=a*this.pageSize-t;this.generateNewCacheItem(a,i,e,e)&&r.delete(a)}n=a}n>i&&this.generateNewCacheItem(i,i*this.pageSize-t,e,e)&&r.delete(i);for(let e of r)delete this.map[e]}generateNewCacheItem(e,t,i,n){let r,o=Math.floor(i/this.pageSize),l=t+this.pageSize>n,a=e===o&&this.map[e]&&i>o*this.pageSize;if(!l&&!a)return!1;if(r=t<n?[...s.repeatValue(null,n-t),...this.getExistingData(n,t+this.pageSize).data]:this.getExistingData(t,t+this.pageSize).data,e===o){let e=i-o*this.pageSize;r=[...this.getExistingData(o*this.pageSize,i).data,...r.slice(e)]}return!!this.hasAnyItem(r)&&(this.map[e]={items:r,fresh:this.hasNoNull(r)},!0)}moveDataLeft(e,t){let i=Math.floor(e/this.pageSize),s=Object.keys(this.map).map(Number),n=-1,r=new Set;for(let o=0;o<s.length;o++){let l=s[o];if(l<i)continue;r.add(l);let a=l-Math.ceil(t/this.pageSize),h=l-Math.floor(t/this.pageSize);if(a>=0&&a!==n){let i=a*this.pageSize+t;this.generateNewCacheItem(a,i,e,e+t)&&r.delete(a)}if(h>=0&&h!==a){let i=h*this.pageSize+t;this.generateNewCacheItem(h,i,e,e+t)&&r.delete(h)}n=h}for(let e of r)delete this.map[e]}hasNoNull(e){return e.every(e=>null!==e)}hasAnyItem(e){return e.some(e=>null!==e)}clear(){this.map={}}beStale(){for(let e of Object.values(this.map))e.fresh=!1}}},{"./util":66}],66:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.binaryFindIndexToInsert=function(e,t){if(0===e.length)return 0;let i=t(e[0]);if(0===i||-1===i)return 0;if(1===e.length)return 1;if(0===(i=t(e[e.length-1])))return e.length-1;if(1===i)return e.length;let s=0,n=e.length-1;for(;n-s>1;){let i=Math.floor((n+s)/2),r=t(e[i]);if(0===r)return i;-1===r?n=i:s=i}return n};i.ScrollerClientRect=class{constructor(e){let t=e.getBoundingClientRect(),i=getComputedStyle(e),s=parseFloat(i.paddingTop)||0,n=parseFloat(i.paddingRight)||0,r=parseFloat(i.paddingTop)||0,o=parseFloat(i.paddingLeft)||0;this.rect={top:t.top+s,right:t.right-n,bottom:t.bottom-r,left:t.left+o,width:t.width-o-n,height:t.height-s-r}}isRectAbove(e){return e.bottom<=this.rect.top}isRectBelow(e){return e.top>=this.rect.bottom}isRectIn(e){return!this.isRectAbove(e)&&!this.isRectBelow(e)}},i.throttleByAnimationFrame=function(e){let t=null;return function(...i){t||(t=requestAnimationFrame(()=>{t=null}),e(...i))}},i.repeatValue=function(e,t){let i=[];for(let s=0;s<t;s++)i.push(e);return i}},{}],67:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../../parts"),n=e("../../watcher");i.WatchedTemplate=class{constructor(e,t,i,s){this.context=e,this.templateFn=t,this.item=i,this.index=s,this.parseAndWatchTemplate()}parseAndWatchTemplate(){let{templateFn:e}=this;this.watcher=new n.Watcher(()=>e(this.item,this.index),e=>{if(this.template.canMergeWith(e))this.template.merge(e);else{let t=new s.Template(e,this.context);this.template.range.startNode.before(t.range.getFragment()),this.template.remove(),this.template=t}}),this.template=new s.Template(this.watcher.value,this.context)}updateIndex(e){this.index=e,this.watcher.__updateImmediately()}update(e,t){this.item=e,this.index=t,this.watcher.__updateImmediately()}remove(){this.template.remove(),this.watcher.disconnect()}}},{"../../parts":90,"../../watcher":104}],68:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../parts"),r=e("./live-repeat"),o=e("./libs/page-data-cacher"),l=e("../observer");class a extends r.LiveRepeatDirective{constructor(){super(...arguments),this.dataCount=null,this.key=null,this.knownDataCount=-1,this.needToUpdateSliderPositionAfterDataCountKnown=!1,this.updateId=0}validateTemplateFn(e){try{if(!(e(null,0)instanceof n.TemplateResult))throw new Error}catch(t){throw new Error(`Please makesure "${e.toString()}" can render "null" value`)}}initRenderOptions(e){this.dataCacher=new o.PageDataCacher(this.pageSize),this.updateRenderOptions(e),this.updateDataCount()}updateRenderOptions(e){e.averageItemHeight&&(this.averageItemHeight=e.averageItemHeight),e.onUpdated&&(this.onUpdated=e.onUpdated),this.dataCacher.setDataGetter(e.dataGetter),this.dataCount=e.dataCount}async updateDataCount(){if(!this.dataCount)return;let e;this.knownDataCount=-1,(e="function"==typeof this.dataCount?this.dataCount():this.dataCount)instanceof Promise?this.knownDataCount=await e:this.knownDataCount=e,this.needToUpdateSliderPositionAfterDataCountKnown&&this.updateSliderPosition()}async update(e=!0){this.updateSliderPosition();let t,i,s=this.limitEndIndex(this.startIndex+this.pageSize*this.renderPageCount),n=!e;if(e){let{data:e,fresh:i}=this.dataCacher.getExistingData(this.startIndex,s);t=this.updateData(e),n=!i}let r=this.updateId+=1;n&&(i=this.dataCacher.getFreshData(this.startIndex,s).then(e=>r===this.updateId?this.updateData(e):Promise.resolve())),t&&await t,i&&await i}async updateData(e){this.key&&(e=this.uniqueData(e)),e=e.map(l.observe),await super.updateData(e)}uniqueData(e){let t=new Set;return e.filter(e=>{if(e){let i=e[this.key];if(t.has(i))return!1;t.add(i)}return!0})}updateSliderPosition(){-1===this.knownDataCount&&(this.needToUpdateSliderPositionAfterDataCountKnown=!0),super.updateSliderPosition()}getTotalDataCount(){return this.knownDataCount}async reload(){this.dataCacher.beStale(),this.updateDataCount(),await this.update(!1)}async reset(e=0){this.dataCacher.clear(),this.updateDataCount(),await this.setStartIndex(e)}getItem(e){return this.dataCacher.getExistingData(e,e+1).data[0]}getRenderedItem(e){return e>=this.startIndex&&e<this.startIndex+this.data.length?this.data[e-this.startIndex]:null}notifyAdded(e,t=1){this.dataCacher.moveData(e,t),this.update()}notifyDeleted(e,t=1){this.dataCacher.moveData(e,-t),this.update()}}i.LiveAsyncRepeatDirective=a,i.liveAsyncRepeat=s.defineDirective(a)},{"../observer":78,"../parts":90,"./define":62,"./libs/page-data-cacher":65,"./live-repeat":69}],69:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../dom-event"),r=e("../watcher"),o=e("./repeat"),l=e("../queue"),a=e("./libs/util"),h=e("../observer");class c extends o.RepeatDirective{constructor(e,t){super(e,t),this.pageSize=50,this.renderPageCount=1,this.renderPageCountChecked=!1,this.needToApplyStartIndex=!1,this.averageItemHeight=0,this.positionToKeep=null,this.lastAdjustedTopDiff=0,this.onUpdated=null,this.rawData=null,this.initElements()}initElements(){if(this.slider=this.anchor.el.parentElement,this.scroller=this.slider.parentElement,!this.slider||!this.scroller||1!==this.scroller.children.length)throw new Error('"liveRepeat" must be contained in the struct like "\n\t\t\t\t<div style="overflow: auto | scroll" title="as a scroll parent">\n\t\t\t\t\t<div title="as a scroll slider">\n\t\t\t\t\t\t${liveRepeat(...)}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"');n.on(this.scroller,"scroll.passive",a.throttleByAnimationFrame(this.onScroll.bind(this))),l.onRenderComplete(()=>{["scroll","auto"].includes(getComputedStyle(this.scroller).overflowY)||console.error('The "overflow-y" value of "scroller" out of "liveRepeat" directive must be "scroll" or "auto"')})}canMergeWith(e,t){return t.toString()===this.templateFn.toString()}merge(e,t,i){this.firstlyMerge&&(this.initRenderOptions(e),this.validateTemplateFn(t),e.ref&&e.ref(this)),this.templateFn=t,this.transition.setOptions(i),this.updateRenderOptions(e),this.firstlyMerge=!1}validateTemplateFn(e){}initRenderOptions(e){void 0!==e.pageSize&&e.pageSize>0&&(this.pageSize=e.pageSize),e.renderPageCount&&(this.renderPageCount=e.renderPageCount),e.averageItemHeight&&(this.averageItemHeight=e.averageItemHeight)}updateRenderOptions(e){e.averageItemHeight&&(this.averageItemHeight=e.averageItemHeight),e.onUpdated&&(this.onUpdated=e.onUpdated),void 0!==e.data&&this.watchRawDataAndUpdateImmediately(e.data)}watchRawDataAndUpdateImmediately(e){if(this.unwatchData&&(this.unwatchData(),this.unwatchData=null),!e)return void(this.rawData=[]);this.unwatchData=(this.context||r.globalWatcherGroup).watchImmediately(()=>[...e].map(h.observe),e=>{this.rawData=e,this.update()})}async update(){this.updateSliderPosition();let e=this.limitEndIndex(this.startIndex+this.pageSize*this.renderPageCount),t=this.rawData?this.rawData.slice(this.startIndex,e):[];await this.updateData(t)}async updateData(e){super.updateData(e),l.onRenderComplete(()=>{if(e.length>0){if(!this.renderPageCountChecked&&this.mayDoubleRenderPageCount())return void this.update();this.averageItemHeight||(this.measureAverageItemHeight(),this.updateSliderPosition()),this.needToApplyStartIndex&&this.averageItemHeight?(this.scroller.scrollTop=this.averageItemHeight*this.startIndex||0,this.needToApplyStartIndex=!1):this.adjustScrollPosition()}}),this.onUpdated&&this.onUpdated(this.data,this.startIndex)}limitEndIndex(e){let t=this.getTotalDataCount();return t>=0&&e>t&&(e=t),e}getTotalDataCount(){return this.rawData?this.rawData.length:0}updateSliderPosition(){if(!this.averageItemHeight)return;let e=this.startIndex,t=this.limitEndIndex(this.startIndex+this.pageSize*this.renderPageCount),i=0,s=this.getTotalDataCount();s>=0&&(i=Math.max(0,s-t)),this.slider.style.marginTop=this.averageItemHeight*e+this.lastAdjustedTopDiff+"px",this.slider.style.marginBottom=this.averageItemHeight*i+"px"}measureAverageItemHeight(){if(0===this.data.length)return;let e=this.slider.offsetHeight;e<=0||(this.averageItemHeight=Math.round(e/this.data.length))}mayDoubleRenderPageCount(){if(!this.averageItemHeight)return!1;if(0===this.data.length)return!1;let e=this.slider.offsetHeight/this.data.length*this.pageSize,t=this.scroller.clientHeight,i=!1;if(0===e)return!1;for(;e<t;)this.renderPageCount*=2,e*=2,i=!0;return this.renderPageCountChecked=!0,i}adjustScrollPosition(){if(this.positionToKeep){let e=this.positionToKeep.top,t=this.getElementTopOfIndex(this.positionToKeep.index);if(null!==t){let i=e-t;if(Math.abs(i)>10){let e=this.lastAdjustedTopDiff+i;this.lastAdjustedTopDiff=e,this.slider.style.marginTop=this.averageItemHeight*this.startIndex+e+"px"}}this.positionToKeep=null}}getElementTopOfIndex(e){let t=this.wtems[e-this.startIndex];if(t){let e=t.template.range.getFirstElement();if(e)return e.getBoundingClientRect().top}return null}onScroll(){this.checkRenderingRange()}checkRenderingRange(){let e=new a.ScrollerClientRect(this.scroller),t=this.slider.getBoundingClientRect();e.rect.top<t.top?this.updateToCover("up"):e.rect.bottom>t.bottom&&this.updateToCover("down")}updateToCover(e){let t=-1,i=-1,s=-1;if("up"===e?i=(s=this.locateLastVisibleIndex())>-1?s+1:0:(t=s=this.locateFirstVisibleIndex())>-1&&(i=t+this.pageSize*this.renderPageCount),-1===i&&(i="up"===e?Math.ceil((this.scroller.scrollTop+this.scroller.clientHeight)/this.averageItemHeight):Math.floor(this.scroller.scrollTop/this.averageItemHeight)+this.pageSize*this.renderPageCount),i=this.limitEndIndex(i),0===(t=Math.max(0,i-this.pageSize*this.renderPageCount)))this.lastAdjustedTopDiff=0;else if(s>=t&&s<i){let e=this.getElementTopOfIndex(s);null!==e&&(this.positionToKeep={index:s,top:e})}this.startIndex=t,this.update()}locateFirstVisibleIndex(){return this.locateVisibleIndex(!0)}locateLastVisibleIndex(){return this.locateVisibleIndex(!1)}locateVisibleIndex(e){let t=new a.ScrollerClientRect(this.scroller),i=a.binaryFindIndexToInsert(this.wtems,i=>{let s=i.template.range.getFirstElement();if(s){let i=s.getBoundingClientRect();return t.isRectAbove(i)?1:t.isRectBelow(i)?-1:e?-1:1}return-1});if(i===this.data.length&&(i-=1),-1===i)return-1;let s=this.wtems[i].template.range.getFirstElement().getBoundingClientRect();return t.isRectAbove(s)?i+=1:t.isRectBelow(s)&&(i-=1),i>=0&&i<this.data.length?this.startIndex+i:-1}remove(){for(let e of this.wtems)e.remove()}getStartIndex(){return this.startIndex}getFirstVisibleIndex(){return Math.max(0,this.locateFirstVisibleIndex())}async setStartIndex(e){this.startIndex=this.limitEndIndex(e),this.needToApplyStartIndex=!0,await l.renderComplete(),this.needToApplyStartIndex&&await this.update()}async scrollToViewIndex(e){if(this.isIndexRendered(e))this.scrollToViewRenderedIndex(e);else if(e<this.startIndex)await this.setStartIndex(e);else{let t=Math.max(0,e+1-Math.ceil(this.scroller.clientHeight/this.averageItemHeight));await this.setStartIndex(t),this.isIndexRendered(e)&&this.scrollToViewRenderedIndex(e)}}isIndexRendered(e){return e>=this.startIndex&&e<this.startIndex+this.data.length}scrollToViewRenderedIndex(e){let t=this.wtems[e-this.startIndex].template.range.getFirstElement().getBoundingClientRect(),i=new a.ScrollerClientRect(this.scroller);t.bottom>i.rect.bottom?this.scroller.scrollTop=this.scroller.scrollTop+(i.rect.bottom-t.bottom):t.top<i.rect.top&&(this.scroller.scrollTop=this.scroller.scrollTop+(i.rect.top-t.top))}getItem(e){return this.rawData&&this.rawData[e]||null}}i.LiveRepeatDirective=c,i.liveRepeat=s.defineDirective(c)},{"../dom-event":71,"../observer":78,"../queue":100,"../watcher":104,"./define":62,"./libs/util":66,"./repeat":70}],70:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./define"),n=e("../watcher"),r=e("./libs/directive-transition"),o=e("./libs/watched-template"),l=e("../observer");class a{constructor(e,t){this.data=[],this.wtems=[],this.unwatchData=null,this.firstlyMerge=!0,this.startIndex=0,this.anchor=e,this.context=t,this.transition=new r.DirectiveTransition(t)}watchAndUpdateDataImmediately(e){if(this.unwatchData&&(this.unwatchData(),this.unwatchData=null),!e)return void this.updateData([]);this.unwatchData=(this.context||n.globalWatcherGroup).watchImmediately(()=>[...e].map(l.observe),e=>{this.updateData(e)})}canMergeWith(e,t){return t.toString()===this.templateFn.toString()}merge(e,t,i){this.templateFn=t,this.transition.setOptions(i),this.watchAndUpdateDataImmediately(e),this.firstlyMerge=!1}updateData(e){let t=this.data,i=new Map,s=this.wtems,n=this.data=e,r=new Set(this.data);this.wtems=[];let o=new Set,l=new Set;for(let e=0;e<t.length;e++){let s=t[e];null===s||i.has(s)?o.add(e):(i.set(s,e),r.has(s)||o.add(e))}function a(e){for(let s=e;s<t.length;s++){let e=t[s];if(r.has(e)&&i.get(e)===s)return s}return t.length}let h=a(0),c=-1;for(let e=0;e<n.length;e++){let r=n[e];if(i.has(r)){let n=i.get(r);if(l.has(n)&&(n=-1),n>=h){this.useMatchedOne(s[n],e),l.add(n),c=n,h=a(n+1);continue}if(n>-1){this.moveOneBefore(s[n],h<t.length?s[h]:null),this.useMatchedOne(s[n],e),l.add(n),c=h;continue}}if(!this.transition.shouldPlay()&&o.size>0){let i=o.keys().next().value;i>c&&i<h||(this.moveOneBefore(s[i],h<t.length?s[h]:null),c=h),this.reuseOne(s[i],r,e),o.delete(i),l.add(i)}else this.wtems.push(this.createOne(r,e,h<t.length?s[h]:null))}if(l.size<t.length)for(let e=0;e<t.length;e++)l.has(e)||this.removeOne(s[e])}useMatchedOne(e,t){e.updateIndex(t+this.startIndex),this.wtems.push(e)}reuseOne(e,t,i){e.update(t,i+this.startIndex),this.wtems.push(e)}moveOneBefore(e,t){let i=e.template.range.getFragment();t?t.template.range.startNode.before(i):this.anchor.insert(i)}createOne(e,t,i){let s=new o.WatchedTemplate(this.context,this.templateFn,e,t+this.startIndex),n=s.template.range.getFragment(),r=null;return this.transition.shouldPlayEnter(this.firstlyMerge)&&(r=n.firstElementChild),i?i.template.range.startNode.before(n):this.anchor.insert(n),r&&this.transition.mayPlayEnter(r),s}removeOne(e){let t=e.template;if(this.transition.shouldPlay()){let i=t.range.getFirstElement();i?this.transition.mayPlayLeave(i).then(t=>{t&&e.remove()}):e.remove()}else e.remove()}remove(){for(let e of this.wtems)e.remove()}}i.RepeatDirective=a,i.repeat=s.defineDirective(a)},{"../observer":78,"../watcher":104,"./define":62,"./libs/directive-transition":64,"./libs/watched-template":67}],71:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=["capture","self","once","prevent","stop","passive"],n=["ctrl","shift","alt"],r=["check","uncheck"],o=["up","down"],l={left:0,middle:1,right:2,main:0,auxiliary:1,secondary:2},a={keydown:h,keyup:h,keypress:h,mousedown:c,mousemove:c,mouseup:c,click:c,change:function(e,[t]){let i=e.target.checked;return i&&"check"===t||i&&"uncheck"===t},wheel:function(e,[t]){return e.deltaY<0&&"up"===t||e.deltaY>0&&"down"===t}};function h(e,t){let i=[];for(let s of t)if(n.includes(s)){if(!d(e,s))return!1}else i.push(s);return 0===i.length||i.includes(e.key.toLowerCase())}function c(e,t){let i=[];for(let s of t)if(n.includes(s)){if(!d(e,s))return!1}else i.push(s);return 0===i.length||!!i.find(t=>l[t]===e.button)}function d(e,t){switch(t){case"ctrl":if(!e.ctrlKey)return!1;break;case"shift":if(!e.shiftKey)return!1;break;case"alt":if(!e.altKey)return!1}return!0}const u=new WeakMap;function p(e,t,i,h,c){let d=i,p=null;i.includes(".")&&([d,...p]=i.split("."),function(e,t,i){if(0===(i=i.filter(e=>!s.includes(e))).length)return!0;if("change"===t){if(i.length>1||!r.includes(i[0]))throw new Error(`"${e}" is valid, check filter for change event must be one of "${r.join(",")}"`)}else if("wheel"===t){if(i.length>1||!o.includes(i[0]))throw new Error(`"${e}" is valid, direction filter for wheel event must be one of "${o.join(",")}"`)}else if("keydown"===t||"keyup"===t||"keypress"===t){if((i=i.filter(e=>!n.includes(e))).length>1)throw new Error(`"${e}" is valid, only one key name can be specified as key`)}else if(("mousedown"===t||"mousemove"===t||"mouseup"===t||"click"===t)&&((i=i.filter(e=>!n.includes(e))).length>1||!l.hasOwnProperty(i[0])))throw new Error(`"${e}" is valid, button filter for mouse event must be one of "${Object.keys(l).join(",")}"`)}(i,d,p));let f=function(e,t,i,n,r,o){let l=t?t.filter(e=>!s.includes(e)):null;return function(s){if(l&&l.length>0){let e=a[n];if(!e(s,l))return}t&&t.includes("self")&&s.target!==i||(t&&t.includes("prevent")&&s.preventDefault(),t&&t.includes("stop")&&s.stopPropagation(),(e||t&&t.includes("once"))&&m(i,n,r,o),o?r.call(o,s):r(s))}}(e,p,t,d,h,c),g=!!p&&p.includes("capture"),y=!!p&&p.includes("passive"),v=y?{capture:g,passive:y}:g,b=u.get(t);b||(b={},u.set(t,b)),(b[d]||(b[d]=[])).push({name:i,handler:h,wrappedHandler:f,scope:c,capture:g}),t.addEventListener(d,f,v)}function m(e,t,i,s){let n=u.get(e);if(!n)return;let r=n[t=t.replace(/\..+/,"")];if(r)for(let n=r.length-1;n>=0;n--){let o=r[n];!(!i||o.handler===i||o.handler.hasOwnProperty("__original")&&o.handler.__original===i)||s&&o.scope!==s||(e.removeEventListener(t,o.wrappedHandler,o.capture),r.splice(n,1))}}i.on=function(e,t,i,s){p(!1,e,t,i,s)},i.once=function(e,t,i,s){p(!0,e,t,i,s)},i.off=m},{}],72:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./component"),n=e("./style");let r=new Map,o=new Map;let l=!1;function a(){Promise.resolve().then(h),l=!0}function h(){let e=r,t=o;r=new Map,o=new Map,l=!1;for(let[e]of t.entries())u(e);for(let[t,i]of e.entries())document.contains(t)&&c(t,i)}function c(e,t){let i=s.getComponent(e);i||(i=d(e,t)),i.__emitConnected()}function d(e,t){n.ensureComponentStyle(t,e.localName);let i=new t(e);return t.properties&&e.attributes.length>0&&function(e,t){let i=e.el;for(let s of t)if(i.hasAttribute(s)){let t=s.includes("-")?s.replace(/-[a-z]/g,e=>e[1].toUpperCase()):s,n=e[s];e[t]="boolean"==typeof n||("number"==typeof n?Number(i.getAttribute(s)):i.getAttribute(s))}}(i,t.properties),i.__emitCreated(),i}function u(e){let t=s.getComponent(e);t&&t.__emitDisconnected()}i.createComponent=d,i.define=function e(t,i){if(!t.includes("-"))throw new Error(`"${t}" can't be defined as custom element, it must contain "-"`);if(!i)return function(i){e(t,i)};customElements.define(t,class extends HTMLElement{connectedCallback(){!function(e,t){o.has(e)?o.delete(e):(r.set(e,t),o.delete(e),l||a())}(this,i)}disconnectedCallback(){!function(e,t){r.has(e)?r.delete(e):(o.set(e,t),l||a())}(this,i)}}),s.defineComponent(t,i)},i.getClosestComponent=function(e,t){let i=e;for(;i&&i instanceof HTMLElement;){if(i.localName.includes("-")){let e=s.getComponent(i);if(e instanceof t)return e}i=i.parentElement}return null}},{"./component":58,"./style":102}],73:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./observer"),n=e("./libs/emitter");i.ObservedBaseClass=class{constructor(){return s.observeTarget(this)}};i.ObservedEmitter=class extends n.Emitter{constructor(){return super(),s.observeTarget(this)}}},{"./libs/emitter":75,"./observer":78}],74:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("./emitter");i.ObservedBaseClass=s.ObservedBaseClass,i.ObservedEmitter=s.ObservedEmitter;var n=e("./element");i.define=n.define,i.getClosestComponent=n.getClosestComponent;var r=e("./style");i.addGlobalStyle=r.addGlobalStyle,i.updateStyles=r.updateStyles;var o=e("./render");i.render=o.render,i.renderComponent=o.renderComponent,i.appendTo=o.appendTo;var l=e("./parts");i.html=l.html,i.css=l.css,i.svg=l.svg,i.text=l.text,i.TemplateResult=l.TemplateResult,i.Template=l.Template;var a=e("./component");i.Component=a.Component,i.update=a.update,i.getComponent=a.getComponent,i.getComponentAsync=a.getComponentAsync;var h=e("./bindings");i.defineBinding=h.defineBinding,i.BindingResult=h.BindingResult,i.show=h.show,i.hide=h.hide;var c=e("./dom-event");i.on=c.on,i.once=c.once,i.off=c.off;var d=e("./observer");i.observe=d.observe,i.observeGetter=d.observeGetter;var u=e("./watcher");i.watch=u.watch,i.watchOnce=u.watchOnce,i.watchUntil=u.watchUntil,i.watchImmediately=u.watchImmediately,i.Watcher=u.Watcher;var p=e("./queue");i.onRenderComplete=p.onRenderComplete,i.renderComplete=p.renderComplete;var m=e("./directives");i.defineDirective=m.defineDirective,i.DirectiveResult=m.DirectiveResult,i.cache=m.cache,i.repeat=m.repeat,i.liveRepeat=m.liveRepeat,i.LiveRepeatDirective=m.LiveRepeatDirective,i.liveAsyncRepeat=m.liveAsyncRepeat,i.LiveAsyncRepeatDirective=m.LiveAsyncRepeatDirective;var f=e("./transition");i.defineTransion=f.defineTransion,i.getEasing=f.getEasing,i.Transition=f.Transition},{"./bindings":50,"./component":58,"./directives":63,"./dom-event":71,"./element":72,"./emitter":73,"./observer":78,"./parts":90,"./queue":100,"./render":101,"./style":102,"./transition":103,"./watcher":104}],75:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.Emitter=class{constructor(){this.__events=new Map}__ensureEvents(e){let t=this.__events.get(e);return t||this.__events.set(e,t=[]),t}on(e,t,i){this.__ensureEvents(e).push({listener:t,scope:i,once:!1})}once(e,t,i){this.__ensureEvents(e).push({listener:t,scope:i,once:!0})}off(e,t,i){let s=this.__events.get(e);if(s)for(let e=s.length-1;e>=0;e--){let n=s[e];n.listener!==t||i&&n.scope!==i||s.splice(e,1)}}hasListener(e,t,i){let s=this.__events.get(e);if(!t)return!!s&&s.length>0;if(s&&t)for(let e=0,n=s.length;e<n;e++){let n=s[e];if(n.listener===t&&(!i||n.scope===i))return!0}return!1}emit(e,...t){let i=this.__events.get(e);if(i)for(let e=0;e<i.length;e++){let s=i[e];!0===s.once&&i.splice(e--,1),s.listener.apply(s.scope,t)}}removeAllListeners(){this.__events=new Map}}},{}],76:[function(e,t,i){"use strict";var s;Object.defineProperty(i,"__esModule",{value:!0}),function(e){e[e.Next=0]="Next",e[e.Root=1]="Root",e[e.Parent=2]="Parent"}(s=i.NodeAnchorType||(i.NodeAnchorType={}));i.NodeAnchor=class{constructor(e,t){this.el=e,this.type=t}insert(e){this.type===s.Next?this.el.before(e):this.el.append(e)}};i.NodeRange=class{constructor(e){this.fragment=null,this.fragment=e;let t=e.firstChild;t&&8!==t.nodeType||(t=document.createComment(""),e.prepend(t)),this.startNode=t,this.endNode=e.lastChild}getFragment(){let e;return this.fragment?(e=this.fragment,this.fragment=null):(e=document.createDocumentFragment()).append(...this.getNodes()),e}cacheFragment(){this.fragment=this.getFragment()}getNodes(){let e=[],t=this.startNode;for(;t&&(e.push(t),t!==this.endNode);)t=t.nextSibling;return e}getFirstElement(){let e=this.startNode;for(;e;){if(1===e.nodeType)return e;if(e===this.endNode)break;e=e.nextSibling}return null}}},{}],77:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./libs/weak-2way-map"),n=e("./libs/weak-2way-prop-map"),r=new s.Weak2WayMap,o=new n.Weak2WayPropMap;let l=null;const a=[];i.startUpdating=function(e){l&&a.push(l),l={target:e,deps:new Set,depPropMap:new Map}},i.endUpdating=function(e){l&&(r.updateFromLeft(l.target,l.deps),o.updateFromLeft(l.target,l.depPropMap),l=a.pop()||null)},i.isUpdating=function(){return!!l},i.clearDependencies=function(e){r.clearFromLeft(e),o.clearFromLeft(e)},i.clearAsDependency=function(e){r.clearFromRight(e),o.clearFromRight(e)},i.restoreAsDependency=function(e){o.restoreFromRight(e)},i.mayAddDependency=function(e){l&&l.deps.add(e)},i.mayAddComDependency=function(e,t){if(!l)return;let i=l.depPropMap.get(e);i||(i=new Set,l.depPropMap.set(e,i)),i.add(t)},i.notifyComPropertySet=function(e,t){let i=o.getFromRight(e,t);if(i)for(let e of i)e.update()},i.notifyObjectSet=function(e){let t=r.getFromRight(e);if(t)for(let e of t)e.update()}},{"./libs/weak-2way-map":79,"./libs/weak-2way-prop-map":80}],78:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("./shared");i.observe=s.observe,i.observeTarget=s.observeTarget,i.targetMap=s.targetMap,i.proxyMap=s.proxyMap;var n=e("./observe-com");i.observeComTarget=n.observeComTarget;var r=e("./dependency");i.startUpdating=r.startUpdating,i.endUpdating=r.endUpdating,i.clearDependencies=r.clearDependencies,i.clearAsDependency=r.clearAsDependency,i.restoreAsDependency=r.restoreAsDependency;var o=e("./observe-getter");i.observeGetter=o.observeGetter},{"./dependency":77,"./observe-com":82,"./observe-getter":83,"./shared":86}],79:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.Weak2WayMap=class{constructor(){this.lm=new WeakMap,this.rm=new WeakMap}updateFromLeft(e,t){let i=this.lm.get(e);if(i&&0!==i.size){for(let s of t)i.has(s)||this.addRightLeftMap(s,e);for(let s of i)t.has(s)||this.removeRightLeftMap(s,e)}else for(let i of t)this.addRightLeftMap(i,e);this.lm.set(e,t)}addRightLeftMap(e,t){let i=this.rm.get(e);i||(i=new Set,this.rm.set(e,i)),i.add(t)}removeRightLeftMap(e,t){let i=this.rm.get(e);i&&i.delete(t)}getFromRight(e){return this.rm.get(e)}clearFromLeft(e){let t=this.lm.get(e);if(t){for(let i of t)this.removeRightLeftMap(i,e);this.lm.delete(e)}}clearFromRight(e){let t=this.rm.get(e);if(t){for(let i of t)this.removeLeftRightMap(i,e);this.rm.delete(e)}}removeLeftRightMap(e,t){let i=this.lm.get(e);i&&i.delete(t)}}},{}],80:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.Weak2WayPropMap=class{constructor(){this.lm=new WeakMap,this.rm=new WeakMap}updateFromLeft(e,t){let i=this.lm.get(e);if(i&&0!==i.size){for(let[s,n]of t)i.has(s)?this.updateRightLeftMap(s,i.get(s),n,e):this.addRightLeftMap(s,n,e);for(let[s,n]of i)t.has(s)||this.removeRightLeftMap(s,n,e)}else for(let[i,s]of t)this.addRightLeftMap(i,s,e);this.lm.set(e,t)}addRightLeftMap(e,t,i){let s=this.rm.get(e);s||(s=new Map,this.rm.set(e,s));for(let e of t){let t=s.get(e);t||(t=new Set,s.set(e,t)),t.add(i)}}updateRightLeftMap(e,t,i,s){let n=this.rm.get(e);if(n){for(let e of i)if(!t.has(e)){let t=n.get(e);t||(t=new Set,n.set(e,t)),t.add(s)}for(let e of t)if(!i.has(e)){let t=n.get(e);t&&t.delete(s)}}}removeRightLeftMap(e,t,i){let s=this.rm.get(e);if(s)for(let e of t){let t=s.get(e);t&&t.delete(i)}}getFromRight(e,t){let i=this.rm.get(e);if(i)return i.get(t)}clearFromLeft(e){let t=this.lm.get(e);if(t){for(let[i,s]of t)this.removeRightLeftMap(i,s,e);this.lm.delete(e)}}clearFromRight(e){let t=this.rm.get(e);if(t)for(let i of t.values())for(let t of i)this.removeLeftRightMap(t,e)}removeLeftRightMap(e,t){let i=this.lm.get(e);i&&i.delete(t)}restoreFromRight(e){let t=this.rm.get(e);if(t)for(let[i,s]of t.entries())for(let t of s)this.addLeftRightMap(t,e,i)}addLeftRightMap(e,t,i){let s=this.lm.get(e);s||(s=new Map,this.lm.set(e,s));let n=s.get(t);n||(n=new Set,s.set(t,n)),n.add(i)}}},{}],81:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./dependency"),n=e("./shared"),r=["push","pop","unshift","splice","shift","sort"];i.observeArrayTarget=function(e){let t=new Proxy(e,o);return n.proxyMap.set(e,t),n.proxyMap.set(t,t),n.targetMap.set(t,e),t};const o={get(e,t){let i=e[t],o=typeof i;if(e.hasOwnProperty(t)){if(s.mayAddDependency(e),i&&"object"===o){if(n.proxyMap.has(i))return n.proxyMap.get(i);if(s.isUpdating())return n.observeTarget(i)}}else"function"===o&&(s.mayAddDependency(e),r.includes(t)&&s.notifyObjectSet(e));return i},set:(e,t,i)=>(e[t]=i,s.notifyObjectSet(e),!0),has:(e,t)=>(s.mayAddDependency(e),t in e),deleteProperty:(e,t)=>!e.hasOwnProperty(t)||(s.mayAddDependency(e),delete e[t])}},{"./dependency":77,"./shared":86}],82:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./dependency"),n=e("./shared");i.observeComTarget=function(e){let t=new Proxy(e,r);return n.proxyMap.set(e,t),n.proxyMap.set(t,t),n.targetMap.set(t,e),t};const r={get(e,t){let i=e[t];if(s.mayAddComDependency(e,t),i&&"object"==typeof i){if(n.proxyMap.has(i))return n.proxyMap.get(i);if(s.isUpdating())return n.observeTarget(i)}return i},set:(e,t,i)=>(e[t]=i,s.notifyComPropertySet(e,t),!0),has:(e,t)=>(s.mayAddComDependency(e,t),t in e),deleteProperty:(e,t)=>!e.hasOwnProperty(t)||(s.mayAddComDependency(e,t),delete e[t])}},{"./dependency":77,"./shared":86}],83:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.observeGetter=function(e,t){let i=function(e,t){let i=e;do{let e=Object.getOwnPropertyDescriptor(i,t);if(e)return e;i=Object.getPrototypeOf(i)}while(i);return null}(e,t);return i&&i.get?i.get.call(e):e[t]}},{}],84:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./dependency"),n=e("./shared");i.observePlainObjectTarget=function(e){let t=new Proxy(e,r);return n.proxyMap.set(e,t),n.proxyMap.set(t,t),n.targetMap.set(t,e),t};const r={get(e,t){let i=e[t];if(e.hasOwnProperty(t)&&(s.mayAddDependency(e),i&&"object"==typeof i)){if(n.proxyMap.has(i))return n.proxyMap.get(i);if(s.isUpdating())return n.observeTarget(i)}return i},set:(e,t,i)=>(e[t]=i,s.notifyObjectSet(e),!0),has:(e,t)=>(s.mayAddDependency(e),t in e),deleteProperty:(e,t)=>!e.hasOwnProperty(t)||(s.mayAddDependency(e),delete e[t])}},{"./dependency":77,"./shared":86}],85:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./dependency"),n=e("./shared"),r=["add","set","delete","clear"];i.observeMapOrSetTarget=function(e){let t=new Proxy(e,o);return n.proxyMap.set(e,t),n.proxyMap.set(t,t),n.targetMap.set(t,e),t};const o={get(e,t){let i=e[t],n=typeof i;return e.hasOwnProperty(t)||"function"!==n||(i=i.bind(e),s.mayAddDependency(e),r.includes(t)&&s.notifyObjectSet(e)),i}}},{"./dependency":77,"./shared":86}],86:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./observe-object"),n=e("./observe-array"),r=e("./observe-set-or-map");i.proxyMap=new WeakMap,i.targetMap=new WeakMap;const o=Object.prototype.toString;function l(e){let t=o.call(e);return"[object Array]"===t?n.observeArrayTarget(e):"[object Object]"===t?s.observePlainObjectTarget(e):"[object Set]"===t||"[object Map]"===t?r.observeMapOrSetTarget(e):e}i.observe=function(e){if(e&&"object"==typeof e){let t=i.proxyMap.get(e);return t||l(e)}return e},i.observeTarget=l},{"./observe-array":81,"./observe-object":84,"./observe-set-or-map":85}],87:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.AttrPart=class{constructor(e,t,i){this.el=e,this.name=t,this.setValue(i)}setValue(e){null!=e&&String(e),this.el.setAttribute(this.name,e)}update(e){this.setValue(e)}}},{}],88:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../bindings"),n=e("../bindings/define");i.FixedBindingPart=class{constructor(e,t,i,n){let r=t.indexOf("."),o=r>-1?t.slice(0,r):t,l=r>-1?t.slice(r+1).split("."):void 0,a=s.getDefinedBinding(o);if(!a)throw new Error(`":${t}" on "<${e.localName}>" is not a registered binding class`);this.binding=new a(e,n,l),this.update(i)}update(e){this.binding.update(e)}};i.BindingPart=class{constructor(e,t,i){if(this.binding=null,this.el=e,this.context=i,t instanceof n.BindingResult){let n=t.name,r=s.getDefinedBinding(n);this.binding=new r(e,i),this.binding.update(...t.args)}}update(e){if(e instanceof n.BindingResult){let t=s.getDefinedBinding(e.name);this.binding&&(this.binding instanceof t?this.binding.update(...e.args):(this.binding.remove(),this.binding=new t(this.el,this.context),this.binding.update(...e.args)))}else this.binding&&this.binding.remove()}}},{"../bindings":50,"../bindings/define":47}],89:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../component"),n=e("../dom-event");i.EventPart=class{constructor(e,t,i,s){this.el=e,this.name="@"===t[0]?t.slice(1):t,this.context=s,this.isComEvent=e.localName.includes("-")&&"@"!==t[0],this.update(i),this.bindListener()}update(e){if("function"!=typeof e)throw new Error(`Failed to register listener at "<${this.el.localName} @${this.name}='${e}'">, listener is not a function`);this.handler=e}bindListener(){if(this.isComEvent){let e=s.getComponent(this.el);e?this.bindComListener(e):s.onComponentCreatedAt(this.el,this.bindComListener.bind(this))}else n.on(this.el,this.name,this.triggerHandler,this)}bindComListener(e){e.on(this.name,this.triggerHandler,this)}triggerHandler(...e){this.handler.call(this.context,...e)}remove(){}}},{"../component":58,"../dom-event":71}],90:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("./node");i.NodePart=s.NodePart;var n=e("./template");i.Template=n.Template;var r=e("./template-result");i.TemplateResult=r.TemplateResult,i.html=r.html,i.css=r.css,i.svg=r.svg,i.text=r.text,i.getStartTagOfTemplateResult=r.getStartTagOfTemplateResult;var o=e("./template-inherit");i.inheritTemplateResults=o.inheritTemplateResults},{"./node":94,"./template":99,"./template-inherit":96,"./template-result":98}],91:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./util");var n;!function(e){e[e.StartTag=0]="StartTag",e[e.EndTag=1]="EndTag",e[e.Text=2]="Text"}(n=i.HTMLTokenType||(i.HTMLTokenType={}));const r=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];i.parseToHTMLTokens=function(e){const t=/<!--[\s\S]*?-->|<([\w-]+)([\s\S]*?)\/?>|<\/[\w-]+>/g;let i,o=0,l=[];for(;i=t.exec(e);){let a=i[0];if(i.index>o){let t=s.trim(e.slice(o,i.index));t&&l.push({type:n.Text,text:t})}if(o=t.lastIndex,"!"===a[1])continue;if("/"===a[1]){l.push({type:n.EndTag,tagName:a.slice(2,-1)});continue}let h=i[1],c=i[2];l.push({type:n.StartTag,tagName:h,attributes:c}),"/"!==a[a.length-2]||r.includes(h)||l.push({type:n.EndTag,tagName:h})}o<e.length&&s.trim(e.slice(o))&&l.push({type:n.Text,text:e.slice(o)});return l},i.joinHTMLTokens=function(e){let t="";for(let i of e)switch(i.type){case n.StartTag:t+="<"+i.tagName+i.attributes+">";break;case n.EndTag:t+=`</${i.tagName}>`;break;case n.Text:t+=i.text}return t}},{"./util":92}],92:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.trim=function(e){return e.replace(/^[\r\n\t]+|[\r\n\t]+$/g,"")},i.cloneAttributes=function(e,t){for(let{name:i,value:s}of t)"class"!==i&&"style"!==i||!e.hasAttribute(i)||("style"===i?s=e.getAttribute(i)+"; "+s:"class"===i&&(s=e.getAttribute(i)+" "+s)),e.setAttribute(i,s)}},{}],93:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.MayAttrPart=class{constructor(e,t,i){this.el=e,this.name=t,this.setValue(i)}setValue(e){e?this.el.setAttribute(this.name,""):this.el.removeAttribute(this.name)}update(e){this.setValue(e)}remove(){}}},{}],94:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./template-result"),n=e("./template"),r=e("../directives"),o=e("./libs/util");var l;!function(e){e[e.Templates=0]="Templates",e[e.Directive=1]="Directive",e[e.Text=2]="Text"}(l||(l={}));i.NodePart=class{constructor(e,t,i){this.templates=null,this.directive=null,this.textNode=null,this.contentType=null,this.anchor=e,this.context=i,this.update(t)}update(e){let t=this.getContentType(e);t!==this.contentType&&(this.clearContent(),this.contentType=t),t===l.Directive?this.updateDirective(e):Array.isArray(e)?(this.becomeTemplateResults(e),this.updateTemplates(e)):t===l.Templates?this.updateTemplates([e]):this.updateText(e)}getContentType(e){return e instanceof r.DirectiveResult?l.Directive:e instanceof s.TemplateResult||Array.isArray(e)?l.Templates:l.Text}clearContent(){let e=this.contentType;if(null!==e)if(e===l.Directive)this.directive.remove(),this.directive=null;else if(e===l.Templates){for(let e of this.templates)e.remove();this.templates=null}else e===l.Text&&this.textNode&&(this.textNode.remove(),this.textNode=null)}updateDirective(e){if(this.directive){if(this.directive.canMergeWith(...e.args))return void this.directive.merge(...e.args);this.directive.remove()}this.directive=r.createDirectiveFromResult(this.anchor,this.context,e)}becomeTemplateResults(e){for(let t=0;t<e.length;t++)e[t]instanceof s.TemplateResult||(e[t]=s.text`${e[t]}`);return e}updateTemplates(e){let t=this.templates;if(t||(t=this.templates=[]),t.length>0&&e.length>0)for(let i=0;i<t.length&&i<e.length;i++){let s=t[i],r=e[i];if(s.canMergeWith(r))s.merge(r);else{let e=new n.Template(r,this.context),o=e.range.getFragment();s.range.startNode.before(o),s.remove(),t[i]=e}}if(e.length<t.length){for(let i=e.length;i<t.length;i++)t[i].remove();this.templates=t.slice(0,e.length)}else if(t.length<e.length)for(let i=t.length;i<e.length;i++){let s=new n.Template(e[i],this.context),r=s.range.getFragment();this.anchor.insert(r),t.push(s)}}updateText(e){let t=null==e?"":o.trim(String(e));t?this.textNode?this.textNode.textContent=t:(this.textNode=document.createTextNode(t),this.anchor.insert(this.textNode)):this.textNode&&(this.textNode.textContent="")}}},{"../directives":63,"./libs/util":92,"./template":99,"./template-result":98}],95:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../component");i.PropertyPart=class{constructor(e,t,i){this.com=null,this.value=void 0,this.el=e,this.name="."===t[0]?t.slice(1):t,this.isComProperty=e.localName.includes("-")&&"."!==t[0],this.isComProperty?(this.bindCom(),this.updateComProperty(i)):this.updateElementProperty(i)}bindCom(){let e=s.getComponent(this.el);e?this.com=e:s.onComponentCreatedAt(this.el,this.onComCreated.bind(this))}onComCreated(e){this.com=e,this.setComProperty(this.value),this.value=void 0}updateComProperty(e){this.com?this.setComProperty(e):this.value=e}setComProperty(e){this.com[this.name]=e}updateElementProperty(e){this.el[this.name]!==e&&(this.el[this.name]=e)}update(e){this.isComProperty?this.updateComProperty(e):this.updateElementProperty(e)}remove(){}}},{"../component":58}],96:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./libs/html-token"),n=e("./template-result"),r=new Map;function o(e,t){return e.splice(t,a(e,t)+1-t)}function l(e,t){return e.splice(t+1,a(e,t)-1-t)}function a(e,t){let i=1;for(let n=t+1;n<e.length;n++){switch(e[n].type){case s.HTMLTokenType.StartTag:i++;break;case s.HTMLTokenType.EndTag:if(0===--i)return n}}return e.length-1}i.inheritTemplateResults=function(e,t){let i,a=[...e.values,...t.values],h=n.joinWithOrderedMarkers(e.strings),c=n.joinWithOrderedMarkers(t.strings,e.values.length),d=r.get(h);d&&(i=d.get(c)),i||(i=function(e,t){let i=s.parseToHTMLTokens(e),{attributes:a,slots:h,restSlot:c}=function(e){let t=e.findIndex(e=>e.type===s.HTMLTokenType.StartTag),i=0,n=0,r=e[t].attributes,l={},a=[];for(let t=0;t<e.length;t++){let r=e[t];switch(r.type){case s.HTMLTokenType.StartTag:if(/slot\s*=\s*['"](\w+)/.test(r.attributes)){let i=r.attributes.match(/slot\s*=\s*['"](\w+)/)[1],s=o(e,t);l[i]=s,t--,n++}break;case s.HTMLTokenType.EndTag:0==--n&&(i=t+1)}}return i-t>2&&(a=e.slice(t+1,i-1)),{attributes:r,slots:l,restSlot:a}}(i),d=s.parseToHTMLTokens(t);!function(e,t,i,n){if(e.find(e=>e.type===s.HTMLTokenType.StartTag).attributes+=t,Object.keys(i).length>0||n.length>0)for(let t=0;t<e.length;t++){let r=e[t];switch(r.type){case s.HTMLTokenType.StartTag:if("slot"===r.tagName){let s=r.attributes.match(/name\s*=\s*['"](\w+)/),o=s?s[1]:null;if(o){if(i[o]){l(e,t);let s=i[o];e.splice(t+1,0,...s),t+=s.length}}else l(e,t),n.length&&(e.splice(t+1,0,...n),t+=n.length)}}}}(d,a,h,c);let u=n.splitByOrderedMarkers(s.joinHTMLTokens(d)),p=r.get(e);return p||(p=new Map,r.set(e,p)),p.set(t,u),u}(h,c));let{strings:u,valueIndexes:p}=i,m=p.map(e=>a[e]);return new n.TemplateResult(e.type,u,m)}},{"./libs/html-token":91,"./template-result":98}],97:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./template-result"),n=e("../style"),r=e("./libs/util"),o=e("./libs/html-token");var l;!function(e){e[e.Node=0]="Node",e[e.Attr=1]="Attr",e[e.MayAttr=2]="MayAttr",e[e.Property=3]="Property",e[e.Event=4]="Event",e[e.FixedBinging=5]="FixedBinging",e[e.Binding=6]="Binding"}(l=i.PartType||(i.PartType={}));const a=new Map;function h(e){let t=document.createElement("template");return t.innerHTML=e,t}i.parse=function(e,t,i){let n=i?i.localName:"global";if("html"===e||"svg"===e){let o=s.joinWithOrderedMarkers(t),l=a.get(n),h=l?l.get(o):null;return h||(l||(l=new Map,a.set(n,l)),h=new c(e,o,n).parse(),l.set(o,h)),function(e,t){let{template:i,places:s,hasSlots:n,attributes:o}=e,l=i.content.cloneNode(!0),a=[];if(o){if(!t)throw new Error("A context must be provided when rendering `<template>...`");r.cloneAttributes(t,o)}if(s.length>0){let e,i=0,n=0,r=document.createTreeWalker(l,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT,null),h=!1;if(o){for(;n<s.length&&0===s[n].nodeIndex;)a.push(t),n++;i=1}if(n<s.length)for(;e=r.nextNode();){for(;s[n].nodeIndex===i;)if(a.push(e),++n===s.length){h=!0;break}if(h)break;i++}}return{fragment:l,nodesInPlaces:a,places:s,hasSlots:n}}(h,i)}if("css"===e)return{fragment:h(`<style>${t[0]}</style>`).content,nodesInPlaces:null,places:null,hasSlots:!1};{let e=t[0],i=document.createDocumentFragment();return i.append(document.createTextNode(e)),{fragment:i,nodesInPlaces:null,places:null,hasSlots:!1}}};class c{constructor(e,t,i){this.nodeIndex=0,this.places=[],this.nodeIndexs=[],this.type=e,this.string=t,this.scopeName=i,this.scopedClassNameSet=n.getScopedClassNameSet(this.scopeName)}parse(){let e=o.parseToHTMLTokens(this.string),t="",i=!1;for(let s of e)switch(s.type){case o.HTMLTokenType.StartTag:let e=s.tagName,n=s.attributes;"slot"===e&&(i=!0),n.length>=9&&(n=this.parseAttribute(n)),t+="<"+e+n+">",this.nodeIndex++;break;case o.HTMLTokenType.EndTag:t+=`</${s.tagName}>`;break;case o.HTMLTokenType.Text:t+=this.parseText(s.text)}let s=e.find(e=>e.type===o.HTMLTokenType.StartTag),n=!1;s&&"svg"===this.type&&"svg"!==s.tagName&&(t="<svg>"+t+"</svg>",n=!0);let r=h(t),l=null;if(n){let e=r.content.firstElementChild;r.content.append(...e.childNodes),e.remove()}return s&&"template"===s.tagName&&(l=[...(r=r.content.firstElementChild).attributes].map(({name:e,value:t})=>({name:e,value:t}))),{template:r,places:this.places,hasSlots:i,attributes:l}}parseText(e){if(!e)return e;if(s.containsOrderedMarker(e)){let{strings:t,valueIndexes:i}=s.splitByOrderedMarkers(e);for(let e=1;e<t.length;e++)this.places.push({type:l.Node,name:null,strings:null,valueIndexes:i.slice(e-1,e),nodeIndex:this.nodeIndex}),this.nodeIndexs.push(this.nodeIndex),this.nodeIndex+=1;e=t.map(r.trim).join("\x3c!---\x3e")}return e}parseAttribute(e){return e.replace(/([.:?@\w-]+)\s*(?:=\s*(".*?"|'.*?'|\{flit:\d+\})\s*)?|\{flit:(\d+)\}\s*/g,(e,t,i="",n)=>{if(n)return this.places.push({type:l.Binding,name:null,strings:null,valueIndexes:[Number(n)],nodeIndex:this.nodeIndex}),this.nodeIndexs.push(this.nodeIndex),"";let r,o=s.containsOrderedMarker(i);switch(t[0]){case".":r=l.Property;break;case":":r=l.FixedBinging;break;case"?":r=l.MayAttr;break;case"@":r=l.Event}if(void 0!==r&&(t=t.slice(1)),void 0===r&&o&&(r="class"===t?l.FixedBinging:l.Attr),void 0!==r){if("'"!==i[0]&&'"'!==i[0]||(i=i.slice(1,-1)),o){let{strings:e,valueIndexes:n}=s.parseOrderedMarkers(i);this.places.push({type:r,name:t,strings:e,valueIndexes:n,nodeIndex:this.nodeIndex})}else this.places.push({type:r,name:t,strings:[i],valueIndexes:null,nodeIndex:this.nodeIndex});return this.nodeIndexs.push(this.nodeIndex),r===l.Attr?t+'="" ':""}return"class"===t&&this.scopedClassNameSet?t+"="+(i=i.replace(/[\w-]+/g,e=>this.scopedClassNameSet.has(e)?e+"__"+this.scopeName:e)):e})}}},{"../style":102,"./libs/html-token":91,"./libs/util":92,"./template-result":98}],98:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./template-inherit");i.html=function(e,...t){return new n("html",e,t)},i.svg=function(e,...t){return new n("svg",e,t)},i.css=function(e,...t){return new n("css",e,t)},i.text=function(e,...t){return new n("text",e,t)};class n{constructor(e,t,i){this.type=e,this.strings=t,this.values=i}toString(){let e=this.strings[0];for(let t=0;t<this.strings.length-1;t++){let i=this.values[t];e+=null==i?"":String(i),e+=this.strings[t+1]}return e}inherit(e){return s.inheritTemplateResults(this,e)}}function r(e){return/^\{flit:\d+\}$/.test(e)}function o(e){let t,i=/\{flit:(\d+)\}/g,s=[],n=[],r=0;for(;t=i.exec(e);)s.push(e.slice(r,t.index)),n.push(Number(t[1])),r=i.lastIndex;return s.push(e.slice(r)),{strings:s,valueIndexes:n}}i.TemplateResult=n,i.getStartTagOfTemplateResult=function(e){let t=e.strings[0].match(/<([\w-]+)/);return t?t[1]:null},i.joinWithOrderedMarkers=function(e,t=0){let i=e[0];for(let s=0;s<e.length-1;s++)i+=`{flit:${s+t}}`,i+=e[s+1];return i},i.containsOrderedMarker=function(e){return/\{flit:\d+\}/.test(e)},i.beOrderedMarker=r,i.parseOrderedMarkers=function(e){return r(e)?{strings:null,valueIndexes:[Number(e.match(/^\{flit:(\d+)\}$/)[1])]}:o(e)},i.splitByOrderedMarkers=o},{"./template-inherit":96}],99:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("../libs/node-helper"),n=e("./template-parser"),r=e("./node"),o=e("./may-attr"),l=e("./event"),a=e("./attr"),h=e("./binding"),c=e("./property");function d(e,t){if(!e)return t[0];let i=e[0];for(let s=0;s<e.length-1;s++){let n=t[s];i+=null==n?"":String(n),i+=e[s+1]}return i}i.Template=class{constructor(e,t){this.canUpdateParts=[],this.result=e,this.context=t;let{fragment:i,nodesInPlaces:r,places:o,hasSlots:l}=n.parse(this.result.type,this.result.strings,this.context?this.context.el:null);this.range=new s.NodeRange(i),this.parseParts(r,o),l&&this.context&&this.context.__foundSlotsWhenRendering()}parseParts(e,t){let i=this.result.values;if(e&&t)for(let u=0;u<e.length;u++){let p,m=e[u],f=t[u],g=f.strings,y=f.valueIndexes,v=d(g,y?y.map(e=>i[e]):null);switch(f.type){case n.PartType.Node:p=new r.NodePart(new s.NodeAnchor(m,s.NodeAnchorType.Next),v,this.context);break;case n.PartType.MayAttr:p=new o.MayAttrPart(m,f.name,v);break;case n.PartType.Event:p=new l.EventPart(m,f.name,v,this.context);break;case n.PartType.Attr:p=new a.AttrPart(m,f.name,v);break;case n.PartType.Property:p=new c.PropertyPart(m,f.name,v);break;case n.PartType.FixedBinging:p=new h.FixedBindingPart(m,f.name,v,this.context);break;case n.PartType.Binding:p=new h.BindingPart(m,v,this.context)}p&&y&&this.canUpdateParts.push({part:p,strings:g,valueIndexes:y})}}canMergeWith(e){if(this.result.type!==e.type)return!1;if(this.result.strings.length!==e.strings.length)return!1;for(let t=0;t<this.result.strings.length;t++)if(this.result.strings[t]!==e.strings[t])return!1;return!0}merge(e){for(let{part:t,strings:i,valueIndexes:s}of this.canUpdateParts)if(s.some(t=>this.result.values[t]!==e.values[t])){let n=d(i,s.map(t=>e.values[t]));t.update(n)}this.result=e}remove(){this.range.getNodes().forEach(e=>e.remove())}}},{"../libs/node-helper":76,"./attr":87,"./binding":88,"./event":89,"./may-attr":93,"./node":94,"./property":95,"./template-parser":97}],100:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});let s=new Set,n=new Set,r=[],o=!1,l=!1,a=[],h=[];function c(e){r.push(e),o||d()}function d(){requestAnimationFrame(u),o=!0}async function u(){let e=new Map;do{for(let t=0;t<a.length;t++){let i=a[t];n.delete(i);let s=e.get(i)||0;if(e.set(i,s+1),s>3)console.warn(`Watcher "${i.toString()}" may have infinite updating`);else try{i.__updateImmediately()}catch(e){console.error(e)}}a=[],l=!0;for(let t=0;t<h.length;t++){let i=h[t];s.delete(i);let n=e.get(i)||0;if(e.set(i,n+1),n>3)console.warn(`Component with element "${i.el.outerHTML}" may have infinite updating`);else try{i.__updateImmediately()}catch(e){console.error(e)}}h=[],l=!1,await Promise.resolve()}while(h.length>0||a.length>0);o=!1;let t=r;r=[];for(let e of t)e()}i.enqueueComponentUpdate=function(e){s.has(e)||(s.add(e),h.push(e)),o||d()},i.enqueueWatcherUpdate=function(e){l?e.__updateImmediately():(n.has(e)||(n.add(e),a.push(e)),o||d())},i.onRenderComplete=c,i.renderComplete=function(){return new Promise(e=>{c(e)})}},{}],101:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./parts"),n=e("./component/define"),r=e("./watcher"),o=e("./element"),l=e("./directives");function a(e,t=null,i){return"function"==typeof e?h(e,t,i):function(e,t=null){e instanceof l.DirectiveResult&&(e=s.html`${e}`);return new s.Template(e,t).range.getFragment()}(e,t)}function h(e,t=null,i){let n,o=(t||r.globalWatcherGroup).watchImmediately(e,e=>{e instanceof l.DirectiveResult&&(e=s.html`${e}`),n?(n.merge(e),i&&i()):n=new s.Template(e,t)});return{fragment:n.range.getFragment(),unwatch:o}}i.render=a,i.renderComponent=function(e,t=null,i){let s,r=null;"function"==typeof e?({fragment:s,unwatch:r}=h(e,t,i)):s=a(e,t);let l=s.firstElementChild;if(l){let e=n.getComponentConstructorByName(l.localName);if(e){let t=o.createComponent(l,e);return r?{component:t,unwatch:r}:t}}return r&&r(),null},i.appendTo=function(e,t){let i=e.firstElementChild;if("string"==typeof t){let i=document.querySelector(t);i&&i.lastElementChild!==e&&i.append(e)}else t&&t.lastElementChild!==e&&t.append(e);return i}},{"./component/define":56,"./directives":63,"./element":72,"./parts":90,"./watcher":104}],102:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./queue"),n=new Map,r=new Set;function o(e,t){let i=document.createElement("style");return i.setAttribute("name",t),i.textContent=l(e,"global"===t?"":t),document.head.append(i),i}function l(e,t){return"function"==typeof e&&(e=e()),a.parse(String(e),"global"===t?"":t)}var a;i.ensureComponentStyle=function(e,t){if(e.style&&!n.has(e)){let i=o(e.style,t);n.set(e,i)}},i.addGlobalStyle=function(e){let t=o(e,"global");return r.add([e,t]),t},i.updateStyles=function(){s.onRenderComplete(()=>{let e=[...r];for(let[t,i]of n)t.style&&i&&e.push([t.style,i]);for(let[t,i]of e)if("function"==typeof t){let e=l(t,i.getAttribute("name"));e!==i.textContent&&(i.textContent=e)}})},function(e){function t(e,t,i){let n,r=/((?:\[.*?\]|\(.*?\)|[\s\S])+?)(?:,|$)/g,o=[];for(;n=r.exec(e);){let e=n[1].trim();e&&(t||(e=s(e,i)),o.push(e))}return t&&(o=function(e,t){let i=/(^|[\s+>~])&/g,s=[];for(let n of e)if(i.test(n))for(let e of t)s.push(n.replace(i,"$1"+e));else for(let e of t)s.push(e+" "+n);return s}(o,t)),o}function i(e,t,i){return e.replace(/\.([\w-]+)/g,(e,s)=>e.includes("__")?e:(i.add(s),e+"__"+t))}function s(e,t){return e.replace(/^(?=\w)/g,t+" ").replace(/:host/g,t)}e.scopedClassNameSetMap=new Map,e.getScopedClassNameSet=function(t){return e.scopedClassNameSetMap.get(t)},e.parse=function(s,n){let r,o,l,a=/(\s*)(?:\/\/.*|\/\*[\s\S]*?\*\/|((?:\(.*?\)|".*?"|'.*?'|[\s\S])*?)([;{}]))/g,h=[],c="";for(n&&((l=e.scopedClassNameSetMap.get(n))||(l=new Set,e.scopedClassNameSetMap.set(n,l)));r=a.exec(s);){let e=r[1],s=r[2],a=r[3];if("{"===a&&s)if("@"===s[0])c+=r[0];else{o&&(h.push(o),c+="}");let r=o=t(s,o,n);n&&(r=o.map(e=>i(e,n,l))),c+=e+r.join(", ")+"{"}else"}"===a?(o=h.pop())||(c+=r[0]):"/"!==r[0][e.length]&&(c+=r[0])}return c}}(a||(a={})),i.getScopedClassNameSet=a.getScopedClassNameSet},{"./queue":100}],103:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./dom-event"),n=e("./queue"),r={duration:200,easing:"ease-out",direction:"both"},o={ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1],"ease-in-quad":[.55,.085,.68,.53],"ease-in-cubic":[.55,.055,.675,.19],"ease-in-quart":[.895,.03,.685,.22],"ease-in-quint":[.755,.05,.855,.06],"ease-in-sine":[.47,0,.745,.715],"ease-in-expo":[.95,.05,.795,.035],"ease-in-circ":[.6,.04,.98,.335],"ease-in-back":[.6,-.28,.735,.045],"ease-out-quad":[.25,.46,.45,.94],"ease-out-cubic":[.215,.61,.355,1],"ease-out-quart":[.165,.84,.44,1],"ease-out-quint":[.23,1,.32,1],"ease-out-sine":[.39,.575,.565,1],"ease-out-expo":[.19,1,.22,1],"ease-out-circ":[.075,.82,.165,1],"ease-out-back":[.175,.885,.32,1.275],"ease-in-out-quad":[.455,.03,.515,.955],"ease-in-out-cubic":[.645,.045,.355,1],"ease-in-out-quart":[.77,0,.175,1],"ease-in-out-quint":[.86,0,.07,1],"ease-in-out-sine":[.445,.05,.55,.95],"ease-in-out-expo":[1,0,0,1],"ease-in-out-circ":[.785,.135,.15,.86],"ease-in-out-back":[.68,-.55,.265,1.55]};function l(e){return o.hasOwnProperty(e)?"cubic-bezier("+o[e].join(", ")+")":"linear"}i.getEasing=l;const a=new WeakMap,h=new Map;i.defineTransion=function(e,t){h.has(e)&&console.warn(`You are trying to overwrite transition definition "${e}"`),c.hasOwnProperty(e)&&console.warn(`"${e}" is an available CSS property, you may confuse them when using short transition`),h.set(e,t)};const c={width:!0,height:!0,opacity:!0,margin:!0,marginLeft:!0,marginRght:!0,marginTop:!0,marginBottom:!0,padding:!0,paddingLeft:!0,paddingRght:!0,paddingTop:!0,paddingBottom:!0,borderWidth:!0,borderLeftWidth:!0,borderRightWidth:!0,borderTopWidth:!0,borderBottomWidth:!0,transform:!0};function d(e){return Array.isArray(e)?{properties:e}:"string"==typeof e?c.hasOwnProperty(e)?{properties:[e]}:{name:e}:e}i.formatShortTransitionOptions=d;function u(e,t,i,s,n){if(!e.animate)return{promise:Promise.resolve(!1),cancel:()=>{}};let r=l(n),o=e.animate([t,i],{easing:r,duration:s});return{promise:new Promise(e=>{o.addEventListener("finish",()=>{e(!0)},!1),o.addEventListener("cancel",()=>{e(!1)},!1)}),cancel:function(){o.cancel()}}}i.Transition=class{constructor(e,t){this.cleaner=null,this.el=e,this.options=d(t),a.has(this.el)&&a.get(this.el).clean(),a.set(this.el,this)}enter(){return new Promise(e=>{this.clean();let t=this.options.direction;if("enter"!==t&&"both"!==t&&void 0!==t)return void e(!0);let i=t=>{a.delete(this.el),e(t)};this.options.properties?this.cssEnter(i):h.has(name)?this.jsEnter(i):this.classEnterOrLeave("enter",i)})}leave(){return new Promise(e=>{this.clean();let t=this.options.direction;if("leave"!==t&&"both"!==t&&void 0!==t)return void e(!0);let i=this.el,s=t=>{i.style.pointerEvents="",a.delete(this.el),e(t)};i.style.pointerEvents="none",this.options.properties?this.cssLeave(s):h.has(name)?this.jsLeave(s):this.classEnterOrLeave("leave",s)})}cssEnter(e){let t={};for(let e of this.options.properties)t[e]="transform"===e?"none":"0";let{promise:i,cancel:s}=function(e,t,i,s){let n={},r=getComputedStyle(e);for(let e in t)n[e]=r[e]||p[e]||"0";return u(e,t,n,i,s)}(this.el,t,this.options.duration||r.duration,this.options.easing||r.easing);i.then(e),this.cleaner=s}cssLeave(e){let t={};for(let e of this.options.properties)t[e]="transform"===e?"none":"0";let{promise:i,cancel:s}=function(e,t,i,s){let n={},r=getComputedStyle(e);for(let e in t)n[e]=r[e]||p[e]||"0";return u(e,n,t,i,s)}(this.el,t,this.options.duration||r.duration,this.options.easing||r.easing);i.then(e),this.cleaner=s}jsEnter(e){let t=this.getJSTransitionInstance();t.enter?(t.enter.then(e),this.cleaner=t.clean.bind(t)):e(!0)}jsLeave(e){let t=this.getJSTransitionInstance();t.leave?(t.leave.then(e),this.cleaner=t.clean.bind(t)):e(!0)}getJSTransitionInstance(){return new(h.get(this.options.name))(this.el,{duration:this.options.duration||r.duration,easing:this.options.easing||r.easing})}async classEnterOrLeave(e,t){let i=this.options.name+"-"+e,s=this.options.duration,r=this.options.easing,o=!1,a=this.el;s&&(a.style.transitionDuration=String(s/1e3)+"s"),r&&(a.style.transitionTimingFunction=l(r)),a.style.transition="none",a.classList.add(i,i+"-from"),this.cleaner=(()=>{o=!0}),n.onRenderComplete(()=>{requestAnimationFrame(()=>{o?a.classList.remove(i,i+"-from"):(s&&(a.style.transitionDuration=""),r&&(a.style.transitionTimingFunction=""),a.style.transition="",a.classList.remove(i+"-from"),a.classList.add(i+"-to"),this.onceTransitionEnd(e=>{a.classList.remove(i,i+"-to"),t(e)}))})})}onceTransitionEnd(e){let t=this.el,i=getComputedStyle(t),n=parseFloat(i.transitionDuration)||0,r=parseFloat(i.animationDuration)||0,o=n>0?"transitionend":"animationend",l=()=>{clearTimeout(a),t.style.pointerEvents="",e(!0)},a=setTimeout(()=>{s.off(t,o,l),t.style.pointerEvents="",e(!0)},1e3*(n||r)+50);s.once(t,o,l),this.cleaner=(()=>{clearTimeout(a),s.off(t,o,l),e(!1)})}clean(){this.cleaner&&(this.cleaner(),this.cleaner=null)}};const p={transform:"none"}},{"./dom-event":71,"./queue":100}],104:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("./observer"),n=e("./queue");class r{constructor(e,t){this.connected=!0,this.fn=e,this.callback=t,this.value=this.getValue()}getValue(){s.startUpdating(this);let e=this.fn.call(null);return s.endUpdating(this),e}update(){n.enqueueWatcherUpdate(this)}__updateImmediately(){if(!this.connected)return;let e=this.getValue();e===this.value&&"object"!=typeof e||this.callback.call(null,this.value=e)}toString(){return this.fn.toString()}disconnect(){s.clearDependencies(this),this.connected=!1}connect(){this.connected=!0,this.update()}}i.Watcher=r;class o{constructor(){this.watchers=new Set}add(e){this.watchers.add(e)}delete(e){e.disconnect(),this.watchers.delete(e)}connect(){for(let e of this.watchers)e.connect()}disconnect(){for(let e of this.watchers)e.disconnect()}update(){if(this.watchers)for(let e of this.watchers)e.update()}watch(e,t){let i=new r(e,t);return this.add(i),()=>{this.delete(i)}}watchImmediately(e,t){let i=new r(e,t);return t.call(this,i.value),this.add(i),()=>{this.delete(i)}}watchOnce(e,t){let i=new r(e,e=>{t(e),s()});this.add(i);let s=()=>{this.delete(i)};return s}watchUntil(e,t){let i,s=new r(e,e=>{e&&(t(),i())});return s.value?(s.disconnect(),t.call(this),i=(()=>{})):(this.add(s),i=(()=>{this.delete(s)})),i}}i.WatcherGroup=o,i.globalWatcherGroup=new o,i.watch=function(e,t){return i.globalWatcherGroup.watch(e,t)},i.watchImmediately=function(e,t){return i.globalWatcherGroup.watchImmediately(e,t)},i.watchOnce=function(e,t){return i.globalWatcherGroup.watchOnce(e,t)},i.watchUntil=function(e,t){return i.globalWatcherGroup.watchUntil(e,t)}},{"./observer":78,"./queue":100}],105:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../components/layer"),o=e("ff"),l=e("../style/theme");let a=class extends r.Layer{constructor(){super(...arguments),this.trangle=!1}static style(){let{lh:e}=l.theme;return n.css`
		${super.style()}
		:host{
			position: fixed;
			border-radius: 0;
			
			f-menuitem{
				padding: 0 ${e(2)}px;
			}
		}
		`}};a=s([n.define("f-contextmenu-layer")],a),i.ContextMenuLayer=a;i.contextmenu=n.defineBinding("contextmenu",class{constructor(e,t){this.layer=null,this.unwatchRect=null,this.el=e,this.context=t,n.on(this.el,"contextmenu.prevent",this.showMenuInLayer,this)}async update(e){this.renderFn=e}async showMenuInLayer(e){let t=this.renderLayer();t.applyAppendTo(),await n.renderComplete(),o.alignToEvent(t.el,e),t.el.focus(),new n.Transition(t.el,"fade").enter(),n.on(document,"mousedown",this.onDocMouseDown,this),n.once(t.el,"click",this.hideContextMenu,this),this.unwatchRect=o.watchLayout(this.el,"rect",this.onLayerRectChanged.bind(this))}renderLayer(){return this.layer||(this.layer=n.renderComponent(n.html`
				<f-contextmenu-layer>
					${this.renderFn()}
				</f-contextmenu-layer>
			`,this.context)),this.layer}onDocMouseDown(e){let t=e.target;this.layer&&!this.layer.el.contains(t)&&this.hideContextMenu()}hideContextMenu(){this.layer&&(n.off(document,"mousedown",this.onDocMouseDown,this),n.off(this.layer.el,"click",this.hideContextMenu,this),new n.Transition(this.layer.el,"fade").leave().then(e=>{e&&(this.layer.el.remove(),this.layer=null)})),this.unwatchRect&&(this.unwatchRect(),this.unwatchRect=null)}onLayerRectChanged(){this.hideContextMenu()}remove(){n.off(this.el,"contextmenu",this.showMenuInLayer,this)}})},{"../components/layer":113,"../style/theme":133,ff:45,flit:74}],106:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("flit"),n=e("ff"),r=e("../style/theme");i.draggable=s.defineBinding("draggable",class{constructor(e){this.name="",this.data=null,this.index=-1,this.el=e,this.el.setAttribute("draggable","false"),this.el.style.cursor="grab",s.on(this.el,"mousedown",this.onMouseDown,this),s.on(this.el,"mouseenter",this.onMouseEnter,this)}update(e,t,i){this.data=e,this.index=t,i&&Object.assign(this,i)}onMouseDown(e){e.preventDefault();let t=!1,i=e.clientX,n=e.clientY,r=e=>{if(!t&&(Math.abs(e.clientX-i)>5||Math.abs(e.clientY-n)>5)&&(t=!0,o.startDragging(this)),t){let t=e.clientX-i,s=e.clientY-n;o.translateDragging(t,s)}};s.on(document,"mousemove",r),s.once(document,"mouseup",async()=>{s.off(document,"mousemove",r),o.endDragging()})}onMouseEnter(){o.enterDraggable(this)}remove(){s.off(this.el,"mousedown",this.onMouseDown,this),s.off(this.el,"mouseenter",this.onMouseEnter,this)}});i.droppable=s.defineBinding("droppable",class{constructor(e){this.name="",this.direction=null,this.onenter=null,this.onleave=null,this.el=e,s.on(this.el,"mouseenter",this.onMouseEnter,this)}update(e,t){this.ondrop=e,t&&Object.assign(this,t)}onMouseEnter(){o.enterDroppable(this),s.once(this.el,"mouseleave",this.onMouseLeave,this)}emitEnter(e){this.updateDirection(),this.onenter&&this.onenter(e.data,e.index)}updateDirection(){if(!this.direction){let e=getComputedStyle(this.el);"auto"===e.overflowX||"scroll"===e.overflowX?this.direction="x":"auto"===e.overflowY||"scroll"===e.overflowY?this.direction="y":e.display.includes("flex")&&e.flexDirection.includes("row")?this.direction="x":(e.display.includes("flex")&&e.flexDirection.includes("column"),this.direction="y")}}onMouseLeave(){o.leaveDroppable(this)}emitLeave(e){this.onleave&&this.onleave(e.data,e.index)}emitDrop(e,t){this.ondrop&&this.ondrop(e.data,t)}remove(){s.off(this.el,"mouseenter",this.onMouseEnter,this)}});const o=new class{constructor(){this.dragging=null,this.mover=null,this.enteringDrops=new Set,this.activeDrop=null}startDragging(e){let t;this.dragging=e;for(let e of this.enteringDrops)if(document.contains(e.el)){if(e.name===name){t=e;break}}else this.enteringDrops.delete(e);if(!t)throw new Error('Element with ":draggable" must be contained in a ":droppable" elemenet');t.emitEnter(this.dragging),this.activeDrop=t,this.mover=new l(this.dragging,t)}translateDragging(e,t){this.mover&&this.mover.translateDraggingElement(e,t)}enterDraggable(e){this.canSwapWith(e)&&this.mover&&this.mover.onEnterDraggable(e)}canSwapWith(e){return this.dragging&&this.dragging.name===e.name&&this.dragging!==e}enterDroppable(e){this.enteringDrops.add(e),this.canDropTo(e)&&(e.emitEnter(this.dragging),this.activeDrop=e,this.mover.onEnterDroppable(e))}canDropTo(e){return this.dragging&&this.dragging.name===e.name}leaveDroppable(e){this.enteringDrops.delete(e),this.activeDrop===e&&(e.emitLeave(this.dragging),this.activeDrop=null,this.mover.onLeaveDroppable(e))}endDragging(){let e=this.mover,t=this.dragging,i=this.activeDrop;e&&e.playEndDraggingAnimation().then(()=>{e.willSwapElements()&&i.emitDrop(t,e.getSwapIndex())}),this.dragging=null,this.mover=null,this.activeDrop=null}};class l{constructor(e,t){this.elStyleText="",this.translate=[0,0],this.draggedTo=null,this.draggedToRect=null,this.draggedToIndex=-1,this.movedElements=new Set,this.dropArea=null,this.placeholder=null,this.dragging=e,this.el=e.el,this.startDropArea=this.dropArea=t,this.width=this.el.offsetWidth+Math.max(n.getNumeric(this.el,"marginLeft"),n.getNumeric(this.el,"marginRight")),this.height=this.el.offsetHeight+Math.max(n.getNumeric(this.el,"marginTop"),n.getNumeric(this.el,"marginBottom")),this.setStartDraggingStyle(),this.giveSpaceForDraggingElement(t,!1)}setStartDraggingStyle(){let e=n.getRect(this.el);document.body.style.cursor="grabbing",document.body.style.userSelect="none",this.elStyleText=this.el.style.cssText,this.el.style.position="fixed",this.el.style.zIndex="9999",this.el.style.width=e.width+"px",this.el.style.height=e.height+"px",this.el.style.left=e.left+"px",this.el.style.top=e.top+"px",this.el.style.boxShadow=`1px 1px ${r.theme.layerShadowBlurRadius}px #888`,this.el.style.pointerEvents="none",this.el.style.willChange="transform"}moveSiblingsToGiveSpace(e){let t=this.getTranslateStyle(this.startDropArea,1);for(let i of this.getSiblingsAfter(this.el))e?n.animateTo(i,{transform:t}):i.style.transform=t,this.movedElements.add(i)}getSiblingsFrom(e){if(!e)return[];let t=[];for(let i=e;i;i=i.nextElementSibling)t.push(i);return t}getSiblingsAfter(e){return this.getSiblingsFrom(e.nextElementSibling)}onEnterDroppable(e){this.giveSpaceForDraggingElement(e,!0),this.dropArea=e}giveSpaceForDraggingElement(e,t){if(this.startDropArea===e){let i=this.getTranslateStyle(e,1);for(let e of this.getSiblingsAfter(this.el))t?n.animateTo(e,{transform:i}):e.style.transform=i,this.movedElements.add(e)}this.placeholder=document.createElement("div"),this.placeholder.style.visibility="hidden","x"===e.direction?this.placeholder.style.width=this.width+"px":this.placeholder.style.height=this.height+"px",e.el.append(this.placeholder)}getTranslateStyle(e,t){let i="x"===e.direction?this.width:this.height;return`translate${e.direction.toUpperCase()}(${t*i}px)`}onLeaveDroppable(e){e===this.dropArea&&(this.restoreMovedElements(!0),this.dropArea=null,this.draggedTo=null,this.draggedToRect=null,this.draggedToIndex=-1)}restoreMovedElements(e){for(let t of this.movedElements)e?n.animateTo(t,{transform:""}):(t.style.transform="",n.stopAnimation(t));this.movedElements=new Set,this.placeholder&&(this.placeholder.remove(),this.placeholder=null)}onEnterDraggable(e){if(!this.dropArea)return;let t=new Set;for(let i of this.getSiblingsFrom(e.el))i!==this.el&&t.add(i);this.movedElements.has(e.el)&&t.delete(e.el);let i=this.getTranslateStyle(this.dropArea,1);for(let e of this.movedElements)t.has(e)||n.animateTo(e,{transform:""});for(let e of t)this.movedElements.has(e)||n.animateTo(e,{transform:i});this.draggedToIndex=this.generateDraggedToIndex(e,t.has(e.el)),this.movedElements=t,this.draggedTo=e,this.draggedToRect=n.getRect(e.el)}generateDraggedToIndex(e,t){let i=this.startDropArea===this.dropArea,s=e.index;return i&&s>this.dragging.index?t?s-1:s:t?s:s+1}translateDraggingElement(e,t){this.translate=[e,t],this.el.style.transform=`translate(${e}px, ${t}px)`}willSwapElements(){return!!(this.draggedTo||this.dropArea&&this.startDropArea!==this.dropArea)}getSwapIndex(){return this.draggedToIndex}async playEndDraggingAnimation(){this.willSwapElements()?(await this.animateDraggingElementToDropArea(),this.el.style.transform="",this.clearDraggingStyle(),this.restoreMovedElements(!1)):(this.dropArea!==this.startDropArea&&this.moveSiblingsToGiveSpace(!0),await n.animateTo(this.el,{transform:""}),this.clearDraggingStyle(),this.restoreMovedElements(!1))}async animateDraggingElementToDropArea(){let e=n.getRect(this.el),t=this.draggedToRect||n.getRect(this.placeholder),i=`translate(${t.left-e.left+this.translate[0]}px, ${t.top-e.top+this.translate[1]}px)`;await n.animateTo(this.el,{transform:i})}clearDraggingStyle(){document.body.style.cursor="",document.body.style.userSelect="",this.el.style.cssText=this.elStyleText}}},{"../style/theme":133,ff:45,flit:74}],107:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("../components/popup"),l=e("../components/layer");let a=class extends l.Layer{static style(){let{lh:e,layerBorderRadius:t,textColor:i,backgroundColor:s}=r.theme;return n.css`
		:host{
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1100;
			max-width: ${e(220)}px;
			padding: ${e(4)}px ${e(8)}px;
			line-height: ${e(22)}px;
			background: ${i};
			color: ${s};
			border-radius: ${t/2}px;
			opacity: 0.9;
			pointer-events: none;
		}

		.trangle{
			position: absolute;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			border-bottom: 7px solid ${i};
			top: -7px;

			&-herizontal{
				border-top: 6px solid transparent;
				border-bottom: 6px solid transparent;
				border-right: 7px solid ${i};
				border-left: 0;
				top: auto;
				left: -7px;
			}
		}
		`}};a=s([n.define("f-tooltip-layer")],a),i.TooltipLayer=a;let h=class extends o.Popup{constructor(){super(...arguments),this.title=""}renderLayer(){return n.html`
		<f-tooltip-layer
			:ref="layer"
			.popup=${this}
			.herizontal=${this.isHerizontal()}
			.trangle=${this.trangle}
		>
			${this.title}
		</f-layer>
		`}};h=s([n.define("f-tooltip")],h),i.Tooltip=h;class c extends h{constructor(){super(...arguments),this.keepVisible=!1,this.mouseLeaved=!1}update(){}setEl(e){this.el!==e&&(n.off(this.el,"mouseenter",this.showLayerLater,this),this.el=e)}async setTitleAndOptions(e,t={}){this.title=e,Object.assign(this,i.defaultTooltipOptions,t),!this.keepVisible&&this.mouseLeaved?(this.mouseLeaved=!1,this.hideLayerLater()):this.opened&&await this.showLayer()}showLayerLater(){super.showLayerLater(),this.mouseLeaved=!1}async showLayer(){if(!this.refs.layer){let{fragment:e}=n.render(()=>n.cache(this.opened?this.renderLayer():"",this.transition),this);document.body.append(e)}await super.showLayer(),this.alignLayer()}hideLayerLater(){this.keepVisible?this.mouseLeaved=!0:super.hideLayerLater()}}i.GlobalTooltip=c;let d=null;i.defaultTooltipOptions={alignPosition:"t",alignMargin:3,showDelay:0,hideDelay:200,keepVisible:!1};i.tooltip=n.defineBinding("tooltip",class{constructor(e){this.title="",this.el=e,n.on(this.el,"mouseenter",this.showTooltipLayer,this)}async update(e,t){this.title=e,this.options=t||{},d&&d.el===this.el&&this.hasTitle()&&d.setTitleAndOptions(e,t)}hasTitle(){return null!==this.title&&void 0!==this.title&&this.title}async showTooltipLayer(){if(this.hasTitle()){let e=await async function(e){return d?d.setEl(e):d=new c(e),d}(this.el);e.setTitleAndOptions(this.title,this.options),e.opened||e.showLayerLater()}}remove(){n.off(this.el,"mouseenter",this.showTooltipLayer,this)}})},{"../components/layer":113,"../components/popup":119,"../style/theme":133,flit:74}],108:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme");let o=class extends n.Component{static style(){let{lh:e}=r.theme;return n.css`
		:host{
			display: inline-flex;
			vertical-align: top;
		}

		button{
			&:nth-child(n+2){
				margin-left: -1px;
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				padding-left: ${e(10)}px;
			}
	
			&:nth-last-child(n+2){
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;
				padding-right: ${e(11)}px;
			}
	
			&[filled]{
				position: relative;
				z-index: 1;
			}

			&[round]{
				width: auto;
				padding: 0 ${e(6)}px;

				&:first-child{
					padding-left: ${e(8)}px;
				}
		
				&:last-child{
					padding-right: ${e(8)}px;
				}
			}
		}
		`}};o=s([n.define("f-buttongroup")],o),i.ButtonGroup=o},{"../style/theme":133,flit:74}],109:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("ff");let l=class extends n.Component{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.value=null,this.checkboxGroup=null}static style(){let{mainColor:e,focusBlurRadius:t,lh:i}=r.theme;return n.css`
		:host{
			display: inline-flex;
			vertical-align: top;
			align-items: center;
			cursor: pointer;

			&:hover{
				color: ${e};
			}

			&:focus{
				color: ${e};

				.icon{
					box-shadow: 0 0 ${t}px ${e};
				}
			}
		}

		.icon{
			width: ${i(15)}px;
			height: ${i(15)}px;
			border: 1px solid currentColor;
			border-radius: 2px;
			margin-right: ${i(6)}px;
		}

		.indeterminate, .checked{
			color: ${e};
			
			.icon{
				background: ${e};
			}
		}

		.label{
			flex: 1;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		`}render(){let e="";return this.checked?e=n.svg`<polyline style="fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;" points="1.5,7 5.7,10.5 10.5,1.5"/>`:this.indeterminate&&(e=n.svg`<line style="fill:none;stroke:#FFFFFF;" x1="2" y1="6.5" x2="11" y2="6.5"/>`),n.html`
			<template
				tabindex="0"
				:class.checked=${this.checked}
				:class.indeterminate=${this.indeterminate}
				@@click=${this.onClick}
				@@focus=${this.onFocus}
				@@blur=${this.onBlur}
			>
				<svg class="icon" viewBox="0 0 13 13">
					${e}
				</svg>

				<div class="label">
					<slot />
				</div>
			</template>
		`}onCreated(){let e=this.closest(a);e&&(this.checkboxGroup=e,this.checked=this.checkboxGroup.value==this.value,this.checkboxGroup.register(this))}onClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("change",this.checked)}onFocus(){n.on(document,"keydown.enter",this.onEnter,this)}onEnter(e){e.preventDefault(),this.onClick()}onBlur(){n.off(document,"keydown",this.onEnter,this)}};l.properties=["checked","indeterminate","value"],l=s([n.define("f-checkbox")],l),i.Checkbox=l;let a=class extends n.Component{constructor(){super(...arguments),this.value=[],this.ordered=!1,this.checkboxs=[]}register(e){this.checkboxs.push(e),e.on("change",this.onCheckboxChange.bind(this,e))}onCheckboxChange(e){if(e.checked?this.value.push(e.value):o.removeWhere(this.value,t=>t==e.value),this.ordered){let e=this.checkboxs.map(e=>e.value);o.orderBy(this.value,t=>e.findIndex(e=>e==t))}this.emit("change",this.value)}};a.properties=["value","ordered"],a=s([n.define("f-checkboxgroup")],a),i.CheckboxGroup=a},{"../style/theme":133,ff:45,flit:74}],110:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("./popup"),o=e("../style/theme");let l=class extends r.Popup{constructor(){super(...arguments),this.trigger="click",this.alignPosition="b",this.icon="down"}static style(){let{lh:e,fs:t}=o.theme;return n.css`
		${super.style()}

		:host{
			display: inline-flex;
		}

		.layer{
			padding: 5px 0;
			font-size: ${t(12)}px;

			f-menuitem{
				padding: 0 ${e(7)}px;
			}
		}
		`}render(){let e=n.cache(this.opened?this.renderLayer():"",this.transition);return n.html`
		<template :class.opened="${this.opened}">
			<slot />
			${this.icon?n.html`<f-icon .type="${this.icon}" />`:""}
			${e}
		</template>
		`}};l.properties=["icon",...r.Popup.properties],l=s([n.define("f-dropdown")],l),i.Dropdown=l},{"../style/theme":133,"./popup":119,flit:74}],111:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("ff"),l=e("../store/async-store");let a=class extends n.Component{constructor(){super(...arguments),this.resizable=!1,this.live=!1,this.pageSize=50,this.minColumnWidth=64,this.orderedColumnName=null,this.orderedDirection="",this.orderedColumnIndex=-1,this.columnWidths=null,this.resizingColumnWidths=null,this.columnResized=!1,this.cachedTotalWidth=0,this.repeatDir=null}static style(){let{fs:e,lh:t,mainColor:i,textColor:s,backgroundColor:o}=r.theme;return n.css`
		:host{
			display: flex;
			flex-direction: column;
			height: 200px;
		}

		.head{
			padding-right: 10px;	// Same with defined scrollbar width.
			border-bottom: 1px solid ${o.highlight(15)};
			color: ${s.highlight(20)};
			font-size: ${e(12)}px;
			user-select: none;
		}

		.columns{
			display: flex;
		}

		.column{
			position: relative;
			display: flex;
			align-items: stretch;
			padding: 0 ${t(8)}px;

			&:last-child{
				padding-right: 0;
			}
		}

		.column-left{
			flex: 1;
			display: flex;
			max-width: 100%;

			&:hover .order{
				display: flex;
			}
		}

		.column-title{
			flex: 0 1 auto;
			min-width: 0;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.resizable .column-title{
			flex: 1;
		}

		.order{
			width: ${t(20)}px;
			display: none;
			flex: none;
			margin-right: ${t(-5)}px;

			&.current{
				display: flex;
			}
		}

		.resizer{
			position: relative;
			z-index: 1;
			width: 17px;
			margin-left: auto;
			margin-right: ${t(-16)}px;
			cursor: e-resize;

			&::before{
				content: '';
				position: absolute;
				left: 8px;
				top: 6px;
				bottom: 6px;
				width: 1px;
				background: ${o.highlight(15)};
			}
		}

		.scroller{
			flex: 1;
			overflow-y: scroll;
			overflow-x: hidden;
		}

		.body{
			flex: 1;
			overflow-y: scroll;
			overflow-x: hidden;
		}

		.rows{
			display: table;
			table-layout: fixed;
			width: 100%;
		}

		tr{
			&:hover{
				background: ${i.alpha(.05)};
			}

			&.selected{
				background: ${i.alpha(.1)};
			}
		}

		td{
			vertical-align: middle;
			padding: 0 ${t(8)}px;
			border-bottom: 1px solid ${o.highlight(7.5)};
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			cursor: default;
		}

		f-checkbox{
			max-width: 100%;
			height: 100%;

			f-icon{
				margin-right: ${t(10)}px;
			}
		}

		.resizing-mask{
			position: fixed;
			z-index: 9999;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			cursor: ew-resize;
		}
		`}render(){return n.html`
		<div class="head" :ref="head">
			<div class="columns" :ref="columns">
				${this.renderColumns()}
			</div>
		</div>

		<div class="body">
			<table class="rows">
				<colgroup :ref="colgroup">
					${this.columns.map(()=>n.html`<col />`)}
				</colgroup>
				${this.renderRows()}
			</table>
		</div>
		`}renderColumns(){return this.columns.map((e,t)=>n.html`
			<div class="column" @click=${e=>this.doOrdering(e,t)}>
				<div class="column-left">
					<div class="column-title">${e.title}</div>
					${e.orderBy?n.html`
						<div class="order" :class.current=${this.orderedColumnIndex===t&&""!==this.orderedDirection}>
							<f-icon .type=${this.getOrderIcon(t)} />
						</div>`:""}
				</div>

				${this.resizable&&t<this.columns.length-1?n.html`
					<div class="resizer" @mousedown=${e=>this.onStartResize(e,t)} />`:""}
			</div>`)}renderRows(){return this.store instanceof l.AsyncStore?n.liveAsyncRepeat({key:this.store.key,dataCount:this.store.dataCount.bind(this.store),dataGetter:this.store.dataGetter.bind(this.store),pageSize:this.pageSize,ref:e=>this.setRepeatDirective(e),onUpdated:this.onRepeatDataUpdated.bind(this)},this.renderRow.bind(this),this.transition):this.live?n.liveRepeat({data:this.store.currentData,pageSize:this.pageSize,ref:e=>this.setRepeatDirective(e),onUpdated:this.onRepeatDataUpdated.bind(this)},this.renderRow.bind(this),this.transition):n.repeat(this.store.currentData,this.renderRow.bind(this),this.transition)}renderRow(e,t){let i=this.columns.map(i=>{let s=e&&i.render?i.render(e,t):"";return n.html`<td>${s}</td>`});return n.html`<tr>${i}</tr>`}setRepeatDirective(e){this.repeatDir=e,this.store instanceof l.AsyncStore&&this.store.setRepeatDirective(e)}onRepeatDataUpdated(e,t){this.emit("livedataupdated",e,t)}getOrderIcon(e){if(e===this.orderedColumnIndex){if("asc"===this.orderedDirection)return"order-asc";if("desc"===this.orderedDirection)return"order-desc"}return"order-default"}onCreated(){if(this.store instanceof l.AsyncStore)for(let e of this.columns)if(e.orderBy&&"string"!=typeof e.orderBy)throw new Error('"orderBy" in "columns" configuration must be string type when using "liveStore"');this.restoreOrderedColumn()}onReady(){n.onRenderComplete(()=>{this.refs.head.style.paddingRight=o.getScrollbarWidth()+"px",this.updatColumnWidths()})}onConnected(){this.watch(()=>n.observeGetter(this,"columns"),async()=>{this.restoreOrderedColumn(),await n.renderComplete(),this.updatColumnWidthsRoughly()});let e=o.watchLayout(this.el,"size",()=>this.updatColumnWidths());this.once("disconnected",e)}doOrdering(e,t){if(e.target.closest(this.scopeClassName(".resizer")))return;if(!this.columns[t].orderBy)return;let i="",s=this.columns[t].descFirst;i=t===this.orderedColumnIndex?s?""===this.orderedDirection?"desc":"desc"===this.orderedDirection?"asc":"desc":""===this.orderedDirection?"asc":"asc"===this.orderedDirection?"desc":"asc":s?"desc":"asc",this.orderedColumnName=this.columns[t].name||null,this.orderedColumnIndex=t,this.orderedDirection=i,this.orderStore(),this.orderedColumnName&&this.emit("orderchanged",this.orderedColumnName,i)}orderStore(){if(""===this.orderedDirection)this.store.clearOrder();else if(this.store instanceof l.AsyncStore){let e=this.columns[this.orderedColumnIndex];this.store.setOrder(e.orderBy,this.orderedDirection)}else{let e=this.columns[this.orderedColumnIndex],t=new o.Order([e.orderBy||e.render,this.orderedDirection]);this.store.setOrder(t)}}restoreOrderedColumn(){let e=this.orderedColumnIndex;if(this.orderedColumnName){let t=this.columns.findIndex(e=>e.name===this.orderedColumnName);if(t>-1)return this.orderedColumnIndex=t,void(-1===e&&this.orderStore())}this.orderedColumnIndex=-1,this.orderedDirection=""}updatColumnWidths(){let e=this.refs.head.clientWidth-o.getNumeric(this.refs.head,"paddingLeft")-o.getNumeric(this.refs.head,"paddingRight");this.cachedTotalWidth=e,this.updatColumnWidthsWithTotalWidth(e)}updatColumnWidthsRoughly(){this.updatColumnWidthsWithTotalWidth(this.cachedTotalWidth)}updatColumnWidthsWithTotalWidth(e){let t=function(e,t,i){if(t<i*e.length)return o.repeatTimes(t/e.length,e.length);let s=0,n=0,r=0,l=o.repeatTimes(i,e.length),a=new Set;for(let[t,i,o]of e)s+=t,n+=i,r+=o;0===n&&(n=e.length,e.forEach(e=>e[1]=1));0===r&&(r=e.length,e.forEach(e=>e[2]=1));for(;;){let o=t>=s?n:r,h=(t-s)/o,c=!1;for(let r=0;r<e.length;r++){if(a.has(r))continue;let[o,d,u]=e[r],p=h>=0?d:u,m=p*h+o;m<i?(t-=i,s-=i,n-=p,a.add(r),c=!0):l[r]=m}if(!c)break}return l}(this.columns.map(({flex:e,width:t},i)=>{let s=Math.max(t||0,this.minColumnWidth),n=this.columnResized?this.columnWidths[i]:s,r=0,o=0;if("string"==typeof e){let t=e.split(/\s+/).map(Number);r=t[0]>=0?t[0]:0,o=t[1]>=0?t[1]:r}else"number"==typeof e&&e>=0&&(r=o=e);return[n,r,o]}),e,this.minColumnWidth);this.columnWidths=t,this.setColumnWidths(t)}setColumnWidths(e){let t=o.sum(e);for(let i=0;i<e.length;i++){let s=e[i]/t;this.refs.colgroup.children[i].style.width=100*s+"%",this.refs.columns.children[i].style.width=100*s+"%"}}onStartResize(e,t){let i=e.clientX,s=e=>{e.preventDefault(),this.resizeColumnByMovementX(e.clientX-i,t)},r=n.render(n.html`<div class="resizing-mask" />`,this).firstElementChild;document.body.append(r),n.on(document,"mousemove",s),n.once(document,"mouseup",()=>{this.resizingColumnWidths&&(this.columnWidths=this.resizingColumnWidths,this.resizingColumnWidths=null),n.off(document,"mousemove",s),r.remove(),this.columnResized=!0})}resizeColumnByMovementX(e,t){let i=[...this.columnWidths],s=Math.abs(e),n=e<0,r=n?t+1:t;for(let e=n?t:t+1;(n?e>=0:e<this.columns.length)&&s>0;n?e--:e++){let t=i[e],n=s;t-n<this.minColumnWidth&&(n=t-this.minColumnWidth),i[e]-=n,i[r]+=n,s-=n}this.resizingColumnWidths=i,this.setColumnWidths(i)}setStartIndex(e){this.repeatDir&&this.repeatDir.setStartIndex(e)}scrollToViewIndex(e){this.repeatDir&&this.repeatDir.scrollToViewIndex(e)}};a.properties=["resizable","live","pageSize","minColumnWidth"],a=s([n.define("f-grid")],a),i.Grid=a},{"../store/async-store":129,"../style/theme":133,ff:45,flit:74}],112:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../icons/svg-symbol"),o=e("ff"),l=e("../style/theme");let a=class extends n.Component{constructor(){super(...arguments),this.type=""}render(){let e=r.svgSymbols[this.type];if(!e)return"";let[t,i]=o.subMatches(e,/<svg viewBox="(.+?)">([\s\S]+?)<\/svg>/)[0],[,,s,a]=t.split(" "),h=l.theme.lh(Number(s)),c=l.theme.lh(Number(a)),d=Math.max(1,o.toPower(20/h,-2));return n.html`
		<template>
			<svg
				viewBox=${t}
				width=${h}
				height=${c}
				stroke-width=${d}
				:html=${i}
			/>
		</template>
		`}};a.style=n.css`
	:host{
		display: inline-flex;
		stroke: currentColor;
		fill: none;
		margin: auto 0;
		vertical-align: top;

		svg{
			margin: auto;
		}
	}
	`,a.properties=["type"],a=s([n.define("f-icon")],a),i.Icon=a;let h=class extends a{constructor(){super(...arguments),this.type="loading",this.loading=!1,this.playing=!1}onCreated(){this.watchImmediately(()=>this.loading,e=>{e&&!this.playing&&(this.play(),this.playing=!0)})}play(){o.animateByFunction(e=>{this.el.style.transform="rotate("+e+"deg)"},0,360,1e3,"linear").promise.then(()=>{this.loading?this.play():this.playing=!1})}};h.properties=["type"],h.style=n.css`
	:host{
		display: inline-flex;
		stroke: currentColor;
		fill: none;
		margin: auto 0;
		vertical-align: top;
		position: relative;
	}`,h=s([n.define("f-icon-loading")],h),i.IconLoading=h},{"../icons/svg-symbol":127,"../style/theme":133,ff:45,flit:74}],113:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme");let o=class extends n.Component{constructor(){super(...arguments),this.herizontal=!1,this.trangle=!0,this.appendTo="body",this.popup=null}static style(){let{layerBorderRadius:e,layerBackgroundColor:t,layerShadowBlurRadius:i,layerShadowColor:s}=r.theme;return n.css`
		:host{
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1000;	// Same with window, so if in window, we must move it behind the window
			background: ${t};
			border-radius: ${e}px;
			filter: drop-shadow(0 1px ${i/2}px ${s});	// 3px nearly equals 6px in box-shadow.
		}

		.trangle{
			position: absolute;
			border-left: 8px solid transparent;
			border-right: 8px solid transparent;
			border-bottom: 11px solid ${t};
			top: -11px;

			&-herizontal{
				border-top: 8px solid transparent;
				border-bottom: 8px solid transparent;
				border-right: 11px solid ${t};
				border-left: 0;
				top: auto;
				left: -11px;
			}
		}
		`}render(){return n.html`
		<template tabindex="0">
			${this.trangle?n.html`<div class="trangle" :ref="trangle" :class.trangle-herizontal=${this.herizontal}></div>`:""}
			<slot />
		</template>`}onConnected(){this.applyAppendTo()}applyAppendTo(){this.appendTo&&n.appendTo(this.el,this.appendTo)}};o=s([n.define("f-layer")],o),i.Layer=o},{"../style/theme":133,flit:74}],114:[function(e,t,i){"use strict";var s,n=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const r=e("flit"),o=e("../style/theme"),l=e("ff"),a=e("./layer");class h extends r.Component{constructor(){super(...arguments),this.parent=null,this.deep=0,this.itemsHasIcon=!1}hoverOneChildItem(){let e=[...this.el.children].map(r.getComponent).filter(e=>e instanceof u),t=e.find(e=>!!e.sub&&e.sub.opened);t||(t=e.find(e=>e.selected)),t||(t=e[0]),t&&this.root.setHoverItem(t)}}i.CommonMenu=h;let c=class extends h{constructor(){super(...arguments),this.selectable=!1,this.dirSelectable=!1,this.layer=null,this.selectedItem=null,this.hoverItem=null,this.openedSubMenus=[],this.unwatchSubMenusLeave=null}static style(){return r.css`
		:host{
			display: block;
		}
		`}render(){return r.html`
		<template
			tabindex="0"
			@@focus=${this.onFocus}
			@@blur=${this.onBlur}
		>
			<slot />
		</template>
		`}onCreated(){this.root=this,this.layer=this.closest(a.Layer),this.layer&&this.layer.popup&&this.initWhenInLayer()}initWhenInLayer(){this.watch(()=>this.layer.popup.opened,e=>{e?this.setHoverItem(null):this.hideAllSubMenuLayers()})}selectItem(e){this.selectable&&(this.selectedItem&&this.selectedItem.deselect(),e.select(),this.selectedItem=e,this.emit("select",e)),this.setHoverItem(e)}mayHideLayer(){this.layer&&this.layer.popup&&this.layer.popup.hideLayer()}setHoverItem(e){if(this.hoverItem&&(this.hoverItem.hoverAt=!1),this.hoverItem=e,e){e.hoverAt=!0,[...e.el.parentElement.children].filter(e=>"f-menuitem"===e.localName).map(r.getComponent).forEach(e=>{e!=e&&e.sub&&e.sub.opened&&this.hideSubMenuLayer(e.sub)})}}mayClearHoverItem(e){e===this.hoverItem&&this.setHoverItem(null)}onSubMenuOpened(e){let t=this.openedSubMenus,i=this.openedSubMenus=[e],s=e.parent;for(;s&&s instanceof d;)i.unshift(s),s=s.parent;for(let e of t)i.includes(e)||e.collapse();let n=[this.layer.el,...i.map(e=>e.layer.el)];this.unwatchSubMenusLeave&&this.unwatchSubMenusLeave(),this.unwatchSubMenusLeave=l.onceMouseLeaveAll(n,this.hideAllSubMenuLayers.bind(this))}hideAllSubMenuLayers(){for(let e of this.openedSubMenus)e.collapse();this.openedSubMenus=[]}hideSubMenuLayer(e){let t=this.openedSubMenus.findIndex(t=>t===e);if(t>-1){for(let e of this.openedSubMenus.slice(t))e.collapse();this.openedSubMenus=this.openedSubMenus.slice(0,t)}}onFocus(){this.layer||this.hoverItem||this.hoverOneChildItem(),r.on(document,"keydown",this.onKeyDown,this)}onKeyDown(e){let t=this.hoverItem;t?"Enter"===e.key?(e.preventDefault(),this.layer&&t.sub?t.sub.opened?t.sub.collapse():t.sub.showInLayer():(t.click(),this.layer&&this.layer.popup.hideLayer())):"ArrowLeft"===e.key?(e.preventDefault(),this.layer&&t.parent&&t.parent instanceof d&&t.parent.parent&&t.parent.parent.hoverOneChildItem()):"ArrowRight"===e.key?(e.preventDefault(),this.layer&&t.sub&&(t.sub.opened?t.sub.hoverOneChildItem():t.sub.showInLayer())):"ArrowUp"===e.key?(e.preventDefault(),this.hoverPreviousItem()):"ArrowDown"===e.key?(e.preventDefault(),this.hoverNextItem()):"Escape"===e.key&&(e.preventDefault(),this.layer&&this.layer.popup.hideLayer()):"ArrowUp"!==e.key&&"ArrowDown"!==e.key||(e.preventDefault(),this.hoverOneChildItem())}hoverPreviousItem(){let e=this.hoverItem.el;do{e=l.getPreviousVisibleElement(e,this.el)}while(e&&!(r.getComponent(e)instanceof u));e&&this.setHoverItem(r.getComponent(e))}hoverNextItem(){let e=this.hoverItem.el;do{e=l.getNextVisibleElement(e,this.el)}while(e&&!(r.getComponent(e)instanceof u));e&&this.setHoverItem(r.getComponent(e))}onBlur(){this.setHoverItem(null),r.off(document,"keydown",this.onKeyDown,this)}};c.properties=["selectable","dirSelectable"],c=n([r.define("f-menu")],c),i.Menu=c;let d=s=class extends h{constructor(){super(...arguments),this.opened=!1,this.layer=null}static style(){let{lh:e,fs:t}=o.theme;return r.css`
		:host{
			display: block;
			overflow: hidden; // To play 'height' transition
		}
		
		.layer{
			padding: 5px 0;
			font-size: ${t(12)}px;

			f-menuitem{
				padding: 0 ${e(7)}px;
			}
		}
		`}render(){return r.html`
		<template
			${r.show(!!this.root.layer||this.opened,this.root.layer?void 0:{transition:{properties:["height","opacity"]}})}
			:class.has-icon="${this.itemsHasIcon}"
		>
			<slot />
		</template>
		`}onCreated(){if(this.parent=r.getClosestComponent(this.el.parentElement,s)||r.getClosestComponent(this.el.parentElement,c),!this.parent)throw new Error('"<f-submenu>" must be contained in a "<f-menu>"');this.root=this.parent instanceof c?this.parent:this.parent.root,this.deep=this.parent.deep+1;let e=r.getComponent(this.el.previousElementSibling);if(!(e&&e instanceof u))throw new Error('"<f-submenu>" must after "<f-menuitem>"');this.menuItem=e,e.sub=this,this.root.layer&&this.initWhenInLayer()}initWhenInLayer(){this.el.remove(),r.on(this.menuItem.el,"mouseenter",this.showInLayer,this)}async showInLayer(){if(this.opened)this.root.onSubMenuOpened(this);else if(this.opened=!0,this.layer)document.body.append(this.layer.el),this.root.onSubMenuOpened(this);else{let{fragment:e}=r.render(()=>r.cache(this.opened?r.html`<f-layer class="layer" .trangle=${!1} :ref=${this.onRefLayer} />`:"",{enterAtStart:!0,transition:"fade"}),this);document.body.append(e)}}async onRefLayer(e){e.append(this.el),await r.renderComplete(),this.layer=r.getComponent(e),l.align(this.layer.el,this.menuItem.el,"rt",{margin:[5,0]}),this.root.onSubMenuOpened(this)}expand(){this.opened=!0}collapse(){this.opened=!1}toggleExpand(){this.opened=!this.opened}};d=s=n([r.define("f-submenu")],d),i.SubMenu=d;let u=class extends r.Component{constructor(){super(...arguments),this.icon="",this.selected=!1,this.hoverAt=!1,this.sub=null}static style(){let{lh:e,mainColor:t,layerBackgroundColor:i}=o.theme;return r.css`
		:host{
			display: block;
			position: relative;
			display: flex;
			cursor: pointer;
			padding: 0 ${e(10)}px;

			&.hover{
				background: ${i.highlight(5)};
			}

			&.submenu-opened{
				color: ${t};
				background: ${t.alpha(.05)};

				&.hover{
					background: ${t.alpha(.1)};
				}
			}

			&.selected{
				color: ${t};
				background: ${t.alpha(.1)};

				&.hover{
					background: ${t.alpha(.15)};
				}
			}
		}

		// If at least one item in menu has icon, but current one not,
		// still need an element to place.
		.icon-place{
			display: flex;
			width: ${e(30)}px;
			margin-right: ${e(-10)}px;

			f-icon{
				margin: auto;
			}
		}

		.arrow{
			margin-left: auto;
			margin-right: 0;
		}

		.text{
			flex: 1;
			padding: 0 ${e(10)}px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		`}render(){let e=this.parent,t=this.root,i=this.sub,s=e.itemsHasIcon?r.html`
			<div class="icon-place">
				${this.icon?r.html`<f-icon .type=${this.icon} />`:""}
			</div>
		`:"",n="";if(i){let e=t.layer?"right":i.opened?"up":"down";n=r.html`<f-icon class="arrow" .type=${e} />`}let l=o.theme.lh(25);return r.html`
			<template
				:class.selected=${this.selected}
				:class.hover=${this.hoverAt}
				:class.submenu-opened=${t.layer&&i&&i.opened}
				:style.padding-left.px=${t.layer?"":e.itemsHasIcon?e.deep*l+5:e.deep*l}
				@@click=${this.onClick}
				@@mouseenter=${this.onMouseEnter}
				@@mouseleave=${this.onMouseLeave}
			>
				${s}
				<span class="text">
					<slot />
				</span>
				${n}
			</template>
		`}async onCreated(){if(this.parent=this.closest(d)||this.closest(c),!this.parent)throw new Error('"<f-menuitem>" must be contained in a "<f-menu>"');this.parent.itemsHasIcon=this.parent.itemsHasIcon||!!this.icon,this.root=this.parent instanceof c?this.parent:this.parent.root,this.selected&&this.root.selectItem(this)}onClick(){this.click()}click(){this.sub?(this.root.selectable&&this.root.dirSelectable&&this.root.selectItem(this),this.root.layer||this.sub.toggleExpand()):this.root.selectItem(this),this.root.mayHideLayer()}select(){this.selected=!0}deselect(){this.selected=!1}expandSub(){this.sub&&this.sub.expand()}onMouseEnter(){this.root.setHoverItem(this)}onMouseLeave(){this.root.mayClearHoverItem(this)}};u.properties=["icon","selected"],u=n([r.define("f-menuitem")],u),i.MenuItem=u;let p=class extends r.Component{};p.style=r.css`
	:host{
		background-color: #eee;
		background-clip: content-box;
		height: 1px;
	}`,p=n([r.define("f-menuspliter")],p),i.MenuSpliter=p},{"../style/theme":133,"./layer":113,ff:45,flit:74}],115:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("./modal");let l=class extends o.Modal{constructor(e){super(e),this.movable=!1,this.options=null,this.stack=[],this.isTouched=!1,this.inputErrorText=""}static style(){let{mainColor:e,infoColor:t,lh:i,successColor:s,errorColor:o,warningColor:l,fs:a}=r.theme;return n.css`
		${super.style()}

		:host{
			z-index: 1200;	// Higher that modal & layer - 1000, and tooltip - 1100
			width: 350px;
	
			&.wide, &.has-title{
				width: 500px;
			}
		}

		.body{
			display: flex;
			padding: ${i(15)}px 0 0 0;
			line-height: ${i(24)}px;
			min-height: ${i(24)}px;
		}

		.left{}

		.icon{
			margin: 0 8px auto 0;
			stroke-width: 0.666px;

			svg{
				width: ${i(30)}px;
				height: ${i(30)}px;
			}
		}

		.right{
			flex: 1;
		}

		.text{
			padding-top: 4px;
			min-width: 0;
			word-wrap: break-word;

			a{
				text-decoration: underline;

				&:hover{
					color: ${e.darken(10)};
				}
			}
		}

		.field{
			margin-top: 10px;
		}

		.input{
			width: 100%;
		}

		.error-text{
			color: ${o};
			margin-top: 5px;
			font-size: ${a(12)}px;
		}

		.list{
			margin-top: 10px;
			overflow-y: auto;
			max-height: ${i(240)}px;
		}

		.icon-alert{
			color: ${o};
		}

		.icon-info{
			color: ${t};
		}

		.icon-success{
			color: ${s};
		}

		.icon-confirm{
			color: ${l};
		}
		`}render(){let e=this.options||{};return n.html`
		<template 
			tabindex="0"	
			:class.has-title=${e.title}
			:class.wide=${!!e.wide}
			${n.show(this.opened,{transition:this.transition,enterAtStart:!0,onend:this.onTransitionEnd})}
		>
		${this.mask?n.html`
			<div class="mask"
				:ref="mask"
				${n.show(this.opened,{transition:this.transition,enterAtStart:!0})}
			/>`:""}
		${e.title?n.html`
			<div class="top head">${e.title}</whead>
			`:""}
			<div class="body">
				<div class="left">
					${"prompt"!==e.type?n.html`<f-icon :class="icon icon-${e.type}" .type="${e.type}" />`:""}
				</div>
				<div class="right">
					<div class="text" :html=${e.content} />
				${"prompt"===e.type?n.html`
					<div class="field">
						<input class="input" type="text"
							:ref="input"
							:class.touched=${this.isTouched}
							:model="options.inputValue"
							@keydown.enter=${this.onMouseEnter}
						>
						<div class="error-text">${this.inputErrorText}</div>
					</div>
					`:""}
				</div>
			</div>

			<div class="foot">
			${e.buttons?Object.entries(e.buttons).map(([t,i])=>n.html`
					<button
						?filled=${"ok"===t}
						@click=${()=>this.onClickButton(t)}
						:disable=${"prompt"===e.type&&"ok"===t&&!e.inputValue}
					>
						${i}
					</button>
				`):""}
			</div>
		</template>
		`}onMouseEnter(){this.onClickButton("ok")}onClickButton(e){let{type:t,inputValidator:i,inputValue:s,resolve:n}=this.options,r=this.refs.input;if(!("ok"===e&&"prompt"===t&&r&&(this.isTouched=!0,i&&(this.inputErrorText=i(s||""),this.inputErrorText)))){if("prompt"===t){this.isTouched=!1,n([e,"ok"===e&&s?s:""])}else n(e);this.stack.length>0?this.showMessage(this.stack.shift()):this.hide()}}async showMessage(e){let{list:t}=e;t&&(e.content=e.content||"",e.content+='<div class="'+this.scopeClassName("list")+'">'+t.map(e=>"<div>"+e.replace(/</g,"&lt;")+"</div>").join("")+"</div>");let i=new Promise(t=>{e.resolve=t});return this.options=e,this.inputErrorText="",this.show(),"prompt"===e.type&&(await n.renderComplete(),this.refs.input.focus(),this.refs.input.select()),i}};l=s([n.define("f-message-modal")],l),i.MessageModal=l;class a{constructor(){this.modal=null,this.labels={ok:"OK",cancel:"Cancel",yes:"Yes",no:"No"}}showMessage(e){return this.modal||(this.modal=n.renderComponent(n.html`<f-message-modal />`)),this.modal.showMessage(e)}setLabels(e){Object.assign(this.labels,e)}info(e,t={}){return this.showMessage(Object.assign({type:"info",content:e,buttons:{ok:this.labels.ok}},t))}success(e,t={}){return this.showMessage(Object.assign({type:"success",content:e,buttons:{ok:this.labels.ok}},t))}alert(e,t={}){return this.showMessage(Object.assign({type:"alert",content:e,buttons:{ok:this.labels.ok}},t))}confirm(e,t={}){return this.showMessage(Object.assign({type:"confirm",content:e,buttons:{cancel:this.labels.cancel,ok:this.labels.ok}},t))}prompt(e,t={}){return this.showMessage(Object.assign({type:"prompt",content:e,inputValue:"",buttons:{cancel:this.labels.cancel,ok:this.labels.ok}},t))}}i.Message=a,i.message=new a},{"../style/theme":133,"./modal":116,flit:74}],116:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("ff");let l=class extends n.Component{constructor(){super(...arguments),this.mask=!0,this.title="",this.opened=!0,this.transition="fade",this.appendTo="body"}static style(){let{mainColor:e,textColor:t,layerBorderRadius:i,layerShadowBlurRadius:s,layerBackgroundColor:o,layerShadowColor:l,lh:a}=r.theme;return n.css`
		:host{
			position: fixed;
			display: flex;
			flex-direction: column;
			z-index: 1000;	// Same with layer
			border-radius: ${i}px;
			box-shadow: 0 0 ${s}px ${l};
			background: ${o};
			max-width: 100%;
			max-height: 100%;
			padding: 0 ${a(15)}px;
			overflow: hidden;
		}

		.mask{
			position: fixed;
			z-index: 1000;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
		}

		.top{
			display: flex;
			height: ${a(40)+2}px;
			line-height: ${a(40)}px;
			border-bottom: 2px solid ${t.darken(10)};
		}

		.head{
			flex: 1;
			min-width: 0;
			padding: 0 ${a(15)}px 0 0;
			font-weight: bold;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.actions{
			display: flex;
			margin-right: -10px;

			button{
				all: unset;
				border: none;
				margin: auto 0;
				display: flex;
				width: ${a(30)}px;
				height: ${a(30)}px;
				cursor: pointer;
				color: ${t};
				transition: color 0.2s ease-out;

				f-icon{
					margin: auto;
				}
				
				&:hover{
					svg{
						stroke-width: 1.5;
					}
				}

				&:focus{
					color: ${e};
					box-shadow: none;

					svg{
						stroke-width: 1.5;
					}
				}

				&:active{
					transform: translateY(1px);
				}
			}
		}

		.body{
			flex: 1;
			min-height: 0;
			position: relative;
		}

		.foot{
			flex: none;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			padding: 16px 0;

			button:nth-child(n+2){
				margin-left: 4px;
			}

			button:nth-last-child(n+2){
				margin-right: 4px;
			}

			button[align=left]{
				margin-right: auto;
			}

			button[align=right]{
				margin-left: auto;
			}

			button[align=center]{
				margin-left: auto;
				margin-right: auto;
			}
		}
	`}render(){return n.html`
		<template
			tabindex="0"
			${n.show(this.opened,{transition:this.transition,enterAtStart:!0,onend:this.onTransitionEnd})}
		>
		${this.mask?n.html`
			<div class="mask"
				:ref="mask"
				${n.show(this.opened,{transition:this.transition,enterAtStart:!0})}
			/>`:""}
			<div class="top">
				<div class="head" :ref="head">
					${this.title}
				</div>
				<div class="actions">
					<button tabindex="0" @click=${this.hide}>
						<f-icon type="close" />
					</button>
				</div>
			</div>
			<div class="body"><slot name="body" /></div>
			<div class="foot"><slot name="foot" /></div>
		</template>
		`}onTransitionEnd(e,t){"leave"===e&&t&&(this.mask&&this.refs.mask.remove(),this.el.remove())}async onConnected(){this.appendTo&&n.appendTo(this.el,this.appendTo),await n.renderComplete(),this.mask&&this.refs.mask&&this.el.previousElementSibling!==this.refs.mask&&this.el.before(this.refs.mask),this.toCenter(),0===this.el.tabIndex&&this.el.focus(),n.on(window,"resize",o.debounce(this.onWindowResize,200).wrapped,this)}onDisconnected(){n.off(window,"resize",this.onWindowResize,this)}onWindowResize(){this.opened&&this.toCenter()}show(){this.opened=!0,this.appendTo&&n.appendTo(this.el,this.appendTo)}toCenter(){o.align(this.el,document.documentElement,"c")}hide(){this.opened=!1}toggleOpened(){this.opened?this.hide():this.show()}};l=s([n.define("f-modal")],l),i.Modal=l},{"../style/theme":133,ff:45,flit:74}],117:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("ff");let l=class extends n.Component{constructor(){super(...arguments),this.hideDelay=5e3,this.appendTo="body",this.seed=1,this.items=[]}static style(){let{infoColor:e,lh:t,successColor:i,errorColor:s,layerBorderRadius:o,layerShadowBlurRadius:l,fs:a}=r.theme;return n.css`
		:host{
			position: fixed;
			right: 10px;
			bottom: 10px;
			max-width: 300px;
			z-index: 1300;	// Higher than content
			font-size: ${a(12)}px;
		}

		.item{
			position: relative;
			display: flex;
			margin-top: 10px;
			background: #fff;
			box-shadow: 0 0 ${l}px rgba(0, 0, 0, 0.2);
			cursor: pointer;
			overflow: hidden;
			border-radius: ${o}px;
		}

		.close{
			position: absolute;
			right: 5px;
			top: 5px;
			display: flex;
			width: 30px;
			height: 30px;
			color: #5e5e5e;

			f-icon{
				margin: auto;
			}

			&:hover{
				color: #000;
			}

			&:active{
				transform: translateY(1px);
			}
		}

		.left{
			padding: ${t(10)}px;
		}

		.icon{
			display: block;
			width: ${t(20)}px;
			height: ${t(20)}px;
			color: #fff;

			svg{
				width: ${t(20)}px;
				height: ${t(20)}px;
			}
		}

		.right{
			flex: 1;
			min-width: 0;
			padding: ${t(10)}px;
			padding-right: ${t(40)}px;
		}

		.head{
			font-weight: bold;
			line-height: ${t(20)}px;
			margin-bottom: ${t(4)}px;
		}

		.body{
			flex: 1;
			min-width: 0;
			line-height: ${t(20)}px;
			text-align: left;
			word-wrap: break-word;

			a{
				font-weight: bold;
			}
		}

		.buttons{
			display: flex;
			margin-top: ${t(8)}px;
		}

		
		button{
			height: ${t(24)}px;
			line-height: ${t(24)-2}px;
			margin-right: ${t(8)}px;
			padding: 0 ${t(12)}px;
		}

		${[["alert",s],["info",e],["success",i]].map(([e,t])=>n.css`
			.type-${e}{
				&:hover{
					background: ${t.mix("#fff",95)};
				}

				.left{
					background: ${t};
				}
			}`.toString()).join("")}
		`}render(){return n.repeat(this.items,e=>n.html`<div class="item"
				:class="type-${e.type}"
				@mouseenter=${()=>this.onMouseEnter(e)}
				@mouseleave=${()=>this.onMouseLeave(e)}
			>
				<div class="close" @click=${()=>this.onClickClose(e)}>
					<f-icon type="close" />
				</div>
				<div class="left">
					<f-icon class="icon" .type=${e.type} />
				</div>
				<div class="right">
					${e.title?n.html`<div class="head">${e.title}</div>`:""}
					<div class="body" :html=${e.content}></div>
					
					${e.buttons?n.html`
					<div class="buttons">
						${Object.entries(e.buttons).map(([t,i])=>n.html`
							<button @click=${()=>this.onClickBtn(e,t)}>
								${i}
							</button>`)}
					</div>`:""}
				</div>
			</div>`,{transition:"fade",enterAtStart:!0,onend:this.onTransitionEnd})}onMouseEnter(e){e.entered=!0}onMouseLeave(e){e.entered=!1,e.timeout||this.hideLater(e)}onClickClose(e){o.remove(this.items,e)}onClickBtn(e,t){e.callback&&e.callback(t)}onTransitionEnd(e){"leave"===e&&0===this.items.length&&this.el.remove()}showNotification(e){if(e.id){let t=this.items.find(t=>t.id===e.id);if(t)return delete t.hideDelay,Object.assign(t,e),this.hideLater(t),e.id}let t=Object.assign({id:this.seed++,entered:!1,timeout:null},e);return this.items.unshift(t),this.hideLater(t),1===this.items.length&&document.body.append(this.el),t.id}hideLater(e){e.timeout&&e.timeout.cancel(),e.timeout=o.timeout(()=>{e.timeout=null,e.entered||this.hide(e.id)},e.hideDelay||this.hideDelay)}hide(e){let t=this.items.find(t=>t.id===e);return!!t&&(o.remove(this.items,t),!0)}hideAll(){this.items=[],0===this.items.length&&this.el.remove()}};l=s([n.define("f-notification-tips")],l),i.NotificationTips=l;class a{constructor(){this.tips=null}unique(){return new h(this)}showNotification(e){return this.tips||(this.tips=n.renderComponent(n.html`<f-notification-tips />`)),this.tips.showNotification(e)}info(e,t={}){return t.type="info",t.content=e,this.showNotification(t)}alert(e,t={}){return t.type="alert",t.content=e,this.showNotification(t)}success(e,t={}){return t.type="success",t.content=e,this.showNotification(t)}}i.Notification=a;class h{constructor(e){this.id=null,this.raw=e}overwriteOptions(e){this.id&&(e.id=this.id)}showNotification(e){return this.overwriteOptions(e),this.id=this.raw.showNotification(e)}info(e,t={}){return this.overwriteOptions(t),this.raw.info(e,t)}alert(e,t={}){return this.overwriteOptions(t),this.raw.alert(e,t)}success(e,t={}){return this.overwriteOptions(t),this.raw.success(e,t)}}i.UniqueNotification=h,i.notification=new a},{"../style/theme":133,ff:45,flit:74}],118:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("./popup");let l=class extends o.Popup{constructor(){super(...arguments),this.title=""}static style(){let{lh:e,mainColor:t}=r.theme;return n.css`
		:host{
			display: inline-block;
		}

		.opened{
			color: ${t};
		}

		.layer{
			padding: 0 ${e(15)}px;
		}

		.header{
			line-height: ${e(30)}px;
			padding: 5px 0;
			border-bottom: 2px solid #333;
		}

		.title{
			flex: 1;
			min-width: 0;
			padding: 0 ${e(15)}px 0 0;
			font-weight: bold;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.content{
			padding: ${e(8)}px 0;
		}
		`}renderLayer(){let e=n.html`
		${this.title?n.html`
			<div class="header">
				<div class="title">${this.title}</div>
			</div>`:""}
			<div class="content"><slot name="content" /></div>
		`;return n.html`
			<f-layer
				class="layer"
				:ref="layer"
				.popup=${this}
				.herizontal=${this.isHerizontal()}
				.trangle=${this.trangle}
			>
				${e}
			</f-layer>
		`}};l.properties=[...o.Popup.properties,"title"],l=s([n.define("f-popover")],l),i.Popover=l},{"../style/theme":133,"./popup":119,flit:74}],119:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("ff"),o=e("../style/theme");let l=class extends n.Component{constructor(){super(...arguments),this.trigger="hover",this.opened=!1,this.trangle=!0,this.alignPosition="t",this.alignMargin=3,this.transition="fade",this.hoverShowDelay=100,this.hoverHideDelay=100,this.timeout=null,this.unwatchRect=null,this.unwatchLeave=null}static style(){let{mainColor:e}=o.theme;return n.css`
		:host{
			display: inline-block;
			vertical-align: top;
		}
		
		.opened{
			color: ${e};

			button{
				color: ${e};
				border-color: ${e};
			}
		}

		.layer{}
		`}render(){let e=n.cache(this.opened?this.renderLayer():"",{transition:this.transition,enterAtStart:!0});return n.html`
			<template :class.opened="${this.opened}">
				<slot />${e}
			</template>
		`}renderLayer(){return n.html`
		<f-layer
			class="layer"
			:ref="layer"
			.popup=${this}
			.herizontal=${this.isHerizontal()}
			.trangle=${this.trangle}
		>
			<slot name="content" />
		</f-layer>
		`}isHerizontal(){let e=r.getAlignDirection(this.alignPosition);return"l"===e||"r"===e}onReady(){"hover"===this.trigger?n.on(this.el,"mouseenter",this.showLayerLater,this):"click"===this.trigger?n.on(this.el,"click",this.toggleOpened,this):n.on(this.el,this.trigger,this.showLayerLater,this),this.initFocus(),this.opened&&this.showLayer()}initFocus(){this.focusEl=this.el.querySelector('button, a, input, [tabindex="0"]')||this.el,this.focusEl===this.el&&this.el.setAttribute("tabindex","0"),n.on(this.focusEl,"focus",this.onFocus,this),n.on(this.focusEl,"blur",this.onBlur,this)}onFocus(){n.on(document,"keydown",this.onKeyDown,this)}onKeyDown(e){"Enter"===e.key?(e.preventDefault(),this.toggleOpened()):"ArrowUp"===e.key||"ArrowDown"===e.key?this.opened||this.showLayer():"Escape"===e.key&&this.opened&&this.hideLayer()}onBlur(){n.off(document,"keydown",this.onKeyDown,this)}toggleOpened(){this.opened?this.hideLayer():this.showLayer()}onDisconnected(){this.opened=!1,this.refs.layer&&this.refs.layer.remove()}clearTimeoutAndUnwatch(){this.timeout&&(this.timeout.cancel(),this.timeout=null),this.unwatchRect&&(this.unwatchRect(),this.unwatchRect=null),this.unwatchLeave&&(this.unwatchLeave(),this.unwatchLeave=null)}showLayerLater(){this.clearTimeoutAndUnwatch(),this.opened||("hover"===this.trigger||"focus"===this.trigger?(this.timeout=r.timeout(this.showLayer.bind(this),this.hoverShowDelay),"hover"===this.trigger?n.once(this.el,"mouseleave",this.hideLayerLater,this):"focus"===this.trigger&&n.once(this.el,"blur",this.hideLayerLater,this)):this.showLayer())}async showLayer(){this.clearTimeoutAndUnwatch(),this.opened=!0,await n.renderComplete(),this.alignLayer(),this.mayFocusLayer(),"hover"===this.trigger?(n.off(this.el,"mouseleave",this.hideLayerLater,this),this.unwatchLeave=r.onceMouseLeaveAll([this.el,this.refs.layer],this.hideLayerLater.bind(this))):"click"!==this.trigger&&"contextmenu"!==this.trigger||n.on(document,"mousedown",this.onDocMouseDown,this),this.unwatchRect=r.watchLayout(this.el,"rect",this.onLayerRectChanged.bind(this))}mayFocusLayer(){let e=this.refs.layer,t=n.getComponent(e).trangle?[...e.children].slice(1):[...e.children];1===t.length&&0===t[0].tabIndex?t[0].focus():e.querySelector('a, button, input, [tabindex="0"]')&&e.focus()}onDocMouseDown(e){let t=e.target;this.el.contains(t)||this.refs.layer.contains(t)||this.hideLayerLater()}onLayerRectChanged(e){let t=document.documentElement.offsetWidth,i=document.documentElement.offsetHeight;if(e.width>0&&e.height>0&&"hover"!==this.trigger){e.top<i&&e.bottom>0&&e.left<t&&e.right>0&&this.alignLayer()}else this.hideLayerLater()}alignLayer(){let e=n.getComponent(this.refs.layer).refs.trangle;r.align(this.refs.layer,this.el,this.alignPosition,{margin:this.alignMargin,canShrinkInY:!0,trangle:e})}hideLayerLater(){this.clearTimeoutAndUnwatch(),this.unbindEventsBeforeHide(),this.opened&&(this.timeout=r.timeout(this.hideLayer.bind(this),this.hoverHideDelay))}hideLayer(){this.clearTimeoutAndUnwatch(),this.unbindEventsBeforeHide(),this.opened&&this.focusEl&&this.restoreFocusFromLayer(),this.opened=!1}unbindEventsBeforeHide(){"click"!==this.trigger&&"contextmenu"!==this.trigger||n.off(document,"mousedown",this.onDocMouseDown,this)}restoreFocusFromLayer(){document.activeElement&&this.refs.layer&&this.refs.layer.contains(document.activeElement)&&this.focusEl.focus()}};l.properties=["trigger","opened","trangle","alignPosition","alignMargin"],l=s([n.define("f-popup")],l),i.Popup=l},{"../style/theme":133,ff:45,flit:74}],120:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme");let o=class extends n.Component{constructor(){super(...arguments),this.checked=!1,this.radioGroup=null,this.value=null}static style(){let{mainColor:e,lh:t,focusBlurRadius:i}=r.theme;return n.css`
		:host{
			display: inline-flex;
			vertical-align: top;
			align-items: center;
			cursor: pointer;

			&:hover{
				color: ${e};
			}

			&:focus{
				color: ${e};

				.icon{
					box-shadow: 0 0 ${i}px ${e};
				}
			}
		}

		.icon{
			border-radius: 50%;
			border: 1px solid currentColor;
			margin-right: ${t(6)}px;
		}

		.checked{
			color: ${e};
		}
	
		.label{
			flex: 1;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		`}render(){let{lh:e}=r.theme;return n.html`
			<template
				tabindex="0"
				:class.checked=${this.checked}
				@@click=${this.onClick}
				@@focus=${this.onFocus}
				@@blur=${this.onBlur}
			>
				<svg class="icon" viewBox="0 0 14 14" style="width: ${e(16)}px; height: ${e(16)}px;">
					${this.checked?n.svg`<circle style="fill:currentColor;stroke:none;" cx="7" cy="7" r="4" />`:""}
				</svg>
				<div class="label">
					<slot />
				</div>
			</template>
		`}onCreated(){let e=this.closest(l);e&&(this.radioGroup=e,this.checked=this.radioGroup.value==this.value,this.radioGroup.register(this))}onClick(){this.checked||(this.checked=!0,this.emit("change",!0))}onFocus(){this.checked||n.once(document,"keydown.enter",this.onEnter,this)}onEnter(){this.onClick()}onBlur(){this.checked||n.off(document,"keydown",this.onEnter,this)}};o.properties=["checked","value"],o=s([n.define("f-radio")],o),i.Radio=o;let l=class extends n.Component{constructor(){super(...arguments),this.value=null,this.radios=[]}register(e){this.radios.push(e),e.on("change",this.onRadioChange.bind(this,e))}onRadioChange(e){for(let t of this.radios)t!==e&&(t.checked=!1);this.value=e.value,this.emit("change",this.value)}};l.properties=["value"],l=s([n.define("f-radiogroup")],l),i.RadioGroup=l},{"../style/theme":133,flit:74}],121:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("ff");let o=class extends n.Component{constructor(){super(...arguments),this.position="right",this.rate=1,this.max=1/0,this.min=0,this.resizedValue=-1}static style(){return n.css`
		:host{
			position: absolute;
			z-index: 100;
		}

		.top{
			width: 100%;
			height: 10px;
			top: -5px;
			left: 0;
			cursor: ns-resize;
		}

		.bottom{
			width: 100%;
			height: 10px;
			bottom: -5px;
			left: 0;
			cursor: ns-resize;
		}

		.left{
			width: 10px;
			height: 100%;
			top: 0;
			left: -5px;
			cursor: ew-resize;
		}

		.right{
			width: 10px;
			height: 100%;
			top: 0;
			right: -5px;
			cursor: ew-resize;
		}

		.resizing-mask{
			position: fixed;
			z-index: 9999;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;

			&.herizontal{
				cursor: ew-resize;
			}

			&.vertical{
				cursor: ns-resize;
			}
		}
		`}render(){return n.html`
		<template
			:class=${this.position}
			@@mousedown=${this.onStartResize}
		/>
		`}onReady(){if("static"===r.getStyle(this.el.parentElement,"position"))throw new Error('Parent of "<f-resizer>" must can\'t have an "static" position')}onStartResize(e){let t=e.clientX,i=e.clientY,s=this.el.parentElement.offsetWidth,r=this.el.parentElement.offsetHeight,o=e=>{e.preventDefault(),this.resize(s,r,e.clientX-t,e.clientY-i)},l=n.render(n.html`
			<div class="resizing-mask" class="${"left"===this.position||"right"===this.position?"herizontal":"vertical"}"
		/>`,this).firstElementChild;document.body.append(l),n.on(document,"mousemove",o),n.once(document,"mouseup",()=>{n.off(document,"mousemove",o),l.remove(),this.emit("change",this.resizedValue)})}resize(e,t,i,s){let n;if("top"===this.position||"bottom"===this.position){n=t+("bottom"===this.position?1:-1)*s*this.rate,n=r.constrain(n,this.min,this.max),this.el.parentElement.style.height=n+"px"}else{n=e+("right"===this.position?1:-1)*i*this.rate,n=r.constrain(n,this.min,this.max),this.el.parentElement.style.width=n+"px"}this.resizedValue=n}};o.properties=["position","rate","min","max"],o=s([n.define("f-resizer")],o),i.Resizer=o},{ff:45,flit:74}],122:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit");let r=class extends n.Component{constructor(){super(...arguments),this.prefix="",this.path=""}onCreated(){this.path=this.getPathFromUri(location.href),n.on(window,"popstate",this.onStateChange,this)}getPathFromUri(e){let t=new URL(e).pathname;return this.prefix&&t.startsWith(this.prefix)&&(t=t.slice(this.prefix.length)),t||(t="/"),t}onDisconnected(){n.off(window,"popstate",this.onStateChange,this)}onStateChange(e){e.state&&this.redirectTo(e.state.path)}route(e,t,i={}){if(this.isMatch(e)){i.title&&(document.title=i.title);let s=this.match(e);return t({params:s?s.params:{},captures:s?s.captures:[]})}return""}isMatch(e){return o.isMatch(this.path,e)}match(e){return o.matchPath(this.path,e)}goto(e){this.path=e;let t=this.getURIFromPath(e);history.pushState({path:e},"",t)}redirectTo(e){this.path=e;let t=this.getURIFromPath(e);history.replaceState({path:e},"",t)}getURIFromPath(e){return e||(e="/"),this.prefix&&(e=this.prefix+e),e}};var o;r=s([n.define("f-router")],r),i.Router=r,function(e){const t=new Map;function i(e){return t.has(e)?t.get(e):function(e){let i=[],s={re:new RegExp(e.replace(/\./g,"\\.").replace(/\*/g,".*?").replace(/(\/?):(\w+)/g,function(e,t,s){return s&&i.push(s),t+"?([\\w-]*?)"}).replace(/^/,"^").replace(/$/,"$"),"i"),keys:i};return t.set(e,s),s}(e)}e.isMatch=function(e,t){let s;return(s="string"==typeof t?i(t).re:t).test(e)},e.matchPath=function(e,t){let s={},n=[];if("string"==typeof t){let{re:n,keys:r}=i(t),o=e.match(n);if(!o)return null;if(r)for(let e=0;e<r.length;e++)s[r[e]]=o[e+1]}else{let i=e.match(t);if(!i)return null;n=[...i]}return{params:s,captures:n}}}(o||(o={})),n.defineBinding("goto",class{constructor(e){this.value="",this.router=null,this.el=e,n.on(this.el,"click",this.onClick,this)}update(e){this.value=e}onClick(){this.ensureRouter(),this.router.goto(this.value)}ensureRouter(){if(!this.router&&(this.router=n.getClosestComponent(this.el.parentElement,r),!this.router))throw new Error('":goto" must be contained in a extended component of "<f-router>"')}remove(){}})},{flit:74}],123:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("./popup"),l=e("ff");let a=class extends o.Popup{constructor(){super(...arguments),this.trigger="click",this.alignPosition="b",this.alignMargin=0,this.trangle=!1,this.icon="down",this.data=[],this.value=null,this.multiple=!1,this.searchable=!1,this.ordered=!1,this.placeholder="",this.inputed="",this.editing=!1,this.hoverAt=null}static style(){let{mainColor:e,lh:t,borderColor:i,layerShadowBlurRadius:s,backgroundColor:o,layerBackgroundColor:l,layerShadowColor:a}=r.theme;return n.css`
		:host{
			display: inline-flex;
			vertical-align: top;
			border-bottom: 1px solid ${i};
			width: 150px;
			height: ${t(30)}px;
			background: ${o.highlight(10)};
			line-height: ${t(30)}px;
			justify-content: space-between;
			align-items: center;
			cursor: pointer;

			&:hover, &.opened{
				border-color: ${e};

				.icon{
					color: ${e};
				}
			}

			&.not-inputable input{
				cursor: inherit;
			}
		}

		.icon{
			margin-left: auto;
			margin-right: 4px;
		}
	
		.input{
			flex: 1;
			min-width: 0;
			padding: 0 0 0 ${t(8)}px;
			height: ${t(30)}px;
			border: none;
			background: transparent;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			box-shadow: none;

			&:focus{
				box-shadow: none;
			}
		}
	
		.layer{
			border-radius: 0;
			filter: none;
			box-shadow: 0 1px ${s}px ${a};
		}
	
		.list{
			overflow-y: auto;
			max-height: 100%;
		}

		.option{
			display: flex;
			padding: 0 8px;
			cursor: pointer;

			&:not(:last-child){
				box-shadow: inset 0 -1px 0 0 ${l};	// Add a white line as spliter for adjacent selected items.
			}

			&.hover{
				background: ${l.highlight(5)};

				&.selected{
					background: ${e.alpha(.15)};
				}
			}

			&.selected{
				color: ${e};
				background: ${e.alpha(.1)};
			}
		}

		.option-content{
			flex: 1;
			min-width: 0;
		}

		.selected-icon{
			margin-right: -4px;
		}
		`}render(){return n.html`
		<template
			:class.opened=${this.opened}
			:class.not-inputable=${!this.searchable}
		>
			${this.renderCurrentContent()}
			${this.icon&&!this.editing?n.html`<f-icon class="icon" .type="${this.icon}" />`:""}
			${n.cache(this.opened?this.renderLayer():"",{transition:this.transition,enterAtStart:!0})}
		</template>
		`}renderCurrentContent(){return n.html`
		<input type="text"
			class="input"
			:ref="input"
			.value=${this.editing?this.inputed:this.renderCurrentDisplay()}
			.placeholder=${this.placeholder}
			?readonly=${!this.editing}
			@click=${this.onClick}
			@input=${this.onInput}
		>
		`}renderLayer(){let e=this.getMaySuggestedData(),t=n.repeat(e,([e,t])=>this.renderOption(e,t));return n.html`
		<f-layer
			class="layer"
			:ref="layer"
			.popup=${this}
			.herizontal=${!1}
			.trangle=${!1}
		>
			<ul class="list">
			${t}
			</ul>
		</f-layer>
		`}renderOption(e,t){let i=this.isSelected(e);return n.html`
		<li
			class="option"
			:class.selected=${i}
			:class.hover=${null!==this.hoverAt&&this.hoverAt===e}
			@click.prevent=${()=>this.select(e)}
			@mouseenter=${()=>this.onMouseEnter(e)}
			@mouseleave=${()=>this.onMouseLeave(e)}
			style=${this.renderOptionStyle(e)}
		>
			<div class="option-content">
				${this.renderOptionContent(e,t)}
			</div>
			${i?n.html`<f-icon class="selected-icon" type="selected" />`:""}
		</li>
		`}renderOptionStyle(e){return""}renderCurrentDisplay(){if(this.multiple){let e=[];for(let[t,i]of this.data)this.value.includes(t)&&e.push(this.renderOptionDisplay(t,i));return e.join("; ")}for(let[e,t]of this.data)if(this.value==e)return this.renderOptionDisplay(e,t);return""}renderOptionDisplay(e,t){return t}renderOptionContent(e,t){return this.renderOptionDisplay(e,t)}getMaySuggestedData(){if(this.searchable&&this.inputed){let e=this.inputed.toLowerCase(),t=[];for(let i of this.data)String(i[1]).includes(e)&&t.push(i);return t}return this.data}isSelected(e){return this.multiple?this.value.includes(e):this.value==e}onCreated(){this.initValue(),this.initEditing()}initValue(){this.multiple&&!Array.isArray(this.value)&&(null===this.value||void 0===this.value?this.value=[]:this.value=[this.value])}initEditing(){this.searchable&&this.watch(()=>this.opened,e=>{!e&&this.editing&&this.endEditing()})}onClick(){this.searchable&&!this.editing&&this.startEditing()}select(e){if(this.multiple){if(this.value.includes(e))l.remove(this.value,e);else if(this.value.push(e),this.ordered){let e=[...this.data].map(([e])=>e);this.value.sort((t,i)=>e.indexOf(t)-e.indexOf(i))}}else this.value=e,this.hideLayer();this.emit("change",this.value)}async startEditing(){this.editing=!0,this.inputed="",await n.renderComplete(),this.refs.input.focus()}endEditing(){this.editing=!1}async showLayer(){this.hoverAt=null,await super.showLayer(),this.editing&&this.refs.input&&this.refs.input.focus();let e=this.refs.layer.querySelector(this.scopeClassName(".selected"));e&&l.scrollToTop(e)}async alignLayer(){this.refs.layer.style.minWidth=String(this.el.offsetWidth)+"px",await super.alignLayer()}onInput(){this.inputed=this.refs.input.value,this.showLayer()}async onKeyDown(e){let t=[...this.getMaySuggestedData()].map(([e])=>e),i=!1;if(0!==t.length||"ArrowUp"!==e.key&&"ArrowDown"!==e.key){if("Enter"===e.key)e.preventDefault(),this.opened?null!==this.hoverAt?this.select(this.hoverAt):this.hideLayer():this.showLayer();else if("ArrowUp"===e.key)if(e.preventDefault(),this.opened)if(this.multiple&&null===this.hoverAt)this.hoverAt=t[t.length-1];else{null===this.hoverAt&&(this.hoverAt=this.value);let e=t.findIndex(e=>e===this.hoverAt),s=Math.max(0,e-1);this.hoverAt=t[s],i=!0}else this.showLayer();else if("ArrowDown"===e.key)if(e.preventDefault(),this.opened)if(this.multiple&&null===this.hoverAt)this.hoverAt=t[0];else{null===this.hoverAt&&(this.hoverAt=this.value);let e=t.findIndex(e=>e===this.hoverAt),s=Math.min(t.length-1,e+1);this.hoverAt=t[s],i=!0}else this.showLayer();else"Escape"===e.key&&(e.preventDefault(),this.inputed="",this.hideLayer());if(i){await n.renderComplete();let e=this.refs.layer.querySelector(this.scopeClassName(".hover"));e&&l.scrollToView(e,r.theme.lh(30))}}}onMouseEnter(e){this.hoverAt=e,document.activeElement!==this.refs.input&&this.refs.input.focus()}onMouseLeave(e){this.hoverAt===e&&(this.hoverAt=null)}};a.properties=[...o.Popup.properties,"icon","value","multiple","searchable","ordered","placeholder"],a=s([n.define("f-select")],a),i.Select=a},{"../style/theme":133,"./popup":119,ff:45,flit:74}],124:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme"),o=e("ff"),l=e("../bindings/tooltip");let a=class extends n.Component{constructor(){super(...arguments),this.vertical=!1,this.min=0,this.max=100,this.step=1,this.value=0,this.draging=!1}static style(){let{mainColor:e,textColor:t,lh:i,focusBlurRadius:s,backgroundColor:o}=r.theme,l=2*Math.ceil(i(9))+1;return n.css`
		:host{
			display: inline-flex;
			vertical-align: top;
			flex-direction: column;
			justify-content: center;
			position: relative;
			width: ${i(150)}px;
			height: ${i(30)}px;
			cursor: pointer;

			&:focus .ball{
				box-shadow: 0 0 ${s}px ${e};
				border-color: ${e};
			}
		}

		.groove{
			position: relative;
			height: ${1}px;
		}

		.groove-bg{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: ${t};
			opacity: 0.3;
		}
	
		.progress{
			position: relative;
			background: ${e};
			height: 100%;
		}
	
		.ball{
			border-radius: 50%;
			border: 1px solid ${t.lighten(10)};
			background: ${o};
			float: right;
			width: ${l}px;
			height: ${l}px;
			margin: -${(l-1)/2}px -${Math.round(l/2)}px;

			&:hover{
				border-color: ${e};
			}
		}

		.dragging{
			.ball{
				border-color: currentColor;
			}
		}

		:host[vertical]{
			width: ${i(30)}px;
			height: ${i(150)}px;
			flex-direction: row;

			.groove{
				width: ${1}px;
				height: 100%;
			}

			.progress{
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 0;
			}

			.ball{
				margin: -${Math.round(l/2)}px -${(l-1)/2}px;
			}
		}
		`}render(){return n.html`
		<template
			tabindex="0"
			:class.dragging=${this.draging}
			@@mousedown=${this.onMouseDown}
			@@wheel.prevent=${this.onWheel}
			@@focus=${this.onFocus}
			@@blur=${this.onBlur}
		>
			<div class="groove" :ref="groove">
				<div class="groove-bg"></div>
				<div class="progress"
					:style.width.percent=${this.vertical?"":this.getPercent()}
					:style.height.percent=${this.vertical?this.getPercent():""}
				>
					<div class="ball" ${l.tooltip(String(this.value),{alignPosition:this.vertical?"r":"t",keepVisible:this.draging})}></div>
				</div>
			</div>
		</template>
		`}getPercent(){if(this.value===this.min)return 0;let e=(this.value-this.min)/(this.max-this.min)*100;return o.constrain(e,0,100)}onMouseDown(e){let t=o.getRect(this.refs.groove);this.draging=!0,e.target.matches(this.scopeClassName(".ball"))||this.changeValueByEvent(e,t);let i=e=>{e.preventDefault(),this.changeValueByEvent(e,t)};n.on(document,"mousemove",i),n.once(document,"mouseup",()=>{n.off(document,"mousemove",i),this.draging=!1})}changeValueByEvent(e,t){let i;i=this.vertical?o.constrain(1-(e.clientY-t.top)/t.height,0,1):o.constrain((e.clientX-t.left)/t.width,0,1);let s=(this.max-this.min)*i;this.step&&(s=Math.round(s/this.step)*this.step);let n=this.value,r=this.min+s;r!==n&&this.emit("change",this.value=r)}onWheel(e){if(this.step){let t;(t=e.deltaY<0&&this.vertical||e.deltaY>0&&!this.vertical?Math.min(this.value+this.step,this.max):Math.max(this.value-this.step,this.min))!==this.value&&this.emit("change",this.value=t)}}onFocus(){n.on(document,"keydown",this.onKeyDown,this)}onKeyDown(e){let t;this.vertical?"ArrowUp"===e.key?(e.preventDefault(),t=Math.min(this.value+this.step,this.max)):"ArrowDown"===e.key&&(e.preventDefault(),t=Math.max(this.value-this.step,this.min)):"ArrowLeft"===e.key?(e.preventDefault(),t=Math.max(this.value-this.step,this.min)):"ArrowRight"===e.key&&(e.preventDefault(),t=Math.min(this.value+this.step,this.max)),void 0!==t&&t!==this.value&&this.emit("change",this.value=t)}onBlur(){n.off(document,"keydown",this.onKeyDown,this)}};a.properties=["vertical","min","max","step","value"],a=s([n.define("f-slider")],a),i.Slider=a},{"../bindings/tooltip":107,"../style/theme":133,ff:45,flit:74}],125:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("../style/theme");let o=class extends n.Component{constructor(){super(...arguments),this.checked=!1}static style(){let{mainColor:e,lh:t,textColor:i,focusBlurRadius:s,backgroundColor:o}=r.theme,l=2*Math.round(t(10)),a=2*l-6;return n.css`
		:host{
			display: inline-block;
			vertical-align: top;
			width: ${a}px;
			height: ${l}px;
			color: ${i.lighten(20)};
			border: 1px solid currentColor;
			border-radius: ${l/2}px;
			padding: 1px;
			margin: ${(t(30)-l)/2}px 0;
			transition: background-color 0.2s ${n.getEasing("ease-out-cubic")};
			cursor: pointer;

			&:hover{
				color: ${e};
			}
			
			&:focus{
				box-shadow: 0 0 ${s}px ${e};
			}
		}
	
		.ball{
			width: ${l-4}px;
			height: ${l-4}px;
			background: ${o};
			border: 1px solid ${i.lighten(10)};;
			border-radius: 50%;
			transition: margin 0.2s ${n.getEasing("ease-out-cubic")};
		}
	
		.on{		
			background: ${e};
			color: ${e};

			.ball{
				border-color: ${o};
				margin-left: calc(100% - ${l-4}px);
			}

			&:hover{
				background: ${e.darken(10)};
			}
		}
		`}render(){return n.html`
		<template
			tabindex="0"
			:class.on=${this.checked}
			@@click=${this.onClick}
			@@focus=${this.onFocus}
			@@blur=${this.onBlur}
		>
			<div class="ball"></div>
		</template>
		`}onClick(){this.checked=!this.checked,this.emit("change",this.checked)}onFocus(){n.on(document,"keydown",this.onKeyDown,this)}onKeyDown(e){"Enter"===e.key?(e.preventDefault(),this.onClick()):"ArrowLeft"===e.key?this.checked&&(e.preventDefault(),this.onClick()):"ArrowRight"===e.key&&(this.checked||(e.preventDefault(),this.onClick()))}onBlur(){n.off(document,"keydown",this.onKeyDown,this)}};o.properties=["checked"],o=s([n.define("f-switch")],o),i.Switch=o},{"../style/theme":133,flit:74}],126:[function(e,t,i){"use strict";var s=this&&this.__decorate||function(e,t,i,s){var n,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};Object.defineProperty(i,"__esModule",{value:!0});const n=e("flit"),r=e("ff"),o=e("./menu");let l=class extends o.Menu{constructor(){super(...arguments),this.scrollable=!1,this.data=null,this.children=null,this.currentPath="",this.loading=!1,this.itemMap={}}static style(){return n.css`
		:host{
			display: block;
			position: relative;
			
		}

		.scrollable{
			overflow: auto;

			// As a scroll inne because items in tree are always wide.
			.inner{
				position: absolute;
				left: 0;
				top: 0;
				min-width: 100%;
			}
		}
		`}render(){return n.html`
		<template
			tabindex="0"
			:class.scrollable=${this.scrollable}
			@@focus=${this.onFocus}
			@@blur=${this.onBlur}
		>
			<div class="inner" :ref="inner">
				${this.renderInner()}
			</div>
		</template>
		`}renderInner(){return this.data?n.repeat(this.children,e=>n.html`
			<f-treeitem
				.root=${this}
				.data=${e}
				.deep=${this.deep}
			>
				${e.text}
			</f-treeitem>
			${e.children?n.html`
				<f-treemenu
					.root=${this}
					.data=${e}
					.deep=${this.deep+1}
				>
			`:""}
		`):""}async onCreated(){super.onCreated(),await this.loadChildren(),this.data&&(this.currentPath=this.data.path)}async loadChildren(){this.data&&(this.data.children instanceof Promise?(this.loading=!0,this.children=await this.data.children,this.loading=!1):this.children=this.data.children||null)}register(e){this.itemMap[e.data.path]=e}async setPath(e){let t=this.itemMap,i=t[this.currentPath];i&&i.deselect(),this.currentPath=e;let s="",o=e.split("/");for(let e of o){let i=t[s+=(s.endsWith("/")?"":"/")+e];i&&await i.expandSub()}await n.renderComplete();let l=t[e];l&&(l.select(),r.scrollToView(l.el))}};l.properties=[...o.Menu.properties,"scrollable"],l=s([n.define("f-tree")],l),i.Tree=l;let a=class extends o.SubMenu{constructor(){super(...arguments),this.data=null,this.children=null,this.loading=!1,this.renderInner=l.prototype.renderInner,this.loadChildren=l.prototype.loadChildren}render(){return n.html`
		<template
			${n.show(!!this.root.layer||this.opened,this.root.layer?void 0:{transition:{properties:["height","opacity"]}})}
			:class.has-icon="${this.itemsHasIcon}"
		>
			${this.renderInner()}
		</template>
		`}async onCreated(){super.onCreated(),await this.loadChildren()}};a=s([n.define("f-treemenu")],a),i.TreeMenu=a;let h=class extends o.MenuItem{async onCreated(){super.onCreated(),this.root.register(this)}};h=s([n.define("f-treeitem")],h),i.TreeItem=h},{"./menu":114,ff:45,flit:74}],127:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.svgSymbols={add:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="3.5" y1="9.5" x2="17.5" y2="9.5"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="10.5" y1="2.5" x2="10.5" y2="16.5"/>\n\t\t</svg>\n\t',alert:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<line style="fill:none;stroke:currentColor;" x1="9.5" y1="11" x2="9.5" y2="4"/>\n\t\t\t<line style="fill:none;stroke:currentColor;" x1="9.5" y1="15" x2="9.5" y2="13"/>\n\t\t</svg>\n\t',"checkbox-checked":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:currentColor;stroke:currentColor;" d="M16,17.5H4c-0.8,0-1.5-0.7-1.5-1.5V4c0-0.8,0.7-1.5,1.5-1.5h12c0.8,0,1.5,0.7,1.5,1.5v12C17.5,16.8,16.8,17.5,16,17.5z"/>\n\t\t\t<polyline style="fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;" points="5.5,11 9.7,14.5 14.5,5.5"/>\n\t\t</svg>\n\t',"checkbox-indeterminate":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:currentColor;stroke:currentColor;" d="M16,17.5H4c-0.8,0-1.5-0.7-1.5-1.5V4c0-0.8,0.7-1.5,1.5-1.5h12c0.8,0,1.5,0.7,1.5,1.5v12C17.5,16.8,16.8,17.5,16,17.5z"/>\n\t\t\t<line style="fill:none;stroke:#FFFFFF;" x1="5" y1="9.5" x2="15" y2="9.5"/>\n\t\t</svg>\n\t',"checkbox-partly-checked":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:#F9F9F9;stroke:currentColor;" cx="10" cy="10" r="7.5"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-linecap:round;" x1="6" y1="9.5" x2="14" y2="9.5"/>\n\t\t</svg>\n\t',"checkbox-unchecked":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M16,17.5H4c-0.8,0-1.5-0.7-1.5-1.5V4c0-0.8,0.7-1.5,1.5-1.5h12c0.8,0,1.5,0.7,1.5,1.5v12C17.5,16.8,16.8,17.5,16,17.5z"/>\n\t\t</svg>\n\t',clock:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="9.5,3.5 9.5,9.5 13.5,9.5"/>\n\t\t</svg>\n\t',close:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="4.4" y1="4.4" x2="15.7" y2="15.6"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="15.7" y1="4.4" x2="4.4" y2="15.6"/>\n\t\t</svg>\n\t',confirm:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M9.5,15"/>\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M9.5,4"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M13.5,13.5"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M5.5,5.5"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M5.5,13.5"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M13.5,5.5"/>\n\t\t\t<path style="fill:currentColor;" d="M10.6,9.7c-0.3,0.2-0.4,0.4-0.5,0.8c-0.1,0.1-0.1,0.4-0.1,0.7s-0.3,0.5-0.5,0.5l0,0c-0.3,0-0.5-0.2-0.5-0.5c0-0.1,0-0.2,0-0.3c0-0.4,0.1-0.7,0.2-1s0.4-0.6,0.9-0.9c0.4-0.3,0.6-0.6,0.7-0.6c0.4-0.4,0.5-0.8,0.3-1.3C10.9,6.3,10.3,6,9.7,6C9,6.1,8.6,6.4,8.2,7C8.1,7.2,7.8,7.3,7.6,7.2l0,0C7.3,7.1,7.2,6.7,7.4,6.4c0.5-0.9,1.3-1.3,2.4-1.3c0.8,0,1.4,0.3,1.9,0.7c0.4,0.4,0.6,0.9,0.6,1.6c0,0.7-0.3,1.3-1,1.8L10.6,9.7z"/>\n\t\t\t<ellipse style="fill:currentColor;" cx="9.5" cy="13.5" rx="0.6" ry="0.6"/>\n\t\t</svg>\n\t',down:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="6,6.5 10,12.5 14,6.5"/>\n\t\t</svg>\n\t',edit:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linejoin:round;" d="M8.1,16.8l-4.6,0.7L4.2,13L13,4.2c1.1-0.9,2.7-0.8,3.7,0.2l0,0c1,1,1,2.6,0.1,3.6L8.1,16.8z"/>\n\t\t\t<line style="fill:none;stroke:currentColor;" x1="12.6" y1="5.3" x2="16.2" y2="8.9"/>\n\t\t\t<line style="fill:none;stroke:currentColor;" x1="4.5" y1="13.1" x2="8.4" y2="16.9"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="11.5" y1="8.5" x2="7.5" y2="12.5"/>\n\t\t</svg>\n\t',error:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M9.5,15"/>\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M9.5,4"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="5.5" y1="5.5" x2="13.5" y2="13.5"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="13.5" y1="5.5" x2="5.5" y2="13.5"/>\n\t\t</svg>\n\t',export:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M6,12.8c0.8-4.9,6.6-8,11.5-7.3"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M16.5,11.3v2.2c0,1.1-0.9,2-2,2h-10c-1.1,0-2-0.9-2-2v-2.2"/>\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="15.5,2.5 18.5,5.5 15.5,8.5"/>\n\t\t</svg>\n\t',eye:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M18.5,9.5c0,0-4.1,6-9,6s-9-6-9-6s4.1-6,9-6S18.5,9.5,18.5,9.5z"/>\n\t\t\t<circle style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" cx="9.5" cy="9.5" r="3"/>\n\t\t</svg>\n\t',folder:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M15.2,16.5H4.8c-1,0-1.8-0.7-2-1.6l-1.3-7C1.4,6.8,2.1,5.7,3.2,5.5c0.1,0,0.3,0,0.4,0h12.9c1.1,0,2,0.9,2,2c0,0.1,0,0.3,0,0.4l-1.3,7C16.9,15.8,16.1,16.5,15.2,16.5z"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M3.5,5V3.5c0-1.1,0.9-2,2-2h1.3c0.4,0,0.8,0.2,1.1,0.5l0.5,0.5h6.1c1.5,0,2,1.4,2,2.5"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="14.5" y1="9.7" x2="13.5" y2="13.7"/>\n\t\t</svg>\n\t',import:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M18.5,3.4c-4.9-1-10,3.2-11,8.1"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M2.5,11.3v2.2c0,1.1,0.9,2,2,2h10c1.1,0,2-0.9,2-2v-2.2"/>\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="5.6,8.8 7.3,12.6 11.2,10.9"/>\n\t\t</svg>\n\t',info:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<line style="fill:none;stroke:currentColor;" x1="9.5" y1="8" x2="9.5" y2="15"/>\n\t\t\t<line style="fill:none;stroke:currentColor;" x1="9.5" y1="4" x2="9.5" y2="6"/>\n\t\t</svg>\n\t',left:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="13.5,15.5 5.5,9.5 13.5,3.5"/>\n\t\t</svg>\n\t',link:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M6.8,8.9l-1-1l-2.1,2c-1.7,1.7-1.7,4.6,0,6.3s4.6,1.7,6.2,0l2.1-2.1l-1.2-1.2l-0.2-0.2"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M13,10.9l1.2,1.2l2-2c1.7-1.7,1.7-4.6,0-6.3c-1.7-1.7-4.6-1.7-6.3,0L8,5.8l1,1"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:bevel;" x1="13.5" y1="6.3" x2="6.4" y2="13.4"/>\n\t\t</svg>\n\t',loading:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M10,2.5c4.1,0,7.5,3.3,7.5,7.5"/>\n\t\t</svg>\n\t',maximize:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:currentColor;" d="M13,5c1.1,0,2,0.9,2,2v6c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2H13 M13,4H7C5.3,4,4,5.3,4,7v6c0,1.7,1.3,3,3,3l0,0h6c1.7,0,3-1.3,3-3V7C16,5.3,14.7,4,13,4z"/>\n\t\t</svg>\n\t',minimize:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="4" y1="10.5" x2="16" y2="10.5"/>\n\t\t</svg>\n\t',"msg-alert":'\n\t\t<svg viewBox="0 0 34 34">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="16.5" cy="16.7" r="16"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" x1="17" y1="23.2" x2="17" y2="26.2"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" x1="17" y1="7.2" x2="17" y2="19.2"/>\n\t\t</svg>\n\t',"msg-confirm":'\n\t\t<svg viewBox="0 0 34 34">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="16.9" cy="16.7" r="16"/>\n\t\t\t<path style="fill:currentColor;" d="M18.7,16.7c-0.5,0.4-0.8,0.8-0.9,1.4c-0.1,0.2-0.1,0.7-0.2,1.2s-0.5,0.9-1,0.9l0,0c-0.5,0-1-0.4-1-0.9c0-0.2,0-0.4,0-0.6c0-0.7,0.1-1.3,0.4-1.8s0.8-1.1,1.6-1.7s1.2-1,1.4-1.1c0.7-0.7,0.9-1.5,0.6-2.3c-0.4-1.1-1.5-1.6-2.7-1.6c-1.2,0.1-2.1,0.6-2.7,1.7c-0.3,0.4-0.8,0.6-1.2,0.4l0,0c-0.5-0.2-0.7-0.9-0.4-1.4c1-1.6,2.5-2.4,4.5-2.4c1.5,0,2.6,0.5,3.5,1.3c0.8,0.8,1.2,1.7,1.2,2.8c0,1.3-0.6,2.3-1.8,3.3L18.7,16.7z"/>\n\t\t\t<circle style="fill:currentColor;" cx="16.6" cy="23.6" r="1.1"/>\n\t\t</svg>\n\t',"msg-error":'\n\t\t<svg viewBox="0 0 34 34">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="16.7" cy="16.7" r="16"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" x1="9.3" y1="9.6" x2="24.2" y2="24.4"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" x1="24.2" y1="9.6" x2="9.3" y2="24.4"/>\n\t\t</svg>\n\t',"msg-info":'\n\t\t<svg viewBox="0 0 34 34">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="17.2" cy="16.7" r="16"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" x1="17.2" y1="10.2" x2="17.2" y2="7.2"/>\n\t\t\t<line style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" x1="17.2" y1="26.2" x2="17.2" y2="14.2"/>\n\t\t</svg>\n\t',"msg-prompt":'\n\t\t<svg viewBox="0 0 34 34">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="16.9" cy="16.7" r="16"/>\n\t\t\t<path style="fill:currentColor;" d="M18.7,16.7c-0.5,0.4-0.8,0.8-0.9,1.4c-0.1,0.2-0.1,0.7-0.2,1.2s-0.5,0.9-1,0.9l0,0c-0.5,0-1-0.4-1-0.9c0-0.2,0-0.4,0-0.6c0-0.7,0.1-1.3,0.4-1.8s0.8-1.1,1.6-1.7s1.2-1,1.4-1.1c0.7-0.7,0.9-1.5,0.6-2.3c-0.4-1.1-1.5-1.6-2.7-1.6c-1.2,0.1-2.1,0.6-2.7,1.7c-0.3,0.4-0.8,0.6-1.2,0.4l0,0c-0.5-0.2-0.7-0.9-0.4-1.4c1-1.6,2.5-2.4,4.5-2.4c1.5,0,2.6,0.5,3.5,1.3c0.8,0.8,1.2,1.7,1.2,2.8c0,1.3-0.6,2.3-1.8,3.3L18.7,16.7z"/>\n\t\t\t<circle style="fill:currentColor;" cx="16.6" cy="23.6" r="1.1"/>\n\t\t</svg>\n\t',"msg-success":'\n\t\t<svg viewBox="0 0 34 34">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="17.2" cy="16.7" r="16"/>\n\t\t\t<polyline style="opacity:0.5;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;" points="10.6,19.3 17.2,25.6 24.8,9.1"/>\n\t\t</svg>\n\t',"order-asc":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polygon style="fill:currentColor; stroke:none;" points="10,7 7,12 13,12"/>\n\t\t</svg>\n\t',"order-default":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polygon style="fill:currentColor; stroke:none;" points="10,16 7,11 13,11"/>\n\t\t\t<polygon style="fill:currentColor; stroke:none;" points="10,4 7,9 13,9"/>\n\t\t</svg>\n\t',"order-desc":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polygon style="fill:currentColor; stroke:none;" points="10,13 7,8 13,8"/>\n\t\t</svg>\n\t',play:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<polygon style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="13.5,9.5 7.5,6 7.5,13"/>\n\t\t</svg>\n\t',"radio-checked":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="10" cy="10" r="7.5"/>\n\t\t\t<circle style="fill:currentColor;stroke:none;" cx="10" cy="10" r="4"/>\n\t\t</svg>\n\t',"radio-unchecked":'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="10" cy="10" r="7.5"/>\n\t\t</svg>\n\t',refresh:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M14.83,15.74c-3.17,2.67-7.9,2.26-10.57-0.91S2,6.93,5.17,4.26S13.07,2,15.74,5.17C16.88,6.52,17.5,8.23,17.5,10l-3-2.5"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="19.5" y1="6.5" x2="17.5" y2="10"/>\n\t\t</svg>\n\t',remove:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M4.5,5.5h10l0,0v9c0,1.1-0.9,2-2,2h-6c-1.1,0-2-0.9-2-2V5.5L4.5,5.5z"/>\n\t\t\t<path style="fill:none;stroke:currentColor;" d="M8.5,2.5h2c0.6,0,1,0.4,1,1v2l0,0h-4l0,0v-2C7.5,2.9,7.9,2.5,8.5,2.5z"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="9.5" y1="8" x2="9.5" y2="14"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="11.5" y1="9" x2="11.5" y2="13"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="7.5" y1="9" x2="7.5" y2="13"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="2" y1="5.5" x2="17" y2="5.5"/>\n\t\t</svg>\n\t',right:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="5.5,15.5 13.5,9.5 5.5,3.5"/>\n\t\t</svg>\n\t',search:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="7"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M9.6,5.6c2.2,0,4,1.8,4,4"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;" x1="14.8" y1="14.8" x2="17.6" y2="17.6"/>\n\t\t</svg>\n\t',selected:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="4.5,11.2 9.6,15.5 15.5,4.5"/>\n\t\t</svg>\n\t',success:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<circle style="fill:none;stroke:currentColor;" cx="9.5" cy="9.5" r="8"/>\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="5.5,10.4 9.2,13.5 13.5,5.5"/>\n\t\t</svg>\n\t',sync:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M2.18,7.47c1.33-4.31,5.9-6.72,10.2-5.39c2.9,0.89,5.06,3.32,5.62,6.3l-3.73-2.05"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="18.94" y1="4.57" x2="17.99" y2="8.38"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" d="M17.75,12.16c-1.45,4.27-6.09,6.55-10.36,5.09C4.6,16.3,2.53,13.91,2,11l3.73,2.1"/>\n\t\t\t<line style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" x1="1.06" y1="14.85" x2="2.01" y2="11.05"/>\n\t\t</svg>\n\t',unmaximize:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<path style="fill:currentColor;" d="M11,7c1.1,0,2,0.9,2,2v4c0,1.1-0.9,2-2,2H7c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2H11 M11,6H7C5.3,6,4,7.3,4,9v4c0,1.7,1.3,3,3,3h4c1.7,0,3-1.3,3-3V9C14,7.3,12.7,6,11,6z"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M7,4.5h5.5c1.7,0,3,1.3,3,3V13"/>\n\t\t</svg>\n\t',up:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<polyline style="fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;" points="14,12.5 10,6.5 6,12.5"/>\n\t\t</svg>\n\t',user:'\n\t\t<svg viewBox="0 0 20 20">\n\t\t\t<ellipse style="fill:none;stroke:currentColor;stroke-linecap:round;" cx="10.1" cy="6" rx="4.6" ry="4.5"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M10.1,3.7c1.4,0,2.5,1.1,2.5,2.5"/>\n\t\t\t<path style="fill:none;stroke:currentColor;stroke-linecap:round;" d="M5.5,11.5c-1,1.1-1.7,2.5-2,4.1c-0.1,0.5,0.3,0.9,0.8,0.9h0.1h11.3c0.5,0,0.9-0.3,0.9-0.9c0-0.1,0-0.1,0-0.1c-0.3-1.6-1-2.9-2-4.1"/>\n\t\t</svg>\n\t'}},{}],128:[function(e,t,i){"use strict";function s(e){for(var t in e)i.hasOwnProperty(t)||(i[t]=e[t])}Object.defineProperty(i,"__esModule",{value:!0}),e("./style/global-style"),s(e("./style/theme")),s(e("./style/color")),s(e("./components/buttongroup")),s(e("./components/icon")),s(e("./components/radio")),s(e("./components/checkbox")),s(e("./components/switch")),s(e("./components/slider")),s(e("./bindings/tooltip")),s(e("./components/layer")),s(e("./components/popup")),s(e("./components/popover")),s(e("./components/menu")),s(e("./components/dropdown")),s(e("./components/select")),s(e("./components/modal")),s(e("./components/message")),s(e("./components/notification")),s(e("./components/tree")),s(e("./store/store")),s(e("./store/async-store")),s(e("./components/grid")),s(e("./components/resizer")),s(e("./bindings/contextmenu")),s(e("./bindings/drag-drop")),e("./bindings/drag-drop"),s(e("./components/router"))},{"./bindings/contextmenu":105,"./bindings/drag-drop":106,"./bindings/tooltip":107,"./components/buttongroup":108,"./components/checkbox":109,"./components/dropdown":110,"./components/grid":111,"./components/icon":112,"./components/layer":113,"./components/menu":114,"./components/message":115,"./components/modal":116,"./components/notification":117,"./components/popover":118,"./components/popup":119,"./components/radio":120,"./components/resizer":121,"./components/router":122,"./components/select":123,"./components/slider":124,"./components/switch":125,"./components/tree":126,"./store/async-store":129,"./store/store":130,"./style/color":131,"./style/global-style":132,"./style/theme":133}],129:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("ff");i.AsyncStore=class extends s.Emitter{constructor(){super(...arguments),this.key="",this.orderKey="",this.orderDirection=""}setRepeatDirective(e){this.repeatDir=e}reset(e=0){this.repeatDir&&this.repeatDir.reset(e),this.emit("change")}reload(){this.repeatDir&&this.repeatDir.reload(),this.emit("change")}setOrder(e,t){this.orderKey=e,this.orderDirection=t,this.reload()}clearOrder(){this.orderKey="",this.orderDirection="",this.reload()}getFirstVisibleIndex(){return this.repeatDir.getFirstVisibleIndex()}}},{ff:45}],130:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("ff");class n{constructor(e){if(!e)throw new Error('"key" must be provided when instantiate "KeyMap"!');this.key=e,this.map=new Map}has(e){return this.map.has(e[this.key])}get(e){return this.map.get(e[this.key])}add(e){this.map.set(e[this.key],e)}delete(e){this.map.delete(e[this.key])}clear(){this.map=new Map}}i.Store=class extends s.Emitter{constructor(e={}){super(),this.data=[],this.currentData=[],this.key=null,this.filter=null,this.order=null,this.lastTouchedItem=null,this.selected=[],this.map=null,this.selectedMap=null,e.key&&(this.map=new n(e.key),this.selectedMap=new n(e.key));let t=e.data;delete e.data,Object.assign(this,e),this.initData(t)}initData(e){e&&this.addItems(e)}addItems(e,t=!1){if(e.length>0){if(this.map)for(let t of e)this.map.add(t);t?this.data.unshift(...e):this.data.push(...e);let i=this.filter?e.filter(this.filter):e;this.addItemsToCurrentData(i,t)}}addItemsToCurrentData(e,t=!1){if(this.order)if(e.length>1){let t=this.currentData.length>0?[...this.currentData,...e]:e;this.order.sortArray(t),this.currentData=t}else for(let t of e)this.order.binaryInsert(this.currentData,t);else t?this.currentData.unshift(...e):this.currentData.push(...e)}setOrder(e){this.order=e,this.updateCurrentData(),this.emit("change")}clearOrder(){this.setOrder(null)}setFilter(e){this.filter=e,this.updateCurrentData(),this.deselectAll(),this.emit("change")}clearFilter(){this.setFilter(null)}updateCurrentData(){this.clearCurrentData(),this.addItemsToCurrentData(this.filter?this.data.filter(this.filter):this.data)}clearCurrentData(){this.currentData=[]}add(...e){this.remove(...e),this.addItems(e),this.emit("change")}addToStart(...e){this.remove(...e),this.addItems(e,!0),this.emit("change")}push(...e){this.addItems(e),this.emit("change")}unshift(...e){this.addItems(e,!0),this.emit("change")}insert(e,...t){if(t.length>0){if(this.data.splice(e,0,...t),this.map)for(let e of t)this.map.add(e);this.order?this.addItemsToCurrentData(this.filter?t.filter(this.filter):t):this.updateCurrentData()}this.emit("change")}has(e){return this.map?this.map.has(e):this.data.includes(e)}get(e){return this.map?this.map.get(e):e}remove(...e){let t=new Set;if(this.map)for(let i of e)this.map.has(i)&&(t.add(this.map.get(i)),this.map.delete(i));else for(let i of e)this.data.includes(i)&&t.add(i);return t.size>0&&(this.data=this.data.filter(e=>!t.has(e)),this.map?this.currentData=this.currentData.filter(e=>this.map.has(e)):this.currentData=this.currentData.filter(e=>!t.has(e)),this.deselect(...t),this.emit("change")),[...t]}isSelected(e){return this.selectedMap?this.selectedMap.has(e):this.selected.includes(e)}isPartlySelected(){let e=this.selected.length;return e>0&&e<this.currentData.length}isSelectedAll(){let e=this.selected.length;return e>0&&e===this.currentData.length}getSelectedCount(){return this.selected.length}select(...e){if(this.selectedMap)for(let t of e)this.selectedMap.has(t)||(this.selected.push(t),this.selectedMap.add(t));else for(let t of e)this.selected.includes(t)||this.selected.push(t);this.lastTouchedItem=e[0]}deselect(...e){if(e===this.selected)this.deselectAll();else{let t=new Set;if(this.selectedMap)for(let i of e)this.selectedMap.has(i)&&(t.add(this.selectedMap.get(i)),this.selectedMap.delete(i));else for(let i of e)this.selected.includes(i)&&t.add(i);t.size>0&&(this.selected=this.selected.filter(e=>!t.has(e)))}this.lastTouchedItem=e[0]}toggleSelect(e){this.isSelected(e)?this.deselect(e):this.select(e),this.lastTouchedItem=e}selectByKeyboardEvent(e,t){t.shiftKey?this.shiftSelect(e):this.toggleSelect(e)}shiftSelect(e){let t=Math.max(this.lastTouchedItem?this.getIndex(this.lastTouchedItem):0,0),i=this.getIndex(e);i>=0&&(t>i&&([t,i]=[i,t]),i+=1,this.isSelected(e)?this.deselect(...this.currentData.slice(t,i)):this.select(...this.currentData.slice(t,i)))}getIndex(e){return this.map&&!this.map.has(e)?-1:this.data.indexOf(this.get(e))}selectAll(){this.select(...this.currentData)}deselectAll(){this.selected=[],this.selectedMap&&this.selectedMap.clear()}toggleSelectAll(){this.isSelectedAll()?this.deselectAll():this.selectAll()}clear(){this.data=[],this.clearCurrentData(),this.deselectAll(),this.map&&this.map.clear(),this.emit("change")}}},{ff:45}],131:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("ff");class n{constructor(e){this.value=e}toString(){return this.value}getRGBA(){if(/^#[0-9a-fA-F]{3,6}$/.test(this.value))return[...this.parseNormalColor(this.value),1];let e=this.value.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);if(e)return[Number(e[1])/255,Number(e[2])/255,Number(e[3])/255,1];if(e=this.value.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)$/))return[Number(e[1])/255,Number(e[2])/255,Number(e[3])/255,Number(e[4])];if(e=this.value.match(/^rgba\(\s*(#[0-9a-fA-F]{3,6})\s*,\s*([\d.]+)\s*\)$/))return[...this.parseNormalColor(e[1]),Number(e[2])];throw new Error(`"${this.value}" is not a valid RGB color`)}parseNormalColor(e){return 4===e.length?[17*parseInt(e[1],16)/255,17*parseInt(e[2],16)/255,17*parseInt(e[3],16)/255]:[parseInt(e.slice(1,3),16)/255,parseInt(e.slice(3,5),16)/255,parseInt(e.slice(5,7),16)/255]}formatRGBA(e,t,i,r){return e=Math.max(Math.min(e,1),0),t=Math.max(Math.min(t,1),0),i=Math.max(Math.min(i,1),0),r=Math.max(Math.min(r,1),0),new n(1===r?"#"+Math.round(255*e).toString(16).padStart(2,"0")+Math.round(255*t).toString(16).padStart(2,"0")+Math.round(255*i).toString(16).padStart(2,"0"):"rgba("+Math.round(255*e).toString()+", "+Math.round(255*t).toString()+", "+Math.round(255*i).toString()+", "+s.toPower(r,-2)+")")}darken(e){return this.lighten(-e)}lighten(e){let[t,i,s,n]=this.getRGBA(),r=e/100;return t+=r,i+=r,s+=r,this.formatRGBA(t,i,s,n)}highlight(e){return this.getLightness()<.5?this.lighten(e):this.darken(e)}highlightAsText(e){return this.getLightness()>.5?this.lighten(e):this.darken(e)}getLightness(){let[e,t,i]=this.getRGBA();return s.avg([e,t,i])}alpha(e){let[t,i,s]=this.getRGBA();return this.formatRGBA(t,i,s,e)}mix(e,t){let[i,s,r,o]=this.getRGBA();"string"==typeof e&&(e=new n(e));let[l,a,h,c]=e.getRGBA(),d=t/100;return i=i*(1-d)+l*d,s=s*(1-d)+a*d,r=r*(1-d)+h*d,o=o*(1-d)+c*d,this.formatRGBA(i,s,r,o)}}i.Color=n},{ff:45}],132:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("flit"),n=e("./theme");s.addGlobalStyle(()=>{let{mainColor:e,textColor:t,borderColor:i,successColor:r,errorColor:o,fontSize:l,borderRadius:a,focusBlurRadius:h,lh:c,backgroundColor:d}=n.theme;return s.css`
	html{
		color: ${t};
		font-size: ${l}px;
		line-height: ${c(30)}px;
		background-color: ${d};
	}

	button{
		display: inline-flex;
		justify-content: center;
		height: ${c(30)}px;
		line-height: ${c(30)-2}px;
		border: 1px solid ${i};
		color: ${i.highlightAsText(10)};
		border-radius: ${a}px;
		padding: 0 ${c(15)+Math.max(0,(a-5)/2)}px;
		background: ${d};
		text-align: center;
		cursor: pointer;
		vertical-align: top;
		
		&:hover, &:focus{
			border-color: ${e};
			color: ${e};
		}

		&:focus:not([borderless]){
			box-shadow: 0 0 ${h}px ${e};
		}
	
		&:active{
			border-color: ${e.darken(10)};
			color: ${e.darken(10)};
			background: ${e.alpha(.05)};
		}
	
		f-icon, f-icon-loading{
			&:first-child{
				margin-left: ${c(-3)}px;
				margin-right: ${c(4)}px;
			}

			&:last-child{
				margin-left: ${c(2)}px;
				margin-right: ${c(-4)}px;
			}
		}

		&[filled]{
			background: ${e};
			border-color: ${e};
			color: #fff;

			&:hover, &:focus{
				background: ${e.darken(5)};
				border-color: ${e.darken(5)};
			}
		
			&:active{
				background: ${e.darken(10)};
				border-color: ${e.darken(10)};
			}
		}

		&[borderless]{
			border: none;
			padding-left: ${c(10)}px;
			padding-right: ${c(10)}px;
			line-height: ${c(30)}px;

			&:active{
				background: none;
			}
		}

		&[round]{
			width: ${c(30)}px;
			border-radius: ${c(15)}px;
			padding: 0;
			font-size: 0;

			f-icon, f-icon-loading{
				margin-left: auto;
				margin-right: auto;
			}
		}
	}

	[type=text], [type=password], [type=number], [type=email]{
		height: ${c(30)}px;
		padding: 0 0 0 ${c(8)}px;
	}
	
	textarea{
		padding: ${c(4)}px ${c(8)}px;
		line-height: ${c(22)}px;
	}
	
	[type=text], [type=password], [type=number], [type=email], textarea{
		border: none;
		box-shadow: inset 0 -1px 0 0 ${i};
		background: ${d.highlight(10)};
		
		&:focus{
			box-shadow: inset 0 -1px 0 0 ${e};
		}
	}
	
	.f-touched{
		&.f-valid, :valid{
			box-shadow: inset 0 -2px 0 0 ${r};
		}

		.f-invalid, :invalid{
			box-shadow: inset 0 -2px 0 0 ${o};
		}
	}

	.fade-enter, .fade-leave{
		transition: opacity 0.2s ease-out;
	}
	
	.fade-enter-from, .fade-leave-to{
		opacity: 0;
	}
	
	.fade-enter-to, .fade-leave-from{
		opacity: 1;
	}


	::-webkit-scrollbar{
		height: 10px;
		width: 10px;
		background: ${d.highlight(5)};
	}

	::-webkit-scrollbar-thumb{
		background: ${d.highlight(15)};

		&:hover{
			background: ${d.highlight(25)};
		}

		&:active{
			background: ${d.highlight(35)};
		}
	}
`})},{"./theme":133,flit:74}],133:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});const s=e("flit"),n=e("./color"),r=e("ff"),o={mainColor:"#0077cf",backgroundColor:"#fff",textColor:"#333",successColor:"#00af41",errorColor:"#ff0000",warningColor:"#f48862",infoColor:"#3988e5",borderColor:"#777",borderRadius:15,layerBackgroundColor:"#fff",layerBorderRadius:8,layerShadowColor:"rgba(0, 0, 0, 0.33)",layerShadowBlurRadius:6,focusBlurRadius:3,fontSize:14,lineHeight:30},l={mainColor:"#2288cc",backgroundColor:"#303030",textColor:new n.Color("#fff").darken(10).toString(),successColor:"#00af41",errorColor:"#ff0000",warningColor:"#f48862",infoColor:"#3988e5",borderColor:"#aaa",borderRadius:15,layerBackgroundColor:new n.Color("#303030").lighten(5).toString(),layerBorderRadius:8,layerShadowColor:"rgba(0, 0, 0, 0.66)",layerShadowBlurRadius:6,focusBlurRadius:3,fontSize:14,lineHeight:30};class a{constructor(){this.themeMap=new Map,this.willUpdate=!1,this.mode="light",this.options=Object.assign({},o)}defineTheme(e,t){let i="dark"===this.getThemeDrakOrLightMode(t)?l:o;this.themeMap.set(e,Object.assign({},i,t))}getThemeDrakOrLightMode(e){if(e.backgroundColor){let[t,i,s]=new n.Color(e.backgroundColor).getRGBA();if(r.avg([t,i,s])<.5)return"dark"}else if(e.textColor){let[t,i,s]=new n.Color(e.textColor).getRGBA();if(r.avg([t,i,s])>.5)return"dark"}return"light"}changeTheme(e){if(!this.themeMap.has(e))throw new Error(`"${e}" is not a defined theme`);this.options=this.themeMap.get(e),this.mode=this.getThemeDrakOrLightMode(this.options),this.updateStylesAndComponents()}set(e,t){this.options[e]=t,this.updateStylesAndComponents()}updateStylesAndComponents(){this.willUpdate||(this.willUpdate=!0,Promise.resolve().then(()=>{s.updateStyles(),s.update(),this.willUpdate=!1}))}getOption(e){return this.options[e]}get fs(){return e=>Math.max(Math.ceil(e*this.fontSize/o.fontSize),11)}get lh(){return e=>Math.round(e*this.lineHeight/o.lineHeight)}get mainColor(){return new n.Color(this.getOption("mainColor"))}get backgroundColor(){return new n.Color(this.getOption("backgroundColor"))}get textColor(){return new n.Color(this.getOption("textColor"))}get successColor(){return new n.Color(this.getOption("successColor"))}get errorColor(){return new n.Color(this.getOption("errorColor"))}get warningColor(){return new n.Color(this.getOption("warningColor"))}get infoColor(){return new n.Color(this.getOption("infoColor"))}get borderColor(){return new n.Color(this.getOption("borderColor"))}get borderRadius(){return this.getOption("borderRadius")}get layerBackgroundColor(){return new n.Color(this.getOption("layerBackgroundColor"))}get layerBorderRadius(){return this.getOption("layerBorderRadius")}get layerShadowBlurRadius(){return this.getOption("layerShadowBlurRadius")}get layerShadowColor(){return new n.Color(this.getOption("layerShadowColor"))}get focusBlurRadius(){return this.getOption("focusBlurRadius")}get fontSize(){return this.getOption("fontSize")}get lineHeight(){return this.getOption("lineHeight")}}i.Theme=a,i.theme=new a,i.theme.defineTheme("light",o),i.theme.defineTheme("dark",l)},{"./color":131,ff:45,flit:74}]},{},[1]);