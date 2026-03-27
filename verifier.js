const DATABASE_URL =
  "https://raw.githubusercontent.com/neyunse/sites-verifier/main/sites.json";

let verifiedSites = [];

async function loadVerifiedSites() {
  try {
    const res = await fetch(DATABASE_URL, { cache: "no-store" });
    const data = await res.json();

    verifiedSites = (data.sites || []).map(s => normalizeDomain(s));

  } catch (err) {
    console.error("Error loading verified sites", err);
  }
}

function normalizeDomain(domain) {
  return domain
    .toLowerCase()
    .replace(/^www\./, "")
    .trim();
}

function isIDN(domain) {
  return domain.includes("xn--");
}

function isVerifiedDomain(rawDomain) {

  const domain = normalizeDomain(rawDomain);

  if (isIDN(domain)) {
    return false;
  }

  return verifiedSites.some(site => {

    if (domain === site) return true;

    if (domain.endsWith("." + site)) return true;

    return false;

  });
}