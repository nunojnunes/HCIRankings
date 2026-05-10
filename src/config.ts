/*
  HCIRankings - Configuration

  Static maps, area definitions, and constants.
*/

namespace CSRankings {

    /* Parent-child mapping for conference hierarchy */
    export const parentMap: { [key: string]: string } = {
        // Core HCI
        'chiconf': 'hci_core',
        'cscw': 'hci_core',
        'interact': 'hci_core',
        // Design and Critical Computing
        'dis': 'design_critical',
        'cc': 'design_critical',
        'compass': 'design_critical',
        // Ubiquitous and Mobile
        'ubicomp': 'ubi_mobile',
        'mobilehci': 'ubi_mobile',
        'etra': 'ubi_mobile',
        // Immersive and Visualization
        'vrst': 'immersive_vis',
        'vr': 'immersive_vis',
        'vis': 'immersive_vis',
        'ismar': 'immersive_vis',
        'mm': 'immersive_vis',
        'siggraph': 'immersive_vis',
        'icmi': 'immersive_vis',
        // Intelligent & Adaptive Systems
        'iui': 'intelligent',
        'hri': 'intelligent',
        'recsys': 'intelligent',
        'umap': 'intelligent',
        // Technology and Engineering
        'uist': 'technology',
        'eics': 'technology',
        'tei': 'technology',
        'iss': 'technology',
        'sui': 'technology',
        // Accessibility and Social Impact
        'assets': 'accessibility',
        'idc': 'accessibility',
        // Journals
        'tochi': 'journals',
        'ijhcs': 'journals',
        'bit': 'journals',
        'ijhci': 'journals',
    };

    /* Next tier conferences - kept for subsetting() logic but no longer affects defaults */
    export const nextTier: { [key: string]: boolean } = {};

    /* Child map - built dynamically from parentMap */
    export const childMap: { [key: string]: string[] } = {};

    /* Parent index for color lookups */
    export const parentIndex: { [key: string]: number } = {};

    /* All regions/countries */
    export const regions: Array<string> = [
        "europe", "northamerica", "southamerica", "australasia", "asia", "africa", "world",
        "ae", "ar", "at", "au", "bd", "be", "bg", "br", "ca", "ch", "cl", "cn", "co", "cy", "cz",
        "de", "dk", "ee", "eg", "es", "fi", "fr", "gr", "hk", "hu", "ie", "il", "in", "ir", "it",
        "jo", "jp", "kr", "lb", "lk", "lu", "mt", "my", "nl", "no", "nz", "ph", "pk", "pl", "pt",
        "qa", "ro", "ru", "sa", "se", "sg", "th", "tr", "tw", "uk", "us", "vn", "za"
    ];

    /* Note map for special institution URLs */
    export const noteMap: { [note: string]: string } = {
        'Tech': 'https://tech.cornell.edu/',
        'CBG': 'https://www.cis.mpg.de/cbg/',
        'INF': 'https://www.cis.mpg.de/mpi-inf/',
        'IS': 'https://www.cis.mpg.de/is/',
        'MG': 'https://www.cis.mpg.de/molgen/',
        'SP': 'https://www.cis.mpg.de/mpi-for-security-and-privacy/',
        'SWS': 'https://www.cis.mpg.de/mpi-sws/',
        'ITI': 'https://iti.larsys.pt',
        'ISR': 'https://www.isr.ist.utl.pt/',
        'INESC': 'https://www.inesc-id.pt/',
        'LASIGE': 'https://lasige.di.fc.ul.pt/'
    };

    /* Area definitions with titles */
    export const areaMap: Array<AreaMap> = [
        // Core HCI
        { area: "hci_core",         title: "Core HCI" },
        { area: "chiconf",          title: "Core HCI" },
        { area: "cscw",             title: "Core HCI" },
        { area: "interact",         title: "Core HCI" },
        // Design and Critical Computing
        { area: "design_critical",  title: "Design & Critical" },
        { area: "dis",              title: "Design & Critical" },
        { area: "cc",               title: "Design & Critical" },
        // Ubiquitous and Mobile
        { area: "ubi_mobile",       title: "Ubiq. & Mobile" },
        { area: "ubicomp",          title: "Ubiq. & Mobile" },
        { area: "mobilehci",        title: "Ubiq. & Mobile" },
        // Immersive and Visualization
        { area: "immersive_vis",    title: "Immersive & Vis." },
        { area: "vr",               title: "Immersive & Vis." },
        { area: "ismar",            title: "Immersive & Vis." },
        { area: "mm",               title: "Immersive & Vis." },
        { area: "siggraph",         title: "Immersive & Vis." },
        { area: "vis",              title: "Immersive & Vis." },
        { area: "vrst",             title: "Immersive & Vis." },
        { area: "icmi",             title: "Immersive & Vis." },
        // Intelligent & Adaptive Systems
        { area: "intelligent",      title: "Intelligent & Adaptive" },
        { area: "hri",              title: "Intelligent & Adaptive" },
        { area: "iui",              title: "Intelligent & Adaptive" },
        { area: "recsys",           title: "Intelligent & Adaptive" },
        // Technology and Engineering
        { area: "technology",       title: "Technology & Eng." },
        { area: "uist",             title: "Technology & Eng." },
        { area: "eics",             title: "Technology & Eng." },
        { area: "tei",              title: "Technology & Eng." },
        { area: "iss",              title: "Technology & Eng." },
        // Accessibility and Social Impact
        { area: "accessibility",    title: "Accessibility" },
        { area: "assets",           title: "Accessibility" },
        { area: "idc",              title: "Accessibility" },
        { area: "chiplay",          title: "Accessibility" },
        // Journals
        { area: "journals",         title: "Journals" },
        { area: "bit",              title: "Journals" },
        { area: "ijhcs",            title: "Journals" },
        { area: "ijhci",            title: "Journals" },
        { area: "tochi",            title: "Journals" },
    ];

    /* Area category arrays (used by toggle buttons and rendering) */
    export const aiAreas = ["hci_core", "design_critical", "technology"];
    export const systemsAreas = ["ubi_mobile", "immersive_vis", "intelligent", "accessibility"];
    export const theoryAreas = ["journals"];
    export const interdisciplinaryAreas: string[] = [];

    /* Arrays populated by App constructor */
    export const areas: Array<string> = [];
    export const topLevelAreas: { [key: string]: string } = {};
    export const topTierAreas: { [key: string]: string } = {};

    /* File paths */
    export const authorFile = "./csrankings.csv";
    export const authorinfoFile = "./generated-author-info.csv";
    export const countryinfoFile = "./institutions.csv";
    export const countrynamesFile = "./countries.csv";
    export const turingFile = "./turing.csv";
    export const acmfellowFile = "./acm-fellows.csv";

    /* Image paths */
    export const turingImage = "./png/acm-turing-award.png";
    export const acmfellowImage = "./png/acm.png";
    export const homepageImage = "./png/house-logo.png";

    /* UI constants */
    export const RightTriangle = "&#9658;";   // right-facing triangle symbol (collapsed view)
    export const DownTriangle = "&#9660;";   // downward-facing triangle symbol (expanded view)
    export const BarChartIcon = "<img class='closed_chart_icon chart_icon' alt='closed chart' src='png/barchart.png'>"; // bar chart image
    export const OpenBarChartIcon = "<img class='open_chart_icon chart_icon' alt='opened chart' src='png/barchart-open.png'>"; // opened bar chart image
    export const PieChartIcon = "<img class='closed_chart_icon chart_icon' alt='closed chart' src='png/piechart.png'>";
    export const OpenPieChartIcon = "<img class='open_chart_icon chart_icon' alt='opened chart' src='png/piechart-open.png'>";
    export const PublicationsIcon = `<svg class="pub-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`;

    /* Exact booktitle/journal strings accepted by the counting script (util/csrankings.py).
       Used to filter DBLP XML results so the publication list matches the counted papers exactly. */
    export const validDBLPVenueNames: { [name: string]: boolean } = {
        // chiconf
        'CHI': true,
        // ubicomp
        'UbiComp': true, 'Ubicomp': true, 'IMWUT': true, 'Pervasive': true,
        'Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.': true,
        // uist
        'UIST': true,
        // vis
        'IEEE Visualization': true, 'IEEE Trans. Vis. Comput. Graph.': true,
        // vr
        'VR': true,
        // cscw / pacmhci
        'CSCW': true, 'Proc. ACM Hum. Comput. Interact.': true,
        // assets
        'ASSETS': true,
        // dis
        'DIS': true, 'Conference on Designing Interactive Systems': true,
        'Symposium on Designing Interactive Systems': true,
        // tei
        'TEI': true,
        // iss
        'ISS': true, 'ITS': true,
        // iui
        'IUI': true,
        // mobilehci
        'MobileHCI': true,
        // chiplay
        'CHI PLAY': true,
        // hri
        'HRI': true,
        // cc
        'Creativity & Cognition': true,
        // vrst
        'VRST': true,
        // eics
        'EICS': true,
        // interact
        'INTERACT': true, 'INTERACT (1)': true, 'INTERACT (2)': true,
        'INTERACT (3)': true, 'INTERACT (4)': true, 'INTERACT (5)': true,
        // ismar
        'ISMAR': true,
        // mm
        'MM': true,
        // siggraph
        'SIGGRAPH': true, 'ACM Trans. Graph.': true, 'SIGGRAPH (Conference Paper Track)': true,
        // icmi
        'ICMI': true,
        // recsys
        'RecSys': true,
        // idc
        'IDC': true,
        // journals
        'ACM Trans. Comput. Hum. Interact.': true,
        'Int. J. Hum. Comput. Stud.': true,
        'Behav. Inf. Technol.': true,
        'Int. J. Hum. Comput. Interact.': true,
    };

    /* Maps verbose DBLP booktitle/journal strings to short display names. */
    export const venueDisplayName: { [name: string]: string } = {
        // ubicomp
        'Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.': 'IMWUT',
        'Ubicomp': 'UbiComp',
        // vis
        'IEEE Visualization': 'IEEE Vis',
        'IEEE Trans. Vis. Comput. Graph.': 'TVCG',
        // cscw
        'Proc. ACM Hum. Comput. Interact.': 'CSCW',
        // dis
        'Conference on Designing Interactive Systems': 'DIS',
        'Symposium on Designing Interactive Systems': 'DIS',
        // iss
        'ITS': 'ISS',
        // siggraph
        'ACM Trans. Graph.': 'SIGGRAPH',
        'SIGGRAPH (Conference Paper Track)': 'SIGGRAPH',
        // cc
        'Creativity & Cognition': 'C&C',
        // interact
        'INTERACT (1)': 'INTERACT', 'INTERACT (2)': 'INTERACT',
        'INTERACT (3)': 'INTERACT', 'INTERACT (4)': 'INTERACT',
        'INTERACT (5)': 'INTERACT',
        // journals
        'ACM Trans. Comput. Hum. Interact.': 'TOCHI',
        'Int. J. Hum. Comput. Stud.': 'IJHCS',
        'Behav. Inf. Technol.': 'BIT',
        'Int. J. Hum. Comput. Interact.': 'IJHCI',
    };

    /* Maps exact DBLP booktitle/journal strings to their ERA/CORE rank tier.
       Derived from venueRank (rank-filter.ts) + validDBLPVenueNames above. */
    export const venueNameToRank: { [name: string]: string } = {
        // A* venues
        'CHI': 'astar',
        'UbiComp': 'astar', 'Ubicomp': 'astar', 'IMWUT': 'astar', 'Pervasive': 'astar',
        'Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.': 'astar',
        'UIST': 'astar',
        'IEEE Visualization': 'astar', 'IEEE Trans. Vis. Comput. Graph.': 'astar',
        'VR': 'astar',
        'ISMAR': 'astar',
        'MM': 'astar',
        'SIGGRAPH': 'astar', 'ACM Trans. Graph.': 'astar', 'SIGGRAPH (Conference Paper Track)': 'astar',
        // A venues
        'CSCW': 'a', 'Proc. ACM Hum. Comput. Interact.': 'a',
        'ASSETS': 'a',
        'DIS': 'a', 'Conference on Designing Interactive Systems': 'a',
        'Symposium on Designing Interactive Systems': 'a',
        'IUI': 'a',
        'RecSys': 'a',
        'ISS': 'a', 'ITS': 'a',
        'HRI': 'a',
        // B venues
        'INTERACT': 'b', 'INTERACT (1)': 'b', 'INTERACT (2)': 'b',
        'INTERACT (3)': 'b', 'INTERACT (4)': 'b', 'INTERACT (5)': 'b',
        'Creativity & Cognition': 'b',
        'MobileHCI': 'b',
        'VRST': 'b',
        'EICS': 'b',
        'TEI': 'b',
        'IDC': 'b',
        'CHI PLAY': 'b',
        'ICMI': 'b',
        // Journals
        'ACM Trans. Comput. Hum. Interact.': 'journal',
        'Int. J. Hum. Comput. Stud.': 'journal',
        'Behav. Inf. Technol.': 'journal',
        'Int. J. Hum. Comput. Interact.': 'journal',
    };

    /* DBLP key prefixes for each tracked venue — used to filter DBLP API results */
    export const venueDBLPPrefix: { [area: string]: string[] } = {
        'chiconf':   ['conf/chi/'],
        'cscw':      ['conf/cscw/', 'journals/pacmhci/'],
        'uist':      ['conf/uist/'],
        'ubicomp':   ['conf/huc/', 'journals/imwut/'],
        'vr':        ['conf/vr/'],
        'ismar':     ['conf/ismar/'],
        'hri':       ['conf/hri/'],
        'dis':       ['conf/dis/'],
        'vis':       ['conf/visualization/', 'conf/visweek/'],
        'iui':       ['conf/iui/'],
        'iss':       ['conf/iss/', 'conf/tabletop/'],
        'assets':    ['conf/assets/'],
        'interact':  ['conf/interact/'],
        'cc':        ['conf/cc/'],
        'mobilehci': ['conf/mhci/'],
        'vrst':      ['conf/vrst/'],
        'mm':        ['conf/mm/'],
        'siggraph':  ['conf/siggraph/', 'journals/tog/'],
        'icmi':      ['conf/icmi/'],
        'recsys':    ['conf/recsys/'],
        'eics':      ['conf/eics/'],
        'tei':       ['conf/tei/'],
        'idc':       ['conf/idc/'],
        'chiplay':   ['conf/chiplay/'],
        'tochi':     ['journals/tochi/'],
        'ijhcs':     ['journals/ijhcs/'],
        'bit':       ['journals/bit/'],
        'ijhci':     ['journals/ijhci/'],
    };

    /* Ranking configuration */
    export const minToRank = 5000; // show all entries (lazy rendering makes this fast)

    /* Name matcher regex for notes in brackets */
    export const nameMatcher = new RegExp('(.*)\\s+\\[(.*)\\]');

}
