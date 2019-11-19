<template>
  <div class="dashboard-box">
    <el-row :gutter="20">
      <el-col :span="11">
        <ul class="dashboard-item">
          <li><title-pag :title="'集成状态'"></title-pag></li>
          <li class="item-content">
            <ul class="item-content-box">
              <li>
                <div style="height: 178px;width: 178px;">
                  <circle-progress
                    :id="1"
                    barColor="#2fd6bb"
                    backgroundColor="#2f4157"
                    :width="178"
                    :height="178"
                    :radius="14"
                    :progress="onCodePro"
                    :isAnimation="false"></circle-progress>
                </div>
              </li>
              <li class="encode-des">
                <ul>
                  <li><span>编码器数量：</span>{{codeNum}}</li>
                  <li><span>在线编码器数量：</span>{{onCodeNum}}</li>
                  <li><span>编码器在线率：</span>{{onCodePro}}</li>
                  <li><span>编码器上行流量：</span>{{codeUp}} Mbps</li>
                  <li><span>编码器下行流量：</span>{{codeDown}} Mbps</li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="code-status">
            <div><i></i><span>在线</span></div>
            <div><i style="backgroundColor:#5d5d5d;"></i><span>下线</span></div>
          </li>
        </ul>
      </el-col>
      <el-col :span="13"><div class="">
        <ul class="dashboard-item">
          <li><title-pag :title="'实时流量'"></title-pag></li>
          <li></li>
        </ul>
        </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <ul class="serverStatus">
          <li><title-pag :title="'服务器状态'"></title-pag></li>
          <li>
            <ul class="serverStatus-list">
              <li>
                <div style="height: 178px;width: 178px;">
                  <circle-progress
                    :id="2"
                    barColor="#1f7fd7"
                    backgroundColor="#2f4157"
                    :width="178"
                    :radius="14"
                    :progress="cpuStatus"
                    :isAnimation="false"></circle-progress>
                </div>
                <div class="serverStatus-item-title">CPU状态</div>
              </li>
              <li>
                <div style="height: 178px;width: 178px;">
                  <circle-progress
                    :id="3"
                    barColor="#218240"
                    backgroundColor="#2f4157"
                    :width="178"
                    :radius="14"
                    :progress="storageStatus"
                    :isAnimation="false"></circle-progress>
                </div>
                <div class="serverStatus-item-title">内存状态</div>
              </li>
              <li>
                <div style="height: 178px;width: 178px;">
                  <circle-progress
                    :id="4"
                    barColor="#218240"
                    backgroundColor="#2f4157"
                    :width="178"
                    :radius="14"
                    :progress="storageStatus"
                    :isAnimation="false"></circle-progress>
                </div>
                <div class="serverStatus-item-title">服务器温度</div>
              </li>
            </ul>
          </li>
        </ul>
      </el-col>
    </el-row>
    <footer-content></footer-content>
  </div>
</template>

<script>
import CircleProgress from 'vue-circleprogressbar'
import TitlePag from '../components/TitlePag'
import FooterContent from '../components/Footer'

export default {
  components: {
    CircleProgress,
    TitlePag,
    FooterContent
  },
  data() {
    return {
      codeNum: 0,       //编码器数量
      onCodeNum: 0,     //在线编码器数量
      onCodePro: 80,    //编码器在线率
      codeUp: 0,        //编码器上行流量
      codeDown: 0,      //编码器下行流量
      cpuStatus: 40,
      storageStatus: 38
      // title: ''
    }
  },
  created () {
    // this.onCodePro = 0;
    //   var that = this;
    //   var timer = setInterval(function () {
    //     that.onCodePro = parseInt(that.onCodePro) + 5;
    //     // console.log(that.progress);
    //     if (that.onCodePro == 100) {
    //       if (that.onCodePro == "100") {
    //         that.dialogComputedVisible = false;
    //       }
    //       clearInterval(timer);
    //     }
    //   }, 200); 
  },
  methods: {
  }
}
</script>

<style scoped>
.dashboard-item {
  height: 339px;
	background-color: #1f3147;
  border-radius: 4px;
  padding: 20px 30px;
  box-sizing: border-box;
  -moz-box-sizing: border-box; /* Firefox */
}
.item-content .item-content-box {
  display: flex;
  padding-top: 50px;
  padding-left: 88px;
}
.item-content-box .encode-des {
  padding-left: 75px;
}
.encode-des ul li {
	font-size: 16px;
	line-height: 36px;
	color: #afafaf;
}
.encode-des ul li span {
  display: inline-block;
  width: 150px;
  text-align: right;
}
.code-status, .code-status div {
  display: flex;
  align-items:center;
}
.code-status {
  margin-top: 30px;
  padding-left: 108px;
}
.code-status div {
  width: 89px;
}
.code-status div i {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #28d2be;
}
.code-status div span {
  font-size: 14px;
  padding-left: 15px;
}
.serverStatus {
  margin-top: 20px;
  box-sizing: border-box;
  background-color: #1f3147;
  padding-top: 20px;
  padding-left: 30px;
  height: 365px;
}
.serverStatus-list {
  display: flex;
  justify-content: center;
  padding-top: 53px;
}
.serverStatus-list li {
  width: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.serverStatus-item-title {
  margin-top:  35px;
  font-size: 14px;
}
</style>