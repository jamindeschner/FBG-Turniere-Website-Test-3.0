/* =========================================================================
   === TURNIER TERMINE & EVENTS ===
   Hier trägst du alle Turniere ein. 
   - sport: "halle" oder "beach"
   - datum: Format "YYYY-MM-DDTHH:MM:SS" (z.B. "2026-11-21T10:00:00")
   ========================================================================= */

const TOURNAMENT_EVENTS = [
    {
        id: "zukunft-2026",
        sport: "halle",
        title: "Großes FBG Einladungsturnier 2026",
        datum: "2026-11-21T10:00:00", 
        ort: "Zentralhalle Musterstadt",
        coverImage: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600",
        description: "Unser großes Jahresabschluss-Turnier. Anmeldungen sind ab sofort über die Startseite möglich.",
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "winterpokal2026",
        detailTitle: "Details zum Hallenturnier",
        detailText: "Gespielt wird nach den offiziellen Mixed-Regeln (mind. 2 Frauen auf dem Feld).",
        additionalContentHTML: `
            <div style="margin-top: 1rem;">
                <h4 style="color: var(--sport-primary); margin-bottom: 0.5rem;">🚗 Parkplatz-Hinweis</h4>
                <p>Bitte nutzt den Großparkplatz P2 am Schulzentrum. Das Parken direkt an der Halle ist für Busse reserviert.</p>
                
                <h4 style="color: var(--sport-primary); margin-top: 1.5rem; margin-bottom: 0.5rem;">🏆 Der Wanderpokal</h4>
                <p>Das Gewinnerteam darf dieses Prachtstück mit nach Hause nehmen:</p>
                
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=400" 
                     alt="Wanderpokal" 
                     style="width: 100%; max-width: 300px; border-radius: 8px; margin-top: 0.5rem;">
            </div>
        `
    },
    {
        id: "heute-live-2026",
        sport: "beach",
        title: "🔥 FBG Mittsommer Beach-Live 2026",
        datum: "2026-06-24T09:00:00", 
        ort: "Beach-Arena am See, Feld 1-4",
        coverImage: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=600",
        description: "Das Turnier findet GENAU JETZT statt! Komm vorbei zum Anfeuern oder verfolge die Infos live.",
        googleFotosUrl: "", 
        albumPassword: "beachliveheute",
        detailTitle: "Beach-Regeln",
        detailText: "2 gegen 2, barfuß im Sand. Bei Regen wird trotzdem gespielt!",
        additionalContentHTML: `
            <div style="margin-top: 1rem;">
                <h4 style="color: #ffaa00; margin-bottom: 0.5rem;">📅 Aktueller Zwischenstand (Spielplan)</h4>
                <p>Die Gruppenphase ist beendet. Die KO-Spiele starten um 14:30 Uhr.</p>
                
                <h4 style="color: #ffaa00; margin-top: 1.5rem; margin-bottom: 0.5rem;">📸 Hallenplan / Lageplan</h4>
                <p>Hier seht ihr die Aufteilung der Beach-Felder und den Sanitätsbereich:</p>
                
                <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=500" 
                     alt="Lageplan Turnier" 
                     style="width: 100%; max-width: 450px; border-radius: 8px; margin-top: 0.5rem; border: 1px solid rgba(255,255,255,0.2);">
            </div>
        `
    },
    {
        id: "vergangen-2024",
        sport: "halle",
        title: "FBG Winter-Cup 2024",
        datum: "2024-11-16T10:00:00",
        ort: "Großsporthalle Altdorf",
        coverImage: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=600",
        description: "Das war unser packendes Winterturnier aus dem vorletzten Jahr mit über 16 teilnehmenden Mannschaften.",
        googleFotosUrl: "https://photos.google.com", 
        albumPassword: "altdorf-passwort-123",
        detailTitle: "Rückblick",
        detailText: "Ein toller Tag für alle Beteiligten.",
        additionalContentHTML: "" 
    }
];
