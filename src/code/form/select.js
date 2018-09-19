export default {
    base: `
        <el-row :gutter="20">
            <el-col :span="6">
                <el-select size="small" v-model="value" placeholder="请选择" clearable >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-select size="small" v-model="value1" placeholder="请选择" clearable :disabled="true">
                    <el-option
                        v-for="item in options2"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-col>
        </el-row>
        <script>
        export default {
            data() {
                return {
                    options: [{
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }],
                    value: '',
                    value1: ''
                };
            }
        };
        </script>
    `,
    multiple: `
        <el-row :gutter="20">
            <el-col :span="6">
                <el-select size="small" v-model="value5" multiple placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value" />
                </el-select>
            </el-col>
            <el-col :span="6">
                <el-select
                    size="small"
                    v-model="value11"
                    multiple
                    collapse-tags
                    placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" />
                </el-select>
            </el-col>
        </el-row>
        <script>
        export default {
            data() {
                return {
                    options: [{
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }],
                    value5: '',
                    value11: ''
                };
            }
        };
        </script>
    `
};