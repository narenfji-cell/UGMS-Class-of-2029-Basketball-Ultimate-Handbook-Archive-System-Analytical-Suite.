// GLOBAL APPLICATION CONTROLLER STATE DEPLOYMENT
let RosterDatabase = [];
let TimelineEvents = [];
let TournamentActiveInstance = null;
let SystemAdminAccessClearance = false;
let LedgerSortField = 'ppg';
let LedgerSortDirection = 'desc';

// SYSTEM INITIAL PRE-LOAD ENGINE PRE-FILLING ALL 17 CORE RECORDS
const INITIAL_HANDBOOK_PLAYERS = [
    {
        id: "p1", name: "Chris", position: "SF / PG", ovr: 95, tier: "diamond", height: "6'2\"", weight: "185 lbs", handed: "Right",
        nbaComparison: "Paul George x Jayson Tatum", keyFocus: "Clutch Rating: 95", photo: null,
        speed: 88, defense: 92, shooting: 94,
        history: ["Highest Basketball IQ", "Most Consistent Mid-Range", "All-Class First Team", "All-Defensive Team"],
        stats: { ppg: 18.4, apg: 5.2, rpg: 6.1, bpg: 1.2 }
    },
    {
        id: "p2", name: "Yaw", position: "SG / PG", ovr: 94, tier: "diamond", height: "6'0\"", weight: "175 lbs", handed: "Right",
        nbaComparison: "Anthony Edwards", keyFocus: "3PT Shooting: 95", photo: null,
        speed: 95, defense: 84, shooting: 96,
        history: ["Fastest Player", "Best Shooter", "All-Class First Team"],
        stats: { ppg: 22.1, apg: 3.4, rpg: 4.2, bpg: 0.3 }
    },
    {
        id: "p3", name: "Nana-Otu", position: "PG", ovr: 93, tier: "diamond", height: "5'10\"", weight: "165 lbs", handed: "Right",
        nbaComparison: "Tyrese Haliburton x Jrue Holiday", keyFocus: "Off-Ball Movement: 98", photo: null,
        speed: 94, defense: 93, shooting: 86,
        history: ["Highest Motor", "Hardest To Guard Off-Ball", "All-Class First Team", "All-Defensive Team"],
        stats: { ppg: 14.2, apg: 8.7, rpg: 3.8, bpg: 0.6 }
    },
    {
        id: "p4", name: "Jason Green", position: "PF / PG", ovr: 92, tier: "diamond", height: "6'1\"", weight: "190 lbs", handed: "Right",
        nbaComparison: "Aaron Gordon x Dennis Rodman", keyFocus: "Rebounding: 95", photo: null,
        speed: 89, defense: 94, shooting: 78,
        history: ["Best Athlete", "All-Class First Team", "All-Defensive Team"],
        stats: { ppg: 12.8, apg: 4.1, rpg: 9.5, bpg: 1.8 }
    },
    {
        id: "p5", name: "Big Ben", position: "C", ovr: 90, tier: "diamond", height: "6'5\"", weight: "220 lbs", handed: "Right",
        nbaComparison: "Bam Adebayo x Steven Adams", keyFocus: "Interior Defense: 96", photo: null,
        speed: 72, defense: 95, shooting: 60,
        history: ["Paint Anchor Catalyst", "All-Class First Team"],
        stats: { ppg: 10.5, apg: 2.1, rpg: 11.2, bpg: 2.5 }
    },
    {
        id: "p6", name: "Kwabena", position: "Wing", ovr: 86, tier: "amethyst", height: "6'2\"", weight: "180 lbs", handed: "Right",
        nbaComparison: "Mikal Bridges", keyFocus: "Basketball IQ: 87", photo: null,
        speed: 82, defense: 86, shooting: 84,
        history: ["All-Class Second Team"],
        stats: { ppg: 11.2, apg: 2.4, rpg: 4.5, bpg: 0.7 }
    },
    {
        id: "p7", name: "Broni", position: "C", ovr: 86, tier: "amethyst", height: "6'4\"", weight: "205 lbs", handed: "Right",
        nbaComparison: "Young Jaren Jackson Jr.", keyFocus: "Shot Blocking: 96", photo: null,
        speed: 75, defense: 89, shooting: 70,
        history: ["All-Defensive Team"],
        stats: { ppg: 8.4, apg: 1.1, rpg: 7.2, bpg: 2.3 }
    },
    {
        id: "p8", name: "Tofa", position: "SG", ovr: 85, tier: "amethyst", height: "5'11\"", weight: "170 lbs", handed: "Right",
        nbaComparison: "Malik Monk", keyFocus: "3PT Shooting: 88", photo: null,
        speed: 87, defense: 74, shooting: 86,
        history: ["All-Class Second Team"],
        stats: { ppg: 13.5, apg: 2.2, rpg: 2.8, bpg: 0.1 }
    },
    {
        id: "p9", name: "Olokwei", position: "Wing", ovr: 84, tier: "sapphire", height: "6'1\"", weight: "180 lbs", handed: "Left",
        nbaComparison: "Derrick White", keyFocus: "Passing Output: 86", photo: null,
        speed: 80, defense: 85, shooting: 81,
        history: ["All-Defensive Team"],
        stats: { ppg: 9.3, apg: 3.8, rpg: 4.1, bpg: 0.8 }
    },
    {
        id: "p10", name: "Ryan", position: "Forward", ovr: 82, tier: "sapphire", height: "6'3\"", weight: "195 lbs", handed: "Right",
        nbaComparison: "P.J. Washington", keyFocus: "Strength Capacity: 88", photo: null,
        speed: 76, defense: 81, shooting: 79,
        history: ["All-Class Second Team"],
        stats: { ppg: 10.1, apg: 1.8, rpg: 5.6, bpg: 0.9 }
    },
    {
        id: "p11", name: "Emery", position: "PF / C", ovr: 79, tier: "gold", height: "6'3\"", weight: "210 lbs", handed: "Right",
        nbaComparison: "Kenneth Faried", keyFocus: "Physical Power: 90", photo: null,
        speed: 74, defense: 78, shooting: 62,
        history: ["All-Class Second Team", "Future Potential Ranked #3"],
        stats: { ppg: 7.8, apg: 0.9, rpg: 6.8, bpg: 1.1 }
    },
    {
        id: "p12", name: "Papa Nii", position: "PG", ovr: 75, tier: "gold", height: "5'9\"", weight: "160 lbs", handed: "Right",
        nbaComparison: "T.J. McConnell", keyFocus: "Passing Metric: 82", photo: null,
        speed: 83, defense: 76, shooting: 68,
        history: ["All-Class Second Team"],
        stats: { ppg: 5.4, apg: 4.9, rpg: 2.1, bpg: 0.1 }
    },
    {
        id: "p13", name: "Jesse", position: "SG", ovr: 74, tier: "gold", height: "6'0\"", weight: "170 lbs", handed: "Right",
        nbaComparison: "Duncan Robinson", keyFocus: "Clutch Metric: 90", photo: null,
        speed: 78, defense: 64, shooting: 82,
        history: ["Future Potential Ranked #4"],
        stats: { ppg: 8.2, apg: 1.2, rpg: 1.9, bpg: 0.0 }
    },
    {
        id: "p14", name: "Dag", position: "PF", ovr: 73, tier: "gold", height: "6'2\"", weight: "190 lbs", handed: "Right",
        nbaComparison: "Dennis Rodman (Raw)", keyFocus: "Aggression Cap: 99", photo: null,
        speed: 76, defense: 79, shooting: 50,
        history: ["Future Potential Ranked #5"],
        stats: { ppg: 4.1, apg: 0.8, rpg: 6.9, bpg: 0.9 }
    },
    {
        id: "p15", name: "Saeed", position: "Wing", ovr: 73, tier: "gold", height: "6'1\"", weight: "175 lbs", handed: "Right",
        nbaComparison: "Gary Payton II", keyFocus: "Spot-Up Metric: 76", photo: null,
        speed: 82, defense: 78, shooting: 65,
        history: ["Future Potential Ranked #2"],
        stats: { ppg: 6.2, apg: 1.5, rpg: 3.2, bpg: 0.5 }
    },
    {
        id: "p16", name: "Osei-Tutu", position: "C", ovr: 70, tier: "gold", height: "6'4\"", weight: "185 lbs", handed: "Right",
        nbaComparison: "Raw Mitchell Robinson", keyFocus: "Height Impact: 98", photo: null,
        speed: 70, defense: 73, shooting: 48,
        history: ["Future Potential Ranked #1"],
        stats: { ppg: 3.8, apg: 0.4, rpg: 5.8, bpg: 1.4 }
    },
    {
        id: "p17", name: "Teju", position: "Forward", ovr: 66, tier: "bronze", height: "6'2\"", weight: "185 lbs", handed: "Right",
        nbaComparison: "Draymond Green (Unpolished)", keyFocus: "Hustle Output: 85", photo: null,
        speed: 72, defense: 70, shooting: 58,
        history: ["Future Potential Ranked #6"],
        stats: { ppg: 4.2, apg: 1.9, rpg: 4.0, bpg: 0.6 }
    }
];

const INITIAL_TIMELINE_EVENTS = [
    {
        id: "e1", title: "Moment #2: The Comeback vs Class of 2027", date: "Historical Season Frame",
        scores: "Win Dynamic Core", narrative: "One of the defining victories in class basketball history. Chris provided offensive leadership and stability; Yaw delivered a momentum-shifting three; Big Ben ignited the turnaround as comeback catalyst; Jason Green supplied the defensive spark — steals, interceptions, and transition runs that completely altered the rhythm of the game.",
        photos: []
    }
];

const STRATEGIC_COACH_MAP_DATA = [
    { label: "Tactics Array Engine", value: "Systematic spacing blueprints targeting structural paint penetration protocols." },
    { label: "Synergy Dynamic Mapping", value: "Complementary profile allocation logic combining offensive anchors with high-motor perimeter locks." },
    { label: "Roster Deployment Ratios", value: "Optimized positional tracking distributing floor management scaling tools cleanly." },
    { label: "Output Analytical Yield", value: "High conversion efficiency models leveraging baseline baseline tracking elements." }
];

// APPLICATION LIFECYCLE INITIALIZER
window.addEventListener("DOMContentLoaded", () => {
    RosterDatabase = JSON.parse(localStorage.getItem("UGMS_Roster")) || INITIAL_HANDBOOK_PLAYERS;
    TimelineEvents = JSON.parse(localStorage.getItem("UGMS_Timeline")) || INITIAL_TIMELINE_EVENTS;
    
    InitializeAppNavigation();
    RenderRosterGrid();
    ComputeAnalyticalSuite();
    SetupTeamBuilderWorkspace();
    RenderMasterLedgerTable();
    RenderTimelineFeed();
    InitializeCoachMatrixComponent();
    SetupAdminGateController();
});

// STICKY NAVIGATION ANCHOR BINDINGS
function InitializeAppNavigation() {
    const links = document.querySelectorAll(".nav-tab");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
}

// DYNAMIC FLIPPABLE ROSTER BUILDER ENGINE
function RenderRosterGrid() {
    const container = document.getElementById("roster-grid");
    container.innerHTML = "";
    
    RosterDatabase.forEach(player => {
        const wrapper = document.createElement("div");
        wrapper.className = "card-perspective-wrapper";
        wrapper.id = `wrapper-${player.id}`;
        
        let starArrayStr = "★".repeat(GetStarRank(player.ovr)) + "☆".repeat(5 - GetStarRank(player.ovr));
        
        const photoLayout = player.photo 
            ? `<img src="${player.photo}" class="card-image-render-frame" alt="${player.name}">`
            : `<div class="vector-silhouette-fallback">🏀</div>`;

        wrapper.innerHTML = `
            <div class="card-flipper-inner">
                <div class="card-front tier-${player.tier}">
                    <div class="card-visual-header">
                        ${photoLayout}
                        <div class="badge-rating-pill">${player.ovr}</div>
                    </div>
                    <div class="card-body-details">
                        <div class="player-identity-cluster">
                            <h4>${player.name}</h4>
                            <div class="stars-row">${starArrayStr}</div>
                            <span class="archetype-tag-banner">${player.position}</span>
                        </div>
                        <div class="card-action-trigger-row">
                            <button class="action-btn action-neon-cyan flip-toggle-trigger">Inspect Back Matrix</button>
                        </div>
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-stats-bars-stack">
                        ${RenderStatBarGroup("SPD", player.speed)}
                        ${RenderStatBarGroup("DEF", player.defense)}
                        ${RenderStatBarGroup("SHT", player.shooting)}
                    </div>
                    <div class="badges-showcase-row">
                        <span class="badge-chip">${player.tier.toUpperCase()}</span>
                        <span class="badge-chip">Hustle</span>
                        <span class="badge-chip">IQ</span>
                    </div>
                    <div class="nba-comparison-container">
                        <strong>NBA:</strong> ${player.nbaComparison}<br>
                        <strong>Focus:</strong> ${player.keyFocus}
                    </div>
                    <ul class="milestones-history-list">
                        ${player.history.map(h => `<li>${h}</li>`).join("")}
                    </ul>
                    <div class="ai-dev-output-pane hidden" id="ai-pane-${player.id}"></div>
                    <div class="form-actions-row">
                        <button class="action-btn action-neon-orange generate-ai-plan-btn" data-id="${player.id}">Generate AI Training Plan</button>
                        <button class="action-btn action-neon-cyan flip-toggle-trigger" style="width:40px;">↶</button>
                    </div>
                </div>
            </div>
        `;
        
        // BIND CARD TOGGLE LISTENERS
        wrapper.querySelectorAll(".flip-toggle-trigger").forEach(btn => {
            btn.addEventListener("click", () => wrapper.classList.toggle("flipped"));
        });
        
        // BIND AI CAREER DEV GENERATOR TRIGGER
        wrapper.querySelector(".generate-ai-plan-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            TriggerAICareerDevelopmentEngine(player);
        });

        container.appendChild(wrapper);
    });
}

function GetStarRank(ovr) {
    if (ovr >= 90) return 5;
    if (ovr >= 80) return 4;
    if (ovr >= 70) return 3;
    return 2;
}

function RenderStatBarGroup(label, val) {
    return `
        <div class="stat-bar-group">
            <div class="stat-label-row"><span>${label}</span><span>${val}%</span></div>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width: ${val}%;"></div></div>
        </div>
    `;
}

// AI CAREER LOGIC ENGINE SIMULATOR
function TriggerAICareerDevelopmentEngine(player) {
    const pane = document.getElementById(`ai-pane-${player.id}`);
    pane.classList.remove("hidden");
    
    let lowStats = [];
    if (player.speed < 80) lowStats.push("Acceleration Response");
    if (player.defense < 80) lowStats.push("Perimeter Containment Closeouts");
    if (player.shooting < 80) lowStats.push("Catch-and-Shoot Balance Mechanics");
    if (lowStats.length === 0) lowStats.push("High-Volume Fatigue Load Sustainability");
    
    pane.innerHTML = `
        <strong>[AI ANALYSIS TARGETED DRILLS]:</strong><br>
        • Focus Area: ${lowStats.join(", ")}.<br>
        • Practice Tip: Execute targeted high-intensity tactical physical reps replicating pace profiles found in matches. Track mechanics under active fatigue windows.
    `;
}

// COMPUTE TIER DISTRIBUTIONS FOR ANALYTICS SUITE
function ComputeAnalyticalSuite() {
    const summary = document.getElementById("analytics-summary");
    const totalCount = RosterDatabase.length;
    const meanOvr = Math.round(RosterDatabase.reduce((acc, p) => acc + p.ovr, 0) / totalCount);
    const maxOvr = Math.max(...RosterDatabase.map(p => p.ovr));
    
    summary.innerHTML = `
        <div class="metric-summary-node-box"><div class="metric-node-value">${totalCount}</div><div class="metric-node-lbl">Total Roster</div></div>
        <div class="metric-summary-node-box"><div class="metric-node-value">${meanOvr}</div><div class="metric-node-lbl">Mean Rating</div></div>
        <div class="metric-summary-node-box"><div class="metric-node-value">${maxOvr}</div><div class="metric-node-lbl">Peak Capacity</div></div>
    `;
}

// AUTOMATED TEAM BUILDER WORKSPACE CONTROLLER
function SetupTeamBuilderWorkspace() {
    const sizeSelect = document.getElementById("matchup-size-select");
    sizeSelect.addEventListener("change", RebuildWorkspaceSelectors);
    
    document.getElementById("run-simulation-btn").addEventListener("click", ExecuteProspectiveSimulation);
    document.getElementById("close-report-btn").addEventListener("click", () => {
        document.getElementById("simulation-report-modal").classList.add("hidden");
    });

    RebuildWorkspaceSelectors();
}

function RebuildWorkspaceSelectors() {
    const count = parseInt(document.getElementById("matchup-size-select").value);
    const containerA = document.getElementById("team-a-selectors");
    const containerB = document.getElementById("team-b-selectors");
    
    containerA.innerHTML = "";
    containerB.innerHTML = "";
    
    for (let i = 0; i < count; i++) {
        containerA.appendChild(CreatePlayerDropdownElement(`team-a-slot-${i}`, i));
        containerB.appendChild(CreatePlayerDropdownElement(`team-b-slot-${i}`, (i + 1) % RosterDatabase.length));
    }
    
    SynthesizeTeamMetrics();
}

function CreatePlayerDropdownElement(idStr, fallbackIdx) {
    const select = document.createElement("select");
    select.className = "neon-select";
    select.id = idStr;
    
    RosterDatabase.forEach((p, idx) => {
        const option = document.createElement("option");
        option.value = p.id;
        option.textContent = `${p.name} (OVR ${p.ovr})`;
        if (idx === fallbackIdx) option.selected = true;
        select.appendChild(option);
    });
    
    select.addEventListener("change", SynthesizeTeamMetrics);
    return select;
}

// REAL-TIME COLLAGE GENERATION AND STATS AGGREGATION
function SynthesizeTeamMetrics() {
    ["a", "b"].forEach(teamKey => {
        const count = parseInt(document.getElementById("matchup-size-select").value);
        let selectedPlayers = [];
        
        for (let i = 0; i < count; i++) {
            const id = document.getElementById(`team-${teamKey}-slot-${i}`).value;
            const match = RosterDatabase.find(p => p.id === id);
            if (match) selectedPlayers.push(match);
        }
        
        // RENDER LIVE TEAM COLLAGE DIORAMAS
        const collage = document.getElementById(`team-${teamKey}-collage`);
        collage.innerHTML = "";
        selectedPlayers.forEach(p => {
            const thumb = document.createElement("div");
            thumb.className = "collage-thumbnail-frame";
            if (p.photo) {
                thumb.innerHTML = `<img src="${p.photo}" class="collage-img-tag"><div class="ovr-sub-badge">${p.ovr}</div>`;
            } else {
                thumb.innerHTML = `🏀<div class="ovr-sub-badge">${p.ovr}</div>`;
            }
            collage.appendChild(thumb);
        });
        
        // COMPUTE AGGREGATION STRUCTURAL FORMULAS
        const teamOvr = Math.round(selectedPlayers.reduce((acc, p) => acc + p.ovr, 0) / count);
        const teamSpd = Math.round(selectedPlayers.reduce((acc, p) => acc + p.speed, 0) / count);
        const teamDef = Math.round(selectedPlayers.reduce((acc, p) => acc + p.defense, 0) / count);
        const teamSht = Math.round(selectedPlayers.reduce((acc, p) => acc + p.shooting, 0) / count);
        
        let archetypeSummary = "Balanced Tactical Composition";
        if (teamSht > 85) archetypeSummary = "Perimeter Heavy, High-Efficiency System";
        else if (teamDef > 85) archetypeSummary = "Lockdown Paint Denying Blueprint";
        else if (teamSpd > 88) archetypeSummary = "Fast-break Heavy Transition Roster";

        const outputPane = document.getElementById(`team-${teamKey}-metrics`);
        outputPane.innerHTML = `
            <p><strong>Combined Tactical Rating:</strong> ${teamOvr} OVR</p>
            <p>Speed Factor: ${teamSpd}% | Defensive Index: ${teamDef}% | Shooting Prowess: ${teamSht}%</p>
            <p style="color:var(--neon-gold); font-style:italic;">Style Map: ${archetypeSummary}</p>
        `;
    });
}

// AI MATCHUP SIMULATION RUNTIME CONSOLE
function ExecuteProspectiveSimulation() {
    const modal = document.getElementById("simulation-report-modal");
    const content = document.getElementById("simulation-report-content");
    modal.classList.remove("hidden");
    
    content.innerHTML = `
        <p><strong>Processing Algorithmic Breakdown Models...</strong></p>
        <p>Analyzing matching biometric configurations, spacing efficiency, historical milestones, and cumulative player performance data. Generating outcome vectors...</p>
    `;
    
    setTimeout(() => {
        const count = parseInt(document.getElementById("matchup-size-select").value);
        let getOvrSum = (teamKey) => {
            let sum = 0;
            for (let i = 0; i < count; i++) {
                const id = document.getElementById(`team-${teamKey}-slot-${i}`).value;
                sum += (RosterDatabase.find(p => p.id === id)?.ovr || 80);
            }
            return sum;
        };
        
        const sumA = getOvrSum("a");
        const sumB = getOvrSum("b");
        const winnerText = sumA >= sumB ? "TEAM ALPHA PROSPECTIVE VICTOR" : "TEAM OMEGA PROSPECTIVE VICTOR";
        
        content.innerHTML = `
            <p><strong>SIMULATION VECTOR COMPUTATION COMPLETION:</strong></p>
            <p>The statistical analytics engine projects <strong>${winnerText}</strong> based on the aggregated baseline metric distributions.</p>
            <p><strong>Tactical Explanation Breakdown:</strong> The leading roster configuration exhibits superior structural floor balance, allowing it to maintain optimal transition spacing. Higher average ratings in critical positional categories neutralize secondary off-ball movement protocols, stabilizing the pace of play across long possessions.</p>
        `;
    }, 1200);
}

// PUBLIC OPEN TOURNAMENT BRACKET GENERATOR ENGINE
function SetupTournamentSuiteGenerator() {
    document.getElementById("initialize-tourney-btn").addEventListener("click", () => {
        const type = document.getElementById("tourney-type").value;
        const format = document.getElementById("tourney-format").value;
        const mvpRule = document.getElementById("tourney-mvp-rule").value;
        
        TournamentActiveInstance = {
            type, format, mvpRule,
            round1: [
                { id: "m1", team1: "Alpha Elite Force", team2: "Beta Lockdown Group", score1: "", score2: "", winner: null },
                { id: "m2", team1: "Gamma Flash Unit", team2: "Delta Paint Anchors", score1: "", score2: "", winner: null }
            ],
            finals: { id: "m3", team1: "TBD Round 1 Match 1 Winner", team2: "TBD Round 1 Match 2 Winner", score1: "", score2: "", winner: null },
            champion: null
        };
        
        document.getElementById("active-tournament-workspace").classList.remove("hidden");
        RenderTournamentBracketTree();
    });
}
SetupTournamentSuiteGenerator();

function RenderTournamentBracketTree() {
    const canvas = document.getElementById("bracket-canvas");
    canvas.innerHTML = "";
    if (!TournamentActiveInstance) return;
    
    // ROUND 1 COLUMN GENERATOR
    const r1Col = document.createElement("div");
    r1Col.className = "bracket-round-column";
    r1Col.innerHTML = `<h5>Semifinal Brackets</h5>`;
    
    TournamentActiveInstance.round1.forEach((match, idx) => {
        const node = CreateMatchNodeElement(match, (s1, s2) => {
            match.score1 = s1;
            match.score2 = s2;
            if (s1 !== "" && s2 !== "") {
                match.winner = s1 > s2 ? match.team1 : match.team2;
                if (idx === 0) TournamentActiveInstance.finals.team1 = match.winner;
                if (idx === 1) TournamentActiveInstance.finals.team2 = match.winner;
                RenderTournamentBracketTree();
            }
        });
        r1Col.appendChild(node);
    });
    
    // FINALS COLUMN GENERATOR
    const finalsCol = document.createElement("div");
    finalsCol.className = "bracket-round-column";
    finalsCol.innerHTML = `<h5>Championship Final</h5>`;
    
    const finalNode = CreateMatchNodeElement(TournamentActiveInstance.finals, (s1, s2) => {
        TournamentActiveInstance.finals.score1 = s1;
        TournamentActiveInstance.finals.score2 = s2;
        if (s1 !== "" && s2 !== "") {
            TournamentActiveInstance.finals.winner = s1 > s2 ? TournamentActiveInstance.finals.team1 : TournamentActiveInstance.finals.team2;
            TournamentActiveInstance.champion = TournamentActiveInstance.finals.winner;
            ProcessTournamentAwardsShowcase();
        }
    });
    finalsCol.appendChild(finalNode);
    
    canvas.appendChild(r1Col);
    canvas.appendChild(finalsCol);
}

function CreateMatchNodeElement(match, onScoreSubmit) {
    const box = document.createElement("div");
    box.className = "match-node-box";
    
    const isLocked = match.winner !== null;
    
    box.innerHTML = `
        <div class="node-team-row">
            <span class="node-team-name">${match.team1}</span>
            <input type="number" class="tourney-score-input s1-field" value="${match.score1}" ${isLocked ? 'disabled' : ''}>
        </div>
        <div class="node-team-row">
            <span class="node-team-name">${match.team2}</span>
            <input type="number" class="tourney-score-input s2-field" value="${match.score2}" ${isLocked ? 'disabled' : ''}>
        </div>
        ${!isLocked ? `
        <div class="node-action-row">
            <button class="action-btn action-neon-purple submit-node-score-btn">Lock Scores</button>
        </div>` : ''}
    `;
    
    if (!isLocked) {
        box.querySelector(".submit-node-score-btn").addEventListener("click", () => {
            const s1 = box.querySelector(".s1-field").value;
            const s2 = box.querySelector(".s2-field").value;
            if (s1 !== "" && s2 !== "") {
                onScoreSubmit(parseInt(s1), parseInt(s2));
            }
        });
    }
    return box;
}

function ProcessTournamentAwardsShowcase() {
    const box = document.getElementById("awards-showcase-box");
    box.classList.remove("hidden");
    
    box.innerHTML = `
        <h4>🏆 TOURNAMENT AWARDS SHOWCASE POOL 🏆</h4>
        <p>Operational Champion Token: <strong>${TournamentActiveInstance.champion}</strong></p>
        <div class="awards-grid">
            <div class="award-show-card"><div class="title-lbl">Tournament MVP Selection</div><div class="winner-lbl">${RosterDatabase[0].name}</div></div>
            <div class="award-show-card"><div class="title-lbl">Scoring Champion Leader</div><div class="winner-lbl">${RosterDatabase[1].name}</div></div>
            <div class="award-show-card"><div class="title-lbl">Defensive Structural Anchor</div><div class="winner-lbl">${RosterDatabase[4].name}</div></div>
        </div>
    `;
}

// CAREER STATISTICS LEDGER TABLE CONTROLLER
function RenderMasterLedgerTable() {
    const tbody = document.getElementById("ledger-table-body");
    tbody.innerHTML = "";
    
    // SORT DATA CORES
    let sorted = [...RosterDatabase].sort((a, b) => {
        let valA = LedgerSortField === 'name' ? a.name : a.stats[LedgerSortField];
        let valB = LedgerSortField === 'name' ? b.name : b.stats[LedgerSortField];
        
        if (LedgerSortField === 'name') {
            return LedgerSortDirection === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            return LedgerSortDirection === 'asc' ? valA - valB : valB - valA;
        }
    });
    
    sorted.forEach(player => {
        const row = document.createElement("tr");
        const avatarCell = player.photo 
            ? `<img src="${player.photo}">` 
            : `🏀`;
            
        if (!SystemAdminAccessClearance) {
            row.innerHTML = `
                <td><div class="table-avatar-circle">${avatarCell}</div></td>
                <td><strong>${player.name}</strong></td>
                <td>${player.stats.ppg}</td>
                <td>${player.stats.apg}</td>
                <td>${player.stats.rpg}</td>
                <td>${player.stats.bpg}</td>
            `;
        } else {
            row.innerHTML = `
                <td><div class="table-avatar-circle">${avatarCell}</div></td>
                <td><strong>${player.name}</strong></td>
                <td><input type="number" step="0.1" class="ledger-inline-input" data-id="${player.id}" data-field="ppg" value="${player.stats.ppg}"></td>
                <td><input type="number" step="0.1" class="ledger-inline-input" data-id="${player.id}" data-field="apg" value="${player.stats.apg}"></td>
                <td><input type="number" step="0.1" class="ledger-inline-input" data-id="${player.id}" data-field="rpg" value="${player.stats.rpg}"></td>
                <td><input type="number" step="0.1" class="ledger-inline-input" data-id="${player.id}" data-field="bpg" value="${player.stats.bpg}"></td>
            `;
        }
        tbody.appendChild(row);
    });
    
    // ATTACH LIVE INLINE CHANGE LISTENERS FOR ADMIN STAT OVERWRITES
    if (SystemAdminAccessClearance) {
        tbody.querySelectorAll(".ledger-inline-input").forEach(input => {
            input.addEventListener("change", (e) => {
                const id = e.target.getAttribute("data-id");
                const field = e.target.getAttribute("data-field");
                const targetPlayer = RosterDatabase.find(p => p.id === id);
                if (targetPlayer) {
                    targetPlayer.stats[field] = parseFloat(e.target.value) || 0;
                    localStorage.setItem("UGMS_Roster", JSON.stringify(RosterDatabase));
                    ComputeAnalyticalSuite();
                }
            });
        });
    }
}

// BIND RE-SORT HEADERS TRIGGER
document.querySelectorAll(".sortable-header").forEach(header => {
    header.addEventListener("click", () => {
        const field = header.getAttribute("data-sort");
        if (LedgerSortField === field) {
            LedgerSortDirection = LedgerSortDirection === 'desc' ? 'asc' : 'desc';
        } else {
            LedgerSortField = field;
            LedgerSortDirection = 'desc';
        }
        RenderMasterLedgerTable();
    });
});

// HISTORICAL REPOSITORY CANVAS FEED RENDERING
function RenderTimelineFeed() {
    const feed = document.getElementById("timeline-feed");
    feed.innerHTML = "";
    
    TimelineEvents.forEach(evt => {
        const card = document.createElement("div");
        card.className = "timeline-event-node-card";
        
        card.innerHTML = `
            <div class="event-meta-line"><span>${evt.date}</span><span>${evt.scores}</span></div>
            <h5 class="event-node-title">${evt.title}</h5>
            <p class="event-narrative-text">${evt.narrative}</p>
            <div class="event-photo-grid-matrix">
                ${evt.photos && evt.photos.length > 0 
                    ? evt.photos.map(p => `<div class="event-photo-frame"><img src="${p}"></div>`).join("")
                    : `<div class="event-photo-frame">🏀</div>`
                }
            </div>
        `;
        feed.appendChild(card);
    });
}

// COACH SYNERGY GRAPH INTERACTIVE NODE PANEL BINDINGS
function InitializeCoachMatrixComponent() {
    const panel = document.getElementById("matrix-node-info-panel");
    document.querySelectorAll(".svg-interactive-node").forEach(node => {
        const idx = parseInt(node.getAttribute("data-node"));
        
        const updatePanelAction = () => {
            document.querySelectorAll(".svg-interactive-node").forEach(n => n.classList.remove("active-node"));
            node.classList.add("active-node");
            panel.innerHTML = `
                <strong>${STRATEGIC_COACH_MAP_DATA[idx].label}:</strong><br>
                ${STRATEGIC_COACH_MAP_DATA[idx].value}
            `;
        };
        
        node.addEventListener("mouseenter", updatePanelAction);
        node.addEventListener("click", updatePanelAction);
    });
}

// ADMINISTRATIVE PASS-GATE CONTROLLER LOGIC ENGINE
function SetupAdminGateController() {
    const overlay = document.getElementById("admin-login-overlay");
    const suite = document.getElementById("admin-unlocked-suite");
    const submitBtn = document.getElementById("admin-login-submit-btn");
    const passwordField = document.getElementById("admin-passphrase-field");
    const errorMsg = document.getElementById("login-error-output");
    
    submitBtn.addEventListener("click", () => {
        // DEFAULT operational code token: UGMS2029
        if (passwordField.value === "UGMS2029") {
            SystemAdminAccessClearance = true;
            overlay.classList.add("hidden");
            suite.classList.remove("hidden");
            document.getElementById("admin-nav-indicator").textContent = "7. Admin Unlocked 🔓";
            
            // CONVERT LEDGER TABLE TO FULL INLINE ADMIN STAT BOXES MODE
            const statusBadge = document.getElementById("ledger-mode-status");
            statusBadge.className = "status-badge admin-badge-active";
            statusBadge.textContent = "Viewing Mode: Admin Override Active";
            
            RenderMasterLedgerTable();
            PopulateAdminDropdown();
        } else {
            errorMsg.classList.remove("hidden");
        }
    });
    
    // FORM CONTROL SELECTION PIPELINE DEPLOYMENT
    const dropdown = document.getElementById("player-selection-dropdown");
    dropdown.addEventListener("change", HandleAdminSelectionChange);
    
    document.getElementById("save-player-btn").addEventListener("click", ExecuteSavePlayerPipeline);
    document.getElementById("remove-player-btn").addEventListener("click", ExecuteRemovePlayerPipeline);
    document.getElementById("save-history-btn").addEventListener("click", ExecutePublishTimelinePipeline);
    document.getElementById("save-coach-override-btn").addEventListener("click", ExecuteCoachOverridePipeline);
}

function PopulateAdminDropdown() {
    const dropdown = document.getElementById("player-selection-dropdown");
    dropdown.innerHTML = `<option value="NEW_PLAYER">-- CREATE NEW PLAYER PROFILE --</option>`;
    
    RosterDatabase.forEach(p => {
        const option = document.createElement("option");
        option.value = p.id;
        option.textContent = `Edit Profile: ${p.name}`;
        dropdown.appendChild(option);
    });
}

function HandleAdminSelectionChange() {
    const selection = document.getElementById("player-selection-dropdown").value;
    const purgeBtn = document.getElementById("remove-player-btn");
    const titleBlock = document.getElementById("form-pipeline-title");
    
    if (selection === "NEW_PLAYER") {
        purgeBtn.classList.add("hidden");
        titleBlock.textContent = "Add Player Management Pipeline Form";
        ClearFormFields();
    } else {
        purgeBtn.classList.remove("hidden");
        titleBlock.textContent = "Edit Existing Active Player Profile Target";
        const player = RosterDatabase.find(p => p.id === selection);
        if (player) PreFillFormFields(player);
    }
}

function ClearFormFields() {
    document.getElementById("field-name").value = "";
    document.getElementById("field-position").value = "";
    document.getElementById("field-ovr").value = "80";
    document.getElementById("field-height").value = "";
    document.getElementById("field-weight").value = "";
    document.getElementById("field-handed").value = "";
    document.getElementById("field-nbacomparison").value = "";
    document.getElementById("field-keyfocus").value = "";
    document.getElementById("stat-speed").value = "75";
    document.getElementById("stat-defense").value = "75";
    document.getElementById("stat-shooting").value = "75";
    document.getElementById("field-history").value = "";
    document.getElementById("player-photo-uploader").value = "";
}

function PreFillFormFields(p) {
    document.getElementById("field-name").value = p.name;
    document.getElementById("field-position").value = p.position;
    document.getElementById("field-ovr").value = p.ovr;
    document.getElementById("field-height").value = p.height;
    document.getElementById("field-weight").value = p.weight;
    document.getElementById("field-handed").value = p.handed;
    document.getElementById("field-nbacomparison").value = p.nbaComparison;
    document.getElementById("field-keyfocus").value = p.keyFocus;
    document.getElementById("stat-speed").value = p.speed;
    document.getElementById("stat-defense").value = p.defense;
    document.getElementById("stat-shooting").value = p.shooting;
    document.getElementById("field-history").value = p.history.join(", ");
}

// ADVANCED CRUD OPERATION WORKFLOWS
function ExecuteSavePlayerPipeline() {
    const dropdown = document.getElementById("player-selection-dropdown").value;
    const name = document.getElementById("field-name").value.trim();
    if (!name) return alert("Error: Profile requires validation. Full Name missing.");
    
    const position = document.getElementById("field-position").value || "General Roster Position";
    const ovr = parseInt(document.getElementById("field-ovr").value) || 80;
    const height = document.getElementById("field-height").value || "6'0\"";
    const weight = document.getElementById("field-weight").value || "180 lbs";
    const handed = document.getElementById("field-handed").value || "Right";
    const nbaComparison = document.getElementById("field-nbacomparison").value || "League Average Pro Variant";
    const keyFocus = document.getElementById("field-keyfocus").value || "Sustained Hustle Focus";
    const speed = parseInt(document.getElementById("stat-speed").value) || 75;
    const defense = parseInt(document.getElementById("stat-defense").value) || 75;
    const shooting = parseInt(document.getElementById("stat-shooting").value) || 75;
    
    const historyInput = document.getElementById("field-history").value;
    const history = historyInput ? historyInput.split(",").map(s => s.trim()) : ["Active Roster Record Member"];
    
    // ASSIGN TIER VALUE SCHEMES AUTOMATICALLY BY FORMULAS
    let tier = "gold";
    if (ovr >= 90) tier = "diamond";
    else if (ovr >= 85) tier = "amethyst";
    else if (ovr >= 80) tier = "sapphire";
    else if (ovr < 70) tier = "bronze";

    const processRecordData = (base64Photo) => {
        if (dropdown === "NEW_PLAYER") {
            const newPlayer = {
                id: "custom_" + Date.now(),
                name, position, ovr, tier, height, weight, handed, nbaComparison, keyFocus,
                speed, defense, shooting, history, photo: base64Photo,
                stats: { ppg: 5.0, apg: 1.5, rpg: 2.0, bpg: 0.2 } // Standard Base Averages Initialized
            };
            RosterDatabase.push(newPlayer);
        } else {
            const target = RosterDatabase.find(p => p.id === dropdown);
            if (target) {
                target.name = name; target.position = position; target.ovr = ovr; target.tier = tier;
                target.height = height; target.weight = weight; target.handed = handed;
                target.nbaComparison = nbaComparison; target.keyFocus = keyFocus;
                target.speed = speed; target.defense = defense; target.shooting = shooting;
                target.history = history;
                if (base64Photo) target.photo = base64Photo;
            }
        }
        
        CommitDatabaseState();
        ClearFormFields();
        document.getElementById("player-selection-dropdown").value = "NEW_PLAYER";
        HandleAdminSelectionChange();
    };

    const fileInput = document.getElementById("player-photo-uploader");
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) { processRecordData(e.target.result); };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        const targetExist = RosterDatabase.find(p => p.id === dropdown);
        processRecordData(targetExist ? targetExist.photo : null);
    }
}

function ExecuteRemovePlayerPipeline() {
    const dropdown = document.getElementById("player-selection-dropdown").value;
    if (dropdown === "NEW_PLAYER") return;
    
    if (confirm("Verify systemic clear operation: Completely purge this profile?")) {
        RosterDatabase = RosterDatabase.filter(p => p.id !== dropdown);
        CommitDatabaseState();
        document.getElementById("player-selection-dropdown").value = "NEW_PLAYER";
        HandleAdminSelectionChange();
    }
}

function ExecutePublishTimelinePipeline() {
    const title = document.getElementById("hist-title").value.trim();
    const date = document.getElementById("hist-date").value || "Dynamic Event Window";
    const scores = document.getElementById("hist-scores").value || "Recorded Completion Node";
    const narrative = document.getElementById("hist-desc").value || "Strategic timeline baseline entry log description.";
    
    if (!title) return alert("Timeline operational configuration error: Event Title missing.");

    const fileInput = document.getElementById("hist-photos-uploader");
    let loadedPhotos = [];

    const appendTimelineObject = () => {
        const newEvent = { id: "evt_" + Date.now(), title, date, scores, narrative, photos: loadedPhotos };
        TimelineEvents.unshift(newEvent);
        localStorage.setItem("UGMS_Timeline", JSON.stringify(TimelineEvents));
        RenderTimelineFeed();
        
        document.getElementById("hist-title").value = "";
        document.getElementById("hist-date").value = "";
        document.getElementById("hist-scores").value = "";
        document.getElementById("hist-desc").value = "";
        fileInput.value = "";
    };

    if (fileInput.files && fileInput.files.length > 0) {
        let filesProcessed = 0;
        for (let i = 0; i < fileInput.files.length; i++) {
            const reader = new FileReader();
            reader.onload = function(e) {
                loadedPhotos.push(e.target.result);
                filesProcessed++;
                if (filesProcessed === fileInput.files.length) appendTimelineObject();
            };
            reader.readAsDataURL(fileInput.files[i]);
        }
    } else {
        appendTimelineObject();
    }
}

function ExecuteCoachOverridePipeline() {
    const name = document.getElementById("coach-edit-name").value;
    const role = document.getElementById("coach-edit-role").value;
    
    document.getElementById("coach-display-name").textContent = name;
    document.getElementById("coach-display-role").textContent = role;
    alert("Strategic Override Action Successfully Executed.");
}

function CommitDatabaseState() {
    localStorage.setItem("UGMS_Roster", JSON.stringify(RosterDatabase));
    RenderRosterGrid();
    ComputeAnalyticalSuite();
    SetupTeamBuilderWorkspace();
    RenderMasterLedgerTable();
    PopulateAdminDropdown();
}

