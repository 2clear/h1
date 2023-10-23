window.homepage = window.homepage || {};
window.homepage.RenderUtil = ((content) => {
  const _redirectMessage = ({ text, keybind }) => {
    return `Redirecting [${keybind}]: "${text}"!`;
  };

  const _generateContent = (contentArray) => {
    return contentArray
      .map(
        ({ text, url, keybind }) =>
          `<p>[${keybind}] <a href="${url}">${text}</a></p>`
      )
      .reduce((a, b) => a + b, '');
  };

  return {
    init: ({ containerId, baseContentId, tempContentId }) => {
      const $containerSelector = document.querySelector(containerId);
      const $baseContentSelector = document.querySelector(baseContentId);
      const $tempContentSelector = document.querySelector(tempContentId);

      const { baseContent, tempContent } = content.getContent();

      /* 
        ^ baseContent and tempContent are type ContentItem:

        type ContentItem {
            text: string;
            url: string; 
            keybind: string;
        }
      */

      $baseContentSelector.innerHTML = _generateContent(baseContent);
      $tempContentSelector.innerHTML = _generateContent(tempContent);

      document.addEventListener('keydown', ({ key }) =>
        [
          [...baseContent, ...tempContent].find(
            ({ keybind }) =>
              String(key).toUpperCase() === String(keybind).toUpperCase()
          ),
        ]
          .filter(Boolean)
          .map(({ text, url, keybind }) => {
            $containerSelector.innerHTML = _redirectMessage({ text, keybind });
            document.location.href = url;
          })
      );
    },
  };
})(window.homepage.Content);
