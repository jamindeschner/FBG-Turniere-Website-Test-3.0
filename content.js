const WEBSITE_CONTENT = {
    currentActiveSport: "halle", // Standard beim Laden der Seite ("halle" oder "beach")
    headerTitle: "Volleyball Turniere - FBG",
    heroRegisterBtnText: "Zur Turnieranmeldung",
    emailReceiverDummy: "anmeldung@fbg-volleyball.de",

    navigation: {
        home: "Startseite",
        registration: "Anmeldung",
        about: "Über uns",
        gallery: "🏆 Alle Turniere",
        contact: "Kontakt"
    },

    labels: {
        halleShort: "Hallen-Turnier",
        beachShort: "Beach-Turnier"
    },

    ticker: {
        countdownPrefix: "⏳ Countdown zum nächsten [SPORT]: ",
        runningNow: "🔥 Das [SPORT] läuft JETZT live! Komm vorbei!",
        archiveMode: "✅ Das letzte [SPORT] ist beendet. Ergebnisse im Turnier-Archiv!",
        noEvent: "📅 Aktuell ist kein [SPORT] geplant. Schau bald wieder vorbei!"
    },

    unknownDateBanner: {
        title: "Nächster Termin in Vorbereitung",
        text: "Wir planen bereits fleißig das nächste Event für euch. Sobald das Datum und die Location feststehen, kannst du dich hier wie gewohnt anmelden!"
    },

    pastTournament: {
        titlePrefix: "Rückblick: ",
        description: "Unser letztes Turnier war ein voller Erfolg! Alle Platzierungen, Eindrücke und den Link zur passwortgeschützten Bildergalerie findest du in unserer Gesamtübersicht."
    },

    vision: {
        title: "Unsere Vision & Werte",
        intro: "Gemeinsam Sport treiben, Gemeinschaft erleben und fairen Volleyball spielen – das macht die Turniere des FBG aus.",
        items: [
            { num: "01", title: "Faires Miteinander", text: "Egal ob Profi oder Hobbyspieler – bei uns steht der respektvolle Umgang auf und neben dem Feld an erster Stelle." },
            { num: "02", title: "Gemeinschaft", text: "Wir vernetzen Volleyballbegeisterte aus verschiedenen Regionen und schaffen Raum für neue Freundschaften." },
            { num: "03", title: "Leidenschaft", text: "Mit Herzblut organisieren wir unvergessliche Turniertage, die lange im Gedächtnis bleiben." }
        ]
    },

    registration: {
        title: "Turnieranmeldung",
        auditWarningBox: "⚠️ <strong>Achtung:</strong> Da deine Gemeinde zum ersten Mal teilnimmt, wird die Anmeldung vorab manuell durch das FBG-Präsidium geprüft.",
        leftText: "Melde dein Team jetzt für das anstehende Turnier an. Fülle dazu einfach das Formular aus. Es öffnet sich automatisch dein Mail-Programm mit einer vorgefertigten Anmeldung.",
        footerText: "Hinweis: Die Startplätze sind begrenzt und werden nach dem First-Come-First-Served-Prinzip vergeben.",
        submitBtnText: "Anmeldung per E-Mail generieren",
        placeholders: {
            gemeindeSelectDefault: "Bitte Gemeinde auswählen...",
            gemeindeSelectNewOption: "➕ Eigene / Neue Gemeinde hinzufügen..."
        }
    },

    emailTemplate: {
        subject: "Turnieranmeldung [TURNIER] - Team: [TEAM]",
        statusExistingCommunity: "Registrierte Partnergemeinde",
        statusNewCommunity: "NEUE GEMEINDE (Erfordert Prüfung durch Präsidium)",
        body: "Hallo FBG-Turnierleitung,\n\nhiermit melde ich mein Team verbindlich an:\n\n- Turnierart: [TURNIER]\n- Teamname: [TEAM]\n- Gemeinde: [GEMEINDE]\n- Status: [STATUS]\n\nKontaktpersonen-Details:\n- Name des Leiters: [LEITER]\n- E-Mail: [EMAIL]\n- Telefon: [TELEFON]\n\nBitte sendet mir die Bestätigung und die Kontodaten für die Startgebühr zu.\n\nViele Grüße\n[LEITER]"
    },

    aboutUs: {
        title: "Über uns",
        text: "Das Freizeitsport-Bündnis Gemeinschaft (FBG) veranstaltet seit vielen Jahren leidenschaftlich Volleyball-Turniere im Hallen- und Beachbereich. Unser Ziel ist es, Menschen durch den Sport zusammenzubringen und packende, aber stets faire Wettkämpfe zu bieten. Ein eingespieltes Team aus ehrenamtlichen Helfern sorgt bei jedem Event für einen reibungslosen Ablauf, gute Verpflegung und beste Stimmung."
    },

    contact: {
        title: "Kontakt",
        info: "Hast du Fragen zum Regelwerk, zum Ablauf oder möchtest du uns Feedback geben? Schreib uns einfach eine E-Mail – wir melden uns schnellstmöglich bei dir!",
        btnText: "Jetzt Nachricht schreiben"
    },

    gallery: {
        navTitle: "🏆 FBG - <span>Turnier-Archiv</span>",
        navBack: "← Zurück zur Startseite",
        title: "Alle Turniere & Highlights",
        description: "Hier findest du eine Übersicht über alle aktuellen, kommenden und vergangenen Turniere inklusive Detail-Informationen und passwortgeschützten Fotogalerien.",
        btnExternalText: "📸 Fotos ansehen",
        btnExternalComingSoon: "⏳ Galerie bald verfügbar",
        promptText: "🔒 Dieses Album ist geschützt.\nBitte gib das turnierspezifische Passwort ein:",
        errorText: "❌ Falsches Passwort. Der Zugriff auf das Google Fotos Album wurde verweigert."
    }
};