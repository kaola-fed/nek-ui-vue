export default {
    base: `
        <el-radio v-model="radio" label="1">备选项1</el-radio>
        <el-radio v-model="radio" label="2">备选项2</el-radio>
        <el-radio disabled v-model="radio1" label="禁用">备选项3</el-radio>
        <el-radio disabled v-model="radio1" label="选中且禁用">备选项4</el-radio>
        <script>
        export default {
            data() {
                return {
                    radio: '1',
                    radio1: '选中且禁用'
                };
            }
        };
        </script>
    `
};