import React, { useEffect, useRef } from 'react';
import '../css/Wallpaper.css';

const Wallpaper = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let particlesArray = [];
        const numberOfParticles = 100;

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size < 0.1) this.size = 0;
                if (this.x + this.size > canvas.width || this.x - this.size < 0) this.speedX *= -1;
                if (this.y + this.size > canvas.height || this.y - this.size < 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(165, 145, 182, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particlesArray = [];
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particlesArray.push(new Particle(x, y));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        init();
        animate();

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <div className="wallpaper">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default Wallpaper;

