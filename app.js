// Fast Lookup Dictionaries
const inaToUscMap = new Map();
const uscToInaMap = new Map();

if (typeof CONCORDANCE_DATA !== "undefined") {
  CONCORDANCE_DATA.forEach(item => {
    inaToUscMap.set(item.ina.toUpperCase(), item);
    uscToInaMap.set(item.usc.toLowerCase(), item);
  });
}

// DOM Elements
const citationInput = document.getElementById("citation-input");
const clearBtn = document.getElementById("clear-btn");
const resultContainer = document.getElementById("result-container");
const guideContainer = document.getElementById("guide-container");
const detectedBadge = document.getElementById("detected-badge");
const targetBadge = document.getElementById("target-badge");
const convertedCitation = document.getElementById("converted-citation");
const statuteTitle = document.getElementById("statute-title");
const uscLink = document.getElementById("usc-link");
const inaLink = document.getElementById("ina-link");
const copyBtn = document.getElementById("copy-btn");
const copyText = document.getElementById("copy-text");
const olrcLink = document.getElementById("olrc-link");

let debounceTimer = null;

// --- CITATION PARSER ---
function parseCitation(rawInput) {
  let cleaned = rawInput.trim();
  if (!cleaned) return null;

  // Check if attorney typed a C.F.R. citation (Common Mistake)
  if (/\b(c\.?f\.?r\.?|code of federal regulations)\b/i.test(cleaned)) {
    return { isCfr: true, raw: cleaned };
  }

  // Strip prefixes & section symbols
  cleaned = cleaned.replace(/^(ina|act|section|sec\.?|title\s*8|8\s*u\.?s\.?c\.?|8\s*usc)\s*/i, "");
  cleaned = cleaned.replace(/^§+\s*/, "");

  // Match statutory number (e.g. 212, 240A, 1182, 1229b) + trailing subsections
  const match = cleaned.match(/^([0-9]{3,4}[A-Za-z]?)(.*)$/);
  if (!match) return null;

  return {
    baseSection: match[1],
    subsection: match[2] ? match[2].trim() : ""
  };
}

// --- CONVERSION LOGIC ---
function convertCitation(inputVal) {
  const trimmed = inputVal.trim();

  // If input is empty, reset back to guide state
  if (!trimmed) {
    resultContainer.style.display = "none";
    guideContainer.style.display = "block";
    clearBtn.style.display = "none";
    return;
  }

  clearBtn.style.display = "block";

  // While user is still typing the first 1 or 2 characters, wait gracefully
  if (trimmed.length < 3 && !/\b(ina|usc)\b/i.test(trimmed)) {
    return;
  }

  const parsed = parseCitation(trimmed);

  // 1. Handle C.F.R. warning
  if (parsed && parsed.isCfr) {
    showCfrNotice(trimmed);
    return;
  }

  // 2. Handle invalid/unparseable pattern
  if (!parsed) {
    showNotFound(trimmed);
    return;
  }

  const { baseSection, subsection } = parsed;
  const upperBase = baseSection.toUpperCase();
  const lowerBase = baseSection.toLowerCase();

  // 3. Match INA -> 8 U.S.C.
  if (inaToUscMap.has(upperBase)) {
    const entry = inaToUscMap.get(upperBase);
    displayResult({
      sourceType: "INA",
      targetType: "8 U.S.C.",
      formattedCitation: `8 U.S.C. § ${entry.usc}${subsection}`,
      title: entry.title,
      uscSec: entry.usc,
      inaSec: entry.ina
    });
    return;
  }

  // 4. Match 8 U.S.C. -> INA
  if (uscToInaMap.has(lowerBase)) {
    const entry = uscToInaMap.get(lowerBase);
    displayResult({
      sourceType: "8 U.S.C.",
      targetType: "INA",
      formattedCitation: `INA § ${entry.ina}${subsection}`,
      title: entry.title,
      uscSec: entry.usc,
      inaSec: entry.ina
    });
    return;
  }

  // 5. Not found in our table
  showNotFound(trimmed, baseSection);
}

// --- DISPLAY STATES ---

function displayResult(res) {
  guideContainer.style.display = "none";
  resultContainer.style.display = "block";

  detectedBadge.textContent = `Detected ${res.sourceType}`;
  targetBadge.textContent = res.targetType;
  convertedCitation.textContent = res.formattedCitation;
  statuteTitle.textContent = `${res.title} (INA § ${res.inaSec} / 8 U.S.C. § ${res.uscSec})`;

  // 1. Official House OLRC Link
  olrcLink.href = `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section${res.uscSec}&num=0&edition=prelim`;
  olrcLink.textContent = "View Official Statute (House OLRC) ↗";
  olrcLink.style.display = "block";

  // 2. Cornell Law LII Link
  uscLink.href = `https://www.law.cornell.edu/uscode/text/8/${res.uscSec}`;
  uscLink.textContent = "View at Cornell LII ↗";
  uscLink.style.display = "block";

  // 3. Official Government Guidance Search Link
  inaLink.href = `https://www.google.com/search?q=site:gov+"INA+${res.inaSec}"+immigration`;
  inaLink.textContent = "Search Official .gov Agency Guidance ↗";
  inaLink.style.display = "block";

  copyText.textContent = "Copy Section";
}

function showCfrNotice(query) {
  guideContainer.style.display = "none";
  resultContainer.style.display = "block";

  detectedBadge.textContent = "Regulation (C.F.R.)";
  targetBadge.textContent = "Not a Statute";
  convertedCitation.textContent = "C.F.R. Citation Detected";
  statuteTitle.textContent = `"${query}" is an administrative regulation (Code of Federal Regulations), not an INA statute. This converter is for INA / Title 8 statutory sections.`;

  uscLink.href = "https://www.ecfr.gov/current/title-8";
  uscLink.textContent = "Search Title 8 of the C.F.R. at eCFR.gov ↗";
  uscLink.style.display = "block";

  olrcLink.style.display = "none";
  inaLink.style.display = "none";
}

function showNotFound(query, attemptedSec) {
  guideContainer.style.display = "none";
  resultContainer.style.display = "block";

  detectedBadge.textContent = "Not in Database";
  targetBadge.textContent = "—";
  convertedCitation.textContent = "Section Not Found";
  statuteTitle.textContent = `No exact statutory match for "${query}". Check for typographical errors or search the full Title 8 database.`;

  olrcLink.style.display = "none";
  inaLink.style.display = "none";

  if (attemptedSec && /^\d+$/.test(attemptedSec)) {
    uscLink.href = `https://www.law.cornell.edu/uscode/text/8/${attemptedSec}#main-content`;
    uscLink.textContent = `Search Cornell for Title 8 § ${attemptedSec} ↗`;
    uscLink.style.display = "block";
  } else {
    uscLink.style.display = "none";
  }
}

// --- EVENT LISTENERS WITH DEBOUNCING ---
citationInput.addEventListener("input", (e) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    convertCitation(e.target.value);
  }, 250);
});

clearBtn.addEventListener("click", () => {
  citationInput.value = "";
  citationInput.focus();
  convertCitation("");
});

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    const cite = chip.getAttribute("data-cite");
    citationInput.value = cite;
    convertCitation(cite);
  });
});

// Robust Copy-to-Clipboard Handler (with Fallback)
copyBtn.addEventListener("click", () => {
  const textToCopy = convertedCitation.textContent.trim();
  if (!textToCopy || textToCopy.includes("Not Found") || textToCopy.includes("Detected") || textToCopy === "—") {
    return;
  }

  const triggerCopyFeedback = () => {
    copyText.textContent = "Copied! ✓";
    setTimeout(() => {
      copyText.textContent = "Copy Section";
    }, 1500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy)
      .then(triggerCopyFeedback)
      .catch(() => {
        fallbackCopy(textToCopy);
        triggerCopyFeedback();
      });
  } else {
    fallbackCopy(textToCopy);
    triggerCopyFeedback();
  }
});

function fallbackCopy(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.style.position = "fixed";
  tempInput.style.opacity = "0";
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

// URL Parameter Deep-Linking
window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q") || urlParams.get("cite");
  if (query) {
    citationInput.value = query;
    convertCitation(query);
  }
});

/* ==========================================================================
   Help Modal Logic
   ========================================================================== */
const helpModal = document.getElementById("help-modal");
const openHelpBtn = document.getElementById("open-help-btn");
const closeHelpBtn = document.getElementById("close-help-btn");

if (openHelpBtn && helpModal) {
  openHelpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    helpModal.showModal();
  });
}

if (closeHelpBtn && helpModal) {
  closeHelpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    helpModal.close();
  });
}

// Close dialog when clicking outside on the dark backdrop
if (helpModal) {
  helpModal.addEventListener("click", (event) => {
    const rect = helpModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      helpModal.close();
    }
  });
}

// Close dialog when user clicks backdrop outside modal container
if (helpModal) {
  helpModal.addEventListener("click", (event) => {
    const rect = helpModal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      helpModal.close();
    }
  });
}

/* ==========================================================================
   CSV Data Export Generator (Phases 1-3)
   ========================================================================== */
const downloadCsvBtn = document.getElementById("download-csv-btn");

if (downloadCsvBtn) {
  downloadCsvBtn.addEventListener("click", () => {
    // Correctly reference the master dataset array defined in concordance.js
    const masterData = (typeof CONCORDANCE_DATA !== "undefined")
      ? CONCORDANCE_DATA
      : (window.CONCORDANCE_DATA || window.concordance || window.CONCORDANCE || null);

    if (!masterData || !masterData.length) {
      alert("Error: Master concordance data could not be loaded from concordance.js.");
      return;
    }

    // Helper: Escape CSV fields per RFC 4180
    const escapeCsv = (str) => {
      if (str === null || str === undefined) return '""';
      const cleanStr = String(str).replace(/"/g, '""');
      return `"${cleanStr}"`;
    };

    // CSV Header row
    const headers = [
      "INA Section",
      "8 U.S.C. Title",
      "8 U.S.C. Section",
      "Statutory Subject Title",
      "INA Title / Category",
      "House OLRC Link",
      "Cornell LII Link"
    ];

    // Build rows flexibly to match concordance.js schema
    const rows = masterData.map((item) => {
      const inaSec = item.ina || item.inaSec || item.inaSection || "";
      const uscSec = item.usc || item.uscSec || item.uscSection || "";
      const title = item.title || item.name || item.description || "";
      const group = item.group || item.category || item.actTitle || item.inaTitle || "";

      const olrcUrl = uscSec 
        ? `https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title8-section${uscSec}&num=0&edition=prelim` 
        : "";
      const cornellUrl = uscSec 
        ? `https://www.law.cornell.edu/uscode/text/8/${uscSec}` 
        : "";

      return [
        escapeCsv(inaSec),
        escapeCsv("8"),
        escapeCsv(uscSec),
        escapeCsv(title),
        escapeCsv(group),
        escapeCsv(olrcUrl),
        escapeCsv(cornellUrl)
      ].join(",");
    });

    const csvContent = [headers.map(escapeCsv).join(","), ...rows].join("\r\n");

    // Generate Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "ina_usc_concordance_master.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}