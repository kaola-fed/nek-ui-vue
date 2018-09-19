<template>
    <div class="kl-content">
        <h2 class="kl-content__title">导航菜单<span>KLMenu</span></h2>
        <kl-demo title="默认颜色">
            <div slot="demo">
                <el-row>
                    <el-col :span="6">
                        <el-menu
                            style="min-height: 500px;"
                            default-active="2"
                            @open="handleOpen"
                            @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>   
        </kl-demo>
        <kl-demo title="深色导航">
            <div slot="desc">
                <p>添加<code>class</code> : <code>el-menu--dark</code>,变为深色导航。</p>
            </div>
            <div slot="demo">
                <el-row>
                    <el-col :span="6" :offset="6">
                        <el-menu
                            style="min-height: 500px;"
                            default-active="2"
                            class="el-menu--dark"
                            @open="handleOpen"
                            @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                                </template>
                                <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                                </el-menu-item-group>
                                <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.custom }}</kl-code>
            </div>   
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/menu"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLCrumb'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>面包屑</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLPager'}" class="kl-content-next__pager">
                <span>分页器</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>

import Code from '@/code/navbar/menu';
export default {
    name: 'kL-menu',
    data() {
        return {
            code: Code
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>