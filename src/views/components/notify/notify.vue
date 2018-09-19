<template>
    <div class="kl-content">
        <h2 class="kl-content__title">通知<span>KLNotify</span></h2>
        <kl-demo title="消息提示">
            <div slot="desc">
                <p>样式修改</p>
            </div>
            <div slot="demo">
                <h2>基础用法</h2>
                <el-button :plain="true" @click="open">打开消息提示</el-button>
                <el-button :plain="true" @click="openVn">VNode</el-button>
                <h2>不同状态</h2>
                <el-button :plain="true" @click="open2">成功</el-button>
                <el-button :plain="true" @click="open3">警告</el-button>
                <el-button :plain="true" @click="open">消息</el-button>
                <el-button :plain="true" @click="open4">错误</el-button>
                <h2>可关闭</h2>
                <el-button :plain="true" @click="open5">消息</el-button>
                <el-button :plain="true" @click="open6">成功</el-button>
                <el-button :plain="true" @click="open7">警告</el-button>
                <el-button :plain="true" @click="open8">错误</el-button>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
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
            <router-link :to="{ name: 'KLModal'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>模态框</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLPopConfirm'}" class="kl-content-next__pager">
                <span>确认提示</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/notify/notify';
export default {
    name: 'kL-notify',
    data() {
        return {
            code: Code
        };
    },
    methods: {
        open() {
            this.$message('这是一条消息提示');
        },
        openVn() {
            const h = this.$createElement;
            this.$message({
                message: h('p', null, [
                    h('span', null, '内容可以是 '),
                    h('i', { style: 'color: teal' }, 'VNode')
                ])
            });
        },
        open2() {
            this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },
        open3() {
            this.$message({
                message: '警告哦，这是一条警告消息',
                type: 'warning'
            });
        },
        open4() {
            this.$message.error('错了哦，这是一条错误消息');
        },
        open5() {
            this.$message({
                showClose: true,
                message: '这是一条消息提示'
            });
        },

        open6() {
            this.$message({
                showClose: true,
                message: '恭喜你，这是一条成功消息',
                type: 'success'
            });
        },

        open7() {
            this.$message({
                showClose: true,
                message: '警告哦，这是一条警告消息',
                type: 'warning'
            });
        },
        open8() {
            this.$message({
                showClose: true,
                message: '错了哦，这是一条错误消息',
                type: 'error'
            });
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-button {
    margin: 20px 0;
}
</style>