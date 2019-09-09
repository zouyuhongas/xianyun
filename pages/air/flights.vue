<template>
    <section class="contianer">
        <el-row  type="flex" justify="space-between">

            <!-- 顶部过滤列表 -->
            <div class="flights-content">
                <!-- 过滤条件 -->

                <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList"/>

                <!-- 航班头部布局 -->
                <FlightsListHead/>


                <!-- 航班信息 -->
                 <FlightsListItem
                 v-for="(item,index) in dataList"
                :key="index"
                :data="item"
                />
           <!-- 分页功能 -->
           <!-- size-change每页条数处点击是触发 -->
           <!-- current-change页数切换时触发 -->
           <!-- current-page当前页数 -->
           <!-- page-size当前显示页数 -->
           <!-- total数据总条数 -->
         <el-pagination
      @size-change="handleSizeChange" 
      @current-change="handleCurrentChange"
      :current-page="pageIndex"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
                  
            </div>
      
            <!-- 侧边栏 -->
            <div class="aside">
                <!-- 侧边栏组件 -->
                <flightsAside/>
            </div>
        </el-row>
    </section>
</template>
<script>
import FlightsListHead from '@/components/air/filghtsListHead.vue'
import FlightsListItem from '@/components/air/FlightsListItem.vue'
import FlightsFilters from '@/components/air/flightsFilters.vue'
import flightsAside from '@/components/air/flightsAside.vue'
export default {
    data() {
        return {
            // 机票返回的总数据,总数据包含4个属性,flights/info/options/tatol
            flightsData:{
                info:{},
                options:{}
            },
            cacheFlightsData:{
                info:{},
                options:{}
            },
            // 当前显示的列表数组
            dataList:[],
            pageIndex:1,
            pageSize:5,
            total:0


        }
    },
    watch:{
        $route(){
            this.getData();
        }
    },
    mounted(){
       this.getData();
    },
      methods: {
          getData(){
              // 请求航班的数据
        this.$axios({
            url:"airs",
            // 路由传参的方法
            params:this.$route.query
        }).then(res=>{
            this.flightsData = res.data
            // 赋值给缓存的总数据
            this.cacheFlightsData = {...res.data}
            // 分页总条数
            this.total = this.flightsData.flights.length
            // 第一页的值
            this.dataList = this.flightsData.flights.slice(0,this.pageSize)
        })
          },
           // 该方法传递给子组件用于修改dataList
        setDataList(arr){
            this.flightsData.flights = arr;
            // console.log(this.flightsData.flights)
            // 按照数学公式切换dataList的值
            // 切换回第一页
            this.pageIndex = 1
            this.dataList = this.flightsData.flights.slice(
                (this.pageIndex -1) * this.pageSize,
                this.pageIndex * this.pageSize
            )
            this.total = arr.length;
        },
      handleSizeChange(val) {
          this.pageSize= val,
          this.dataList = this.flightsData.flights.slice(0,val)

      },
      handleCurrentChange(val) {
              this.pageIndex = val //当前页
              this.dataList = this.flightsData.flights.slice(
              (this.pageIndex-1) * this.pageSize,
              this.pageIndex * this.pageSize
          )
      }
    },
    components:{
        FlightsListHead,
        FlightsListItem,
        FlightsFilters,
        flightsAside
        
    }
}
</script>
<style scoped lang="less">
    .contianer{
        width:1000px;
        margin:20px auto;
    }
    .flights-content{
        width:745px;
        font-size:14px;
    }
    .aside{
        width:240px;
    } 
</style>