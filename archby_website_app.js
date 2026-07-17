// Render the links dynamically from config.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("socials-container");
    
    if (container && CONFIG && CONFIG.links) {
        CONFIG.links.forEach(link => {
            const card = document.createElement("a");
            card.href = link.url;
            card.className = "link-card";
            card.target = "_blank";
            card.rel = "noopener noreferrer";

            const title = document.createElement("div");
            title.className = "link-title";
            title.textContent = link.title;

            const desc = document.createElement("div");
            desc.className = "link-desc";
            desc.textContent = link.description || "";

            card.appendChild(title);
            card.appendChild(desc);
            container.appendChild(card);
        });
    }
});
