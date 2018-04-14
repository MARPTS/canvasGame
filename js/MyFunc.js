/**
 * Created by Administrator on 2018/4/12.
 */
/**
 * 获取滚动距离
 * 使用方法 scroll().top scroll().left
 * @returns {*}
 */
function scroll() {
    if (window.pageXOffset || window.pageYOffset) {
        var obj = {
            top: window.pageYOffset,
            left: window.pageXOffset
        };
        return obj;
    }else if(document.compatMode == 'CSS1Compat'){
        // 标准浏览器
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        // 怪异模式
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}

/**
 * 遍历dom
 * @param obj 要遍历的数组或者是伪数组 集合
 * @param callback 回调函数
 */
function each(obj,callback) {
    for(var i = 0; i<obj.length; i++){
        if(callback) {
            callback(obj[i],i);
        }
    }
}

/**
 * 通过标签名称获取元素
 * @param obj 在哪个标签里面获取元素
 * @param tagName 标签名称
 * @returns {NodeList} 返回获取到的标签的集合
 */
function getByTagName(obj,tagName) {
    return obj.getElementsByTagName(tagName);
}

/**
 * 通过id名称获取标签
 * @param id id名称
 * @returns {Element} 标签
 */
function $(id) {
    return document.getElementById(id);
}