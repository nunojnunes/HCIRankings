HCIRankings
===========

**HCIRankings** is a metrics-based ranking of top Human-Computer Interaction (HCI) research institutions worldwide. It measures the number of publications by faculty at the most selective HCI venues, providing an objective, survey-free alternative to traditional academic rankings.

Live site: [hcirankings.org](https://hcirankings.org)

---

## How it works

Rankings are computed by counting faculty publications at selective HCI conferences and journals, adjusted fractionally when a paper has multiple authors from different institutions. The result is a transparent, reproducible score for each institution.

Publication data is sourced from [DBLP](https://dblp.org), made available under the [ODC Attribution License](https://opendatacommons.org/licenses/by/).

---

## Venues covered

| Category | Venues |
|---|---|
| **Core HCI** | CHI, CSCW/PACMHCI, INTERACT |
| **Design & Critical Computing** | DIS, C&C, COMPASS |
| **Technology & Engineering** | UIST, EICS, TEI, ISS/ITS, SUI, ICMI |
| **Ubiquitous & Mobile** | UbiComp/IMWUT, MobileHCI, ETRA |
| **Immersive & Visualization** | VRST, IEEE VR, IEEE VIS, ISMAR |
| **Intelligent & Adaptive Systems** | IUI, HRI, RecSys, UMAP |
| **Accessibility & Social Impact** | ASSETS, IDC |
| **Journals** | TOCHI, IJHCS, Behaviour & Information Technology, Int. J. HCI |

---

## Running locally

```bash
# Start a local web server
python3 -m http.server 8000
# Open http://localhost:8000/index.html
```

### Rebuilding the data

To regenerate publication data from DBLP:

```bash
# Download and filter DBLP (requires ~8GB memory)
make update-dblp

# Rebuild generated-author-info.csv
make

# Or just recompile the TypeScript
npx tsc --project tsconfig.json
```

### Dependencies

```bash
# Python
pip3 install lxml pytest selenium webdriver-manager

# Node.js
npm install -g typescript
```

---

## Adding or updating faculty

To add or update a faculty member, edit `csrankings.csv` with the following fields:

```
name, affiliation, homepage, scholarid
```

Institution names must not exceed 37 characters. Abbreviate as needed:
- `University` → `Univ.`
- `Institute` → `Inst.`
- `Technology` → `Tech.`

---

## Credits

HCIRankings is based on [CSRankings](https://csrankings.org) by [Emery Berger](https://emeryberger.com), which provides the core ranking methodology, data pipeline, and frontend architecture. CSRankings is covered by the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

Publication data from [DBLP](https://dblp.org) · [ODC Attribution License](https://opendatacommons.org/licenses/by/)
