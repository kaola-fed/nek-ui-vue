export default {
    base: `
        <el-tree
            :data="data"
            :props="defaultProps"
            @node-click="handleNodeClick">
        </el-tree>
        <script>
        export default {
            data() {
                return {
                    defaultProps: {
                        children: 'children',
                        label: 'label'
                    },
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
                }
                
            }
        };
        </script>
    `,
    checkBox: `
        <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
        </el-tree>
        <script>
        export default {
            data() {
                return {
                    props: {
                        label: 'name',
                        children: 'zones'
                    },
                    defaultProps: {
                        children: 'children',
                        label: 'label'
                    },
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
                                name: 'zone' + this.count++,
                            }, {
                                name: 'zone' + this.count++
                            }];
                        } else {
                            data = [];
                        }

                        resolve(data);
                    }, 500);
                }
            }
        }
        </script>
    `
};