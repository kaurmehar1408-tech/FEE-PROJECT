// ==================== BOOKING.JS ====================

// ====================================================================
// 0.  READ DESTINATION FROM URL — sent by destinations.js
//     e.g. booking.html?destination=Burj%20Khalifa
// ====================================================================
(function handleIncomingDestination() {
    const raw = new URLSearchParams(window.location.search).get("destination");
    if (!raw) return;

    // Maps every place name (from destinations.js) to its booking dropdown value
    const PLACE_TO_DEST = {
        // Dubai
        "Dubai Fountain"          : "Dubai",
        "Museum of the Future"    : "Dubai",
        "Burj Khalifa"            : "Dubai",
        "Burj Al Arab Hotel"      : "Dubai",
        "Dubai Miracle Garden"    : "Dubai",
        // France
        "Paris Louvre Pyramid"    : "Paris",
        "Palace of Versailles"    : "Paris",
        "Corsica"                 : "Paris",
        "Menton in France"        : "Paris",
        "French Riviera"          : "Paris",
        // Indonesia / Bali
        "Bali"                    : "Bali",
        "Borobudur & Prambanan"   : "Bali",
        "Raja Ampat"              : "Bali",
        "Komodo National Park"    : "Bali",
        "Raja Ampat Islands"      : "Bali",
        // India — Goa
        "Beaches in Goa"          : "Goa",
        // India — Jaipur
        "Rajasthan - Jaipur"      : "Jaipur",
        "Taj Mahal"               : "Jaipur",
        "Varanasi"                : "Jaipur",
        "Kolkata"                 : "Jaipur",
        // Manali
        "Manali"                  : "Manali",
        // Kashmir
        "Kashmir"                 : "Kashmir",
        // Switzerland
        "Jungfrau Region"         : "Switzerland",
        "Zermatt"                 : "Switzerland",
        "Interlaken"              : "Switzerland",
        "Lucerne"                 : "Switzerland",
        "Swiss Alps"              : "Switzerland",
        // USA
        "Chicago"                 : "New York",
        "Los Angeles"             : "New York",
        "San Francisco"           : "New York",
        "New York"                : "New York",
        "Boston"                  : "New York",
        // Japan / Tokyo
        "Tokyo"                   : "Tokyo",
        // Singapore
        "Singapore"               : "Singapore",
        // direct country fallbacks
        "DUBAI"                   : "Dubai",
        "FRANCE"                  : "Paris",
        "INDONESIA"               : "Bali",
        "INDIA"                   : "Goa",
        "SWITZERLAND"             : "Switzerland",
        "USA"                     : "New York",
    };

    // Resolve: try exact match first, then upper-case country fallback
    const destValue = PLACE_TO_DEST[raw]
                   || PLACE_TO_DEST[raw.toUpperCase()]
                   || raw;   // fallback: use whatever was passed

    // Run after DOM is ready
    document.addEventListener("DOMContentLoaded", function () {

        // 1. Set the destination dropdown
        const sel = document.getElementById("destination");
        if (sel) {
            for (let i = 0; i < sel.options.length; i++) {
                if (sel.options[i].value.toLowerCase() === destValue.toLowerCase()) {
                    sel.value = sel.options[i].value;
                    break;
                }
            }
        }

        // 2. Highlight matching package card (if one exists)
        let matched = false;
        document.querySelectorAll(".card[data-destination]").forEach(function (card) {
            if (card.dataset.destination.toLowerCase() === destValue.toLowerCase()) {
                selectCard(card);   // reuse existing selectCard() — highlights + scrolls
                matched = true;
            }
        });

        // 3. If no card matched, show banner + scroll to form manually
        if (!matched) {
            const summary = document.getElementById("selectedSummary");
            if (summary) {
                summary.style.display = "block";
                summary.innerHTML = "\uD83D\uDCCD Coming from: <strong>" + raw + "</strong> &mdash; fill in your details below";
            }
            setTimeout(function () {
                document.getElementById("bookingForm")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
    });
})();


// ── Sticky header on scroll ──────────────────────────────────────────────
window.addEventListener("scroll", () => {
    const h = document.querySelector("header");
    if (!h) return;
    if (window.scrollY > 50) {
        h.style.background  = "rgba(15,23,42,0.97)";
        h.style.boxShadow   = "0 2px 20px rgba(0,0,0,0.5)";
    } else {
        h.style.background  = "#0f172a";
        h.style.boxShadow   = "none";
    }
});

// ── Active nav link ──────────────────────────────────────────────────────
document.querySelectorAll("nav a").forEach(a => {
    if (a.href === window.location.href) a.style.color = "#fbbf24";
});

// ── Back to top button ────────────────────────────────────────────────────
const backBtn = document.createElement("button");
backBtn.id = "backToTop";
backBtn.textContent = "↑";
document.body.appendChild(backBtn);
window.addEventListener("scroll", () => {
    backBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// ====================================================================
// 1.  LIVE CURRENCY CONVERTER  (open.er-api.com — free, no key)
// ====================================================================
const BASE_PRICES   = { Paris:95000, Bali:75000, Dubai:65000, Switzerland:120000, Goa:15000, Manali:18000, Kashmir:22000, Jaipur:10000 };
const SYMBOLS       = { INR:"₹", USD:"$", EUR:"€", GBP:"£", AED:"AED ", JPY:"¥", CAD:"CA$" };
let ratesCache      = null;

// Build currency bar
const currBar = document.getElementById("currencyBar");
if (currBar) {
    currBar.innerHTML = `
        <span>💱 View prices in:</span>
        <select id="currSel">
            <option value="INR">INR ₹</option>
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="GBP">GBP £</option>
            <option value="AED">AED د.إ</option>
            <option value="JPY">JPY ¥</option>
            <option value="CAD">CAD $</option>
        </select>
        <span id="rateNote"></span>
    `;

    document.getElementById("currSel").addEventListener("change", convertAllPrices);
}

async function convertAllPrices() {
    const cur      = document.getElementById("currSel")?.value || "INR";
    const rateNote = document.getElementById("rateNote");
    const priceEls = document.querySelectorAll(".card .price");

    if (cur === "INR") {
        // Restore original INR prices from data-price attribute
        document.querySelectorAll(".card[data-price]").forEach(card => {
            const orig = parseInt(card.dataset.price);
            card.querySelector(".price").textContent = "₹" + orig.toLocaleString("en-IN");
        });
        if (rateNote) rateNote.textContent = "";
        return;
    }

    if (rateNote) rateNote.textContent = "⏳ Loading rates...";
    try {
        if (!ratesCache) {
            const res = await fetch("https://open.er-api.com/v6/latest/INR");
            const data = await res.json();
            ratesCache = data.rates;
        }
        const rate = ratesCache[cur] || 1;
        const sym  = SYMBOLS[cur] || cur + " ";
        document.querySelectorAll(".card[data-price]").forEach(card => {
            const orig      = parseInt(card.dataset.price);
            const converted = Math.round(orig * rate);
            card.querySelector(".price").textContent = sym + converted.toLocaleString();
        });
        if (rateNote) rateNote.textContent = "✅ Live rates";
    } catch {
        if (rateNote) rateNote.textContent = "⚠️ Rates unavailable";
    }
}

// ====================================================================
// 2.  PACKAGE CARD SELECTION
// ====================================================================
let selectedCard = null;

document.querySelectorAll(".card").forEach(card => {
    // Select Package button
    card.querySelector(".select-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        selectCard(card);
    });
    // Clicking the whole card also selects it
    card.addEventListener("click", () => selectCard(card));
});

function selectCard(card) {
    // Remove selection from previous
    document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedCard = card;

    // Pre-fill destination dropdown
    const dest = card.dataset.destination;
    const destEl = document.getElementById("destination");
    if (destEl && dest) {
        for (let opt of destEl.options) {
            if (opt.value === dest) { destEl.value = dest; break; }
        }
    }

    // Show summary banner above form
    const priceText = card.querySelector(".price").textContent;
    const title     = card.querySelector("h3").textContent;
    const summary   = document.getElementById("selectedSummary");
    if (summary) {
        summary.style.display = "block";
        summary.innerHTML = `📦 <strong>${title}</strong> &nbsp;—&nbsp; ${priceText}`;
    }

    // Scroll to booking form
    document.getElementById("bookingForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ====================================================================
// 3.  BOOKING FORM VALIDATION → OPEN PAYMENT MODAL
// ====================================================================
document.getElementById("mainBookingForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name  = document.getElementById("fullName").value.trim();
    const email = document.getElementById("emailAddr").value.trim();
    const date  = document.getElementById("travelDate").value;
    const dest  = document.getElementById("destination").value;
    const ppl   = document.getElementById("numPeople").value.trim();

    // Clear previous errors
    ["nameErr","emailErr","dateErr","destErr","peopleErr"].forEach(id => {
        document.getElementById(id).textContent = "";
    });

    let valid = true;

    if (!name || name.length < 3) {
        document.getElementById("nameErr").textContent = "Enter at least 3 characters.";
        valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailErr").textContent = "Enter a valid email address.";
        valid = false;
    }
    if (!date) {
        document.getElementById("dateErr").textContent = "Please select a travel date.";
        valid = false;
    } else if (new Date(date) < new Date(new Date().toDateString())) {
        document.getElementById("dateErr").textContent = "Date must be today or in the future.";
        valid = false;
    }
    if (!dest) {
        document.getElementById("destErr").textContent = "Please select a destination.";
        valid = false;
    }
    if (!ppl || parseInt(ppl) < 1) {
        document.getElementById("peopleErr").textContent = "Enter at least 1 traveller.";
        valid = false;
    }

    if (!valid) return;

    // Get price from selected card or default
    const priceInr = selectedCard
        ? parseInt(selectedCard.dataset.price)
        : (BASE_PRICES[dest] || 50000);
    const packageName = selectedCard
        ? selectedCard.querySelector("h3").textContent
        : dest + " Trip";

    openPaymentModal({ name, email, date, dest, ppl, priceInr, packageName });
});

// ====================================================================
// 4.  PAYMENT MODAL
// ====================================================================
function openPaymentModal(booking) {

    // Remove any existing modal
    document.getElementById("pmOverlay")?.remove();

    const { name, email, date, dest, ppl, priceInr, packageName } = booking;
    const cur     = document.getElementById("currSel")?.value || "INR";
    const sym     = SYMBOLS[cur] || "₹";
    let   dispAmt;

    if (cur === "INR" || !ratesCache) {
        dispAmt = sym + priceInr.toLocaleString("en-IN");
    } else {
        const rate = ratesCache[cur] || 1;
        dispAmt = sym + Math.round(priceInr * rate).toLocaleString();
    }

    // ── Build overlay ──────────────────────────────────────────────────
    const overlay = document.createElement("div");
    overlay.id = "pmOverlay";

    overlay.innerHTML = `
    <div id="pmModal">

        <button class="pm-close" id="pmClose">✕</button>

        <h2 style="color:#fbbf24;font-size:20px;margin-bottom:16px;">🔒 Secure Payment</h2>

        <!-- Order Summary -->
        <div class="pm-summary-box">
            <div class="pm-sum-row"><span>Package</span><span>${packageName}</span></div>
            <div class="pm-sum-row"><span>Destination</span><span>📍 ${dest}</span></div>
            <div class="pm-sum-row"><span>Travel Date</span><span>📅 ${date}</span></div>
            <div class="pm-sum-row"><span>Travellers</span><span>👤 ${ppl} person(s)</span></div>
            <div class="pm-sum-row pm-sum-total"><span>Total Amount</span><span>${dispAmt}</span></div>
        </div>

        <!-- Payment Method Tabs -->
        <div class="pm-tabs">
            <button class="pm-tab active" data-tab="card">💳 Card</button>
            <button class="pm-tab" data-tab="upi">📱 UPI</button>
            <button class="pm-tab" data-tab="netbanking">🏦 Net Banking</button>
        </div>

        <!-- ── CARD TAB ── -->
        <div id="pm-tab-card">
            <label class="pm-label">Card Number</label>
            <div class="pm-input-wrap">
                <input class="pm-input" type="text" id="pmCardNum" placeholder="1234  5678  9012  3456" maxlength="19" autocomplete="cc-number">
                <span class="pm-brand" id="pmBrand">💳</span>
            </div>
            <div class="pm-err" id="pmCardNumErr">Enter a valid 16-digit card number.</div>

            <label class="pm-label">Cardholder Name</label>
            <input class="pm-input" type="text" id="pmCardName" placeholder="${name}" value="${name}" autocomplete="cc-name">

            <div class="pm-row">
                <div>
                    <label class="pm-label">Expiry (MM / YY)</label>
                    <input class="pm-input" type="text" id="pmCardExp" placeholder="MM / YY" maxlength="7" autocomplete="cc-exp">
                    <div class="pm-err" id="pmCardExpErr">Invalid expiry date.</div>
                </div>
                <div>
                    <label class="pm-label">CVV</label>
                    <input class="pm-input" type="password" id="pmCardCvv" placeholder="•••" maxlength="4" autocomplete="cc-csc">
                    <div class="pm-err" id="pmCardCvvErr">Enter 3-digit CVV.</div>
                </div>
            </div>

            <button class="pm-pay-btn" id="pmPayCard">Pay ${dispAmt} &nbsp;→</button>
        </div>

        <!-- ── UPI TAB ── -->
        <div id="pm-tab-upi" style="display:none;">
            <label class="pm-label">Select App</label>
            <div class="pm-app-grid" id="upiApps">
                <button class="pm-app-btn sel" data-val="Google Pay">Google Pay</button>
                <button class="pm-app-btn" data-val="PhonePe">PhonePe</button>
                <button class="pm-app-btn" data-val="Paytm">Paytm</button>
                <button class="pm-app-btn" data-val="BHIM UPI">BHIM UPI</button>
                <button class="pm-app-btn" data-val="Amazon Pay">Amazon Pay</button>
            </div>
            <label class="pm-label">UPI ID</label>
            <input class="pm-input" type="text" id="pmUpiId" placeholder="yourname@upi">
            <div class="pm-err" id="pmUpiErr">Enter a valid UPI ID (e.g. name@okaxis).</div>
            <button class="pm-pay-btn" id="pmPayUpi">Pay ${dispAmt} via UPI &nbsp;→</button>
        </div>

        <!-- ── NET BANKING TAB ── -->
        <div id="pm-tab-netbanking" style="display:none;">
            <label class="pm-label">Popular Banks</label>
            <div class="pm-app-grid" id="bankBtns">
                <button class="pm-app-btn sel" data-val="State Bank of India">SBI</button>
                <button class="pm-app-btn" data-val="HDFC Bank">HDFC</button>
                <button class="pm-app-btn" data-val="ICICI Bank">ICICI</button>
                <button class="pm-app-btn" data-val="Axis Bank">Axis</button>
                <button class="pm-app-btn" data-val="Kotak Bank">Kotak</button>
                <button class="pm-app-btn" data-val="Punjab National Bank">PNB</button>
            </div>
            <label class="pm-label">Or choose from list</label>
            <select class="pm-input" id="pmBankSel" style="cursor:pointer;">
                <option value="State Bank of India">State Bank of India</option>
                <option value="HDFC Bank">HDFC Bank</option>
                <option value="ICICI Bank">ICICI Bank</option>
                <option value="Axis Bank">Axis Bank</option>
                <option value="Kotak Bank">Kotak Mahindra Bank</option>
                <option value="Punjab National Bank">Punjab National Bank</option>
                <option value="Bank of Baroda">Bank of Baroda</option>
                <option value="Canara Bank">Canara Bank</option>
                <option value="Yes Bank">Yes Bank</option>
                <option value="IndusInd Bank">IndusInd Bank</option>
                <option value="Union Bank">Union Bank of India</option>
            </select>
            <button class="pm-pay-btn" id="pmPayNet">Pay ${dispAmt} via Net Banking &nbsp;→</button>
        </div>

        <div class="pm-secure">🔒 256-bit SSL Encrypted &nbsp;|&nbsp; PCI DSS Compliant &nbsp;|&nbsp; RBI Approved</div>

    </div>`;

    document.body.appendChild(overlay);

    // ── Close ───────────────────────────────────────────────────────────
    document.getElementById("pmClose").addEventListener("click", () => overlay.remove());
    overlay.addEventListener("click", e => { if (e.target === overlay) overlay.remove(); });

    // ── Tab switching ────────────────────────────────────────────────────
    overlay.querySelectorAll(".pm-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            overlay.querySelectorAll(".pm-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            ["card","upi","netbanking"].forEach(id => {
                document.getElementById("pm-tab-" + id).style.display =
                    (tab.dataset.tab === id) ? "block" : "none";
            });
        });
    });

    // ── Card number: format + brand detect ──────────────────────────────
    document.getElementById("pmCardNum").addEventListener("input", function () {
        let v = this.value.replace(/\D/g, "").slice(0, 16);
        this.value = v.replace(/(.{4})/g, "$1  ").trim();
        const brand = document.getElementById("pmBrand");
        if      (v.startsWith("4"))            brand.textContent = "VISA";
        else if (/^5[1-5]/.test(v))            brand.textContent = "MC";
        else if (/^3[47]/.test(v))             brand.textContent = "AMEX";
        else if (/^6(0|5|011)/.test(v))        brand.textContent = "RuPay";
        else                                    brand.textContent = "💳";
    });

    // ── Expiry: auto-format ──────────────────────────────────────────────
    document.getElementById("pmCardExp").addEventListener("input", function () {
        let v = this.value.replace(/\D/g, "");
        if (v.length >= 3) v = v.slice(0, 2) + " / " + v.slice(2, 4);
        this.value = v;
    });

    // ── UPI app toggle ───────────────────────────────────────────────────
    document.querySelectorAll("#upiApps .pm-app-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#upiApps .pm-app-btn").forEach(b => b.classList.remove("sel"));
            btn.classList.add("sel");
        });
    });

    // ── Bank button toggle ───────────────────────────────────────────────
    document.querySelectorAll("#bankBtns .pm-app-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("#bankBtns .pm-app-btn").forEach(b => b.classList.remove("sel"));
            btn.classList.add("sel");
            document.getElementById("pmBankSel").value = btn.dataset.val;
        });
    });
    document.getElementById("pmBankSel").addEventListener("change", function () {
        document.querySelectorAll("#bankBtns .pm-app-btn").forEach(b => b.classList.remove("sel"));
    });

    // ── Shared payment processor ─────────────────────────────────────────
    function processPayment(method) {
        const modal = document.getElementById("pmModal");
        modal.innerHTML = `
            <div style="text-align:center;padding:50px 20px;">
                <span class="pm-spinner"></span>
                <span style="font-size:16px;color:white;">Processing payment...</span>
                <p style="color:#64748b;font-size:13px;margin-top:12px;">Please do not close this window</p>
            </div>`;

        setTimeout(() => {
            const txnId = "TS" + Date.now().toString().slice(-10).toUpperCase();
            modal.innerHTML = `
                <div style="text-align:center;padding:20px 10px;">
                    <span class="pm-success-icon">✅</span>
                    <h2 style="color:#4ade80;font-size:22px;margin:14px 0 6px;">Payment Successful!</h2>
                    <p style="color:#94a3b8;font-size:14px;margin-bottom:18px;">Your booking is confirmed</p>

                    <div class="pm-receipt">
                        <div class="pm-receipt-row highlight">
                            <span>Transaction ID</span>
                            <span>${txnId}</span>
                        </div>
                        <div class="pm-receipt-row">
                            <span>Package</span>
                            <span>${packageName}</span>
                        </div>
                        <div class="pm-receipt-row">
                            <span>Destination</span>
                            <span>${dest}</span>
                        </div>
                        <div class="pm-receipt-row">
                            <span>Travel Date</span>
                            <span>${date}</span>
                        </div>
                        <div class="pm-receipt-row">
                            <span>Travellers</span>
                            <span>${ppl}</span>
                        </div>
                        <div class="pm-receipt-row">
                            <span>Amount Paid</span>
                            <span>${dispAmt}</span>
                        </div>
                        <div class="pm-receipt-row">
                            <span>Payment Method</span>
                            <span>${method}</span>
                        </div>
                        <div class="pm-receipt-row highlight">
                            <span>Confirmation sent to</span>
                            <span>${email}</span>
                        </div>
                    </div>

                    <button class="pm-pay-btn" id="pmDoneBtn"
                        style="background:#4ade80;color:#0f172a;margin-top:0;">
                        Done 🎉
                    </button>
                </div>`;

            document.getElementById("pmDoneBtn").addEventListener("click", () => {
                overlay.remove();
                // Reset form
                document.getElementById("mainBookingForm").reset();
                document.getElementById("selectedSummary").style.display = "none";
                document.querySelectorAll(".card").forEach(c => c.classList.remove("selected"));
                selectedCard = null;
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }, 2500);
    }

    // ── Card pay ─────────────────────────────────────────────────────────
    document.getElementById("pmPayCard").addEventListener("click", () => {
        const num  = document.getElementById("pmCardNum").value.replace(/\s/g, "");
        const exp  = document.getElementById("pmCardExp").value;
        const cvv  = document.getElementById("pmCardCvv").value;
        let ok = true;

        document.getElementById("pmCardNumErr").style.display = "none";
        document.getElementById("pmCardExpErr").style.display = "none";
        document.getElementById("pmCardCvvErr").style.display = "none";

        if (num.length !== 16)                  { document.getElementById("pmCardNumErr").style.display="block"; ok=false; }
        if (!/^\d{2} \/ \d{2}$/.test(exp))     { document.getElementById("pmCardExpErr").style.display="block"; ok=false; }
        if (!/^\d{3,4}$/.test(cvv))            { document.getElementById("pmCardCvvErr").style.display="block"; ok=false; }
        if (!ok) return;

        processPayment("Card ending " + num.slice(-4));
    });

    // ── UPI pay ──────────────────────────────────────────────────────────
    document.getElementById("pmPayUpi").addEventListener("click", () => {
        const upiId = document.getElementById("pmUpiId").value.trim();
        document.getElementById("pmUpiErr").style.display = "none";
        if (!upiId.includes("@")) {
            document.getElementById("pmUpiErr").style.display = "block"; return;
        }
        const app = document.querySelector("#upiApps .pm-app-btn.sel")?.dataset.val || "UPI";
        processPayment(app + " (" + upiId + ")");
    });

    // ── Net banking pay ───────────────────────────────────────────────────
    document.getElementById("pmPayNet").addEventListener("click", () => {
        const bank = document.getElementById("pmBankSel").value
                  || document.querySelector("#bankBtns .pm-app-btn.sel")?.dataset.val
                  || "Net Banking";
        processPayment("Net Banking — " + bank);
    });
}