<template>
    <div class="kl-content">
        <h2 class="kl-content__title">输入框<span>KLInput</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>这个组件只是修改了颜色。</p>
            </div>
            <div slot="demo">
                <el-row>
                    <el-col :span="6">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="数字输入">
            <div slot="desc">
                <p><code>input-number</code>的样式在没用<code>control</code>属性的时候修改成了左对齐。</p>
            </div>
            <div slot="demo">
                <el-row :gutter="30">
                    <el-col :span="6">
                        <el-input-number v-model="num" :controls="false"  @change="handleChange" ></el-input-number>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.number }}</kl-code>
            </div> 
        </kl-demo>
        <kl-demo title="复合型的输入">
            <div slot="desc">
                <p>需要注意的是复合型的输入框在列表搜索页作为条件的话，占的位置是普通<code>input</code>的2倍。</p>
            </div>
            <div slot="demo">
                <el-row :gutter="30">
                    <el-col :span="12">
                        <el-input placeholder="请输入内容" v-model="input3">
                            <template slot="prepend">Http://</template>
                        </el-input>
                    </el-col>
                    <el-col :span="12">
                        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                            <el-select class="list-type-select" v-model="select" slot="prepend" placeholder="请选择">
                                <el-option label="餐厅名" value="1"></el-option>
                                <el-option label="订单号" value="2"></el-option>
                                <el-option label="用户电话" value="3"></el-option>
                            </el-select>
                            <el-button slot="append" icon="el-icon-search"></el-button>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.multip }}</kl-code>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/input"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLButton'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>按钮</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLCheck'}" class="kl-content-next__pager">
                <span>复选框</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/form/input';
export default {
    name: 'kL-input',
    data() {
        return {
            code: Code,
            input: '',
            num: 3, 
            input3: '',
            input5: '',
            select: ''
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-type-select {
    width: 120px;
}
</style>