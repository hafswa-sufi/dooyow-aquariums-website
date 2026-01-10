/* =========================
   FISH DATA (CATALOG)
========================= */

const fishCatalog = {
  angelfish: [
    {
      name: "Pomacanthus chrysurus",
      size: "13–15 cm",
      image: "assets/images/fish/pomacanthus-chrysurus.jpg"
    },
    {
      name: "Pomacanthus maculosus",
      size: "7–11 cm",
      image: "assets/images/fish/pomacanthus-maculosus.jpg"
    },
    {
      name: "Pomacanthus imperator",
      size: "Small–Medium",
      image: "assets/images/fish/pomacanthus-imperator.jpg"
    },
    {
      name: "Hybrid Angelfish",
      size: "Medium",
      image: "assets/images/fish/hybrid-angelfish.jpg"
    }
  ],

  surgeonfish: [
    {
      name: "Acanthurus leucosternon",
      size: "Medium",
      image: "assets/images/fish/acanthurus-leucosternon.jpg"
    },
    {
      name: "Acanthurus lineatus",
      size: "Medium",
      image: "assets/images/fish/acanthurus-lineatus.jpg"
    },
    {
      name: "Acanthurus triostegus",
      size: "Small–Medium",
      image: "assets/images/fish/acanthurus-triostegus.jpg"
    },
    {
      name: "Ctenochaetus marginatus",
      size: "Small–Medium",
      image: "assets/images/fish/ctenochaetus-marginatus.jpg"
    }
  ],

  wrasses: [
    {
      name: "Labroides Cleaner",
      size: "Small",
      image: "assets/images/fish/labroides-cleaner.jpg"
    },
    {
      name: "Nemateleotris magnifica",
      size: "Small",
      image: "assets/images/fish/nemateleotris-magnifica.jpg"
    },
    {
      name: "Bipartitus (Female)",
      size: "Small",
      image: "assets/images/fish/bipartitus-female.jpg"
    },
    {
      name: "Iridis Wrasse",
      size: "Medium",
      image: "assets/images/fish/iridis-wrasse.jpg"
    },
    {
      name: "Coris agulata",
      size: "Medium",
      image: "assets/images/fish/coris-agulata.jpg"
    }
  ],

  butterflyfish: [
    {
      name: "Chaetodon auriga",
      size: "Medium",
      image: "assets/images/fish/chaetodon-auriga.jpg"
    }
  ],

  others: [
    {
      name: "Acanthops",
      size: "Small",
      image: "assets/images/fish/acanthops.jpg"
    }
  ]
};

/* =========================
   HELPERS
========================= */

const fishGrid = document.getElementById("fish-grid");
const tabButtons = document.querySelectorAll(".tab-btn");
const WHATSAPP_NUMBER = "+254 739 776 622";

function createFishCard(fish) {
  const message = encodeURIComponent(
    `Hello, I’m interested in wholesale availability of ${fish.name}.`
  );

  return `
    <div class="fish-card">
      <img src="${fish.image}" alt="${fish.name}" />
      <div class="fish-card-content">
        <h3>${fish.name}</h3>
        <span>Size: ${fish.size}</span>
        <br />
        <a
          class="enquire-btn"
          href="https://wa.me/${WHATSAPP_NUMBER}?text=${message}"
          target="_blank"
        >
          Enquire
        </a>
      </div>
    </div>
  `;
}

/* =========================
   RENDER LOGIC
========================= */

function renderFish(category = "all") {
  fishGrid.innerHTML = "";

  let fishToRender = [];

  if (category === "all") {
    Object.values(fishCatalog).forEach(group => {
      fishToRender = fishToRender.concat(group);
    });
  } else {
    fishToRender = fishCatalog[category] || [];
  }

  if (fishToRender.length === 0) {
    fishGrid.innerHTML = "<p>No fish available.</p>";
    return;
  }

  fishToRender.forEach(fish => {
    fishGrid.innerHTML += createFishCard(fish);
  });
}

/* =========================
   TAB INTERACTION
========================= */

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.dataset.category;
    renderFish(category);
  });
});

/* =========================
   INITIAL LOAD
========================= */

renderFish("all");
