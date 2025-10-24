document.addEventListener('DOMContentLoaded', () => {
    const terminal = document.getElementById('terminal-content');
    
    const lines = [
        { text: "Booting MIAMI_VICE v1.37...", speed: 50 },
        { text: "Connecting to secure node...", speed: 50, delay: 500 },
        { text: "Connection established.", speed: 50, delay: 500 },
        { text: " ", speed: 50, delay: 300 },
        { text: "<span class='prompt'>$</span> <span class='info'>load_user_profile --user Bad-Pi</span>", speed: 40, delay: 100 },
        { text: "Accessing database... OK", speed: 20, delay: 500 },
        { text: "Decrypting user data... OK", speed: 20, delay: 500 },
        { text: " ", speed: 50, delay: 300 },
        { text: "<span class='section'>--- [ Мирослав К (Bad-Pi) ] ---</span>", speed: 40, delay: 100 },
        { text: "<span class='section'>---------------------------------</span>", speed: 40, delay: 100 },
        { text: "<span class='user'>ПОСАДА:</span> <span class='info'>Кавоголік з кібербезпекою</span>", speed: 30, delay: 100 },
        { text: " ", speed: 50, delay: 300 },
        { text: "<span class='user'>ОПИС:</span> <span class='info'>\"I'm a cybersecurity student deeply passionate about the offensive side of security. My main interests lie in Pentesting, Malware Development (Maldev), and Social Engineering.\"</span>", speed: 25, delay: 100 },
        { text: " ", speed: 50, delay: 300 },
        { text: "<span class='prompt'>$</span> <span class='info'>ls -l /social_links</span>", speed: 40, delay: 100 },
        { text: " ", speed: 50, delay: 300 },
        { text: `<span class='info'>-rw-r--r-- 1 root root <a href="https://tryhackme.com/p/0xW1ZARD" target="_blank">TryHackMe</a></span>`, speed: 20, delay: 100 },
        { text: `<span class='info'>-rw-r--r-- 1 root root <a href="https://app.hackthebox.com/profile/1969974" target="_blank">Hack The Box</a></span>`, speed: 20, delay: 100 },
        { text: `<span class='info'>-rw-r--r-- 1 root root <a href="https://github.com/QmFkLVBp" target="_blank">GitHub</a></span>`, speed: 20, delay: 100 },
        { text: `<span class='info'>-rw-r--r-- 1 root root <a href="https://www.linkedin.com/in/cybersecsprofile/" target="_blank">LinkedIn</a></span>`, speed: 20, delay: 100 },
        { text: " ", speed: 50, delay: 300 },
        { text: "<span class='prompt'>$</span> <span class='info'></span>", speed: 40, delay: 100 }
    ];

    let lineIndex = 0;

    function typeLine() {
        if (lineIndex < lines.length) {
            const line = lines[lineIndex];
            const lineText = line.text;
            const typingSpeed = line.speed || 50;
            const delay = line.delay || 100;

            terminal.innerHTML += lineText + '\n';
            
            window.scrollTo(0, document.body.scrollHeight);
            lineIndex++;
            
            setTimeout(typeLine, delay);
        } else {
            terminal.innerHTML += '<span class="cursor"></span>';
        }
    }

    async function typeWriter() {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const lineText = line.text;
            const typingSpeed = line.speed || 50;
            const delay = line.delay || 100;

            if (i > 0) {
                await sleep(delay);
            }
            
            const lineElement = document.createElement('span');
            terminal.appendChild(lineElement);
            
            if (lineText === " ") {
                lineElement.innerHTML = " ";
            } else {
                for (let j = 0; j < lineText.length; j++) {
                    lineElement.innerHTML += lineText.charAt(j);
                    window.scrollTo(0, document.body.scrollHeight);
                    await sleep(typingSpeed);
                }
            }
            
            terminal.appendChild(document.createElement('br'));
        }
        
        terminal.innerHTML += '<span class="prompt">$</span> <span class="info"></span><span class="cursor"></span>';
        window.scrollTo(0, document.body.scrollHeight);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    typeWriter();
});
