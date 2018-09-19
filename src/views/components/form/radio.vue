<template>
    <div class="kl-content">
        <h2 class="kl-content__title">单选<span>KLRadio</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>单纯样式修改。</p>
            </div>
            <div slot="demo">
                <el-radio v-model="radio" label="1">备选项1</el-radio>
                <el-radio v-model="radio" label="2">备选项2</el-radio>
                <el-radio disabled v-model="radio1" label="禁用">备选项3</el-radio>
                <el-radio disabled v-model="radio1" label="选中且禁用">备选项4</el-radio>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/radio"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLUpload'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>上传文件</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLSwitch'}" class="kl-content-next__pager">
                <span>开关</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/form/radio';
export default {
    name: 'kL-radio',
    data() {
        return {
            code: Code,
            radio: '1',
            radio1: '选中且禁用'
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>