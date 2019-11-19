<template>
  <div class="code-table scroll-bar" :style="tableHeight">
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" 
      style="width: 100%" stripe 
      @selection-change="handleSelectionChange">
      <!-- <el-table-column type="selection" width="44"></el-table-column>
      <el-table-column prop="codeName" label="编码器名称" width="98"></el-table-column>
      <el-table-column prop="codeMac" label="MAC地址" width="158"></el-table-column>
      <el-table-column prop="codeIp" label="IP" width="148"></el-table-column>
      <el-table-column prop="cpuStatus" label="CPU状态" width="88"></el-table-column>
      <el-table-column prop="storageStatus" label="内存状态" width="88"></el-table-column>
      <el-table-column prop="flowUp" label="上行流量(Mbps)" width="116"></el-table-column>
      <el-table-column prop="flowDown" label="下行流量(Mbps)" width="116"></el-table-column>
      <el-table-column prop="temp" label="温度(℃)" width="64"></el-table-column>
      <el-table-column prop="codeStatus" label="状态" width="82"></el-table-column> -->
      <el-table-column 
        v-for="(item, i) in dataList"
        :key="i"
        :type="item.type"
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
      </el-table-column>
      <el-table-column v-if="dataList[dataList.length-1].ope == 0" label="操作" width="172">
        <div>
          <span>退出分组</span>
          <span>详情</span>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      multipleSelection: []
    }
  },
  props: ['tableHeight', 'tableData', 'dataList'],
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection)
    }
  }
}
</script>

<style scoped>
.code-table {
  overflow-y: auto;
}
.el-table__expanded-cell {
  background-color: #1c2c3b;
}
.el-table::before {
  display: none;
}
.el-checkbox__input.is-disabled .el-checkbox__inner {
  background-color: #182633;
}
.el-checkbox__inner, .el-checkbox__input{
  width: 20px;
  height: 20px;
  background-color: #182633;
  border-radius: 2px;
  border: solid 1px rgba(255, 255, 255, 0.3);
}
.el-table {
  color: #d3d5d7;
  background-color: #1f3147;
}
.el-table .cell span {
  color: #28d2be;
  margin: 0 8px;
  cursor: pointer;
}
.el-table .cell span:hover {
  color: #ffffff;
}
.el-table .cell span:active {
  color: #28d2be;
}
/* 滚动条 */
.scroll-bar::-webkit-scrollbar {/*滚动条整体样式*/
  width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
  /* scrollbar-arrow-color:red; */
}
.scroll-bar::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 5px;
  /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
  background: #25a39b;
  /* scrollbar-arrow-color:red; */
}
.scroll-bar::-webkit-scrollbar-track {/*滚动条里面轨道*/
  /* -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2); */
  border-radius: 5px;
  background: #3c5b77;
}
</style>