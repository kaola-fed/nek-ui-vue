<template>
    <div class="kl-content">
        <h2 class="kl-content__title">复选框<span>KLCheck</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>单纯颜色修改，使用比较简单。</p>
            </div>
            <div slot="demo">
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <el-checkbox v-model="checked1" disabled>禁用状态</el-checkbox>
                <el-checkbox v-model="checked2" disabled>选中的禁用状态</el-checkbox>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>
        </kl-demo>
        <kl-demo title="indeterminate 状态">
            <div slot="demo">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.indeterminate }}</kl-code>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/checkbox"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLInput'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>输入框</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLDatePicker'}" class="kl-content-next__pager">
                <span>日期选择</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/form/check';

const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    name: 'kL-check',
    data() {
        return {
            code: Code,
            checked: true,
            checked1: false,
            checked2: true,
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
        };
    },
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>