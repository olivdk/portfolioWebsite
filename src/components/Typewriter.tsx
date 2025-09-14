import { useEffect, useRef } from "react"; 

type TypewriterProps = {
    text: string; 
    speed?: number;
};

export default function Typewriter({ text, speed = 100}: TypewriterProps) {
    const ref = useRef<HTMLSpanElement>(null); 

    useEffect(() => {
        if (!ref.current) return; 
        
        let charIndex = 0;
        let textCompleted = false;

        const typeCharacter = () => {
            speed = Math.random() * 10 + 95;
            if (!textCompleted && charIndex < text.length) {
                ref.current!.textContent += text.charAt(charIndex);
                charIndex ++; 
                setTimeout(typeCharacter, speed);
            } else if (!textCompleted && charIndex === text.length) {
                textCompleted = true;
                setTimeout(typeCharacter, 2000);
            } else if (textCompleted && charIndex > 0) {
                ref.current!.textContent = ref.current!.textContent.substring(0, charIndex-1);
                charIndex--; 
                setTimeout(typeCharacter, 75);
            } else if (textCompleted && charIndex === 0) {
                textCompleted = false;
                setTimeout(typeCharacter, 300);
            }
        };

        ref.current.textContent = "";
        typeCharacter(); 
    }, [text, speed]);
    return <span ref={ref} className="font-mono scroll-m-20 text-left text-m font-bold tracking-tight text-balance text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>;
}