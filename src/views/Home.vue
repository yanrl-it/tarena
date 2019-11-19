<template>
  <div class="home">
    <header-content></header-content>
    <div class="home-box">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Dashboard" name="/Dashboard">
          <!-- <Dashboard></Dashboard> -->
        </el-tab-pane>
        <el-tab-pane label="设备管理" name="/Equipment">
          <!-- <Equipment></Equipment> -->
        </el-tab-pane>
        <el-tab-pane label="系统设置" name="/System"></el-tab-pane>
      </el-tabs>
      <router-view></router-view>
    </div>
    <!-- <div class="group-ope">
      <div class="mask-layer"></div>
      <div class="del">
        <span>是否确认删除分组？</span>
        <div class="ope-btn">
          <div>确定</div>
          <div>取消</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import HeaderContent from './../components/Header'
// import Dashboard from './../views/Dashboard.vue'
// import Equipment from './../views/Equipment.vue'

export default {
  data() {
    return {
      pathUrl: '/Dashboard',
      activeName: '/Dashboard'
    };
  },
  components: {
    HeaderContent,
  },
  created() {
    if (this.$route.path == '/Home') {
      this.$router.push({path: '/Dashboard'});
    } else {
      this.pathUrl = this.$route.path;
      this.activeName = this.$route.path;
    }
  },
  methods: {
    handleClick(tab, event) {
      if (tab.name != this.pathUrl) {
        // console.log(tab.name, event);
        this.$router.push({
          path: tab.name
        });
        this.pathUrl = tab.name;
      }
    }
  }
}
</script>

<style scoped>
.home-box {
  width: 1520px;
  margin: 0 auto;
  color: #b2b7b5;
}
.wrap-progress {
  width: 300px;
}

.mask-layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #182633;
}
.group-ope .del {
	width: 524px;
	height: 320px;
	background-color: #1f3147;
  border-radius: 4px;
  position: fixed;
  top: 0px;
  margin-left:auto;
  margin-right:auto;
  z-index: 999;
}
</style>