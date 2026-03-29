# CONTINUITY

## Mistakes & Learnings

- What Failed:      The 3D interactive background was completely black and didn't render correctly.
- Why It Failed:    In `brain-3d.js` during particle rendering, a variable was renamed from `palette` to `particlePalette` at the top of the function, but the usage loop still referenced the undefined `palette`, causing a ReferenceError that crashed the ThreeJS renderer.
- How to Prevent:   Always verify variables are correctly renamed across their entire scope. The WebGL scene depends entirely on successful tick execution, so single JS failures cause blank canvases.
- Scope:            `file:public/js/brain-3d.js`
