/* =========================================================================
   === TURNIER TERMINE & EVENTS ===
   Hier trägst du alle Turniere ein.
   ========================================================================= */

const TOURNAMENT_EVENTS = [
    {
        id: "halle-2026-01",
        sport: "halle",
        title: "Winter Mixed Cup 2026",
        datum: "2026-11-21T10:00:00", 
        ort: "Regnitzarena Hirschaid",
        coverImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600",
        description: "Das große Hallen-Highlight zum Jahresabschluss. Schnapp dir dein Team und kämpfe um den FBG-Pokal.",
        
        // --- FLEXIBLE DETAILS (Jeder Block kann Text UND optional ein eigenes Bild haben!) ---
        details: [
            { 
                title: "🍎 Verpflegung & Essen", 
                text: "Es gibt eine reichhaltige Kuchentheke, belegte Brötchen und warme Wienerle vor Ort.",
                image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=500" // Bild für die Verpflegung
            },
	    { 
                title: "Zusatz", 
                text: "Das musst du auch wissen!",
                image: "" // Bild für die Verpflegung
            },

            { 
                title: "💰 Startgebühr", 
                text: "25,- € pro Team, zahlbar am Turniertag in bar bei der Turnierleitung.",
                image: "" // Kein Bild für diesen Bereich
            },
            { 
                title: "📋 Turnierplan & Ablauf", 
                text: "Hier seht ihr den vorläufigen Ablaufplan sowie die Hallenaufteilung für die Vorrunde.",
                image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=500" // Bild für den Turnierplan / Lageplan
            }
        ],
        
        // --- EXTERNE LINKS (Einfach Link eintragen oder "" leer lassen) ---
        mapsUrl: "https://maps.google.com/?q=Regnitzarena+Hirschaid", 
        turnierplanUrl: "https://www.meinturnierplan.de", 

        // --- FOTO GALERIE (Nach dem Turnier) ---
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "fbg"
    },
   {
        id: "beach-2027",
        sport: "beach",
        title: "Beachvolleyball-Turnier 2027",
        datum: "2026-06-24T10:00:00", 
        ort: "TS Herzogenaurach",
        coverImage: "bilder/Beach-Turnier-2027.png",
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
                title: "Parken", 
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

 {
        id: "beach-2025",
        sport: "beach",
        title: "Beachvolleyball-Turnier 2025",
        datum: "2025-06-24T10:00:00", 
        ort: "TS Herzogenaurach",
        coverImage: "bilder/Beach-Turnier-2027.png",
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
                title: "Parken", 
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