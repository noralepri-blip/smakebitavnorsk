---
layout: default
title: "Modul 2: Kan du beskrive det?"
nav_order: 2
---

# Modul 2: Kan du beskrive det?
*Lær om adjektiver, gradbøying og ordforråd for mat, råvarer og sanseinntrykk.*

---

## 🧀 Grammatikk: Adjektiver og matbeskrivelser

Adjektivene hjelper oss med å beskrive farger, smaker, konsistenser og egenskaper ved maten og råvarene i butikken. 

I denne modulen ser vi nærmere på klassiske råvarer som:
* **Pecorino Stagionato**[cite: 1]
* **Sugo alla Norma** og **Sugo all'arrabbiata**[cite: 1]
* **Guanciale** og **'Nduja di Spilinga**[cite: 1]
* **Mozzarella**[cite: 1]

---

## 🧩 Oppgave 1: Koble adjektiv og substantiv

Velg det substantivet som passer best til adjektivet:

<div class="quiz-box" style="background: #fff6ed; border: 2px solid #ad4400; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
    <label style="min-width: 100px; font-weight: bold;">Rosa:</label>
    <select id="match-1" style="padding: 6px;">
      <option value="">-- Velg substantiv --</option>
      <option value="gris">Gris</option>
      <option value="ferrari">Ferrari</option>
      <option value="mus">Mus</option>
      <option value="kake">Kake</option>
    </select>
  </div>

  <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
    <label style="min-width: 100px; font-weight: bold;">Rød:</label>
    <select id="match-2" style="padding: 6px;">
      <option value="">-- Velg substantiv --</option>
      <option value="gris">Gris</option>
      <option value="ferrari">Ferrari</option>
      <option value="mus">Mus</option>
      <option value="kake">Kake</option>
    </select>
  </div>

  <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
    <label style="min-width: 100px; font-weight: bold;">Liten:</label>
    <select id="match-3" style="padding: 6px;">
      <option value="">-- Velg substantiv --</option>
      <option value="gris">Gris</option>
      <option value="ferrari">Ferrari</option>
      <option value="mus">Mus</option>
      <option value="kake">Kake</option>
    </select>
  </div>

  <div style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
    <label style="min-width: 100px; font-weight: bold;">Søt:</label>
    <select id="match-4" style="padding: 6px;">
      <option value="">-- Velg substantiv --</option>
      <option value="gris">Gris</option>
      <option value="ferrari">Ferrari</option>
      <option value="mus">Mus</option>
      <option value="kake">Kake</option>
    </select>
  </div>

  <button onclick="checkMatching()" style="background: #ad4400; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">Sjekk svar</button>
  <div id="feedback-matching" style="margin-top: 10px; font-weight: bold;"></div>
</div>

---

## ✏️ Oppgave 2: Fyll inn riktig adjektiv

*Ordbank: italienske • koselig • varm • sprø • søt • sterk*

<div class="quiz-box" style="background: #fff6ed; border: 2px solid #ad4400; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <p style="line-height: 2.2;">
    Italia er kjent for sin <input type="text" id="blank-1" style="padding: 6px; width: 120px;"> mat. 
    På en <input type="text" id="blank-2" style="padding: 6px; width: 110px;"> restaurant kan du spise pizza. 
    Pizzaen er ofte <input type="text" id="blank-3" style="padding: 6px; width: 90px;"> og sprø. 
    Til dessert spiser mange en <input type="text" id="blank-4" style="padding: 6px; width: 90px;"> iskrem, 
    og kaffen er ofte god og <input type="text" id="blank-5" style="padding: 6px; width: 90px;">.
  </p>

  <button onclick="checkBlanks()" style="background: #ad4400; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">Sjekk svar</button>
  <div id="feedback-blanks" style="margin-top: 10px; font-weight: bold;"></div>
</div>

<script>
function checkMatching() {
    const m1 = document.getElementById('match-1').value;
    const m2 = document.getElementById('match-2').value;
    const m3 = document.getElementById('match-3').value;
    const m4 = document.getElementById('match-4').value;
    const fb = document.getElementById('feedback-matching');

    if (m1 === 'gris' && m2 === 'ferrari' && m3 === 'mus' && m4 === 'kake') {
        fb.innerHTML = "<span style='color: green;'>Helt riktig! Flott jobbet 🎉</span>";
    } else {
        fb.innerHTML = "<span style='color: red;'>Noen av koblingene var ikke helt riktige. Prøv igjen!</span>";
    }
}

function checkBlanks() {
    const b1 = document.getElementById('blank-1').value.trim().toLowerCase();
    const b2 = document.getElementById('blank-2').value.trim().toLowerCase();
    const b3 = document.getElementById('blank-3').value.trim().toLowerCase();
    const b4 = document.getElementById('blank-4').value.trim().toLowerCase();
    const b5 = document.getElementById('blank-5').value.trim().toLowerCase();
    const fb = document.getElementById('feedback-blanks');

    if (b1 === 'italienske' && b2 === 'koselig' && b3 === 'varm' && b4 === 'søt' && b5 === 'sterk') {
        fb.innerHTML = "<span style='color: green;'>Utmerket! Alt var helt korrekt plassert 🌟</span>";
    } else {
        fb.innerHTML = "<span style='color: red;'>Sjekk skrivemåten eller rekkefølgen på ordene og prøv en gang til.</span>";
    }
}
</script>
