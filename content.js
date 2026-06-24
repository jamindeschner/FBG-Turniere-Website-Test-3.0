/* =========================================================================
   === WEBSITE INHALTE & TEXTE ===
   Hier kannst du alle Texte und Hintergründe der Website anpassen.
   ========================================================================= */

const WEBSITE_CONTENT = {
    currentActiveSport: "beach", // Standard beim Laden der Seite ("halle" oder "beach")
    headerTitle: "Volleyball Turniere - FBG Erlangen",
    emailReceiverDummy: "fbgerlangen.volleyball@gmail.com",

    // --- HINTERGRUNDBILDER (Hier einfach deine Wunsch-Links eintragen) ---
    bgImageHalle: "bilder/Background-Halle-general.png", // Hintergrund für Halle
    bgImageBeach: "bilder/Background-Beach-general.png", // Hintergrund für Beach

    // --- SPORTARTEN-SCHALTER ---
    labels: {
        halleShort: "Hallen-Turnier",
        beachShort: "Beach-Turnier"
    },

    // --- LIVE-TICKER (OBEN) ---
    ticker: {
        countdownPrefix: "⏳ Nächstes [SPORT]: ",
        runningNow: "🔥 Das [SPORT] läuft JETZT live! Komm vorbei!",
        archiveMode: "✅ Das letzte [SPORT] ist beendet. Sie dir die Bilder an, die gemacht wurden!",
        noEvent: "📅 Aktuell ist kein [SPORT] geplant. Schau bald wieder vorbei!"
    },

    // --- BANNER WENN KEIN TURNIER GEPLANT IST ---
    unknownDateBanner: {
        title: "Nächster Termin in Vorbereitung",
        text: "Wir planen bereits fleißig das nächste Event für euch. Sobald wir die nötigen Details wissen, findest du alle Informationen hier!"
    },

    // --- SEKTION: DETAILS ZUR SPIELART (UNTER DER TURNIERLISTE) ---
    tournamentDetails: {
        halle: {
            title: "Regeln und Spielablauf",
            text: "-ab 13 Jahren \n- 6 Spieler, darunter 2 Frauen und mind. 1 Frau immer auf dem Feld \n- Es kann zu jeder Zeit ein beliebiger Spieler mit einem der Auswechselspieler tauschen \n- Gruppenspiele auf Punkte bis 25 (max. 15min) \n- Ohne Libero-Regel(n) \n- Der Ball darf mit allen Körperteilen gespielt werden \n- Netzberührungen sind nur erlaubt, wenn die Aktion nichts mit dem Spielgeschehen zu tun hatte \n- Übertreten der Mittellinie (Fußteil über der Linie) gilt als Fehler \n- Ein Vorderspieler darf in jeder Höhe einen Angriffsschlag ausführen \n- Ein Hinterspieler darf HINTER der Angriffslinie in jeder Höhe angreifen --> Auf/Vor der Angriffslinie darf ein Angriffsschlag nur unterhalb der Netzkante erfolgen \n- Nur Vorderspieler dürfen blocken \n- Der Block zählt nicht als erste Ballberührung \n- Nur beim Blocken eines Angriffsschlags darf der Ball in der gegnerischen Spielhälfte getroffen werden (entscheidend ist die Position des Balles, nicht der Hand) "
        },
        beach: {
            title: "Regeln und Spielablauf",
            text: "- ab 13 Jahren \n- 6 Spieler pro Team, darunter mind. 2 Frauen und mind. 1 Frau immer auf dem Feld \n- Gruppenspiele auf Punkte bis 25 (max. 15min) \n- keine Beach-Technikregeln \n- Netzberührung ist ein Fehler \n- Übertreten unter dem Netz ist nur ein Fehler, wenn ein Gegner dadurch behindert oder gefährdet wird"
        }
    },

    // --- SEKTION: UNSERE VISION & WERTE (BELIEBIG ERWEITERBAR) ---
    vision: {
        title: "Unser Fokus",
        intro: "Bei unseren Turnieren steht der Herr JESUS CHRISTUS immer im Mittelpunkt. Das soll auch im Umgang miteinander bemerkbar sein.",
        items: [
            { num: "01", title: "Fairplay", text: "Ehrgeiz ist gut, aber ein liebevoller Umgang dem Gegner und den Schiedsrichtern gegenüber ist Voraussetzung. Wir alle sind Menschen und machen Fehler." },
            { num: "02", title: "Spaß", text: "Es ist ein Hobby-Turnier. Die gemeinsame Freude am Spiel steht an erster Stelle, nicht Siege oder Pokale. " },
            { num: "03", title: "Botschaft", text: "Zu jedem Turnier gehört ein kurzer Input aus dem Wort Gottes - der Bibel." }
        ]
    },

    // --- SEKTION: ANMELDUNGS-BLOCK ---
    registration: {
        title: "Turnier-Anmeldung",
        deadlineWeeksBefore: 2, // <--- Bestimmt die Anzahl an Wochen vor einem Turnier, bis wann die Anmeldung noch möglich ist
        auditWarningBox: "⚠️ <strong>Hinweis zur Prüfung:</strong> Da deine Gemeinde noch nicht in unserer Datenbank registriert ist, wird deine Anmeldung von der Turnierleitung manuell geprüft. Du erhältst im Anschluss eine Bestätigung.",
        leftText: "Fülle das Formular vollständig aus. Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer vorgefertigten Nachricht. Schicke diese einfach ab, um dein Team anzumelden. Bitte beachte, dass die Anmeldung erst mit Erhalt unserer Bestätigungsmail verbindlich ist.",
        footerText: "Du möchtest mehrere Teams anmelden? \nSende das Formular einfach mehrfach ab und vermerke dies im ''Sonstiges''-Feld.",
        submitBtnText: "Anmeldung via E-Mail absenden",
        labels: {
            gemeinde: "Wähle deine Gemeinde",
            newGemeinde: "Name der neuen Gemeinde",
            teamname: "Euer Teamname",
            leiter: "Name des Teamleiters",
            email: "E-Mail-Adresse",
            telefon: "Telefonnummer / Mobil"
        },
        placeholders: {
            gemeindeSelectDefault: "-- Bitte Gemeinde auswählen --",
            gemeindeSelectNewOption: "➕ Meine Gemeinde ist nicht gelistet (Neu anlegen)"
        }
    },

    // --- SEKTION: NEWSLETTER ---
    newsletter: {
        title: "Newsletter abonnieren",
        text: "Bleibe immer auf dem Laufenden! Trage deine E-Mail-Adresse ein, um automatische Benachrichtigungen über zukünftige Turniere zu erhalten.",
        placeholder: "Deine E-Mail-Adresse",
        submitBtnText: "Für Newsletter anmelden",
        receiverEmail: "fbgerlangen.volleyball@gmail.com", // Die Ziel-Adresse für die Anmeldung
        mailSubject: "Anmeldung zum Volleyball-Newsletter",
        mailBody: "Hallo Turnierleitung der FBG Erlangen,\n\nhiermit möchte ich mich für den Volleyball-Newsletter anmelden.\n\nBitte fügt folgende E-Mail-Adresse hinzu: [EMAIL]\n\nViele Grüße!"
    },

    // --- SEKTION: ÜBER UNS ---
    aboutUs: {
        title: "Über uns",
        text: "Text über das Organisations-Team."
    },

    // --- SEKTION: KONTAKT ---
    contact: {
        title: "Kontakt & Fragen",
        info: "Hast du Fragen zum Regelwerk, zum Ablauf oder möchtest du uns Feedback geben? Schreib uns einfach eine E-Mail – wir melden uns schnellstmöglich bei dir!",
        btnText: "Jetzt Nachricht schreiben",
        receiverEmail: "fbgerlangen.volleyball@gmail.com",
        mailSubject: "Anfrage über Webseite: Volleyball Turniere - FBG Erlangen"
    },

    // --- FOTO-GALERIE PROMPT ---
    gallery: {
        btnExternalText: "📸 Fotos ansehen",
        btnExternalComingSoon: "⏳ Galerie bald verfügbar",
        promptText: "🔒 Dieses Album ist geschützt.\nBitte gib das turnierspezifische Passwort ein:",
        errorText: "❌ Falsches Passwort. Der Zugriff auf das Photo-Album wurde verweigert."
    },

    // --- E-MAIL FORMULAR-TEMPLATE ---
    emailTemplate: {
        subject: "[ANMELDUNG] [TURNIER] - Team: [TEAM]",
        statusNewCommunity: "Neu (Muss geprüft werden)",
        statusExistingCommunity: "Bereits registriert",
        body: "Hallo Turnierleitung der FBG Erlangen,\n\nhiermit melde ich mein Team verbindlich an:\n\nTurnier: [TURNIER]\nTeamname: [TEAM]\nGemeinde: [GEMEINDE] (Status: [STATUS])\n\nAnsprechpartner: [LEITER]\nE-Mail: [EMAIL]\nTelefon: [TELEFON]\n\nViele Grüße,\n[LEITER]"
    },

    // --- SEKTION: IMPRESSUM ---
    impressum: {
        title: "Impressum",
        angaben: "Angaben gemäß § 5 DDG",
        text: "Freie Baptisten-Gemeinde Erlangen\nSchallershofer Straße 72a\n91056 Erlangen\n\n<strong>Vertreten durch:</strong>\nJamin Deschner\n\n<strong>Kontakt:</strong>\nfbgerlangen.volleyball@gmail.com \n\nStand: 2026"
    }
};