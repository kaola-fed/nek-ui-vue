<template>
    <div class="kl-content">
        <h2 class="kl-content__title">卡片<span>KLCard</span></h2>
        <div class="kl-content__form-demo">
            <kl-demo title="基本形式">
                <div slot="desc">
                    <p>用于页面的布局，页面由多个card组件组成，card里面一般配合<code>kl-row</code>组件进行布局</p>
                </div>
                <div slot="demo">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>卡片名称</span>
                            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </div>
                <div slot="code">
                    <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
                </div>
            </kl-demo>
            <kl-demo title="简单卡片">
                <div slot="desc">
                    <p>没有header的card</p>
                </div>
                <div slot="demo">
                    <el-card class="box-card">
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </div>
                <div slot="code">
                    <kl-code lang="html" slot="code">{{ code.simple }}</kl-code>
                </div>
            </kl-demo>
            <kl-demo title="带图片">
                <div slot="desc">
                    <p>可配置定义更丰富的内容展示。</p>
                </div>
                <div slot="demo">
                    <el-row >
                        <el-col :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                            <el-card :body-style="{ padding: '0px' }">
                                <img src="https://element.faas.ele.me/2.4/static/hamburger.50e4091.png" class="image">
                                <div style="padding: 14px;">
                                    <span>好吃的汉堡</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ currentDate }}</time>
                                        <el-button type="text" class="button">操作按钮</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div slot="code">
                    <kl-code lang="html" slot="code">{{ code.img }}</kl-code>
                </div>
            </kl-demo>
            <kl-demo title="卡片阴影">
                <div slot="desc">
                    <p>可对阴影的显示进行配置。</p>
                </div>
                <div slot="demo">
                    <el-row :gutter="12">
                        <el-col :span="8">
                            <el-card shadow="always">
                                总是显示
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card shadow="hover">
                                鼠标悬浮时显示
                            </el-card>
                        </el-col>
                        <el-col :span="8">
                            <el-card shadow="never">
                                从不显示
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div slot="code">
                    <kl-code lang="html" slot="code">{{ code.shadow }}</kl-code>
                </div>
            </kl-demo>
        </div>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/card"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'update'}" class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>更新日志</span>
            </router-link>
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLLayout'}" class="kl-content-next__pager">
                <span>布局容器</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/layout/card';
export default {
    name: 'kL-card',
    data() {
        return {
            code: Code,
            currentDate: new Date()
        };
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>