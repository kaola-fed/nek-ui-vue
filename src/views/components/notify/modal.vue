<template>
    <div class="kl-content">
        <h2 class="kl-content__title">模态框<span>KLModal</span></h2>
        <kl-demo title="消息提示">
            <div slot="desc">
                <p>样式修改</p>
            </div>
            <div slot="demo">
                <h2>消息提示</h2>
                <el-button type="text" @click="open">点击打开 Message Box</el-button>
                <h2>确认消息</h2>
                <el-button type="text" @click="open2">点击打开 Message Box</el-button>
                <h2>提交内容</h2>
                <el-button type="text" @click="open3">点击打开 Message Box</el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/message-box"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLMessage'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>消息</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLNotify'}" class="kl-content-next__pager">
                <span>通知</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/notify/modal';
export default {
    name: 'kL-modal',
    data() {
        return {
            code: Code
        };
    },
    methods: {
        open() {
            this.$alert('这是一段内容', '标题名称', {
                confirmButtonText: '确定',
                callback: (action) => {
                    this.$message({
                        type: 'info',
                        message: `action: ${action}`
                    });
                }
            });
        },
        open2() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        open3() {
            this.$prompt('请输入邮箱', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: '邮箱格式不正确'
            }).then(({value}) => {
                this.$message({
                    type: 'success',
                    message: `你的邮箱是: ${value}`
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-alert {
    margin-bottom: 10px;
}
</style>