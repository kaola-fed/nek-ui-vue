<template>
    <div class="kl-content">
        <h2 class="kl-content__title">树型视图<span>KLTreeView</span></h2>
        <kl-demo title="基础用法">
            <div slot="desc">
                <p>单纯颜色修改。</p>
            </div>
            <div slot="demo">
                <el-tree
                    :data="data"
                    :props="defaultProps"
                    @node-click="handleNodeClick">
                </el-tree>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
            </div>
        </kl-demo>
        <kl-demo title="可选择">
            <div slot="demo">
                <el-tree
                    :props="props"
                    :load="loadNode"
                    lazy
                    show-checkbox
                    @check-change="handleCheckChange">
                </el-tree>
            </div>
            <div slot="code">
                <kl-code lang="html" slot="code">{{ code.checkBox }}</kl-code>
            </div>
        </kl-demo>
        <div class="kl-content-table">
            <h1>
                <a href="https://element.faas.ele.me/2.4/#/zh-CN/component/tree"  title="API">
                    API（参考element-ui官方页面）
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLForm'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>表单</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLUpload'}" class="kl-content-next__pager">
                <span>上传文件</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/form/tree';

export default {
    name: 'kL-tree',
    data() {
        return {
            code: Code,
            props: {
                label: 'name',
                children: 'zones'
            },
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            count: 1,
            data: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [
                        {
                            label: '二级 2-1',
                            children: [{
                                label: '三级 2-1-1'
                            }]
                        }, {
                            label: '二级 2-2',
                            children: [{
                                label: '三级 2-2-1'
                            }]
                        }
                    ]
                }, {
                    label: '一级 3',
                    children: [
                        {
                            label: '二级 3-1',
                            children: [{
                                label: '三级 3-1-1'
                            }]
                        }, {
                            label: '二级 3-2',
                            children: [{
                                label: '三级 3-2-1'
                            }]
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
        },
        handleNodeClick(data) {
            console.log(data);
        },
        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([{ name: 'region1' }, { name: 'region2' }]);
            }
            if (node.level > 3) {
                return resolve([]);
            }

            let hasChild;
            if (node.data.name === 'region1') {
                hasChild = true;
            } else if (node.data.name === 'region2') {
                hasChild = false;
            } else {
                hasChild = Math.random() > 0.5;
            }

            setTimeout(() => {
                let data;
                if (hasChild) {
                    data = [{
                        name: `zone${this.count++}`
                    }, {
                        name: `zone${this.count++}`
                    }];
                } else {
                    data = [];
                }

                resolve(data);
            }, 500);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>