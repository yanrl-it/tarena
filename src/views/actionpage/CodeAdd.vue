<template>
  <div class="code-add">
    <div class="add-title">添加成员</div>
    <div style="width: 337px;"><search-box :placeholder="'请输入编码器名称/MAC地址/IP'" @searchClick="search"></search-box></div>
    <div style="margin-top: 20px;">
      <code-table :tableHeight="'height:456px;'" :tableData="codeData" :dataList="dataList"></code-table>
    </div>
    <div style="margin-top: 20px;">
      <ul class="code-btn">
        <li>确定</li>
        <li style="margin-left: 84px; background-color: #5d5d5d;">取消</li>
      </ul>
    </div>
  </div>
</template>

<script>
import SearchBox from '../../components/SearchBox'
import CodeTable from '../../components/CodeTable'

export default {
  components: {
    SearchBox,
    CodeTable
  },
  data() {
    return {
      dataList: [
        {'type': 'selection', 'prop': '', 'label': '', 'width': '81'},
        {'type': '', 'prop': 'codeName', 'label': '编码器名称', 'width': '196'},
        {'type': '', 'prop': 'codeMac', 'label': 'MAC地址', 'width': '246',},
        {'type': '', 'prop': 'codeIp', 'label': 'IP', 'width': '241', 'ope': 1}
      ],
      codeData: [
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'},
        {codeName: '编码器1', codeMac: '56:AF:8J:37:FT:31', codeIp: '172.168.110.101'}
      ]
    }
  },
  methods: {
    search(inner) {
      console.log(inner)
    }
  }
}
</script>

<style scoped>
.code-add {
  width: 848px;
  height: 667px;
  margin: 117px auto;
  padding: 30px;
  box-sizing: border-box;
  background-color: #1f3147;
  border-radius: 4px;
}
.add-title {
  text-align: center;
	font-size: 16px;
  color: #ffffff;
  padding-bottom: 30px;
}
.code-btn {
  display: flex;
   justify-content: center;
}
.code-btn li {
	width: 90px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
	background-color: #0fb79c;
  border-radius: 2px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}
</style>