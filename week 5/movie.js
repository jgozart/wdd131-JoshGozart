document.addEventListener("DOMContentLoaded", () => {
  const ratingSpans = document.querySelectorAll(".movie span");

  ratingSpans.forEach(span => {
    const stars = span.textContent.trim();
    const starCount = stars.length;

    if (starCount > 0) {
      span.setAttribute(
        "aria-label",
        `${starCount} out of 5 stars`
      );
      span.setAttribute("role", "img");
    }
  });
});
