export default {
    base: `
        <h4>基础用法</h4>
        <el-switch style="display: block; margin-bottom: 10px;" v-model="value1" active-color="#00C4C0" inactive-color="#BFBFBF"></el-switch>
        <h4>禁用状态</h4>
        <el-switch style="margin-bottom: 10px;" v-model="value2" disabled></el-switch>
        <el-switch style="margin-bottom: 10px;" v-model="value3" disabled></el-switch>
        <h4>文字描述</h4>
        <el-switch style="display: block; margin-bottom: 10px;" v-model="value4" active-text="按月付费" inactive-text="按年付费"></el-switch>
        <el-switch 
            style="display: block; margin-bottom: 10px;" 
            v-model="value5" active-color="#13ce66"
            inactive-color="#ff4949" active-text="按月付费" 
            inactive-text="按年付费">
        </el-switch>
        <script>
        export default {
            data() {
                return {
                    value1: true,
                    value2: true,
                    value3: false,
                    value4: true,
                    value5: true
                };
            }
        };
        </script>
    `
};