const fs = require('fs');
const path = require('path');

const i18nDir = '/Users/todyle/Builder/CodyMaster_Site/dist/i18n';

const translations = {
  'en': {
    brain_auto_19: 'Semantic',
    tiers_label: 'FIVE-TIER MEMORY',
    cards_3: {
      title: 'Semantic Memory',
      meta: '⏱ Permanent — qmd / Local Vector',
      desc: 'Deep search across massive docs without token limits. Finds concepts and patterns hidden in text.',
      analogy: '🧠 Like a photographic reading memory'
    },
    cards_4: {
      title: 'Structural Memory',
      meta: '⏱ Real-time — CodeGraph / AST',
      desc: 'Understands your codebase architecture. 95% token compression by reading AST, not raw code.',
      analogy: '🧠 Like an innate sense of spatial awareness'
    }
  },
  'vi': {
    brain_auto_19: 'Ngữ nghĩa',
    tiers_label: 'BỘ NHỚ 5 TẦNG',
    cards_3: {
      title: 'Bộ nhớ Ngữ nghĩa',
      meta: '⏱ Vĩnh viễn — qmd / Local Vector',
      desc: 'Tìm kiếm chuyên sâu trên tài liệu lớn không giới hạn token. Tìm các khái niệm và mẫu ẩn trong văn bản.',
      analogy: '🧠 Giống như trí nhớ đọc thấu thị'
    },
    cards_4: {
      title: 'Bộ nhớ Cấu trúc',
      meta: '⏱ Thời gian thực — CodeGraph / AST',
      desc: 'Hiểu kiến trúc codebase. Nén 95% token bằng cách đọc AST thay vì mã thô.',
      analogy: '🧠 Giống như cảm giác không gian bẩm sinh'
    }
  },
  'zh': {
    brain_auto_19: '语义',
    tiers_label: '五层记忆',
    cards_3: {
      title: '语义记忆',
      meta: '⏱ 永久 — qmd / 局部向量',
      desc: '在海量文档中进行深度搜索，无代币限制。发现隐藏在文本中的概念和模式。',
      analogy: '🧠 就像过目不忘的阅读记忆'
    },
    cards_4: {
      title: '结构记忆',
      meta: '⏱ 实时 — CodeGraph / AST',
      desc: '理解代码库架构。通过读取 AST 而非原始代码实现 95% 的代币压缩。',
      analogy: '🧠 就像天生的空间感知感'
    }
  },
  'ru': {
    brain_auto_19: 'Семантическая',
    tiers_label: '5 УРОВНЕЙ ПАМЯТИ',
    cards_3: {
      title: 'Семантическая память',
      meta: '⏱ Постоянная — qmd / Local Vector',
      desc: 'Глубокий поиск по массивным документам без лимита токенов. Находит концепции и паттерны, скрытые в тексте.',
      analogy: '🧠 Как фотографическая память при чтении'
    },
    cards_4: {
      title: 'Структурная память',
      meta: '⏱ В реальном времени — CodeGraph / AST',
      desc: 'Понимает архитектуру кодовой базы. 95% сжатие токенов путем чтения AST, а не сырого кода.',
      analogy: '🧠 Как врожденное чувство пространственного восприятия'
    }
  },
  'ko': {
    brain_auto_19: '시맨틱',
    tiers_label: '5단계 메모리',
    cards_3: {
      title: '시맨틱 메모리',
      meta: '⏱ 영구 — qmd / 로컬 벡터',
      desc: '토큰 제한 없이 방대한 문서를 정밀 검색합니다. 텍스트에 숨겨진 개념과 패턴을 찾습니다.',
      analogy: '🧠 사진을 찍듯 기억하는 독서 기억과 같음'
    },
    cards_4: {
      title: '구조적 메모리',
      meta: '⏱ 실시간 — 코드그래프 / AST',
      desc: '코드베이스 아키텍처를 이해합니다. 원시 코드가 아닌 AST를 읽어 95%의 토큰 압축을 달성합니다.',
      analogy: '🧠 타고난 공간 지각 능력과 같음'
    }
  },
  'hi': {
    brain_auto_19: 'सिमेंटिक',
    tiers_label: '5-स्तरीय मेमोरी',
    cards_3: {
      title: 'सिमेंटिक मेमोरी',
      meta: '⏱ स्थायी — qmd / लोकल वेक्टर',
      desc: 'टोकन सीमा के बिना विशाल दस्तावेजों में गहन खोज। पाठ में छिपी हुई अवधारणाओं और पैटर्न को ढूंढता है।',
      analogy: '🧠 फोटोग्राफिक पढ़ने की स्मृति की तरह'
    },
    cards_4: {
      title: 'स्ट्रक्चरल मेमोरी',
      meta: '⏱ रीयल-टाइम — कोडग्राफ / AST',
      desc: 'आपके कोडबेस आर्किटेक्चर को समझता है। कच्चे कोड के बजाय AST पढ़कर 95% टोकन संपीड़न प्राप्त करता है।',
      analogy: '🧠 जन्मजात स्थानिक जागरूकता की तरह'
    }
  }
};

const langs = Object.keys(translations);

for (const lang of langs) {
  const file = path.join(i18nDir, lang, 'pages.json');
  if (fs.existsSync(file)) {
    console.log(`Updating ${lang} json`);
    let data = JSON.parse(fs.readFileSync(file, 'utf8'));
    
    // update brain_auto_19
    data.brain_auto_19 = translations[lang].brain_auto_19;
    
    // update tiers
    if (data.brainPage && data.brainPage.tiers) {
      data.brainPage.tiers.label = translations[lang].tiers_label;
      if (!data.brainPage.tiers.cards) {
        data.brainPage.tiers.cards = [];
      }
      data.brainPage.tiers.cards[3] = translations[lang].cards_3;
      data.brainPage.tiers.cards[4] = translations[lang].cards_4;
    }
    
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  } else {
    console.warn(`File not found: ${file}`);
  }
}

console.log('Done');
