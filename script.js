/* ==========================================================================
   THE SAMRIDDHI ERA - INTERACTIVE JAVASCRIPT
   43 Photo Management, Taylor Swift Lyrics, Web Audio Synth, Envelope & Confetti
   ========================================================================== */

// --- 43 TAYLOR SWIFT & MEMORY DATA ITEMS ---
// --- 43 PERSONALIZED PHOTOS & TAYLOR SWIFT LYRICS ---
const PHOTO_DATA = [
  { id: 1, title: "The Coffee Date Smile", cat: "coffee", lyric: "You are in love, true love, and it looks like a quiet afternoon..." },
  { id: 2, title: "Starlight in White Lace", cat: "queen", lyric: "I was enchanted to meet you..." },
  { id: 3, title: "Walking Under Stardust", cat: "smiles", lyric: "This night is sparkling, don't you let it go." },
  { id: 4, title: "Pure Radiance & Joy", cat: "smiles", lyric: "Best believe I'm still bejeweled, when I walk in the room." },
  { id: 5, title: "Main Character Aura", cat: "queen", lyric: "I see sparks fly whenever you smile." },
  { id: 6, title: "Golden Hour Grace", cat: "smiles", lyric: "Step into the daylight and let it go." },
  { id: 7, title: "The Effortless Glance", cat: "queen", lyric: "Say you'll remember me standing in a nice dress..." },
  { id: 8, title: "The Cute Cafe Pout", cat: "cute", lyric: "Darling, I'm a nightmare dressed like a daydream." },
  { id: 9, title: "The Unfiltered Laugh", cat: "smiles", lyric: "I had the time of my life fighting dragons with you." },
  { id: 10, title: "Warm Coffee & Heart Talks", cat: "coffee", lyric: "Can I go where you go? Can we always be this close?" },
  { id: 11, title: "Midnight Carnival Lights", cat: "smiles", lyric: "Meet me at midnight..." },
  { id: 12, title: "Electric Festival Night", cat: "queen", lyric: "Long live all the magic we made." },
  { id: 13, title: "Soft Dimples & Sunshine", cat: "smiles", lyric: "You got that James Dean daydream look in your eye." },
  { id: 14, title: "Elegance in Black", cat: "queen", lyric: "I don't wanna look at anything else now that I saw you." },
  { id: 15, title: "Quiet Confidence", cat: "queen", lyric: "You're my, my, my, my... lover." },
  { id: 16, title: "Eyes That Captivate", cat: "queen", lyric: "This love is glowing in the dark." },
  { id: 17, title: "Midnight Goddess", cat: "queen", lyric: "One single thread of gold tied me to you." },
  { id: 18, title: "The Golden Arm Cuff", cat: "queen", lyric: "Hold on to the spinning world..." },
  { id: 19, title: "Laughing Across Tents", cat: "smiles", lyric: "It's nice to have a friend..." },
  { id: 20, title: "Shimmer & Sparkles", cat: "queen", lyric: "I want your midnights..." },
  { id: 21, title: "Candid Perfection", cat: "queen", lyric: "All's well that ends well to end up with you." },
  { id: 22, title: "A Vision in White Lace", cat: "queen", lyric: "You are the best thing that's ever been mine." },
  { id: 23, title: "Espresso Drama", cat: "cute", lyric: "Look what you made me do — fall for you." },
  { id: 24, title: "The Pretty Floral Dress", cat: "cute", lyric: "Never seen a love that looks like this..." },
  { id: 25, title: "Gentle Mirror Glow", cat: "smiles", lyric: "Time gave me purple-pink skies." },
  { id: 26, title: "The Signature Head Tilt", cat: "cute", lyric: "And at every table, I'll save you a seat." },
  { id: 27, title: "Sweet Summer Vibe", cat: "smiles", lyric: "Sweet tea in the summer, cross my heart." },
  { id: 28, title: "Effortlessly Chic", cat: "queen", lyric: "I love you and that's all I really know." },
  { id: 29, title: "Pout Queen", cat: "cute", lyric: "Darling, you're the one I want." },
  { id: 30, title: "Comfy & Cozy Gullu", cat: "coffee", lyric: "Cardigan weather and warm tea." },
  { id: 31, title: "Casual Days Are Best", cat: "cute", lyric: "Everything has changed..." },
  { id: 32, title: "Casual Street Style", cat: "queen", lyric: "Confidence looks good on you." },
  { id: 33, title: "Late Night Lawn Chats", cat: "cute", lyric: "Drop everything now, meet me in the pouring rain." },
  { id: 34, title: "The Bindi & Dimples", cat: "smiles", lyric: "There's a dazzle in your aura." },
  { id: 35, title: "The Dazzling Jhumka Smile", cat: "smiles", lyric: "Please don't be in love with someone else." },
  { id: 36, title: "Up Close Sunshine", cat: "smiles", lyric: "Your hands are made of starlight." },
  { id: 37, title: "The Cutest Pout Ever", cat: "cute", lyric: "We could get married in a minute if you wanted to." },
  { id: 38, title: "Moonlight Smile", cat: "smiles", lyric: "I could dance to you forever." },
  { id: 39, title: "The Crescent Moon Sparkle", cat: "queen", lyric: "Love you to the moon and to Saturn." },
  { id: 40, title: "Pearls & Perfection", cat: "queen", lyric: "You got that red lip classic thing that I like." },
  { id: 41, title: "Shimmering Silver Glow", cat: "queen", lyric: "I promise that you'll never find another like me." },
  { id: 42, title: "The Laugh That Lights Up Rooms", cat: "smiles", lyric: "I had the time of my life with you." },
  { id: 43, title: "Forever Enchanted by Gullu", cat: "queen", lyric: "This night is sparkling, don't you let it go." }
];

// --- FALLBACK IMAGE GENERATOR (Ensures site looks stunning immediately) ---
function handleImageError(imgElement, id) {
  const item = PHOTO_DATA.find(p => p.id === id) || { title: `Memory #${id}`, lyric: "Taylor's Version" };
  
  // Create an aesthetic SVG poster with warm gradients, monogram, and Taylor quote
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2a1638"/>
          <stop offset="50%" stop-color="#181122"/>
          <stop offset="100%" stop-color="#3c2020"/>
        </linearGradient>
        <radialGradient id="goldGlow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#e8b960" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#e8b960" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#bgGrad)"/>
      <circle cx="200" cy="180" r="140" fill="url(#goldGlow)"/>
      <circle cx="200" cy="170" r="55" fill="none" stroke="#e8b960" stroke-width="1.5" stroke-dasharray="4,4"/>
      <text x="200" y="185" font-family="'Playfair Display', serif" font-size="44" font-weight="bold" fill="#f48fb1" text-anchor="middle">G</text>
      <text x="200" y="240" font-family="'Cinzel', serif" font-size="12" letter-spacing="3" fill="#e8b960" text-anchor="middle">PHOTO #${id}</text>
      <text x="200" y="265" font-family="'Caveat', cursive" font-size="20" fill="#fcf6ee" text-anchor="middle">${item.title}</text>
      <text x="200" y="330" font-family="'Playfair Display', serif" font-style="italic" font-size="11" fill="#b39ddb" text-anchor="middle">☕ Samriddhi's Era ☕</text>
    </svg>
  `;
  
  imgElement.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// --- INITIALIZE CAROUSEL HIGHLIGHTS ---
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  
  // Highlight top 8 photos
  const highlights = PHOTO_DATA.slice(0, 8);
  
  track.innerHTML = highlights.map(p => `
    <div class="carousel-card" onclick="openLightbox(${p.id})">
      <div class="card-img-wrap">
        <img src="images/gullu-${p.id}.jpg?v=3" alt="${p.title}" onerror="handleImageError(this, ${p.id})">
      </div>
      <div class="card-label">
        <span class="card-title">${p.title}</span>
        <span class="card-quote">"${p.lyric.substring(0, 35)}..."</span>
      </div>
    </div>
  `).join('');
}

// --- INITIALIZE FULL 43-PHOTO GALLERY ---
function initGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const items = filter === 'all' 
    ? PHOTO_DATA 
    : PHOTO_DATA.filter(p => p.cat === filter);

  grid.innerHTML = items.map(p => `
    <div class="gallery-item" onclick="openLightbox(${p.id})">
      <div class="gallery-thumb-wrap">
        <span class="photo-num-badge">#${p.id}</span>
        <img src="images/gullu-${p.id}.jpg?v=3" alt="${p.title}" onerror="handleImageError(this, ${p.id})">
      </div>
      <div class="gallery-info">
        <h4 class="gallery-title">${p.title}</h4>
        <span class="gallery-lyric">"${p.lyric.substring(0, 32)}..."</span>
      </div>
    </div>
  `).join('');
}

// --- FILTER BUTTON LOGIC ---
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      initGallery(cat);
    });
  });
}

// --- LIGHTBOX MODAL ---
let currentLightboxId = 1;
function openLightbox(id) {
  currentLightboxId = id;
  const item = PHOTO_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const title = document.getElementById('lightboxText');
  const lyric = document.getElementById('lightboxLyric');
  const heartCount = document.getElementById('heartCount');

  img.src = `images/gullu-${id}.jpg?v=3`;
  img.onerror = () => handleImageError(img, id);
  title.textContent = `#${id} • ${item.title}`;
  lyric.textContent = `"${item.lyric}"`;
  heartCount.textContent = "Love this photo";

  modal.classList.add('show');
}

function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const heartBtn = document.getElementById('heartBurstBtn');

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('show');
    });

    // Touch Swipe gestures for mobile photo-book mode
    let touchStartX = 0;
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    modal.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swiped right -> Previous photo
          let prevId = currentLightboxId - 1;
          if (prevId < 1) prevId = 43;
          openLightbox(prevId);
        } else {
          // Swiped left -> Next photo
          let nextId = currentLightboxId + 1;
          if (nextId > 43) nextId = 1;
          openLightbox(nextId);
        }
      }
    }, { passive: true });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      let prevId = currentLightboxId - 1;
      if (prevId < 1) prevId = 43;
      openLightbox(prevId);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      let nextId = currentLightboxId + 1;
      if (nextId > 43) nextId = 1;
      openLightbox(nextId);
    });
  }

  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      createHeartBurst(heartBtn);
      document.getElementById('heartCount').textContent = "Loved! ❤️";
    });
  }
}

// --- WAX SEAL & ENVELOPE CONFESSION REVEAL ---
function initConfessionEnvelope() {
  const waxSeal = document.getElementById('waxSeal');
  const envelope = document.getElementById('envelope');
  const btnYes = document.getElementById('btnYes');
  const btnCoffee = document.getElementById('btnCoffee');
  const celebrationModal = document.getElementById('celebrationModal');
  const modalClose = document.getElementById('modalCloseBtn');

  if (waxSeal && envelope) {
    waxSeal.addEventListener('click', () => {
      // Sound cue
      playChimeSound();
      
      // Open animation
      envelope.classList.add('opened');
      
      // Smooth scroll to the letter
      setTimeout(() => {
        document.getElementById('letterPaper').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 400);

      // Launch gentle celebratory sparkles
      createConfettiExplosion(15);
    });
  }

  function handleChoice(choiceText, isCoffeeOnly) {
    playRomanticMelodyChord();

    // 1. Send silent notification to backend server
    try {
      fetch('/api/respond', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          choice: choiceText,
          timestamp: new Date().toISOString()
        })
      }).catch(e => console.log('Response logged locally'));
    } catch (e) {}

    // Store in localStorage
    try {
      localStorage.setItem('gullu_confession_choice', JSON.stringify({
        choice: choiceText,
        time: new Date().toISOString()
      }));
    } catch (e) {}

    // 2. Update Modal Content
    const modalTitle = document.getElementById('modalTitle');
    const selectedChoiceText = document.getElementById('selectedChoiceText');
    const modalText = document.getElementById('modalText');
    const whatsappBtn = document.getElementById('modalWhatsappBtn');

    if (modalTitle) {
      modalTitle.textContent = isCoffeeOnly ? "It's a Coffee Date Deal! ☕🤝" : "It's a Date! ❤️🎉";
    }

    if (selectedChoiceText) {
      selectedChoiceText.textContent = choiceText;
    }

    if (modalText) {
      modalText.innerHTML = isCoffeeOnly
        ? `Deal sealed! Coffee date on you, smiles on Gullu.<br><strong>Tap below to send this directly to him on WhatsApp! 🥰</strong>`
        : `The coffee is brewing, and Taylor Swift is on repeat.<br><strong>Tap below to send this directly to him on WhatsApp! 🥰</strong>`;
    }

    // 3. Pre-fill WhatsApp message directly linked to your number (7737239757)
    if (whatsappBtn) {
      const waMsg = isCoffeeOnly
        ? `Oyeee! Maine confession read kiya aur ha bol diya ❤️ Par coffee tumhe hi pilani padegi deal done! ☕😉`
        : `Oyeee! I said YES to our date! ❤️✨ Taylor Swift on repeat and coffee date confirmed! ☕🥰`;
      whatsappBtn.href = `https://api.whatsapp.com/send?phone=917737239757&text=${encodeURIComponent(waMsg)}`;
    }

    if (celebrationModal) celebrationModal.classList.add('show');
    createConfettiExplosion(120);
  }

  // Answer Buttons
  if (btnYes) {
    btnYes.addEventListener('click', () => {
      handleChoice("Yes, let's go on a date! ❤️", false);
    });
  }

  if (btnCoffee) {
    btnCoffee.addEventListener('click', () => {
      handleChoice("Only if you buy the Coffee 😉", true);
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      celebrationModal.classList.remove('show');
    });
  }

  if (celebrationModal) {
    celebrationModal.addEventListener('click', (e) => {
      if (e.target === celebrationModal) {
        celebrationModal.classList.remove('show');
      }
    });
  }
}

// --- OFFICIAL TAYLOR SWIFT MUSIC STREAMING & AUDIO ENGINE ---
let ytPlayer = null;
let ytReady = false;
let audioCtx = null;
let isMelodyPlaying = false;
let currentSong = 'enchanted';
let isCustomAudio = false;

const SONG_DATA = {
  enchanted: {
    title: "Enchanted (Taylor's Version)",
    era: "Speak Now (Taylor's Version)",
    ytId: "igIfiqqVHtA",
    filename: "audio/enchanted.mp3"
  },
  lover: {
    title: "Lover",
    era: "Lover Era",
    ytId: "-BjZmE2gtdo",
    filename: "audio/lover.mp3"
  },
  lovestory: {
    title: "Love Story (Taylor's Version)",
    era: "Fearless (Taylor's Version)",
    ytId: "aXzVF3XeS8M",
    filename: "audio/lovestory.mp3"
  },
  youbelongwithme: {
    title: "You Belong With Me (Taylor's Version)",
    era: "Fearless (Taylor's Version)",
    ytId: "vwp8Ur6tO-8",
    filename: "audio/youbelongwithme.mp3"
  }
};

// Load YouTube IFrame API for studio-quality Taylor Swift playback
(function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  if (firstScriptTag && firstScriptTag.parentNode) {
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else {
    document.head.appendChild(tag);
  }
})();

window.onYouTubeIframeAPIReady = function() {
  try {
    ytPlayer = new YT.Player('youtubePlayerHost', {
      height: '100%',
      width: '100%',
      videoId: SONG_DATA[currentSong].ytId,
      playerVars: {
        autoplay: 0,
        controls: 1,
        disablekb: 0,
        fs: 1,
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
        origin: window.location.origin
      },
      events: {
        onReady: () => {
          ytReady = true;
          console.log("Taylor Swift player ready!");
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            setPlayingState(true);
          } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
            setPlayingState(false);
          }
        },
        onError: (err) => {
          console.warn("YouTube player error:", err);
          // Fallback to local audio or acoustic synthesizer
          playFallbackAudio();
        }
      }
    });
  } catch (err) {
    console.warn("YouTube player init error:", err);
  }
};

function setPlayingState(playing) {
  isMelodyPlaying = playing;
  const vinylDisc = document.getElementById('vinylDisc');
  const playIcon = document.getElementById('playIcon');
  const toggleBtn = document.getElementById('musicToggleBtn');
  const nowPlayingBadge = document.getElementById('nowPlayingBadge');

  if (playing) {
    if (vinylDisc) vinylDisc.classList.add('spinning');
    if (playIcon) playIcon.textContent = '❚❚';
    if (toggleBtn) toggleBtn.classList.remove('pulse-play');
    if (nowPlayingBadge) nowPlayingBadge.textContent = 'Playing ✨';
  } else {
    if (vinylDisc) vinylDisc.classList.remove('spinning');
    if (playIcon) playIcon.textContent = '▶';
    if (nowPlayingBadge) nowPlayingBadge.textContent = "Taylor's Version";
  }
}

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Warm acoustic piano note synthesizer for offline fallback
function playAcousticNote(freq, duration = 1.2, gainPeak = 0.12) {
  try {
    const ctx = getAudioContext();
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, ctx.currentTime);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(gainPeak, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + duration);
    osc2.stop(ctx.currentTime + duration);
  } catch (err) {
    console.warn("Audio note failed:", err);
  }
}

function playChimeSound() {
  playAcousticNote(523.25, 0.6, 0.15); // C5
  setTimeout(() => playAcousticNote(659.25, 0.7, 0.15), 100); // E5
  setTimeout(() => playAcousticNote(783.99, 1.0, 0.18), 200); // G5
  setTimeout(() => playAcousticNote(1046.50, 1.2, 0.12), 300); // C6
}

// Enchanted melodic motif (C - G - Am - F progression)
function playRomanticMelodyChord() {
  playAcousticNote(261.63, 2.5, 0.12); // C4
  playAcousticNote(329.63, 2.5, 0.10); // E4
  playAcousticNote(392.00, 2.8, 0.10); // G4
  playAcousticNote(523.25, 3.0, 0.12); // C5
  
  setTimeout(() => {
    playAcousticNote(392.00, 2.5, 0.10); // G4
    playAcousticNote(493.88, 2.5, 0.10); // B4
    playAcousticNote(587.33, 2.8, 0.12); // D5
  }, 700);

  setTimeout(() => {
    playAcousticNote(220.00, 2.5, 0.12); // A3
    playAcousticNote(261.63, 2.5, 0.10); // C4
    playAcousticNote(440.00, 2.8, 0.12); // A4
  }, 1400);

  setTimeout(() => {
    playAcousticNote(174.61, 2.5, 0.12); // F3
    playAcousticNote(261.63, 2.5, 0.10); // C4
    playAcousticNote(349.23, 3.0, 0.14); // F4
  }, 2100);
}

function playFallbackAudio() {
  let realAudio = document.getElementById('bgAudioElement');
  if (!realAudio) {
    realAudio = document.createElement('audio');
    realAudio.id = 'bgAudioElement';
    realAudio.loop = true;
    document.body.appendChild(realAudio);
  }

  realAudio.src = SONG_DATA[currentSong].filename;
  realAudio.play().then(() => {
    setPlayingState(true);
  }).catch(() => {
    playRomanticMelodyChord();
    setPlayingState(true);
  });
}

function toggleMelody() {
  // If custom audio was uploaded
  if (isCustomAudio) {
    const realAudio = document.getElementById('bgAudioElement');
    if (realAudio) {
      if (realAudio.paused) {
        realAudio.play();
        setPlayingState(true);
      } else {
        realAudio.pause();
        setPlayingState(false);
      }
      return;
    }
  }

  // 1. YouTube IFrame Player API
  if (ytPlayer && typeof ytPlayer.getPlayerState === 'function') {
    try {
      const state = ytPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        ytPlayer.pauseVideo();
        setPlayingState(false);
      } else {
        ytPlayer.playVideo();
        setPlayingState(true);
      }
      return;
    } catch (e) {
      console.warn("YouTube play exception:", e);
    }
  }

  // 2. Direct iframe fallback if API wasn't ready
  const host = document.getElementById('youtubePlayerHost');
  if (host && host.tagName === 'DIV') {
    host.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${SONG_DATA[currentSong].ytId}?autoplay=1&enablejsapi=1&playsinline=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    setPlayingState(true);
    return;
  }

  // 3. Audio file / synth fallback
  playFallbackAudio();
}

function switchSong(songKey) {
  if (!SONG_DATA[songKey]) return;
  currentSong = songKey;
  isCustomAudio = false;

  const trackTitle = document.getElementById('trackTitle');
  if (trackTitle) trackTitle.textContent = SONG_DATA[songKey].title;

  const drawerTitle = document.getElementById('videoDrawerTitle');
  if (drawerTitle) drawerTitle.textContent = `✨ ${SONG_DATA[songKey].title}`;

  document.querySelectorAll('.song-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-song') === songKey);
  });

  if (ytPlayer && typeof ytPlayer.loadVideoById === 'function') {
    try {
      ytPlayer.loadVideoById(SONG_DATA[songKey].ytId);
      ytPlayer.playVideo();
      setPlayingState(true);
      return;
    } catch (e) {
      console.warn("Switch song error:", e);
    }
  }

  // Direct iframe update
  const frameContainer = document.getElementById('videoFrameContainer');
  if (frameContainer) {
    frameContainer.innerHTML = `<div id="youtubePlayerHost"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/${SONG_DATA[songKey].ytId}?autoplay=1&enablejsapi=1&playsinline=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    setPlayingState(true);
  }
}

function initMusicPlayer() {
  const toggleBtn = document.getElementById('musicToggleBtn');
  const vinylDisc = document.getElementById('vinylDisc');
  const songPills = document.querySelectorAll('.song-pill');
  const toggleVideoBtn = document.getElementById('toggleVideoBtn');
  const videoCloseBtn = document.getElementById('videoCloseBtn');
  const videoDrawer = document.getElementById('videoDrawer');
  const customAudioBtn = document.getElementById('customAudioBtn');
  const customAudioInput = document.getElementById('customAudioInput');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMelody();
    });
  }

  if (vinylDisc) {
    vinylDisc.addEventListener('click', () => {
      toggleMelody();
    });
  }

  songPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const song = pill.getAttribute('data-song');
      switchSong(song);
    });
  });

  // Toggle Video Drawer
  if (toggleVideoBtn && videoDrawer) {
    toggleVideoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      videoDrawer.classList.toggle('open');
      if (videoDrawer.classList.contains('open')) {
        toggleVideoBtn.style.borderColor = 'var(--accent-gold)';
        toggleVideoBtn.style.color = '#fff';
      } else {
        toggleVideoBtn.style.borderColor = '';
        toggleVideoBtn.style.color = '';
      }
    });
  }

  if (videoCloseBtn && videoDrawer) {
    videoCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      videoDrawer.classList.remove('open');
      if (toggleVideoBtn) {
        toggleVideoBtn.style.borderColor = '';
        toggleVideoBtn.style.color = '';
      }
    });
  }

  // Custom Audio Upload Button
  if (customAudioBtn && customAudioInput) {
    customAudioBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      customAudioInput.click();
    });

    customAudioInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const objectUrl = URL.createObjectURL(file);
      let realAudio = document.getElementById('bgAudioElement');
      if (!realAudio) {
        realAudio = document.createElement('audio');
        realAudio.id = 'bgAudioElement';
        realAudio.loop = true;
        document.body.appendChild(realAudio);
      }

      // Stop YouTube player if playing
      if (ytPlayer && typeof ytPlayer.pauseVideo === 'function') {
        try { ytPlayer.pauseVideo(); } catch (err) {}
      }

      realAudio.src = objectUrl;
      realAudio.play().then(() => {
        isCustomAudio = true;
        setPlayingState(true);
        const trackTitle = document.getElementById('trackTitle');
        if (trackTitle) trackTitle.textContent = file.name.replace(/\.[^/.]+$/, "");
        document.querySelectorAll('.song-pill').forEach(p => p.classList.remove('active'));
      }).catch(err => console.warn("Custom audio play error:", err));
    });
  }
}

// --- INTERACTIVE FAIRY DUST / TOUCH SPARKLES ---
function initFairyDust() {
  let lastTime = 0;
  function spawnDust(x, y) {
    const now = Date.now();
    if (now - lastTime < 35) return; // 30fps throttle for buttery mobile performance
    lastTime = now;

    const dust = document.createElement('div');
    dust.className = 'fairy-dust';
    const size = Math.random() * 8 + 4;
    dust.style.width = `${size}px`;
    dust.style.height = `${size}px`;
    dust.style.left = `${x - size / 2}px`;
    dust.style.top = `${y - size / 2}px`;

    const tx = (Math.random() - 0.5) * 50;
    const ty = (Math.random() - 0.5) * 50 - 25;
    dust.style.setProperty('--tx', `${tx}px`);
    dust.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(dust);
    setTimeout(() => dust.remove(), 800);
  }

  window.addEventListener('pointermove', (e) => spawnDust(e.clientX, e.clientY));
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      spawnDust(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });
}

// --- AMBIENT CANVAS PARTICLES (Floating Gold Sparkles & Hearts) ---
function initCanvasParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.05
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.alpha += Math.sin(Date.now() * 0.002) * p.pulse;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.fillStyle = `rgba(232, 185, 96, ${Math.max(0.1, Math.min(0.8, p.alpha))})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

// --- CONFETTI EXPLOSION GENERATOR ---
function createConfettiExplosion(count = 60) {
  const colors = ['#e8b960', '#f48fb1', '#b39ddb', '#ffffff', '#ff4081', '#c89666'];
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'custom-confetti';
    confetti.style.position = 'fixed';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = '-20px';
    confetti.style.width = `${Math.random() * 10 + 6}px`;
    confetti.style.height = `${Math.random() * 14 + 8}px`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.zIndex = '10000';
    confetti.style.borderRadius = '3px';
    confetti.style.pointerEvents = 'none';
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.style.transition = `transform ${Math.random() * 2 + 2}s cubic-bezier(0.25, 1, 0.5, 1), top ${Math.random() * 2 + 2}s linear, opacity 1s ease`;

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.style.top = '105vh';
      confetti.style.transform = `rotate(${Math.random() * 720}deg) scale(0.6)`;
    }, 20);

    setTimeout(() => {
      confetti.style.opacity = '0';
      setTimeout(() => confetti.remove(), 1000);
    }, 2800);
  }
}

function createHeartBurst(element) {
  const rect = element.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = `${rect.left + rect.width / 2}px`;
    heart.style.top = `${rect.top}px`;
    heart.style.fontSize = '18px';
    heart.style.zIndex = '10001';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 1s cubic-bezier(0.2, 0.8, 0.2, 1)';
    document.body.appendChild(heart);

    const angle = (Math.random() - 0.5) * Math.PI;
    const dist = Math.random() * 80 + 30;

    setTimeout(() => {
      heart.style.transform = `translate(${Math.sin(angle) * dist}px, -${Math.cos(angle) * dist}px) scale(1.4)`;
      heart.style.opacity = '0';
    }, 20);

    setTimeout(() => heart.remove(), 1000);
  }
}

// --- BOOTSTRAP ON LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initGallery('all');
  initFilters();
  initLightbox();
  initConfessionEnvelope();
  initMusicPlayer();
  initCanvasParticles();
  initFairyDust();
});
