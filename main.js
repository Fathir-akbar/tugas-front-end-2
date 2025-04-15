const plans = {
    basic: {
      title: "Basic",
      name: "Starter Pack",
      price: "$40",
      desc: "Get 25 essential icons monthly for small projects or personal use.",
      features: [
        "SVG only",
        "Limited license"
      ]
    },
    standard: {
      title: "Standard",
      name: "Icon Sets",
      price: "$120",
      desc: "Up to 100 creative & professional icons + two color versions/themes per month",
      features: [
        "Included source files",
        "Converted to responsive components"
      ]
    },
    premium: {
      title: "Premium",
      name: "Ultimate Kit",
      price: "$250",
      desc: "Everything in Standard plus animations, 200+ icons, and commercial use license.",
      features: [
        "Animated & static icons",
        "Commercial license"
      ]
    }
  };
  
  function selectPlan(planKey) {
    const plan = plans[planKey];
  
    // Update tab active class
    document.querySelectorAll('.tab button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${planKey}`).classList.add('active');
  
    // Render content
    const cardContent = `
      <h4>${plan.title}</h4>
      <h2>${plan.name}</h2>
      <p class="price">${plan.price}</p>
      <p>${plan.desc}</p>
      <ul>
        ${plan.features.map(f => `<li>${f}</li>`).join("")}
      </ul>
      <button class="btn" onclick="showToast()">Add to cart</button>
    `;
  
    document.getElementById("card-content").innerHTML = cardContent;
  }
  
  function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
  