!function(){function t(t){var e=/^(http(?:s)?\:\/\/[a-zA-Z0-9]+(?:(?:\.|\-)[a-zA-Z0-9]+)+(?:\:\d+)?(?:\/[\w\-]+)*(?:\/?|\/\w+\.[a-zA-Z]{2,4}(?:\?[\w]+\=[\w\-]+)?)?(?:\&[\w]+\=[\w\-]+)*)$/;return e.test(t)}function e(t){chrome.storage.sync.set({url:t.url},function(){d.textContent="Options saved.",setTimeout(function(){d.textContent=""},1e3)})}function n(t){chrome.storage.sync.get(null,function(e){t&&"function"==typeof t&&t(e)})}function o(){var n=a.value;t(n)&&(i.setAttribute("disabled","disabled"),e({url:n}))}function s(){t(a.value)?(i.removeAttribute("disabled"),a.classList.remove("error")):(i.setAttribute("disabled","disabled"),a.classList.contains("error")||a.classList.add("error"))}function u(t){t.url&&(a.value=t.url),s()}function r(){i=document.getElementById("btn-save"),a=document.getElementById("url-value"),d=document.getElementById("message"),i.addEventListener("click",o),a.addEventListener("input",s),n(u)}var i,a,d;document.addEventListener("DOMContentLoaded",r)}();