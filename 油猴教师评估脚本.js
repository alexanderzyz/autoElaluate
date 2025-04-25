// ==UserScript==
// @name         适用于国科大教师评估模块，一键评估
// @namespace    http://tampermonkey.net/
// @version      2025-04-25
// @description  try to take over the world!
// @author       You
// @include      https://xkcts.ucas.ac.cn:8443/evaluate/evaluateTeacher/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ucas.ac.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    var item = 1419; //第几行
    var value = 5; //分数
    var text1 = "这位老师的教学，我最喜欢他上课独特的教学风格";
    var text2 = "我对老师暂时没有任何意见和建议";

    while (item <= 1445) {
        autoClick(item, value);
        autoWrite(text1, text2);
        item += 1;
    }

    function autoClick(item, value) {

        // 查找指定的单选按钮
        const radioButton = document.querySelector(`input[type="radio"][name="item_${item}"][value="${value}"]`);
        // 检查是否找到了元素
        if (radioButton) {
            // 选中该按钮
            radioButton.checked = true;

            // 触发change事件，确保表单验证或其他监听脚本能检测到变化
            const event = new Event('change', { bubbles: true });
            radioButton.dispatchEvent(event);

            // 同时触发点击事件，以应对某些特殊情况
            radioButton.click();

            console.log(`已成功选中value为${value}的选项`);
        } else {
            console.error(`未找到name为${item}且value为${value}的单选按钮`);
        }
    }

    function autoWrite(text1, text2){
        // 获取单个文本框元素
        var textarea1 = document.querySelector('textarea[id="item_1431"]');
        var textarea2 = document.querySelector('textarea[id="item_1432"]');

        // 设置值
        textarea1.value = text1;
        textarea2.value = text2;

        // 触发change事件
        var event = new Event('change', { bubbles: true });
        textarea1.dispatchEvent(event);
        textarea2.dispatchEvent(event);

    }
})();

