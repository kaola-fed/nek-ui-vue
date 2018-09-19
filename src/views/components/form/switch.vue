<template>
    <div class="kl-content">
        <h2 class="kl-content__title">开关<span>KLSwitch</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>上传组件跟nek-ui差别太大，样式修改无法达到相同效果。所以交互没给参照的交互样式。参照element-ui交互使用。</p>
            </div>
            <div slot="demo">
                <h4>基础用法</h4>
                <el-switch style="display: block; margin-bottom: 10px;" v-model="value1" active-color="#00C4C0" inactive-color="#BFBFBF"></el-switch>
                <h4>禁用状态</h4>
                <el-switch style="margin-bottom: 10px;" v-model="value2" disabled></el-switch>
                <el-switch style="margin-bottom: 10px;" v-model="value3" disabled></el-switch>
                <h4>文字描述</h4>
                <el-switch style="display: block; margin-bottom: 10px;" v-model="value4" active-text="按月付费" inactive-text="按年付费"></el-switch>
                <el-switch 
                    style="display: block; margin-bottom: 10px;" 
                    v-model="value5" active-color="#13ce66"
                    inactive-color="#ff4949" active-text="按月付费" 
                    inactive-text="按年付费">
                </el-switch>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/switch"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLRadio'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>单选</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLTag'}" class="kl-content-next__pager">
                <span>标签</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/form/switch';
export default {
    name: 'kL-switch',
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