<template>
    <div class="kl-content">
        <h2 class="kl-content__title">步骤<span>KLSteps</span></h2>
        <kl-demo title="基础用法">
            <div slot="demo">
                <el-steps :active="active" finish-status="success">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3"></el-step>
                </el-steps>
                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="有描述的步骤条">
            <div slot="demo">
                <el-steps :active="active1">
                    <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
                    <el-step title="步骤 3" description="这段就没那么长了"></el-step>
                </el-steps>
                <el-button style="margin-top: 12px;" @click="next1">下一步</el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.desc }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="竖式步骤条">
            <div slot="demo">
                <el-steps direction="vertical" :active="active2">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
                <el-button style="margin-top: 12px;" @click="next2">下一步</el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.vertical }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/steps"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLPager'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>分页器</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLTabs'}" class="kl-content-next__pager">
                <span>选项卡</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/navbar/steps';

export default {
    name: 'kL-steps',
    data() {
        return {
            code: Code,
            active: 1,
            active1: 0,
            active2: 0
        };
    },
    methods: {
        next() {
            if(this.active++ > 2) {
                this.active = 1;
            }
        },
        next1() {
            if(this.active1++ > 2) {
                this.active1 = 0;
            }
        },
        next2() {
            if(this.active2++ > 2) {
                this.active2 = 0;
            }
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>