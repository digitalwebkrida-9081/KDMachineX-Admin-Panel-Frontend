lucide.createIcons();
document.addEventListener("DOMContentLoaded", () => {
  // Select all dropdown triggers
  const dropdowns = document.querySelectorAll(".dropdown-trigger");

  dropdowns.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      // Get the parent group (.nav-group)
      const parent = trigger.parentElement;

      // Optional: Close other open dropdowns (Accordion effect)
      document.querySelectorAll(".nav-group").forEach((group) => {
        if (group !== parent) {
          group.classList.remove("open");
        }
      });

      // Toggle the 'open' class on the clicked group
      parent.classList.toggle("open");
    });
  });
});

// =================================================

//               SEO Manager PageSwapEvent

// =====================================================

//  lucide.createIcons();
//  document.addEventListener("DOMContentLoaded", () => {
//    const dropdowns = document.querySelectorAll(".dropdown-trigger");
//    dropdowns.forEach((trigger) => {
//      trigger.addEventListener("click", () => {
//        const parent = trigger.parentElement;
//        document.querySelectorAll(".nav-group").forEach((group) => {
//          if (group !== parent) group.classList.remove("open");
//        });
//        parent.classList.toggle("open");
//      });
//    });
//  });
