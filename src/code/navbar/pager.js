export default {
    base: `
        <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
        </el-pagination>
        export default {
            data() {
                return {
                    currentPage1: 5,
                    currentPage2: 5,
                    currentPage3: 5,
                    currentPage4: 4
                };
            },
            methods: {
                handleSizeChange(val) {
                    console.log('每页' + val + '条');
                },
                handleCurrentChange(val) {
                    console.log('当前页:' + val);
                }
            }
        };
    `
};