<template>
  <el-row type="flex" class="body" justify="center">
    <el-col :span="6">
      <div class="right">
        <div class="leftList">
          <ul class="bq" v-for="(item,index) in placeList"
          :key="index">
            <li>
              <span>
                {{item.type}}
                <i>></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="rightList">
          <ul>
            <li v-for="(item,index) in fjList"
            :key="index">
              <i>{{item.length}}</i>
              <a href="#">{{item.city}}</a>
              <a href="#">{{item.desc}}</a>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="left"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      placeList: [],
      fjList:[]
    };
  },
  mounted() {
    this.$axios({
      url: "posts/cities",
      data: this.data
    }).then(res => {
      console.log(res.data.data);
      this.placeList = res.data.data;
    });
  }
};
</script>

<style scoped lang="less">
.body {
  max-width: 1000px;
  margin: 0 auto;
  min-height: 1000px;
  padding-top: 20px;
  position: relative;
}
.leftList {
  .bq {
    li {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ccc;
      span {
        margin-left: 20px;
        :hover {
          color: red;
        }
        i {
          margin-left: 135px;
          font-size: 20px;
        }
      }
    }
    :nth-child(1) {
      :hover {
        color: red;
      }
    }
  }
}
.rightList {
  padding: 10px 0;
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  position: absolute;
  top: 20px;
  left: 250px;
  li {
    height: 30px;
    line-height: 30px;
    i {
      font-size: 25px;
      color: orange;
    }
    a {
      color: orange;
    }
    :nth-child(3) {
      color: #ccc;
    }
  }
}
</style>