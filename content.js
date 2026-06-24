/* =========================================================================
   === WEBSITE INHALTE & TEXTE ===
   Hier kannst du alle Texte und Hintergründe der Website anpassen.
   ========================================================================= */

const WEBSITE_CONTENT = {
    currentActiveSport: "beach", // Standard beim Laden der Seite ("halle" oder "beach")
    headerTitle: "Volleyball Turniere - FBG Erlangen",
    emailReceiverDummy: "anmeldung@fbg-volleyball.de",

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
        title: "Turnieranmeldung",
	deadlineWeeksBefore: 2, // <--- Bestimmt die Anzahl an Wochen vor einem Turnier, bis wann die Anmeldung noch möglich ist
        auditWarningBox: "⚠️ <strong>Hinweis zur Prüfung:</strong> Da deine Gemeinde noch nicht in unserer Datenbank registriert ist, wird deine Anmeldung von der Turnierleitung manuell geprüft. Du erhältst im Anschluss eine Bestätigung.",
        leftText: "Fülle das Formular vollständig aus. Nach dem Absenden öffnet sich dein E-Mail-Programm mit einer vorgefertigten Nachricht. Schicke diese einfach ab, um dein Team anzumelden.",
        footerText: "Ihr möchtet mehrere Teams anmelden? \nSendet das Formular einfach mehrfach ab und vermerkt dies im ''Sonstiges''-Feld. Bitte beachtet, dass die Anmeldung erst mit Erhalt unserer Bestätigungsmail verbindlich ist.",
        submitBtnText: "Anmeldung via E-Mail absenden",
        labels: {
            gemeinde: "Wähle deine Gemeinde",
            newGemeinde: "Name der neuen Gemeinde",
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
        text: "Text über das Organisations-Team."
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