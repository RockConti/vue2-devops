<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="6">
          <h3>应用</h3>
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6">
          <el-button plain>新建应用</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main v-for="item in apps" :key="item" >
      <el-card class="box-card" shadow="hover">
        <AppItem />
      </el-card>
    </el-main>
    <el-footer>
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
      </el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import AppItem from "@/views/appstack/AppItem";

export default {
  name: "AppStack",
  components: {
    AppItem
  },
  data() {
    return {
      currentPage: 1,
      apps: [
        {
          img: 'test1',
          name: 'test1',
          description: 'test1',
          Collection: 'test1'
        },
        {
          img: 'test2',
          name: 'test2',
          jieshao: 'test2',
          Collection: 'test2'
        }
      ]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  height: 99%;
  width: 99%;
}
</style>
