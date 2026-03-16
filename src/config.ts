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
        'icmi': 'technology',
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
        'SWS': 'https://www.cis.mpg.de/mpi-sws/'
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
        { area: "compass",          title: "Design & Critical" },
        // Ubiquitous and Mobile
        { area: "ubi_mobile",       title: "Ubiq. & Mobile" },
        { area: "ubicomp",          title: "Ubiq. & Mobile" },
        { area: "mobilehci",        title: "Ubiq. & Mobile" },
        { area: "etra",             title: "Ubiq. & Mobile" },
        // Immersive and Visualization
        { area: "immersive_vis",    title: "Immersive & Vis." },
        { area: "vrst",             title: "Immersive & Vis." },
        { area: "vr",               title: "Immersive & Vis." },
        { area: "vis",              title: "Immersive & Vis." },
        { area: "ismar",            title: "Immersive & Vis." },
        // Intelligent & Adaptive Systems
        { area: "intelligent",      title: "Intelligent & Adaptive" },
        { area: "iui",              title: "Intelligent & Adaptive" },
        { area: "hri",              title: "Intelligent & Adaptive" },
        { area: "recsys",           title: "Intelligent & Adaptive" },
        { area: "umap",             title: "Intelligent & Adaptive" },
        // Technology and Engineering
        { area: "technology",       title: "Technology & Eng." },
        { area: "uist",             title: "Technology & Eng." },
        { area: "eics",             title: "Technology & Eng." },
        { area: "tei",              title: "Technology & Eng." },
        { area: "iss",              title: "Technology & Eng." },
        { area: "sui",              title: "Technology & Eng." },
        { area: "icmi",             title: "Technology & Eng." },
        // Accessibility and Social Impact
        { area: "accessibility",    title: "Accessibility" },
        { area: "assets",           title: "Accessibility" },
        { area: "idc",              title: "Accessibility" },
        // Journals
        { area: "journals",         title: "Journals" },
        { area: "tochi",            title: "Journals" },
        { area: "ijhcs",            title: "Journals" },
        { area: "bit",              title: "Journals" },
        { area: "ijhci",            title: "Journals" },
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

    /* Ranking configuration */
    export const minToRank = 5000; // show all entries (lazy rendering makes this fast)

    /* Name matcher regex for notes in brackets */
    export const nameMatcher = new RegExp('(.*)\\s+\\[(.*)\\]');

}
