function toggleImages(containerSelector) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
      const images = container.querySelectorAll('img');
      let index = 0;

      // Function to show the current image
      function showImage() {
        images.forEach((img, i) => {
          img.style.opacity = i === index ? '1' : '0';
        });
        index = (index + 1) % images.length;
      }

      // Run the first transition shortly after load
      setTimeout(showImage, 100);

      // Then loop every 3 seconds
      setInterval(showImage, 3000);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    toggleImages('.image-swap');
  });

  const marketTab = document.getElementById('marketTab');
    const segmentTab = document.getElementById('segmentTab');
    const marketsSection = document.getElementById('marketsSection');
    const segmentsSection = document.getElementById('segmentsSection');

    const marketCardTemplate = document.getElementById('marketCardTemplate').content;
    const segmentCardTemplate = document.getElementById('segmentCardTemplate').content;

    const marketData = [
  {
    title: "Adhesive and Sealants",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
   imgSrc: "pics/markets/tape.svg"
},
  {
    title: "Agriculture",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
    imgSrc: "pics/markets/agriculture.svg"
  },
  {
    title: "Textile, Leather and Footwear",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/clothesline.svg"
},
  {
    title: "Construction",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/bulldozer.svg"
},
  {
    title: "Furniture and Wood",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/wood.svg"
},
  {
    title: "Housecare and I&I",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/mop.svg"
},
  {
    title: "Nutrition",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/carrot.svg"
},
  {
    title: "Packaging, Print and Paper",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/delivery.svg"
},
  {
    title: "Paints and Coating",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/paint.svg"
},
  {
    title: "Personal Care and Hygiene",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/hygiene.svg"
},
  {
    title: "Pharmaceuticals",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/pills.svg"
},
  {
    title: "Plastics and Rubber",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/markets/Group 31.svg"
 }
];

marketData.forEach(({ title, desc, imgSrc }) => {
  const card = marketCardTemplate.cloneNode(true);
  card.querySelector('h2').textContent = title;
  card.querySelector('p').textContent = desc;
  if (imgSrc) card.querySelector('img').src = imgSrc;
  marketsSection.appendChild(card);
});



   const segmentData = [
  {
    title: "Materials",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/segments/science.svg"
},
  {
    title: "Microbial Control",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/segments/Vector.svg"
},
  {
    title: "Industrial Solutions",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/segments/Vector-1.svg"
},
  {
    title: "Surface Technologies",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/segments/tech.svg"
},
  {
    title: "Nutrition and care",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/segments/Vector-2.svg"
},
  {
    title: "Agricultural Solutions",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
  imgSrc: "pics/segments/Group.svg"
},
  {
    title: "Chemicals",
    desc: "Basic chemicals including ethylene, propylene, propylene oxide, ethylene oxide, tertiary butyl alcohol, methanol, acetic acid and their derivatives.",
   imgSrc: "pics/segments/tt.svg"
  }
];

segmentData.forEach(({ title, desc, imgSrc }) => {
  const card = segmentCardTemplate.cloneNode(true);
  card.querySelector('h2').textContent = title;
  card.querySelector('p').textContent = desc;
  if (imgSrc) card.querySelector('img').src = imgSrc;
  segmentsSection.appendChild(card);
});



    function switchTabs(showMarket) {
      if (showMarket) {
        marketTab.classList.add('tab-active');
        marketTab.classList.remove('tab-inactive');
        segmentTab.classList.remove('tab-active');
        segmentTab.classList.add('tab-inactive');
        segmentsSection.classList.remove('show');
        segmentsSection.classList.add('hidden');
        marketsSection.classList.remove('hidden');
        setTimeout(() => marketsSection.classList.add('show'), 10);
      } else {
        segmentTab.classList.add('tab-active');
        segmentTab.classList.remove('tab-inactive');
        marketTab.classList.remove('tab-active');
        marketTab.classList.add('tab-inactive');
        marketsSection.classList.remove('show');
        marketsSection.classList.add('hidden');
        segmentsSection.classList.remove('hidden');
        setTimeout(() => segmentsSection.classList.add('show'), 10);
      }
    }

    marketTab.addEventListener('click', () => switchTabs(true));
    segmentTab.addEventListener('click', () => switchTabs(false));
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items.forEach((el) => observer.observe(el));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in-up, .fade-scale, .fade-zoom");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
  });

function scaleLayout() {
  const layout = document.querySelector('.fixed-layout');
  const scaleX = window.innerWidth / 1440;
  //const scaleY = window.innerHeight / 4440;
  const scale = Math.min(scaleX, scaleY);
  layout.style.transform = `scale(${scale})`;
  layout.style.transformOrigin = 'top left'; // <— very important!
}
window.addEventListener('load', scaleLayout);
window.addEventListener('resize', scaleLayout);


