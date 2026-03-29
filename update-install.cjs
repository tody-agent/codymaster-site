const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'public', 'i18n');
const langs = ['en', 'vi', 'zh', 'ru', 'ko', 'hi'];

langs.forEach(lang => {
  const homePath = path.join(i18nDir, lang, 'home.json');
  if (fs.existsSync(homePath)) {
    let data = JSON.parse(fs.readFileSync(homePath, 'utf8'));
    if (data.howItWorks && data.howItWorks.steps && data.howItWorks.steps[0]) {
      data.howItWorks.steps[0].description = "One command to install 34 skills.\nDone in 30 seconds.";
      data.howItWorks.steps[0].code = "bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all";
    }
    fs.writeFileSync(homePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${homePath}`);
  }

  const pagesPath = path.join(i18nDir, lang, 'pages.json');
  if (fs.existsSync(pagesPath)) {
    let data = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));
    if (data.install && data.install.platforms) {
      // Find NPM platform
      const npmIndex = data.install.platforms.findIndex(p => p.id === 'npm');
      if (npmIndex !== -1) {
        data.install.platforms[npmIndex].id = 'bash';
        data.install.platforms[npmIndex].label = 'All Agents (Global)';
        data.install.platforms[npmIndex].emoji = '🌍';
        data.install.platforms[npmIndex].steps = [
          {
            "title": "Install All 34 Skills",
            "description": "One command. Auto-detects Cursor, Claude, Antigravity, and installs skills to each.",
            "code": "bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --all",
            "output": "✓ Installed skills to Cursor\n✓ Installed skills to Antigravity\n✓ Installed skills to Claude"
          },
          {
            "title": "Install Dashboard (Optional)",
            "description": "Optional: Install the CLI to get the Kanban dashboard and task management.",
            "code": "npm install -g codymaster",
            "output": "✓ codymaster installed globally\n📦 Commands available: cm, cody, codymaster"
          },
          {
            "title": "Start Creating",
            "description": "Open your IDE or terminal, and just prompt your AI.",
            "code": "cm dashboard",
            "note": "Use the bash script anytime to update skills"
          }
        ];
      }
      
      const opencodeIndex = data.install.platforms.findIndex(p => p.id === 'opencode');
      if (opencodeIndex !== -1 && data.install.platforms[opencodeIndex].steps) {
        data.install.platforms[opencodeIndex].steps[0].code = "git clone https://github.com/tody-agent/codymaster.git ~/.cody-master";
        data.install.platforms[opencodeIndex].steps[1].code = "ln -s ~/.cody-master/skills ~/.opencode/skills";
      }

      // Any platforms using "npm install -g @google/gemini-cli" or "npm install -g @sourcegraph/amp"? They are just for the environments themselves. We should leave them.
    }
    fs.writeFileSync(pagesPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${pagesPath}`);
  }
});
