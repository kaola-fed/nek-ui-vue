export default {
    base: `
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    `,
    simple: `
        <el-card class="box-card">
            <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    `,
    img: `
        <el-row >
            <el-col :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="https://element.faas.ele.me/2.4/static/hamburger.50e4091.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <script>
            export default {
                data() {
                    return {
                        currentDate: new Date()
                    };
                }
            }
        </script>
        <style>
            .image {
                width: 100%;
            }
        </style>
    `,
    shadow: `
        <el-row :gutter="12">
            <el-col :span="8">
                <el-card shadow="always">
                    总是显示
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="hover">
                    鼠标悬浮时显示
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="never">
                    从不显示
                </el-card>
            </el-col>
        </el-row>
    `
};