function(window,undefined){
	"use strict"
	var SeeAliteDom=function(dom,height){
		this.dom=dom;
		this.showHeight=window.getComputedStyle(this.dom).height;
		this.flag=true;
		this.height=height||400;
		this.init();
	};
	SeeAliteDom.prototype.init=function(){
		if(parseInt(this.showHeight)>this.height){
			this.hideDom();
			this.createDom();
			this.addEvent();
		}
	}
	SeeAliteDom.prototype.hideDom=function(){
		this.dom.style.height=this.height+"px";
		this.dom.style.overflow="hidden";
		this.dom.style.position="relative";
		this.dom.style.transition="height 0.3s";
	}
	SeeAliteDom.prototype.createDom = function() {
		this.div = document.createElement("div");
		this.p = document.createElement("p");
		var showDivStyle = {
				height: "80px",
				width: window.getComputedStyle(this.dom).width,
				position: "absolute",
				bottom: 0,
				left: 0,
				background: "linear-gradient(rgba(255,255,255,0),rgba(255,255,255,.5))",
			},
			pStyle = {
				position: "absolute",
				color: "rgba(0,0,0,.8)",
				fontSize: "20px",
				lineHeight: "80px",
				left: "50%",
				transform: "translate(-50%,-50%)",
				textDecoration: "underline",
				cursor: "pointer",
			}
		for (let i in pStyle) {
			this.p.style[i] = pStyle[i];
		}
		for (let i in showDivStyle) {
			this.div.style[i] = showDivStyle[i];
		}
		this.changeDom();
		this.div.appendChild(this.p);
		this.dom.appendChild(this.div);
	}
	SeeAliteDom.prototype.addEvent=function(){
		this.p.addEventListener("click",function(){
			if(this.flag){
				this.dom.style.height=this.showHeight;
			}else{
				this.dom.style.height=this.height+"px";
			}
			this.flag=!this.flag;
			this.changeDom();
			
		}.bind(this))
	}
	SeeAliteDom.prototype.changeDom=function(){
		if(this.flag){
			this.p.innerHTML="加载更多";
		}else{
			this.p.innerHTML="收起";
		}
	}
}(window)