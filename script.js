document.addEventListener("DOMContentLoaded", () => {
    const shape1 = document.getElementById("shape1");
    const shape2 = document.getElementById("shape2");

    if (window.location.pathname.includes("page2.html")) {
        shape1.setAttribute("d", "M 70 50 Q 100 20, 130 50 T 230 50 L 230 150 Q 180 180, 130 150 T 70 150 Z");
        shape2.setAttribute("d", "M 230 50 Q 200 20, 170 50 T 70 50 L 70 150 Q 120 180, 170 150 T 230 150 Z");
    }

    if (window.location.pathname.includes("page3.html")) {
        shape1.setAttribute("d", "M 90 50 Q 110 30, 130 50 T 210 50 L 210 150 Q 160 160, 130 150 T 90 150 Z");
        shape2.setAttribute("d", "M 210 50 Q 190 30, 170 50 T 90 50 L 90 150 Q 140 160, 170 150 T 210 150 Z");
    }

    if (window.location.pathname.includes("page4.html")) {
        shape1.setAttribute("d", "M 110 50 Q 120 40, 130 50 T 190 50 L 190 150 Q 140 140, 130 150 T 110 150 Z");
        shape2.setAttribute("d", "M 190 50 Q 180 40, 170 50 T 110 50 L 110 150 Q 160 140, 170 150 T 190 150 Z");
    }
});
