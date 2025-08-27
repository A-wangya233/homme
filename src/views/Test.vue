<template>
  <div class="test-page">
    <h1>🧪 测试页面</h1>
    <p>如果您能看到这个页面，说明Vue路由工作正常！</p>
    <div class="test-info">
      <h3>当前路由信息：</h3>
      <p><strong>路径：</strong>{{ $route.path }}</p>
      <p><strong>名称：</strong>{{ $route.name }}</p>
    </div>
    <div class="test-links">
      <h3>测试导航：</h3>
      <router-link to="/" class="test-btn">回到首页</router-link>
      <router-link to="/new-colSbj" class="test-btn">Vue版页面</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
  mounted() {
    console.log('测试页面已加载！')
    console.log('当前路由：', this.$route)
  }
}
</script>

<style scoped>
.test-page {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  color: white;
  text-align: center;
}

.test-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0;
}

.test-links {
  margin-top: 2rem;
}

.test-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.test-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}
</style>
