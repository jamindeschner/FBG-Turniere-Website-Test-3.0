// ==========================================
// CENTRAL WEBSITE CONTENT CONFIGURATION
// ==========================================

const WEBSITE_CONTENT = {
    // Allgemeiner Titel der Seite
    headerTitle: "Volleyball Turniere - FBG Erlangen",
    
    // Standardmäßig ausgewählte Sportart beim Laden ("halle" oder "beach")
    currentActiveSport: "halle",

    // ==========================================
    // THEME-HINTERGRUNDBILDER (Hier anpassen)
    // ==========================================
    // Tipp: Verwende am besten hochauflösende, dunkle oder bearbeitete Bilder, 
    // da sie mit den Farbpaletten-Verläufen überlagert werden.
    bgImageHalle: "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?auto=format&fit=crop&q=80&w=1920", // Hallenboden mit Linienstruktur
    bgImageBeach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1920", // Feine Sandstruktur

    // Labels für die Buttons und den Ticker
    labels: {
        halleShort: "Hallen-Turnier",
        beachShort: "Beach-Turnier"
    },

    // ==========================================
    // ENDLOS-TICKER TEXTE
    // ==========================================
    ticker: {
        countdownPrefix: "⏳ NÄCHSTES [SPORT]: ",
        runningNow: "🔴 JETZT LIVE: Das [SPORT] läuft im vollen Gange! Komm vorbei! 🏐",
        archiveMode: "✅ Das aktuelle [SPORT] ist beendet. Fotos und Highlights findest du unten!",
        noEvent: "🏐 Das nächste [SPORT] ist bereits in Planung! Informationen folgen in Kürze."
    },

    // Banner, falls kein aktuelles Event eingetragen ist
    unknownDateBanner: {
        title: "Termine in Vorbereitung",
        text: "Wir planen bereits das nächste sportliche Highlight für euch. Sobald die Termine stehen, wird die Anmeldung hier freigeschaltet. Stay tuned!"
    },

    // ==========================================
    // DETAILS ZU DEN SPIELARTEN
    // ==========================================
    tournamentDetails: {
        halle: {
            title: "Hallen-Mixed-Turnier (6 vs 6)",
            text: "Gespielt wird nach klassischen Hallenregeln auf sechs Positionen. Jedes Team muss zu jedem Zeitpunkt mindestens zwei Frauen auf dem Feld haben. Perfekt für Vereine, Hobbymannschaften und ambitionierte Freizeitspieler, die die Wintersaison optimal nutzen wollen."
        },
        beach: {
            title: "Beach-Mixed-Turnier (4 vs 4)",
            text: "Sommer, Sand und maximale Action! Beim Beach-Mixed treten wir im Vierer-Team an (mindestens eine Frau auf dem Feld). Die weiche Sandstruktur verlangt Dynamik und Koordination. Gespielt wird nach modifizierten Beach-Regeln für maximalen Spielspaß unter freiem Himmel."
        }
    },

    // ==========================================
    // FOTO-GALERIE / PASSWORT-ABFRAGE
    // ==========================================
    gallery: {
        promptText: "🔒 Bitte gib das Event-Passwort ein, um Zugriff auf das Google-Fotos-Album zu erhalten:",
        errorText: "❌ Falsches Passwort! Der Zugriff wurde verweigert.",
        btnExternalText: "📸 Fotos ansehen",
        btnExternalComingSoon: "⏳ Fotos folgen bald"
    },

    // ==========================================
    // VISION & WERTE
    // ==========================================
    vision: {
        title: "Unsere Vision & Werte",
        intro: "Beim Kick Start Camp und den FBG-Turnieren steht nicht nur der Sieg im Vordergrund, sondern das gemeinsame Sporterlebnis.",
        items: [
            { num: "01", title: "Fairplay", text: "Respekt gegenüber dem Gegner und den Schiedsrichtern ist für uns das oberste Gebot." },
            { num: "02", title: "Gemeinschaft", text: "Egal ob Profi oder Hobbyspieler – wir verbinden sportlichen Ehrgeiz mit bester Laune." },
            { num: "03", title: "Wachstum", text: "Durch starke Ballwechsel und gemeinsame Herausforderungen über uns hinauswachsen." }
        ]
    },

    // ==========================================
    // ANMELDUNG & FORMULAR-TEXTE
    // ==========================================
    registration: {
        title: "Turnieranmeldung",
        auditWarningBox: "⚠️ WICHTIG: Da deine Gemeinde noch nicht im System registriert ist, wird deine Anmeldung manuell geprüft. Du erhältst nach Prüfung eine Bestätigung.",
        leftText: "Nutze das Formular, um dein Team verbindlich anzumelden. Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer vorgefertigten Nachricht. Bitte sende diese ab, um den Prozess abzuschließen.",
        footerText: "Hinweis: Die Startplätze sind streng limitiert und werden nach dem First-Come-First-Served-Prinzip vergeben.",
        submitBtnText: "Anmeldung via Mail generieren",
        placeholders: {
            gemeindeSelectDefault: "Bitte Gemeinde wählen...",
            gemeindeSelectNewOption: "➕ Meine Gemeinde ist nicht gelistet..."
        }
    },

    // ==========================================
    // ANMELDE-MAIL EMFAENGER & TEMPLATE
    // ==========================================
    emailReceiverDummy: "anmeldung@fbg-erlangen.de", 
    emailTemplate: {
        subject: "Turnieranmeldung: [TURNIER] - Team [TEAM]",
        statusNewCommunity: "NEUE GEMEINDE (Muss administrativ geprüft werden)",
        statusExistingCommunity: "Bereits registrierte Gemeinde",
        body: "Hallo FBG-Orgateam,\n\nhiermit melde ich mein Team verbindlich für das anstehende Turnier an.\n\nHier sind die Details:\n-----------------------------------------\n▶️ Turnierart: [TURNIER]\n▶️ Teamname: [TEAM]\n▶️ Gemeinde: [GEMEINDE]\n▶️ Status: [STATUS]\n-----------------------------------------\nAnsprechpartner / Leiter:\n👤 Name: [LEITER]\n📧 E-Mail: [EMAIL]\n📞 Telefon: [TELEFON]\n\nBitte sendet mir die Bestätigung sowie alle weiteren Infos an diese Adresse.\n\nViele Grüße!"
    },

    // ==========================================
    // ÜBER UNS
    // ==========================================
    aboutUs: {
        title: "Über uns",
        text: "Die FBG-Turnierserie steht seit Jahren für perfekt organisierte Volleyball-Events in Mittelfranken. Was als kleines Freizeitprojekt begann, hat sich zu einer festen Anlaufstelle für Volleyball-Enthusiasten der Region entwickelt. Unser Ziel ist es, Menschen durch den Sport zusammenzubringen, epische Ballwechsel zu ermöglichen und unvergessliche Turniertage zu gestalten."
    },

    // ==========================================
    // KONTAKT-ABSCHNITT (Hier anpassen)
    // ==========================================
    contact: {
        title: "Kontakt",
        info: "Du hast Fragen zum Regelwerk, dem Ablauf oder möchtest als Sponsor einsteigen? Schreib uns einfach eine Nachricht, wir melden uns schnellstmöglich bei dir!",
        btnText: "Direkt Mail schreiben",
        receiverEmail: "kontakt@fbg-erlangen.de", // Die Adresse, an die der Kontakt-Button sendet
        mailSubject: "Anfrage über die Volleyball-Webseite" // Betreffzeile für die Kontakt-Mail
    }
};