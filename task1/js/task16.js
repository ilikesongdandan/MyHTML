/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var key;
var data;
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
 var cityInput=document.getElementById('aqi-city-input');
 var valueInput=document.getElementById('aqi-value-input');
 key=cityInput.value.trim();
 data=valueInput.value.trim();
 // var keyReg=/[\u4e00-\u9fa5a-zA-Z]+/;
 var keyReg=new RegExp('[\u4e00-\u9fa5a-zA-Z]+');
 var dataReg=/[0-9]+/;
 if(!keyReg.test(key)){
 	alert('输入城市名称不合法，只能输入汉字和英文字母,请重新输入!');
 }
 else if(!dataReg.test(data)){
 	alert("输入指数不合法，只能输入数字，请重新输入！");
 }
 else{
 	aqiData[key]=data;
 }

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var aqitable=document.getElementById('aqi-table');

	var itemsHTML='<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
	for(var item in aqiData){
		itemsHTML+='<tr><td>'+item+'</td><td>'+aqiData[item]+'</td><td><button>删除</button></td></tr>';

	}
	 aqitable.innerHTML = itemsHTML;
	 // aqitable.style.border='1px solid black';

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  var aqitable = document.getElementById('aqi-table');
  aqitable.onclick=function(evnt){
  	evnt=evnt||window.evnt;
  	var target = evnt.target || evnt.srcElement;
    if(target.tagName.toLowerCase() === "button"){
      var delNode = target.parentNode.parentNode;
      aqitable.deleteRow(delNode.rowIndex);
    }
  }
   // renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById('add-btn').onclick=function(){
  	addBtnHandle();
  }
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  // document.getElementById('')
  delBtnHandle();
}

window.onload = function(){
  init();
};