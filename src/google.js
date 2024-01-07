export default function GoogleAnalyticsScript({ enabled }) {
  if (enabled) {
    console.log("Script permissions enabled");

    /* (function (w, d, s, l, i) {
      w[l] = w[l] || [];

      w[l].push({
        event: "initial setup",
        programmeCode: "partner",
        iso: "GB",
        custom_timestamp: Date.now(),
      });

      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src =
        "https://www.googletagmanager.com/gtm.js?id=" + i + dl + "&gtm_auth=";
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "G-D9E6DEPHJ9"); */
  } else {
    console.log(`Script permissions not enabled.`);
  }

  return null;
}
