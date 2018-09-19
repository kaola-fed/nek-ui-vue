<template>
    <div class="kl-content">
        <h2 class="kl-content__title">上传组件<span>KLUpload</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>上传组件跟nek-ui差别太大，样式修改无法达到相同效果。所以交互没给参照的交互样式。参照element-ui交互使用。</p>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/upload"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLTreeView'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>树型视图</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLRadio'}" class="kl-content-next__pager">
                <span>单选</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: 'kL-upload',
    data() {
        return {
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>