/*
  HCIRankings - Rank Filter

  ERA/CORE rank filter for venues (A*, A, B, Journals).
  Provides batch-toggling of venue checkboxes by rank tier.
*/

namespace CSRankings {

    /* ERA/CORE 2023 rank assignments for tracked venues */
    export const venueRank: { [key: string]: string } = {
        // A*
        'chiconf':  'astar',
        'ubicomp':  'astar',
        'vr':       'astar',
        'ismar':    'astar',
        'mm':       'astar',
        'siggraph': 'astar',
        'uist':     'astar',
        // A
        'cscw':     'a',
        'dis':      'a',
        'vis':      'a',
        'iui':      'a',
        'iss':      'a',
        'assets':   'a',
        'hri':      'a',
        'recsys':   'a',
        // B
        'interact': 'b',
        'cc':       'b',
        'mobilehci':'b',
        'vrst':     'b',
        'icmi':     'b',
        'eics':     'b',
        'tei':      'b',
        'idc':      'b',
        'chiplay':  'b',
        // Journals
        'tochi':    'journal',
        'ijhcs':    'journal',
        'bit':      'journal',
        'ijhci':    'journal',
    };

    /* Read current filter checkbox states */
    function readFilterState(): { astar: boolean; a: boolean; b: boolean; journals: boolean } {
        return {
            astar:    !!(document.getElementById('filter-astar') as HTMLInputElement)?.checked,
            a:        !!(document.getElementById('filter-a') as HTMLInputElement)?.checked,
            b:        !!(document.getElementById('filter-b') as HTMLInputElement)?.checked,
            journals: !!(document.getElementById('filter-journals') as HTMLInputElement)?.checked,
        };
    }

    /* Set venue checkboxes based on selected ranks and update parent checkboxes */
    function applyVenueCheckboxes(
        astar: boolean,
        a: boolean,
        b: boolean,
        journals: boolean,
        invalidateCheckboxCache: () => void
    ): void {
        // Set each ranked venue checkbox
        for (const venue in venueRank) {
            const el = document.getElementById(venue) as HTMLInputElement;
            if (!el) continue;
            const r = venueRank[venue];
            el.checked = (r === 'astar' && astar) ||
                         (r === 'a'     && a) ||
                         (r === 'b'     && b) ||
                         (r === 'journal' && journals);
        }

        // Update parent checkboxes: checked if any child is checked
        const parentsToUpdate = new Set<string>();
        for (const venue in venueRank) {
            if (venue in parentMap) {
                parentsToUpdate.add(parentMap[venue]);
            }
        }
        for (const parent of parentsToUpdate) {
            const parentEl = document.getElementById(parent) as HTMLInputElement;
            if (!parentEl || !(parent in childMap)) continue;
            parentEl.checked = childMap[parent].some(child => {
                const childEl = document.getElementById(child) as HTMLInputElement;
                return childEl && childEl.checked;
            });
        }

        invalidateCheckboxCache();
    }

    /* Apply rank filter based on current filter checkbox states */
    export function applyRankFilter(
        invalidateCheckboxCache: () => void,
        rankCallback: () => void
    ): void {
        const { astar, a, b, journals } = readFilterState();
        applyVenueCheckboxes(astar, a, b, journals, invalidateCheckboxCache);
        rankCallback();
    }

    /* Apply the default A* filter on fresh page load (no rank callback — caller handles it) */
    export function applyDefaultRankFilter(invalidateCheckboxCache: () => void): void {
        // Sync filter UI to A* default
        const fAstar = document.getElementById('filter-astar') as HTMLInputElement;
        const fA     = document.getElementById('filter-a')     as HTMLInputElement;
        const fB     = document.getElementById('filter-b')     as HTMLInputElement;
        const fJ     = document.getElementById('filter-journals') as HTMLInputElement;
        if (fAstar) fAstar.checked = true;
        if (fA)     fA.checked     = false;
        if (fB)     fB.checked     = false;
        if (fJ)     fJ.checked     = false;

        applyVenueCheckboxes(true, false, false, false, invalidateCheckboxCache);
    }

    /* Wire up rank filter change listeners */
    export function initRankFilter(
        invalidateCheckboxCache: () => void,
        rankCallback: () => void
    ): void {
        for (const id of ['filter-astar', 'filter-a', 'filter-b', 'filter-journals']) {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('change', () => {
                    applyRankFilter(invalidateCheckboxCache, rankCallback);
                });
            }
        }
    }

}
