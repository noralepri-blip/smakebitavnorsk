---
layout: default
title: "Koble adjektiv og substantiv"
parent: "Oppgave 2: Smaker det?"
nav_order: 2
---
# Oppgave: Koble adjektiv og substantiv

Koble sammen hvert adjektiv med et passende substantiv slik at det danner en naturlig og god beskrivelse[cite: 4].

<div class="quiz-box" style="background: #fff6ed; border: 2px solid #ad4400; padding: 20px; border-radius: 8px; margin: 20px 0;">
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Rosa:</label>
<select id="m-1"><option value="">[ Velg ]</option><option value="gris">Gris</option><option value="bil">Bil</option><option value="kake">Kake</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Rød:</label>
<select id="m-2"><option value="">[ Velg ]</option><option value="ferrari">Ferrari</option><option value="gris">Gris</option><option value="kake">Kake</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Liten:</label>
<select id="m-3"><option value="">[ Velg ]</option><option value="mus">Mus</option><option value="ferrari">Ferrari</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Sliten:</label>
<select id="m-4"><option value="">[ Velg ]</option><option value="kropp">Kropp</option><option value="mus">Mus</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Stort:</label>
<select id="m-5"><option value="">[ Velg ]</option><option value="hus">Hus</option><option value="kropp">Kropp</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Lyst:</label>
<select id="m-6"><option value="">[ Velg ]</option><option value="rom">Rom</option><option value="hus">Hus</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Stripete:</label>
<select id="m-7"><option value="">[ Velg ]</option><option value="katt">Katt</option><option value="rom">Rom</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Rutete:</label>
<select id="m-8"><option value="">[ Velg ]</option><option value="skjorte">Skjorte</option><option value="katt">Katt</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Sunn:</label>
<select id="m-9"><option value="">[ Velg ]</option><option value="mat">Mat</option><option value="skjorte">Skjorte</option></select>
</div>
<div style="margin-bottom: 10px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Søt:</label>
<select id="m-10"><option value="">[ Velg ]</option><option value="kake">Kake</option><option value="mat">Mat</option></select>
</div>
<div style="margin-bottom: 15px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
<label style="min-width: 100px; font-weight: bold;">Lang:</label>
<select id="m-11"><option value="">[ Velg ]</option><option value="vei">Vei</option><option value="kake">Kake</option></select>
</div>
<button onclick="checkM()" style="background: #ad4400; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">Sjekk svar</button>
<div id="fb-m" style="margin-top: 10px; font-weight: bold;"></div>
</div>

<script>
function checkM() {
    document.getElementById('fb-m').innerHTML = "<span style='color: green;'>Godt koblet! 🌟</span>";
}
</script>
