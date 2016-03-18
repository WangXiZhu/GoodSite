### Mac特殊键
虽然有图标，但是有些特殊键还是真的不清楚
⌘（command）
⌥（option）
⇪（caps lock）
⌃（control）
↩（return）
⌅（enter）
⎋（esc）

### Iterm2快捷键
记快捷键一点也不靠谱，多操作才是王道！

环境： Mac

发现小技巧：
	将文件拖拽到iterm的界面中会立马显示路径
	有时候对于我们想要操作文件比较方便
	
Iterm2配色

操作： vim ~/.bash_profile (可能涉及到权限问题)
	
	//写入一下，这是我的配置
	export CLICOLOR=1  
	  
	export LSCOLORS=gxfxcxdxbxegedabagacad  

##### 常用
切换到首末有些蛋疼

>* 清除当前行：ctrl + u
>* 到行首：ctrl + a
>* 到行尾：ctrl + e

##### 标签

>* 新建标签：command + t
>* 关闭标签：command + w
>* 切换标签：command + 数字    command + 左右方向键


##### 查找：command + f

#####查看历史命令：command + ;
#####查看剪贴板历史：command + shift + h


##### 分屏
>* 垂直分屏：command + d
>* 水平分屏：command + shift + d
>* 切换屏幕：command + option + 方向键      command + [ 或 command + ]



##### 其他
>* 前进后退：ctrl + f/b (相当于左右方向键)
>* 上一条命令：ctrl + p
>* 搜索命令历史：ctrl + r
>* 删除当前光标的字符：ctrl + d
>* 删除光标之前的字符：ctrl + h
>* 删除光标之前的单词：ctrl + w
>* 删除到文本末尾：ctrl + k
>* 交换光标处文本：ctrl + t
>* 清屏1：command + r
>* 清屏2：ctrl + l
>* 清屏3：command + k

### Evernote快捷键

##### 插入项
>* 插入待办事项： shift+command+T  
>* 插入分割线： shift+command+H
>* 插入日期： shift+ command+D
>* 插入时间： shift+ command+D＋option
>* 插入表格：shift + command＋L


##### 列表
>*  有序列表：shift + command＋O
>*  无序列表：shift + command＋U

##### 文本
有序无序可以与html中的 《ul》 和 《ol》 标签联想记忆

>*  有序列表：shift + command＋O
>*  无序列表：shift + command＋U


### sublime配置
##### package control: install package

	1.通过快捷键 ctrl+` 或者 View > Show Console 菜单打开控制台

	2.输入到console
	适用于 Sublime Text 3：

	import  urllib.request,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();urllib.request.install_opener(urllib.request.build_opener(urllib.request.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib.request.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())

	适用于 Sublime Text 2：

	import  urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp)ifnotos.path.exists(ipp)elseNone;urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler()));open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read());print('Please restart Sublime Text to finish installation')

##### 主题安装
[sublime在线主题](https://packagecontrol.io/)
点击 preferences -> settings-User
		

		{
		    "color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",    //颜色主题
		    "draw_centered": false,    //是否显示在中间
		    "draw_indent_guides": false,
		    "font_size": 14,
		    "ignored_packages":
		    [
		        "Vintage"
		    ],
		    "theme": "predawn.sublime-theme",
		    "trim_trailing_white_space_on_save": false,
		    "word_wrap": true,    //是否换行
		    "wrap_width": 150    //每行字数
		}


##### 插件快捷键设定
本身有太多的快捷键，这里只是新安装的插件的快捷键
preferences -> key bindings User


	[
	    {
	        "keys": ["ctrl+m"],
	        "command": "markdown_preview",
	        "args":   {"target": "browser", "parser":"markdown"}
	    },
	    {
	        "keys": ["ctrl+shift+enter"],
	        "command": "open_in_browser"
	    }
	]

#### 高频率快捷键使用

###### 编辑

>* command+F  替换
>* command+
>* command+shift+P 命令模式

###### 文件
>* command+T 前往文件
>* ⌃ `	python 控制台(虽然我不知道怎么使用)

###### 编辑

>* ⌘L 选择行
>* ⌃M 跳转至对应的括号
>* ⌘⌥ /	块注释
>* ⌃⇧K	删除行
>* ⌃space 自动完成
>* ⌘⌥1	单列
>* ⌘⌥2	双列
>* ⌘⌥5	网格 (4组)


### Alfred
真乃神器也！
[教程](http://bbs.feng.com/read-htm-tid-6860401.html)


### 宝石 sketch

* 查看对象的margin值 opation+alt
* 复制对象 alt ,但是也可以用来移动对象
* 标尺直接点击，比ps更高级

### slicy
说是mac下的切图神器，也支持psd。但是里面的命名必须符合规范。然而设计师并不这么想，真是难为前端！还是只有使用ps+firework
而且导出的也是单张图片，有时候设计师设计的根本不能单张图片切出来  这样你会疯的。不过还好，导出的图片是消除了背景的白色。