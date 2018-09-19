<template>
    <div class="kl-content">
        <h2 class="kl-content__title">按钮<span>KLButton</span></h2>
        <kl-demo title="常用按钮">
            <div slot="desc">
                <p>需要经常使用的7种按钮，其它类型交互未给出，可适当时候参照element-ui交互使用。</p>
            </div>
            <div slot="demo">
                <el-button type="primary">主按钮</el-button>
                <el-button>次按钮</el-button>
                <el-button type="danger" plain>危险按钮</el-button>
                <el-button disabled>次按钮</el-button>
                <el-button plain icon="el-icon-search">搜索</el-button>
                <el-button plain disabled>朴素按钮</el-button>
                <el-button type="primary" :loading="true">加载中</el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/button"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLTable'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>表格</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLInput'}" class="kl-content-next__pager">
                <span>输入框</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/form/button';
export default {
    name: 'kL-button',
    data() {
        return {
            code: Code
        };
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@component-namespace kl {
    @b primary {
        color: #fff;
        background: #00c4c0;
        border: 1px solid #00c4c0;
    }
    @b secondary {
        color: #00c4c0;
        background: #fff;
        border: 1px solid #00c4c0;
    }
    @b disabled {
        cursor: not-allowed;
        filter: alpha(opacity = 50);
        opacity: 0.5;
        -webkit-box-shadow: none;
        box-shadow: none;
    }    
}
</style>