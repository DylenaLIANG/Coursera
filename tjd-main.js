require.config({
	waitSeconds: 0,
	map: {
		'*': {
			'css': '../../commonjs/lib/require.css.min'
		}
	},
	//设置项目路径，项目会以baseUrl作为相对路径去查找模块文件
	baseUrl: './',
	//预加载JS文件的配置项，默认可不用添加.js后缀
	paths: {
		//RequireJS默认假定所有的依赖资源都是JS脚本，因此无需再module ID上再加上js后缀。
		// echarts:"../../commonjs/lib/echarts.min",
		zepto: "../../commonjs/lib/zepto-1.2.0.min",
		request: "../../commonjs/nutils/request_zepto",
		store:"../../commonjs/nutils/store",
	    window:"../../commonjs/nutils/window",
	    array:"../../commonjs/nutils/nextension/array",
	    date:"../../commonjs/nutils/nextension/date",
	    number:"../../commonjs/nutils/nextension/number",
	    object:"../../commonjs/nutils/nextension/object",
	    string:"../../commonjs/nutils/nextension/string",
		app: "../../commonjs/nutils/app",
		components: '../../commonjs/nutils/components/components',
		singlepager: '../../commonjs/nutils/components/singlepager/js/view/index',
		template: "../../commonjs/lib/template",
		setting: './js/setting',
		nav: "../../commonjs/nutils/components/navigator/js/view/navigator",
		api: "../../common_business/api/api",
		tcapi: "../../common_business/api/tcapi",
		capi: "./js/api",
		view: "./js/view/index",
		service: "./js/service/index",
		rliview:"./js/view/rli",
	},
	shim: {
		components: {
			deps: ["zepto", "css!../../commonjs/nutils/components/components"]
		},
		singlepager: {
			deps: ["css!../../commoncss/common", "css!../../commonjs/nutils/components/singlepager/css/index"]
		},
		nav: {
			deps: ["css!../../commonjs/nutils/components/navigator/css/navigator"]
		},
		setting: {
			deps: [
				"store","window","array","object","date","number","string","nav", "capi", "view", "service","rliview","css!./style/index",
			]
		},
	}
});
// require.onError = function(err) {
// 	alert(err);
// };
require(['zepto', 'app', 'singlepager', 'setting'], function(zepto, app, singlepager, setting) {
	window.subject = '条件单';
	document.title = subject;
	var opt = {
		androidVersion:205
	}
	app.init(0, function(adata) {
		if(adata.khh) {
			session.set('appdata', adata);
			singlepager.init(setting, adata, 'index');
		} else {
			app.webviewGoBack("1");
		}
	},opt);
});
