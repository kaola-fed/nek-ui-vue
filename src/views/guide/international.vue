<template>
    <div class="kl-content">
        <h2 class="kl-content__title">国际化</h2>
        <div class="kl-content__form-demo">
            <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/i18n">参照element-ui的官网。</a>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'install'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>安装</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'update'}" class="kl-content-next__pager">
                <span>更新日志</span>
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