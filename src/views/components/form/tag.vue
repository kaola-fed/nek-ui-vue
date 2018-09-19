<template>
    <div class="kl-content">
        <h2 class="kl-content__title">标签<span>KLTag</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>颜色和圆角修改</p>
            </div>
            <div slot="demo">
                <h3>基础用法</h3>
                <el-tag>标签一</el-tag>
                <el-tag type="primary">标签二</el-tag>
                <el-tag type="success">标签三</el-tag>
                <el-tag type="info">标签四</el-tag>
                <el-tag type="warning">标签五</el-tag>
                <el-tag type="danger">标签六</el-tag>
                <h3>不同尺寸</h3>
                <el-tag closable>默认标签</el-tag>
                <el-tag size="medium" closable>中等标签</el-tag>
                <el-tag size="small" closable>小型标签</el-tag>
                <el-tag size="mini" closable>超小标签</el-tag>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/tag"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLSwitch'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>开关</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLTime'}" class="kl-content-next__pager">
                <span>时间选择</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/form/tag';
export default {
    name: 'kL-tag',
    data() {
        return {
            code: Code,
            value1: true,
            value2: true,
            value3: false,
            value4: true,
            value5: true
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>