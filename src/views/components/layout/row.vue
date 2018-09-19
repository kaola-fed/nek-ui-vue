<template>
    <div class="kl-content">
        <h2 class="kl-content__title">栅格布局<span>KLRow</span></h2>
        <div class="kl-content__form-demo">
            <kl-demo title="常见页面布局">
                <div slot="desc">
                    <p>基础布局</p>
                </div>
                <div slot="demo">
                    <el-row>
                        <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                    </el-row>

                </div>
                <div slot="code">
                    <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
                </div>
            </kl-demo>
        </div>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/layout"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLLayout'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>布局容器</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLSearch'}" class="kl-content-next__pager">
                <span>筛选区</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/layout/row';
export default {
    name: 'kL-row',
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            code: Code,
            tableData: Array(20).fill(item)
        };
    },
    methods: {

    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>