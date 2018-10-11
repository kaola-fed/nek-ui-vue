<template>
    <div class="kl-content">
        <h2 class="kl-content__title">安装</h2>
        <div class="kl-content__form-demo">
            <p class="isntal-desc">使用 npm 的方式安装。</p>
            <code class="install-code">
                npm i element-kaola -S
            </code>
        </div>
        
        <h2 class="kl-content__title">引用</h2>
        <div class="kl-content__form-demo">
            <p class="isntal-desc">在入口文件引用index.scss文件，原element的样式无需引用</p>
            <code class="install-code">import 'element-kaola/index.scss';</code>
        </div>
        <div class="kl-content-next">
            <span class="placeholder"></span>
            <router-link :to="{ name: 'international'}" class="kl-content-next__pager">
                <span>国际化</span>
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