import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import laptopImage from './images/freepik__3d-abstract-laptop-with-a-coding-interface-featuri__67522.jpeg';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
// mon-portfolio/src/Components/images/freepik__3d-abstract-laptop-with-a-coding-interface-featuri__67522.jpeg
export default function GsapImage() {
    // useEffect(() => {
    //   const cursor = document.querySelector('.custom-cursor');
    //   const moveCursor = (e) => {
    //     if (cursor) {
    //       cursor.style.left = e.pageX + 'px';
    //       cursor.style.top = e.pageY + 'px';
    //     }
    //   };
    //   document.addEventListener('mousemove', moveCursor);
    //   return () => document.removeEventListener('mousemove', moveCursor);
    // }, []);
  
  const imgRef = useRef(null);

  useEffect(() => {
    
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger:imgRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 1, 
        // markers: true,
        toggleActions: "restart pause reverse pause"
      },
      x: 500,
      rotation: 360,
      duration: 1,
    });
    let split = SplitText.create(".mon-element", {
      type: "chars, words",
});
gsap.from(split.chars, {
  scrollTrigger: {
      trigger: ".mon-element",
      start: "top 80%", // déclenche quand l’élément entre dans la vue
      toggleActions: "restart none none none", // relance à chaque entrée
      // markers: true, // pour debug
    },

  y: 100,
  autoAlpha: 0,
  stagger:0.05,
})
  }, []);

  return (
    <div>
      <hr style={{color: 'red',border: "10px solid cyan"}}/>
      <div class="mon-element justify-items-center">
        <h1 style={{fontFamily: 'orbitron', fontSize: '80px'}}>EDUCATION</h1>
        </div>
        <div class="university border border-5"></div>
          <div className="flex justify-center items-center h-screen bg-gray-100" style={{ backgroundColor: ' black', fontFamily: 'Orbitron' }}>
            {/* <div class="custom-cursor">&lt;/&gt;</div> */}
            <img
              ref={imgRef}
              src={laptopImage}
              alt="Laptop"
              className="w-[200px] h-auto"
              />
          </div>
        </div>
  );
}
