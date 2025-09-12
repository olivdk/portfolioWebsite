"use client"

import {useEffect, useRef} from "react"

type Star = {
    x: number
    y: number 
    r: number 
    dy: number 
    dx: number
    brightness: number
    twinkleSpeed: number
    twinkleDirection: number
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    let canvas!: HTMLCanvasElement
    let ctx!: CanvasRenderingContext2D

    useEffect(() =>  {
        canvas = canvasRef.current!
        ctx = canvas.getContext("2d")!

        canvas.width = window.innerWidth 
        canvas.height = window.innerHeight

        const stars: Star[] = []
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * canvas.width, 
                y: Math.random() * canvas.height,
                r: Math.random() + 0.75,
                dx: (Math.random() - 0.5) * 0.3, 
                dy: (Math.random() - 0.5) * 0.3,
                brightness: Math.random() * 0.8, 
                twinkleSpeed: 0.005 + Math.random() * 0.01,
                twinkleDirection: Math.random() < 0.5 ? 1 : -1,
            })
        }
        function draw() {
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            for (const s of stars) {
                s.brightness += s.twinkleSpeed * s.twinkleDirection
                if (s.brightness > 1) {
                    s.brightness = 1
                    s.twinkleDirection = -1
                } else if (s.brightness < 0.2) {
                    s.brightness = 0.2
                    s.twinkleDirection = 1
                }

            const alpha = s.brightness
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.font = `${s.r * 2.5} px helvetica`
            ctx.textAlign = "center" 
            ctx.textBaseline = "middle" 
            ctx.fillText("✦", s.x, s.y)
            
            s.x += s.dx
            s.y += s.dy 

            if (s.x < 0) s.x = canvas.width 
            if (s.x > canvas.width) s.x = 0 
            if (s.y < 0) s.y = canvas.height 
            if (s.y > canvas.height) s.y = 0
            }
        }
        let animationFrame: number 
        function animate() {
            draw()
            animationFrame = requestAnimationFrame(animate)
        }

        animate()
        
        return () => cancelAnimationFrame(animationFrame) 
    }, [])

return <canvas ref={canvasRef} id="starfield" className="fixed inset-0 -z-10" />
}

