export default {
    base: `
        <el-checkbox v-model="checked">备选项</el-checkbox>
        <el-checkbox v-model="checked1" disabled>禁用状态</el-checkbox>
        <el-checkbox v-model="checked2" disabled>禁用状态1</el-checkbox>
        <script>
        export default {
            data() {
                return {
                    checked: true,
                    checked1: false,
                    checked2: true
                };
            }
        };
        </script>
    `,
    indeterminate: `
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <script>
        const cityOptions = ['上海', '北京', '广州', '深圳'];

        export default {
            data() {
                return {
                    checkAll: false,
                    checkedCities: ['上海', '北京'],
                    cities: cityOptions,
                    isIndeterminate: true
                };
            },
            methods: {
                handleCheckAllChange(val) {
                    this.checkedCities = val ? cityOptions : [];
                    this.isIndeterminate = false;
                },
                handleCheckedCitiesChange(value) {
                    let checkedCount = value.length;
                    this.checkAll = checkedCount === this.cities.length;
                    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
                }
            }
        };
        </script>
    `
};