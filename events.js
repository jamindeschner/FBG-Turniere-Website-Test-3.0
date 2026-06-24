/* =========================================================================
   === TURNIER TERMINE & EVENTS ===
   Hier trägst du alle Turniere ein.
   ========================================================================= */

const TOURNAMENT_EVENTS = [

{
        id: "beach-2026",
        sport: "beach",
        title: "Beach-Volleyball-Turnier 2026",
        datum: "2026-07-25T10:00:00", 
        ort: "TS Herzogenaurach",
        coverImage: "bilder/Beach-Turnier-2026.png",
        description: "Unser Sommer-Turnier auf der schönen Anlage des TS Herzogenaurach. Wir freuen uns auf Sonne, Spaß und Gemeinschaft.",
        
        // --- FLEXIBLE DETAILS (Jeder Block kann Text UND optional ein eigenes Bild haben!) ---
        details: [
            { 
                title: "🍎 Verpflegung & Essen", 
                text: "Es gibt einen Foodtruck vor Ort. Bitte kein Mittagessen selbst mitbringen, nach Absprache mit dem Foodtruck-Anbieter.\nAllerdings freuen wir uns über Kuchen / Snacks / Fingerfood für den Nachmittag.",
                image: "" // Bild für die Verpflegung
            },
	    { 
                title: "", 
                text: "",
                image: "" // Bild für die Verpflegung
            },

            { 
                title: "💰 Startgebühr", 
                text: "5€ pro Spieler, Zuschauer kostenlos.",
                image: "" // Kein Bild für diesen Bereich
            },
            { 
                title: "🅿️ Parken", 
                text: "Parkplätze sind ausreichend auf dem markierten Ort verfügbar.",
                image: "bilder/Parkplatz-Herzogenaurach.png" // Bild für den Turnierplan / Lageplan
            }

        ],

        
        // --- EXTERNE LINKS (Einfach Link eintragen oder "" leer lassen) ---
        mapsUrl: "https://maps.app.goo.gl/PtVu3RWGQisEudbu9", 
        turnierplanUrl: "https://www.meinturnierplan.de", 

        // --- FOTO GALERIE (Nach dem Turnier) ---
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "fbg"
    },



];