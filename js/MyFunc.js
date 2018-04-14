/**
 * Created by Administrator on 2018/4/12.
 */
/**
 * ��ȡ��������
 * ʹ�÷��� scroll().top scroll().left
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
        // ��׼�����
        return {
            top:document.documentElement.scrollTop,
            left:document.documentElement.scrollLeft
        }
    }else {
        // ����ģʽ
        return {
            top:document.body.scrollTop,
            left:document.body.scrollLeft
        }
    }
}

/**
 * ����dom
 * @param obj Ҫ���������������α���� ����
 * @param callback �ص�����
 */
function each(obj,callback) {
    for(var i = 0; i<obj.length; i++){
        if(callback) {
            callback(obj[i],i);
        }
    }
}

/**
 * ͨ����ǩ���ƻ�ȡԪ��
 * @param obj ���ĸ���ǩ�����ȡԪ��
 * @param tagName ��ǩ����
 * @returns {NodeList} ���ػ�ȡ���ı�ǩ�ļ���
 */
function getByTagName(obj,tagName) {
    return obj.getElementsByTagName(tagName);
}

/**
 * ͨ��id���ƻ�ȡ��ǩ
 * @param id id����
 * @returns {Element} ��ǩ
 */
function $(id) {
    return document.getElementById(id);
}