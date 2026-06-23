const TOURNAMENT_EVENTS = [
    {
        id: "vergangen-2024",
        sport: "halle",
        title: "FBG Winter-Cup 2024",
        datum: "2024-11-16T10:00:00",
        ort: "Großsporthalle Altdorf",
        coverImage: "https://images.unsplash.com/photo-1547347298-4074ad31b783?q=80&w=600",
        description: "Das war unser packendes Winterturnier aus dem vorletzten Jahr mit über 16 teilnehmenden Mannschaften.",
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "altdorf-passwort-123", // Einzigartiges Passwort für DIESES Album
        additionalContentHTML: "" 
    },
    {
        id: "heute-live-2026",
        sport: "beach",
        title: "🔥 FBG Mittsommer Beach-Live 2026",
        datum: "2026-06-23T09:00:00", // Heute
        ort: "Beach-Arena am See, Feld 1-4",
        coverImage: "https://images.unsplash.com/photo-1533856493584-0c6ca8ca9ce3?q=80&w=600",
        description: "Das Turnier findet GENAU JETZT statt! Komm vorbei zum Anfeuern oder verfolge die Infos live.",
        googleFotosUrl: "", 
        albumPassword: "beachliveheute", // Einzigartiges Passwort für DIESES Album
        /* 
           ANLEITUNG FÜR BILDER & TEXTE IM AUFKLAPP-BEREICH:
           - Du kannst ganz normales HTML nutzen.
           - Text-Absätze verpackst du in <p>...</p>
           - Überschriften verpackst du in <h4>...</h4>
           - Bilder fügst du mit <img src="DEINE_BILD_URL" style="width:100%; max-width:500px; border-radius:8px; margin-top:1rem;"> ein.
           - Mit <br> machst du einen Zeilenumbruch.
        */
        additionalContentHTML: `
            <div style="margin-top: 1rem;">
                <h4 style="color: #ffaa00; margin-bottom: 0.5rem;">📅 Aktueller Zwischenstand (Spielplan)</h4>
                <p>Die Gruppenphase ist beendet. Die KO-Spiele starten um 14:30 Uhr.</p>
                
                <h4 style="color: #ffaa00; margin-top: 1.5rem; margin-bottom: 0.5rem;">📸 Hallenplan / Lageplan</h4>
                <p>Hier seht ihr die Aufteilung der Beach-Felder und den Sanitätsbereich:</p>
                
                <!-- BEISPIEL FÜR EIN EINGEBETTETES BILD (z.B. Spielplan-Grafik oder Hallen-Foto) -->
                <img src="https://images.unsplash.com/photo-1513415277900-a62401e5084d?q=80&w=500" 
                     alt="Lageplan Turnier" 
                     style="width: 100%; max-width: 450px; border-radius: 8px; margin-top: 0.5rem; border: 1px solid rgba(255,255,255,0.2);">
            </div>
        `
    },
    {
        id: "zukunft-2026",
        sport: "halle",
        title: "Großes FBG Einladungsturnier 2026",
        datum: "2026-11-21T10:00:00", // Zukunft
        ort: "Zentralhalle Musterstadt",
        coverImage: "https://images.unsplash.com/photo-1513415277900-a62401e5084d?q=80&w=600",
        description: "Unser großes Jahresabschluss-Turnier. Anmeldungen sind ab sofort über die Startseite möglich.",
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "winterpokal2026", // Einzigartiges Passwort für DIESES Album
        additionalContentHTML: `
            <div style="margin-top: 1rem;">
                <h4 style="color: var(--sport-primary); margin-bottom: 0.5rem;">🚗 Parkplatz-Hinweis</h4>
                <p>Bitte nutzt den Großparkplatz P2 am Schulzentrum. Das Parken direkt an der Halle ist für Busse reserviert.</p>
                
                <h4 style="color: var(--sport-primary); margin-top: 1.5rem; margin-bottom: 0.5rem;">🏆 Der Wanderpokal</h4>
                <p>Das Gewinnerteam darf dieses Prachtstück mit nach Hause nehmen:</p>
                
                <!-- Zweites Beispiel für ein Bild im Aufklapp-Bereich -->
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400" 
                     alt="Wanderpokal" 
                     style="width: 100%; max-width: 300px; border-radius: 8px; margin-top: 0.5rem;">
            </div>
        `
    }
];