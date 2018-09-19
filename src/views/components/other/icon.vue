<template>
    <div class="kl-content">
        <h2 class="kl-content__title">徽标<span>KLBadge</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>默认使用element-ui的icon库，在自己项目里引入自己的iconfont</p>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/icon"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLBadge'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>徽标</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLLoading'}" class="kl-content-next__pager">
                <span>加载</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

export default {
    name: 'kL-icon',
    data() {
        return {
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
    margin-right: 20px;
}
</style>