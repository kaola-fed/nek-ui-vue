export default {
    base: `
        <el-form class="base-form" :rules="rules" ref="form"  :model="detaiInfo" label-width="100px">
            <el-form-item label="名称" prop="name">
                <el-input v-model="detaiInfo.name" placeholder="请输入名称" />
            </el-form-item>
            <el-form-item label="所属类别" prop="category">
                <el-input v-model="detaiInfo.category" placeholder="请输入所属类别" />
            </el-form-item>
            <el-form-item label="类型" prop="type">
                <el-select v-model="detaiInfo.type" placeholder="请选择"/>
            </el-form-item>
            <el-form-item label="生效时间" prop="date">
                <el-date-picker
                v-model="detaiInfo.date"
                format="yyyy/MM/dd"
                type="daterange"
                range-separator="~"
                start-placeholder="开始日期"
                end-placeholder="结束日期"/>
            </el-form-item>
            <el-form-item label="项目类别" prop="itemClass">
                <el-checkbox-group v-model="detaiInfo.itemClass">
                    <el-checkbox label="一级类目" name="type"/>
                    <el-checkbox label="二级类目" name="type"/>
                    <el-checkbox label="三级类目" name="type"/>
                    <el-checkbox label="四级类目" name="type"/>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="终端审核" prop="delivery">
                <el-switch v-model="detaiInfo.delivery"/>
            </el-form-item>
            <el-form-item label=" ">
                <el-button type="primary" @click="handleSave">提交</el-button>
                <el-button @click="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
        <script>
        export default {
            data() {
                return {
                    detaiInfo: {
                        delivery: true,
                        name: '',
                        category: '',
                        type: '',
                        date: '',
                        itemClass: ''
                    },
                    rules: {
                        delivery: [{
                            required: true, message: '请输入', trigger: 'blur'
                        }],
                        name: [{
                            required: true, message: '请输入', trigger: 'blur'
                        }],
                        category: [{
                            required: true, message: '请输入', trigger: 'blur'
                        }],
                        type: [{
                            required: true, message: '请输入', trigger: 'blur'
                        }],
                        date: [{
                            required: true, message: '请输入', trigger: 'blur'
                        }],
                        itemClass: [{
                            required: true, message: '请输入'
                        }]
                    }
                };
            },
            methods: {
                handleSave() {
                    this.$refs.form.validate(async (valid) => {
                        if(valid) {
                            console.log(1);
                        }
                    });
                },
                handleReset() {
                    this.$refs.form.resetFields();
                }
            } 
        };
        </script>
    `
};