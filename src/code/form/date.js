export default {
    base: `
        <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
        </el-date-picker>
        <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
        </el-date-picker>
        <el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
        <script>
        export default {
            data() {
                return {
                    pickerOptions1: {
                        disabledDate (time) {
                            return time.getTime() > Date.now()
                        },
                        shortcuts: [{
                            text: '今天',
                            onClick (picker) {
                                picker.$emit('pick', new Date())
                            }
                        }, {
                            text: '昨天',
                            onClick (picker) {
                                const date = new Date()
                                date.setTime(date.getTime() - 3600 * 1000 * 24)
                                picker.$emit('pick', date)
                            }
                        }, {
                            text: '一周前',
                            onClick (picker) {
                                const date = new Date()
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                                picker.$emit('pick', date)
                            }
                        }]
                    },
                    value1: '',
                    value2: '',
                    value3: ''
                };
            }
        };
        </script>
    `,
    range: `
        <el-date-picker
            v-model="value4"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
        <script>

        export default {
            data() {
                return {
                    value4: ''

                };
            }
        };
        </script>
    `
};