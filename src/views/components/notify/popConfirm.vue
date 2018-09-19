<template>
    <div class="kl-content">
        <h2 class="kl-content__title">确认提示<span>KLPopConfirm</span></h2>
        <kl-demo title="基础用法">
            <div slot="demo">
                <el-popover
                    placement="top-start"
                    title="标题"
                    width="200"
                    trigger="hover"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">hover 激活</el-button>
                </el-popover>

                <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="click"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                    <el-button slot="reference">click 激活</el-button>
                </el-popover>

                <el-popover
                    ref="popover"
                    placement="right"
                    title="标题"
                    width="200"
                    trigger="focus"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                </el-popover>
                <el-button v-popover:popover>focus 激活</el-button>

                <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="manual"
                    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                    v-model="visible">
                    <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
                </el-popover>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="嵌套信息">
            <div slot="demo">
                <el-popover
                    placement="right"
                    width="400"
                    trigger="click">
                    <el-table :data="gridData">
                        <el-table-column width="150" property="date" label="日期"></el-table-column>
                        <el-table-column width="100" property="name" label="姓名"></el-table-column>
                        <el-table-column width="300" property="address" label="地址"></el-table-column>
                    </el-table>
                    <el-button slot="reference">click 激活</el-button>
                </el-popover>

            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.info }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="嵌套操作">
            <div slot="demo">
                <el-popover
                    placement="top"
                    width="160"
                    v-model="visible2">
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                    <div style="text-align: right; margin: 0">
                        <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                        <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
                    </div>
                    <el-button slot="reference">删除</el-button>
                </el-popover>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.operate }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/notification"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLNotify'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>通知</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLCrumb'}" class="kl-content-next__pager">
                <span>面包屑</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/notify/popConfirm';
export default {
    name: 'kL-popConfirm',
    data() {
        return {
            code: Code,
            visible: false,
            visible2: false,
            gridData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>