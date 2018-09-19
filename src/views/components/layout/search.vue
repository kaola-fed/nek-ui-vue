<template>
    <div class="kl-content">
        <h2 class="kl-content__title">筛选区<span>KLSearch</span></h2>
        <div class="kl-content__form-demo">
            <kl-demo title="基本形式">
                <div slot="desc">
                    <p>列表搜索</p>
                </div>
                <div slot="demo">
                    <el-form label-position="top" ref="queryForm" :model="condition">
                        <el-row  :gutter="20">
                            <el-col :span="4">
                                <el-form-item prop="category" label="类目">
                                    <el-input placeholder="请输入" v-model="condition.category"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="type" label="商品类型">
                                    <el-select placeholder="请选择" v-model="condition.type"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="coupon" label="优惠券效果">
                                    <el-select placeholder="请选择" v-model="condition.coupon"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="result" label="搜索结果">
                                    <el-select placeholder="请选择" v-model="condition.result"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item is-long prop="time" label="更新时间">
                                    <el-date-picker
                                    v-model="condition.time"
                                    format="yyyy/MM/dd"
                                    type="daterange"
                                    range-separator="~"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="brand" label="商品品牌">
                                    <el-input placeholder="请输入" v-model="condition.brand"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="warehouse" label="仓库名称">
                                    <el-input placeholder="请输入" v-model="condition.warehouse"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="name" label="商品名称">
                                    <el-input placeholder="请输入" v-model="condition.name"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="price" label="售价区间">
                                    <el-input placeholder="请输入" v-model="condition.price"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item is-long prop="searchValue" label="查询类型">
                                    <el-input placeholder="请输入内容" v-model="condition.searchValue">
                                        <el-select class="list-type-select" v-model="condition.searchType" slot="prepend">
                                            <el-option label="货号" value="goodsId"/>
                                            <el-option label="单号" value="orderId"/>
                                        </el-select>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="goodState" label="商品状态">
                                    <el-input placeholder="请输入" v-model="condition.goodState"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="sku" label="SKU">
                                    <el-input placeholder="请输入" v-model="condition.sku"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="4">
                                <el-form-item prop="" label="">
                                    <div style="margin-top: 25px;">
                                        <el-button type="primary" @click="search">查询</el-button>
                                        <el-button @click="reset">重置</el-button>
                                    </div>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div slot="code">
                    <kl-code lang="html" slot="code">{{ code.base }}</kl-code>
                </div>
            </kl-demo>
        </div>
        <div class="kl-content-table">
            <h1>
                <a href=""  title="API">
                    无API，参照用例保证交互样式相同即可。超出3行后需要隐藏查询条件，多出展开按钮。参考demo页面。
                </a>
            </h1>
        </div>
        <div class="kl-content-next">
            <router-link :to="{ name: 'KLRow'}"  class="kl-content-next__pager">
                <span class="icon"><i class="el-icon-arrow-left"></i></span>
                <span>栅格布局</span>
            </router-link >
            <span class="placeholder"></span>
            <router-link :to="{ name: 'KLTable'}" class="kl-content-next__pager">
                <span>表格</span>
                <span class="icon"><i class="el-icon-arrow-right"></i></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Code from '@/code/layout/search';

export default {
    name: 'kL-search',
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
            code: Code,
            tableData: Array(20).fill(item)
        };
    },
    methods: {
        search() {
            console.log(this);
        },
        reset() {
            const { queryForm } = this.$refs;
            if (queryForm) {
                queryForm.resetFields();
            }
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.list-type-select {
    width: 80px;
}
</style>