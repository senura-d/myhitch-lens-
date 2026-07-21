/* ==========================================================================
   MYHitch Lens - Shared Core Script & State Engine
   Persists platform databases across multiple separate physical pages.
   ========================================================================== */

// --- 1. Baseline Default Database Mock ---
const defaultArticles = [
    {
        id: "art-1",
        title: "The Decoupling of Global Supply Chains",
        category: "Supply Chain",
        type: "Report",
        readTime: "5 min read",
        summary: "An analysis of multi-shore manufacturing shifts and their impacts on lead times, logistics resilience, and regional warehouse clusters in 2026.",
        content: `Global trade flows are undergoing a profound spatial reorganization. The post-pandemic push for resilience has evolved into active structural decoupling, driven by regulatory changes, tariff structures, and localized risk mitigation.

Key Takeaways:
• Near-shoring is increasing regional warehouse demands by 40% in Central Europe and Mexico.
• Just-in-Case models require holding higher levels of buffer inventory, increasing carrying costs.
• Multi-tier supplier visibility remains the single largest operational gap for Fortune 500 logistics teams.

As organizations adapt, the integration of intelligent telemetry becomes vital. Adopting unified digital ledgers and predictive demand models helps mitigate volatile sea and air freight capacity gaps.`,
        author: "Dr. Sarah Chen",
        authorRank: "Silver Contributor",
        likes: 142,
        bookmarks: 35,
        comments: [
            { name: "John Doe", date: "2 hours ago", text: "Excellent analysis. The MX-US corridor statistics are particularly striking." },
            { name: "Elena R.", date: "5 hours ago", text: "Are you seeing similar warehousing trends in Southeast Asia near-shoring hubs?" }
        ],
        verified: true,
        date: "2026-07-18"
    },
    {
        id: "art-2",
        title: "How Generative AI is Transforming Enterprise Logistics",
        category: "AI",
        type: "Research Paper",
        readTime: "7 min read",
        summary: "Evaluating deep learning model integrations in predictive fleet scheduling, automated document ingestion, and inventory forecasting optimization.",
        content: `Enterprise logistics relies on thousands of disparate documents—manifests, customs papers, invoices, and shipping certificates. Generative AI models, specifically optimized LLMs, are cutting ingestion friction by up to 90%.

Technical Highlights:
• Optical character validation utilizing transformer networks yields 99.1% parsing accuracy.
• Predictive routing algorithms optimize fuel burn by adjusting paths dynamically based on weather and port congestion data.
• Automated customer notifications translate delivery updates across 12 languages instantly.

However, challenges remain around model hallucinations in critical flight manifests. We explore sandboxing approaches to ensure strict safety boundaries.`,
        author: "Dr. Sarah Chen",
        authorRank: "Gold Contributor",
        likes: 312,
        bookmarks: 89,
        comments: [
            { name: "Marcus V.", date: "Yesterday", text: "Dr. Sarah Chen, my team is currently looking into integrating these transformers for regional ports." }
        ],
        verified: true,
        date: "2026-07-15"
    },
    {
        id: "art-3",
        title: "Quantum Computing Applications in Financial Risk Assessment",
        category: "Finance",
        type: "Research Paper",
        readTime: "12 min read",
        summary: "Practical quantum algorithms for simulating Monte Carlo portfolio scenarios with speed-ups over traditional GPU clusters.",
        content: `Modern financial portfolios are subject to non-linear risks that traditional computing grids struggle to model in real time. Quantum estimation algorithms provide a logarithmic speed-up for Monte Carlo risk simulations.

In this research, we detail:
1. Mapping asset correlation matrices to qubit registers.
2. Formulating value-at-risk (VaR) equations as Hamiltonian representations.
3. Benchmarking NISQ-era quantum hardware configurations.

By computing risk metrics in seconds rather than hours, trading desks can dynamically hedge complex derivatives against sudden macroeconomic volatility.`,
        author: "Alex Mercer",
        authorRank: "Contributor",
        likes: 58,
        bookmarks: 14,
        comments: [],
        verified: false,
        date: "2026-07-10"
    },
    {
        id: "art-4",
        title: "Sustainable Flight Operations: Reimagining Jet Fuel Alternatives",
        category: "Travel",
        type: "Blog",
        readTime: "4 min read",
        summary: "Analyzing Sustainable Aviation Fuels (SAF) infrastructure, chemical efficiency benchmarks, and cost disparities facing modern airlines.",
        content: `Decarbonizing global aviation is one of the most stubborn engineering challenges of the century. While electric battery systems show promise for short hops, long-haul aviation requires dense chemical fuels. Sustainable Aviation Fuels (SAF) derived from biological waste represent the most viable pathway.

Current Benchmarks:
• SAF reduces lifecycle CO2 emissions by up to 80% compared to conventional jet fuel.
• Production scalability remains low, meeting less than 1% of global demand.
• Price premiums sit at 2x to 4x conventional fuels.

Airlines adopting SAF programs like JetNRest are leading the transition by integrating carbon offsets directly into booking workflows, allowing corporate travelers to subsidize clean fuel allotments.`,
        author: "Dr. Elena Rostova",
        authorRank: "Gold Contributor",
        likes: 204,
        bookmarks: 42,
        comments: [
            { name: "FlightPath_Global", date: "3 days ago", text: "SAF is the future. JetNRest’s booking integrations make this transition tangible for corporate clients." }
        ],
        verified: true,
        date: "2026-07-12"
    }
];

const defaultQueue = [
    {
        id: "rev-1",
        title: "Blockchain Ledgers for Transparent Carbon Offset Tracking",
        author: "Liam Sterling",
        authorRank: "Contributor",
        category: "Research",
        type: "Research Paper",
        submittedDate: "2026-07-20 10:15",
        aiScore: 94,
        plagiarism: "1.2% detected",
        readability: "Good (Flesch: 62)",
        sentiment: "Neutral / Analytical",
        content: `Traditional carbon offsets are plagued by double-counting and lack of verification. By deploying decentralized ledgers on EVM-compatible blockchains, we can tokenized carbon credits. This establishes a single, immutable source of truth.

Every offset certificate is minted as a unique NFT containing verification data (GPS coordinates, satellite imagery, verification dates). The credits are retired permanently when burned on-chain. This provides an audit trail that regulators and ESG reporters can trust.`
    },
    {
        id: "rev-2",
        title: "Hyperloop Systems: Re-evaluating Urban Passenger Transit Networks",
        author: "Clara Oswald",
        authorRank: "Silver Contributor",
        category: "Technology",
        type: "Report",
        submittedDate: "2026-07-19 15:45",
        aiScore: 88,
        plagiarism: "4.5% detected",
        readability: "Complex (Flesch: 45)",
        sentiment: "Highly Optimistic",
        content: `Hyperloop networks operating in near-vacuum tubes at subsonic speeds could bridge key regional corridors, reducing transit times between major metropolitan hubs to minutes. 

This report models energy consumption, infrastructure costs, and throughput metrics. We compare Hyperloop systems with high-speed rail projects. Our models indicate that while initial capital expenditures are 30% higher, operational efficiency and speed offsets this cost within a 12-year window.`
    }
];

const defaultIntegrations = {
    mart: true,
    services: true,
    travel: false,
    events: true,
    donations: true,
    videos: false
};

const defaultNotifications = [
    { id: 1, type: "publish", date: "10 mins ago", text: "Dr. Sarah Chen published a new research paper in 'AI'." },
    { id: 2, type: "system", date: "1 hour ago", text: "Vetting Board: Contributor rank recalculation complete." },
    { id: 3, type: "system", date: "Yesterday", text: "Welcome to MYHitch Lens! Connect your Mart profile to sync link references." }
];

// --- 2. Database Get / Save Helpers ---
function getArticles() {
    return JSON.parse(localStorage.getItem("lens_articles")) || defaultArticles;
}
function saveArticles(arr) {
    localStorage.setItem("lens_articles", JSON.stringify(arr));
}
function getQueue() {
    return JSON.parse(localStorage.getItem("lens_queue")) || defaultQueue;
}
function saveQueue(arr) {
    localStorage.setItem("lens_queue", JSON.stringify(arr));
}
function getBookmarks() {
    return JSON.parse(localStorage.getItem("lens_bookmarks")) || ["art-1", "art-2"];
}
function saveBookmarks(arr) {
    localStorage.setItem("lens_bookmarks", JSON.stringify(arr));
}
function getFollowed() {
    return JSON.parse(localStorage.getItem("lens_followed")) || ["Dr. Sarah Chen", "Dr. Elena Rostova"];
}
function saveFollowed(arr) {
    localStorage.setItem("lens_followed", JSON.stringify(arr));
}
function getNotifications() {
    return JSON.parse(localStorage.getItem("lens_notifications")) || defaultNotifications;
}
function saveNotifications(arr) {
    localStorage.setItem("lens_notifications", JSON.stringify(arr));
}
function getAppeals() {
    return JSON.parse(localStorage.getItem("lens_appeals")) || [];
}
function saveAppeals(arr) {
    localStorage.setItem("lens_appeals", JSON.stringify(arr));
}
function getIntegrations() {
    return JSON.parse(localStorage.getItem("lens_integrations")) || defaultIntegrations;
}
function saveIntegrations(obj) {
    localStorage.setItem("lens_integrations", JSON.stringify(obj));
}
function getUserRole() {
    return localStorage.getItem("lens_role") || "author";
}
function setUserRole(role) {
    localStorage.setItem("lens_role", role);
}
function getUserName() {
    return localStorage.getItem("lens_user") || "Dr. Sarah Chen";
}
function setUserName(name) {
    localStorage.setItem("lens_user", name);
}

// --- 3. Initial state boot ---
function checkAndInitDatabase() {
    if (!localStorage.getItem("lens_articles")) saveArticles(defaultArticles);
    if (!localStorage.getItem("lens_queue")) saveQueue(defaultQueue);
    if (!localStorage.getItem("lens_bookmarks")) saveBookmarks(["art-1", "art-2"]);
    if (!localStorage.getItem("lens_followed")) saveFollowed(["Dr. Sarah Chen", "Dr. Elena Rostova"]);
    if (!localStorage.getItem("lens_notifications")) saveNotifications(defaultNotifications);
    if (!localStorage.getItem("lens_appeals")) saveAppeals([]);
    if (!localStorage.getItem("lens_integrations")) saveIntegrations(defaultIntegrations);
    if (!localStorage.getItem("lens_role")) setUserRole("author");
    if (!localStorage.getItem("lens_user")) setUserName("Dr. Sarah Chen");
    if (!localStorage.getItem("lens_theme")) localStorage.setItem("lens_theme", "light"); // Default to clean Light Theme
}

// --- 4. Sidebar Dynamic Assembler & Injector ---
function injectSidebarMenu() {
    const sidebar = document.getElementById("sidebarContainer");
    if (!sidebar) return; // public view page, no sidebar

    const role = getUserRole();
    const name = getUserName();
    const queue = getQueue();
    
    // Choose avatar letter and color
    let avatarChar = "S";
    let avatarBg = "linear-gradient(135deg, #2da4df 0%, #0056b3 100%)"; // Premium blue gradient for Author
    let badgeText = "Author (Vetted)";
    
    if (role === "reader") {
        avatarChar = "M";
        avatarBg = "linear-gradient(135deg, #74b9ff 0%, #0077b6 100%)"; // Sky blue gradient for Reader
        badgeText = "Reader Mode";
    } else if (role === "editor") {
        avatarChar = "E";
        avatarBg = "linear-gradient(135deg, #0f2b5c 0%, #0077b6 100%)"; // Deep corporate blue gradient for Editor
        badgeText = "Editor Portal";
    }

    // Identify current filename
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1) || "index.html";

    // Build sidebar inner HTML markup
    sidebar.innerHTML = `
        <div class="sidebar-brand" onclick="window.location.href='explore.html'" style="cursor:pointer; display: flex; align-items: center; padding: 15px 20px;">
            <img src="public/logo.jpeg" alt="MYHitch Lens Logo" style="height: 40px; max-height: 40px; object-fit: contain; vertical-align: middle; border-radius: 4px;">
        </div>
        
        <div class="user-profile-widget">
            <div class="user-avatar" style="background: ${avatarBg}; font-size:16px;">${avatarChar}</div>
            <div class="user-meta">
                <h5 class="user-name">${name}</h5>
                <span class="user-role-badge">${badgeText}</span>
            </div>
        </div>

        <div class="role-simulator">
            <label for="roleSelector">Simulate User Role:</label>
            <select id="roleSelector" class="select-input">
                <option value="reader" ${role === "reader" ? "selected" : ""}>Reader (Subscriber)</option>
                <option value="author" ${role === "author" ? "selected" : ""}>Author (Premium)</option>
                <option value="editor" ${role === "editor" ? "selected" : ""}>Editor (Admin)</option>
            </select>
        </div>

        <nav class="sidebar-nav">
            <!-- Reader Dashboard link -->
            <a href="reader-dashboard.html" class="nav-item ${filename === "reader-dashboard.html" ? "active" : ""} ${role !== "reader" ? "hidden" : ""}" id="navReaderDashboard" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Reader Dashboard</span>
            </a>
            <!-- Author Dashboard link -->
            <a href="author-dashboard.html" class="nav-item ${filename === "author-dashboard.html" ? "active" : ""} ${role !== "author" ? "hidden" : ""}" id="navAuthorDashboard" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Author Dashboard</span>
            </a>
            
            <a href="explore.html" class="nav-item ${filename === "explore.html" ? "active" : ""}" id="navFeed" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                <span>Explore Feed</span>
            </a>
            <a href="categories.html" class="nav-item ${filename === "categories.html" ? "active" : ""}" id="navCategories" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                <span>Categories</span>
            </a>
            
            <!-- Submit link -->
            <a href="submit.html" class="nav-item ${filename === "submit.html" ? "active" : ""} ${role === "reader" ? "hidden" : ""}" id="navWrite" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <span>Submit Article</span>
            </a>
            
            <!-- Review queue link -->
            <a href="editorial.html" class="nav-item ${filename === "editorial.html" ? "active" : ""} ${role !== "editor" ? "hidden" : ""}" id="navReview" style="display:flex; align-items:center; gap:8px; width:100%;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="17" y1="3" x2="17" y2="21"/></svg>
                <span class="badge badge-accent ${queue.length === 0 ? "hidden" : ""}" id="queueCount">${queue.length}</span>
                <span>Editorial Queue</span>
            </a>
            
            <!-- Analytics link -->
            <a href="analytics.html" class="nav-item ${filename === "analytics.html" ? "active" : ""} ${role === "reader" ? "hidden" : ""}" id="navAnalytics" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                <span>Analytics Hub</span>
            </a>
            <a href="governance.html" class="nav-item ${filename === "governance.html" ? "active" : ""}" id="navGovernance" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span>Governance Center</span>
            </a>
            <a href="integrations.html" class="nav-item ${filename === "integrations.html" ? "active" : ""}" id="navIntegrations" style="display:flex; align-items:center; gap:8px;">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>
                <span>Integrations API</span>
            </a>
        </nav>

        <div class="sidebar-footer">
            <button class="btn btn-secondary w-full" onclick="window.location.href='index.html'" style="display:inline-flex; align-items:center; justify-content:center; gap:6px;">
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> Back to Landing
            </button>
        </div>
    `;

    // Hook selector listener
    document.getElementById("roleSelector").addEventListener("change", (e) => {
        const newRole = e.target.value;
        setUserRole(newRole);
        
        // Update user name preset
        if (newRole === "reader") {
            setUserName("Markus Green");
        } else if (newRole === "author") {
            setUserName("Dr. Sarah Chen");
        } else if (newRole === "editor") {
            setUserName("Chief Editor Vance");
        }

        // Add log notification
        let notifies = getNotifications();
        notifies.unshift({
            id: Date.now(),
            type: "system",
            date: "Just now",
            text: `Vetted profile switched: Role active matches ${newRole.toUpperCase()}.`
        });
        saveNotifications(notifies);

        // Redirect to target dashboard page automatically
        if (newRole === "reader") {
            window.location.href = "reader-dashboard.html";
        } else if (newRole === "author") {
            window.location.href = "author-dashboard.html";
        } else if (newRole === "editor") {
            window.location.href = "editorial.html";
        }
    });

    // Hook theme button
    const portalBtn = document.getElementById("portalThemeToggleBtn");
    if (portalBtn) {
        portalBtn.addEventListener("click", () => {
            toggleThemeSetting();
        });
        const activeTheme = localStorage.getItem("lens_theme") || "light";
        updateThemeButtonUI(portalBtn, activeTheme);
    }
}

function updateThemeButtonUI(btn, theme) {
    if (theme === "light") {
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> Toggle Dark Mode`;
    } else {
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Toggle Light Mode`;
    }
}

// --- 5. Unified Theme Toggler ---
function applySavedTheme() {
    const activeTheme = localStorage.getItem("lens_theme") || "light";
    if (activeTheme === "light") {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
}

function toggleThemeSetting() {
    const current = localStorage.getItem("lens_theme") || "light";
    const nextTheme = current === "light" ? "dark" : "light";
    localStorage.setItem("lens_theme", nextTheme);
    applySavedTheme();
    
    // Update active page buttons if they exist
    const portalBtn = document.getElementById("portalThemeToggleBtn");
    if (portalBtn) {
        updateThemeButtonUI(portalBtn, nextTheme);
    }
}

// Boot checks
checkAndInitDatabase();
document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    injectSidebarMenu();
    
    // Landing theme button hook if present
    const landingThemeBtn = document.getElementById("themeToggleBtn");
    if (landingThemeBtn) {
        landingThemeBtn.addEventListener("click", () => {
            toggleThemeSetting();
        });
    }
});
