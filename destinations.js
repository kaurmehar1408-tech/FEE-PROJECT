//  `destinationsData` is a simple array-based data store listing
//  countries and a small set of notable places for each country.
//  `displayDestinations()` reads that data and creates DOM elements  to render horizontally-scrollable rows of place cards (one row per country).
// ─── ALL DESTINATIONS DATA ─────
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
            { name: "Museum of the Future", image: "IMAGES/DUBAI1.jpeg" },
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
            { name: "Nusa Penida", image: "IMAGES/Nusa Penida.jpg" }
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
            { name: "Évora", image: "IMAGES/EVORA.webp" },
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
// ─── RENDER FUNCTION ─────────────────────────────────────────────────────
function displayDestinations() {
    // The main container where all country rows will be appended.
    // If the element is not present, the function exits safely.
    const section = document.getElementById('destinations-section');
    if (!section) return; // avoid errors if script runs on other pages
    // Loop through each destination (country) and build a row.
    destinationsData.forEach(destination => {
        // Create an outer container for the country row. The class
        // `.scroll-container` should provide horizontal scrolling via CSS.
        const scrollContainer = document.createElement('div');
        scrollContainer.classList.add('scroll-container');
        // Country heading (semantic, accessible heading level).
        const heading = document.createElement('h2');
        heading.textContent = destination.country;
        scrollContainer.appendChild(heading);
        // Create a card for each place in the country.
        destination.places.forEach(place => {
            const card = document.createElement('div');
            card.classList.add('card');
            // Image element: `src` points to the relative path in the
            // `IMAGES/` folder; `alt` uses the place name to aid
            // screen-reader users.
            const img = document.createElement('img');
            img.src = place.image;
            img.alt = place.name;
            // Title for the card; use a low-level heading to maintain
            // semantic structure inside each card.
            const title = document.createElement('h4');
            title.textContent = place.name;
            // Append elements into the card and the card into the row.
            card.appendChild(img);
            card.appendChild(title);
            scrollContainer.appendChild(card);
        });
        // Add the completed country row to the destinations section.
        section.appendChild(scrollContainer);
    });
}
// Render the destinations once the DOM is ready. Using DOMContentLoaded
// ensures the `destinations-section` element exists before we manipulate it.
document.addEventListener('DOMContentLoaded', displayDestinations);