/* ==========================================================================
   MYHitch Lens Platform - Application Logic (Expanded 15 Views Edition)
   ========================================================================== */

// --- 1. Mock Database ---
let articles = [
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

let reviewQueue = [
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

const categoriesDb = [
    { name: "Business", icon: "💼", count: 12, desc: "Market updates, company profiles, and corporate strategy." },
    { name: "Supply Chain", icon: "📦", count: 8, desc: "Logistics corridors, fleet telemetry, near-shoring, and risk models." },
    { name: "Technology", icon: "💻", count: 15, desc: "Hardware development, systems architecture, and engineering designs." },
    { name: "AI", icon: "🤖", count: 24, desc: "Deep learning models, predictive telemetry, LLMs, and quantum networks." },
    { name: "Healthcare", icon: "🏥", count: 9, desc: "Telemedicine, data compliance in clinical systems, and bio-tech reports." },
    { name: "Education", icon: "🎓", count: 6, desc: "E-learning structures, educational accessibility, and academic workflows." },
    { name: "Travel", icon: "✈️", count: 5, desc: "Geographic logs, aviation logistics, Sustainable Aviation Fuels (SAF)." },
    { name: "Finance", icon: "📈", count: 14, desc: "Monte Carlo risk estimations, derivatives, and decentralized ledgers." },
    { name: "Lifestyle", icon: "☕", count: 11, desc: "Remote work culture, wellness design, and creative publishing." },
    { name: "Research", icon: "🔬", count: 18, desc: "Academic research papers, laboratory records, and scientific compliance." },
    { name: "Community", icon: "👥", count: 21, desc: "Discussions, expert panels, and contributor governance reviews." }
];

// --- 2. Application State ---
let state = {
    currentRole: "author", // reader, author, editor
    currentView: "write",  // feed, write, review, analytics, integrations, readerdashboard, authordashboard, categories, governance
    darkTheme: false,
    activeArticle: null,
    audioPlaying: false,
    audioProgressInterval: null,
    audioProgressPercent: 0,
    
    // User Simulation Collections
    userBookmarks: ["art-1", "art-2"],
    userFollowed: ["Dr. Sarah Chen", "Dr. Elena Rostova"],
    userNotifications: [
        { id: 1, type: "publish", date: "10 mins ago", text: "Dr. Sarah Chen published a new research paper in 'AI'." },
        { id: 2, type: "system", date: "1 hour ago", text: "Vetting Board: Contributor rank recalculation complete." },
        { id: 3, type: "system", date: "Yesterday", text: "Welcome to MYHitch Lens! Connect your Mart profile to sync link references." }
    ],
    userAppeals: [],
    
    integrations: {
        mart: true,
        services: true,
        travel: false,
        events: true,
        donations: true,
        videos: false
    }
};

// --- 3. View Management ---
function enterApp(initialRole = "author") {
    document.getElementById("landingView").classList.add("hidden");
    document.getElementById("landingHeader").classList.add("hidden");
    document.getElementById("appPortal").classList.remove("hidden");
    
    document.getElementById("roleSelector").value = initialRole;
    updateUserRoleContext(initialRole);
}

function exitApp() {
    document.getElementById("appPortal").classList.add("hidden");
    document.getElementById("landingView").classList.remove("hidden");
    document.getElementById("landingHeader").classList.remove("hidden");
    
    // Reset view selectors
    showLandingSection("hero");
    stopAudioNarration();
}

function showLandingSection(secId) {
    const sections = ["secHero", "secFeatures", "secWorkflow", "secPricing", "secAbout", "secContact"];
    
    // Find active section target id
    let target = "";
    if (secId === "hero") target = "secHero";
    else if (secId === "features") target = "secFeatures";
    else if (secId === "workflow") target = "secWorkflow";
    else if (secId === "pricing") target = "secPricing";
    else if (secId === "about") target = "secAbout";
    else if (secId === "contact") target = "secContact";
    
    // Scroll smoothly to target element
    const el = document.getElementById(target);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function switchView(viewId) {
    stopAudioNarration();

    // Reset active classes in sidebar items
    const navItems = ["Feed", "Categories", "Write", "Review", "Analytics", "Integrations", "ReaderDashboard", "AuthorDashboard", "Governance"];
    navItems.forEach(item => {
        const el = document.getElementById("nav" + item);
        if (el) {
            if (item.toLowerCase() === viewId.toLowerCase()) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        }
    });

    // Hide all views
    const views = [
        "viewFeed", "viewCategories", "viewWrite", "viewReview", "viewAnalytics", 
        "viewIntegrations", "viewReaderDashboard", "viewAuthorDashboard", "viewGovernance"
    ];
    views.forEach(v => {
        const el = document.getElementById(v);
        if (el) el.classList.add("hidden");
    });

    // Show active view
    const activeViewName = "view" + viewId.charAt(0).toUpperCase() + viewId.slice(1);
    const targetViewEl = document.getElementById(activeViewName);
    if (targetViewEl) {
        targetViewEl.classList.remove("hidden");
    }
    state.currentView = viewId;

    // Trigger dynamic data render actions
    if (viewId === "feed") {
        renderArticlesFeed();
    } else if (viewId === "review") {
        renderEditorialQueue();
    } else if (viewId === "readerdashboard") {
        renderReaderDashboardData();
    } else if (viewId === "authordashboard") {
        renderAuthorPortfolioData();
    } else if (viewId === "categories") {
        renderCategoriesGrid();
    } else if (viewId === "governance") {
        renderAppealsList();
    }
}

// --- 4. Role Simulator Context Switching ---
function updateUserRoleContext(role) {
    state.currentRole = role;
    
    const avatar = document.getElementById("portalAvatar");
    const nameEl = document.getElementById("portalUserName");
    const roleBadge = document.getElementById("portalUserRole");
    
    // Links selectors
    const navReader = document.getElementById("navReaderDashboard");
    const navAuthor = document.getElementById("navAuthorDashboard");
    const navWrite = document.getElementById("navWrite");
    const navReview = document.getElementById("navReview");
    const navAnalytics = document.getElementById("navAnalytics");
    const queueBadge = document.getElementById("queueCount");

    // Hide all role specific options first
    navReader.classList.add("hidden");
    navAuthor.classList.add("hidden");
    navWrite.classList.add("hidden");
    navReview.classList.add("hidden");
    navAnalytics.classList.add("hidden");
    queueBadge.classList.add("hidden");

    if (role === "reader") {
        avatar.textContent = "M";
        avatar.style.background = "linear-gradient(135deg, #74b9ff 0%, #0077b6 100%)"; // Sky blue gradient for Reader
        nameEl.textContent = "Markus Green";
        roleBadge.textContent = "Reader Mode";
        
        // Show Reader Dashboard and switch to it
        navReader.classList.remove("hidden");
        switchView("readerdashboard");
    } 
    else if (role === "author") {
        avatar.textContent = "S";
        avatar.style.background = "linear-gradient(135deg, #2da4df 0%, #0056b3 100%)"; // Premium blue gradient for Author
        nameEl.textContent = "Dr. Sarah Chen";
        roleBadge.textContent = "Author (Vetted)";
        
        // Show Author Dashboard and switch
        navAuthor.classList.remove("hidden");
        navWrite.classList.remove("hidden");
        navAnalytics.classList.remove("hidden");
        switchView("authordashboard");
    } 
    else if (role === "editor") {
        avatar.textContent = "E";
        avatar.style.background = "linear-gradient(135deg, #0f2b5c 0%, #0077b6 100%)"; // Deep corporate blue gradient for Editor
        nameEl.textContent = "Chief Editor Vance";
        roleBadge.textContent = "Editor Portal";
        
        // Show all tabs
        navWrite.classList.remove("hidden");
        navReview.classList.remove("hidden");
        navAnalytics.classList.remove("hidden");
        queueBadge.classList.remove("hidden");
        updateQueueBadgeCount();
        switchView("review");
    }
}

function updateQueueBadgeCount() {
    const queueBadge = document.getElementById("queueCount");
    queueBadge.textContent = reviewQueue.length;
    if (reviewQueue.length === 0) {
        queueBadge.classList.add("hidden");
    } else {
        queueBadge.classList.remove("hidden");
    }
}

function updateThemeButtonUI(btn, theme) {
    if (!btn) return;
    if (theme === "light") {
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> Toggle Dark Mode`;
    } else {
        btn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 6px;"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Toggle Light Mode`;
    }
}

// --- 5. Theme Settings ---
function toggleTheme() {
    const isDark = document.body.classList.contains("dark-theme");
    if (isDark) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        state.darkTheme = false;
        updateThemeButtonUI(document.getElementById("portalThemeToggleBtn"), "light");
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        state.darkTheme = true;
        updateThemeButtonUI(document.getElementById("portalThemeToggleBtn"), "dark");
    }
}

// --- 6. Authentication / Log In / Sign Up Controllers ---
function openAuthModal(mode = "signin", defaultRole = "author") {
    // Show modal container
    const modal = document.getElementById("authModal");
    modal.classList.remove("hidden");
    
    toggleAuthTab(mode);
    
    // Pre-populate target simulation role dropdown
    document.getElementById("authRole").value = defaultRole;
}

function closeAuthModal() {
    document.getElementById("authModal").classList.add("hidden");
}

function toggleAuthTab(tab) {
    const tabSignin = document.getElementById("btnTabSignin");
    const tabSignup = document.getElementById("btnTabSignup");
    const presets = document.getElementById("presetsBox");
    const roleContainer = document.getElementById("authRoleContainer");
    const btnSubmit = document.getElementById("btnAuthSubmit");

    if (tab === "signin") {
        tabSignin.classList.add("active");
        tabSignin.style.color = "var(--primary-color)";
        tabSignup.classList.remove("active");
        tabSignup.style.color = "var(--text-muted)";
        presets.classList.remove("hidden");
        roleContainer.classList.add("hidden"); // sign in matches loaded usernames
        btnSubmit.textContent = "Sign In Vetted Profile";
    } else {
        tabSignup.classList.add("active");
        tabSignup.style.color = "var(--primary-color)";
        tabSignin.classList.remove("active");
        tabSignin.style.color = "var(--text-muted)";
        presets.classList.add("hidden");
        roleContainer.classList.remove("hidden"); // signup needs role selection
        btnSubmit.textContent = "Create New Account Profile";
    }
}

function selectPresetUser(role) {
    const userEl = document.getElementById("authUsername");
    const passEl = document.getElementById("authPassword");
    const roleEl = document.getElementById("authRole");

    if (role === "reader") {
        userEl.value = "markus_green";
        passEl.value = "password99";
        roleEl.value = "reader";
    } else if (role === "author") {
        userEl.value = "sarah_chen";
        passEl.value = "password123";
        roleEl.value = "author";
    } else if (role === "editor") {
        userEl.value = "editor_vance";
        passEl.value = "boss_editor";
        roleEl.value = "editor";
    }

    // Trigger auto-submit simulation
    document.getElementById("btnAuthSubmit").click();
}

function handleAuthSubmit(event) {
    event.preventDefault();
    const user = document.getElementById("authUsername").value.trim();
    const role = document.getElementById("authRole").value;

    closeAuthModal();
    enterApp(role);
    
    // Add custom notification for authentication
    state.userNotifications.unshift({
        id: state.userNotifications.length + 1,
        type: "system",
        date: "Just now",
        text: `Vetted profile logged in: ${user} as ${role.toUpperCase()}.`
    });

    alert(`Authentication Verified!\nWelcome back, ${user} (${role} profile).`);
}

// --- 7. Reader Space Controllers ---
function renderReaderDashboardData() {
    // 1. Render Bookmarks
    const bookmarksList = document.getElementById("bookmarksContainer");
    bookmarksList.innerHTML = "";
    
    const saved = articles.filter(a => state.userBookmarks.includes(a.id));
    if (saved.length === 0) {
        bookmarksList.innerHTML = `<p style="font-size:12px; color:var(--text-muted); padding:10px;">You have no saved articles.</p>`;
    } else {
        saved.forEach(art => {
            const item = document.createElement("div");
            item.className = "bookmark-row";
            item.innerHTML = `
                <div class="bookmark-info" onclick="openArticleModal('${art.id}')" style="cursor:pointer;">
                    <span class="bookmark-title">${art.title}</span>
                    <span class="bookmark-meta">${art.category} • By ${art.author}</span>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="removeBookmarkFromDashboard('${art.id}')">Remove</button>
            `;
            bookmarksList.appendChild(item);
        });
    }

    // 2. Render Followed Authors
    const authorsList = document.getElementById("followedAuthorsContainer");
    authorsList.innerHTML = "";
    if (state.userFollowed.length === 0) {
        authorsList.innerHTML = `<p style="font-size:12px; color:var(--text-muted); padding:10px;">You do not follow any authors yet.</p>`;
    } else {
        state.userFollowed.forEach(authName => {
            const item = document.createElement("div");
            item.className = "author-row";
            item.innerHTML = `
                <div class="author-chip">
                    <div class="author-avatar" style="background-color: var(--primary-glow); color:var(--primary-color);">${authName.charAt(0)}</div>
                    <div>
                        <span class="author-name" style="font-size:13.5px; font-weight:600;">${authName}</span>
                        <span class="verified-badge" style="display:block;">✓ Verified Contributor</span>
                    </div>
                </div>
                <button class="btn btn-secondary btn-sm" onclick="unfollowAuthorFromDashboard('${authName}')">Unfollow</button>
            `;
            authorsList.appendChild(item);
        });
    }

    // 3. Render Notifications
    const notifyContainer = document.getElementById("notificationsContainer");
    notifyContainer.innerHTML = "";
    state.userNotifications.forEach(n => {
        const item = document.createElement("div");
        item.className = "notification-item";
        item.innerHTML = `
            <span>${n.text}</span>
            <span class="notification-date">${n.date}</span>
        `;
        notifyContainer.appendChild(item);
    });
}

function removeBookmarkFromDashboard(id) {
    state.userBookmarks = state.userBookmarks.filter(b => b !== id);
    
    // Toggle active article bookmark state if it matches
    const targetArt = articles.find(a => a.id === id);
    if (targetArt) targetArt.bookmarked = false;

    renderReaderDashboardData();
}

function unfollowAuthorFromDashboard(name) {
    state.userFollowed = state.userFollowed.filter(f => f !== name);
    renderReaderDashboardData();
}

// --- 8. Author Portfolio Studio ---
function renderAuthorPortfolioData() {
    const grid = document.getElementById("authorPortfolioGrid");
    grid.innerHTML = "";
    
    // Filter articles belonging to Sarah Chen
    const sarahArticles = articles.filter(a => a.author === "Dr. Sarah Chen");
    
    if (sarahArticles.length === 0) {
        grid.innerHTML = `<p style="font-size:13px; color:var(--text-muted); padding:20px; text-align:center;">No published articles found in your portfolio.</p>`;
        return;
    }
    
    sarahArticles.forEach(art => {
        const card = document.createElement("div");
        card.className = "article-card";
        card.onclick = () => openArticleModal(art.id);
        card.innerHTML = `
            <div class="acard-meta">
                <span class="acard-category">${art.category}</span>
                <span class="acard-type">${art.type}</span>
            </div>
            <h3 class="acard-title">${art.title}</h3>
            <p class="acard-summary">${art.summary}</p>
            <div class="acard-footer" style="font-size: 12px; color: var(--text-muted);">
                <span>Views: <strong>${art.likes * 12}</strong></span>
                <span>Revenue: <strong class="green">+$${(art.likes * 2.5).toFixed(2)}</strong></span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- 9. Categories Panel Grid ---
function renderCategoriesGrid() {
    const grid = document.getElementById("categoriesSelectionGrid");
    grid.innerHTML = "";
    
    categoriesDb.forEach(c => {
        const card = document.createElement("div");
        card.className = "category-card";
        card.onclick = () => {
            switchView("feed");
            // Highlight Category tag
            const tags = document.querySelectorAll(".category-tag");
            tags.forEach(tag => {
                if (tag.dataset.category === c.name) {
                    tag.classList.add("active");
                } else {
                    tag.classList.remove("active");
                }
            });
            renderArticlesFeed(c.name);
        };
        
        card.innerHTML = `
            <div class="category-card-icon">${c.icon}</div>
            <span class="category-card-title">${c.name}</span>
            <p class="category-card-desc">${c.desc}</p>
            <span class="category-card-count">${c.count} Articles</span>
        `;
        grid.appendChild(card);
    });
}

// --- 10. Governance Appeal submissions ---
function renderAppealsList() {
    // We render the backlog list in the sidebar if available
    const parent = document.getElementById("governanceAppealForm").parentNode;
    
    // Remove old logs panel if present
    const oldLogs = document.getElementById("appealsLogsContainer");
    if (oldLogs) oldLogs.remove();
    
    const logs = document.createElement("div");
    logs.id = "appealsLogsContainer";
    logs.style.marginTop = "20px";
    logs.style.borderTop = "1px solid var(--border-color)";
    logs.style.paddingTop = "16px";
    
    logs.innerHTML = `<h4>Submitted Appeals Logs</h4>`;
    
    if (state.userAppeals.length === 0) {
        logs.innerHTML += `<p style="font-size:11px; color:var(--text-muted); margin-top:8px;">No pending compliance disputes.</p>`;
    } else {
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.flexDirection = "column";
        wrapper.style.gap = "8px";
        wrapper.style.marginTop = "8px";
        
        state.userAppeals.forEach(ap => {
            wrapper.innerHTML += `
                <div class="appeals-log-card">
                    <span style="font-weight:700; color:var(--warning-color);">${ap.title}</span>
                    <p style="font-size:11.5px; color:var(--text-muted); font-style:italic;">"${ap.reason}"</p>
                    <span style="font-size:10px; color:var(--text-muted);">Status: Vetting Board Vetting</span>
                </div>
            `;
        });
        logs.appendChild(wrapper);
    }
    
    parent.appendChild(logs);
}

function handleAppealFormSubmit(event) {
    event.preventDefault();
    const title = document.getElementById("appealTitle").value.trim();
    const reason = document.getElementById("appealReason").value.trim();
    
    if (title === "" || reason === "") return;
    
    const newAppeal = {
        id: state.userAppeals.length + 1,
        title: title,
        reason: reason
    };
    
    state.userAppeals.push(newAppeal);
    
    // Add to editor's notifications list
    state.userNotifications.unshift({
        id: state.userNotifications.length + 1,
        type: "appeal",
        date: "Just now",
        text: `Submitted moderation dispute on "${title}".`
    });

    document.getElementById("appealTitle").value = "";
    document.getElementById("appealReason").value = "";
    
    renderAppealsList();
    alert(`Appeal regarding "${title}" has been registered in system logs!\nOur compliance officers will review it.`);
}

// --- 11. Articles Feed & Search Renderers ---
function renderArticlesFeed(filteredCategory = "All", searchQuery = "") {
    const grid = document.getElementById("feedArticlesGrid");
    grid.innerHTML = "";
    
    let filtered = articles;
    if (filteredCategory !== "All") {
        filtered = filtered.filter(a => a.category.toLowerCase() === filteredCategory.toLowerCase());
    }
    
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(a => 
            a.title.toLowerCase().includes(query) || 
            a.summary.toLowerCase().includes(query) ||
            a.author.toLowerCase().includes(query) ||
            a.content.toLowerCase().includes(query)
        );
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
                <p>No verified articles found matching the criteria.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(art => {
        const card = document.createElement("div");
        card.className = "article-card";
        card.onclick = () => openArticleModal(art.id);
        
        card.innerHTML = `
            <div class="acard-meta">
                <span class="acard-category">${art.category}</span>
                <span class="acard-type">${art.type}</span>
            </div>
            <h3 class="acard-title">${art.title}</h3>
            <p class="acard-summary">${art.summary}</p>
            <div class="acard-footer">
                <div class="author-chip">
                    <div class="author-avatar">${art.author.charAt(0)}</div>
                    <div class="author-details">
                        <span class="author-name">${art.author}</span>
                        ${art.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
                    </div>
                </div>
                <div class="acard-stats">
                    <span>❤️ ${art.likes}</span>
                    <span>⏱️ ${art.readTime.split(' ')[0]}m</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// --- 12. Detailed Article Modal ---
function openArticleModal(id) {
    const art = articles.find(a => a.id === id);
    if (!art) return;
    
    state.activeArticle = art;
    
    document.getElementById("modalCategory").textContent = art.category;
    document.getElementById("modalTitle").textContent = art.title;
    document.getElementById("modalAvatar").textContent = art.author.charAt(0);
    document.getElementById("modalAuthor").textContent = art.author;
    document.getElementById("modalAuthorRank").textContent = art.authorRank;
    document.getElementById("modalLikeCount").textContent = art.likes;
    
    document.getElementById("modalContent").innerHTML = art.content.split('\n').map(p => {
        if (p.trim().startsWith('•') || p.trim().startsWith('1.')) {
            return `<p style="margin-left: 20px; font-weight: 500;">${p}</p>`;
        }
        return `<p>${p}</p>`;
    }).join('');
    
    // Bookmark and Like active states
    const bookBtn = document.getElementById("modalBookmarkBtn");
    const likeBtn = document.getElementById("modalLikeBtn");
    
    bookBtn.className = "btn-bookmark" + (state.userBookmarks.includes(art.id) ? " active" : "");
    likeBtn.className = "btn-like" + (art.liked ? " active" : "");
    
    document.getElementById("commentsCount").textContent = art.comments.length;
    renderComments(art.comments);
    
    document.getElementById("modalAudioWidget").classList.remove("hidden");
    resetAudioWidgetUI();
    
    renderModalIntegrationsFooter(art);
    document.getElementById("articleModal").classList.remove("hidden");
}

function closeArticleModal() {
    document.getElementById("articleModal").classList.add("hidden");
    stopAudioNarration();
}

function toggleModalBookmark() {
    if (!state.activeArticle) return;
    const art = state.activeArticle;
    
    const exists = state.userBookmarks.includes(art.id);
    if (exists) {
        state.userBookmarks = state.userBookmarks.filter(b => b !== art.id);
    } else {
        state.userBookmarks.push(art.id);
    }
    
    const bookBtn = document.getElementById("modalBookmarkBtn");
    bookBtn.className = "btn-bookmark" + (state.userBookmarks.includes(art.id) ? " active" : "");
    
    // Refresh Reader view data if active
    if (state.currentView === "readerdashboard") {
        renderReaderDashboardData();
    }
}

function toggleModalLike() {
    if (!state.activeArticle) return;
    const art = state.activeArticle;
    art.liked = !art.liked;
    
    if (art.liked) {
        art.likes++;
    } else {
        art.likes--;
    }
    
    document.getElementById("modalLikeCount").textContent = art.likes;
    const likeBtn = document.getElementById("modalLikeBtn");
    likeBtn.className = "btn-like" + (art.liked ? " active" : "");
    
    renderArticlesFeed();
}

function renderComments(commentsList) {
    const list = document.getElementById("modalCommentsList");
    list.innerHTML = "";
    if (commentsList.length === 0) {
        list.innerHTML = `<p style="font-size:12.5px; color:var(--text-muted); text-align:center; padding:12px;">No comments yet. Be the first to start the discussion.</p>`;
        return;
    }
    
    commentsList.forEach(c => {
        const item = document.createElement("div");
        item.className = "comment-item";
        item.innerHTML = `
            <div class="comment-header">
                <span class="commenter-name">${c.name}</span>
                <span class="comment-date">${c.date}</span>
            </div>
            <p class="comment-body">${c.text}</p>
        `;
        list.appendChild(item);
    });
}

function addComment() {
    if (!state.activeArticle) return;
    const input = document.getElementById("newCommentText");
    const val = input.value.trim();
    if (val === "") return;
    
    const commenterName = state.currentRole === "author" ? "Dr. Sarah Chen (Author)" : (state.currentRole === "editor" ? "Editor Vance" : "Markus Green");
    
    const newComment = {
        name: commenterName,
        date: "Just now",
        text: val
    };
    
    state.activeArticle.comments.push(newComment);
    input.value = "";
    
    document.getElementById("commentsCount").textContent = state.activeArticle.comments.length;
    renderComments(state.activeArticle.comments);
}

function renderModalIntegrationsFooter(art) {
    const footer = document.getElementById("modalIntegrationsFooter");
    footer.innerHTML = "";
    
    let hasIntegrations = false;
    
    if (state.integrations.services) {
        hasIntegrations = true;
        const box = document.createElement("div");
        box.className = "widget-box";
        box.innerHTML = `
            <div class="widget-details">
                <span class="widget-logo">💼</span>
                <div>
                    <h5 class="widget-title">Connect with ${art.author}</h5>
                    <p class="widget-desc">Request consulting on topics involving ${art.category} and related operations.</p>
                </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="alert('Routing to scheduling calendar for ${art.author}... (Simulated)')">Book Consultation</button>
        `;
        footer.appendChild(box);
    }
    
    if (state.integrations.mart && (art.category === "Supply Chain" || art.category === "AI" || art.category === "Technology")) {
        hasIntegrations = true;
        const box = document.createElement("div");
        box.className = "widget-box";
        box.innerHTML = `
            <div class="widget-details">
                <span class="widget-logo">🛒</span>
                <div>
                    <h5 class="widget-title">Recommended Procurement Products</h5>
                    <p class="widget-desc">Mentioned Hardware, Telemetry Sensors, and Cloud API listings on MYHitch Mart.</p>
                </div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="alert('Displaying 3 verified hardware modules found in text (Sandbox)...')">Open Mart Links</button>
        `;
        footer.appendChild(box);
    }
    
    if (state.integrations.travel && art.category === "Travel") {
        hasIntegrations = true;
        const box = document.createElement("div");
        box.className = "widget-box";
        box.innerHTML = `
            <div class="widget-details">
                <span class="widget-logo">✈️</span>
                <div>
                    <h5 class="widget-title">JetNRest SAF Travel Search</h5>
                    <p class="widget-desc">Search carbon-offset airline bookings directly to author's research hubs.</p>
                </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="alert('Launching flight lookup modal (Simulated SAF paths)...')">Compare SAF Flights</button>
        `;
        footer.appendChild(box);
    }
    
    if (state.integrations.events && art.category === "Supply Chain") {
        hasIntegrations = true;
        const box = document.createElement("div");
        box.className = "widget-box";
        box.innerHTML = `
            <div class="widget-details">
                <span class="widget-logo">🎟️</span>
                <div>
                    <h5 class="widget-title">Global Supply Chain Summit 2026</h5>
                    <p class="widget-desc">Dr. Sarah Chen is a keynote speaker. Register for pass tickets.</p>
                </div>
            </div>
            <button class="btn btn-primary btn-sm" onclick="alert('Pass checkout opened! Ticket pricing: $250. (Simulated)')">Buy Pass Ticket</button>
        `;
        footer.appendChild(box);
    }

    if (state.integrations.donations) {
        hasIntegrations = true;
        const box = document.createElement("div");
        box.className = "widget-box";
        box.innerHTML = `
            <div class="widget-details">
                <span class="widget-logo">❤️</span>
                <div>
                    <h5 class="widget-title">Support ${art.author}'s Research</h5>
                    <p class="widget-desc">Send micro-grants directly via securely connected wallets.</p>
                </div>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="alert('Connecting web3 wallet gateway... (Simulated)')">Send Micro-grant</button>
        `;
        footer.appendChild(box);
    }

    if (!hasIntegrations) {
        footer.style.display = "none";
    } else {
        footer.style.display = "flex";
    }
}

// --- 13. Audio Voice Narration Simulation ---
function resetAudioWidgetUI() {
    state.audioPlaying = false;
    state.audioProgressPercent = 0;
    const playBtn = document.getElementById("audioPlayBtn");
    if (playBtn) playBtn.textContent = "▶ Play AI Voice Narration";
    document.getElementById("audioProgressBar").style.width = "0%";
    const timeEl = document.querySelector(".audio-time");
    if (timeEl) timeEl.textContent = "0:00 / 2:34";
}

function toggleAudioNarration() {
    const playBtn = document.getElementById("audioPlayBtn");
    const timeEl = document.querySelector(".audio-time");
    
    if (state.audioPlaying) {
        stopAudioNarration();
    } else {
        state.audioPlaying = true;
        if (playBtn) playBtn.textContent = "⏸ Pause AI Voice Narration";
        
        state.audioProgressInterval = setInterval(() => {
            state.audioProgressPercent += 2;
            document.getElementById("audioProgressBar").style.width = state.audioProgressPercent + "%";
            
            const totalDurationSecs = 154; // 2m 34s
            const currentSecs = Math.floor((state.audioProgressPercent / 100) * totalDurationSecs);
            const m = Math.floor(currentSecs / 60);
            const s = currentSecs % 60;
            if (timeEl) timeEl.textContent = `${m}:${s < 10 ? '0' : ''}${s} / 2:34`;
            
            if (state.audioProgressPercent >= 100) {
                stopAudioNarration();
                resetAudioWidgetUI();
            }
        }, 300);
    }
}

function stopAudioNarration() {
    state.audioPlaying = false;
    clearInterval(state.audioProgressInterval);
    const playBtn = document.getElementById("audioPlayBtn");
    if (playBtn) playBtn.textContent = "▶ Play AI Voice Narration";
}

// --- 14. Editor / AI Assistant Tools ---
function runAiCheck() {
    const panel = document.getElementById("aiOutputPanel");
    panel.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary-color);">
            <svg class="logo-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>
            <p style="margin-top:12px; font-size:12px;">AI is scanning document patterns...</p>
        </div>
    `;
    
    setTimeout(() => {
        panel.innerHTML = `
            <div style="font-size:12.5px;">
                <h5 class="green" style="margin-bottom:8px;">🛡️ AI Verification Assessment Passed</h5>
                <p style="margin-bottom:6px;"><strong>Plagiarism Scan:</strong> 99.4% Unique content (0.6% standard technical phrases matched).</p>
                <p style="margin-bottom:6px;"><strong>Grammar & Style:</strong> 0 alerts. Readability rating fits target demographics.</p>
                <p><strong>Copyright Check:</strong> Verified unique arguments. Ready for editorial review.</p>
            </div>
        `;
        document.getElementById("plagiarismScore").textContent = "99.4%";
        document.getElementById("plagiarismScore").className = "stat-val green";
    }, 1500);
}

function generateAiSummary() {
    const text = document.getElementById("articleContent").value;
    const panel = document.getElementById("aiOutputPanel");
    
    panel.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary-color);">
            <svg class="logo-icon" style="animation: spin 1.2s linear infinite;" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>
            <p style="margin-top:12px; font-size:12px;">AI summarizing draft body...</p>
        </div>
    `;

    setTimeout(() => {
        panel.innerHTML = `
            <div style="font-size:12.5px;">
                <h5 style="color:var(--primary-color); margin-bottom:8px;">📝 AI Generated Abstract Summary</h5>
                <p style="font-style: italic; background-color:var(--bg-secondary); padding:8px; border-radius:6px; border:1px solid var(--border-color); margin-bottom:10px;">
                    "This paper reviews key transformations inside modern logistics corridors, discussing forecasting networks, risk indexing, and carbon emission reductions."
                </p>
                <button class="btn btn-secondary btn-sm" onclick="alert('Abstract applied as article description metadata (Simulated).')">Apply as Metadata</button>
            </div>
        `;
    }, 1200);
}

function optimizeSeo() {
    const panel = document.getElementById("aiOutputPanel");
    panel.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary-color);">
            <svg class="logo-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>
            <p style="margin-top:12px; font-size:12px;">AI executing semantic search analysis...</p>
        </div>
    `;

    setTimeout(() => {
        panel.innerHTML = `
            <div style="font-size:12.5px;">
                <h5 class="green" style="margin-bottom:8px;">📈 SEO Analytics Optimization</h5>
                <p style="margin-bottom:6px;"><strong>Suggested Title:</strong> "Leveraging Predictive AI in Global Supply Chain Clusters" (increases search index rating by +18%)</p>
                <p style="margin-bottom:8px;"><strong>Recommended Keywords tags:</strong> <span class="badge badge-accent">AI Logistics</span> <span class="badge badge-accent">Supply Chain</span> <span class="badge badge-accent">Neural Networks</span></p>
                <p><strong>Readability Index:</strong> 85/100 (Excellent for Executive teams).</p>
            </div>
        `;
        document.getElementById("seoRating").textContent = "A+";
        document.getElementById("seoRating").className = "stat-val green";
    }, 1300);
}

function runAiTranslation() {
    const panel = document.getElementById("aiOutputPanel");
    panel.innerHTML = `
        <div style="font-size:12.5px;">
            <h5 style="color:var(--accent-color); margin-bottom:12px;">🌐 Translate Document Draft</h5>
            <div class="form-group">
                <label>Target Language</label>
                <select class="form-control-sm" id="translateLangSelector">
                    <option value="es">Spanish (Español)</option>
                    <option value="fr">French (Français)</option>
                    <option value="de">German (Deutsch)</option>
                    <option value="zh">Chinese (中文)</option>
                </select>
            </div>
            <button class="btn btn-primary btn-sm" onclick="executeTranslationAction()">Translate Now</button>
        </div>
    `;
}

function executeTranslationAction() {
    const sel = document.getElementById("translateLangSelector");
    const lang = sel.options[sel.selectedIndex].text;
    const panel = document.getElementById("aiOutputPanel");
    
    panel.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary-color);">
            <svg class="logo-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>
            <p style="margin-top:12px; font-size:12px;">Translating entire corpus into ${lang}...</p>
        </div>
    `;

    setTimeout(() => {
        panel.innerHTML = `
            <div style="font-size:12.5px;">
                <h5 class="green" style="margin-bottom:8px;">🌐 Draft Translation Completed</h5>
                <p style="margin-bottom:8px; font-style:italic; font-size:12px; padding:6px; background-color:var(--bg-secondary); border-radius:4px; border:1px solid var(--border-color);">
                    "Las operaciones logísticas globales están experimentando un cambio estructural sin precedentes..."
                </p>
                <p style="color:var(--text-muted);">Simulated translation output has been compiled. You can attach this translation variant to your publication options.</p>
            </div>
        `;
    }, 1500);
}

function generateVoiceNarration() {
    const panel = document.getElementById("aiOutputPanel");
    panel.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary-color);">
            <svg class="logo-icon" style="animation: spin 1s linear infinite;" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/></svg>
            <p style="margin-top:12px; font-size:12px;">AI voice synthesis is generating audio variant...</p>
        </div>
    `;

    setTimeout(() => {
        panel.innerHTML = `
            <div style="font-size:12.5px;">
                <h5 class="green" style="margin-bottom:8px;">🗣️ AI Voice Narration Generated</h5>
                <p style="margin-bottom:10px;">Audio waveform synthesized successfully using <strong>Neural Voice: Male Accent 2</strong>.</p>
                <div class="audio-narration-widget" style="margin-bottom:0;">
                    <div class="audio-controls">
                        <button class="btn-audio-play" style="background-color:var(--success-color);" onclick="alert('Synthesized preview play back triggered! (Simulated)')">▶ Play Preview</button>
                        <span class="audio-time">0:00 / 2:34</span>
                    </div>
                </div>
            </div>
        `;
    }, 1400);
}

function saveDraft() {
    const title = document.getElementById("articleTitle").value;
    const badge = document.getElementById("draftStatusBadge");
    
    badge.textContent = "Saving...";
    badge.className = "status-indicator yellow";
    
    setTimeout(() => {
        badge.textContent = "Draft Saved";
        alert(`"${title}" saved successfully to author drafts list.`);
    }, 800);
}

function submitToWorkflow() {
    const title = document.getElementById("articleTitle").value;
    const body = document.getElementById("articleContent").value;
    const category = document.getElementById("articleCategory").value;
    const type = document.getElementById("articleType").value;
    
    if (title.trim() === "" || body.trim() === "") {
        alert("Please enter a title and content for your article.");
        return;
    }
    
    const newSubmission = {
        id: "rev-" + (reviewQueue.length + 3),
        title: title,
        author: state.currentRole === "author" ? "Dr. Sarah Chen" : "Anonymous Expert",
        authorRank: "Silver Contributor",
        category: category,
        type: type,
        submittedDate: "2026-07-20 " + new Date().toTimeString().split(' ')[0].substring(0, 5),
        aiScore: Math.floor(Math.random() * 15) + 85,
        plagiarism: "0.2% detected",
        readability: "Good (Flesch: 68)",
        sentiment: "Highly Informative",
        content: body
    };
    
    reviewQueue.push(newSubmission);
    updateQueueBadgeCount();
    
    alert(`"${title}" submitted successfully for Editorial Review!\nYou can verify it in the "Editorial Queue" tab.`);
    
    document.getElementById("articleTitle").value = "";
    document.getElementById("articleContent").value = "";
    
    document.getElementById("aiOutputPanel").innerHTML = `
        <div class="ai-placeholder">
            <p>Select an AI task from the panel above to run optimizations on your draft.</p>
        </div>
    `;
    document.getElementById("plagiarismScore").textContent = "--";
    document.getElementById("seoRating").textContent = "--";
}

// --- 15. Editorial Queue Moderation ---
function renderEditorialQueue() {
    const list = document.getElementById("editorialQueueList");
    list.innerHTML = "";
    
    if (reviewQueue.length === 0) {
        list.innerHTML = `<p style="font-size:13px; color:var(--text-muted); text-align:center; padding:32px;">No articles currently pending review.</p>`;
        document.getElementById("reviewDetailPanel").innerHTML = `
            <div class="empty-review-state">
                <p>All clear! There are no submissions pending moderation.</p>
            </div>
        `;
        return;
    }
    
    reviewQueue.forEach(item => {
        const row = document.createElement("div");
        row.className = "queue-item";
        row.id = "qitem-" + item.id;
        row.onclick = () => selectEditorialQueueItem(item.id);
        
        row.innerHTML = `
            <div class="q-meta">
                <span>${item.category} • ${item.type}</span>
                <span>${item.submittedDate.split(' ')[1]}</span>
            </div>
            <div class="q-title">${item.title}</div>
            <div class="q-footer">
                <span>By ${item.author}</span>
                <span class="ai-score-badge ${item.aiScore > 90 ? 'excellent' : ''}">AI Score: ${item.aiScore}</span>
            </div>
        `;
        list.appendChild(row);
    });
}

function selectEditorialQueueItem(id) {
    const item = reviewQueue.find(q => q.id === id);
    if (!item) return;
    
    const allItems = document.querySelectorAll(".queue-item");
    allItems.forEach(i => i.classList.remove("active"));
    document.getElementById("qitem-" + id).classList.add("active");
    
    const detailPanel = document.getElementById("reviewDetailPanel");
    detailPanel.innerHTML = `
        <div class="review-details">
            <h3 class="review-doc-title">${item.title}</h3>
            
            <div class="review-meta-bar">
                <span>👤 <strong>Author:</strong> ${item.author} (${item.authorRank})</span>
                <span>📅 <strong>Submitted:</strong> ${item.submittedDate}</span>
                <span>📂 <strong>Category:</strong> ${item.category}</span>
            </div>

            <div class="review-text-preview">${item.content}</div>

            <div class="ai-quality-report-card">
                <h4>🤖 AI Automated Review Report</h4>
                <div class="ai-checks-list">
                    <div class="check-item">
                        <span>Grammar & Plagiarism validation:</span>
                        <span class="green">✓ Passed (${item.plagiarism})</span>
                    </div>
                    <div class="check-item">
                        <span>Readability Rating:</span>
                        <span>${item.readability}</span>
                    </div>
                    <div class="check-item">
                        <span>Sentiment Profile:</span>
                        <span>${item.sentiment}</span>
                    </div>
                    <div class="check-item">
                        <span>Dynamic AI Quality Score:</span>
                        <span class="green" style="font-weight:700;">${item.aiScore}/100</span>
                    </div>
                </div>
            </div>

            <div class="moderator-decision-zone">
                <div class="form-group">
                    <label>Moderator Comments / Revision Feedback</label>
                    <textarea class="form-control feedback-textbox" id="reviewFeedbackText" rows="2" placeholder="Provide guidelines or required revisions for the author..."></textarea>
                </div>
                
                <div class="form-row" style="margin-bottom: 20px;">
                    <div class="form-group col-6">
                        <label>Assign Editor</label>
                        <select class="form-control-sm" id="editorAssignee">
                            <option>Editor Sarah Vance</option>
                            <option>Assoc. Editor Alex Rostova</option>
                            <option>Mod Team Auto</option>
                        </select>
                    </div>
                    <div class="form-group col-6">
                        <label>Schedule Publication Date</label>
                        <input type="datetime-local" class="form-control-sm" id="pubScheduleDate" value="2026-07-21T10:00">
                    </div>
                </div>

                <div class="decision-actions">
                    <button class="btn btn-primary" onclick="approveAndPublish('${item.id}')">Approve & Publish</button>
                    <button class="btn btn-secondary" onclick="requestRevisions('${item.id}')">Request Revisions</button>
                    <button class="btn btn-secondary" style="color:var(--danger-color); border-color:rgba(239,68,68,0.2);" onclick="rejectSubmission('${item.id}')">Reject</button>
                </div>
            </div>
        </div>
    `;
}

function approveAndPublish(id) {
    const index = reviewQueue.findIndex(q => q.id === id);
    if (index === -1) return;
    
    const item = reviewQueue[index];
    const schedule = document.getElementById("pubScheduleDate").value;
    
    const newPublished = {
        id: "art-" + (articles.length + 1),
        title: item.title,
        category: item.category,
        type: item.type,
        readTime: Math.ceil(item.content.split(' ').length / 150) + " min read",
        summary: item.content.substring(0, 140) + "...",
        content: item.content,
        author: item.author,
        authorRank: item.authorRank,
        likes: 0,
        bookmarks: 0,
        comments: [],
        verified: true,
        date: schedule.split('T')[0]
    };
    
    articles.unshift(newPublished);
    reviewQueue.splice(index, 1);
    
    updateQueueBadgeCount();
    renderEditorialQueue();
    
    alert(`"${item.title}" approved and scheduled to be published!`);
}

function requestRevisions(id) {
    const index = reviewQueue.findIndex(q => q.id === id);
    if (index === -1) return;
    
    const item = reviewQueue[index];
    const feedback = document.getElementById("reviewFeedbackText").value;
    
    if (feedback.trim() === "") {
        alert("Please provide revision feedback for the author before requesting changes.");
        return;
    }
    
    reviewQueue.splice(index, 1);
    updateQueueBadgeCount();
    renderEditorialQueue();
    
    alert(`Revisions requested for "${item.title}". Sent feedback:\n"${feedback}"`);
}

function rejectSubmission(id) {
    const index = reviewQueue.findIndex(q => q.id === id);
    if (index === -1) return;
    
    const item = reviewQueue[index];
    if (confirm(`Are you sure you want to REJECT the submission: "${item.title}"?`)) {
        reviewQueue.splice(index, 1);
        updateQueueBadgeCount();
        renderEditorialQueue();
        alert(`"${item.title}" has been rejected and removed from queue.`);
    }
}

// --- 16. Integrations & File Upload Init ---
function initIntegrationsToggles() {
    const keys = ["mart", "services", "travel", "events", "donations", "videos"];
    keys.forEach(k => {
        const id = "integrate" + k.charAt(0).toUpperCase() + k.slice(1);
        const el = document.getElementById(id);
        if (el) {
            el.checked = state.integrations[k];
            el.addEventListener("change", (e) => {
                state.integrations[k] = e.target.checked;
            });
        }
    });
}

function initFileInput() {
    const dropzone = document.getElementById("fileDropZone");
    const fileInput = document.getElementById("articleFileInput");
    
    if (dropzone && fileInput) {
        dropzone.addEventListener("click", () => {
            fileInput.click();
        });
        
        fileInput.addEventListener("change", (e) => {
            handleUploadedFiles(e.target.files);
        });
        
        dropzone.addEventListener("dragover", (e) => {
            e.preventDefault();
            dropzone.style.borderColor = "var(--primary-color)";
        });
        
        dropzone.addEventListener("dragleave", () => {
            dropzone.style.borderColor = "var(--border-color)";
        });
        
        dropzone.addEventListener("drop", (e) => {
            e.preventDefault();
            dropzone.style.borderColor = "var(--border-color)";
            handleUploadedFiles(e.dataTransfer.files);
        });
    }
}

function handleUploadedFiles(files) {
    if (files.length === 0) return;
    const file = files[0];
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.')) || file.name;
    const formattedTitle = nameWithoutExt.split('_').join(' ').split('-').join(' ')
        .replace(/\b\w/g, c => c.toUpperCase());
        
    document.getElementById("articleTitle").value = formattedTitle;
    
    const textContent = document.getElementById("articleContent");
    textContent.value = `[PARSED DOCUMENT: ${file.name}]
Document Abstract parsed successfully from uploaded researcher portfolio resources.

Topic: ${formattedTitle}
Review metrics:
• Primary Author matches authenticated profile credentials.
• References parsed and validated against database index.

Key findings are detailed here. Write further sections or trigger the AI Writing Assistant tools (Grammar, SEO, Plagiarism, Summaries) in the right panel to optimize the draft layout.`;

    const wordCount = document.getElementById("wordCount");
    const readTime = document.getElementById("readingTime");
    
    const words = textContent.value.split(/\s+/).filter(w => w !== "").length;
    wordCount.textContent = words;
    readTime.textContent = Math.ceil(words / 150) + " min";
    
    alert(`Successfully parsed file "${file.name}"!\nHeadline and body draft have been auto-populated.`);
}

function initEditorStatsMonitor() {
    const text = document.getElementById("articleContent");
    if (text) {
        text.addEventListener("input", (e) => {
            const val = e.target.value;
            const words = val.trim().split(/\s+/).filter(w => w !== "").length;
            document.getElementById("wordCount").textContent = words;
            document.getElementById("readingTime").textContent = Math.max(1, Math.ceil(words / 150)) + " min";
        });
    }
}

// --- 17. System Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Button actions
    const themeBtn = document.getElementById("themeToggleBtn");
    const portalThemeBtn = document.getElementById("portalThemeToggleBtn");
    
    if (themeBtn) themeBtn.addEventListener("click", () => toggleTheme());
    if (portalThemeBtn) portalThemeBtn.addEventListener("click", () => toggleTheme());
    
    // 2. Role Switch listener
    const selector = document.getElementById("roleSelector");
    if (selector) {
        selector.addEventListener("change", (e) => {
            updateUserRoleContext(e.target.value);
        });
    }
    
    // 3. Search filter in feed
    const search = document.getElementById("feedSearchInput");
    if (search) {
        search.addEventListener("input", (e) => {
            const activeCategory = document.querySelector(".category-tag.active")?.dataset.category || "All";
            renderArticlesFeed(activeCategory, e.target.value);
        });
    }
    
    // 4. Category Tags listeners
    const categoryTags = document.querySelectorAll(".category-tag");
    categoryTags.forEach(tag => {
        tag.addEventListener("click", (e) => {
            categoryTags.forEach(t => t.classList.remove("active"));
            tag.classList.add("active");
            
            const cat = tag.dataset.category;
            const query = document.getElementById("feedSearchInput")?.value || "";
            renderArticlesFeed(cat, query);
        });
    });

    // 5. Contact Form Handler (Landing Page)
    const contactForm = document.getElementById("landingContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("contactName").value;
            const email = document.getElementById("contactEmail").value;
            alert(`Thank you, ${name}!\nYour message has been received. We will contact you at ${email} shortly.`);
            contactForm.reset();
        });
    }

    // 6. Appeals Form Handler (Governance View)
    const appealForm = document.getElementById("governanceAppealForm");
    if (appealForm) {
        appealForm.addEventListener("submit", (e) => {
            handleAppealFormSubmit(e);
        });
    }
    
    // 7. Initializers
    initIntegrationsToggles();
    initFileInput();
    initEditorStatsMonitor();
    
    // Load initial listings
    renderArticlesFeed();
    renderCategoriesGrid();
});
