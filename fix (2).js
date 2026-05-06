// ─────────────────────────────────────────────────────────────
//  fix.js  –  Ejecutar desde la raíz del proyecto:  node fix.js
// ─────────────────────────────────────────────────────────────
const { readFileSync, writeFileSync } = require('fs');

const apply = (file, changes) => {
  let src = readFileSync(file, 'utf8');
  let count = 0;
  for (const [from, to] of changes) {
    if (!src.includes(from)) {
      console.warn(`  ⚠️  no encontrado en ${file}: "${from.slice(0, 60)}"`);
    } else {
      src = src.split(from).join(to);
      count++;
    }
  }
  writeFileSync(file, src, 'utf8');
  console.log(`✅  ${file}  (${count}/${changes.length} cambios)`);
};

// ── index.astro ───────────────────────────────────────────────
apply('src/pages/index.astro', [
  ['Karla Mascaro',                      'Karla Mascaró'],
  ['Barbara Rojas',                      'Bárbara Rojas'],
  ['apoderados exigentes',               'apoderados desafiantes'],
  ['colegios particulares',              'establecimientos educativos'],
  ['\n        <div class="hero-tag">Foco exclusivo en establecimientos educativos</div>', ''],
  ['\n        <div class="hero-tag">Foco exclusivo en colegios particulares</div>', ''],
]);

// ── servicios.astro ───────────────────────────────────────────
apply('src/pages/servicios.astro', [
  ['Karla Mascaro',                      'Karla Mascaró'],
  ['Barbara Rojas',                      'Bárbara Rojas'],
  ['apoderados exigentes',               'apoderados desafiantes'],
  ['colegios particulares',              'establecimientos educativos'],
  ['Evaluación express',                 'Breve evaluación'],
  ['Desorden en manejo de diagnósticos', 'Dificultad en el manejo de diagnósticos'],
  ['Sistema DEC:',
   'Sistema DEC (Desregulación Emocional y Conducta):'],
  ['PAEC: Plan Estratégico',
   'PAEC (Plan de Acción Estratégica y Convivencia): Plan Estratégico'],
  ['con PME y proyecto educativo',
   'con PME (Plan de Mejoramiento Educativo) y proyecto educativo'],
]);

// ── Footer.astro ──────────────────────────────────────────────
apply('src/components/Footer.astro', [
  ['Dharma Asistencia Técnica Educativa', 'Dharma Educa'],
  ['colegios particulares',              'establecimientos educativos'],
]);

// ── global.css ────────────────────────────────────────────────
apply('src/styles/global.css', [
  ['color: rgba(248,244,237,0.22);',     'color: rgba(248,244,237,0.55);'],
]);

console.log('\n🎉  Listo. Ahora corre:  npm run build');
