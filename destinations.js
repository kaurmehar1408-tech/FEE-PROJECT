// ================= DESTINATIONS.JS - WITH WEATHER API =================

// ─── WEATHER: Country → representative city (for heading badge) ──────────────
const countryWeatherCity = {
    "AUSTRALIA"   : "Sydney",
    "BRAZIL"      : "Rio de Janeiro",
    "CANADA"      : "Toronto",
    "CHINA"       : "Beijing",
    "COLOMBIA"    : "Bogota",
    "DUBAI"       : "Dubai",
    "FRANCE"      : "Paris",
    "GEORGIA"     : "Tbilisi",
    "GERMANY"     : "Berlin",
    "GREECE"      : "Athens",
    "HUNGARY"     : "Budapest",
    "ICELAND"     : "Reykjavik",
    "INDIA"       : "New Delhi",
    "INDONESIA"   : "Denpasar",
    "ITALY"       : "Rome",
    "NEW ZEALAND" : "Auckland",
    "NORWAY"      : "Oslo",
    "PORTUGAL"    : "Lisbon",
    "SRILANKA"    : "Colombo",
    "SWITZERLAND" : "Zurich",
    "THAILAND"    : "Bangkok",
    "USA"         : "New York"
};

// ─── WEATHER: Each individual place → its own specific city ──────────────────
// This ensures every card shows UNIQUE weather for that exact location
const placeWeatherCity = {
    // AUSTRALIA
    "Sydney Southeastern coast of Australia" : "Sydney",
    "Melbourne central business district"    : "Melbourne",
    "The CBD and Brisbane River"             : "Brisbane",
    "Perth city of Western Australia"        : "Perth",
    "Harbour Bridge"                         : "Sydney",

    // BRAZIL
    "Rio de Janeiro's Christ the Redeemer"   : "Rio de Janeiro",
    "The Immense Iguazu Falls"               : "Foz do Iguacu",
    "Sugarloaf Mountain"                     : "Rio de Janeiro",
    "Eze Village"                            : "Eze",
    "Cristo Redentor"                        : "Rio de Janeiro",

    // CANADA
    "Lake Moraine in Banff Canada"           : "Banff",
    "Beauty of Vancouver"                    : "Vancouver",
    "Toronto"                                : "Toronto",
    "The thunderous Niagara Falls"           : "Niagara Falls",
    "Ontario"                                : "Ottawa",

    // CHINA
    "Great Wall of China"                    : "Beijing",
    "The Terracotta Warriors in Xi'an"       : "Xian",
    "Giant Pandas in Chengdu"               : "Chengdu",
    "The scenic Karst mountains in Guilin"   : "Guilin",
    "Jiuzhaigou Valley (Sichuan)"            : "Jiuzhaigou",

    // COLOMBIA
    "Colonial, Coastal City of Cartagena"    : "Cartagena",
    "Medellín's innovative culture"          : "Medellin",
    "The vibrant capital"                    : "Bogota",
    "Tayrona National Park"                  : "Santa Marta",
    "Cartagena"                              : "Cartagena",

    // DUBAI
    "Dubai Fountain"                         : "Dubai",
    "Museum of the Future"                   : "Dubai",
    "Burj Khalifa"                           : "Dubai",
    "Burj Al Arab Hotel"                     : "Dubai",
    "Dubai Miracle Garden"                   : "Dubai",

    // FRANCE
    "Paris Louvre Pyramid"                   : "Paris",
    "Palace of Versailles"                   : "Versailles",
    "Corsica"                                : "Ajaccio",
    "Menton in France"                       : "Menton",
    "French Riviera"                         : "Nice",

    // GEORGIA
    "The ancient rock-hewn town of Uplistsikhe" : "Gori",
    "The beach city of Batumi"               : "Batumi",
    "The Wine Region of Kakheti"             : "Telavi",
    "The Mountain Town of Kazbegi"           : "Kazbegi",
    "Tbilisi"                                : "Tbilisi",

    // GERMANY
    "Berlin"                                 : "Berlin",
    "Hamburg"                                : "Hamburg",
    "Heidelberg"                             : "Heidelberg",
    "Nuremberg"                              : "Nuremberg",
    "Colonia"                                : "Cologne",

    // GREECE
    "Athens"                                 : "Athens",
    "Santorini"                              : "Santorini",
    "Mykonos"                                : "Mykonos",
    "Delphi"                                 : "Delphi",
    "Rhodes"                                 : "Rhodes",

    // HUNGARY
    "Tokaj Wine Region"                      : "Tokaj",
    "Eger town square"                       : "Eger",
    "Hévíz"                                  : "Heviz",
    "Szentendre"                             : "Szentendre",
    "Debrecen"                               : "Debrecen",

    // ICELAND
    "Black Sand Beaches at Reynisfjara"      : "Vik",
    "Jökulsárlón Glacier Lagoon"             : "Hofn",
    "The Golden Circle"                      : "Selfoss",
    "Snaefellsnes Peninsula"                 : "Stykkisholmur",
    "Reykjavik"                              : "Reykjavik",

    // INDIA
    "Rajasthan - Jaipur"                     : "Jaipur",
    "Taj Mahal"                              : "Agra",
    "Beaches in Goa"                         : "Goa",
    "Varanasi"                               : "Varanasi",
    "Kolkata"                                : "Kolkata",

    // INDONESIA
    "Borobudur & Prambanan"                  : "Yogyakarta",
    "Bali"                                   : "Denpasar",
    "Raja Ampat"                             : "Raja Ampat",
    "Komodo National Park"                   : "Labuan Bajo",
    "Raja Ampat Islands"                     : "Raja Ampat",

    // ITALY
    "Amalfi Coast"                           : "Amalfi",
    "Vernazza - Cinque Terre"                : "Vernazza",
    "Vatican City"                           : "Rome",
    "The Dolomites"                          : "Bolzano",
    "Mount Bromo & Mount Rinjani"            : "Probolinggo",

    // NEW ZEALAND
    "Rotorua"                                : "Rotorua",
    "Milford Sound"                          : "Milford Sound",
    "South Island"                           : "Christchurch",
    "North Island"                           : "Wellington",
    "Auckland"                               : "Auckland",

    // NORWAY
    "Geirangerfjord & Nærøyfjord"            : "Geiranger",
    "Lofoten Islands"                        : "Svolvaer",
    "Northern Lights (Tromsø)"              : "Tromso",
    "Trolltunga (Troll's Tongue)"            : "Odda",
    "Bergen's City"                          : "Bergen",

    // PORTUGAL
    "Sintra"                                 : "Sintra",
    "Porto"                                  : "Porto",
    "Coimbra"                                : "Coimbra",
    "Évora"                                  : "Evora",
    "Lagos"                                  : "Lagos",

    // SRILANKA
    "Sigiriya Lion Rock"                     : "Sigiriya",
    "The Cultural City of Kandy"             : "Kandy",
    "Nuwara Eliya"                           : "Nuwara Eliya",
    "Yala Wildlife National Park"            : "Tissamaharama",
    "Galle Fort"                             : "Galle",

    // SWITZERLAND
    "Jungfrau Region"                        : "Interlaken",
    "Zermatt"                                : "Zermatt",
    "Interlaken"                             : "Interlaken",
    "Lucerne"                                : "Lucerne",
    "Swiss Alps"                             : "Zermatt",

    // THAILAND
    "Krabi"                                  : "Krabi",
    "Chiang Mai's mountainous culture"       : "Chiang Mai",
    "Phuket's Beaches"                       : "Phuket",
    "Bangkok's Grand Temples"               : "Bangkok",

    // USA
    "Chicago"                                : "Chicago",
    "Los Angeles"                            : "Los Angeles",
    "San Francisco"                          : "San Francisco",
    "New York"                               : "New York",
    "Boston"                                 : "Boston"
};

// Cache so we never fetch the same city twice
const weatherCache = {};

function getWeatherEmoji(desc = "") {
    const d = desc.toLowerCase();
    if (d.includes("sunny") || d.includes("clear"))          return "☀️";
    if (d.includes("partly cloudy"))                         return "⛅";
    if (d.includes("cloud") || d.includes("overcast"))       return "☁️";
    if (d.includes("rain") || d.includes("drizzle"))         return "🌧️";
    if (d.includes("snow") || d.includes("blizzard"))        return "❄️";
    if (d.includes("storm") || d.includes("thunder"))        return "⛈️";
    if (d.includes("fog")  || d.includes("mist"))            return "🌫️";
    if (d.includes("wind"))                                  return "💨";
    return "🌡️";
}

async function fetchWeather(city) {
    if (weatherCache[city]) return weatherCache[city];
    try {
        const res  = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
        const data = await res.json();
        const cur  = data.current_condition[0];
        const result = {
            temp    : cur.temp_C,
            feels   : cur.FeelsLikeC,
            desc    : cur.weatherDesc[0].value,
            humidity: cur.humidity,
            emoji   : getWeatherEmoji(cur.weatherDesc[0].value)
        };
        weatherCache[city] = result;
        return result;
    } catch {
        return null;
    }
}

// ─── INJECT WEATHER TOOLTIP STYLES ───────────────────────────────────────────
function injectWeatherStyles() {
    if (document.getElementById("weatherStyles")) return;
    const style = document.createElement("style");
    style.id = "weatherStyles";
    style.textContent = `
        /* Country heading weather badge */
        .country-weather-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-left: 14px;
            padding: 4px 12px;
            background: rgba(251,191,36,0.12);
            border: 1px solid rgba(251,191,36,0.3);
            border-radius: 20px;
            font-size: 13px;
            color: #fbbf24;
            font-weight: 600;
            vertical-align: middle;
            transition: 0.3s;
            cursor: default;
        }
        .country-weather-badge:hover {
            background: rgba(251,191,36,0.22);
        }
        .country-weather-badge .spin {
            display: inline-block;
            animation: weatherSpin 1s linear infinite;
        }
        @keyframes weatherSpin {
            to { transform: rotate(360deg); }
        }

        /* Per-card weather strip shown on hover */
        .card-weather-strip {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 7px 12px;
            background: linear-gradient(135deg, #0f172a, #1e293b);
            border-top: 1px solid rgba(251,191,36,0.15);
            font-size: 12px;
            color: #94a3b8;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 0.3s ease, max-height 0.3s ease;
        }
        .card:hover .card-weather-strip {
            opacity: 1;
            max-height: 40px;
        }
        .card-weather-strip .temp-val {
            color: #fbbf24;
            font-weight: 700;
            font-size: 14px;
        }
        .card-weather-strip .weather-desc {
            font-style: italic;
            color: #64748b;
            font-size: 11px;
        }

        /* Full weather panel — shown when country heading is clicked */
        .weather-panel {
            display: none;
            margin: 8px 16px 16px;
            padding: 18px 22px;
            background: linear-gradient(135deg, #0d1526, #1a2540);
            border: 1px solid rgba(251,191,36,0.2);
            border-radius: 16px;
            animation: weatherFadeIn 0.35s ease;
        }
        .weather-panel.open { display: block; }
        @keyframes weatherFadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        .weather-panel-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 16px;
        }
        .weather-main {
            display: flex;
            align-items: center;
            gap: 14px;
        }
        .weather-big-icon { font-size: 48px; line-height: 1; }
        .weather-big-temp {
            font-size: 42px;
            font-weight: 800;
            color: white;
            line-height: 1;
        }
        .weather-big-city {
            color: #fbbf24;
            font-weight: 700;
            font-size: 15px;
            margin-bottom: 3px;
        }
        .weather-big-desc {
            color: #94a3b8;
            font-size: 13px;
            text-transform: capitalize;
        }
        .weather-stats {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        .weather-stat {
            text-align: center;
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
            padding: 10px 16px;
        }
        .weather-stat .label {
            color: #64748b;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            margin-bottom: 4px;
        }
        .weather-stat .value {
            color: white;
            font-weight: 700;
            font-size: 16px;
        }
        .weather-panel-close {
            position: absolute;
            right: 10px;
            top: 10px;
            background: none;
            border: none;
            color: #64748b;
            cursor: pointer;
            font-size: 16px;
            padding: 4px 8px;
            border-radius: 6px;
            transition: 0.2s;
        }
        .weather-panel-close:hover { color: white; background: rgba(255,255,255,0.1); }
        .weather-panel-wrap { position: relative; }
    `;
    document.head.appendChild(style);
}

// ─── ADD WEATHER BADGE to a country heading ───────────────────────────────────
async function attachCountryWeather(headingEl, country) {
    const city = countryWeatherCity[country];
    if (!city) return;

    // Create badge with spinner
    const badge = document.createElement("span");
    badge.className = "country-weather-badge";
    badge.innerHTML = `<span class="spin">⏳</span> Loading…`;
    headingEl.appendChild(badge);

    const weather = await fetchWeather(city);
    if (!weather) {
        badge.innerHTML = `❌ N/A`;
        return;
    }

    badge.innerHTML = `${weather.emoji} ${weather.temp}°C <span style="color:#94a3b8;font-weight:400;font-size:11px;">${weather.desc}</span>`;
    badge.title     = `${city}: Feels like ${weather.feels}°C | Humidity ${weather.humidity}%`;

    // Click badge → toggle full weather panel below heading
    badge.addEventListener("click", (e) => {
        e.stopPropagation();
        let panel = headingEl.parentElement.querySelector(".weather-panel");
        if (panel) {
            panel.classList.toggle("open");
        } else {
            panel = buildWeatherPanel(weather, city);
            const wrap = document.createElement("div");
            wrap.className = "weather-panel-wrap";
            wrap.appendChild(panel);
            headingEl.parentElement.insertBefore(wrap, headingEl.nextSibling);
            setTimeout(() => panel.classList.add("open"), 10);
        }
    });
}

function buildWeatherPanel(w, city) {
    const panel = document.createElement("div");
    panel.className = "weather-panel";
    panel.innerHTML = `
        <button class="weather-panel-close" title="Close">✕</button>
        <div class="weather-panel-inner">
            <div class="weather-main">
                <div class="weather-big-icon">${w.emoji}</div>
                <div>
                    <div class="weather-big-city">📍 ${city} — Live Weather</div>
                    <div class="weather-big-temp">${w.temp}°C</div>
                    <div class="weather-big-desc">${w.desc}</div>
                </div>
            </div>
            <div class="weather-stats">
                <div class="weather-stat">
                    <div class="label">Feels Like</div>
                    <div class="value">${w.feels}°C</div>
                </div>
                <div class="weather-stat">
                    <div class="label">Humidity</div>
                    <div class="value">${w.humidity}%</div>
                </div>
                <div class="weather-stat">
                    <div class="label">Source</div>
                    <div class="value" style="font-size:11px;color:#64748b;">wttr.in</div>
                </div>
            </div>
        </div>
    `;
    panel.querySelector(".weather-panel-close").addEventListener("click", () => {
        panel.classList.remove("open");
    });
    return panel;
}

// ─── ADD WEATHER STRIP to a place card ───────────────────────────────────────
async function attachCardWeather(cardEl, placeName) {
    // Use the place-specific city; fall back gracefully if not mapped
    const city = placeWeatherCity[placeName];
    if (!city) return;

    // Create strip (hidden by default, CSS handles hover reveal)
    const strip = document.createElement("div");
    strip.className = "card-weather-strip";
    strip.innerHTML = `<span>⏳ Loading weather…</span>`;
    cardEl.appendChild(strip);

    // Fetch lazily — only when card is first hovered
    let fetched = false;
    cardEl.addEventListener("mouseenter", async () => {
        if (fetched) return;
        fetched = true;
        const weather = await fetchWeather(city);
        if (!weather) {
            strip.innerHTML = `<span>Weather unavailable</span>`;
            return;
        }
        strip.innerHTML = `
            <span>${weather.emoji} <span class="temp-val">${weather.temp}°C</span></span>
            <span class="weather-desc">${weather.desc}</span>
            <span>💧 ${weather.humidity}%</span>
        `;
    }, { once: false });
}

// ─── ALL DESTINATIONS DATA ────────────────────────────────────────────────────
const destinationsData = [
    {
        country: "AUSTRALIA",
        places: [
            { name: "Sydney Southeastern coast of Australia", image: "IMAGES/Sydney2.jpg" },
            { name: "Melbourne central business district", image: "IMAGES/Melbourne.jpg" },
            { name: "The CBD and Brisbane River", image: "IMAGES/Brisbane.jpg" },
            { name: "Perth city of Western Australia", image: "IMAGES/Perth.jpg" },
            { name: "Harbour Bridge", image: "IMAGES/Harbour Bridge Sydney.jpeg" }
        ]
    },
    {
        country: "BRAZIL",
        places: [
            { name: "Rio de Janeiro's Christ the Redeemer", image: "IMAGES/Sardinia.jpg" },
            { name: "The Immense Iguazu Falls", image: "IMAGES/Iquazu falls.jpg" },
            { name: "Sugarloaf Mountain", image: "IMAGES/Sugarloaf Mountain.jpg" },
            { name: "Eze Village", image: "IMAGES/Eze village.jpg" },
            { name: "Cristo Redentor", image: "IMAGES/Cristo Redentor.jpeg" }
        ]
    },
    {
        country: "CANADA",
        places: [
            { name: "Lake Moraine in Banff Canada", image: "IMAGES/Lake-Moraine-in-Banff-Canada.jpg" },
            { name: "Beauty of Vancouver", image: "IMAGES/VANCOUVER.avif" },
            { name: "Toronto", image: "IMAGES/Toronto.webp" },
            { name: "The thunderous Niagara Falls", image: "IMAGES/the thunderous Niagara Falls.jpg" },
            { name: "Ontario", image: "IMAGES/Ontario.jpeg" }
        ]
    },
    {
        country: "CHINA",
        places: [
            { name: "Great Wall of China", image: "IMAGES/Greatwallofchina.jpg" },
            { name: "The Terracotta Warriors in Xi'an", image: "IMAGES/he Terracotta Warriors in Xi'an.webp" },
            { name: "Giant Pandas in Chengdu", image: "IMAGES/giant pandas in Chengdu.jpg" },
            { name: "The scenic Karst mountains in Guilin", image: "IMAGES/the scenic Karst mountains in Guilin.jpg" },
            { name: "Jiuzhaigou Valley (Sichuan)", image: "IMAGES/Jiuzhaigou Valley (Sichuan).jpg" }
        ]
    },
    {
        country: "COLOMBIA",
        places: [
            { name: "Colonial, Coastal City of Cartagena", image: "IMAGES/colonial, coastal city of Cartagena.jpg" },
            { name: "Medellín's innovative culture", image: "IMAGES/Medellín.jpg" },
            { name: "The vibrant capital", image: "IMAGES/the vibrant capital.jpg" },
            { name: "Tayrona National Park", image: "IMAGES/Tayrona National Park.jpg" },
            { name: "Cartagena", image: "IMAGES/Cartagena, Colombia.jpeg" }
        ]
    },
    {
        country: "DUBAI",
        places: [
            { name: "Dubai Fountain", image: "IMAGES/Dubai Fountain.jpg" },
            { name: "Museum of the Future", image: "IMAGES/Museum of the Future.png" },
            { name: "Burj Khalifa", image: "IMAGES/Burj khalifa.jpg" },
            { name: "Burj Al Arab Hotel", image: "IMAGES/Burj-Al-Arab-luxury-hotel-Dubai.webp" },
            { name: "Dubai Miracle Garden", image: "IMAGES/DUBAI2.jpeg" }
        ]
    },
    {
        country: "FRANCE",
        places: [
            { name: "Paris Louvre Pyramid", image: "IMAGES/paris-louvre-pyramid-france.jpg" },
            { name: "Palace of Versailles", image: "IMAGES/Palace of Versailles.avif" },
            { name: "Corsica", image: "IMAGES/corsica-island.webp" },
            { name: "Menton in France", image: "IMAGES/Menton in france.jpg" },
            { name: "French Riviera", image: "IMAGES/French-Riviera.jpg" }
        ]
    },
    {
        country: "GEORGIA",
        places: [
            { name: "The ancient rock-hewn town of Uplistsikhe", image: "IMAGES/the ancient rock-hew town of Uplistsikhen.jpg" },
            { name: "The beach city of Batumi", image: "IMAGES/the beach city of Batumi,.webp" },
            { name: "The Wine Region of Kakheti", image: "IMAGES/the wine region of Kakheti.jpg" },
            { name: "The Mountain Town of Kazbegi", image: "IMAGES/the mountain town of Kazbegi.jpg" },
            { name: "Tbilisi", image: "IMAGES/Explore Tbilisi - Wanderlust.jpeg" }
        ]
    },
    {
        country: "GERMANY",
        places: [
            { name: "Berlin", image: "IMAGES/Berlin.jpg" },
            { name: "Hamburg", image: "IMAGES/Hamburg.webp" },
            { name: "Heidelberg", image: "IMAGES/Heidelberg.jpg" },
            { name: "Nuremberg", image: "IMAGES/Nuremberg.jpg" },
            { name: "Colonia", image: "IMAGES/Colonia.jpeg" }
        ]
    },
    {
        country: "GREECE",
        places: [
            { name: "Athens", image: "IMAGES/athens.jpg" },
            { name: "Santorini", image: "IMAGES/Santorini.webp" },
            { name: "Mykonos", image: "IMAGES/Mykonos.jpg" },
            { name: "Delphi", image: "IMAGES/Delphi.jpg" },
            { name: "Rhodes", image: "IMAGES/Rhodes.jpg" }
        ]
    },
    {
        country: "HUNGARY",
        places: [
            { name: "Tokaj Wine Region", image: "IMAGES/Tokaj Wine Region.webp" },
            { name: "Eger town square", image: "IMAGES/Eger-town-square.webp" },
            { name: "Hévíz", image: "IMAGES/Hévíz.webp" },
            { name: "Szentendre", image: "IMAGES/Szentendre.webp" },
            { name: "Debrecen", image: "IMAGES/Debrecen.jpg" }
        ]
    },
    {
        country: "ICELAND",
        places: [
            { name: "Black Sand Beaches at Reynisfjara", image: "IMAGES/black sand beaches at Reynisfjara.jpg" },
            { name: "Jökulsárlón Glacier Lagoon", image: "IMAGES/Jökulsárlón glacier lagoon.jpg" },
            { name: "The Golden Circle", image: "IMAGES/The Golden Circle.jpg" },
            { name: "Snaefellsnes Peninsula", image: "IMAGES/Snaefellsnes Peninsula.jpg" },
            { name: "Reykjavik", image: "IMAGES/Reykjavik, Iceland.jpeg" }
        ]
    },
    {
        country: "INDIA",
        places: [
            { name: "Rajasthan - Jaipur", image: "IMAGES/Rajasthan-Jaipur.jpg" },
            { name: "Taj Mahal", image: "IMAGES/historic Agra (Taj Mahal).jpg" },
            { name: "Beaches in Goa", image: "IMAGES/beaches in goa.jpg" },
            { name: "Varanasi", image: "IMAGES/Varanasi, Uttar Pradesh.jpg" },
            { name: "Kolkata", image: "IMAGES/Kolkata, West Bengal.webp" }
        ]
    },
    {
        country: "INDONESIA",
        places: [
            { name: "Borobudur & Prambanan", image: "IMAGES/Borobudur & Prambanan.jpg" },
            { name: "Bali", image: "IMAGES/Bali.jpg" },
            { name: "Raja Ampat", image: "IMAGES/Raja Ampat.jpg" },
            { name: "Komodo National Park", image: "IMAGES/Komodo National Park.jpg" },
            { name: "Raja Ampat Islands", image: "IMAGES/Raja Ampat.jpg" }
        ]
    },
    {
        country: "ITALY",
        places: [
            { name: "Amalfi Coast", image: "IMAGES/Amalfi-coast-italy.webp" },
            { name: "Vernazza - Cinque Terre", image: "IMAGES/vernazza-cinque-terre.webp" },
            { name: "Vatican City", image: "IMAGES/Vatican City in Rome.webp" },
            { name: "The Dolomites", image: "IMAGES/The Dolomites.avif" },
            { name: "Mount Bromo & Mount Rinjani", image: "IMAGES/MountBromo.jpg" }
        ]
    },
    {
        country: "NEW ZEALAND",
        places: [
            { name: "Rotorua", image: "IMAGES/Rotorua.jpg" },
            { name: "Milford Sound", image: "IMAGES/Milford Sound.jpg" },
            { name: "South Island", image: "IMAGES/South Island.jpg" },
            { name: "North Island", image: "IMAGES/North Island.jpg" },
            { name: "Auckland", image: "IMAGES/Auckland.jpeg" }
        ]
    },
    {
        country: "NORWAY",
        places: [
            { name: "Geirangerfjord & Nærøyfjord", image: "IMAGES/Geirangerfjord & Nærøyfjord.jpg" },
            { name: "Lofoten Islands", image: "IMAGES/Lofoten Islands.jpg" },
            { name: "Northern Lights (Tromsø)", image: "IMAGES/Northern Lights (Tromsø).jpg" },
            { name: "Trolltunga (Troll's Tongue)", image: "IMAGES/Trolltunga (Troll's Tongue).jpg" },
            { name: "Bergen's City", image: "IMAGES/Bergen city.jpeg" }
        ]
    },
    {
        country: "PORTUGAL",
        places: [
            { name: "Sintra", image: "IMAGES/Sintra-Portugal.jpg" },
            { name: "Porto", image: "IMAGES/Porto.jpg" },
            { name: "Coimbra", image: "IMAGES/Coimbra.jpg" },
            { name: "Évora", image: "IMAGES/Évora.webp" },
            { name: "Lagos", image: "IMAGES/Lagos.jpeg" }
        ]
    },
    {
        country: "SRILANKA",
        places: [
            { name: "Sigiriya Lion Rock", image: "IMAGES/srilanka.jpeg" },
            { name: "The Cultural City of Kandy", image: "IMAGES/the cultural city of Kandy.jpg" },
            { name: "Nuwara Eliya", image: "IMAGES/Nuwara Eliya.jpg" },
            { name: "Yala Wildlife National Park", image: "IMAGES/wildlife-rich Yala National Park.jpg" },
            { name: "Galle Fort", image: "IMAGES/Galle Fort Sri Lanka.jpeg" }
        ]
    },
    {
        country: "SWITZERLAND",
        places: [
            { name: "Jungfrau Region", image: "IMAGES/Jungfrau Region.jpg" },
            { name: "Zermatt", image: "IMAGES/Zermatt.jpg" },
            { name: "Interlaken", image: "IMAGES/Jungfrau Region copy.jpg" },
            { name: "Lucerne", image: "IMAGES/Lucerne.jpg" },
            { name: "Swiss Alps", image: "IMAGES/Switzerland1.jpeg" }
        ]
    },
    {
        country: "THAILAND",
        places: [
            { name: "Krabi", image: "IMAGES/Krabilimestone.jpg" },
            { name: "Chiang Mai's mountainous culture", image: "IMAGES/Chiang Mai's mountainous culture.avif" },
            { name: "Phuket's Beaches", image: "IMAGES/Phuket's beaches.jpg" },
            { name: "Bangkok's Grand Temples", image: "IMAGES/Bangkok's grand temples.jpg" },
            { name: "Krabi", image: "IMAGES/krabithailand.jpeg" }
        ]
    },
    {
        country: "USA",
        places: [
            { name: "Chicago", image: "IMAGES/Chicago usa.jpg" },
            { name: "Los Angeles", image: "IMAGES/los angeles usa.jpg" },
            { name: "San Francisco", image: "IMAGES/San Francisco usa.jpg" },
            { name: "New York", image: "IMAGES/New York usa.jpg" },
            { name: "Boston", image: "IMAGES/boston usa.jpg" }
        ]
    }
];

// ─── SEARCH BAR ──────────────────────────────────────────────────────────────
function injectSearchBar() {
    const section = document.getElementById("destinations-section");
    if (!section) return;

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "text-align:center; padding: 30px 20px 10px;";

    const input = document.createElement("input");
    input.type        = "text";
    input.id          = "destinationSearch";
    input.placeholder = "🔍  Search destinations or places...";
    Object.assign(input.style, {
        width: "min(500px, 90%)", padding: "14px 20px",
        borderRadius: "30px", border: "2px solid #fbbf24",
        background: "#111827", color: "white", fontSize: "16px", outline: "none"
    });

    wrapper.appendChild(input);
    section.parentNode.insertBefore(wrapper, section);

    input.addEventListener("input", () => {
        filterDestinations(input.value.trim().toLowerCase());
    });
}

// ─── RENDER FUNCTION ─────────────────────────────────────────────────────────
function displayDestinations(data = destinationsData) {
    const section = document.getElementById("destinations-section");
    if (!section) return;
    section.innerHTML = "";

    if (data.length === 0) {
        section.innerHTML = `<p style="text-align:center;color:#94a3b8;padding:40px;font-size:18px;">No destinations found. Try a different search.</p>`;
        return;
    }

    data.forEach(destination => {
        const scrollContainer = document.createElement("div");
        scrollContainer.classList.add("scroll-container");

        // ── Country heading with weather badge ──
        const heading = document.createElement("h2");
        heading.textContent = destination.country;
        scrollContainer.appendChild(heading);

        // Attach live weather badge to heading (async, non-blocking)
        attachCountryWeather(heading, destination.country);

        // ── Place cards ──
        destination.places.forEach(place => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.cursor = "pointer";

            const img  = document.createElement("img");
            img.src    = place.image;
            img.alt    = place.name;

            const title       = document.createElement("h4");
            title.textContent = place.name;

            // "Book Now" button — clicking card OR button both navigate
            const bookBtn = document.createElement("div");
            bookBtn.textContent   = "Book Now →";
            bookBtn.style.cssText = "display:block;padding:8px;background:#fbbf24;color:black;text-align:center;font-size:13px;font-weight:bold;border-bottom-left-radius:12px;border-bottom-right-radius:12px;transition:0.3s;";

            // Navigate to booking page with destination pre-filled via URL param
            const bookingURL = "booking.html?destination=" + encodeURIComponent(place.name);

            card.addEventListener("click", (e) => {
                // Brief gold flash to confirm selection, then navigate
                card.style.border    = "2px solid #fbbf24";
                card.style.boxShadow = "0 0 24px rgba(251,191,36,0.7)";
                bookBtn.style.background = "#f59e0b";
                setTimeout(() => { window.location.href = bookingURL; }, 250);
            });

            card.addEventListener("mouseover", () => bookBtn.style.background = "#f59e0b");
            card.addEventListener("mouseout",  () => bookBtn.style.background = "#fbbf24");

            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(bookBtn);

            // ── Attach weather strip to card (lazy-fetched on first hover) ──
            attachCardWeather(card, place.name);

            scrollContainer.appendChild(card);
        });

        section.appendChild(scrollContainer);
    });
}

// ─── FILTER FUNCTION ─────────────────────────────────────────────────────────
function filterDestinations(query) {
    if (!query) { displayDestinations(destinationsData); return; }
    const filtered = destinationsData
        .map(dest => {
            if (dest.country.toLowerCase().includes(query)) return dest;
            const places = dest.places.filter(p => p.name.toLowerCase().includes(query));
            return places.length ? { ...dest, places } : null;
        })
        .filter(Boolean);
    displayDestinations(filtered);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    injectWeatherStyles();
    injectSearchBar();
    displayDestinations();

    // Sticky header
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (!header) return;
        header.style.background = window.scrollY > 50 ? "rgba(2,6,23,0.97)" : "#020617";
        header.style.boxShadow  = window.scrollY > 50 ? "0 2px 20px rgba(0,0,0,0.5)" : "none";
    });

    // Active nav link
    document.querySelectorAll("nav a").forEach(link => {
        if (link.href === window.location.href) link.style.color = "#fbbf24";
    });

    // Back to top
    const btn = document.createElement("button");
    btn.textContent = "↑";
    Object.assign(btn.style, {
        position: "fixed", bottom: "30px", right: "30px",
        background: "#fbbf24", color: "black", border: "none",
        borderRadius: "50%", width: "45px", height: "45px",
        fontSize: "20px", cursor: "pointer", display: "none",
        zIndex: "9999", boxShadow: "0 4px 15px rgba(251,191,36,0.4)", transition: "0.3s"
    });
    document.body.appendChild(btn);
    window.addEventListener("scroll", () => { btn.style.display = window.scrollY > 400 ? "block" : "none"; });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});