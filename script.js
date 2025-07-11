const clk = document.getElementById("clk");
const am = document.getElementById("ampm");
const dt = document.getElementById("dt");
const sw = document.getElementById("fmtSw");

function runClk() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    const is24 = sw.checked;
    let ap = "AM";

    if (!is24) {
        ap = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12;
    }

    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");

    const col = now.getSeconds() % 2 === 0 ? ":" : "<span class='blink'>:</span>";
    clk.innerHTML = `${h}${col}${m}${col}${s} ${!is24 ? `<span id="ampm">${ap}</span>` : ""}`;

  const opt = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  dt.textContent = now.toLocaleDateString(undefined, opt);
}

runClk();
setInterval(runClk, 1000);