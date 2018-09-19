<template>
    <div class="kl-content">
        <h2 class="kl-content__title">加载<span>KLLoading</span></h2>
        <kl-demo title="区域加载">
            <div slot="demo">
                <el-table
                    v-loading="loading"
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="整页加载">
            <div slot="demo">
                <el-button
                    type="primary"
                    @click="openFullScreen"
                    v-loading.fullscreen.lock="fullscreenLoading">
                    指令方式
                </el-button>
                <el-button
                    type="primary"
                    @click="openFullScreen2">
                    服务方式
                </el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.whole }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/loading"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLIcon'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>图标</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLProgress'}" class="kl-content-next__pager">
                <span>进度条</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/other/loading';

export default {
    name: 'kL-loading',
    data() {
        return {
            code: Code,
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }],
            loading: true,
            fullscreenLoading: false
        };
    },
    methods: {
        openFullScreen() {
            this.fullscreenLoading = true;
            setTimeout(() => {
                this.fullscreenLoading = false;
            }, 2000);
        },
        openFullScreen2() {
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
                loading.close();
            }, 2000);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
    margin-right: 20px;
}
</style>