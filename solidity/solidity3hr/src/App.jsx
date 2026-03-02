import { useState } from "react";

const C = {
  bg: "#07070f",
  card: "#0d0d1a",
  card2: "#111120",
  border: "#1e1e2e",
  green: "#00ff9d",
  cyan: "#00cfff",
  orange: "#ff6b35",
  purple: "#c77dff",
  white: "#e8e8f0",
  gray: "#888899",
  dim: "#444455",
};

const months = [
  {
    id: 1, label: "Month 1", color: C.green,
    subtitle: "Foundations & Solidity Basics",
    overview: "Blockchain theory se shuru karke apna pehla ERC20 token Sepolia pe deploy karo.",
    weeks: [
      {
        week: "Week 1", days: "Days 1–7",
        topic: "Pre-Solidity: Blockchain & Ethereum Basics",
        tasks: [
          "Blockchain kya hai? Blocks, Chains, Nodes, Consensus mechanism samjho",
          "Ethereum kya hai? EVM (Ethereum Virtual Machine) ka concept",
          "Wallets, Private/Public Keys, Gas & Gas Fees — in depth",
          "Transactions lifecycle, Smart Contracts ka high-level overview",
          "MetaMask install karo, Sepolia Testnet ETH lo (sepoliafaucet.com)",
          "Resource: ethereum.org/en/developers/docs (completely free)",
        ],
        daily: [
          { hr: "HR 1", task: "Theory padho — ethereum.org docs, ek concept daily finish karo" },
          { hr: "HR 2", task: "Notes banao + diagrams — EVM ka flow diagram khud draw karo" },
          { hr: "HR 3", task: "CryptoZombies Chapter 1 shuru karo — cryptozombies.io" },
        ],
        goal: "MetaMask ready, Testnet ETH mila, EVM basics clear",
      },
      {
        week: "Week 2", days: "Days 8–14",
        topic: "Solidity Syntax — Variables, Types, Functions",
        tasks: [
          "Solidity version pragma, SPDX license identifier samjho",
          "Data types: uint, int, bool, address, bytes, string — sab practice karo",
          "State variables vs Local variables — storage mein difference",
          "Functions: public, private, internal, external visibility modifiers",
          "View & Pure functions — kab use karte hain, kyon",
          "Remix IDE pe pehla 'Hello World' contract deploy karo Sepolia pe",
        ],
        daily: [
          { hr: "HR 1", task: "Cyfrin Updraft course watch karo — updraft.cyfrin.io (FREE)" },
          { hr: "HR 2", task: "Remix IDE pe har concept ka chhota contract banao" },
          { hr: "HR 3", task: "CryptoZombies continue + Speedrun Ethereum try karo" },
        ],
        goal: "Remix pe independently contract likh ke deploy kar sako",
      },
      {
        week: "Week 3", days: "Days 15–21",
        topic: "Mappings, Structs, Arrays, Events",
        tasks: [
          "Structs define karna aur complex data model banana",
          "Arrays: dynamic & fixed, push() / pop() / length operations",
          "Mappings: basic (address => uint) aur nested mappings",
          "Events & emit — blockchain pe logging kaise kaam karti hai",
          "Constructor function — deployment pe ek baar chalti hai",
          "msg.sender, msg.value — BOHOT important global variables",
          "Practice Project: Simple Voting contract banao",
        ],
        daily: [
          { hr: "HR 1", task: "Concepts padho + official Solidity docs (docs.soliditylang.org)" },
          { hr: "HR 2", task: "Remix pe coding practice — har example khud likho, copy-paste mat karo" },
          { hr: "HR 3", task: "CryptoZombies Chapter 2-3 complete karo" },
        ],
        goal: "Voting ya simple storage contract independently banana",
      },
      {
        week: "Week 4", days: "Days 22–30",
        topic: "Inheritance, Interfaces, Libraries",
        tasks: [
          "Contract Inheritance: 'is' keyword use karna, parent functions call karna",
          "Override & Virtual functions — polymorphism in Solidity",
          "Interfaces kya hote hain aur kab use karte hain (external contracts ke saath)",
          "Abstract contracts — partial implementation",
          "Libraries: using X for Y pattern, SafeMath library",
          "OpenZeppelin GitHub explore karo — ERC20.sol, ERC721.sol padho",
          "Final Project: ERC20 Token deploy karo Sepolia pe aur verify karo Etherscan pe",
        ],
        daily: [
          { hr: "HR 1", task: "OpenZeppelin docs padho — docs.openzeppelin.com" },
          { hr: "HR 2", task: "ERC20 token project build karo step by step" },
          { hr: "HR 3", task: "GitHub pe push karo, README likho — yahi portfolio ban raha hai!" },
        ],
        goal: "Verified ERC20 Token on Sepolia Etherscan — pehla real project!",
      },
    ],
  },
  {
    id: 2, label: "Month 2", color: C.cyan,
    subtitle: "Intermediate Solidity + Security Mindset",
    overview: "Gas optimization seekho, pehle vulnerabilities samjho, Ethernaut solve karo, aur Foundry se testing shuru karo.",
    weeks: [
      {
        week: "Week 5", days: "Days 31–37",
        topic: "Modifiers, Error Handling, Gas Optimization",
        tasks: [
          "require(), revert(), assert() — kab kya use karte hain, differences",
          "Custom Errors (Solidity 0.8+) — string error se 10x gas cheap hote hain",
          "Function modifiers: onlyOwner, nonReentrant pattern banana",
          "Unchecked blocks — overflow check skip karke gas save karo (safely)",
          "Storage vs Memory vs Calldata — MOST IMPORTANT concept for gas",
          "Packing variables: uint128 + uint128 = 1 slot trick",
          "Gas estimation Remix pe dekhna — estimate karna seekho",
        ],
        daily: [
          { hr: "HR 1", task: "Concepts + gas optimization patterns padho" },
          { hr: "HR 2", task: "Purane contracts refactor karo — modifiers add karo, gas optimize karo" },
          { hr: "HR 3", task: "Before/after gas comparison test karo Remix pe" },
        ],
        goal: "Gas-optimized contract banana + custom errors implement karna",
      },
      {
        week: "Week 6", days: "Days 38–44",
        topic: "Common Vulnerabilities — Security Basics",
        tasks: [
          "Reentrancy Attack — kya hai, famous DAO hack (2016) case study",
          "Integer Overflow/Underflow — pre-0.8 vs post-0.8 Solidity difference",
          "tx.origin vs msg.sender — phishing attack vector samjho",
          "Selfdestruct vulnerability — force-send ETH attack",
          "Access Control issues — missing onlyOwner, privilege escalation",
          "Checks-Effects-Interactions pattern — gold standard, hamesha follow karo",
          "Resource: SWC Registry — smartcontract.codes/swc (bookmark karo!)",
        ],
        daily: [
          { hr: "HR 1", task: "Ek vulnerability deeply padho + real hack case study dekho (rekt.news)" },
          { hr: "HR 2", task: "Intentionally vulnerable contract banao, phir khud fix karo" },
          { hr: "HR 3", task: "Ethernaut Level 0 (Hello Ethernaut) aur Level 1 (Fallback) start karo" },
        ],
        goal: "Top 5 vulnerabilities explain kar sako + Ethernaut Level 1-3 done",
      },
      {
        week: "Week 7", days: "Days 45–51",
        topic: "Ethernaut Challenges — Security CTF",
        tasks: [
          "Level 0: Hello Ethernaut (setup practice)",
          "Level 1: Fallback (fallback function vulnerability)",
          "Level 2: Fallout (constructor naming bug — old Solidity)",
          "Level 3: Coin Flip (on-chain randomness attack)",
          "Level 4: Telephone (tx.origin vs msg.sender)",
          "Level 5: Token (integer overflow)",
          "Level 6: Delegation (delegatecall vulnerability)",
          "Level 7: Force (selfdestruct force-send)",
          "Level 8: Vault (private variable not truly private)",
          "Har level ka writeup Notion/GitHub pe likho — interview gold hai yeh",
        ],
        daily: [
          { hr: "HR 1.5", task: "1-2 Ethernaut levels solve karo (browser console use karo)" },
          { hr: "HR 1", task: "Solution samjho, root cause analyze karo, notes banao" },
          { hr: "HR 30m", task: "Writeup likho — title, vulnerability, exploit, fix" },
        ],
        goal: "Ethernaut Level 0-8 complete + 8 writeups GitHub pe",
      },
      {
        week: "Week 8", days: "Days 52–60",
        topic: "Foundry Setup + Professional Testing",
        tasks: [
          "Foundry install karo: curl -L foundry.paradigm.xyz | bash",
          "forge init, forge build, forge test — basic commands",
          "Test file structure: test/ folder, .t.sol extension",
          "setUp() function — state initialize karna har test se pehle",
          "vm.prank(address) — msg.sender change karna tests mein",
          "vm.deal(address, amount) — ETH balance set karna",
          "vm.expectRevert() — revert test karna",
          "Fuzz testing basics — forge test mein random inputs",
          "forge coverage — code coverage report banana",
          "Apne ERC20 token ka complete test suite 80%+ coverage ke saath likho",
        ],
        daily: [
          { hr: "HR 1", task: "Foundry docs padho — book.getfoundry.sh (ek chapter daily)" },
          { hr: "HR 2", task: "Previous contracts ke tests likho — min 5 tests per contract" },
        ],
        goal: "ERC20 token ka 80%+ coverage test suite Foundry mein",
      },
    ],
  },
  {
    id: 3, label: "Month 3", color: C.orange,
    subtitle: "Advanced Security + Audit Skills",
    overview: "Advanced attack vectors, DeFi architecture, auditing process seekho aur pehla mock audit complete karo.",
    weeks: [
      {
        week: "Week 9", days: "Days 61–67",
        topic: "Advanced Vulnerabilities Deep Dive",
        tasks: [
          "Flash Loan attacks — mechanism deeply samjho, Aave flash loan example",
          "Oracle Manipulation — Chainlink (safe) vs AMM spot price oracle (unsafe)",
          "Price Oracle attacks — TWAP vs spot price, real hack examples",
          "Front-running & MEV — mempool mein transactions dekh ke exploit karna",
          "Signature Replay attacks — nonce ki importance",
          "Proxy Pattern vulnerabilities — delegatecall ka dangerous use",
          "Storage Collision in proxies — EIP-1967 standard kyon aaya",
          "Damn Vulnerable DeFi Level 1-5 shuru karo — damnvulnerabledefi.xyz",
        ],
        daily: [
          { hr: "HR 1", task: "Attack vector theory padho + real hack post-mortem (rekt.news)" },
          { hr: "HR 2", task: "Damn Vulnerable DeFi solve karo — Foundry environment mein" },
        ],
        goal: "Flash loan + oracle attack mechanism explain + DVDF Level 1-5 done",
      },
      {
        week: "Week 10", days: "Days 68–74",
        topic: "DeFi Protocol Architecture",
        tasks: [
          "AMM kaise kaam karta hai — x*y=k formula, Uniswap V2 core",
          "Uniswap V2: UniswapV2Pair.sol GitHub pe padho (swap, mint, burn functions)",
          "Lending protocol mechanics — collateral, liquidation, health factor (Aave)",
          "Yield farming aur reward distribution patterns",
          "ERC4626 Tokenized Vault standard — modern yield protocol pattern",
          "Price impact aur slippage calculations — important for audit",
          "Impermanent loss kya hota hai — LP provider ke liye risk",
        ],
        daily: [
          { hr: "HR 1", task: "Protocol whitepaper ya docs padho" },
          { hr: "HR 1", task: "GitHub pe actual contract code read karo — comments padho" },
          { hr: "HR 1", task: "Notes + architecture diagram banao — flow samjho" },
        ],
        goal: "Uniswap V2 ka swap() function line-by-line explain kar sako",
      },
      {
        week: "Week 11", days: "Days 75–81",
        topic: "Smart Contract Auditing Process",
        tasks: [
          "Audit phases: Scoping → Architecture Review → Code Analysis → Reporting",
          "Scoping: nSLOC count, complexity, attack surface identify karna",
          "Manual review: top-down (architecture) + bottom-up (function-level)",
          "Slither install: pip install slither-analyzer, run on any contract",
          "Mythril install aur basic vulnerability scan karna",
          "Finding categories: Critical, High, Medium, Low, Informational, Gas",
          "Severity classification — likelihood x impact matrix",
          "Cyfrin public audit reports padho: github.com/Cyfrin/cyfrin-audit-reports",
          "Code4rena public reports padho — atleast 2-3 reports completely",
        ],
        daily: [
          { hr: "HR 1", task: "Auditing methodology padho + ek public audit report completely padho" },
          { hr: "HR 1", task: "Slither aur Mythril apne contracts pe run karo, findings analyze karo" },
          { hr: "HR 1", task: "Ek finding ka professional report format mein document karo" },
        ],
        goal: "Slither use kar sako + professional finding report likh sako",
      },
      {
        week: "Week 12", days: "Days 82–90",
        topic: "Mock Audit — First Full Audit Practice",
        tasks: [
          "CodeHawks First Flights join karo — codehawks.com/first-flights (beginner audits!)",
          "Ek chhota protocol choose karo, 3 din mein complete audit karo",
          "Architecture review — inheritance tree, external calls map karo",
          "Function-by-function analysis — har function ka expected behavior note karo",
          "Finding format: Title, Severity, Description, Impact, Proof of Concept, Recommendation",
          "Foundry mein PoC (Proof of Concept) test likho — findings validate karo",
          "Final report markdown mein likho — executive summary bhi daalo",
          "Community ke findings se apna compare karo — seekho kya miss kiya",
        ],
        daily: [
          { hr: "HR 2", task: "Audit practice — CodeHawks First Flight ya chhota protocol" },
          { hr: "HR 1", task: "PoC Foundry test likho + professional markdown report banao" },
        ],
        goal: "Ek complete audit report with PoC tests — GitHub pe public karo!",
      },
    ],
  },
  {
    id: 4, label: "Month 4", color: C.purple,
    subtitle: "Competitive Auditing — Go Live!",
    overview: "Real platforms pe register karo, live contests join karo, Hacken Proof pe bounties submit karo aur earning shuru karo.",
    weeks: [
      {
        week: "Week 13", days: "Days 91–97",
        topic: "Platform Onboarding + Profile Setup",
        tasks: [
          "Code4rena profile banao — code4rena.com (main competitive platform)",
          "CodeHawks (Cyfrin) profile banao — First Flights se start karo",
          "Sherlock profile banao — sherlock.xyz",
          "Hacken Proof pe register karo — hackenproof.com (TERA TARGET PLATFORM!)",
          "Immunefi profile dekho — immunefi.com (future big bounties ke liye)",
          "GitHub portfolio polish karo: pinned repos, clean READMEs, all projects",
          "Twitter/X security community join karo: @pcaversaccio, @pashovkrum, @0xOwenThurm, @bytes032",
          "Discord join karo: CodeHawks, Code4rena, Cyfrin (active raho!)",
        ],
        daily: [
          { hr: "HR 1", task: "Platform setup + profile complete karo + community mein introduce yourself" },
          { hr: "HR 2", task: "Pehla active CodeHawks First Flight contest join karo aur audit karo" },
        ],
        goal: "Sab platforms pe active profile + pehla contest submission",
      },
      {
        week: "Week 14", days: "Days 98–104",
        topic: "Active Contest Participation",
        tasks: [
          "Code4rena ya CodeHawks ka live contest join karo — atleast 1 this week",
          "Contest workflow: Read README → Understand scope → Architecture map → Audit",
          "Systematic coverage: important functions pehle, helper functions baad mein",
          "Time boxing: 3hr mein atleast 2 medium/high findings ka realistic goal",
          "Valid findings format: clear title, impact clearly stated, PoC working test",
          "Submit karte time: duplicate check karo, similar findings already submitted toh nahi",
          "Post-contest: dusron ke findings read karo — yeh MOST important learning hai",
          "Damn Vulnerable DeFi remaining levels (6-15) complete karo",
        ],
        daily: [
          { hr: "HR 30m", task: "Contest scope read karo, architecture samjho, attack surface note karo" },
          { hr: "HR 2", task: "Deep systematic audit — function by function" },
          { hr: "HR 30m", task: "Findings professionally document karo aur submit karo" },
        ],
        goal: "1-2 valid findings submit kiye — even Low findings count as win!",
      },
      {
        week: "Week 15", days: "Days 105–111",
        topic: "Specialization — Choose Your Path",
        tasks: [
          "DeFi Specialist track: Uniswap V3 concentrated liquidity, Curve, Balancer",
          "NFT/Gaming track: ERC721, ERC1155 standards, marketplace vulnerabilities",
          "Cross-chain track: Bridge architecture, LayerZero, Chainlink CCIP vulnerabilities",
          "Citrea specific: Bitcoin ZK Rollup — citrea.xyz docs padho (tera target!)",
          "Daily Warden: dailywarden.com explore karo — practice platform",
          "Bridge attack case studies: Ronin ($625M), Wormhole ($320M), Nomad ($190M)",
          "Choose ek specialization aur uss protocol type ke 3 audits karo is hafte",
          "Sherlock contest participate karo",
        ],
        daily: [
          { hr: "HR 1", task: "Chosen specialization ka deep study — protocol docs + code" },
          { hr: "HR 2", task: "Contest ya practice audit in specialization area" },
        ],
        goal: "Ek niche mein 3+ audits done — specialist identity banana shuru",
      },
      {
        week: "Week 16", days: "Days 112–120",
        topic: "Polish + Consistency = Real Rewards",
        tasks: [
          "Portfolio: 2-3 complete audit reports with PoC tests — publicly visible",
          "Hacken Proof pe active submissions shuru karo — real bug bounties!",
          "Immunefi pe suitable programs dekho — smaller scope programs se start karo",
          "Blog/Twitter thread likho: '4 months mein smart contract security seekha'",
          "Community ke saath writeup share karo — visibility milti hai",
          "Next milestone set karo: pehla paid bounty, $500 goal",
          "Referrals: community help karo, dusron ke sawaalon ka jawab do",
          "Plan next 4 months: specialize deeper, earn more, maybe auditing firm apply karo",
        ],
        daily: [
          { hr: "HR 1", task: "Portfolio + community contribution + blog writing" },
          { hr: "HR 2", task: "Active bug bounty hunting — Hacken Proof / Immunefi programs" },
        ],
        goal: "Pehli Hacken Proof submission + public portfolio + earning pipeline ready!",
      },
    ],
  },
];

const resources = [
  { name: "CryptoZombies", url: "cryptozombies.io", type: "FREE", desc: "Gamified Solidity — best starting point", color: C.green },
  { name: "Cyfrin Updraft", url: "updraft.cyfrin.io", type: "FREE", desc: "Best free full security course — compulsory!", color: C.green },
  { name: "Ethernaut", url: "ethernaut.openzeppelin.com", type: "FREE", desc: "Security CTF challenges — Month 2 core", color: C.green },
  { name: "Damn Vulnerable DeFi", url: "damnvulnerabledefi.xyz", type: "FREE", desc: "Advanced DeFi attack challenges", color: C.green },
  { name: "Foundry Book", url: "book.getfoundry.sh", type: "FREE", desc: "Official Foundry testing docs — bible", color: C.green },
  { name: "OpenZeppelin Docs", url: "docs.openzeppelin.com", type: "FREE", desc: "Standard contracts + security patterns", color: C.green },
  { name: "SWC Registry", url: "swcregistry.io", type: "FREE", desc: "Smart contract weakness classification list", color: C.green },
  { name: "Solidity Docs", url: "docs.soliditylang.org", type: "FREE", desc: "Official language documentation — bookmark it!", color: C.green },
  { name: "CodeHawks", url: "codehawks.com", type: "CONTEST", desc: "Cyfrin beginner-friendly audit contests", color: C.cyan },
  { name: "Code4rena", url: "code4rena.com", type: "CONTEST", desc: "Main competitive audit platform — real $$$", color: C.cyan },
  { name: "Sherlock", url: "sherlock.xyz", type: "CONTEST", desc: "Audit contests with insurance model", color: C.cyan },
  { name: "Daily Warden", url: "dailywarden.com", type: "PRACTICE", desc: "Tera target — practice audit platform", color: C.orange },
  { name: "Hacken Proof", url: "hackenproof.com", type: "BUG BOUNTY", desc: "Primary target — register early!", color: C.purple },
  { name: "Immunefi", url: "immunefi.com", type: "BUG BOUNTY", desc: "Biggest crypto bounties — future $$$$ goal", color: C.purple },
];

const tipColor = { "FREE": C.green, "CONTEST": C.cyan, "PRACTICE": C.orange, "BUG BOUNTY": C.purple };

export default function SolidityRoadmap() {
  const [activeMonth, setActiveMonth] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const [tab, setTab] = useState("roadmap"); // roadmap | resources | tips

  const m = months[activeMonth];
  const w = m.weeks[activeWeek];

  return (
    <div style={{ fontFamily: "'Courier New', Courier, monospace", background: C.bg, minHeight: "100vh", color: C.white }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Share+Tech+Mono&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: #0d0d1a; }
        ::-webkit-scrollbar-thumb { background: #2a2a3e; border-radius: 4px; }
        body { background: #07070f; }
        .btn-month { transition: all 0.18s ease; border: none; cursor: pointer; }
        .btn-month:hover { filter: brightness(1.2); transform: translateY(-1px); }
        .btn-week { transition: all 0.18s ease; border: none; cursor: pointer; }
        .btn-week:hover { filter: brightness(1.15); }
        .tab-btn { transition: all 0.18s ease; border: none; cursor: pointer; }
        .tab-btn:hover { filter: brightness(1.2); }
        .task-row { transition: background 0.15s; }
        .task-row:hover { background: #161628 !important; }
        .res-card { transition: all 0.18s ease; cursor: default; }
        .res-card:hover { transform: translateY(-2px); border-color: rgba(255,255,255,0.15) !important; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.25s ease forwards; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .pulse { animation: pulse 2s infinite; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ padding: "28px 24px 20px", textAlign: "center", borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 9, letterSpacing: 6, color: C.dim, marginBottom: 8 }}>
          SMART CONTRACT SECURITY
        </div>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: "clamp(22px, 5vw, 38px)", fontWeight: 900,
          background: `linear-gradient(135deg, ${C.green}, ${C.cyan} 50%, ${C.purple})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: 2, lineHeight: 1.2, marginBottom: 8,
        }}>SOLIDITY ROADMAP</h1>
        <p style={{ color: C.gray, fontSize: 11, letterSpacing: 3, marginBottom: 20 }}>
          4 MONTHS · 3 HR/DAY · ZERO TO HACKEN PROOF
        </p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 20, flexWrap: "wrap" }}>
          {[["360+","Total Hours"], ["16","Weeks"], ["4","Months"], ["∞","Bug Bounties"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 22, fontWeight: 900, color: C.green }}>{v}</div>
              <div style={{ fontSize: 9, color: C.dim, letterSpacing: 2 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {[["roadmap","📅 Roadmap"], ["resources","🔗 Resources"], ["tips","⚡ Tips"]].map(([key, label]) => (
            <button key={key} className="tab-btn"
              onClick={() => setTab(key)}
              style={{
                padding: "8px 20px", borderRadius: 4, fontSize: 11, fontWeight: 700,
                background: tab === key ? C.green : "transparent",
                color: tab === key ? C.bg : C.gray,
                border: `1px solid ${tab === key ? C.green : C.border}`,
                fontFamily: "'Share Tech Mono', monospace",
              }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── ROADMAP TAB ── */}
      {tab === "roadmap" && (
        <div>
          {/* Month Tabs */}
          <div style={{ display: "flex", gap: 8, padding: "16px 24px", overflowX: "auto", borderBottom: `1px solid ${C.border}` }}>
            {months.map((mon, mi) => (
              <button key={mi} className="btn-month"
                onClick={() => { setActiveMonth(mi); setActiveWeek(0); }}
                style={{
                  flexShrink: 0, padding: "10px 18px", borderRadius: 4,
                  background: activeMonth === mi ? mon.color : "transparent",
                  border: `1px solid ${mon.color}`,
                  color: activeMonth === mi ? C.bg : mon.color,
                  fontFamily: "'Orbitron', sans-serif", fontSize: 10, fontWeight: 700,
                }}>
                {mon.label}
                <div style={{ fontSize: 8, fontFamily: "'Share Tech Mono'", fontWeight: 400, marginTop: 3, opacity: 0.85 }}>
                  {mon.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Month overview */}
          <div style={{ padding: "12px 24px", background: `${m.color}0e`, borderBottom: `1px solid ${m.color}33` }}>
            <span style={{ fontSize: 10, color: m.color, fontWeight: 700, letterSpacing: 2 }}>OVERVIEW  </span>
            <span style={{ fontSize: 11, color: C.gray }}>{m.overview}</span>
          </div>

          <div style={{ display: "flex", minHeight: "calc(100vh - 280px)" }}>
            {/* Week Sidebar */}
            <div style={{ width: 200, flexShrink: 0, borderRight: `1px solid ${C.border}`, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
              {m.weeks.map((wk, wi) => (
                <button key={wi} className="btn-week"
                  onClick={() => setActiveWeek(wi)}
                  style={{
                    padding: "10px 12px", borderRadius: 4, textAlign: "left",
                    background: activeWeek === wi ? `${m.color}18` : "transparent",
                    border: `1px solid ${activeWeek === wi ? m.color : C.border}`,
                    color: activeWeek === wi ? m.color : C.dim,
                  }}>
                  <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1, marginBottom: 4, fontFamily: "'Orbitron', sans-serif" }}>
                    {wk.week}
                  </div>
                  <div style={{ fontSize: 9, lineHeight: 1.45, color: activeWeek === wi ? C.gray : C.dim }}>
                    {wk.topic}
                  </div>
                </button>
              ))}
            </div>

            {/* Week Content */}
            <div style={{ flex: 1, padding: "20px 24px", overflowY: "auto" }} className="fade-up" key={`${activeMonth}-${activeWeek}`}>
              {/* Week Header */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 9, color: C.dim, letterSpacing: 3, marginBottom: 6 }}>
                  {w.week} · {w.days}
                </div>
                <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 15, color: m.color, fontWeight: 700, marginBottom: 4 }}>
                  {w.topic}
                </h2>
                <div style={{ fontSize: 9, color: C.green, background: `${C.green}12`, display: "inline-block", padding: "3px 10px", borderRadius: 3, marginTop: 4 }}>
                  🎯 GOAL: {w.goal}
                </div>
              </div>

              {/* Tasks */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 9, color: C.dim, letterSpacing: 3, marginBottom: 8 }}>TOPICS & TASKS</div>
                {w.tasks.map((t, ti) => (
                  <div key={ti} className="task-row" style={{
                    display: "flex", gap: 10, padding: "8px 12px", marginBottom: 3,
                    background: C.card2, borderRadius: 4, alignItems: "flex-start",
                  }}>
                    <span style={{ color: m.color, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>▸</span>
                    <span style={{ fontSize: 12, color: C.white, lineHeight: 1.55 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Daily Breakdown */}
              <div style={{ background: `${m.color}0a`, border: `1px solid ${m.color}2a`, borderRadius: 6, padding: 16 }}>
                <div style={{ fontSize: 9, color: m.color, letterSpacing: 3, marginBottom: 12, fontWeight: 700 }}>
                  ⏱ DAILY 3HR BREAKDOWN
                </div>
                {w.daily.map((d, di) => (
                  <div key={di} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                    <span style={{
                      background: m.color, color: C.bg, padding: "2px 8px", borderRadius: 3,
                      fontSize: 8, fontWeight: 700, flexShrink: 0, marginTop: 2, fontFamily: "'Orbitron', sans-serif",
                    }}>{d.hr}</span>
                    <span style={{ fontSize: 12, color: C.gray, lineHeight: 1.55 }}>{d.task}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── RESOURCES TAB ── */}
      {tab === "resources" && (
        <div style={{ padding: "24px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, color: C.green, marginBottom: 6 }}>
              ESSENTIAL RESOURCES
            </h2>
            <p style={{ fontSize: 12, color: C.gray }}>Ye sab FREE hain ya beginner ke liye — koi excuse nahi! 🚀</p>
          </div>

          {/* Legend */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 20 }}>
            {Object.entries(tipColor).map(([type, col]) => (
              <div key={type} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: col }}></div>
                <span style={{ fontSize: 10, color: C.gray }}>{type}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
            {resources.map((r, ri) => (
              <div key={ri} className="res-card" style={{
                background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
                padding: 16, borderLeft: `3px solid ${r.color}`,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: C.white }}>{r.name}</div>
                  <span style={{
                    fontSize: 8, padding: "2px 7px", borderRadius: 3, fontWeight: 700,
                    background: `${r.color}20`, color: r.color, letterSpacing: 1, flexShrink: 0, marginLeft: 8,
                  }}>{r.type}</span>
                </div>
                <div style={{ fontSize: 10, color: C.dim, marginBottom: 4 }}>{r.url}</div>
                <div style={{ fontSize: 11, color: C.gray, lineHeight: 1.5 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TIPS TAB ── */}
      {tab === "tips" && (
        <div style={{ padding: "24px", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 18, color: C.green, marginBottom: 6 }}>
              KEY SUCCESS TIPS
            </h2>
            <p style={{ fontSize: 12, color: C.gray }}>Ye mistakes mat karna jo 90% log karte hain</p>
          </div>

          {[
            {
              icon: "⚡", color: C.green, title: "Consistency > Intensity",
              body: "3 hours DAILY — skip mat karo. 90 min + 3 hours weekend se better hai 3 hours every single day. Compounding learning isi se hoti hai. Pehle hafte mushkil lagega, baad mein habit ban jaayegi.",
            },
            {
              icon: "📝", color: C.cyan, title: "Writeups likho — yeh GOLD hai",
              body: "Har Ethernaut level, har Damn Vulnerable DeFi, har contest ka writeup GitHub pe public karo. Interview mein yahi portfolio kaam aata hai. Security community mein visibility bhi milti hai. 'I solved X' se better hai 'Here's my detailed writeup of X'.",
            },
            {
              icon: "🔨", color: C.orange, title: "Remix sirf practice ke liye, Foundry real auditing ke liye",
              body: "Beginners Remix pe stick karte hain. Professional auditors Foundry use karte hain. Month 2 mein jab Foundry seekho, wapas jao aur pehle ke sab contracts ke tests Foundry mein likho. Ye ek investment hai jo hamesha kaam aayega.",
            },
            {
              icon: "🎯", color: C.purple, title: "CodeHawks First Flights se shuru karo",
              body: "Code4rena pe seedha mat jaao. Pehle CodeHawks First Flights karo — yeh specially beginners ke liye design kiye gaye hain. Koi judges nahi, community learns together. Yahan se confidence aata hai jo baad mein bade contests mein kaam aata hai.",
            },
            {
              icon: "🌐", color: C.green, title: "Community mein active raho",
              body: "Discord join karo: CodeHawks, Cyfrin, Code4rena. Twitter pe @pcaversaccio, @pashovkrum, @0xOwenThurm, @bytes032, @spearbit follow karo. Community ke sawaalon ka jawab do — teaching se aap khud zyada seekhte ho. Yeh networking future mein direct opportunities deti hai.",
            },
            {
              icon: "💰", color: C.cyan, title: "Earning ki timeline realistic rakhna",
              body: "Month 4 mein pehli Hacken Proof submission hogi. Pehle 6 months mein bade payouts mat expect karo. Low/Medium findings bhi submit karo — experience aur track record banta hai. 6-12 months consistent work ke baad $1000-5000/month realistic hai. Kuch log 18-24 months mein $10k+/month tak pahunche hain.",
            },
            {
              icon: "🔍", color: C.orange, title: "Real hacks se seekho — rekt.news mandatory hai",
              body: "Har bade DeFi hack ka post-mortem padho. rekt.news pe jaao, top hacks dekho. Har ek mein vulnerability identify karo — phir khud sochao ki audit mein yeh kaise pakad sakte the. Ye practical pattern recognition develop karta hai jo theory se zyada important hai.",
            },
            {
              icon: "🏗️", color: C.purple, title: "Specialization jaldi choose karo",
              body: "Month 4 mein ek niche choose karo: DeFi (Uniswap/Aave type protocols), NFT/Gaming, ya Cross-chain bridges. Citrea aur Daily Warden jaise platforms specific expertise value karte hain. Generalist se specialist hamesha zyada earn karta hai security field mein.",
            },
          ].map((tip, ti) => (
            <div key={ti} style={{
              background: C.card, border: `1px solid ${C.border}`, borderRadius: 8,
              padding: 18, marginBottom: 12, borderLeft: `3px solid ${tip.color}`,
            }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{tip.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 11, color: tip.color, fontWeight: 700, marginBottom: 6 }}>
                    {tip.title}
                  </div>
                  <p style={{ fontSize: 12, color: C.gray, lineHeight: 1.7 }}>{tip.body}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Final mantra */}
          <div style={{
            background: C.card, border: `1px solid ${C.green}44`,
            borderRadius: 8, padding: 24, textAlign: "center", marginTop: 20,
          }}>
            <div className="pulse" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: 12, color: C.green, marginBottom: 10, fontWeight: 900 }}>
              ⚡ FINAL MANTRA
            </div>
            <p style={{ fontSize: 13, color: C.gray, lineHeight: 1.9, maxWidth: 560, margin: "0 auto" }}>
              Pehle 2 month <span style={{ color: C.green, fontWeight: 700 }}>build karo</span> — phir 2 month{" "}
              <span style={{ color: C.cyan, fontWeight: 700 }}>break karo</span>.{" "}
              Community mein active raho. First contest mein prize nahi aaya toh bhi — sikhna hain, earning aayegi automatically.{" "}
              <span style={{ color: C.purple, fontWeight: 700 }}>Consistency &gt; Intensity.</span>{" "}
              <span style={{ color: C.orange, fontWeight: 700 }}>3 hours daily = life-changing career.</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}