const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'public', 'i18n');
const langs = ['en', 'vi', 'zh', 'ru', 'ko', 'hi'];

langs.forEach(lang => {
  const pagesPath = path.join(i18nDir, lang, 'pages.json');
  if (fs.existsSync(pagesPath)) {
    let data = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));
    if (data.install && data.install.platforms) {
      const claudeIndex = data.install.platforms.findIndex(p => p.id === 'claude');
      if (claudeIndex !== -1 && data.install.platforms[claudeIndex].steps) {
        data.install.platforms[claudeIndex].steps[1].title = "Clone Repository";
        data.install.platforms[claudeIndex].steps[1].description = "Clone CodyMaster locally to get access to all skills and the CLI.";
        data.install.platforms[claudeIndex].steps[1].code = "git clone https://github.com/tody-agent/codymaster.git ~/.cody-master";
        data.install.platforms[claudeIndex].steps[1].output = "✓ Repository cloned to ~/.cody-master";

        data.install.platforms[claudeIndex].steps[2].title = "Install All 34 Skills";
        data.install.platforms[claudeIndex].steps[2].description = "Run the unified bash installer to copy all skills to your project's .claude/skills folder.";
        data.install.platforms[claudeIndex].steps[2].code = "bash <(curl -fsSL https://raw.githubusercontent.com/tody-agent/codymaster/main/install.sh) --claude";
        data.install.platforms[claudeIndex].steps[2].output = "✓ Skills installed to .claude/skills\\n📦 34 skills: cm-tdd, cm-debugging, cm-planning...";
      }
    }
    fs.writeFileSync(pagesPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated Claude instructions in ${pagesPath}`);
  }
});
