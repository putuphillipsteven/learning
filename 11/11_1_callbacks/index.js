function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => {
    callback(null, script);
  };
  script.onerror = () => {
    callback(new Error(`Script load error for ${src}`));
  };
  document.head.append(script);
}
loadScript("test.js", (error, script) => {
  if (error) {
    alert(error);
  } else {
    alert(`Script ${script.src} loaded successfully`);
  }
});
