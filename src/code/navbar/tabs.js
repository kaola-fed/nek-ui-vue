export default {
    base: `
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        export default {
            data() {
                return {
                    activeName: 'second',
                };
            },
            methods: {
                handleClick(tab, event) {
                    console.log(tab, event);
                }
            }
        };
    `,
    option: `
        <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
        export default {
            data() {
                return {
                    activeName2: 'first'
                };
            },
            methods: {
                handleClick(tab, event) {
                    console.log(tab, event);
                }
            }
        };
    `,
    card: `
        <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
        export default {
            data() {
                return {};
            },
            methods: {
                handleClick(tab, event) {
                    console.log(tab, event);
                }
            }
        };
    `
};