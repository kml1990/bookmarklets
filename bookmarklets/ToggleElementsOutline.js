javascript:(function(){
    window.isElementsOutlineVisible = !Boolean(window.isElementsOutlineVisible);
    const elementsOutlinesId = 'elementsOutlines';
    if (window.isElementsOutlineVisible) {
        const outlineStyles = `<style id="${elementsOutlinesId}">* { outline: 1px dashed red !important }</style>`;
        document.head.insertAdjacentHTML("beforeend", outlineStyles);
        return;
    };
    document.getElementById(elementsOutlinesId)?.remove();
})();