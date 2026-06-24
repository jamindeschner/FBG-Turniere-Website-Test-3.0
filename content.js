/* =========================================================================
   === WEBSITE INHALTE & TEXTE ===
   Hier kannst du alle Texte und Hintergründe der Website anpassen.
   ========================================================================= */

const WEBSITE_CONTENT = {
    currentActiveSport: "halle", // Standard beim Laden der Seite ("halle" oder "beach")
    headerTitle: "Volleyball Turniere - FBG Erlangen",
    emailReceiverDummy: "anmeldung@fbg-volleyball.de",

    // --- HINTERGRUNDBILDER (Hier einfach deine Wunsch-Links eintragen) ---
    bgImageHalle: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1600", // Hintergrund für Halle
    bgImageBeach: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1600", // Hintergrund für Beach

    // --- SPORTARTEN-SCHALTER ---
    labels: {
        halleShort: "Hallen-Turnier",
        beachShort: "Beach-Turnier"
    },

    // --- LIVE-TICKER (OBEN) ---
    ticker: {
        countdownPrefix: "⏳ Countdown zum nächsten [SPORT]: ",
        runningNow: "🔥 Das [SPORT] läuft JETZT live! Komm vorbei!",
        archiveMode: "✅ Das letzte [SPORT] ist beendet. Ergebnisse im Turnier-Archiv!",
        noEvent: "📅 Aktuell ist kein [SPORT] geplant. Schau bald wieder vorbei!"
    },

    // --- BANNER WENN KEIN TURNIER GEPLANT IST ---
    unknownDateBanner: {
        title: "Nächster Termin in Vorbereitung",
        text: "Wir planen bereits fleißig das nächste Event für euch. Sobald das Datum und die Location feststehen, kannst du dich hier wie gewohnt anmelden!"
    },

    // --- SEKTION: DETAILS ZUR SPIELART (UNTER DER TURNIERLISTE) ---
    tournamentDetails: {
        halle: {
            title: "Details zum Hallenturnier",
            text: "Gespielt wird nach den offiziellen Mixed-Regeln (mind. 2 Frauen auf dem Feld). Die Netzhöhe beträgt standardmäßig 2,35m."
        },
        beach: {
            title: "Beach-Regeln & Sand-Infos",
            text: "Klassisches Beach-Volleyball im Sand. Barfuß oder mit Beach-Socken. Fairplay steht an oberster Stelle!"
        }
    },

    // --- SEKTION: UNSERE VISION & WERTE (BELIEBIG ERWEITERBAR) ---
    vision: {
        title: "Unsere Vision",
        intro: "Sport verbindet Menschen. Bei unseren Turnieren steht das gemeinsame Erlebnis und der Spaß am Volleyball im Vordergrund.",
        items: [
            { num: "01", title: "Gemeinschaft", text: "Wir wollen eine Plattform bieten, auf der Teams aus verschiedenen Regionen zusammenkommen und Freundschaften pflegen." },
            { num: "02", title: "Fairplay", text: "Ehrgeiz ist gut, aber Respekt dem Gegner und den Schiedsrichtern gegenüber ist uns absolut am wichtigsten." },
            { num: "03", title: "Wachstum", text: "Egal ob Anfänger-Team oder eingespielte Vereinsmannschaft – bei uns kann jedes Team lernen und über sich hinauswachsen." }
        ]
    },

    // --- SEKTION: ANMELDUNGS-BLOCK ---
    registration: {
        title: "Turnieranmeldung",
        auditWarningBox: "⚠️ <strong>Hinweis zur Prüfung:</strong> Da deine Gemeinde noch nicht in unserer Datenbank registriert ist, wird deine Anmeldung von der Turnierleitung manuell geprüft. Du erhältst im Anschluss eine Bestätigung.",
        leftText: "Fülle das Formular vollständig aus. Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer vorgefertigten Nachricht. Schicke diese einfach ab, um dein Team anzumelden.",
        footerText: "Die Plätze sind pro Turnier limitiert. Es gilt das Prinzip: Wer zuerst kommt, mahlt zuerst!",
        submitBtnText: "Anmeldung via E-Mail absenden",
        labels: {
            gemeinde: "Wähle deine Gemeinde / Verein",
            newGemeinde: "Name der neuen Gemeinde/Verein",
            teamname: "Dein Teamname",
            leiter: "Name des Teamleiters",
            email: "E-Mail-Adresse",
            telefon: "Telefonnummer / Mobil"
        },
        placeholders: {
            gemeindeSelectDefault: "-- Bitte Gemeinde auswählen --",
            gemeindeSelectNewOption: "➕ Meine Gemeinde ist nicht gelistet (Neu anlegen)"
        }
    },

    // --- SEKTION: ÜBER UNS ---
    aboutUs: {
        title: "Über uns",
        text: "Das Freizeitsport-Bündnis Gemeinschaft (FBG) veranstaltet seit vielen Jahren leidenschaftlich Volleyball-Turniere im Hallen- und Beachbereich. Unser Ziel ist es, Menschen durch den Sport zusammenzubringen und packende, aber stets faire Wettkämpfe zu bieten. Ein eingespieltes Team aus ehrenamtlichen Helfern sorgt bei jedem Event für einen reibungslosen Ablauf, gute Verpflegung und beste Stimmung."
    },

    // --- SEKTION: KONTAKT ---
    contact: {
        title: "Kontakt & Fragen",
        info: "Hast du Fragen zum Regelwerk, zum Ablauf oder möchtest du uns Feedback geben? Schreib uns einfach eine E-Mail – wir melden uns schnellstmöglich bei dir!",
        btnText: "Jetzt Nachricht schreiben",
        receiverEmail: "info@fbg-volleyball.de",
        mailSubject: "Anfrage über Volleyball-Webseite"
    },

    // --- FOTO-GALERIE PROMPT ---
    gallery: {
        btnExternalText: "📸 Fotos ansehen",
        btnExternalComingSoon: "⏳ Galerie bald verfügbar",
        promptText: "🔒 Dieses Album ist geschützt.\nBitte gib das turnierspezifische Passwort ein:",
        errorText: "❌ Falsches Passwort. Der Zugriff auf das Google Fotos Album wurde verweigert."
    },

    // --- E-MAIL FORMULAR-TEMPLATE ---
    emailTemplate: {
        subject: "[ANMELDUNG] [TURNIER] - Team: [TEAM]",
        statusNewCommunity: "Neu (Muss geprüft werden)",
        statusExistingCommunity: "Bereits registriert",
        body: "Hallo FBG-Turnierleitung,\n\nhiermit melde ich mein Team verbindlich an:\n\nTurnierart: [TURNIER]\nTeamname: [TEAM]\nGemeinde/Verein: [GEMEINDE] (Status: [STATUS])\n\nAnsprechpartner: [LEITER]\nE-Mail: [EMAIL]\nTelefon: [TELEFON]\n\nViele Grüße,\n[LEITER]"
    }
};