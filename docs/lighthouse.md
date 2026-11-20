# Lighthouse (production build, `next start`, Lighthouse 13, headless Chrome)

Median of 3 runs per form factor. Screenshots: `lighthouse-mobile.png`, `lighthouse-desktop.png` (the median run).

| Form factor | Performance | Accessibility | Best Practices | SEO | FCP | LCP | TBT | CLS | Speed Index |
|---|---|---|---|---|---|---|---|---|---|
| Mobile (median) | 97 | 100 | 100 | 100 | 0.8 s | 2.2 s | 160 ms | 0 | 0.8 s |
| Desktop (median) | 100 | 100 | 100 | 100 | 0.2 s | 0.7 s | 0 ms | 0.003 | 0.2 s |

All runs (Performance / Accessibility / Best Practices / SEO):

- Mobile: 93/100/100/100, 97/100/100/100, 98/100/100/100
- Desktop: 100/100/100/100, 100/100/100/100, 100/100/100/100

Mobile Performance varies between runs (91 to 99 across the 17 runs made after the fixes) because Lighthouse *simulates* a slow 4G connection and a 4x slower CPU: the observed LCP is ~200 ms every time, but the simulated LCP sometimes jumps from ~2.2 s to ~3 s. It stayed above 90 in every run.
