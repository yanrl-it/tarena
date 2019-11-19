<template>
  <div class="equipment-box">
    <el-row :gutter="14">
      <el-col :span="4">
        <div class="equipment-box-item">
          <div class="pag-item">
            <title-pag :title="'编码器分组'"></title-pag>
          </div>
          <div class="" style="margin-left: 20px;margin-top: 20px;width: 82%;">
            <search-box :placeholder="'请输入内容'" @searchClick="search"></search-box>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
            background-color="#1f3147"
            text-color="#afafaf"
            active-text-color="#28d2be">
            <el-submenu index="0">
              <template slot="title">
                <span>全部</span>
              </template>
              <div class="group-box scroll-bar">
                <el-submenu index="1">
                  <template slot="title">
                    <span>鼓楼区</span>
                  </template>
                  <el-submenu index="1-1">
                    <template slot="title">
                      <span>广州路</span>
                    </template>
                    <el-menu-item index="1-1-1">选项1</el-menu-item>
                    <el-menu-item index="1-1-2">选项2</el-menu-item>
                  </el-submenu>

                  <el-submenu index="1-2">
                    <template slot="title">
                      <span>建邺路</span>
                    </template>
                    <el-menu-item index="1-2-1">选项2</el-menu-item>
                    <el-menu-item index="1-2-2">选项3</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <span>鼓楼区</span>
                  </template>
                  <el-submenu index="2-1">
                    <template slot="title">
                      <span>广州路</span>
                    </template>
                    <el-menu-item index="2-1-1">选项1</el-menu-item>
                    <el-menu-item index="2-1-2">选项2</el-menu-item>
                  </el-submenu>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <span>鼓楼区</span>
                  </template>
                  <el-submenu index="3-1">
                    <template slot="title">
                      <span>广州路</span>
                    </template>
                    <el-menu-item index="3-1-1">选项1</el-menu-item>
                    <el-menu-item index="3-1-2">选项2</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </div>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="equipment-box-item equipment-item-rt">
          <title-pag :title="'编码器列表'"></title-pag>
          <div class="nav-equ">
            <div class="search-box" style="width: 337px;">
              <search-box :placeholder="'请输入编码器IP/名称'" @searchClick="search"></search-box>
            </div>
            <div class="equ-status">
              <span>设备状态</span>
              <div class="status-select">
                <i style="width:22px" v-if="selectValue == '全部'"></i>
                <i class="dot-status-1" v-else-if="selectValue == '在线'"></i>
                <i class="dot-status-0" v-else-if="selectValue == '离线'"></i>
                <el-select v-model="selectValue" placeholder="全部">
                  <el-option value="全部"><span style="padding-left: 22px;">全部</span></el-option>
                  <el-option value="在线"><i class="dot-status-1"></i><span>在线</span></el-option>
                  <el-option value="离线"><i class="dot-status-0"></i><span>离线</span></el-option>
                </el-select>
              </div>
            </div>
            <div class="equ-ope">
              <ul>
                <li class="equ-reset"><i class="el-icon-refresh-left"></i>刷新</li>
                <li><router-link :to="{path:'/CodeAdd'}"><button>添加成员</button></router-link></li>
                <li class="bulk-operation">
                  <el-dropdown>
                    <button>批量操作<i class="el-icon-arrow-down el-icon--right"></i></button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>配置导出</el-dropdown-item>
                      <el-dropdown-item>陪住导入</el-dropdown-item>
                      <el-dropdown-item>批量升级</el-dropdown-item>
                      <el-dropdown-item>批量重启</el-dropdown-item>
                      <el-dropdown-item>恢复出厂设置</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </li>
              </ul>
            </div>
          </div>
          <div style="padding-top:20px;">
            <code-table :tableHeight="'height:596px;'" :tableData="codeData" :dataList="dataList"></code-table>
          </div>
          <!-- <div class="code-list-box scroll-bar">
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" 
              style="width: 100%" stripe 
              @selection-change="handleSelectionChange">
              <el-table-column type="selection" width="44"></el-table-column>
              <el-table-column prop="codeName" label="编码器名称" width="98">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="codeMac" label="MAC地址" width="158" height="38"></el-table-column>
              <el-table-column prop="codeIp" label="IP" width="148"></el-table-column>
              <el-table-column prop="cpuStatus" label="CPU状态" width="88"></el-table-column>
              <el-table-column prop="storageStatus" label="内存状态" width="88"></el-table-column>
              <el-table-column prop="flowUp" label="上行流量(Mbps)" width="116"></el-table-column>
              <el-table-column prop="flowDown" label="下行流量(Mbps)" width="116"></el-table-column>
              <el-table-column prop="temp" label="温度(℃)" width="64"></el-table-column>
              <el-table-column prop="codeStatus" label="状态" width="82"></el-table-column>
              <el-table-column label="操作" width="172">
                <span>退出分组</span>
                <span>详情</span>
              </el-table-column>
            </el-table>
          </div> -->
        </div>
      </el-col>
    </el-row>
    <footer-content></footer-content>
  </div>
</template>

<script>
import TitlePag from '../components/TitlePag'
import SearchBox from '../components/SearchBox'
import CodeTable from '../components/CodeTable'
import FooterContent from '../components/Footer'

export default {
  components: {
    TitlePag,
    SearchBox,
    CodeTable,
    FooterContent
  },
  data() {
    return {
      inputList: '',
      inputInner: '',
      selectValue: '全部',
      dataList: [
        {'type': 'selection', 'prop': '', 'label': '', 'width': '44'},
        {'type': '', 'prop': 'codeName', 'label': '编码器名称', 'width': '98'},
        {'type': '', 'prop': 'codeMac', 'label': 'MAC地址', 'width': '158'},
        {'type': '', 'prop': 'codeIp', 'label': 'IP', 'width': '148'},
        {'type': '', 'prop': 'cpuStatus', 'label': 'CPU状态', 'width': '88'},
        {'type': '', 'prop': 'storageStatus', 'label': '内存状态', 'width': '88'},
        {'type': '', 'prop': 'flowUp', 'label': '上行流量(Mbps)', 'width': '116'},
        {'type': '', 'prop': 'flowDown', 'label': '下行流量(Mbps)', 'width': '116'},
        {'type': '', 'prop': 'temp', 'label': '温度(℃)', 'width': '64'},
        {'type': '', 'prop': 'codeStatus', 'label': '状态', 'width': '82', 'ope': 0},
      ],
      codeData: [
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101', cpuStatus: 60, storageStatus: 50, flowUp: 1999, flowDown: 30, temp: 59, codeStatus: 0},
      ],
      multipleSelection: []
    }
  },
  created () {

  },
  methods: {
    search(inner) {
      console.log(inner)
    },
    handleSelect(key, keyPath) {
      console.log('aaa', key);
    },
    handleOpen(key, keyPath) {
    //   console.log('ccc', key, keyPath);
    },
    handleClose(key, keyPath) {
    //   console.log('vvv', key, keyPath);
    }
  }
}
</script>

<style scoped>
.pag-item {
  padding-top: 20px;
  padding-left: 20px;
}
.equipment-box .equipment-box-item {
  height: 726px;
  background-color: #1f3147;
  font-size: 14px;
  box-sizing: border-box;
  /* padding: 20px 30px; */
}
.equipment-item-rt {
  padding: 20px 30px;
}
.el-menu {
  border: 0;
}
.group-box {
  height: 600px;
  overflow-y:auto;
}
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

.nav-equ {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.dot-status-1 {
  display: inline-block;
  width: 12px;
	height: 12px;
  background-color: #28d2be;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: inset 1px 1px 2px 0px rgba(9, 8, 9, 0.12);
}
.dot-status-0 {
  display: inline-block;
  width: 12px;
	height: 12px;
  background-color: #5d5d5d;
  border-radius: 50%;
  margin-right: 10px;
  box-shadow: inset 1px 1px 2px 0px rgba(9, 8, 9, 0.12);
}
.status-select {
  border: solid 1px rgba(255, 255, 255, 0.07);
  background-color: #182633;
  display: flex;
  align-items: center;
  width: 130px;
  box-sizing: border-box;
  padding-left: 15px;
  margin-left: 30px;
}
.equ-status {
  display: flex;
  align-items: center;
  padding-left: 50px;
}
.equ-ope ul {
  display: flex;
  align-items: center;
  margin-left: 260px;
}
.equ-ope ul li.equ-reset {
  color: #ffffff;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.equ-ope ul li.equ-reset:hover {
  color: #28d2be;
}
.equ-ope ul li.equ-reset:active {
  color: #ffffff;
}
.equ-ope ul li.equ-reset i {
  font-size: 22px;
  margin-right: 10px;
}
.equ-ope ul li button {
  display: inline-block;
  width: 96px;
	height: 32px;
	background-color: #0fb79c;
  border-radius: 2px;
  white-space: nowrap;
  cursor: pointer;
  border: 0;
  color: #ffffff;
  margin-left: 20px;
  -webkit-appearance: none;
  outline: none;
  transition: .1s;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  font-size: 14px;
  font-family: PingFang-SC-Regular;
}
.equ-ope ul li button:active {
	background-color: #1fd09b;
}
.el-dropdown-menu {
  background-color: #2f3d4b;
  border-radius: 4px;
  border: 0;
}
.el-dropdown-menu__item {
  padding: 0;
  width: 96px;
  text-align: center;
}
.el-dropdown-menu__item:hover {
  background-color: #0fb79c;
}
</style>