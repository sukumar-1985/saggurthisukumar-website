const modal = document.getElementById("certificateModal");
const certificateImage = document.getElementById("certificateImage");
const skillCards = document.querySelectorAll(".skill-card");
const closeBtn = document.querySelector(".close-modal");

// Open modal when clicking skill cards
skillCards.forEach((card) => {
  card.addEventListener("click", () => {
    const certificateUrl = card.getAttribute("data-certificate");
    certificateImage.src = certificateUrl;
    modal.style.display = "flex";
  });
});

// Close modal when clicking close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when pressing escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.style.display = "none";
  }
});

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const projectModal = document.getElementById("projectModal");
  const projectIframe = document.getElementById("projectIframe");
  const projectTitle = document.getElementById("projectTitle");
  const projectCards = document.querySelectorAll(".project-card");
  const closeProjectBtn = document.querySelector(".close-project-modal");
  const loadingSpinner = document.querySelector(".loading-spinner");
  const openNewTabBtn = document.getElementById("openNewTab");
  let currentProjectUrl = "";

  // Function to handle project opening
  const openProject = (url, title) => {
    currentProjectUrl = url;
    projectTitle.textContent = title;
    loadingSpinner.style.display = "block";
    projectIframe.style.opacity = "0";
    projectModal.style.display = "flex";
    projectIframe.src = url;
  };

  // Open project when clicking view button
  projectCards.forEach((card) => {
    const viewBtn = card.querySelector(".view-project-btn");
    viewBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectUrl = card.getAttribute("data-project-url");
      const title = card.getAttribute("data-project-title");
      openProject(projectUrl, title);
    });
  });

  // Open in new tab button
  openNewTabBtn.addEventListener("click", () => {
    if (currentProjectUrl) {
      window.open(currentProjectUrl, "_blank");
    }
  });

  // Hide loading spinner when iframe loads
  projectIframe.addEventListener("load", () => {
    loadingSpinner.style.display = "none";
    projectIframe.style.opacity = "1";
  });

  // Close modal functionality
  const closeModal = () => {
    projectModal.style.display = "none";
    projectIframe.src = "";
    currentProjectUrl = "";
  };

  closeProjectBtn.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      closeModal();
    }
  });
});
