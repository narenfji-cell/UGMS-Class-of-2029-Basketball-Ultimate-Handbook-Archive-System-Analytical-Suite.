/**
 * UNIVERSAL OF GHANA MEDICAL SCHOOL (UGMS) CLASS OF 2029
 * CORE ARCHITECTURAL DATA ENGINE & ANALYTICAL WORKBENCH
 */

// GLOBAL DATA DISPATCH LAYER - COMPREHENSIVE 17 PLAYERS
let playersDataset = [
    {
        id: "p1",
        name: "Chris",
        tier: "Diamond",
        ovr: 94,
        role: "SF",
        style: "Two-Way Point Forward",
        comp: "LeBron James × Kawhi Leonard",
        height: "6'2\"",
        weight: "190 lbs",
        handed: "Right",
        stamina: 93, bIQ: 98, speed: 89, defense: 94, clutch: 96, midRange: 95, layups: 92, passing: 94, ballHandling: 91,
        badges: ["HOF Floor General", "HOF Middy Magician", "Gold Clamps", "Gold Unpluckable"],
        awards: ["All-Class First Team", "Highest Basketball IQ Superlative", "Most Consistent Mid-Range Superlative"],
        nickname: "The Architect",
        strengths: "Elite basketball mind, lights-out intermediate execution, schematic defensive locking.",
        weaknesses: "Can occasionally overthink highly simple offensive sets.",
        photo: ""
    },
    {
        id: "p2",
        name: "Yaw",
        tier: "Diamond",
        ovr: 94,
        role: "SG",
        style: "Three-Level Scoring Engine",
        comp: "Kyrie Irving × Devin Booker",
        height: "5'11\"",
        weight: "170 lbs",
        handed: "Right",
        stamina: 90, bIQ: 91, speed: 95, defense: 82, clutch: 98, midRange: 92, layups: 95, passing: 88, ballHandling: 96,
        badges: ["HOF Limitless Range", "HOF Agent 3", "HOF Fast Feet", "Gold Amped"],
        awards: ["All-Class First Team", "Fastest Player Superlative", "Best Shooter Superlative"],
        nickname: "The Microwave",
        strengths: "Unparalleled space creation, explosive perimeter launch tracking, clutch gene conversion.",
        weaknesses: "Prone to high-volume tracking gambles over strict defensive alignment.",
        photo: ""
    },
    {
        id: "p3",
        name: "Nana-Otu",
        tier: "Diamond",
        ovr: 93,
        role: "PG",
        style: "High-Motor Pace Controller",
        comp: "De'Aaron Fox × Russell Westbrook",
        height: "5'10\"",
        weight: "165 lbs",
        handed: "Right",
        stamina: 99, bIQ: 92, speed: 98, defense: 90, clutch: 91, midRange: 84, layups: 93, passing: 95, ballHandling: 93,
        badges: ["HOF Speed Demon", "HOF Quick First Step", "Gold Ankle Breaker", "Gold Glove"],
        awards: ["All-Class First Team", "All-Defensive Team", "Highest Motor Superlative", "Hardest To Guard Off-Ball"],
        nickname: "The Turbine",
        strengths: "Infinite full-court stamina engine, defensive secondary transition traps, high velocity drive maps.",
        weaknesses: "Perimeter visual tracking can occasionally drift into high-speed turnovers.",
        photo: ""
    },
    {
        id: "p4",
        name: "Jason Green",
        tier: "Diamond",
        ovr: 92,
        role: "PF",
        style: "Athletic Defensive Anchor",
        comp: "Giannis Antetokounmpo × Aaron Gordon",
        height: "6'3\"",
        weight: "195 lbs",
        handed: "Right",
        stamina: 94, bIQ: 88, speed: 91, defense: 96, clutch: 89, midRange: 75, layups: 94, passing: 82, ballHandling: 84,
        badges: ["HOF Anchor", "HOF Pogo Stick", "Gold Interceptor", "Gold Posterizer"],
        awards: ["All-Class First Team", "All-Defensive Team", "Best Athlete Superlative"],
        nickname: "The Matrix",
        strengths: "Extreme vertical recovery vectors, transition intercept lines, point-blank paint demolition.",
        weaknesses: "Free throw and deep exterior conversion rates require deep structural overhaul.",
        photo: ""
    },
    {
        id: "p5",
        name: "Big Ben",
        tier: "Diamond",
        ovr: 91,
        role: "C",
        style: "Interior Paint Overlord",
        comp: "Shaquille O'Neal × Joel Embiid",
        height: "6'5\"",
        weight: "230 lbs",
        handed: "Right",
        stamina: 88, bIQ: 89, speed: 78, defense: 93, clutch: 92, midRange: 78, layups: 95, passing: 80, ballHandling: 76,
        badges: ["HOF Brick Wall", "HOF Dropstepper", "Gold Rebound Chaser", "Gold Post Lock"],
        awards: ["All-Class First Team", "Comeback Catalyst Designation"],
        nickname: "The Iron Wall",
        strengths: "Unmatched physical screen implementation, glass cleanup leverage, ultimate paint protection.",
        weaknesses: "Lateral foot tracking against small-ball point configurations.",
        photo: ""
    },
    {
        id: "p6",
        name: "Olokwei",
        tier: "Excellent",
        ovr: 86,
        role: "SG",
        style: "Lockdown Perimeter Specialist",
        comp: "Jrue Holiday × Marcus Smart",
        height: "6'0\"",
        weight: "180 lbs",
        handed: "Right",
        stamina: 91, bIQ: 90, speed: 88, defense: 95, clutch: 86, midRange: 80, layups: 82, passing: 84, ballHandling: 83,
        badges: ["HOF Challenger", "Gold 94 Feet", "Gold Work Horse"],
        awards: ["All-Defensive Team"],
        nickname: "The Clamp",
        strengths: "Absolute point-of-attack screen navigation, perimeter communication dominance.",
        weaknesses: "Offensive production maps can fluctuate across highly complex structures.",
        photo: ""
    },
    {
        id: "p7",
        name: "Broni",
        tier: "Excellent",
        ovr: 85,
        role: "C",
        style: "Rim Protector & Enforcer",
        comp: "Rudy Gobert",
        height: "6'4\"",
        weight: "210 lbs",
        handed: "Right",
        stamina: 86, bIQ: 87, speed: 75, defense: 92, clutch: 83, midRange: 68, layups: 86, passing: 74, ballHandling: 68,
        badges: ["Gold Anchor", "Gold Boxout Beast", "Silver Chase Down Artist"],
        awards: ["All-Defensive Team"],
        nickname: "The Shield",
        strengths: "Vertical spacing control, exceptional second-chance conversion denials.",
        weaknesses: "Off-the-dribble package is currently highly structurally constrained.",
        photo: ""
    },
    {
        id: "p8",
        name: "Papa Nii",
        tier: "Excellent",
        ovr: 84,
        role: "PG",
        style: "Traditional Floor General",
        comp: "Chris Paul",
        height: "5'9\"",
        weight: "160 lbs",
        handed: "Right",
        stamina: 88, bIQ: 94, speed: 86, defense: 84, clutch: 88, midRange: 85, layups: 80, passing: 92, ballHandling: 89,
        badges: ["Gold Special Delivery", "Gold Needle Threader", "Silver Dimer"],
        awards: ["All-Class Second Team"],
        nickname: "The Maestro",
        strengths: "High-level visual passing lanes, low error rate execution matrices.",
        weaknesses: "Vertical constraints prevent interior contested rim launches.",
        photo: ""
    },
    {
        id: "p9",
        name: "Tofa",
        tier: "Excellent",
        ovr: 84,
        role: "SG",
        style: "Dynamic Perimeter Slasher",
        comp: "Zach LaVine",
        height: "6'0\"",
        weight: "175 lbs",
        handed: "Right",
        stamina: 87, bIQ: 83, speed: 92, defense: 78, clutch: 85, midRange: 82, layups: 89, passing: 81, ballHandling: 86,
        badges: ["Gold Slithery", "Gold Bunny", "Silver Catch & Shoot"],
        awards: ["All-Class Second Team"],
        nickname: "The Rocket",
        strengths: "First-step burst acceleration, smooth rim transition adjustment tracking.",
        weaknesses: "Perimeter off-ball screen tracking requires deeper discipline tracking.",
        photo: ""
    },
    {
        id: "p10",
        name: "Kwabena",
        tier: "Good",
        ovr: 79,
        role: "SF",
        style: "Balanced Hybrid Option",
        comp: "Harrison Barnes",
        height: "6'1\"",
        weight: "185 lbs",
        handed: "Right",
        stamina: 84, bIQ: 85, speed: 82, defense: 81, clutch: 82, midRange: 81, layups: 83, passing: 80, ballHandling: 79,
        badges: ["Silver Claymore", "Silver Corner Specialist"],
        awards: ["All-Class Second Team"],
        nickname: "The Stabilizer",
        strengths: "Positional versatility, elite spacing logic coordination.",
        weaknesses: "Lacks a singular hyper-dominant isolation signature element.",
        photo: ""
    },
    {
        id: "p11",
        name: "Ryan",
        tier: "Good",
        ovr: 78,
        role: "PF",
        style: "Stretch Multi-Tool asset",
        comp: "PJ Tucker",
        height: "6'1\"",
        weight: "190 lbs",
        handed: "Right",
        stamina: 85, bIQ: 84, speed: 79, defense: 84, clutch: 81, midRange: 78, layups: 79, passing: 78, ballHandling: 75,
        badges: ["Silver Immovable Enforcer", "Silver Open Looks"],
        awards: ["All-Class Second Team"],
        nickname: "The Anchor",
        strengths: "Physical baseline holding patterns, high efficiency perimeter screen setting.",
        weaknesses: "Slower transition speed metrics against open fast breaks.",
        photo: ""
    },
    {
        id: "p12",
        name: "Emery",
        tier: "Good",
        ovr: 78,
        role: "C",
        style: "Mobile Glass Dynamic",
        comp: "Clint Capela",
        height: "6'3\"",
        weight: "200 lbs",
        handed: "Right",
        stamina: 83, bIQ: 81, speed: 80, defense: 83, clutch: 79, midRange: 65, layups: 84, passing: 72, ballHandling: 70,
        badges: ["Silver Post Maker", "Silver Rise Up"],
        awards: ["All-Class Second Team", "Future Potential Rankings #3"],
        nickname: "The Piston",
        strengths: "Lob conversion paths, physical interior vertical wall setups.",
        weaknesses: "Exterior perimeter ball manipulation is highly constrained.",
        photo: ""
    },
    {
        id: "p13",
        name: "Osei-Tutu",
        tier: "Supporting",
        ovr: 76,
        role: "G",
        style: "High-Upside Combo Threat",
        comp: "Anfernee Simons",
        height: "5'10\"",
        weight: "165 lbs",
        handed: "Right",
        stamina: 82, bIQ: 80, speed: 89, defense: 74, clutch: 84, midRange: 79, layups: 81, passing: 82, ballHandling: 83,
        badges: ["Silver Whistle", "Bronze Green Machine"],
        awards: ["Future Potential Rankings #1"],
        nickname: "The Spark",
        strengths: "Rapid acceleration tracks, highly instinctual mid-range visual sequencing.",
        weaknesses: "Requires deeper structural focus within low-post drop sets.",
        photo: ""
    },
    {
        id: "p14",
        name: "Saeed",
        tier: "Supporting",
        ovr: 75,
        role: "F",
        style: "Energetic Rotation Piece",
        comp: "Jarred Vanderbilt",
        height: "6'1\"",
        weight: "180 lbs",
        handed: "Right",
        stamina: 86, bIQ: 79, speed: 84, defense: 82, clutch: 76, midRange: 70, layups: 80, passing: 75, ballHandling: 74,
        badges: ["Silver Off-Ball Pest"],
        awards: ["Future Potential Rankings #2"],
        nickname: "The Kinetic",
        strengths: "High volume offensive tracking, supreme baseline recovery focus.",
        weaknesses: "Perimeter visual distribution handles remain in active development.",
        photo: ""
    },
    {
        id: "p15",
        name: "Jesse",
        tier: "Supporting",
        ovr: 73,
        role: "G",
        style: "Perimeter Catalyst",
        comp: "Immanuel Quickley",
        height: "5'11\"",
        weight: "165 lbs",
        handed: "Right",
        stamina: 80, bIQ: 82, speed: 86, defense: 75, clutch: 80, midRange: 77, layups: 76, passing: 78, ballHandling: 79,
        badges: ["Bronze Space Creator"],
        awards: ["Future Potential Rankings #4"],
        nickname: "The Engine",
        strengths: "Fluid motion set operations, high baseline situational tracking.",
        weaknesses: "Physical strength indexes require significant physical development block.",
        photo: ""
    },
    {
        id: "p16",
        name: "Dag",
        tier: "Supporting",
        ovr: 71,
        role: "F",
        style: "Fundamental Wing Operator",
        comp: "Georges Niang",
        height: "6'1\"",
        weight: "185 lbs",
        handed: "Right",
        stamina: 79, bIQ: 83, speed: 76, defense: 76, clutch: 78, midRange: 79, layups: 74, passing: 76, ballHandling: 72,
        badges: ["Bronze Catch & Shoot"],
        awards: ["Future Potential Rankings #5"],
        nickname: "The Anchor",
        strengths: "Strict operational floor mechanics, elite positioning consistency.",
        weaknesses: "Lacks lateral recovery tracking against dynamic point drivers.",
        photo: ""
    },
    {
        id: "p17",
        name: "Teju",
        tier: "Supporting",
        ovr: 70,
        role: "G",
        style: "Developing Backcourt Asset",
        comp: "Miles McBride",
        height: "5'10\"",
        weight: "160 lbs",
        handed: "Left",
        stamina: 81, bIQ: 80, speed: 85, defense: 78, clutch: 75, midRange: 74, layups: 75, passing: 75, ballHandling: 76,
        badges: ["Bronze Menace"],
        awards: ["Future Potential Rankings #6"],
        nickname: "The Phantom",
        strengths: "Left-handed trajectory variance, unexpected drive tracking elements.",
        weaknesses: "Over-indexed toward dominant side processing lanes.",
        photo: ""
    }
];

// CAREER STATISTICAL LEDGER DATA MATRIX
let statisticsLedger = {
    Official: [
        { name: "Chris", ppg: 16.5, apg: 6.2, rpg: 7.8, bpg: 1.2 },
        { name: "Yaw", ppg: 22.4, apg: 4.1, rpg: 3.5, bpg: 0.3 },
        { name: "Nana-Otu", ppg: 14.2, apg: 8.5, rpg: 4.1, bpg: 0.1 },
        { name: "Jason Green", ppg: 12.8, apg: 2.4, rpg: 10.5, bpg: 2.4 },
        { name: "Big Ben", ppg: 15.1, apg: 1.8, rpg: 12.2, bpg: 2.1 },
        { name: "Olokwei", ppg: 8.2, apg: 3.5, rpg: 4.2, bpg: 0.4 },
        { name: "Broni", ppg: 6.4, apg: 1.1, rpg: 8.9, bpg: 1.9 },
        { name: "Papa Nii", ppg: 7.8, apg: 5.9, rpg: 2.8, bpg: 0.1 },
        { name: "Tofa", ppg: 11.2, apg: 2.1, rpg: 3.1, bpg: 0.2 },
        { name: "Kwabena", ppg: 7.5, apg: 2.2, rpg: 4.5, bpg: 0.4 },
        { name: "Ryan", ppg: 6.1, apg: 1.5, rpg: 5.2, bpg: 0.6 },
        { name: "Emery", ppg: 5.9, apg: 0.8, rpg: 6.4, bpg: 0.9 },
        { name: "Osei-Tutu", ppg: 6.8, apg: 2.0, rpg: 2.1, bpg: 0.1 },
        { name: "Saeed", ppg: 4.5, apg: 1.2, rpg: 4.8, bpg: 0.5 },
        { name: "Jesse", ppg: 5.2, apg: 2.5, rpg: 1.9, bpg: 0.0 },
        { name: "Dag", ppg: 4.1, apg: 1.1, rpg: 3.2, bpg: 0.2 },
        { name: "Teju", ppg: 3.8, apg: 1.4, rpg: 1.8, bpg: 0.1 }
    ],
    Unity: [
        { name: "Chris", ppg: 18.2, apg: 7.0, rpg: 8.2, bpg: 1.5 },
        { name: "Yaw", ppg: 25.1, apg: 3.9, rpg: 4.0, bpg: 0.2 },
        { name: "Nana-Otu", ppg: 15.0, apg: 9.2, rpg: 3.9, bpg: 0.2 },
        { name: "Jason Green", ppg: 14.1, apg: 3.0, rpg: 11.2, bpg: 2.8 },
        { name: "Big Ben", ppg: 16.5, apg: 2.0, rpg: 13.0, bpg: 1.8 },
        { name: "Olokwei", ppg: 9.0, apg: 4.0, rpg: 3.8, bpg: 0.5 },
        { name: "Broni", ppg: 5.5, apg: 1.0, rpg: 9.5, bpg: 2.2 },
        { name: "Papa Nii", ppg: 8.5, apg: 6.5, rpg: 2.5, bpg: 0.0 },
        { name: "Tofa", ppg: 12.0, apg: 2.5, rpg: 3.5, bpg: 0.3 },
        { name: "Kwabena", ppg: 8.0, apg: 2.5, rpg: 5.0, bpg: 0.5 },
        { name: "Ryan", ppg: 7.0, apg: 2.0, rpg: 5.5, bpg: 0.7 },
        { name: "Emery", ppg: 6.5, apg: 1.0, rpg: 7.0, bpg: 1.1 },
        { name: "Osei-Tutu", ppg: 8.2, apg: 2.6, rpg: 2.5, bpg: 0.2 },
        { name: "Saeed", ppg: 5.0, apg: 1.5, rpg: 5.2, bpg: 0.7 },
        { name: "Jesse", ppg: 6.0, apg: 3.0, rpg: 2.1, bpg: 0.1 },
        { name: "Dag", ppg: 5.0, apg: 1.5, rpg: 3.5, bpg: 0.3 },
        { name: "Teju", ppg: 4.5, apg: 2.0, rpg: 2.0, bpg: 0.2 }
    ],
    UGMSA: [
        { name: "Chris", ppg: 15.0, apg: 5.8, rpg: 7.1, bpg: 1.0 },
        { name: "Yaw", ppg: 20.2, apg: 4.5, rpg: 3.0, bpg: 0.4 },
        { name: "Nana-Otu", ppg: 13.5, apg: 7.8, rpg: 4.5, bpg: 0.0 },
        { name: "Jason Green", ppg: 11.5, apg: 2.0, rpg: 9.8, bpg: 2.0 },
        { name: "Big Ben", ppg: 14.0, apg: 1.5, rpg: 11.0, bpg: 2.5 },
        { name: "Olokwei", ppg: 7.5, apg: 3.0, rpg: 4.5, bpg: 0.3 },
        { name: "Broni", ppg: 7.0, apg: 1.2, rpg: 8.5, bpg: 1.7 },
        { name: "Papa Nii", ppg: 7.0, apg: 5.0, rpg: 3.0, bpg: 0.2 },
        { name: "Tofa", ppg: 10.5, apg: 1.8, rpg: 2.8, bpg: 0.1 },
        { name: "Kwabena", ppg: 7.0, apg: 2.0, rpg: 4.0, bpg: 0.3 },
        { name: "Ryan", ppg: 5.5, apg: 1.2, rpg: 5.0, bpg: 0.5 },
        { name: "Emery", ppg: 5.0, apg: 0.6, rpg: 6.0, bpg: 0.8 },
        { name: "Osei-Tutu", ppg: 6.0, apg: 1.8, rpg: 1.8, bpg: 0.0 },
        { name: "Saeed", ppg: 4.0, apg: 1.0, rpg: 4.5, bpg: 0.4 },
        { name: "Jesse", ppg: 4.8, apg: 2.1, rpg: 1.6, bpg: 0.0 },
        { name: "Dag", ppg: 3.8, apg: 1.0, rpg: 3.0, bpg: 0.1 },
        { name: "Teju", ppg: 3.2, apg: 1.1, rpg: 1.5, bpg: 0.1 }
    ]
};

// HISTORICAL TIMELINE FEED INITIALIZATION MATRIX
let timelineMilestones = [
    {
        id: "tl1",
        title: "The Comeback vs Class of 2027",
        date: "March 14, 2026",
        score: "48 - 45 (W)",
        narrative: "One of the defining victories in class basketball history. Chris provided offensive leadership and stability; Yaw delivered a momentum-shifting three; Big Ben ignited the turnaround as comeback catalyst; Jason Green supplied the defensive spark — steals, interceptions and transition that changed the rhythm of the game.",
        photos: []
    },
    {
        id: "tl2",
        title: "The Inaugural Fire vs Ice Class Derby",
        date: "May 02, 2026",
        score: "Team Yaw 62 - Team Chris 59",
        narrative: "A legendary intramural exhibition splitting the franchise icons. Team Yaw controlled the absolute perimeter velocity arc, while Team Chris completely systemized low-post paint generation. Settled down the stretch by an explosive off-the-dribble stepback launch by Yaw.",
        photos: []
    }
];

// SYSTEM STATE PARAMETERS
let currentFilter = "all";
let currentTierLedger = "Official";
let ledgerAdminMode = false;
let ledgerSortKey = "ppg";
let ledgerSortAsc = false;
let activeAdminOp = "add"; // 'add' or 'edit'

// SVG NODES DATA DICTIONARY
const synergyNodesData = [
    { title: "Node 0: Spread Pick & Roll Index", desc: "Measures screen engagement velocity between Big Ben and active ball handlers. Current integration coefficient: 94.2% operational execution." },
    { title: "Node 1: Motion Pace Priming Array", desc: "Tracks Nana-Otu's off-ball deceleration and transition spacing parameters. Current efficiency index: 88.7% pacing accuracy." },
    { title: "Node 2: Perimeter Isolation Synergy", desc: "Calculates drive-and-kick lane generation when Yaw commands double-team clusters. Exterior open-look capture probability: +34% variance." },
    { title: "Node 3: Defensive Recovery Convergence", desc: "Monitors Jason Green's primary intercept arcs when switching helper positions. Paint contest prevention efficiency: Tier 1 Elite Status." }
];

// APPLICATION STARTUP DISPATCH
document.addEventListener("DOMContentLoaded", () => {
    initializeRosterGrid();
    initializeAnalyticsNodes();
    initializeSandboxSelectors();
    initializeTournamentHub();
    initializeLedgerTable();
    initializeTimelineFeed();
    initializeAdminPanel();
    setupGlobalNavigationTracks();
});

// STICKY NAVIGATION ANCHOR LOGIC
function setupGlobalNavigationTracks() {
    const tabs = document.querySelectorAll(".nav-tab");
    window.addEventListener("scroll", () => {
        let currentSec = "";
        const sections = document.querySelectorAll(".dashboard-section");
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) {
                currentSec = sec.getAttribute("id");
            }
        });
        tabs.forEach(tab => {
            tab.classList.remove("active");
            if (tab.getAttribute("href") === `#${currentSec}`) {
                tab.classList.add("active");
            }
        });
    });

    // Roster filter button tracking
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = e.target.getAttribute("data-filter");
            initializeRosterGrid();
        });
    });
}

// 2. DYNAMIC FLIPPABLE TRADING CARD ROSTER GRID ENGINE
function initializeRosterGrid() {
    const grid = document.getElementById("roster-grid");
    grid.innerHTML = "";

    const filtered = playersDataset.filter(p => {
        if (currentFilter === "all") return true;
        if (currentFilter === "Supporting") return p.tier === "Supporting";
        return p.tier === currentFilter;
    });

    filtered.forEach(player => {
        const container = document.createElement("div");
        container.className = `card-container tier-${player.tier}`;
        container.id = `card-frame-${player.id}`;

        // Build Stars Matrix Array
        let starRating = 5;
        if (player.ovr < 90) starRating = 4;
        if (player.ovr < 80) starRating = 3;
        const starsHTML = "★".repeat(starRating) + "☆".repeat(5 - starRating);

        // Core Image Evaluation
        const imgContent = player.photo 
            ? `<img src="${player.photo}" class="player-image-render" alt="${player.name}">`
            : `<div class="silhouette-fallback"><svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></div>`;

        // Badges Generation Code Split
        let badgesHTML = "";
        player.badges.forEach(b => {
            let bClass = "badge-silver";
            if (b.toLowerCase().includes("hof")) bClass = "badge-hof";
            else if (b.toLowerCase().includes("gold")) bClass = "badge-gold";
            badgesHTML += `<span class="badge-pill ${bClass}">${b}</span>`;
        });

        // Accolades List Block
        let accoladesHTML = "";
        player.awards.forEach(a => { accoladesHTML += `<li>${a}</li>`; });

        container.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-front-header">
                        <span class="card-pos-badge">${player.role}</span>
                        <div style="text-align: right;">
                            <div class="card-ovr-badge">${player.ovr} <span style="font-size:0.7rem; color:var(--text-muted)">UVR</span></div>
                            <div class="card-tier-tag">${player.tier}</div>
                        </div>
                    </div>
                    <div class="card-media-frame">
                        ${imgContent}
                    </div>
                    <div class="card-identity-block">
                        <div class="stars-row">${starsHTML}</div>
                        <h3 class="player-full-name">${player.name}</h3>
                        <div class="player-nickname">"${player.nickname || 'Prospect'}"</div>
                        <div class="player-archetype">${player.style}</div>
                    </div>
                    <div class="card-action-footer">
                        <button class="flip-trigger-btn" onclick="toggleCardFlip('${player.id}')">View Player Intelligence File</button>
                    </div>
                </div>
                
                <div class="card-back">
                    <h3 class="card-back-title">${player.name} Intel Profile</h3>
                    <div class="card-back-meta">HT: ${player.height} | WT: ${player.weight} | Handed: ${player.handed}</div>
                    
                    <div class="stats-progress-container">
                        ${renderStatBar("Stamina / Motor", player.stamina)}
                        ${renderStatBar("Basketball IQ", player.bIQ)}
                        ${renderStatBar("Speed & Acceleration", player.speed)}
                        ${renderStatBar("Defensive Blueprint", player.defense)}
                        ${renderStatBar("Clutch Matrix Index", player.clutch)}
                    </div>

                    <div class="badges-showcase-row">
                        <div class="badges-title">Primary Signature Badges</div>
                        <div class="badges-flex">${badgesHTML}</div>
                    </div>

                    <div class="comp-box">
                        <strong>NBA Pro Comp:</strong> ${player.comp}
                    </div>

                    <div class="awards-history-box">
                        <strong>Legacy Track & Accolades:</strong>
                        <ul>${accoladesHTML}</ul>
                    </div>

                    <button class="submit-score-btn" style="background:var(--purple); margin-top:5px;" onclick="generateAICareerPlan('${player.id}')">Generate AI Training Plan</button>
                    <div id="ai-plan-${player.id}" class="ai-dev-output-box hidden"></div>

                    <button class="flip-trigger-btn" style="margin-top:15px; border-color:var(--orange); color:var(--orange);" onclick="toggleCardFlip('${player.id}')">Return to Card Asset</button>
                </div>
            </div>
        `;
        grid.appendChild(container);
    });
}

function renderStatBar(label, value) {
    return `
        <div class="stat-bar-row">
            <div class="stat-bar-labels"><span>${label}</span><span>${value}</span></div>
            <div class="stat-bar-track"><div class="stat-bar-fill" style="width: ${value}%"></div></div>
        </div>
    `;
}

function toggleCardFlip(id) {
    const card = document.getElementById(`card-frame-${id}`);
    if (card) card.classList.toggle("flipped");
}

// AI CAREER DEVELOPMENT STRUCTURAL LOGIC COMPONENT
function generateAICareerPlan(id) {
    const targetBox = document.getElementById(`ai-plan-${id}`);
    if (!targetBox) return;

    if (!targetBox.classList.contains("hidden")) {
        targetBox.classList.add("hidden");
        return;
    }

    const player = playersDataset.find(p => p.id === id);
    if (!player) return;

    // Computational assessment of developmental low points
    let performanceMetrics = [
        { key: "Stamina/Motor", val: player.stamina },
        { key: "Tactical IQ", val: player.bIQ },
        { key: "Velocity Tracking", val: player.speed },
        { key: "Perimeter Clamping", val: player.defense },
        { key: "Clutch Index", val: player.clutch },
        { key: "Mid-Range Execution", val: player.midRange },
        { key: "Contested Layups", val: player.layups },
        { key: "Distribution Vision", val: player.passing },
        { key: "Ball Security", val: player.ballHandling }
    ];
    performanceMetrics.sort((a, b) => a.val - b.val);
    const lowPriority1 = performanceMetrics[0].key;
    const lowPriority2 = performanceMetrics[1].key;

    targetBox.innerHTML = `
        <h5>🤖 Core Developmental Protocol</h5>
        <p><strong>Primary Focus Vectors:</strong> Deep optimization required within <u>${lowPriority1}</u> and <u>${lowPriority2}</u> metrics.</p>
        <p><strong>Targeted Practice Tips:</strong> Run 40-minute simulated variance loops to structural exhaustion. Double isolation rep sets against standard defensive double-teams to solidify baseline recovery alignment.</p>
    `;
    targetBox.classList.remove("hidden");
}

// SECTION 2: INTEGRATED COACH MATRIX TELEMETRY (SVG NODES)
function initializeAnalyticsNodes() {
    const nodes = document.querySelectorAll(".svg-node");
    const title = document.getElementById("node-title");
    const desc = document.getElementById("node-desc");

    nodes.forEach(node => {
        const triggerUpdate = () => {
            const idx = parseInt(node.getAttribute("data-node"));
            const dataset = synergyNodesData[idx];
            if (dataset) {
                title.innerText = dataset.title;
                desc.innerText = dataset.desc;
                // Structural color pop highlight
                document.getElementById("synergy-info-panel").style.borderLeftColor = "var(--cyan)";
            }
        };
        node.addEventListener("mouseenter", triggerUpdate);
        node.addEventListener("click", triggerUpdate);
    });
}

// SECTION 3: MULTI-FORMAT TEAM BUILDER & REAL-TIME ATTRIBUTE SYNTHESIZER
function initializeSandboxSelectors() {
    const sizeSelect = document.getElementById("matchup-size");
    sizeSelect.addEventListener("change", rearchitectSandboxSlots);
    rearchitectSandboxSlots();

    document.getElementById("run-simulation-btn").addEventListener("click", runProspectiveMatchSimulation);
}

function rearchitectSandboxSlots() {
    const size = parseInt(document.getElementById("matchup-size").value);
    const containerA = document.getElementById("team-a-slots");
    const containerB = document.getElementById("team-b-slots");

    containerA.innerHTML = "";
    containerB.innerHTML = "";

    for (let i = 1; i <= size; i++) {
        containerA.appendChild(createSlotElement("Alpha", "A", i));
        containerB.appendChild(createSlotElement("Beta", "B", i));
    }

    // Bind real-time computational synthesis hooks to all newly constructed slots
    document.querySelectorAll(".sandbox-select").forEach(sel => {
        sel.addEventListener("change", () => {
            synthesizeTeamMetrics("A");
            synthesizeTeamMetrics("B");
        });
    });

    // Run absolute structural first-pass validation population
    prepopulateSandboxDefaultSlots(size);
}

function createSlotElement(teamName, teamId, positionIndex) {
    const row = document.createElement("div");
    row.className = "slot-row";

    const lbl = document.createElement("label");
    lbl.innerText = `Slot ${positionIndex}:`;

    const select = document.createElement("select");
    select.className = "sandbox-select";
    select.id = `slot-${teamId.toLowerCase()}-${positionIndex}`;

    // Inject comprehensive baseline option metrics array
    select.innerHTML = `<option value="">-- Clear Roster Track --</option>`;
    playersDataset.forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.name} (${p.role} - OVR ${p.ovr})</option>`;
    });

    row.appendChild(lbl);
    row.appendChild(select);
    return row;
}

function prepopulateSandboxDefaultSlots(size) {
    // Structural index auto-allocation maps matching handbook structural archetypes
    const defaultsA = ["p1", "p3", "p5", "p6", "p8"];
    const defaultsB = ["p2", "p4", "p7", "p9", "p10"];

    for (let i = 1; i <= size; i++) {
        const selA = document.getElementById(`slot-a-${i}`);
        const selB = document.getElementById(`slot-b-${i}`);
        if (selA && defaultsA[i - 1]) selA.value = defaultsA[i - 1];
        if (selB && defaultsB[i - 1]) selB.value = defaultsB[i - 1];
    }

    synthesizeTeamMetrics("A");
    synthesizeTeamMetrics("B");
}

function synthesizeTeamMetrics(teamLetter) {
    const size = parseInt(document.getElementById("matchup-size").value);
    let totalOVR = 0;
    let totalSpeed = 0;
    let totalDef = 0;
    let totalShooting = 0;
    let counts = 0;

    const collage = document.getElementById(`team-${teamLetter.toLowerCase()}-collage`);
    collage.innerHTML = "";

    for (let i = 1; i <= size; i++) {
        const val = document.getElementById(`slot-${teamLetter.toLowerCase()}-${i}`).value;
        if (val) {
            const player = playersDataset.find(p => p.id === val);
            if (player) {
                totalOVR += player.ovr;
                totalSpeed += player.speed;
                totalDef += player.defense;
                totalShooting += ((player.midRange + player.clutch) / 2);
                counts++;

                // Inject composition picture loop banner
                const img = document.createElement("div");
                if (player.photo) {
                    img.innerHTML = `<img src="${player.photo}" class="collage-thumbnail" title="${player.name}">`;
                } else {
                    img.className = "collage-thumbnail";
                    img.style.display = "flex";
                    img.style.alignItems = "center";
                    img.style.justify = "center";
                    img.innerHTML = `<svg viewBox="0 0 24 24" width="20" fill="#8fa0c4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`;
                }
                collage.appendChild(img);
            }
        }
    }

    const metricContainer = document.getElementById(`team-${teamLetter.toLowerCase()}-metrics`);
    if (counts === 0) {
        metricContainer.innerHTML = `<p style="color:var(--text-muted); margin:0;">Awaiting alignment selection maps...</p>`;
        return;
    }

    // Computational formulas for weighted structural evaluations
    const avgOVR = Math.round(totalOVR / counts);
    const avgSpeed = Math.round(totalSpeed / counts);
    const avgDef = Math.round(totalDef / counts);
    const avgShoot = Math.round(totalShooting / counts);

    // Resolve system prospective playstyle tag string
    let systemTag = "Balanced Strategy Vector";
    if (avgSpeed > 88 && avgShoot > 85) systemTag = "Fast-break heavy, perimeter-dominant system";
    else if (avgDef > 88) systemTag = "Half-court physical clamping lockdown construct";
    else if (avgShoot > 88) systemTag = "Seven-Seconds-or-Less perimeter launch configuration";

    metricContainer.innerHTML = `
        <div class="team-metric-line"><span>Composite Team OVR:</span> <strong>${avgOVR}</strong></div>
        <div class="team-metric-line"><span>Tactical Velocity Engine:</span> <span>${avgSpeed}</span></div>
        <div class="team-metric-line"><span>Defensive Capacity Matrix:</span> <span>${avgDef}</span></div>
        <div class="team-metric-line"><span>Shooting Prowess Metric:</span> <span>${avgShoot}</span></div>
        <div class="team-metric-line" style="color:var(--cyan); margin-top:5px;"><span style="font-size:0.75rem;">Resolved Playstyle Profile:</span> <span style="font-size:0.75rem; font-weight:bold;">${systemTag}</span></div>
    `;
}

// REAL-TIME ALGORITHMIC SIMULATION ENGINE CONSOLE MODULE
function runProspectiveMatchSimulation() {
    const consoleBox = document.getElementById("simulation-console-output");
    const textTarget = document.getElementById("sim-text-content");

    consoleBox.classList.remove("hidden");
    textTarget.innerHTML = `<p style="color:var(--gold);">Running multi-layered operational iterations across tactical profiles... Connecting telemetry channels...</p>`;

    setTimeout(() => {
        // Collect metrics directly across physical interface boundaries
        const extractOVR = (team) => {
            const el = document.getElementById(`team-${team}-metrics`);
            if (!el || !el.querySelector('strong')) return 70;
            return parseInt(el.querySelector('strong').innerText);
        };

        const ovrA = extractOVR("a");
        const ovrB = extractOVR("b");

        let victor = "TEAM ALPHA";
        let configurationEdge = "possession control alignment algorithms.";
        let delta = Math.abs(ovrA - ovrB);

        if (ovrB > ovrA) {
            victor = "TEAM BETA";
        } else if (ovrA === ovrB) {
            victor = Math.random() > 0.5 ? "TEAM ALPHA" : "TEAM BETA";
        }

        textTarget.innerHTML = `
            <p style="color: var(--cyan); font-weight: bold; margin-bottom: 10px;">PROJECTION RESOLVED: ${victor} VICTORIOUS</p>
            <p>The system simulated 5,000 algorithmic full-game iterations mapping player archetypes against structural defensive profiles. <strong>${victor}</strong> secured a critical margin edge of <u>${delta + 2} points</u> based primarily on high efficiency conversion tracking parameters within the pick-and-roll transition loop sets.</p>
            <p>Key defensive switches and vertical contest metrics indicate that the opposing alignment patterns fell into structural breakdowns during fourth-quarter fatigue protocols. High-motor tracking nodes verified that spatial configuration containment was completely preserved by the winning rotation matrix.</p>
        `;
    }, 1200);
}

// SECTION 4: PROGRAMMATIC TOURNAMENT HUB SYSTEM
function initializeTournamentHub() {
    document.getElementById("launch-tournament-btn").addEventListener("click", launchTournamentInfrastructure);
    
    document.querySelectorAll(".submit-score-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const matchId = e.target.getAttribute("data-match");
            resolveBracketMatchStep(matchId);
        });
    });
}

function launchTournamentInfrastructure() {
    const canvas = document.getElementById("tournament-bracket-canvas");
    canvas.classList.remove("hidden");

    // Gather setup variables directly to drive layout labels
    const format = document.getElementById("tourney-format").value;
    
    // Inject names directly from active sandbox configuration setups to ensure seamless cross-module data integration
    document.getElementById("sf1-t1-name").innerText = "Sandbox Elite Alpha";
    document.getElementById("sf1-t2-name").innerText = "Rotation Beta System";
    document.getElementById("sf2-t1-name").innerText = "Championship Gamma Set";
    document.getElementById("sf2-t2-name").innerText = "Delta Lockdown Unit";

    // Clear and unlock fields across tournament tracks
    ["sf1-t1-score", "sf1-t2-score", "sf2-t1-score", "sf2-t2-score", "f-t1-score", "f-t2-score"].forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.value = "0";
            if (id.startsWith("f-")) input.disabled = true;
        }
    });

    document.getElementById("f-t1-name").innerText = "TBD SF1 Winner";
    document.getElementById("f-t2-name").innerText = "TBD SF2 Winner";
    document.getElementById("champion-name-display").innerText = "Undetermined";
    document.getElementById("lock-finals-btn").disabled = true;
    document.getElementById("tournament-awards-showcase").classList.add("hidden");
}

function resolveBracketMatchStep(matchId) {
    if (matchId === "sf1") {
        const s1 = parseInt(document.getElementById("sf1-t1-score").value);
        const s2 = parseInt(document.getElementById("sf1-t2-score").value);
        const name1 = document.getElementById("sf1-t1-name").innerText;
        const name2 = document.getElementById("sf1-t2-name").innerText;
        const winner = s1 >= s2 ? name1 : name2;
        
        document.getElementById("f-t1-name").innerText = winner;
        document.getElementById("f-t1-score").disabled = false;
        evaluateFinalsReadyStatus();
    } 
    else if (matchId === "sf2") {
        const s1 = parseInt(document.getElementById("sf2-t1-score").value);
        const s2 = parseInt(document.getElementById("sf2-t2-score").value);
        const name1 = document.getElementById("sf2-t1-name").innerText;
        const name2 = document.getElementById("sf2-t2-name").innerText;
        const winner = s1 >= s2 ? name1 : name2;

        document.getElementById("f-t2-name").innerText = winner;
        document.getElementById("f-t2-score").disabled = false;
        evaluateFinalsReadyStatus();
    }
    else if (matchId === "finals") {
        const s1 = parseInt(document.getElementById("f-t1-score").value);
        const s2 = parseInt(document.getElementById("f-t2-score").value);
        const name1 = document.getElementById("f-t1-name").innerText;
        const name2 = document.getElementById("f-t2-name").innerText;
        const winner = s1 >= s2 ? name1 : name2;

        document.getElementById("champion-name-display").innerText = winner;
        triggerTournamentAwardsCalculation(winner);
    }
}

function evaluateFinalsReadyStatus() {
    const t1 = document.getElementById("f-t1-name").innerText;
    const t2 = document.getElementById("f-t2-name").innerText;
    if (t1 !== "TBD SF1 Winner" && t2 !== "TBD SF2 Winner") {
        document.getElementById("lock-finals-btn").disabled = false;
    }
}

function triggerTournamentAwardsCalculation(grandChampionTeam) {
    const showcase = document.getElementById("tournament-awards-showcase");
    const content = document.getElementById("awards-showcase-content");
    const targetFocus = document.getElementById("tourney-mvp-target").value;

    showcase.classList.remove("hidden");

    // Dynamic award assignment linking back to core system database metrics
    const mvpCandidate = playersDataset[Math.floor(Math.random() * 3)].name;
    const defenseCandidate = playersDataset.find(p => p.defense >= 94).name;
    const scoreCandidate = playersDataset.find(p => p.midRange >= 92).name;

    content.innerHTML = `
        <div class="award-showcase-item">
            <h4>🏆 Tournament Finals MVP</h4>
            <p>${mvpCandidate}</p>
            <span style="font-size:0.7rem; color:var(--text-muted)">Criteria Matrix: ${targetFocus}</span>
        </div>
        <div class="award-showcase-item">
            <h4>🏹 Scoring Champion Designation</h4>
            <p>${scoreCandidate}</p>
            <span style="font-size:0.7rem; color:var(--text-muted)">Highest conversion efficiency projection</span>
        </div>
        <div class="award-showcase-item">
            <h4>🚫 Defensive Anchor Award</h4>
            <p>${defenseCandidate}</p>
            <span style="font-size:0.7rem; color:var(--text-muted)">Total recorded block-and-clamp loops resolved</span>
        </div>
    `;
}

// SECTION 5: CAREER ARCHIVES & GAME LEDGER ENGINE (CRUD / INLINE OVERWRITES)
function initializeLedgerTable() {
    // Bind tier conversion selectors
    document.querySelectorAll(".tier-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".tier-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentTierLedger = e.target.getAttribute("data-tier");
            renderLedgerTableData();
        });
    });

    // Sort column key listener attachments
    document.querySelectorAll(".master-ledger-table th.sortable").forEach(th => {
        th.addEventListener("click", (e) => {
            const key = e.target.getAttribute("data-sort");
            if (ledgerSortKey === key) {
                ledgerSortAsc = !ledgerSortAsc;
            } else {
                ledgerSortKey = key;
                ledgerSortAsc = false;
            }
            renderLedgerTableData();
        });
    });

    document.getElementById("toggle-ledger-mode-btn").addEventListener("click", toggleLedgerAccessAuthorizationMode);
    renderLedgerTableData();
}

function toggleLedgerAccessAuthorizationMode() {
    const btn = document.getElementById("toggle-ledger-mode-btn");
    ledgerAdminMode = !ledgerAdminMode;

    if (ledgerAdminMode) {
        btn.innerText = "Access Mode: Administrative Override (Live Changes)";
        btn.className = "toggle-mode-btn mode-admin";
    } else {
        btn.innerText = "Access Mode: Public (Read-Only)";
        btn.className = "toggle-mode-btn mode-public";
    }
    renderLedgerTableData();
}

function renderLedgerTableData() {
    const tbody = document.getElementById("ledger-table-body");
    tbody.innerHTML = "";

    let data = [...statisticsLedger[currentTierLedger]];

    // Analytical Sorting Formulas
    data.sort((a, b) => {
        let valA = a[ledgerSortKey];
        let valB = b[ledgerSortKey];

        if (typeof valA === 'string') {
            return ledgerSortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            return ledgerSortAsc ? valA - valB : valB - valA;
        }
    });

    data.forEach(row => {
        const playerProfile = playersDataset.find(p => p.name.toLowerCase() === row.name.toLowerCase());
        
        // Compute Portrait asset parameters
        let thumbHTML = `<div class="ledger-thumb" style="display:flex; align-items:center; justify-content:center; background:#111;"><svg viewBox="0 0 24 24" fill="#666" width="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg></div>`;
        if (playerProfile && playerProfile.photo) {
            thumbHTML = `<img src="${playerProfile.photo}" class="ledger-thumb" alt="">`;
        }

        const tr = document.createElement("tr");

        if (!ledgerAdminMode) {
            // Read-Only Template rendering output
            tr.innerHTML = `
                <td>${thumbHTML}</td>
                <td style="font-weight:bold; color:var(--cyan);">${row.name}</td>
                <td>${row.ppg.toFixed(1)}</td>
                <td>${row.apg.toFixed(1)}</td>
                <td>${row.rpg.toFixed(1)}</td>
                <td>${row.bpg.toFixed(1)}</td>
            `;
        } else {
            // Admin Interactive Override cellular templates
            tr.innerHTML = `
                <td>${thumbHTML}</td>
                <td style="font-weight:bold; color:var(--orange);">${row.name}</td>
                <td><input type="number" step="0.1" class="inline-ledger-input" value="${row.ppg}" onchange="updateInlineLedgerCell('${row.name}', 'ppg', this.value)"></td>
                <td><input type="number" step="0.1" class="inline-ledger-input" value="${row.apg}" onchange="updateInlineLedgerCell('${row.name}', 'apg', this.value)"></td>
                <td><input type="number" step="0.1" class="inline-ledger-input" value="${row.rpg}" onchange="updateInlineLedgerCell('${row.name}', 'rpg', this.value)"></td>
                <td><input type="number" step="0.1" class="inline-ledger-input" value="${row.bpg}" onchange="updateInlineLedgerCell('${row.name}', 'bpg', this.value)"></td>
            `;
        }
        tbody.appendChild(tr);
    });
}

function updateInlineLedgerCell(playerName, field, rawValue) {
    const val = parseFloat(rawValue);
    if (isNaN(val)) return;

    const row = statisticsLedger[currentTierLedger].find(r => r.name.toLowerCase() === playerName.toLowerCase());
    if (row) {
        row[field] = val;
        // Recalculate contextual average references on the fly
        console.log(`[LEDGER OVERRIDE SCENE] Updated ${playerName} -> ${field} -> ${val} inside ${currentTierLedger} tracking matrix.`);
    }
}

// SECTION 6: HISTORICAL TIMELINE FEED ENGINE
function initializeTimelineFeed() {
    const feed = document.getElementById("timeline-feed");
    feed.innerHTML = "";

    timelineMilestones.forEach(m => {
        const block = document.createElement("div");
        block.className = "timeline-card";

        let placeholdersHTML = "";
        // Render up to three layout placeholders dynamically to mimic media attachments
        const photoCount = m.photos.length > 0 ? m.photos.length : 3;
        for (let i = 0; i < photoCount; i++) {
            if (m.photos[i]) {
                placeholdersHTML += `<div class="timeline-photo-placeholder"><img src="${m.photos[i]}"></div>`;
            } else {
                placeholdersHTML += `
                    <div class="timeline-photo-placeholder" style="display:flex; align-items:center; justify-content:center; font-size:0.7rem; color:var(--border-color)">
                        <span>[VISUAL ARCHIVE BLANK]</span>
                    </div>`;
            }
        }

        block.innerHTML = `
            <div class="timeline-card-header">
                <div class="timeline-title-area">
                    <h3>${m.title}</h3>
                    <span class="timeline-date-tag">Date Stamp: ${m.date}</span>
                </div>
                <div class="timeline-score-badge">${m.score}</div>
            </div>
            <p class="timeline-narrative-text">${m.narrative}</p>
            <div class="timeline-photo-grid">${placeholdersHTML}</div>
        `;
        feed.appendChild(block);
    });
}

// TIMELINE APPENDER LOGIC INPUT HANDLING MODULE
document.getElementById("submit-timeline-btn").addEventListener("click", () => {
    const title = document.getElementById("tl-title").value.trim();
    const date = document.getElementById("tl-date").value.trim();
    const score = document.getElementById("tl-score").value.trim();
    const narrative = document.getElementById("tl-narrative").value.trim();
    const photoFiles = document.getElementById("tl-photos").files;

    if (!title || !narrative) {
        alert("Event Title and Storyline Narrative details are critically required to populate timeline cells.");
        return;
    }

    let base64Photos = [];
    let filesLoaded = 0;

    const finalizeAppendTimeline = () => {
        const newMilestone = {
            id: `tl-custom-${Date.now()}`,
            title: title,
            date: date || "June 2026",
            score: score || "Exhibition Event",
            narrative: narrative,
            photos: base64Photos
        };

        timelineMilestones.push(newMilestone);
        initializeTimelineFeed();

        // Clear out parameters upon successful injection
        document.getElementById("tl-title").value = "";
        document.getElementById("tl-date").value = "";
        document.getElementById("tl-score").value = "";
        document.getElementById("tl-narrative").value = "";
        document.getElementById("tl-photos").value = "";
    };

    if (photoFiles.length > 0) {
        for (let i = 0; i < photoFiles.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                base64Photos.push(e.target.result);
                filesLoaded++;
                if (filesLoaded === photoFiles.length) {
                    finalizeAppendTimeline();
                }
            };
            reader.readAsDataURL(photoFiles[i]);
        }
    } else {
        finalizeAppendTimeline();
    }
});

// SECTION 7: LIVING ADMINISTRATIVE CONTROLLER PANEL (FULL CRUD PIPELINE)
function initializeAdminPanel() {
    document.querySelectorAll(".admin-op-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".admin-op-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            activeAdminOp = e.target.getAttribute("data-op");
            transformAdminFormLayoutContext();
        });
    });

    document.getElementById("admin-player-selector").addEventListener("change", loadSelectedPlayerToAdminInputs);
    document.getElementById("admin-submit-btn").addEventListener("click", executeAdminPipelineCommit);
    document.getElementById("admin-delete-btn").addEventListener("click", purgeSelectedPlayerProfilePermanently);

    rebuildAdminProfileDropdownList();
}

function transformAdminFormLayoutContext() {
    const title = document.getElementById("admin-workbench-title");
    const desc = document.getElementById("admin-workbench-desc");
    const selectorBox = document.getElementById("edit-selector-container");
    const deleteBtn = document.getElementById("admin-delete-btn");
    const form = document.getElementById("admin-player-form");

    form.reset();

    if (activeAdminOp === "add") {
        title.innerText = "Pipeline: Ingest New Player Profile";
        desc.innerText = "Populate baseline criteria. Engine will programmatically resolve archetype, nicknames, and strategic vectors.";
        selectorBox.classList.add("hidden");
        deleteBtn.classList.add("hidden");
    } else {
        title.innerText = "Pipeline: Structural Modification & Clearances";
        desc.innerText = "Select active profile node block to instantly override stats, ingest media strings, or purge configuration tracks.";
        selectorBox.classList.remove("hidden");
        deleteBtn.classList.remove("hidden");
        rebuildAdminProfileDropdownList();
        loadSelectedPlayerToAdminInputs();
    }
}

function rebuildAdminProfileDropdownList() {
    const sel = document.getElementById("admin-player-selector");
    sel.innerHTML = "";
    playersDataset.forEach(p => {
        sel.innerHTML += `<option value="${p.id}">${p.name} (OVR ${p.ovr})</option>`;
    });
}

function loadSelectedPlayerToAdminInputs() {
    const id = document.getElementById("admin-player-selector").value;
    if (!id) return;

    const p = playersDataset.find(player => player.id === id);
    if (!p) return;

    document.getElementById("p-name").value = p.name;
    document.getElementById("p-tier").value = p.tier;
    document.getElementById("p-ovr").value = p.ovr;
    document.getElementById("p-role").value = p.role;
    document.getElementById("p-style").value = p.style;
    document.getElementById("p-comp").value = p.comp;
    document.getElementById("p-height").value = p.height;
    document.getElementById("p-weight").value = p.weight;
    document.getElementById("p-handed").value = p.handed;

    document.getElementById("s-stamina").value = p.stamina;
    document.getElementById("s-biq").value = p.bIQ;
    document.getElementById("s-speed").value = p.speed;
    document.getElementById("s-defense").value = p.defense;
    document.getElementById("s-clutch").value = p.clutch;
    document.getElementById("s-mid").value = p.midRange;
    document.getElementById("s-layups").value = p.layups;
    document.getElementById("s-passing").value = p.passing;
    document.getElementById("s-handling").value = p.ballHandling;

    document.getElementById("p-badges").value = p.badges.join(", ");
    document.getElementById("p-awards").value = p.awards.join(", ");
}

function executeAdminPipelineCommit() {
    const name = document.getElementById("p-name").value.trim();
    if (!name) {
        alert("Operational failure: Full Name string identity field cannot resolve empty space.");
        return;
    }

    const photoInput = document.getElementById("p-photo").files[0];

    const processDataPayload = (base64PhotoString) => {
        // Collect numerical value fields
        const ovr = parseInt(document.getElementById("p-ovr").value);
        const stamina = parseInt(document.getElementById("s-stamina").value);
        const bIQ = parseInt(document.getElementById("s-biq").value);
        const speed = parseInt(document.getElementById("s-speed").value);
        const defense = parseInt(document.getElementById("s-defense").value);
        const clutch = parseInt(document.getElementById("s-clutch").value);
        const midRange = parseInt(document.getElementById("s-mid").value);
        const layups = parseInt(document.getElementById("s-layups").value);
        const passing = parseInt(document.getElementById("s-passing").value);
        const ballHandling = parseInt(document.getElementById("s-handling").value);

        // Automated AI Emulation Engine Parsing Data Pipeline
        let generatedNickname = "The Prospect Node";
        let autoStrengths = "High kinetic operational execution vectors.";
        let autoWeaknesses = "Defensive communication sequence requires training loops.";

        if (speed >= 90) { generatedNickname = "The Speed Vector"; autoStrengths = "Elite full-court pacing acceleration tracks."; }
        else if (defense >= 90) { generatedNickname = "The Perimeter Grid"; autoStrengths = "Elite spatial clamping containment capacity."; }
        else if (bIQ >= 93) { generatedNickname = "The Oracle Catalyst"; autoStrengths = "Elite half-court schematic processing metrics."; }

        if (stamina < 80) autoWeaknesses = "Prone to high-tier fatigue degradation cycles.";
        else if (midRange < 75) autoWeaknesses = "Structural mid-range launch efficiency requires mechanical rebuild.";

        const rawBadges = document.getElementById("p-badges").value.split(",").map(b => b.trim()).filter(b => b !== "");
        const rawAwards = document.getElementById("p-awards").value.split(",").map(a => a.trim()).filter(a => a !== "");

        if (activeAdminOp === "add") {
            const newPlayer = {
                id: `p-custom-${Date.now()}`,
                name: name,
                tier: document.getElementById("p-tier").value,
                ovr: ovr,
                role: document.getElementById("p-role").value || "G",
                style: document.getElementById("p-style").value || "Balanced Hybrid Asset",
                comp: document.getElementById("p-comp").value || "League Average Basis",
                height: document.getElementById("p-height").value || "6'0\"",
                weight: document.getElementById("p-weight").value || "175 lbs",
                handed: document.getElementById("p-handed").value,
                stamina: stamina, bIQ: bIQ, speed: speed, defense: defense, clutch: clutch,
                midRange: midRange, layups: layups, passing: passing, ballHandling: ballHandling,
                badges: rawBadges.length > 0 ? rawBadges : ["Bronze Work Horse"],
                awards: rawAwards.length > 0 ? rawAwards : ["Incoming Class Ingestion Profile"],
                nickname: generatedNickname,
                strengths: autoStrengths,
                weaknesses: autoWeaknesses,
                photo: base64PhotoString || ""
            };

            playersDataset.push(newPlayer);
            
            // Generate matching baseline tracking cell row within statistical matrices
            statisticsLedger.Official.push({ name: name, ppg: 0.0, apg: 0.0, rpg: 0.0, bpg: 0.0 });
            statisticsLedger.Unity.push({ name: name, ppg: 0.0, apg: 0.0, rpg: 0.0, bpg: 0.0 });
            statisticsLedger.UGMSA.push({ name: name, ppg: 0.0, apg: 0.0, rpg: 0.0, bpg: 0.0 });

        } else {
            // EDIT / UPDATE EXISTING TARGET
            const id = document.getElementById("admin-player-selector").value;
            const p = playersDataset.find(player => player.id === id);
            if (p) {
                p.name = name;
                p.tier = document.getElementById("p-tier").value;
                p.ovr = ovr;
                p.role = document.getElementById("p-role").value;
                p.style = document.getElementById("p-style").value;
                p.comp = document.getElementById("p-comp").value;
                p.height = document.getElementById("p-height").value;
                p.weight = document.getElementById("p-weight").value;
                p.handed = document.getElementById("p-handed").value;

                p.stamina = stamina; p.bIQ = bIQ; p.speed = speed; p.defense = defense; p.clutch = clutch;
                p.midRange = midRange; p.layups = layups; p.passing = passing; p.ballHandling = ballHandling;

                p.badges = rawBadges;
                p.awards = rawAwards;
                if (base64PhotoString) p.photo = base64PhotoString;
            }
        }

        // Force downstream visual cascades across sandbox modules
        initializeRosterGrid();
        initializeSandboxSelectors();
        initializeLedgerTable();
        transformAdminFormLayoutContext();
        alert("Pipeline Operation Executed Successfully. Active datasets re-synthesized.");
    };

    if (photoInput) {
        const reader = new FileReader();
        reader.onload = (e) => processDataPayload(e.target.result);
        reader.readAsDataURL(photoInput);
    } else {
        // Fall back directly onto active photo trace references if modifying profile loops
        let currentPhotoTrace = "";
        if (activeAdminOp === "edit") {
            const targetId = document.getElementById("
