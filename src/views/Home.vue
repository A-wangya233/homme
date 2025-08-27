<template>
  <div class="home">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">欢迎来到 Homme Project</h1>
        <p class="hero-subtitle">Vue2 项目示例 - 美观的界面与流畅的用户体验</p>
        <div class="hero-buttons">
          <router-link to="/new-colSbj" class="btn btn-primary">
            访问 New-ColSbj
          </router-link>
          <button class="btn btn-secondary" @click="scrollToFeatures">
            了解更多
          </button>
        </div>
      </div>
      <div class="hero-animation">
        <div class="floating-card" v-for="n in 3" :key="n" :style="{ animationDelay: n * 0.5 + 's' }">
          <div class="card-content">
            <h3>特性 {{ n }}</h3>
            <p>现代化的Vue2应用</p>
          </div>
        </div>
      </div>
    </div>

    <div class="features-section" ref="features">
      <div class="container">
        <h2 class="section-title">项目特色</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      features: [
        {
          id: 1,
          icon: '🚀',
          title: 'Vue Router',
          description: '使用Vue Router实现单页面应用的路由功能，提供流畅的页面切换体验。'
        },
        {
          id: 2,
          icon: '🎨',
          title: '现代化UI',
          description: '采用现代化的设计语言，包含渐变背景、毛玻璃效果和流畅的动画。'
        },
        {
          id: 3,
          icon: '📱',
          title: '响应式设计',
          description: '完全响应式的设计，在各种设备上都能提供完美的用户体验。'
        },
        {
          id: 4,
          icon: '⚡',
          title: 'GitHub Pages',
          description: '支持直接部署到GitHub Pages，实现快速的在线项目访问。'
        }
      ]
    }
  },
  methods: {
    scrollToFeatures() {
      this.$refs.features.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 600px;
  z-index: 2;
  color: white;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #e0e7ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeInUp 1s ease-out;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 0.4s both;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
}

.hero-animation {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.floating-card {
  width: 200px;
  height: 120px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin: 20px 0;
  animation: float 3s ease-in-out infinite;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 1.5rem;
  color: white;
  text-align: center;
}

.card-content h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.card-content p {
  font-size: 0.9rem;
  opacity: 0.8;
}

.features-section {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 4rem 0;
  margin-top: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 3rem;
  font-weight: 600;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  color: white;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-card p {
  opacity: 0.9;
  line-height: 1.6;
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-animation {
    position: relative;
    right: auto;
    top: auto;
    transform: none;
    margin-top: 2rem;
  }
  
  .floating-card {
    width: 150px;
    height: 100px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
