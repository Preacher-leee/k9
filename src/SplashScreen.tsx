import { useEffect, useState } from "react";
import gsap from "gsap";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const counter = document.querySelector(".counter") as HTMLElement;
    let currentValue = 0;

    function updateCounter() {
      if (currentValue >= 100) return;
      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) currentValue = 100;
      counter.textContent = currentValue.toString();
      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    gsap.to(".counter", {
      delay: 3.5,
      opacity: 0,
      zIndex: -10000,
      duration: 0.25
    });

    gsap.to(".bar", {
      delay: 3.5,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
      duration: 1.5
    });

    gsap.to(".splash-screen", {
      delay: 4.5,
      opacity: 0,
      duration: 0.5,
      onComplete: onFinish
    });
  }, [onFinish]);

  return (
    <div className="splash-screen fixed inset-0 bg-white z-50 flex flex-col justify-center items-center">
      <h1 className="counter text-4xl font-bold mb-6">0</h1>
      <div className="overlay flex gap-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="bar bg-primary-500 w-2 h-32"></div>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
