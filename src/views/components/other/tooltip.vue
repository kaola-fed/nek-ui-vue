<template>
    <div class="kl-content">
        <h2 class="kl-content__title">文字提示<span>KLTooltip</span></h2>
        <kl-demo title="基础用法">
            <div slot="demo">
                <div class="box">
                    <div class="top">
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start" v-if="test">
                            <el-button>上左</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
                            <el-button>上边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
                            <el-button>上右</el-button>
                        </el-tooltip>
                    </div>
                    <div class="left">
                        <el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
                            <el-button>左上</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
                            <el-button>左边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
                            <el-button>左下</el-button>
                        </el-tooltip>
                    </div>

                    <div class="right">
                        <el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
                            <el-button>右上</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
                            <el-button>右边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
                            <el-button>右下</el-button>
                        </el-tooltip>
                    </div>
                    <div class="bottom">
                        <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
                            <el-button>下左</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
                            <el-button>下边</el-button>
                        </el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
                            <el-button>下右</el-button>
                        </el-tooltip>
                    </div>
                </div>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="主题">
            <div slot="desc">
                <p>Tooltip 组件提供了两个不同的主题：<code>dark</code>和<code>light</code>。展示多行文本或者是设置文本内容的格式</p>
            </div>
            <div slot="demo">
                <div class="boxItem">
                    <h2>主题</h2>
                    <el-tooltip content="Top center" placement="top">
                        <el-button>Dark</el-button>
                    </el-tooltip>
                    <el-tooltip content="Bottom center" placement="bottom" effect="light">
                        <el-button>Light</el-button>
                    </el-tooltip>
                </div>
                <div class="boxItem">
                    <h2>更多 Content</h2>
                    <el-tooltip placement="top">
                        <div slot="content">多行信息<br/>第二行信息</div>
                        <el-button>Top center</el-button>
                    </el-tooltip>
                </div>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.inner }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/tooltip"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLProgress'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>进度条</span>
            </router-link >
            <span class="placeholder"></span>
        </div>
    </div>
</template>
<script>
import Code from '@/code/other/tooltip';

export default {
    name: 'kL-tooltip',
    data() {
        return {
            code: Code,
            currentDate: new Date(),
            test: true
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
    width: 400px;

    .top {
        text-align: center;
    }

    .left {
        float: left;
        width: 60px;
    }

    .right {
        float: right;
        width: 60px;
    }

    .bottom {
        clear: both;
        text-align: center;
    }

    .item {
        margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
        padding: 8px 10px;
    }
}
.boxItem {
    margin-bottom: 20px;
}
.boxItem h2 {
    margin-bottom: 20px;
}
</style>