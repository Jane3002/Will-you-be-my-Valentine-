(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Năm-nay-anh-làm-Valentine-của-em-nhé/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.cóoo) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: pink; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.hôngg-button');
                let btnB = document.querySelector('.cóoo-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.hôngg-button')?.textContent = "Humm... cj ah:((?";
                document.querySelector('.cóoo-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.cóoo-button')?.removeEventListener("click", handlecóoo);
                document.querySelector('.hôngg-button')?.removeEventListener("click", handlehôngg);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Anh có chắc hông đóoo?",
    "Anh chắc chưaa??",
    "Thật hông đóoo?",
    "Đi mà anhhh...",
    "Anh suy nghĩ lại đii:((!",
    "Anh mà nói hông em buồn đó...",
    "Em ăn vạ ra đây đóoo:((...",
    "Em đùa thuiii😋",
    "Anh nói có nhé hehe...🐷❤️",
];

let messageIndex = 0;

function handlehônggClick() {
    const hônggButton = document.querySelector('.hôngg-button');
    const cóooButton = document.querySelector('.cóoo-button');
    hônggButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(cóooButton).fontSize);
    cóooButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handlecóooClick() {
    window.location.href = "cóoo_page.html";
}
