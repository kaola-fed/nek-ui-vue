<template>
    <div class="kl-content">
        <h2 class="kl-content__title">进度条<span>KLProgress</span></h2>
        <kl-demo title="线形进度条 — 百分比外显">
            <div slot="demo">
                <el-progress :percentage="0"></el-progress>
                <el-progress :percentage="70"></el-progress>
                <el-progress :percentage="80" color="#8e71c7"></el-progress>
                <el-progress :percentage="100" status="success"></el-progress>
                <el-progress :percentage="50" status="exception"></el-progress>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="线形进度条 — 百分比内显">
            <div slot="demo">
                <el-progress :text-inside="true" :stroke-width="18" :percentage="2"></el-progress>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
                <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.inner }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/progress"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLLoading'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>加载</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLTooltip'}" class="kl-content-next__pager">
                <span>文字提示</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/other/progress';

export default {
    name: 'kL-progress',
    data() {
        return {
            code: Code
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-progress {
    margin-bottom: 15px;
}
.el-progress__text {
    margin-left: 16px;
}
</style>