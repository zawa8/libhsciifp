google: "code firefox extension to change firefox global font settings."
=====
[ffx7](https://docs.google.com/document/d/16zptauRPhwSGt7VAjuF96b1qNqH1tesxLdHs5Yc4PP4/edit?usp=sharing)
=====
1. manifest.json file:
2. Use the browser.storage.sync API:
This API allows you to store user-configurable options for your extension, like the desired fonts. You can add a settings page to your extension using HTML to allow users to specify their preferred fonts.
3. Implement a content script:
This script will inject CSS that modifies the default fonts of various elements within Firefox. The content script will need to access the stored settings using the browser.storage.sync.get() API to retrieve the user's chosen fonts.
4. Inject CSS rules:
Use the browser.styleSheets.insert() API to add CSS rules that override the default Firefox font settings. The CSS rules will be based on the values retrieved from the stored settings.
Here's a more detailed breakdown and code snippets to get you started:
1. manifest.json:
Code

{
  "manifest_version": 3,
  "name": "Font Changer",
  "version": "1.0",
  "description": "Changes Firefox global font settings.",
  "permissions": [
    "storage",
    "browser_specific_settings"
  ],
  "background": {
    "service_worker": "background.js"
  },
  "options_ui": {
    "page": "options.html",
    "open_in_tab": true
  },
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"],
      "run_at": "document_start"
    }
  ]
}
2. options.html (Settings Page):
Code

<!DOCTYPE html>
<html>
  <head>
    <title>Font Changer Settings</title>
    <link rel="stylesheet" href="options.css">
  </head>
  <body>
    <div id="font-settings">
      <label for="font-family">Font Family:</label>
      <input type="text" id="font-family" name="font-family" />
      <label for="font-size">Font Size (px):</label>
      <input type="number" id="font-size" name="font-size" />
      <button id="save-settings">Save Settings</button>
    </div>
    <script src="options.js"></script>
  </body>
</html>
3. options.js (Settings Page Logic):
JavaScript

document.addEventListener("DOMContentLoaded", function () {
  function saveOptions(event) {
    event.preventDefault();
    const font_family = document.getElementById("font-family").value;
    const font_size = document.getElementById("font-size").value;

    browser.storage.sync.set({
      "font_family": font_family,
      "font_size": font_size
    });

    // You might want to display a success message here
  }

  document.getElementById("save-settings").addEventListener("click", saveOptions);

  // Restore settings on load
  function restoreOptions() {
    browser.storage.sync.get(["font_family", "font_size"], function (result) {
      document.getElementById("font-family").value = result.font_family || "Arial";
      document.getElementById("font-size").value = result.font_size || "16";
    });
  }
  restoreOptions();
});
