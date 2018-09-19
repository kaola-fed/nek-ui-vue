export default {
    base: `
        <el-button type="primary">主按钮</el-button>
        <el-button>次按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
        <el-button disabled>次按钮</el-button>
        <el-button plain icon="el-icon-search">搜索</el-button>
        <el-button plain disabled>朴素按钮</el-button>
        <el-button type="primary" :loading="true">加载中</el-button>
    `
};