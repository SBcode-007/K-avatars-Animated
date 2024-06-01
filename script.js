function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    K-hero/male0001.png 
    K-hero/male0002.png
    K-hero/male0003.png 
    K-hero/male0004.png 
    K-hero/male0005.png 
    K-hero/male0006.png 
    K-hero/male0007.png 
    K-hero/male0008.png 
    K-hero/male0009.png 
    K-hero/male0010.png 
    K-hero/male0011.png 
    K-hero/male0012.png 
    K-hero/male0013.png 
    K-hero/male0014.png 
    K-hero/male0015.png 
    K-hero/male0016.png 
    K-hero/male0017.png 
    K-hero/male0018.png 
    K-hero/male0019.png 
    K-hero/male0020.png 
    K-hero/male0021.png 
    K-hero/male0022.png 
    K-hero/male0023.png 
    K-hero/male0024.png 
    K-hero/male0025.png 
    K-hero/male0026.png 
    K-hero/male0027.png 
    K-hero/male0028.png 
    K-hero/male0029.png 
    K-hero/male0030.png 
    K-hero/male0031.png 
    K-hero/male0032.png 
    K-hero/male0033.png 
    K-hero/male0034.png 
    K-hero/male0035.png 
    K-hero/male0036.png 
    K-hero/male0037.png 
    K-hero/male0038.png 
    K-hero/male0039.png 
    K-hero/male0040.png 
    K-hero/male0041.png 
    K-hero/male0042.png 
    K-hero/male0043.png 
    K-hero/male0044.png 
    K-hero/male0045.png 
    K-hero/male0046.png 
    K-hero/male0047.png 
    K-hero/male0048.png 
    K-hero/male0049.png 
    K-hero/male0050.png 
    K-hero/male0051.png 
    K-hero/male0052.png 
    K-hero/male0053.png 
    K-hero/male0054.png 
    K-hero/male0055.png 
    K-hero/male0056.png 
    K-hero/male0057.png 
    K-hero/male0058.png 
    K-hero/male0059.png 
    K-hero/male0060.png 
    K-hero/male0061.png 
    K-hero/male0062.png 
    K-hero/male0063.png 
    K-hero/male0064.png 
    K-hero/male0065.png 
    K-hero/male0066.png 
    K-hero/male0067.png 
    K-hero/male0068.png 
    K-hero/male0069.png 
    K-hero/male0070.png 
    K-hero/male0071.png 
    K-hero/male0072.png 
    K-hero/male0073.png 
    K-hero/male0074.png 
    K-hero/male0075.png 
    K-hero/male0076.png 
    K-hero/male0077.png 
    K-hero/male0078.png 
    K-hero/male0079.png 
    K-hero/male0080.png 
    K-hero/male0081.png 
    K-hero/male0082.png 
    K-hero/male0083.png 
    K-hero/male0084.png 
    K-hero/male0085.png 
    K-hero/male0086.png 
    K-hero/male0087.png 
    K-hero/male0088.png 
    K-hero/male0089.png 
    K-hero/male0090.png 
    K-hero/male0091.png 
    K-hero/male0092.png 
    K-hero/male0093.png 
    K-hero/male0094.png 
    K-hero/male0095.png 
    K-hero/male0096.png 
    K-hero/male0097.png 
    K-hero/male0098.png 
    K-hero/male0099.png 
    K-hero/male0100.png 
    K-hero/male0101.png 
    K-hero/male0102.png 
    K-hero/male0103.png 
    K-hero/male0104.png 
    K-hero/male0105.png 
    K-hero/male0106.png 
    K-hero/male0107.png 
    K-hero/male0108.png 
    K-hero/male0109.png 
    K-hero/male0110.png 
    K-hero/male0111.png 
    K-hero/male0112.png 
    K-hero/male0113.png 
    K-hero/male0114.png 
    K-hero/male0115.png 
    K-hero/male0116.png 
    K-hero/male0117.png 
    K-hero/male0118.png 
    K-hero/male0119.png 
    K-hero/male0120.png 
    K-hero/male0121.png 
    K-hero/male0122.png 
    K-hero/male0123.png 
    K-hero/male0124.png 
    K-hero/male0125.png 
    K-hero/male0126.png 
    K-hero/male0127.png 
    K-hero/male0128.png 
    K-hero/male0129.png 
    K-hero/male0130.png 
    K-hero/male0131.png 
    K-hero/male0132.png 
    K-hero/male0133.png 
    K-hero/male0134.png 
    K-hero/male0135.png 
    K-hero/male0136.png 
    K-hero/male0137.png 
    K-hero/male0138.png 
    K-hero/male0139.png 
    K-hero/male0140.png 
    K-hero/male0141.png 
    K-hero/male0142.png 
    K-hero/male0143.png 
    K-hero/male0144.png 
    K-hero/male0145.png 
    K-hero/male0146.png 
    K-hero/male0147.png 
    K-hero/male0148.png 
    K-hero/male0149.png 
    K-hero/male0150.png 
    K-hero/male0151.png 
    K-hero/male0152.png 
    K-hero/male0153.png 
    K-hero/male0154.png 
    K-hero/male0155.png 
    K-hero/male0156.png 
    K-hero/male0157.png 
    K-hero/male0158.png 
    K-hero/male0159.png 
    K-hero/male0160.png 
    K-hero/male0161.png 
    K-hero/male0162.png 
    K-hero/male0163.png 
    K-hero/male0164.png 
    K-hero/male0165.png 
    K-hero/male0166.png 
    K-hero/male0167.png 
    K-hero/male0168.png 
    K-hero/male0169.png 
    K-hero/male0170.png 
    K-hero/male0171.png 
    K-hero/male0172.png 
    K-hero/male0173.png 
    K-hero/male0174.png 
    K-hero/male0175.png 
    K-hero/male0176.png 
    K-hero/male0177.png 
    K-hero/male0178.png 
    K-hero/male0179.png 
    K-hero/male0180.png 
    K-hero/male0181.png 
    K-hero/male0182.png 
    K-hero/male0183.png 
    K-hero/male0184.png 
    K-hero/male0185.png 
    K-hero/male0186.png 
    K-hero/male0187.png 
    K-hero/male0188.png 
    K-hero/male0189.png 
    K-hero/male0190.png 
    K-hero/male0191.png 
    K-hero/male0192.png 
    K-hero/male0193.png 
    K-hero/male0194.png 
    K-hero/male0195.png 
    K-hero/male0196.png 
    K-hero/male0197.png 
    K-hero/male0198.png 
    K-hero/male0199.png 
    K-hero/male0200.png 
    K-hero/male0201.png 
    K-hero/male0202.png 
    K-hero/male0203.png 
    K-hero/male0204.png 
    K-hero/male0205.png 
    K-hero/male0206.png 
    K-hero/male0207.png 
    K-hero/male0208.png 
    K-hero/male0209.png 
    K-hero/male0210.png 
    K-hero/male0211.png 
    K-hero/male0212.png 
    K-hero/male0213.png 
    K-hero/male0214.png 
    K-hero/male0215.png 
    K-hero/male0216.png 
    K-hero/male0217.png 
    K-hero/male0218.png 
    K-hero/male0219.png 
    K-hero/male0220.png 
    K-hero/male0221.png 
    K-hero/male0222.png 
    K-hero/male0223.png 
    K-hero/male0224.png 
    K-hero/male0225.png 
    K-hero/male0226.png 
    K-hero/male0227.png 
    K-hero/male0228.png 
    K-hero/male0229.png 
    K-hero/male0230.png 
    K-hero/male0231.png 
    K-hero/male0232.png 
    K-hero/male0233.png 
    K-hero/male0234.png 
    K-hero/male0235.png 
    K-hero/male0236.png 
    K-hero/male0237.png 
    K-hero/male0238.png 
    K-hero/male0239.png 
    K-hero/male0240.png 
    K-hero/male0241.png 
    K-hero/male0242.png 
    K-hero/male0243.png 
    K-hero/male0244.png 
    K-hero/male0245.png 
    K-hero/male0246.png 
    K-hero/male0247.png 
    K-hero/male0248.png 
    K-hero/male0249.png 
    K-hero/male0250.png 
    K-hero/male0251.png 
    K-hero/male0252.png 
    K-hero/male0253.png 
    K-hero/male0254.png 
    K-hero/male0255.png 
    K-hero/male0256.png 
    K-hero/male0257.png 
    K-hero/male0258.png 
    K-hero/male0259.png 
    K-hero/male0260.png 
    K-hero/male0261.png 
    K-hero/male0262.png 
    K-hero/male0263.png 
    K-hero/male0264.png 
    K-hero/male0265.png 
    K-hero/male0266.png 
    K-hero/male0267.png 
    K-hero/male0268.png 
    K-hero/male0269.png 
    K-hero/male0270.png 
    K-hero/male0271.png 
    K-hero/male0272.png 
    K-hero/male0273.png 
    K-hero/male0274.png 
    K-hero/male0275.png 
    K-hero/male0276.png 
    K-hero/male0277.png 
    K-hero/male0278.png 
    K-hero/male0279.png 
    K-hero/male0280.png 
    K-hero/male0281.png 
    K-hero/male0282.png 
    K-hero/male0283.png 
    K-hero/male0284.png 
    K-hero/male0285.png 
    K-hero/male0286.png 
    K-hero/male0287.png 
    K-hero/male0288.png 
    K-hero/male0289.png 
    K-hero/male0290.png 
    K-hero/male0291.png 
    K-hero/male0292.png 
    K-hero/male0293.png 
    K-hero/male0294.png 
    K-hero/male0295.png 
    K-hero/male0296.png 
    K-hero/male0297.png 
    K-hero/male0298.png 
    K-hero/male0299.png 
    K-hero/male0300.png 
    script.js`;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
//   set start end according to preference
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1",{
  scrollTrigger:{
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    zIndex: "99",
    scroller: `#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    pin: true,
    scroller: `#main`
  }
})

gsap.to("#nav>#left>h3, #nav>#right>h4", {
  color: "#fff",
  duration:0.1,
  scrollTrigger:{
      trigger: "#nav",
      scroller: "#main",
      // markers: true,
      start: "top -760%",
      end: "top -900%",
      scrub: 1,
  },
});

gsap.from("#footer>#social button",{
  scale: 0.8,
  opacity:0,
  duration:3,
  stagger: 3,
  scrollTrigger:{
      trigger:"#footer>#social",
      scroller:"#main",
      // markers:true,
      start:"top 50%",
      end:"top 55%",
      scrub:1,
  },
});
gsap.from("#footer>#text7",{
  y:90,
  opacity:0,
  duration:8,
  // stagger: 0.4,
  scrollTrigger:{
      trigger:"#footer>#text7",
      scroller:"#main",
      // markers:true,
      start:"top 27%",
      end:"top 37%",
      scrub:1,
  },
});