<template>
    <div class="kl-content">
        <h2 class="kl-content__title">下拉选择<span>KLSelect</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>
                    <b>注意：</b><code>select</code>组件的高度存在于组件的计算属性中，交互给的32px高度无法通过样式修改达到目的。一旦<code>select</code>的高度重新计算了，高度就会按40px计算。
                    需要在<code>select</code> 上加上 <code>size="small"</code> 属性才能让高度保持32px不变。
                </p>
            </div>
            <div slot="demo">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-select size="small" v-model="value" placeholder="请选择" clearable >
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <el-select size="small" v-model="value" placeholder="请选择" clearable :disabled="true">
                            <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="多选下拉">
            <div slot="desc">
                <p>一个是全量展示，高度可变。一个只展示第一项，高度不变化。</p>
            </div>
            <div slot="demo">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-select size="small" v-model="value5" multiple placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-col>
                    <el-col :span="6">
                        <el-select
                            size="small"
                            v-model="value11"
                            multiple
                            collapse-tags
                            placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value" />
                        </el-select>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.multiple }}</kl-code>
            </div> 
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/select"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLDatePicker'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>日期选择</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLForm'}" class="kl-content-next__pager">
                <span>表单</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/form/select';
export default {
    name: 'kL-button',
    data() {
        return {
            code: Code,
            value: '',
            value5: '',
            value11: '',
            value7: '',
            fullscreenLoading: false,
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            options2: [],
            options3: [{
                label: '热门城市',
                options: [{
                    value: 'Shanghai',
                    label: '上海'
                }, {
                    value: 'Beijing',
                    label: '北京'
                }]
            }, {
                label: '城市名',
                options: [{
                    value: 'Chengdu',
                    label: '成都'
                }, {
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }, {
                    value: 'Dalian',
                    label: '大连'
                }]
            }]
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