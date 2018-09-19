export default {
    base: `
        <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        export default {
            data() {
                return {
                    active: 1
                };
            },
            methods: {
                next() {
                    if(this.active++ > 2) {
                        this.active = 1;
                    }
                }
            }
        };
    `,
    desc: `
        <el-steps :active="active1">
            <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
            <el-step title="步骤 3" description="这段就没那么长了"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next1">下一步</el-button>
        export default {
            data() {
                return {
                    active1: 0
                };
            },
            methods: {
                next1() {
                    if(this.active1++ > 2) {
                        this.active1 = 0;
                    }
                }
            }
        };
    `,
    vertical: `
        <el-steps direction="vertical" :active="active2">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
        <el-button style="margin-top: 12px;" @click="next2">下一步</el-button>
        export default {
            name: 'kL-pager',
            data() {
                return {
                    active2: 0
                };
            },
            methods: {
                next2() {
                    if(this.active2++ > 2) {
                        this.active2 = 0;
                    }
                }
            }
        };
    `
};