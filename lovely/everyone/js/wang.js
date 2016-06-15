$(function() {
	// 全局配置
	// ___E.config.menus = ['bold', 'color', 'quote'];
	___E.config.menuColorValue = '#e4726e';
	___E.config.happy = [
			'images/gif/1.gif',
			'images/gif/2.gif',
			'images/gif/3.gif',
			'images/gif/4.gif',
			'images/gif/5.gif',
			'images/gif/6.gif',
			'images/gif/7.gif',
			'images/gif/8.gif',
			'images/gif/9.gif',
			'images/gif/10.gif',
			'images/gif/11.gif',
			'images/gif/12.gif',
			'images/gif/13.gif',
			'images/gif/14.gif',
			'images/gif/15.gif',
			'images/gif/16.gif',
			'images/gif/17.gif',
			'images/gif/18.gif',
			'images/gif/19.gif',
			'images/gif/20.gif',
			'images/gif/21.gif',
			'images/gif/22.gif',
			'images/gif/23.gif',
			'images/gif/24.gif',
			'images/gif/25.gif',
			'images/gif/26.gif',
			'images/gif/27.gif',
			'images/gif/28.gif',
			'images/gif/29.gif',
			'images/gif/30.gif'
		];
		// 生成编辑器
	var editor = new ___E('textarea1');
	// 自定义配置
	editor.config.uploadImgUrl = '/upload';
	// editor.config.menus = ['bold', 'quote', 'list','img'];
	// 初始化
	editor.init();
	console.log(editor.$txt);
});

var ref = new Wilddog("https://sure.wilddogio.com/");
var authData = ref.getAuth();
function authDataCallback(authData){
  if (authData) {
    var uidStr = authData.uid;
    var vm = new Vue({
      el:'#editor',
      wilddog:{
        data:{
          source: ref.child("words").child(uidStr), 
          cancelCallback: function(){
            console.log("加载完毕");
          }
        }
      },
      methods:{
        addWords:function(event){
          	var news = $("#textarea1").val();
          	var title = $("#title").val();
          	if (news == ""||title == "") {
          		alert("请检查标题与内容是否填写！");
          	} else{	
          		/* 自定义回调函数 */
          		var test = function (callback){
          			ref.child("words").child(uidStr).push({
          				"title":title,
          				"time":"2016-06-15",
          				"news":news
          			});
          			callback();
          		};
          		var over = function(){
          			alert("恭喜你，发表成功！");
          			window.location.href='main.html';
          		};
          		var start = function(){
          			test(over);
          		}
          		start();
          	};
        }
      }
    });
    console.log("登陆成功！");
  } else{
    alert("登录失败！");
  };
};
ref.onAuth(authDataCallback);


var nowTime = Date.parse(new Date());
console.log(nowTime);
/*-- 删除本组数据 --*/
// var rm = function(event) {
// 	var this_id = event.target.id;
// 	ref.child("article/" + this_id).remove();
// };

/* -- 时间戳格式化 start -- */
// var start_num = 0;
// var end_num = 0;
// if (data.order.when == 2) {
//     start_num = parseInt(data.order.lunch_send_start);
//     end_num = parseInt(data.order.lunch_send_end);
// } else if (data.order.when == 3) {
//     start_num = parseInt(data.order.dinner_send_start);
//     end_num = parseInt(data.order.dinner_send_end);
// } else{
//   start_num = parseInt(data.order.breakfast_send_start);
//   end_num = parseInt(data.order.breakfast_send_end);
// };
// var start_time = start_num + 28800;
// var end_time = end_num + 28800;
// var start = (start_time%3600/60).toString();
// var end = (end_time%3600/60).toString();
// if (start.length==1) {
//   start = "0" +start;
// } else{
//   start = start;
// };
// if (end.length==1) {
//   end = "0" +end;
// } else{
//   end = end;
// };
/* -- 时间戳格式化 end -- */