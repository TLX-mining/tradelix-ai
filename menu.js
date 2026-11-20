// دالة فتح وإغلاق القائمة الجانبية
function toggleSideMenu() {
    const menu = document.getElementById('sideMenu');
    const overlay = document.getElementById('sideMenuOverlay');
    
    if (menu.style.right === '0px') {
        menu.style.right = '-280px';
        overlay.style.display = 'none';
    } else {
        menu.style.right = '0px';
        overlay.style.display = 'block';
    }
}

// إنشاء القائمة تلقائياً عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    // 1. إنشاء الخلفية المعتمة
    const overlay = document.createElement('div');
    overlay.id = 'sideMenuOverlay';
    overlay.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 9998; backdrop-filter: blur(3px);';
    overlay.onclick = toggleSideMenu;
    document.body.appendChild(overlay);

    // 2. إنشاء القائمة الجانبية
    const menu = document.createElement('div');
    menu.id = 'sideMenu';
    menu.style.cssText = 'position: fixed; top: 0; right: -280px; width: 280px; height: 100%; background: #0d0d0d; z-index: 9999; transition: right 0.3s ease; border-left: 1px solid #F5C518; box-shadow: -5px 0 15px rgba(0,0,0,0.5); padding-top: 20px; display: flex; flex-direction: column;';
    
    // محتوى القائمة
    menu.innerHTML = `
        <div style="padding: 0 20px 20px; border-bottom: 1px solid #222; text-align: center;">
            <h3 style="color: #F5C518; margin: 0; font-size: 18px;"><i class="fa-solid fa-bars"></i> Menu</h3>
        </div>
        <div style="flex: 1; overflow-y: auto;">
            
            <!-- 1. اشتراك العملات الرقمية -->
            <a href="javascript:void(0)" onclick="toggleSideMenu(); if(document.getElementById('plansSection')) document.getElementById('plansSection').scrollIntoView({behavior: 'smooth'});" style="display: flex; align-items: center; padding: 15px 20px; color: #fff; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
                <i class="fa-brands fa-bitcoin" style="color: #F5C518; width: 30px;"></i> Crypto Subscription
            </a>

            <!-- 2. اشتراك الذهب -->
            <a href="gold.html" onclick="toggleSideMenu()" style="display: flex; align-items: center; padding: 15px 20px; color: #fff; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
                <i class="fa-solid fa-coins" style="color: #F5C518; width: 30px;"></i> Gold Subscription
            </a>

            <!-- 3. الفوركس -->
            <a href="gold.html#forex" onclick="toggleSideMenu()" style="display: flex; align-items: center; padding: 15px 20px; color: #fff; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
                <i class="fa-solid fa-chart-line" style="color: #F5C518; width: 30px;"></i> Forex Subscription
            </a>

            <!-- 4. المحفظة (يوجه مباشرة لصفحة المحفظة) -->
            <a href="wallet.html" onclick="toggleSideMenu()" style="display: flex; align-items: center; padding: 15px 20px; color: #fff; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
                <i class="fa-solid fa-wallet" style="color: #F5C518; width: 30px;"></i> Wallet
            </a>

            <!-- 5. الإحالة (بروفايل) -->
            <a href="#" onclick="if(typeof showScreen === 'function') { showScreen('profileScreen'); toggleSideMenu(); } else { alert('Profile not found'); }" style="display: flex; align-items: center; padding: 15px 20px; color: #fff; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
                <i class="fa-solid fa-users" style="color: #F5C518; width: 30px;"></i> Referral
            </a>

            <!-- 6. الكورسات (أكاديمية) -->
            <a href="#" onclick="if(typeof showScreen === 'function') { showScreen('academyScreen'); toggleSideMenu(); } else { alert('Academy not found'); }" style="display: flex; align-items: center; padding: 15px 20px; color: #fff; text-decoration: none; border-bottom: 1px solid #1a1a1a;">
                <i class="fa-solid fa-graduation-cap" style="color: #F5C518; width: 30px;"></i> Courses
            </a>
            
        </div>
        <div style="padding: 20px; text-align: center;">
            <button onclick="toggleSideMenu()" style="background: transparent; border: 1px solid #F5C518; color: #F5C518; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-weight: bold;">Close</button>
        </div>
    `;
    document.body.appendChild(menu);
});