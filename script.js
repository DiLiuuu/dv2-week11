// Function to embed a Vega-Lite visualization
function embedVegaLite(specPath, map) {
    fetch(specPath)
        .then((response) => response.json())
        .then((spec) => {
            vegaEmbed(`#${map}`, spec);
        })
        .catch((error) => {
            console.error("Error loading Vega-Lite spec:", error);
        });
}

// Use the function
document.addEventListener("DOMContentLoaded", function () {
    embedVegaLite("Map.json", "map");
});
