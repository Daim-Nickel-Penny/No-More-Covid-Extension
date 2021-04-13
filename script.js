replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    // element.textContent = element.textContent.replace(/coronavirus/gi, "■■■■");
    element.textContent = element.textContent.replace(/covid/gi, "■■■■");
    element.textContent = element.textContent.replace(/-19/gi, "■■■■");
    // element.textContent = element.textContent.replace(/corona/gi, "■■■■");
    // element.textContent = element.textContent.replace(/virus/gi, "■■■■");

    if (element.textContent.match(/coronavirus/gi)) {
      element.parentElement.remove();
    }
  }
}
