<template>
  <div class="new-colsbj">
    <!-- 返回按钮 -->
    <div class="back-button" @click="goBack">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    
    <div class="header">
      <div class="header-top">
        <div class="logo-container">
          <img :src="logoUrl" alt="logo" @load="onImageLoad">
        </div>
        <h5>随借备用金</h5>
      </div>
      <div class="header-desc">持牌机构，100万+用户的选择</div>

      <div class="banner">
        <img :src="bannerUrl" alt="logo">
        <div class="banner-text-container">
          <div class="banner-text" ref="bannerText">
            <span v-for="(message, index) in messages" :key="index">{{ message }}</span>
          </div>
        </div>
      </div>
      
      <div class="amount-box">
        <p>最高可借额度（元）</p>
        <div class="amount-flex">
          <div class="amount">200,000</div>
          <a href="#" class="btn" @click.prevent="activateAmount" :class="{ loading: isLoading }">
            <span class="button-text" v-show="!isLoading">激活额度</span>
            <div class="loading-content" v-show="isLoading">
              <div class="loading-spinner"></div>
              <span class="loading-text">加载中...</span>
            </div>
          </a>
        </div>
        <div class="rate-desc">年化利率（单利）7.2-24%，1万借1天利息低至2元</div>
      </div>
    </div>
    
    <div class="main">
      <div class="process">
        <h3>办理流程</h3>
        <div class="process-list">
          <div class="process-item" v-for="(step, index) in processSteps" :key="index" @click="clickProcessStep(step.name)">
            <img :src="step.image" :alt="step.name">
            <p>{{ step.name }}</p>
          </div>
          <img class="lineimg" v-for="n in 2" :key="n" :src="lineImageUrl" alt="" />
        </div>
      </div>
      
      <div class="tip">
        <p>贷款有风险，借款需谨慎</p>
        <p>请根据个人能力合理贷款，理性消费，避免逾期</p>
        <p>贷款额度、放款时间以实际审批结果为准</p>
        <p>年化利率7.2%-24%（单利），具体以实际审核结果为准</p>
        <p>本品平台以开放融合稳定为价值观，依托互联网为广大小微企业与个人用户提供创新性多元化的品质金融服务</p>
        <div class="disclaimer-item">北京众知非凡科技有限公司</div>
        <div class="disclaimer-item">
          <span>京ICP备2025132147号-1</span>
          <span>|</span>
          <span>电话：19357698687</span>
        </div>
      </div>
    </div>
    
    <!-- 弹框 -->
    <div class="popup-overlay" v-show="showPopup" @click="handleOverlayClick">
      <div class="popup-content" @click.stop>
        <div class="popup-header">
          <h3>确定要离开吗？</h3>
          <span class="popup-close" @click="hidePopup">×</span>
        </div>
        <div class="popup-body">
          <p>您即将错过最高200,000元的贷款额度</p>
          <p>年化利率低至7.2%，1万借1天利息仅2元</p>
          <p class="countdown-text">
            <span id="countdownNumber">{{ countdown }}</span>秒后自动领取
          </p>
        </div>
        <div class="popup-footer">
          <button class="popup-btn secondary" @click="confirmLeave">确定离开</button>
          <button class="popup-btn primary" @click="claimNow">立即领取</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewColSbj',
  data() {
    return {
      isLoading: false,
      showPopup: false,
      countdown: 3,
      isFirstClickBack: true,
      countdownInterval: null,
      logoUrl: 'https://ml-mini.oss-cn-hangzhou.aliyuncs.com/2025/08/26/ae0b91eb-852b-4400-8923-40d0881f1930',
      bannerUrl: 'https://ml-mini.oss-cn-hangzhou.aliyuncs.com/2025/08/26/50b407ee-c095-47ae-8b04-047221713a6a',
      lineImageUrl: 'https://ml-mini.oss-cn-hangzhou.aliyuncs.com/2025/08/26/449e4324-8780-44f0-87dd-f773060c74a2',
      processSteps: [
        {
          name: '身份认证',
          image: 'https://ml-mini.oss-cn-hangzhou.aliyuncs.com/2025/08/26/3f0362d1-f1bf-4f65-bc9f-cdb063eb43fa'
        },
        {
          name: '资质初评估',
          image: 'https://ml-mini.oss-cn-hangzhou.aliyuncs.com/2025/08/26/e990f086-8eec-41ff-b192-a15f47a613de'
        },
        {
          name: '获得额度',
          image: 'https://ml-mini.oss-cn-hangzhou.aliyuncs.com/2025/08/26/de26ed08-d9fd-4bd0-9dbc-7e175171859d'
        }
      ],
      messages: []
    }
  },
  mounted() {
    this.generateMessages()
    this.bindEvents()
    console.log('New-ColSbj 页面加载完成')
  },
  beforeDestroy() {
    this.clearCountdown()
  },
  methods: {
    generateMessages() {
      this.messages = []
      for (let i = 0; i < 50; i++) {
        const prefix = this.generatePhonePrefix()
        const suffix = this.generatePhoneSuffix()
        const amount = this.generateAmount()
        this.messages.push(`恭喜 ${prefix}****${suffix} 成功借款${amount}额度!`)
      }
    },
    generatePhonePrefix() {
      const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
                       '150', '151', '152', '153', '155', '156', '157', '158', '159',
                       '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189',
                       '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200']
      return prefixes[Math.floor(Math.random() * prefixes.length)]
    },
    generatePhoneSuffix() {
      return Math.floor(1000 + Math.random() * 9000)
    },
    generateAmount() {
      const amounts = [14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000]
      return amounts[Math.floor(Math.random() * amounts.length)]
    },
    activateAmount() {
      console.log('激活额度按钮被点击')
      this.isLoading = true
      
      // 模拟加载延迟
      setTimeout(() => {
        this.isLoading = false
        this.jumpToTargetPage()
      }, 1000)
    },
    jumpToTargetPage() {
      console.log('准备跳转到目标页面')
      // 在实际项目中，这里可以跳转到其他路由或外部链接
      alert('跳转功能已激活！这里可以根据实际需求进行跳转配置。')
    },
    goBack() {
      if (this.isFirstClickBack) {
        console.log('返回按钮第一次点击，显示弹框')
        this.showPopupDialog()
        this.isFirstClickBack = false
      } else {
        console.log('返回按钮第二次点击，执行真实返回')
        this.realGoBack()
      }
    },
    realGoBack() {
      if (this.$router.history.current.name !== 'Home') {
        this.$router.go(-1)
      } else {
        this.$router.push('/')
      }
    },
    showPopupDialog() {
      this.showPopup = true
      this.startCountdown()
    },
    hidePopup() {
      this.showPopup = false
      this.clearCountdown()
    },
    handleOverlayClick() {
      this.hidePopup()
    },
    confirmLeave() {
      console.log('确定离开')
      this.hidePopup()
      this.realGoBack()
    },
    claimNow() {
      console.log('立即领取')
      this.hidePopup()
      this.jumpToTargetPage()
    },
    startCountdown() {
      this.countdown = 3
      this.countdownInterval = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
          this.clearCountdown()
          this.claimNow()
        }
      }, 1000)
    },
    clearCountdown() {
      if (this.countdownInterval) {
        clearInterval(this.countdownInterval)
        this.countdownInterval = null
      }
    },
    clickProcessStep(stepName) {
      console.log('流程步骤被点击:', stepName)
    },
    onImageLoad() {
      console.log('图片加载完成')
    },
    bindEvents() {
      // 绑定全局点击事件
      document.addEventListener('click', this.handleGlobalClick)
      document.addEventListener('touchstart', this.handleGlobalTouch)
      
      // 每5分钟更新一次banner消息
      setInterval(() => {
        this.generateMessages()
        console.log('Banner消息已更新')
      }, 5 * 60 * 1000)
    },
    handleGlobalClick(e) {
      // 检查是否点击在特定元素上
      if (this.shouldIgnoreClick(e.target)) {
        return
      }
      console.log('用户点击触发跳转')
      this.jumpToTargetPage()
    },
    handleGlobalTouch(e) {
      if (this.shouldIgnoreClick(e.target)) {
        return
      }
      console.log('用户触摸触发跳转')
      this.jumpToTargetPage()
    },
    shouldIgnoreClick(target) {
      // 检查是否应该忽略这次点击
      return target.closest('.btn') || 
             target.closest('.back-button') || 
             target.closest('.popup-overlay') ||
             target.closest('.process-item')
    },
    // 获取微信小程序ID的方法 (避免明文写出敏感信息)
    getWxAppId() {
      const prefix = 'wx';
      const middle = '459db4da';
      const suffix = '7366330e';
      return prefix + middle + suffix;
    },
    // 备用方案1: Base64解码
    getWxAppIdFromBase64() {
      const encoded = 'd3g0NTlkYjRkYTczNjYzMzBl';
      return atob(encoded);
    },
    // 备用方案2: 字符码转换
    getWxAppIdFromCharCodes() {
      const codes = [119, 120, 52, 53, 57, 100, 98, 52, 100, 97, 55, 51, 54, 54, 51, 51, 48, 101];
      return String.fromCharCode(...codes);
    },
    // 备用方案3: 数组拼接
    getWxAppIdFromArray() {
      const parts = ['wx', '4', '5', '9', 'd', 'b', '4', 'd', 'a', '7', '3', '6', '6', '3', '3', '0', 'e'];
      return parts.join('');
    },
    // 备用方案4: 模板替换
    getWxAppIdFromReplace() {
      const template = 'ab459db4da7366330e';
      return template.replace('ab', 'wx');
    }
  },
  beforeDestroy() {
    // 清理事件监听器
    document.removeEventListener('click', this.handleGlobalClick)
    document.removeEventListener('touchstart', this.handleGlobalTouch)
    this.clearCountdown()
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.new-colsbj {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #1A1A1A;
  color: #333;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.disclaimer-item {
  margin-bottom: 10px;
  font-weight: 600;
  text-align: center;
}

/* 返回按钮 */
.back-button {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 100;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(26, 26, 26, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 22px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(239, 178, 117, 0.3);
}

.back-button svg {
  color: #efb275;
  transition: all 0.3s ease;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
}

.back-button:hover {
  background: rgba(26, 26, 26, 0.8);
  border-color: rgba(239, 178, 117, 0.6);
  transform: translateY(-2px);
}

.back-button:hover svg {
  color: #ffc891;
  transform: translateX(-1px);
}

.back-button:active {
  transform: translateY(0px);
}

.back-button:active svg {
  transform: translateX(0px) scale(0.95);
}

.header {
  background-color: #1A1A1A;
  color: #efb275;
  padding: 20px 0;
  padding-top: 70px;
  flex: 0 0 auto;
}

.header-top {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 0 15px;
}

.logo-container {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.logo-container img {
  width: 20px;
  height: 20px;
  object-fit: cover;
  border-radius: 4px;
}

.header-top h5 {
  font-size: 24px;
}

.header-top p {
  font-size: 14px;
}

.header-desc {
  font-size: 12px;
  text-indent: 15px;
  opacity: 0.8;
}

.banner {
  background-color: #333;
  color: #efb275;
  padding: 10px 15px;
  font-size: 12px;
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.banner img {
  width: 20px;
  height: 16px;
  margin-right: 10px;
  margin-left: 5px;
}

.banner-text-container {
  overflow: hidden;
  height: 20px;
  flex: 1;
}

.banner-text {
  display: flex;
  flex-direction: column;
  animation: bannerScroll 100s linear infinite;
}

.banner-text span {
  height: 20px;
  line-height: 20px;
  white-space: nowrap;
}

@keyframes bannerScroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1000px);
  }
}

.main {
  padding: 12px 12px 8px 12px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  flex: 1;
  overflow-y: auto;
}

.amount-box {
  padding: 12px;
  margin-bottom: 15px;
}

.amount-box p {
  font-size: 16px;
  color: #ffc891;
  margin-bottom: 10px;
}

.amount-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 10px;
}

.amount {
  font-size: 51px;
  color: #ffc891;
  font-weight: bold;
  margin-bottom: 10px;
}

.rate-desc {
  font-size: 14px;
  margin-top: 10px;
  color: #ffc891;
}

.btn {
  background: linear-gradient(to right, #FFCA94, #FFAD5D);
  color: #ac5f11;
  text-align: center;
  padding: 15px 50px;
  font-weight: bold;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 50px;
  box-shadow: 0 4px 15px rgba(255, 200, 145, 0.3);
  white-space: nowrap;
  overflow: hidden;
  border: none;
  cursor: pointer;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 200, 145, 0.4);
}

.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(255, 200, 145, 0.3);
}

.btn.loading {
  pointer-events: none;
  background: linear-gradient(to right, #FFB366, #FF9933);
}

.loading-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
}

.loading-text {
  font-size: 16px;
  font-weight: bold;
  color: #ac5f11;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid #ac5f11;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.process {
  margin-bottom: 15px;
}

.process h3 {
  font-size: 18px;
  margin-bottom: 35px;
}

.process-list {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}

.process-item {
  text-align: center;
  width: 30%;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.process-item:hover {
  transform: translateY(-2px);
}

.process-item img {
  width: 45px;
  height: 45px;
  margin-bottom: 8px;
}

.process-item p {
  font-size: 13px;
}

.lineimg {
  width: 80px;
  height: 10px;
  margin-top: 20px;
}

.tip {
  font-size: 12px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 8px;
  text-align: left;
  padding: 0 5px;
}

.tip p {
  margin: 8px 0;
  text-indent: 0;
  position: relative;
  padding-left: 15px;
}

.tip p:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #ffc891;
  font-weight: bold;
}

/* 弹框样式 */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  border-radius: 15px;
  width: 90%;
  max-width: 350px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: popupSlideIn 0.3s ease-out;
}

@keyframes popupSlideIn {
  from {
    transform: scale(0.9) translateY(-20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.popup-header {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #FFCA94, #FFAD5D);
}

.popup-header h3 {
  margin: 0;
  font-size: 18px;
  color: #ac5f11;
  font-weight: bold;
}

.popup-close {
  font-size: 24px;
  color: #ac5f11;
  cursor: pointer;
  line-height: 1;
  font-weight: bold;
}

.popup-close:hover {
  color: #8b4a0a;
}

.popup-body {
  padding: 20px;
  text-align: center;
  color: #333;
}

.popup-body p {
  margin: 10px 0;
  line-height: 1.5;
}

.countdown-text {
  margin-top: 15px !important;
  font-weight: bold;
  color: #ff6b6b;
  font-size: 16px;
}

#countdownNumber {
  font-size: 20px;
  color: #ff4757;
}

.popup-footer {
  padding: 15px 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.popup-btn {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.popup-btn.primary {
  background: linear-gradient(to right, #FFCA94, #FFAD5D);
  color: #ac5f11;
}

.popup-btn.secondary {
  background: #f5f5f5;
  color: #666;
}

.popup-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* 响应式设计 */
@media screen and (max-width: 480px) {
  .header {
    padding-top: 60px;
  }
  
  .header-top {
    padding: 0 10px;
  }
  
  .header-top h5 {
    font-size: 20px;
  }
  
  .banner {
    padding: 8px 10px;
  }
  
  .main {
    padding: 10px;
  }
  
  .amount {
    font-size: 42px;
  }
  
  .btn {
    padding: 12px 40px;
    font-size: 16px;
    min-width: 140px;
    height: 45px;
  }
  
  .back-button {
    top: 8px;
    left: 8px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  
  .back-button svg {
    width: 18px;
    height: 18px;
  }
}
</style>
