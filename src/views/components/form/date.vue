<template>
    <div class="kl-content">
        <h2 class="kl-content__title">日期组件<span>KLDatePicker</span></h2>
        <kl-demo title="日期选择">
            <div slot="desc">
                <p>普通的，带快捷选项、选择时间的。</p>
            </div>
            <div slot="demo">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker
                            v-model="value2"
                            align="right"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions1">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="6">
                        <el-date-picker
                            v-model="value3"
                            type="datetime"
                            placeholder="选择日期时间">
                        </el-date-picker>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>
        </kl-demo>
        <kl-demo title="日期范围组件">
            <div slot="desc">
                <p>日期范围组件在列表搜索页面作为搜素条件的时候占位是普通时间组件的2倍</p>
            </div>
            <div slot="demo">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-date-picker
                            v-model="value4"
                            type="datetimerange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                        </el-date-picker>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.range }}</kl-code>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/date-picker"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLCheck'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>复选框</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLSelect'}" class="kl-content-next__pager">
                <span>下拉选择</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/form/date';

export default {
    name: 'kL-datePicker',
    data() {
        return {
            code: Code,
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: '',
            value3: '',
            value4: ''
        };
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>