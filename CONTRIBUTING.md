# Contributing to HCIRankings

> **Adding or updating a single faculty member?** [Open an issue](https://github.com/nunojnunes/HCIRankings/issues/new/choose) using the faculty submission template — it's the fastest way to get your entry processed.

Thanks for contributing to HCIRankings! Please read these guidelines carefully before submitting a pull request.

---

## The Basics

### Non-anonymous accounts

All pull requests and issues must come from non-anonymous accounts. Make sure your GitHub profile contains your full name.

### Descriptive PR title

Use a title that clearly describes what your PR does (e.g. "Add HCI faculty at Univ. of Example"). Generic titles like "Update csrankings-x.csv" make the queue difficult to manage.

### One PR per institution

Combine all updates for a single institution into **one PR**. Multiple PRs for the same institution create merge conflicts.

### Allowed files

Only modify `csrankings-[a-z].csv` (or `old/industry.csv` if needed). All other files are auto-generated or require maintainer access.

### Do not use Excel

Excel corrupts Google Scholar IDs by converting them to formulas. Use the GitHub web interface or a plain-text editor instead.

### Alphabetical order

Insert new entries **in alphabetical order by last name** in the correct `csrankings-[a-z].csv` file. Do not modify `csrankings.csv` — it is auto-generated.

### CSV format

Each line must have exactly four comma-separated fields with **no spaces after commas** and no missing fields:

```
name,affiliation,homepage,scholarid
```

---

## Inclusion criteria

HCIRankings tracks full-time, tenure-track faculty who:

- Can **solely** advise PhD students (co-advising only does not qualify)
- Have a 75%+ academic appointment (see `old/industry.csv` for part-industry faculty)
- Are at an institution listed in `institutions.csv`

Faculty outside a CS/informatics department may be included if they hold a courtesy appointment in CS or are members of a CS graduate program — include a link to evidence in your PR.

---

## Data accuracy

### Name

The name must match the [DBLP](https://dblp.org) entry **exactly**, including disambiguation suffixes like `0001`. Mismatches result in zero papers being counted.

### Homepage

The homepage URL must work and show the faculty member's name and current affiliation. Our automated validation fetches the page to verify this.

### Google Scholar ID

Use only the alphanumeric identifier — not the full URL and not with `&hl=en`. For example, from `https://scholar.google.com/citations?user=abcd1234ABCD&hl=en`, use only `abcd1234ABCD`. If there is no Scholar page, use `NOSCHOLARPAGE`.

---

## Adding a new institution

If the institution is not yet in `institutions.csv`, **open an issue first** titled "Add [Institution Name] to the list of institutions". Once the institution is added by a maintainer, submit a PR that adds **all** HCI faculty at that institution — partial departments skew rankings.

---

## Institution name length

Institution names must not exceed 37 characters. Abbreviate as needed:
- `University` → `Univ.`
- `Institute` → `Inst.`
- `Technology` → `Tech.`
- `Information` → `Info.`
