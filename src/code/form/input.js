export default {
    base: `
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <script>
        export default {
            data() {
                return {
                    input: ''
                };
            }
        };
        </script>
    `,
    number: `
        <el-input-number v-model="num" :controls="false"  @change="handleChange" ></el-input-number>
        <script>
        export default {
            data() {
                return {
                    num: 3
                };
            },
            methods: {
                handleChange(value) {
                    console.log(value);
                }
            }
        };
        </script>
    `,
    multip: `
        <el-row :gutter="30">
            <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="input3">
                    <template slot="prepend">Http://</template>
                </el-input>
            </el-col>
            <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                    <el-select class="list-type-select" v-model="select" slot="prepend" placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
        </el-row>
        <script>
        export default {
            data() {
                return {
                    input3: '',
                    input5: '',
                    select: ''
                };
            }
        };
        </script>
    `
};