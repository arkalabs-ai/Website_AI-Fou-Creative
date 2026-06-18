(function(){
  "use strict";

  /* ---------- inline Phosphor icons (no CDN dependency) ---------- */
  var ICONS = {"arrow-down": "<path d=\"M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z\"/>", "arrow-up": "<path d=\"M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z\"/>", "arrows-clockwise": "<path d=\"M224,48V96a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h28.69L182.06,73.37a79.56,79.56,0,0,0-56.13-23.43h-.45A79.52,79.52,0,0,0,69.59,72.71,8,8,0,0,1,58.41,61.27a96,96,0,0,1,135,.79L208,76.69V48a8,8,0,0,1,16,0ZM186.41,183.29a80,80,0,0,1-112.47-.66L59.31,168H88a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V179.31l14.63,14.63A95.43,95.43,0,0,0,130,222.06h.53a95.36,95.36,0,0,0,67.07-27.33,8,8,0,0,0-11.18-11.44Z\"/>", "broadcast": "<path d=\"M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z\"/>", "chart-line-up": "<path d=\"M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z\"/>", "check-circle": "<path d=\"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z\"/>", "cpu": "<path d=\"M152,96H104a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V104A8,8,0,0,0,152,96Zm-8,48H112V112h32Zm88,0H216V112h16a8,8,0,0,0,0-16H216V56a16,16,0,0,0-16-16H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H56A16,16,0,0,0,40,56V96H24a8,8,0,0,0,0,16H40v32H24a8,8,0,0,0,0,16H40v40a16,16,0,0,0,16,16H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h40a16,16,0,0,0,16-16V160h16a8,8,0,0,0,0-16Zm-32,56H56V56H200v95.87s0,.09,0,.13,0,.09,0,.13V200Z\"/>", "floppy-disk": "<path d=\"M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z\"/>", "lightning": "<path d=\"M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z\"/>", "list": "<path d=\"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z\"/>", "lock-key-open": "<path d=\"M208,80H96V56a32,32,0,0,1,32-32c15.37,0,29.2,11,32.16,25.59a8,8,0,0,0,15.68-3.18C171.32,24.15,151.2,8,128,8A48.05,48.05,0,0,0,80,56V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm0,128H48V96H208V208Zm-80-96a28,28,0,0,0-8,54.83V184a8,8,0,0,0,16,0V166.83A28,28,0,0,0,128,112Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,128,152Z\"/>", "magnifying-glass": "<path d=\"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z\"/>", "pen-nib": "<path d=\"M248,92.68a15.86,15.86,0,0,0-4.69-11.31L174.63,12.68a16,16,0,0,0-22.63,0L123.57,41.11l-58,21.77A16.06,16.06,0,0,0,55.35,75.23L32.11,214.68A8,8,0,0,0,40,224a8.4,8.4,0,0,0,1.32-.11l139.44-23.24a16,16,0,0,0,12.35-10.17l21.77-58L243.31,104A15.87,15.87,0,0,0,248,92.68Zm-69.87,92.19L63.32,204l47.37-47.37a28,28,0,1,0-11.32-11.32L52,192.7,71.13,77.86,126,57.29,198.7,130ZM112,132a12,12,0,1,1,12,12A12,12,0,0,1,112,132Zm96-15.32L139.31,48l24-24L232,92.68Z\"/>", "plus": "<path d=\"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z\"/>", "target": "<path d=\"M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z\"/>", "trash": "<path d=\"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z\"/>", "upload-simple": "<path d=\"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z\"/>", "whatsapp-logo": "<path d=\"M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z\"/>", "x": "<path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\"/>"};
  function hydrateIcons(root){
    var nodes = (root||document).querySelectorAll(".ic[data-i]");
    Array.prototype.forEach.call(nodes, function(el){
      if(el.getAttribute("data-done")) return;
      var p = ICONS[el.getAttribute("data-i")];
      if(p){ el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">'+p+'</svg>'; el.setAttribute("data-done","1"); }
    });
  }

  /* ---------- storage with in-memory fallback ---------- */
  var KEY="foucreative:v1", SESS="foucreative:admin", mem={};
  var Store={
    read:function(k,fb){ try{var v=localStorage.getItem(k);return v?JSON.parse(v):fb;}catch(e){return (k in mem)?mem[k]:fb;} },
    write:function(k,v){ try{localStorage.setItem(k,JSON.stringify(v));return true;}catch(e){mem[k]=v;return false;} },
    available:function(){ try{var t="__fc";localStorage.setItem(t,"1");localStorage.removeItem(t);return true;}catch(e){return false;} }
  };

  /* ---------- defaults (GANTI ke data asli sebelum produksi) ---------- */
  var DEFAULTS={
    wa:"6281234567890",
    waLink:"https://wa.me/message/LYZPAFHQQRLMK1",
    waMsg:"Halo Fou Creative, saya tertarik dengan AI Agent Marketing untuk brand saya.",
    hero:{ headline:"Dari prospek ke closing, *otomatis*.", subhead:"Dua AI: satu mencari calon pelanggan & membuka percakapan secara otomatis, satu menjawab pertanyaan produk sampai closing. Otomatis, 24 jam." },
    stats:[ {value:"320%",label:"Rata-rata ROI"}, {value:"85%",label:"Kenaikan efisiensi"}, {value:"24/7",label:"Tanpa henti"} ],
    caseStudy:{ enabled:false, client:"", challenge:"", solution:"", results:[ {value:"",label:""}, {value:"",label:""} ] },
    portfolio:[
      {name:"Éclat Garnet",logo:"assets/logos/eclat-garnet.png"},
      {name:"Oskincare",logo:"assets/logos/oskincare.png"},
      {name:"Lé Vien",logo:"assets/logos/le-vien.png"},
      {name:"Lily Petals",logo:"assets/logos/lily-petals.png"},
      {name:"Baker's Table",logo:"assets/logos/bakerstable.png"},
      {name:"Palm Beach",logo:"assets/logos/palm-beach.png"},
      {name:"Cahaya Tour",logo:"assets/logos/cahaya-tour.png"},
      {name:"Golden Time",logo:"assets/logos/golden-time.png"},
      {name:"Javel",logo:"assets/logos/javel.png"},
      {name:"Glory Mini Soccer",logo:"assets/logos/glory-mini-soccer.png"},
      {name:"Minowear",logo:"assets/logos/minowear.png"},
      {name:"Yuire",logo:"assets/logos/yuire.png"},
      {name:"Nybela",logo:"assets/logos/nybela.png"},
      {name:"Incashback",logo:"assets/logos/incashback.png"},
      {name:"GK",logo:"assets/logos/gk.png"},
      {name:"Debodis",logo:"assets/logos/debodis.svg"},
      {name:"Bondi Clinic",logo:""}
    ]
  };

  function merge(def,saved){
    if(!saved||typeof saved!=="object") return JSON.parse(JSON.stringify(def));
    var cs=saved.caseStudy||{};
    return {
      wa:saved.wa||def.wa,
      waLink:(saved.waLink!==undefined?saved.waLink:def.waLink),
      waMsg:saved.waMsg||def.waMsg,
      hero:{ headline:(saved.hero&&saved.hero.headline)||def.hero.headline, subhead:(saved.hero&&saved.hero.subhead)||def.hero.subhead },
      stats:(Array.isArray(saved.stats)&&saved.stats.length)?saved.stats:def.stats,
      caseStudy:{
        enabled:!!cs.enabled, client:cs.client||"", challenge:cs.challenge||"", solution:cs.solution||"",
        results:(Array.isArray(cs.results)&&cs.results.length)?cs.results:JSON.parse(JSON.stringify(def.caseStudy.results))
      },
      portfolio:Array.isArray(saved.portfolio)?saved.portfolio:def.portfolio
    };
  }
  var state=merge(DEFAULTS,Store.read(KEY,null));

  /* ---------- helpers ---------- */
  function $(s,r){return (r||document).querySelector(s);}
  function $all(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});}
  function accentize(s){return esc(s).replace(/\*([^*]+)\*/g,'<span class="t-accent">$1</span>');}
  function digits(s){return String(s||"").replace(/[^0-9]/g,"");}
  function waHref(){ if(state.waLink&&state.waLink.trim()) return state.waLink.trim(); return "https://wa.me/"+digits(state.wa)+"?text="+encodeURIComponent(state.waMsg||""); }

  /* ---------- render live page ---------- */
  function renderWA(){
    var href=waHref();
    $all("[data-wa]").forEach(function(a){a.setAttribute("href",href);});
    var disp=(state.waLink&&state.waLink.trim())?"Chat WhatsApp":("+"+digits(state.wa));
    $all("[data-wa-display]").forEach(function(e){e.textContent=disp;});
  }
  function renderHero(){
    $("#hero-headline").innerHTML=accentize(state.hero.headline);
    $("#hero-subhead").textContent=state.hero.subhead;
  }
  function renderStats(){
    $("#stats-grid").innerHTML=state.stats.map(function(s){
      return '<div class="stat" data-reveal><div class="stat-num">'+esc(s.value)+'</div><div class="stat-label">'+esc(s.label)+'</div></div>';
    }).join("");
  }
  function renderCase(){
    var c=state.caseStudy, el=$("#case-study");
    if(!c.enabled||!c.client){ el.classList.add("hidden"); return; }
    el.classList.remove("hidden");
    $("#case-client").textContent=c.client;
    $("#case-challenge").textContent=c.challenge;
    $("#case-solution").textContent=c.solution;
    var res=(c.results||[]).filter(function(r){return r.value;});
    $("#case-results").innerHTML=res.length? res.map(function(r){
      return '<div class="case-res"><div class="stat-num">'+esc(r.value)+'</div><div class="stat-label">'+esc(r.label)+'</div></div>';
    }).join("") : '<div class="subtle">Hasil belum diisi.</div>';
  }
  function renderPortfolio(){
    var grid=$("#portfolio-grid");
    if(!state.portfolio.length){ grid.innerHTML='<div class="port-empty">Belum ada brand. Tambahkan lewat editor konten.</div>'; return; }
    grid.innerHTML=state.portfolio.map(function(p){
      var inner=p.logo?'<img src="'+esc(p.logo)+'" alt="'+esc(p.name)+'" class="port-logo" loading="lazy" decoding="async">':'<span class="port-ph">'+esc(p.name||"Logo")+'</span>';
      return '<div class="port-card" data-reveal>'+inner+'</div>';
    }).join("");
  }
  function renderAll(){
    renderWA(); renderHero(); renderStats(); renderCase(); renderPortfolio();
    hydrateIcons(document); revealScan();
  }

  /* ---------- reveal on scroll ---------- */
  var io=null;
  var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function revealScan(){
    var els=$all("[data-reveal]").filter(function(e){return !e.classList.contains("reveal-watched")&&!e.classList.contains("is-in");});
    if(reduce||!("IntersectionObserver" in window)){ els.forEach(function(e){e.classList.add("is-in");}); return; }
    if(!io){
      io=new IntersectionObserver(function(entries){
        entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("is-in"); io.unobserve(en.target); } });
      },{threshold:0.12,rootMargin:"0px 0px -8% 0px"});
    }
    els.forEach(function(e){
      e.classList.add("reveal-watched");
      var parent=e.parentElement, sibs=parent?$all(":scope > [data-reveal]",parent):[e], idx=sibs.indexOf(e);
      if(idx>0) e.style.transitionDelay=(Math.min(idx,6)*0.06)+"s";
      io.observe(e);
    });
  }

  /* ---------- mobile menu ---------- */
  function bindMenu(){
    var btn=$("#navToggle"), menu=$("#mobileMenu");
    function setOpen(open){
      menu.classList.toggle("open",open);
      btn.setAttribute("aria-expanded",open?"true":"false");
      menu.setAttribute("aria-hidden",open?"false":"true");
      btn.querySelector(".ic").setAttribute("data-done","");
      btn.querySelector(".ic").setAttribute("data-i",open?"x":"list");
      hydrateIcons(btn);
    }
    btn.addEventListener("click",function(){ setOpen(!menu.classList.contains("open")); });
    $all("a",menu).forEach(function(a){ a.addEventListener("click",function(){ setOpen(false); }); });
    window.addEventListener("resize",function(){ if(window.innerWidth>=768) setOpen(false); });
  }

  /* ---------- toast ---------- */
  var toastT=null;
  function toast(msg){ var t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toastT); toastT=setTimeout(function(){t.classList.remove("show");},2200); }

  /* =================== ADMIN =================== */
  var ADMIN_PASS="fou-admin-2026"; /* GANTI sebelum deploy. Catatan: ini cek sisi-klien, bukan keamanan sungguhan. */
  var overlay=$("#admin"), draft=null;

  function openAdmin(){
    overlay.classList.add("open"); document.body.style.overflow="hidden";
    var unlocked=false; try{unlocked=sessionStorage.getItem(SESS)==="1";}catch(e){}
    if(unlocked) showEditor(); else showGate();
  }
  function closeAdmin(){
    overlay.classList.remove("open"); document.body.style.overflow="";
    if(location.hash==="#admin") history.replaceState(null,"",location.pathname+location.search);
  }
  function showGate(){
    $("#admin-editor").classList.add("hidden"); $("#admin-gate").classList.remove("hidden");
    $("#admin-err").style.display="none"; $("#admin-pass").value="";
    setTimeout(function(){$("#admin-pass").focus();},60);
  }
  function tryLogin(){
    if($("#admin-pass").value===ADMIN_PASS){ try{sessionStorage.setItem(SESS,"1");}catch(e){} showEditor(); }
    else $("#admin-err").style.display="block";
  }
  function showEditor(){
    $("#admin-gate").classList.add("hidden"); $("#admin-editor").classList.remove("hidden");
    if(!Store.available()) $("#admin-warn").classList.add("show");
    draft=JSON.parse(JSON.stringify(state)); fillEditor();
  }
  function fillEditor(){
    $("#f-walink").value=draft.waLink||""; $("#f-wa").value=draft.wa; $("#f-wamsg").value=draft.waMsg;
    $("#f-headline").value=draft.hero.headline; $("#f-subhead").value=draft.hero.subhead;
    var c=draft.caseStudy;
    $("#f-case-on").checked=!!c.enabled;
    $("#f-case-client").value=c.client; $("#f-case-challenge").value=c.challenge; $("#f-case-solution").value=c.solution;
    $("#f-case-r1v").value=(c.results[0]||{}).value||""; $("#f-case-r1l").value=(c.results[0]||{}).label||"";
    $("#f-case-r2v").value=(c.results[1]||{}).value||""; $("#f-case-r2l").value=(c.results[1]||{}).label||"";
    renderStatEditor(); renderPortEditor();
  }

  function renderStatEditor(){
    var wrap=$("#f-stats");
    wrap.innerHTML=draft.stats.map(function(s,i){
      return '<div class="stat-edit"><div class="row2">'+
        '<div class="field" style="margin:0"><label>Angka</label><input class="input js-sv" data-i="'+i+'" type="text" value="'+esc(s.value)+'"></div>'+
        '<div class="field" style="margin:0"><label>Keterangan</label><input class="input js-sl" data-i="'+i+'" type="text" value="'+esc(s.label)+'"></div>'+
        '</div><div style="text-align:right;margin-top:.6rem"><button class="btn-sm btn-danger js-sd" data-i="'+i+'"><span class="ic" data-i="trash"></span> Hapus</button></div></div>';
    }).join("");
    $all(".js-sv",wrap).forEach(function(el){el.addEventListener("input",function(){draft.stats[+el.getAttribute("data-i")].value=el.value;});});
    $all(".js-sl",wrap).forEach(function(el){el.addEventListener("input",function(){draft.stats[+el.getAttribute("data-i")].label=el.value;});});
    $all(".js-sd",wrap).forEach(function(b){b.addEventListener("click",function(){draft.stats.splice(+b.getAttribute("data-i"),1);renderStatEditor();});});
    hydrateIcons(wrap);
  }

  function renderPortEditor(){
    var wrap=$("#f-ports");
    wrap.innerHTML=draft.portfolio.map(function(p,i){
      var thumb=p.logo?'<img src="'+esc(p.logo)+'" alt="">':'<span>'+esc((p.name||"").slice(0,8)||"Logo")+'</span>';
      return '<div class="port-edit"><div class="port-thumb">'+thumb+'</div>'+
        '<div class="grow field" style="margin:0"><label>Nama brand</label><input class="input js-pn" data-i="'+i+'" type="text" value="'+esc(p.name)+'"></div>'+
        '<div class="port-edit-actions">'+
          '<button class="icon-btn js-pu" data-i="'+i+'" title="Naik"><span class="ic" data-i="arrow-up"></span></button>'+
          '<button class="icon-btn js-pd" data-i="'+i+'" title="Turun"><span class="ic" data-i="arrow-down"></span></button>'+
          '<button class="icon-btn js-pf" data-i="'+i+'" title="Upload logo"><span class="ic" data-i="upload-simple"></span></button>'+
          '<button class="icon-btn js-px" data-i="'+i+'" title="Hapus"><span class="ic" data-i="trash"></span></button>'+
        '</div><input type="file" accept="image/*" class="js-file hidden" data-i="'+i+'"></div>';
    }).join("");
    $all(".js-pn",wrap).forEach(function(el){el.addEventListener("input",function(){draft.portfolio[+el.getAttribute("data-i")].name=el.value;});});
    $all(".js-pu",wrap).forEach(function(b){b.addEventListener("click",function(){var i=+b.getAttribute("data-i");if(i>0){swap(draft.portfolio,i,i-1);renderPortEditor();}});});
    $all(".js-pd",wrap).forEach(function(b){b.addEventListener("click",function(){var i=+b.getAttribute("data-i");if(i<draft.portfolio.length-1){swap(draft.portfolio,i,i+1);renderPortEditor();}});});
    $all(".js-px",wrap).forEach(function(b){b.addEventListener("click",function(){draft.portfolio.splice(+b.getAttribute("data-i"),1);renderPortEditor();});});
    $all(".js-pf",wrap).forEach(function(b){b.addEventListener("click",function(){var f=wrap.querySelector('.js-file[data-i="'+b.getAttribute("data-i")+'"]');if(f)f.click();});});
    $all(".js-file",wrap).forEach(function(inp){inp.addEventListener("change",function(){
      var file=inp.files&&inp.files[0]; if(!file) return; var i=+inp.getAttribute("data-i");
      processLogo(file).then(function(d){ draft.portfolio[i].logo=d; renderPortEditor(); });
    });});
    hydrateIcons(wrap);
  }
  function swap(a,i,j){var t=a[i];a[i]=a[j];a[j]=t;}

  function processLogo(file){ return readFile(file).then(function(d){return downscale(d,480,240);}); }
  function readFile(file){ return new Promise(function(res,rej){var r=new FileReader();r.onload=function(){res(r.result);};r.onerror=rej;r.readAsDataURL(file);}); }
  function downscale(dataUrl,maxW,maxH){
    return new Promise(function(res){
      var img=new Image();
      img.onload=function(){
        var w=img.width,h=img.height,r=Math.min(maxW/w,maxH/h,1),cw=Math.max(1,Math.round(w*r)),ch=Math.max(1,Math.round(h*r));
        var c=document.createElement("canvas");c.width=cw;c.height=ch;
        try{c.getContext("2d").drawImage(img,0,0,cw,ch);res(c.toDataURL("image/png"));}catch(e){res(dataUrl);}
      };
      img.onerror=function(){res(dataUrl);}; img.src=dataUrl;
    });
  }

  function collectCase(){
    return {
      enabled:$("#f-case-on").checked,
      client:$("#f-case-client").value, challenge:$("#f-case-challenge").value, solution:$("#f-case-solution").value,
      results:[ {value:$("#f-case-r1v").value,label:$("#f-case-r1l").value}, {value:$("#f-case-r2v").value,label:$("#f-case-r2l").value} ]
    };
  }
  function saveDraft(){
    draft.caseStudy=collectCase();
    state=JSON.parse(JSON.stringify(draft));
    var ok=Store.write(KEY,state); renderAll();
    toast(ok?"Tersimpan \u2713":"Disimpan sementara (deploy untuk permanen)");
  }
  function resetDefaults(){
    if(!window.confirm("Reset semua konten ke pengaturan default? Perubahanmu akan hilang.")) return;
    state=JSON.parse(JSON.stringify(DEFAULTS)); Store.write(KEY,state);
    draft=JSON.parse(JSON.stringify(state)); fillEditor(); renderAll(); toast("Direset ke default");
  }
  function logout(){ try{sessionStorage.removeItem(SESS);}catch(e){} showGate(); }

  function bindAdmin(){
    $("#admin-login").addEventListener("click",tryLogin);
    $("#admin-pass").addEventListener("keydown",function(e){if(e.key==="Enter")tryLogin();});
    $("#admin-close").addEventListener("click",closeAdmin);
    $("#f-save").addEventListener("click",saveDraft);
    $("#f-reset").addEventListener("click",resetDefaults);
    $("#f-logout").addEventListener("click",logout);
    $("#f-walink").addEventListener("input",function(e){draft.waLink=e.target.value;});
    $("#f-wa").addEventListener("input",function(e){draft.wa=e.target.value;});
    $("#f-wamsg").addEventListener("input",function(e){draft.waMsg=e.target.value;});
    $("#f-headline").addEventListener("input",function(e){draft.hero.headline=e.target.value;});
    $("#f-subhead").addEventListener("input",function(e){draft.hero.subhead=e.target.value;});
    $("#f-stat-add").addEventListener("click",function(){ if(draft.stats.length>=4){toast("Maksimal 4 statistik");return;} draft.stats.push({value:"0%",label:"Keterangan"}); renderStatEditor(); });
    $("#f-port-add").addEventListener("click",function(){ draft.portfolio.push({name:"Brand baru",logo:""}); renderPortEditor(); });
    overlay.addEventListener("click",function(e){ if(e.target===overlay) closeAdmin(); });
    document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&overlay.classList.contains("open")) closeAdmin(); });
    window.addEventListener("hashchange",function(){ if(location.hash==="#admin") openAdmin(); });
    if(location.hash==="#admin") openAdmin();
  }

  /* ---------- WhatsApp live demo (plays once on reveal; reduced-motion/no-JS = static) ---------- */
  function playWaDemo(){
    var body=$("#waBody"), tag=$("#waTag");
    if(!body) return;
    var msgs=$all(".wa-msg",body), i=0;
    function step(){
      if(i>=msgs.length){ if(tag) setTimeout(function(){tag.classList.add("show");},300); return; }
      var m=msgs[i], isOut=m.classList.contains("wa-out");
      if(isOut){
        var t=document.createElement("div"); t.className="wa-typing"; t.innerHTML="<i></i><i></i><i></i>";
        body.insertBefore(t,m);
        setTimeout(function(){ if(t.parentNode)body.removeChild(t); m.classList.add("show"); i++; setTimeout(step,650); },1150);
      } else {
        setTimeout(function(){ m.classList.add("show"); i++; setTimeout(step,560); }, i===0?350:560);
      }
    }
    step();
  }
  function initWaDemo(){
    var demo=$("#waDemo"); if(!demo) return;
    if(reduce||!("IntersectionObserver" in window)) return;
    demo.classList.add("anim");
    var obs=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ playWaDemo(); obs.disconnect(); } }); },{threshold:0.3});
    obs.observe(demo);
  }

  /* ---------- count-up numeric stats (once on reveal) ---------- */
  function animateCounts(){
    var grid=$("#stats-grid"); if(!grid||reduce||!("IntersectionObserver" in window)) return;
    var obs=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(!e.isIntersecting) return;
        $all(".stat-num",grid).forEach(function(el){
          var mm=String(el.textContent).trim().match(/^(\d+)([^\d]*)$/); if(!mm) return;
          var target=parseInt(mm[1],10), suf=mm[2], start=null, dur=1100;
          el.textContent="0"+suf;
          (function tick(ts){ if(!start)start=ts; var p=Math.min((ts-start)/dur,1); el.textContent=Math.round((1-Math.pow(1-p,3))*target)+suf; if(p<1)requestAnimationFrame(tick); })(performance.now());
        });
        obs.disconnect();
      });
    },{threshold:0.4});
    obs.observe(grid);
  }

  /* ---------- init ---------- */
  hydrateIcons(document);
  renderAll();
  bindMenu();
  initWaDemo();
  animateCounts();
  /* sticky mobile CTA: reveal once hero scrolls out of view (IO, not scroll listener) */
  (function(){
    var hero=document.getElementById("hero"), bar=document.getElementById("stickyCta");
    if(hero&&bar&&"IntersectionObserver" in window){
      new IntersectionObserver(function(es){es.forEach(function(e){bar.classList.toggle("show",!e.isIntersecting);});},{threshold:0}).observe(hero);
    }
  })();
  bindAdmin();
})();
