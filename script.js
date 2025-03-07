function gacha() {
    let hadiah = [
        { nama: "MADI", chance: 5 },   // Paling langka (5%)
        { nama: "URIP", chance: 15 },         // 15%
        { nama: "HAMIM", chance: 25 },           // 25%
        { nama: "Garena epep", chance: 25 },    // 25%
        { nama: "Alok epep", chance: 30 }       // Paling mudah (30%)
    ];

    let random = Math.random() * 100;
    let cumulative = 0;

    for (let i = 0; i < hadiah.length; i++) {
        cumulative += hadiah[i].chance;
        if (random < cumulative) {
            document.getElementById("gacha-result").innerText = "Selamat! Kamu mendapatkan: " + hadiah[i].nama;
            return;
        }
    }
}
