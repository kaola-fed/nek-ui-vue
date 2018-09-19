<template>
    <div class="kl-content">
        <h2 class="kl-content__title">徽标<span>KLBadge</span></h2>
        <kl-demo title="基础用法">
            <div slot="demo">
                <el-badge :value="12" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="3" class="item">
                    <el-button size="small">回复</el-button>
                </el-badge>

                <el-dropdown trigger="click" class="item">
                    <span class="el-dropdown-link">
                        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item class="clearfix">
                        评论
                        <el-badge class="mark" :value="12" />
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                        回复
                        <el-badge class="mark" :value="3" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-badge is-dot class="item">数据查询</el-badge>
                    <el-badge is-dot class="item">
                    <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
                </el-badge>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/badge"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLTabs'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>选项卡</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLIcon'}" class="kl-content-next__pager">
                <span>图标</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/other/badge';

export default {
    name: 'kL-badge',
    data() {
        return {
            code: Code
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