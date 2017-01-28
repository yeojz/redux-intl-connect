const examples = {
  'plural': `{ NUM_ADDS, plural, offset: 1
              =0 { You did not add this }
              =1 { You added this }
              =2 { You and one other person added this }
              other { You and # others added this } }`
}

export default {
  en_US: {
    locale: 'en_US',
    messages: {
      'intro': 'hello',
      ...examples
    }
  },
  zh_CN: {
    locale: 'zh_CN',
    messages: {
      'intro': '你好',
      ...examples
    }
  },
  ko_KR: {
    locale: 'ko_KR',
    messages: {
      'intro': '안녕하세요',
      ...examples
    }
  },
  ja_JP: {
    locale: 'ja_JP',
    messages: {
      'intro': 'こんにちは',
      ...examples
    }
  },
  es_LA: {
    locale: 'es_LA',
    messages: {
      'intro': 'Hola',
      ...examples
    }
  },
  fr_FR: {
    locale: 'fr_FR',
    messages: {
      'intro': 'Bonjour',
      ...examples
    }
  }
}
