let particle;
this.explosionX = "";
this.explosionY = "";


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms)); //sleep関数の定義

/**
 * クリアした際にチェックボックスを光らせる
 * @returns true(異常時にfalse)
 * @param {boolean} clearFlag 呼び出すステージのクリアフラグ ex)clearFlag_1
 * @param {HTMLElement} checkboxId チェックを入れるチェックボックスのid
 * @param {string} x x座標（leftの値）
 * @param {string} y y座標（topの値）
 */
async function checkClearIcon(clearFlag, checkboxId, x, y) {
    await sleep(1000);
    if(!clearFlag) {
        if (!checkboxId) {
            console.log("checkboxId is null");
            return false;
        }
        checkboxId.style.opacity = "1";
        await sleep(800);
        if (particle) {
            particle.start(x, y);
        }
    }

    return true;
}


class ExplosionParticle {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.explosions = [];
        this.options = {
            particleCount: options.particleCount || 30,
            particleSize: options.particleSize || 3,
            particleColor: 'rgb(255, 255, 255)',
            explosionSpeed: options.explosionSpeed || 5,
            ...options
        };
    }

    convertToPx(value) {
        if (typeof value === "number") return value;

        // calc() に対応
        if (value.includes("calc")) {
            // eval は使わない
            let expr = value
                .replace(/calc\(/, "")
                .replace(/\)/, "")
                .replace(/vw/g, `* ${window.innerWidth / 100}`)
                .replace(/vh/g, `* ${window.innerHeight / 100}`)
                .replace(/px/g, "");
            return Function("return " + expr)(); 
        }

        // vw
        if (value.includes("vw"))
            return parseFloat(value) * window.innerWidth / 100;

        // vh
        if (value.includes("vh"))
            return parseFloat(value) * window.innerHeight / 100;

        // px
        if (value.includes("px")) {
            return parseFloat(value);
        }
    }

    start(x, y) {
        this.explosion = []; // 完全リセット
        this.options.explosionX = x;
        this.options.explosionY = y;
        this.clearEvent();
    }

    clearEvent() {
        this.resize();
        this.createExplosion();
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createExplosion() {
        const x = this.convertToPx(this.options.explosionX);
        const y = this.convertToPx(this.options.explosionY);
        const particles = [];
        for (let i = 0; i < this.options.particleCount; i++) {
            const angle = (Math.PI * 2 * i) / this.options.particleCount;
            const velocity = Math.random() * this.options.explosionSpeed + 2;
            
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * velocity,
                vy: Math.sin(angle) * velocity,
                size: Math.random() * this.options.particleSize + 1,
                life: 1,
                decay: Math.random() * 0.02 + 0.01
            });
        }
        
        this.explosions.push(particles);
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 爆発パーティクルの更新
        this.explosions.forEach((explosion, explosionIndex) => {
            explosion.forEach((particle, particleIndex) => {
                // 重力効果
                // particle.vy += 0.1;
                
                // 位置更新
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // 寿命減少
                particle.life -= particle.decay * 1.5;
                
                // 粒子の描画
                if (particle.life > 0) {
                    this.ctx.beginPath();
                    this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.life})`;
                    this.ctx.fill();
                }
            });
            
            // 寿命が尽きた爆発を削除
            if (explosion.every(particle => particle.life <= 0)) {
                this.explosions.splice(explosionIndex, 1);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    particle = new ExplosionParticle(canvas, {
        particleCount: 50,
        particleSize: 3,
        particleColor: 'rgb(255, 255, 255)',
        explosionSpeed: 3
    });

    particle.animate();
});
