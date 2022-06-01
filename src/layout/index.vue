<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
          <router-link v-for="item in titles" :key="item" active-class="active" :to=item.name >
            <el-menu-item >
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <app-stack />
      </el-col>
    </el-row>
  </div>

</template>

<script>
import AppStack from "@/views/appstack/AppStack";

export default {
  name: "UserLogin",
  components:{
    AppStack
  },
  data() {
    return {
      titles: [
        {
          name: 'webhome',
          title: '持续交付'
        },
        {
          name: 'webhome2',
          title: '制品仓库'
        },
        {
          name: 'webhome3',
          title: '流水线'
        },
        {
          name: 'webhome4',
          title: '工单管理'
        },
      ]
    }
  },
  created() {
    if (window.name) {
      this.titles = [{name: 'webhome', title: "Home"}]
    } else {
      console.log('#')
    }
  }
  // components: {
  //   webHome
  // }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
