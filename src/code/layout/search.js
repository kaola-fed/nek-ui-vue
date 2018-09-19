export default {
    base: `
        <template>
            <div>
                <el-form label-position="top" ref="queryForm" :model="condition">
                    <kl-search @reset="reset">
                        <el-form-item prop="category" label="类目">
                            <el-input placeholder="请输入" v-model="condition.category"/>
                        </el-form-item>
                        <el-form-item prop="type" label="商品类型">
                            <el-select placeholder="请选择" v-model="condition.type"/>
                        </el-form-item>
                        <el-form-item prop="coupon" label="优惠券效果">
                            <el-select placeholder="请选择" v-model="condition.coupon"/>
                        </el-form-item>
                        <el-form-item prop="result" label="搜索结果">
                            <el-select placeholder="请选择" v-model="condition.result"/>
                        </el-form-item>
                        <el-form-item is-long prop="time" label="更新时间">
                            <el-date-picker
                            v-model="condition.time"
                            format="yyyy/MM/dd"
                            type="daterange"
                            range-separator="~"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"/>
                        </el-form-item>
                        <el-form-item prop="brand" label="商品品牌">
                            <el-input placeholder="请输入" v-model="condition.brand"/>
                        </el-form-item>
                        <el-form-item prop="warehouse" label="仓库名称">
                            <el-input placeholder="请输入" v-model="condition.warehouse"/>
                        </el-form-item>
                        <el-form-item prop="name" label="商品名称">
                            <el-input placeholder="请输入" v-model="condition.name"/>
                        </el-form-item>
                        <el-form-item prop="price" label="售价区间">
                            <el-input placeholder="请输入" v-model="condition.price"/>
                        </el-form-item>
                        <el-form-item is-long prop="searchValue" label="查询类型">
                            <el-input placeholder="请输入内容" v-model="condition.searchValue">
                                <el-select class="list-type-select" v-model="condition.searchType" slot="prepend">
                                    <el-option label="货号" value="goodsId"/>
                                    <el-option label="单号" value="orderId"/>
                                </el-select>
                            </el-input>
                        </el-form-item>
                        <el-form-item prop="goodState" label="商品状态">
                            <el-input placeholder="请输入" v-model="condition.goodState"/>
                        </el-form-item>
                        <el-form-item prop="sku" label="SKU">
                            <el-input placeholder="请输入" v-model="condition.sku"/>
                        </el-form-item>
                    </kl-search>
                </el-form>
            </div>
        </template>
        <script>
        export default {
            data() {
                const item = {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                };
                return {
                    condition: {
                        category: '',
                        type: '',
                        coupon: '',
                        result: '',
                        time: '',
                        brand: '',
                        warehouse: '',
                        name: '',
                        price: '',
                        searchValue: '',
                        searchType: '',
                        goodState: '',
                        sku: ''
                    },
                    tableData: Array(20).fill(item)
                };
            },
            methods: {
                reset() {
                    const { queryForm } = this.$refs;
                    if (queryForm) {
                        queryForm.resetFields();
                    }
                }
            }
        };
        </script>
    `
};