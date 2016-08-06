//判断是否为数组

Array.isArray(arg);

//判断对象是否为空

Object.keys(obj).length === 0;  //返回obj的key，值为数组，长度为0 则没有任何属性

//获取对象的值，也可以通过Object.keys来获取

Object.keys.map( key => Object[key]);

// 转换类数组

Array.from(array);

//数组中是否包含某值

Array.include(param);

//查找某值

array.find(value);
