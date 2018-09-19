export default {
    base: `
        <el-row :gutter="20">
            <el-col :span="6">
                <el-time-select
                    v-model="value1"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }"
                    placeholder="选择时间">
                </el-time-select>
            </el-col>
            <el-col :span="6">
                <el-time-picker
                    v-model="value2"
                    :picker-options="{
                        selectableRange: '18:30:00 - 20:30:00'
                    }"
                    placeholder="任意时间点">
                </el-time-picker>
            </el-col>
        </el-row>
        <script>
        export default {
            data() {
                return {
                    value1: '',
                    value2: ''
                };
            }
        };
        </script>
    `,
    range: `
        <el-row :gutter="20">
            <el-col :span="6">
                <el-time-select
                    placeholder="起始时间"
                    v-model="startTime"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30'
                    }">
                </el-time-select>
            </el-col>
            <el-col :span="6">
                <el-time-select
                    placeholder="结束时间"
                    v-model="endTime"
                    :picker-options="{
                        start: '08:30',
                        step: '00:15',
                        end: '18:30',
                        minTime: startTime
                    }">
                </el-time-select>
            </el-col>
            <el-col :span="6">
                <el-time-picker
                    is-range
                    v-model="value4"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
            </el-col>
            <el-col :span="6">
                <el-time-picker
                    is-range
                    arrow-control
                    v-model="value5"
                    range-separator="至"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围">
                </el-time-picker>
            </el-col>
        </el-row>
        <script>
        export default {
            data() {
                return {
                    startTime: '',
                    endTime: '',
                    value4: '',
                    value5: ''
                };
            }
        };
        </script>
    `
};