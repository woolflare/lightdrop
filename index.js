const mimeTypes = `
  {
    ".7z": "application/x-7z-compressed",
    ".aac": "audio/aac",
    ".avi": "video/avi",
    ".bmp": "image/bmp",
    ".c": "text/plain; charset=utf-8",
    ".cpp": "text/plain; charset=utf-8",
    ".csv": "text/csv; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".doc": "application/msword",
    ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ".flac": "audio/flac",
    ".flv": "video/x-flv",
    ".gif": "image/gif",
    ".gz": "application/gzip",
    ".heic": "image/heic",
    ".htm": "text/html; charset=utf-8",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".java": "text/plain; charset=utf-8",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".kml": "application/vnd.google-earth.kml+xml",
    ".kmz": "application/vnd.google-earth.kmz",
    ".log": "text/plain; charset=utf-8",
    ".m3u": "audio/x-mpegurl",
    ".m3u8": "application/vnd.apple.mpegurl",
    ".m4a": "audio/mp4",
    ".m4p": "audio/mp4",
    ".mkv": "video/x-matroska",
    ".mov": "video/quicktime",
    ".mp3": "audio/mp3",
    ".mp4": "video/mp4",
    ".odp": "application/vnd.oasis.opendocument.presentation",
    ".ods": "application/vnd.oasis.opendocument.spreadsheet",
    ".odt": "application/vnd.oasis.opendocument.text",
    ".ogg": "audio/ogg",
    ".pdf": "application/pdf",
    ".php": "text/plain; charset=utf-8",
    ".png": "image/png",
    ".ppt": "application/vnd.ms-powerpoint",
    ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    ".py": "text/plain; charset=utf-8",
    ".rb": "text/plain; charset=utf-8",
    ".rtf": "application/rtf; charset=utf-8",
    ".shtml": "text/html; charset=utf-8",
    ".svg": "image/svg+xml",
    ".tar": "application/x-tar",
    ".tgz": "application/x-gzip",
    ".txt": "text/plain; charset=utf-8",
    ".wav": "audio/wav",
    ".webm": "video/webm",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".xhtml": "application/xhtml+xml",
    ".xls": "application/vnd.ms-excel",
    ".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ".xml": "application/xml; charset=utf-8",
    ".yaml": "application/yaml",
    ".zip": "application/zip"
  }
`;

const indexHTML = `
  <!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>LightDrop</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.1/qrcode.js"></script>
<style>
  *,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/*! tailwindcss v3.4.16 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.relative{position:relative}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:.5rem}.mt-6{margin-top:1.5rem}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.hidden{display:none}.min-h-screen{min-height:100vh}.max-w-4xl{max-width:56rem}.flex-1{flex:1 1 0%}.cursor-pointer{cursor:pointer}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:.5rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.overflow-x-auto{overflow-x:auto}.rounded-2xl{border-radius:1rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-dashed{border-style:dashed}.border-blue-500{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity,1))}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity,1))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity,1))}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity,1))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity,1))}.bg-gray-700{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity,1))}.bg-green-100{--tw-bg-opacity:1;background-color:rgb(220 252 231/var(--tw-bg-opacity,1))}.bg-green-900{--tw-bg-opacity:1;background-color:rgb(20 83 45/var(--tw-bg-opacity,1))}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity,1))}.bg-red-900{--tw-bg-opacity:1;background-color:rgb(127 29 29/var(--tw-bg-opacity,1))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity,1))}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.text-center{text-align:center}.font-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity,1))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity,1))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity,1))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity,1))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity,1))}.text-green-600{--tw-text-opacity:1;color:rgb(22 163 74/var(--tw-text-opacity,1))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity,1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.hover\:scale-110:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\:border-blue-500:hover{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity,1))}.hover\:bg-blue-600:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity,1))}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity,1))}.group:hover .group-hover\:scale-110{--tw-scale-x:1.1;--tw-scale-y:1.1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (prefers-color-scheme:dark){.dark\:border-gray-600{--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity,1))}.dark\:bg-gray-700\/50{background-color:rgba(55,65,81,.5)}.dark\:bg-gray-800{--tw-bg-opacity:1;background-color:rgb(31 41 55/var(--tw-bg-opacity,1))}.dark\:bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity,1))}.dark\:bg-green-900\/50{background-color:rgba(20,83,45,.5)}.dark\:bg-red-900\/50{background-color:rgba(127,29,29,.5)}.dark\:text-blue-400{--tw-text-opacity:1;color:rgb(96 165 250/var(--tw-text-opacity,1))}.dark\:text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity,1))}.dark\:text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity,1))}.dark\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity,1))}.dark\:text-green-400{--tw-text-opacity:1;color:rgb(74 222 128/var(--tw-text-opacity,1))}.dark\:text-red-400{--tw-text-opacity:1;color:rgb(248 113 113/var(--tw-text-opacity,1))}.dark\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity,1))}.dark\:hover\:border-blue-400:hover{--tw-border-opacity:1;border-color:rgb(96 165 250/var(--tw-border-opacity,1))}}
</style>
</head>
<body class="bg-gray-50 dark:bg-gray-900 min-h-screen">
  <div class="max-w-4xl mx-auto px-4">
    <nav class="py-6">
      <a href="/" class="text-2xl font-bold text-gray-900 dark:text-white">
        Light<span class="text-blue-600 dark:text-blue-400">Drop</span>
      </a>
    </nav>

    <main class="py-8">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div class="p-8">
          <div id="upload-zone" 
               class="group relative border-2 border-dashed border-gray-300 dark:border-gray-600 
                      rounded-xl bg-gray-50 dark:bg-gray-700/50 
                      transition-all duration-300 ease-in-out
                      hover:border-blue-500 dark:hover:border-blue-400">
            <label class="flex flex-col items-center justify-center p-8 cursor-pointer">
              <input id="file-input" type="file" class="hidden" name="file">
              <i class="fa-solid fa-cloud-arrow-up text-4xl mb-3 
                        text-blue-500 dark:text-blue-400 
                        group-hover:scale-110 transition-transform"></i>
              <p class="text-gray-600 dark:text-gray-300 text-center">
                Drag and drop files here<br>or click to upload
              </p>
              <p class="mt-2 text-sm text-gray-400 dark:text-gray-500">
                Max size: 25MB · Files will be auto-deleted after 24 hours
              </p>
            </label>
          </div>

          <div id="dynamic-field" class="mt-6"></div>

          <div class="mt-10">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-4">API Instructions</h4>
            <div class="space-y-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 p-6">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 rounded-md bg-red-100 dark:bg-red-900/50 
                             text-red-600 dark:text-red-400 text-sm font-medium">PUT</span>
                  <span class="text-gray-700 dark:text-gray-300">Upload File:</span>
                </div>
                <pre class="font-mono text-sm p-3 bg-white dark:bg-gray-800 rounded-lg 
                           border border-gray-200 dark:border-gray-600 dark:text-gray-300 overflow-x-auto">curl -L -T output.file lightdrop.xyz</pre>
              </div>
              
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/50 
                             text-green-600 dark:text-green-400 text-sm font-medium">GET</span>
                  <span class="text-gray-700 dark:text-gray-300">Download File:</span>
                </div>
                <pre class="font-mono text-sm p-3 bg-white dark:bg-gray-800 rounded-lg 
                           border border-gray-200 dark:border-gray-600 dark:text-gray-300 overflow-x-auto">curl -O https://lightdrop.xyz/d8f7/output.file</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p class="mb-2">Please ensure your privacy and safety</p>
      <p>LightDrop | Made with <i class="fa-solid fa-heart text-red-500 hover:scale-110 transition-transform inline-block"></i></p>
    </footer>
  </div>

<script>
const fileInput = document.getElementById('file-input');
const uploadZone = document.getElementById('upload-zone');
const uploadIcon = uploadZone.querySelector('i');
const uploadText = uploadZone.querySelector('p');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  uploadZone.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
  uploadZone.addEventListener(eventName, () => {
    uploadZone.classList.add('border-blue-500');
  });
});

['dragleave', 'drop'].forEach(eventName => {
  uploadZone.addEventListener(eventName, () => {
    uploadZone.classList.remove('border-blue-500');
  });
});

uploadZone.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFileUpload(files[0]);
  }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    handleFileUpload(fileInput.files[0]);
  }
});

async function handleFileUpload(file) {
  const MAX_SIZE = 25 * 1024 * 1024;

  if (file.size > MAX_SIZE) {
    printError("File size exceeds limit: " + file.name + " > 25MB");
    return;
  }

  uploadIcon.classList.replace('fa-cloud-arrow-up', 'fa-spinner');
  uploadIcon.classList.add('fa-spin');
  uploadText.innerHTML = 'Uploading...';

  try {
    const response = await fetch('/' + file.name, {
      method: 'PUT',
      body: file,
    });
    if (response.ok) {
      const fileUrl = await response.text();
      createDynamicField(fileUrl);
    } else {
      const httpError = await response.text();
      printError(response.status + ': ' + httpError);
    }
  } catch (error) {
    printError('Network error: ' + error.message);
  } finally {
    uploadIcon.classList.remove('fa-spinner', 'fa-spin');
    uploadIcon.classList.add('fa-cloud-arrow-up');
    uploadText.innerHTML = 'Drag and drop files here<br>or click to upload';
  }
}

function createDynamicField(fileUrl) {
  const container = document.getElementById('dynamic-field');
  container.innerHTML = '';

  const qrContainer = document.createElement('div');
  qrContainer.className = 'flex justify-center mb-4';
  const qrImage = document.createElement('img');
  qrImage.title = fileUrl;
  qrContainer.appendChild(qrImage);
  container.appendChild(qrContainer);

  const field = document.createElement('div');
  field.className = 'flex gap-2';
  
  const input = document.createElement('input');
  input.className = 'flex-1 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 dark:text-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
  input.type = 'text';
  input.value = fileUrl;
  input.readOnly = true;

  const copyBtn = document.createElement('button');
  copyBtn.className = 'px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors';
  const icon = document.createElement('i');
  icon.className = 'fas fa-copy';
  copyBtn.appendChild(icon);

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(input.value);
      icon.classList.replace('fa-copy', 'fa-check');
      setTimeout(() => {
        icon.classList.replace('fa-check', 'fa-copy');
      }, 1000);
    } catch (error) {
      alert('Failed to copy to clipboard');
    }
  });

  field.appendChild(input);
  field.appendChild(copyBtn);
  container.appendChild(field);

  const opts = {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    width: 256,
    margin: 1
  };
    
  QRCode.toDataURL(fileUrl, opts, function (error, url) {
    if (error) console.error(error);
    qrImage.src = url;
  });
}

function printError(error) {
  const container = document.getElementById('dynamic-field');
  container.innerHTML = '';
  const errorMessage = document.createElement('div');
  errorMessage.className = 'p-4 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg text-sm';
  errorMessage.textContent = 'Error: ' + error;
  container.appendChild(errorMessage);
}
</script>
</body>
</html>
`;
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,HEAD,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "3600"
};

function handleOptions() {
  return new Response(null, { headers: corsHeaders });
}

function createErrorResponse(message, status) {
  return new Response(message, { status, headers: { ...corsHeaders, "Content-Type": "text/plain" } });
}

function isValidFilename(filename) {
  const MAX_FILENAME_LENGTH = 256;
  const invalidCharsPattern = /[<>:"\/\\|?*\x00-\x1F]/g;
  return filename.length > 0 && filename.length <= MAX_FILENAME_LENGTH && !invalidCharsPattern.test(filename);
}

async function handlePutRequest(request, env, kv, ctx) {
  const BASE_URL = env.KV_BASE_URL || "https://fd2.me";
  const FILE_TTL = parseInt(env.KV_DEFAULT_FILE_TTL) || 14400;
  const MAX_FILE_SIZE = parseInt(env.KV_MAX_FILE_SIZE_BYTES) || 26214400;
  const url = new URL(request.url);
  const filename = url.pathname.substring(1);

  if (!isValidFilename(filename)) {
    return createErrorResponse("Invalid or missing filename.", 400);
  }

  const file = await request.arrayBuffer();
  const size = file.byteLength;

  if (size < 5 || size > MAX_FILE_SIZE) {
    return createErrorResponse(`Invalid file size: ${size}.`, 400);
  }

  const random = Math.floor(Math.random() * 65536).toString(16).padStart(4, '0');
  const key = `${random}/${filename}`;

  try {
    await ctx.waitUntil(kv.put(key, file, { expirationTtl: FILE_TTL }));
    return new Response(`${BASE_URL}/${key}\n`, { status: 200, headers: { ...corsHeaders, "Content-Type": "text/plain" } });
  } catch (error) {
    return createErrorResponse("Failed to save file.", 500);
  }
}

function determineContentType(extension) {
  return mimeTypes[extension] || 'application/octet-stream';
}

async function handleGetRequest(request, kv) {
  const url = new URL(request.url);
  const key = url.pathname.substring(1);

  if (!key) {
    return new Response(indexHTML, { status: 200, headers: { "Content-Type": "text/html", ...corsHeaders } });
  }

  try {
    const value = await kv.get(key, "arrayBuffer");
    if (!value) {
      return createErrorResponse("File not found.", 404);
    }
    const extension = key.slice(key.lastIndexOf('.'));
    const contentType = determineContentType(extension);
    return new Response(value, { status: 200, headers: { ...corsHeaders, 'Content-Type': contentType, 'X-Content-Type-Options': 'nosniff' } });
  } catch (error) {
    return createErrorResponse("Failed to retrieve file.", 500);
  }
}

export default {
  async fetch(request, env, ctx) {
    const kv = env.KV_DEFAULT_NAMESPACE;
    if (!kv) {
      return createErrorResponse("No KV namespace configured.", 500);
    }

    try {
      switch (request.method) {
        case "OPTIONS":
          return handleOptions();
        case "PUT":
          return handlePutRequest(request, env, kv, ctx);
        case "GET":
          return handleGetRequest(request, kv);
        default:
          return createErrorResponse("Method not allowed.", 405);
      }
    } catch (error) {
      return createErrorResponse("Server error.", 500);
    }
  }
};
