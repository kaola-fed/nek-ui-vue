<template>
    <div class="kl-content">
        <h2 class="kl-content__title">更新日志</h2>
        <div class="kl-content__form-demo">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h2>3.0.18</h2>
                </div>
                <div >
                    <p>最新版本更新到3.0.18, 修改<code>input-number</code>组件高度不统一问题。</p>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <h2>3.0.19（最新）</h2>
                </div>
                <div >
                    <p>删除导航栏分组的修改样式</p>
                </div>
            </el-card>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'international'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>国际化</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLCard'}" class="kl-content-next__pager">
                <span>卡片</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: 'kL-button',
    data() {
        return {
        };
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isntal-desc {
    margin: 20px 0;
}
.install-code {
    line-height: 3.2;
    height: 60px;
    text-indent: 40px;
    display: block;
    font-family: Consolas,Menlo,Courier,monospace;
    margin: 0 1px;
    background: #f7f7f7;
    padding: .2em .4em;
    border-radius: 3px;
    font-size: 1em;
    border: 1px solid #eee;
}
</style>