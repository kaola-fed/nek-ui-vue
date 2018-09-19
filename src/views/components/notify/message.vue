<template>
    <div class="kl-content">
        <h2 class="kl-content__title">消息<span>KLMessage</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>样式修改</p>
            </div>
            <div slot="demo">
                <el-alert
                    title="成功提示的文案"
                    type="success">
                </el-alert>
                <el-alert
                    title="消息提示的文案"
                    type="info">
                </el-alert>
                <el-alert
                    title="警告提示的文案"
                    type="warning">
                </el-alert>
                <el-alert
                    title="错误提示的文案"
                    type="error">
                </el-alert>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="自定义关闭按钮">
            <div slot="desc">
                <p>样式修改</p>
            </div>
            <div slot="demo">
                <el-alert
                    title="不可关闭的 alert"
                    type="success"
                    :closable="false">
                </el-alert>
                <el-alert
                    title="自定义 close-text"
                    type="info"
                    close-text="知道了">
                </el-alert>
                <el-alert
                    title="设置了回调的 alert"
                    type="warning"
                    @close="hello">
                </el-alert>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.custom }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="带有 icon">
            <div slot="desc">
                <p>样式修改</p>
            </div>
            <div slot="demo">
                <el-alert
                    title="成功提示的文案"
                    type="success"
                    show-icon>
                </el-alert>
                <el-alert
                    title="消息提示的文案"
                    type="info"
                    show-icon>
                </el-alert>
                <el-alert
                    title="警告提示的文案"
                    type="warning"
                    show-icon>
                </el-alert>
                <el-alert
                    title="错误提示的文案"
                    type="error"
                    show-icon>
                </el-alert>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.icon }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="带有 icon 和辅助性文字介绍">
            <div slot="desc">
                <p>样式修改</p>
            </div>
            <div slot="demo">
                <el-alert
                    title="成功提示的文案"
                    type="success"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                </el-alert>
                <el-alert
                    title="消息提示的文案"
                    type="info"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                </el-alert>
                <el-alert
                    title="警告提示的文案"
                    type="warning"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                </el-alert>
                <el-alert
                    title="错误提示的文案"
                    type="error"
                    description="文字说明文字说明文字说明文字说明文字说明文字说明"
                    show-icon>
                </el-alert>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.iconText }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/alert"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLTime'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>时间选择</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLModal'}" class="kl-content-next__pager">
                <span>模态框</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/notify/message';
export default {
    name: 'kL-message',
    data() {
        return {
            code: Code
        };
    },
    methods: {
        hello() {
            console.log('hello');
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