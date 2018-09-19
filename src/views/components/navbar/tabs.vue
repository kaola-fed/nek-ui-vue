<template>
    <div class="kl-content">
        <h2 class="kl-content__title">选项卡<span>KLTabs</span></h2>
        <kl-demo title="基础用法">
            <div slot="demo">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="选项卡样式">
            <div slot="demo">
                <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.option }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="卡片化">
            <div slot="demo">
                <el-tabs type="border-card">
                    <el-tab-pane label="用户管理">用户管理</el-tab-pane>
                    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
                    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
                    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
                </el-tabs>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.card }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/tabs"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLSteps'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>步骤</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLBadge'}" class="kl-content-next__pager">
                <span>徽标</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/navbar/tabs';

export default {
    name: 'kL-tabs',
    data() {
        return {
            code: Code,
            activeName: 'second',
            activeName2: 'first'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>