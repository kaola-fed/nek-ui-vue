<template>
    <div class="kl-content">
        <h2 class="kl-content__title">时间组件<span>KLTime</span></h2>
        <kl-demo title="时间选择">
            <div slot="desc">
                <p>样式修改。</p>
            </div>
            <div slot="demo">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-time-select
                            v-model="value1"
                            :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'
                            }"
                            placeholder="选择时间">
                        </el-time-select>
                    </el-col>
                    <el-col :span="6">
                        <el-time-picker
                            v-model="value2"
                            :picker-options="{
                                selectableRange: '18:30:00 - 20:30:00'
                            }"
                            placeholder="任意时间点">
                        </el-time-picker>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>
        </kl-demo>
        <kl-demo title="时间范围组件">
            <div slot="desc">
                <p>样式修改。</p>
            </div>
            <div slot="demo">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-time-select
                            placeholder="起始时间"
                            v-model="startTime"
                            :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'
                            }">
                        </el-time-select>
                    </el-col>
                    <el-col :span="6">
                        <el-time-select
                            placeholder="结束时间"
                            v-model="endTime"
                            :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30',
                                minTime: startTime
                            }">
                        </el-time-select>
                    </el-col>
                    <el-col :span="6">
                        <el-time-picker
                            is-range
                            v-model="value4"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围">
                        </el-time-picker>
                    </el-col>
                    <el-col :span="6">
                        <el-time-picker
                            is-range
                            arrow-control
                            v-model="value5"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间"
                            placeholder="选择时间范围">
                        </el-time-picker>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.range }}</kl-code>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/time-picker"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLTag'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>标签</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLMessage'}" class="kl-content-next__pager">
                <span>消息</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/form/time';

export default {
    name: 'kL-time',
    data() {
        return {
            code: Code,
            value1: '',
            value2: '',
            startTime: '',
            endTime: '',
            value4: '',
            value5: ''
        };
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>