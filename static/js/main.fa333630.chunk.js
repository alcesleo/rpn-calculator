(window["webpackJsonprpn-calculator"]=window["webpackJsonprpn-calculator"]||[]).push([[0],{10:function(t,e,n){t.exports=n(11)},11:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n(1),c=n(3),o=n(4),r=n(8),l=n(5),s=n(9),d=n(0),u=n.n(d),h=n(6),m=n.n(h),f=(n(16),"."),p="-",b=5,k="0",v=[k],E=Array(b-1).fill("\xa0"),y=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(l.a)(e).call(this,t))).getDisplayRows=function(){return[].concat(Object(i.a)(n.getStack()),Object(i.a)(E)).slice(0,b).reverse()},n.getStack=function(){return n.state.history[n.state.historyPosition]},n.setStack=function(t){var e=t(n.getStack()),a=[].concat(Object(i.a)(n.state.history.slice(0,n.state.historyPosition+1)),[e]);n.setState((function(t){return{history:a,historyPosition:t.historyPosition+1}}))},n.handleUndo=function(){n.historyPosition<=0||n.setState((function(t){return{historyPosition:t.historyPosition-1}}))},n.handleRedo=function(){n.state.historyPosition>=n.state.history.length-1||n.setState((function(t){return{historyPosition:t.historyPosition+1}}))},n.handleRoll=function(){n.setStack((function(t){return[].concat(Object(i.a)(t.slice(1)),[t[0]])}))},n.handleSwap=function(){n.setStack((function(t){return[t[1],t[0]].concat(Object(i.a)(t.slice(2)))}))},n.handleDivision=function(){return n.handleArithmetic((function(t,e){return t/e}))},n.handleMultiplication=function(){return n.handleArithmetic((function(t,e){return t*e}))},n.handleSubtraction=function(){return n.handleArithmetic((function(t,e){return t-e}))},n.handleAddition=function(){return n.handleArithmetic((function(t,e){return t+e}))},n.digitHandler=function(t){return function(){n.updateDisplay((function(e){return e!==k?"".concat(e).concat(t):t}))}},n.handleDecimal=function(){n.updateDisplay((function(t){return-1===t.indexOf(f)?"".concat(t).concat(f):t}))},n.handleArithmetic=function(t){var e=n.getStack();if(e.length<2)console.log("You need at least 2 numbers on the stack to perform arithmetic.");else{var c=e.slice(0,2),o=Object(a.a)(c,2),r=o[0],l=o[1],s=t(Number.parseFloat(l),Number.parseFloat(r));n.setStack((function(t){return[s].concat(Object(i.a)(t.slice(2)))}))}},n.handleSign=function(){n.updateDisplay((function(t){return-1===t.indexOf(p)?"".concat(p).concat(t):t.slice(1)}))},n.handleClear=function(){n.setStack((function(){return v}))},n.handleDrop=function(){n.setStack((function(t){return 1===t.length?v:t.slice(1)}))},n.handleDelete=function(){n.updateDisplay((function(t){return t.length>1?t.slice(0,-1):k}))},n.handleEnter=function(){n.setStack((function(t){return[k].concat(Object(i.a)(t))}))},n.updateDisplay=function(t){n.setStack((function(e){return e.map((function(e,n){return 0===n?t(e):e}))}))},n.state={history:[v],historyPosition:0},n}return Object(s.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return u.a.createElement("div",{className:"calculator"},u.a.createElement("div",{className:"display"},this.getDisplayRows().map((function(t,e){return u.a.createElement("div",{key:e,className:"display_row"},t)}))),u.a.createElement("div",{className:"btn operator",onClick:this.handleRoll},"Roll"),u.a.createElement("div",{className:"btn operator",onClick:this.handleUndo},"Undo"),u.a.createElement("div",{className:"btn operator",onClick:this.handleRedo},"Redo"),u.a.createElement("div",{className:"btn operator",onClick:this.handleSign},"+/-"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDivision},"/"),u.a.createElement("div",{className:"btn operator",onClick:this.handleSwap},"Swap"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("7")},"7"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("8")},"8"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("9")},"9"),u.a.createElement("div",{className:"btn operator",onClick:this.handleMultiplication},"*"),u.a.createElement("div",{className:"btn operator",onClick:this.handleClear},"Clear"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("4")},"4"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("5")},"5"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("6")},"6"),u.a.createElement("div",{className:"btn operator",onClick:this.handleSubtraction},"-"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDrop},"Drop"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("1")},"1"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("2")},"2"),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("3")},"3"),u.a.createElement("div",{className:"btn operator",onClick:this.handleAddition},"+"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDelete},"Del"),u.a.createElement("div",{className:"btn operator",onClick:this.handleDecimal},f),u.a.createElement("div",{className:"btn",onClick:this.digitHandler("0")},"0"),u.a.createElement("div",{className:"btn operator enter",onClick:this.handleEnter},"Enter"))}}]),e}(u.a.Component);m.a.render(u.a.createElement(y,null),document.getElementById("root"))},16:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.fa333630.chunk.js.map