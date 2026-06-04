const aura=document.querySelector(".cursor-aura");const nav=document.querySelector(".nav");const menuBtn=document.querySelector(".menu-btn");window.addEventListener("mousemove",e=>{if(!aura)return;aura.style.left=`${e.clientX}px`;aura.style.top=`${e.clientY}px`});if(menuBtn&&nav){menuBtn.addEventListener("click",()=>nav.classList.toggle("open"))}const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")})},{threshold:.14});document.querySelectorAll(".reveal").forEach(element=>revealObserver.observe(element));document.querySelectorAll(".tilt-card, .panel, .feature-card, .relation-card, .step, .profile-showcase, .power-banner, .story-hero, .notes-banner").forEach(card=>{card.addEventListener("mousemove",event=>{const rect=card.getBoundingClientRect();const x=((event.clientX-rect.left)/rect.width-.5)*5;const y=((event.clientY-rect.top)/rect.height-.5)*-5;card.style.transform=`perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-2px)`;card.style.borderColor="rgba(255, 79, 216, 0.56)"});card.addEventListener("mouseleave",()=>{card.style.transform="";card.style.borderColor=""})});

const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

if (music && musicToggle) {
  music.volume = 0.28;

  const savedMusicState = localStorage.getItem("fear-music");

  if (savedMusicState === "on") {
    music.play()
      .then(() => {
        musicToggle.textContent = "♫ Musique activée";
        musicToggle.classList.add("playing");
      })
      .catch(() => {
        musicToggle.textContent = "♫ Activer la musique";
        musicToggle.classList.remove("playing");
      });
  }

  musicToggle.addEventListener("click", async () => {
    if (music.paused) {
      try {
        await music.play();
        localStorage.setItem("fear-music", "on");
        musicToggle.textContent = "♫ Musique activée";
        musicToggle.classList.add("playing");
      } catch (error) {
        musicToggle.textContent = "Lecture bloquée";
      }
    } else {
      music.pause();
      localStorage.setItem("fear-music", "off");
      musicToggle.textContent = "♫ Activer la musique";
      musicToggle.classList.remove("playing");
    }
  });
}