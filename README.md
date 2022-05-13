# Static Luxury Real Estate website (Practice Site)

## ABOUT:

My first fully fleshed out website, this enhanced my interest in coding and introduced me to a lot of best practices, SEO, and improving performance. Built using TailwindCSS, HTML5, and data-aos animations.

## CHALLENGES + SOLUTIONS:

Learning Tailwind

* I had to develop a good understanding of CSS3 before making the shift to Tailwind, but I'm glad I did. Tailwind allowed me to speed up my development significantly by styling inline inside HTML classes. Although it made the classes rough to look at, the massive improvement in development speed gained by inline-styling AND the shorthand CSS naming conventions made it worth using. 

JS Interactivity - I wanted elements to appear on scroll, as well as to have introloading on each page to maintain a relaxed, luxury aesthetic. I knew that if this were live and built for a client / business, gently easing content in rather than bombarding a visitor would be best so that they wouldn't feel like they're being hustled by that client / business.

* I initially explored GSAP 3 animations for this purpose, but found them to be overkill at the time. I instead opted to use a data-aos scroll-based animation CDN. Although limited in functionality, incompatible with some CSS hover features, and technically unable to do introload animations, it was perfect as a first exposure to JavaScript animations. 
* To get around the introload problem, where GSAP 3 would use a timeline, I just delayed the beginning and duration of each element's animation; Since data-aos uses scroll-based animations, when a visitor loads a new page the elements would be within the default scroll anchors, and I could create an introload by staggering the delay and durations of each element's animation.
