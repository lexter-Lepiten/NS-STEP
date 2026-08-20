// ================= LANGUAGE TRANSLATION SYSTEM =================
// translations.js

const translations = {
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.careers': 'Careers',
        'nav.about': 'About Us',
        'nav.contact': 'Contact us',
        'nav.language': 'English',
        
        // Landing Page — Hero
        'hero.badge': 'LMS Administration & Back-Office Support',
        'hero.tagline': 'Empowering Japanese companies with smarter e-learning operations.',
        'hero.point1': 'Response within 24 hours, every business day',
        'hero.point2': 'Bilingual Japanese-English Operations',
        'hero.point3': 'Dedicated team — not shared support queues',
        'hero.stat1': 'Languages Supported',
        'hero.stat2': 'Dedicated Support',
        'hero.stat3': 'Technical Assistance',
        'hero.cta': 'BOOK A DEMO',
        'hero.secondary': 'See our services',

        // Landing Page — Features
        'features.eyebrow': 'What we do',
        'features.title': 'Our Services',
        'features.desc1': 'Comprehensive LMS administration and operational support built to strengthen your e-learning environment.',
        'features.desc2': 'We support Japanese organizations beyond implementation — providing ongoing maintenance, operational support, and continuous improvement so learning never stops.',
        'features.cta': 'Explore Services',
        'features.card1.title': 'Tech Support',
        'features.card1.category': 'Essential',
        'features.card2.title': 'Multi-Language',
        'features.card2.category': 'Global',
        'features.card3.title': 'Custom Learning',
        'features.card3.category': 'Tailored',

        // Stats
        'stat1.label': 'Languages',
        'stat2.label': 'Dedicated',

        // Social Proof (NEW)
        'sp.header': 'Trusted by Organizations',
        'sp.t1.text': 'NX-STEP transformed how we manage our e-learning platform. Their bilingual support made communication seamless across our Japan and Philippines teams.',
        'sp.t1.name': 'Takashi Kimura',
        'sp.t1.role': 'HR Director, Technology Firm',
        'sp.t2.text': 'The response time and attention to detail exceeded our expectations. Our LMS uptime has been near-perfect since we partnered with NX-STEP.',
        'sp.t2.name': 'Yuki Sato',
        'sp.t2.role': 'Training Manager, Manufacturing Co.',
        'sp.t3.text': 'Having a dedicated team that understands both Japanese business culture and modern LMS technology is rare. NX-STEP delivers both consistently.',
        'sp.t3.name': 'Miki Nakamura',
        'sp.t3.role': 'L&D Lead, Financial Services',
        'sp.trust1': 'Average Response Time',
        'sp.trust2': 'Client Satisfaction Rate',
        'sp.trust3': 'Languages Supported',
        'sp.trust4': 'Dedicated Teams',

        // About
        'about.header': 'About Us',
        'about.eyebrow': 'Our Story',
        'about.heading': 'Built on <em>trust.</em><br>Driven by <em>people.</em>',
        'about.text1': 'Founded on professionalism and integrity, NX-STEP bridges the gap between Japanese organizations and the full potential of their e-learning ecosystems — empowering the people behind the systems.',
        'about.pillar1.title': 'Trust & Integrity',
        'about.pillar2.title': 'Bilingual Fluency',
        'about.pillar3.title': 'Continuous Growth',
        'about.pillar4.title': 'People First',
        'about.cta': 'DISCOVER OUR STORY',

        // Why
        'why.eyebrow': 'Why NX-STEP',
        'why.title': 'Built for Japanese <em>e-learning</em> operations',
        'why.card1.title': 'Trusted & Reliable',
        'why.card1.text': 'We deliver consistent, high-quality service with the precision and dedication that Japanese businesses expect.',
        'why.card2.title': 'Bilingual Expertise',
        'why.card2.text': 'Our team bridges the language gap with seamless Japanese-English support for your entire operation.',
        'why.card3.title': 'Rapid Response',
        'why.card3.text': "Technical issues don't wait, and neither do we. Fast, responsive support keeps your systems running.",
        'why.card4.title': 'Data-Driven',
        'why.card4.text': 'Gain deep insights into how your team learns with actionable analytics and performance tracking.',

        // Join
        'join.header': 'Join Our Team',
        'join.heading': 'Your next step',
        'join.heading.highlight': 'starts here.',
        'join.text': 'Be part of a dynamic team where your skills make an impact — with growth opportunities, a collaborative culture, and meaningful work.',
        'join.perk1.title': 'Professional Growth',
        'join.perk2.title': 'Collaborative Culture',
        'join.perk3.title': 'Global Perspective',
        'join.perk4.title': 'Meaningful Work',
        'join.badge.label': 'Now Hiring',
        'join.badge.value': 'Join Us',
        'join.quote': '"Great things are never done by one person — they\'re done by a team."',
        'join.quote.cite': 'NX-STEP Culture',
        'join.cta': 'EXPLORE CAREERS',

        // CTA Banner
        'ctabanner.label': 'Ready to get started?',
        'ctabanner.title': "Let's optimize your<br><em>learning operations</em>",
        'ctabanner.cta': 'Book a Free Demo',

        // Services Page
        'services.hero.title': 'Discover Your Next Step<br>at NX<span class="red-arrow">►</span>STEP',
        'services.header': 'Services',
        'service1.title': 'Custom Learning',
        'service1.description': 'Precision crafted courses tailored to your workflows.',
        'service2.title': 'Cloud Access',
        'service2.description': 'Learn anytime, anywhere, on any device.',
        'service3.title': 'Course Design',
        'service3.description': 'Clean, easy-to-follow learning materials.',
        'service4.title': 'Multi-language Support',
        'service4.description': 'Training in the language your team understands.',
        'service5.title': 'Tech Support',
        'service5.description': 'Reliable technical assistance.',
        'service6.title': 'Data Insight',
        'service6.description': 'Understand how your team learns.',
        'service7.title': 'Training Video Production',
        'service7.description': 'High-quality training videos.',
        'service8.title': 'Scriptwriting & Storyboarding',
        'service8.description': 'Clear, structured training content.',
        'service9.title': 'Data Privacy & Protection',
        'service9.description': 'Secure your training materials.',
        'service10.title': 'Team Collaboration',
        'service10.description': 'Engage learners through collaboration.',
        'service11.title': 'Security & Compliance Implementation',
        'service11.description': 'Enterprise-grade protection.',
        'modal.subtitle': 'Comprehensive solution for your organization',
        'modal.learnmore': 'Learn more',

        // Careers Page
        'careers.hero.badge': 'Join Our Team',
        'careers.hero.title': 'Shape the Future of Learning',
        'careers.hero.subtitle': 'Discover opportunities to grow your career in e-learning innovation',
        'careers.section.title': 'Open Positions',
        'careers.section.subtitle': "Explore exciting career opportunities and join a team that's transforming education",
        'careers.filter.all': 'All Positions',
        'careers.filter.creative': 'Creative',
        'careers.filter.technical': 'Technical',
        'careers.filter.management': 'Management',
        'careers.meta.location': 'Cebu City',
        'careers.meta.experience': 'years',
        'careers.responsibilities': 'Responsibilities:',
        'careers.qualifications': 'Qualifications:',
        'careers.apply': 'Apply Now',
        'careers.modal.title': 'Application Form',
        'careers.form.name': 'Full Name',
        'careers.form.name.hint': '(Last Name, First Name, MI)',
        'careers.form.email': 'Email Address',
        'careers.form.phone': 'Phone Number',
        'careers.form.address': 'Address',
        'careers.form.resume': 'Resume/CV',
        'careers.form.resume.hint': '(PDF, DOC, or DOCX format)',
        'careers.form.upload': 'Click to upload or drag and drop',
        'careers.form.upload.hint': 'PDF, DOC, DOCX (Max 10MB)',
        'careers.form.cancel': 'Cancel',
        'careers.form.submit': 'Submit Application',
        'careers.info.offer': '💼 What We Offer',
        'careers.info.schedule': '🕐 Work Schedule',
        'careers.info.schedule.text': 'Morning Shift | Monday to Friday<br>8:00 AM - 5:00 PM (with flexible hours)',
        'careers.info.location': '📍 Location',
        'careers.info.location.text': 'Cebu Business Park, Cebu City, Philippines<br>Hybrid work setup available',
        'careers.info.questions': '📧 Questions?',
        'careers.info.questions.text': 'Contact our HR team for more information about this position and our application process.',
        'careers.success.title': 'Application Submitted!',
        'careers.success.message': "Thank you for your interest in joining our team. We've received your application and will review it carefully. You'll hear from us within 5-7 business days.",
        'careers.success.close': 'Close',

        // About Us Page
        'aboutus.hero.badge': 'Our Story',
        'aboutus.hero.title': 'About us',
        'aboutus.hero.desc1': 'NX-STEP is a professional LMS administration and back-office support provider dedicated to helping Japanese businesses manage and optimize their e-learning systems.',
        'aboutus.hero.desc2': 'We started with a simple goal — to make learning management easier, smarter, and more aligned with the way people work in real companies.',
        'aboutus.mission.title': 'Mission',
        'aboutus.mission.text1': 'Our mission is to empower Japanese companies by managing their e-learning systems with precision, consistency, and care.',
        'aboutus.mission.text2': 'We believe that when learning is well supported, organizations grow stronger — not only in knowledge but also in culture and efficiency.',
        'aboutus.vision.title': 'Vision',
        'aboutus.vision.label1': 'Professionalism',
        'aboutus.vision.item1': ' — We uphold high standards in every task.',
        'aboutus.vision.label2': 'Clarity',
        'aboutus.vision.item2': ' — We make communication simple, accurate, and culturally appropriate.',
        'aboutus.vision.label3': 'Commitment',
        'aboutus.vision.item3': ' — We deliver consistent results and continuous improvement.',
        'aboutus.vision.label4': 'Respect',
        'aboutus.vision.item4': ' — We value every client relationship as a partnership built on trust.',
        'aboutus.values.title': 'Core Values',
        'aboutus.value1.title': 'Integrity',
        'aboutus.value1.text': '— We operate with honesty and transparency.',
        'aboutus.value2.title': 'Excellence',
        'aboutus.value2.text': '— We strive for the highest standards in everything we do.',
        'aboutus.value3.title': 'Collaboration',
        'aboutus.value3.text': '— We succeed together, as partners and as a team.',
        'aboutus.value4.title': 'Innovation',
        'aboutus.value4.text': "— We embrace technology to enhance our clients' success.",
        'aboutus.founders.title': 'ORGANIZATIONAL CHART',
        'aboutus.founders.president': 'PRESIDENT',
        'aboutus.founders.datacollector': 'DATA COLLECTOR',
        'aboutus.founders.itdirector': 'IT DIRECTOR',
        'aboutus.founders.hrmanager': 'HR MANAGER',
        'aboutus.founders.qamanager': 'QA MANAGER',
        'aboutus.building.eyebrow': 'Our Office',
        'aboutus.building.badge': 'Cebu City, PH',
        'aboutus.building.title': 'Our Office',
        'aboutus.building.text': 'Our office is located at Unit C-2, 12th Floor, 2Quad Building, Cardinal Rosales Avenue corner Sumilon Road, Cebu Business Park, Hippodromo, Cebu City, Philippines.',
        'aboutus.building.detail1.label': 'Floor',
        'aboutus.building.detail1.value': '12th Floor, Unit C-2',
        'aboutus.building.detail2.label': 'Hours',
        'aboutus.building.detail2.value': 'Mon–Fri, 8:00 AM – 5:00 PM',
        'aboutus.building.detail3.label': 'Building',
        'aboutus.building.detail3.value': '2Quad Building, Cebu Business Park',
        'aboutus.map.eyebrow': 'Find Us',
        'aboutus.map.title': 'Find our Office',
        'aboutus.map.text': 'Use the interactive map to easily locate our office in Cebu City.',
        'aboutus.map.pin': 'NX-STEP Office · 12F 2Quad Building',
        'aboutus.map.cta': 'Open in Google Maps',
        'aboutus.map.address': 'Cardinal Rosales Ave, Cebu Business Park',
        'aboutus.teams.eyebrow': 'The People',
        'aboutus.teams.title': 'TEAMS',
        'aboutus.teams.stat1.num': '5+',
        'aboutus.teams.stat1.label': 'Expert Members',
        'aboutus.teams.stat2.num': '2',
        'aboutus.teams.stat2.label': 'Languages',
        'aboutus.teams.stat3.num': '100%',
        'aboutus.teams.stat3.label': 'Committed',
        'aboutus.teams.desc1': 'Behind NX-STEP is a group of LMS administrators, support specialists, and bilingual coordinators who share one vision — to make learning operations seamless and effective.',
        'aboutus.teams.desc2': "Our team understands how Japanese companies value detail, quality, and reliability — and that's exactly how we work every day.",

        // Contact Page
        'contact.hero.title': 'Get in touch with us',
        'contact.hero.description': 'Contact us — we\'re here to help! Whether you have a question about our LMS support services, need technical assistance, or want to request a demo, we\'d love to hear from you.',
        'contact.header': 'Information Details',
        'contact.form.firstname': 'First Name',
        'contact.form.lastname': 'Last Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Submit',
        'contact.info.title': 'For Other Contact',
        'contact.info.text': 'email us at',
        'contact.info.email': 'support@nx-step.org',
        'contact.info.visit': 'or you can visit us in our office,',
        'contact.success.title': '✓ Message Sent!',
        'contact.success.message': "Thank you for contacting us. We've received your message and will get back to you soon.",
        'contact.success.close': 'Close',

        // Footer
        'footer.description': 'Professional LMS administration and back-office support provider dedicated to helping Japanese businesses manage and optimize their e-learning systems.',
        'footer.quicklinks.title': 'Quick Links',
        'footer.services.title': 'Services',
        'footer.services.lms': 'Custom Learning',
        'footer.services.support': 'Cloud Access',
        'footer.services.training': 'Course Design',
        'footer.services.consulting': 'Multi Language Support',
        'footer.contact.title': 'Contact Us',
        'footer.address': 'Unit C-2, 12th Floor, 2Quad Building,<br>Cebu Business Park, Cebu City, Philippines',
        'footer.copyright': '© 2024 NX-STEP. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service'
    },
    
    ja: {
        // Navbar
        'nav.home': 'ホーム',
        'nav.services': 'サービス',
        'nav.careers': 'キャリア',
        'nav.about': '会社概要',
        'nav.contact': 'お問い合わせ',
        'nav.language': '日本語',

        // Landing Page — Hero
        'hero.badge': 'LMS管理 & バックオフィスサポート',
        'hero.tagline': '日本企業のeラーニング運用をよりスマートに。',
        'hero.point1': '毎営業日24時間以内に対応',
        'hero.point2': '日本語・英語バイリンガル対応',
        'hero.point3': '専任チーム — 共有サポートキューではありません',
        'hero.stat1': '対応言語',
        'hero.stat2': '専任サポート',
        'hero.stat3': '技術支援',
        'hero.cta': 'デモを予約',
        'hero.secondary': 'サービスを見る',

        // Features
        'features.eyebrow': '私たちの取り組み',
        'features.title': '私たちのサービス',
        'features.desc1': 'eラーニング環境を強化するために構築された包括的なLMS管理と運用サポート。',
        'features.desc2': '導入後も日本の組織をサポートし、継続的なメンテナンス、運用サポート、継続的な改善を提供します。',
        'features.cta': 'サービスを見る',
        'features.card1.title': 'テクニカルサポート',
        'features.card1.category': '必須',
        'features.card2.title': '多言語対応',
        'features.card2.category': 'グローバル',
        'features.card3.title': 'カスタム学習',
        'features.card3.category': 'カスタマイズ',

        // Stats
        'stat1.label': '言語',
        'stat2.label': '専任',

        // Social Proof (NEW)
        'sp.header': '信頼される組織へ',
        'sp.t1.text': 'NX-STEPはeラーニングプラットフォームの管理方法を変革しました。バイリンガルサポートにより、日本とフィリピンのチーム間のコミュニケーションがシームレスになりました。',
        'sp.t1.name': '木村 隆',
        'sp.t1.role': 'HRディレクター、テクノロジー企業',
        'sp.t2.text': '対応の速さと細部へのこだわりが期待以上でした。NX-STEPとのパートナーシップ以来、LMSの稼働率はほぼ完璧です。',
        'sp.t2.name': '佐藤 ゆき',
        'sp.t2.role': 'トレーニングマネージャー、製造業',
        'sp.t3.text': '日本のビジネス文化と最新のLMS技術の両方を理解した専任チームは稀有です。NX-STEPは両方を一貫して提供してくれます。',
        'sp.t3.name': '中村 美樹',
        'sp.t3.role': 'L&Dリード、金融サービス',
        'sp.trust1': '平均応答時間',
        'sp.trust2': 'クライアント満足度',
        'sp.trust3': '対応言語数',
        'sp.trust4': '専任チーム',

        // About
        'about.header': '会社概要',
        'about.eyebrow': '私たちのストーリー',
        'about.heading': '<em>信頼</em>に基づき、<br><em>人</em>に支えられて。',
        'about.text1': 'プロフェッショナリズムと誠実さを基盤として設立されたNX-STEPは、日本の組織とeラーニングエコシステムの可能性を繋ぎ、システムを支える人々を支援します。',
        'about.pillar1.title': '信頼と誠実さ',
        'about.pillar2.title': 'バイリンガル能力',
        'about.pillar3.title': '継続的な成長',
        'about.pillar4.title': '人を第一に',
        'about.cta': '私たちのストーリーを見る',

        // Why
        'why.eyebrow': 'NX-STEPを選ぶ理由',
        'why.title': '日本のeラーニング運用のために構築',
        'why.card1.title': '信頼性と安定性',
        'why.card1.text': '日本企業が期待する精度と献身性をもって、一貫した高品質なサービスを提供します。',
        'why.card2.title': 'バイリンガルの専門知識',
        'why.card2.text': '私たちのチームは、日本語と英語のシームレスなサポートで言語の壁を橋渡しします。',
        'why.card3.title': '迅速な対応',
        'why.card3.text': '技術的な問題は待てません。私たちも同様です。迅速な対応でシステムを稼働させ続けます。',
        'why.card4.title': 'データ駆動型',
        'why.card4.text': 'チームの学習方法について深い洞察を得て、実用的な分析とパフォーマンス追跡を活用できます。',

        // Join
        'join.header': 'チームに参加',
        'join.heading': 'あなたの次のステップは',
        'join.heading.highlight': 'ここから始まります。',
        'join.text': 'あなたのスキルとアイデアが影響を与える、ダイナミックで成長中の組織の一員になりましょう。',
        'join.perk1.title': 'プロフェッショナルな成長',
        'join.perk2.title': '協力的な文化',
        'join.perk3.title': 'グローバルな視点',
        'join.perk4.title': '意味のある仕事',
        'join.badge.label': '採用中',
        'join.badge.value': '参加する',
        'join.quote': '「偉大なことは一人ではなく、チームによって成し遂げられる。」',
        'join.quote.cite': 'NX-STEP カルチャー',
        'join.cta': 'キャリアを見る',

        // CTA Banner
        'ctabanner.label': '始める準備はできましたか？',
        'ctabanner.title': '学習業務を<br><em>最適化しましょう</em>',
        'ctabanner.cta': '無料デモを予約',

        // Services
        'services.hero.title': 'あなたの次のステップを発見<br>NX<span class="red-arrow">►</span>STEPで',
        'services.header': 'サービス',
        'service1.title': 'カスタム学習',
        'service1.description': 'ワークフローに合わせて精密に作成されたコース。',
        'service2.title': 'クラウドアクセス',
        'service2.description': 'いつでも、どこでも、どのデバイスでも学習。',
        'service3.title': 'コース設計',
        'service3.description': 'わかりやすく、フォローしやすい学習教材。',
        'service4.title': '多言語サポート',
        'service4.description': 'チームが理解できる言語でのトレーニング。',
        'service5.title': 'テクニカルサポート',
        'service5.description': '信頼できる技術支援。',
        'service6.title': 'データインサイト',
        'service6.description': 'チームの学習方法を理解する。',
        'service7.title': 'トレーニング動画制作',
        'service7.description': '高品質なトレーニング動画。',
        'service8.title': '脚本・絵コンテ作成',
        'service8.description': '明確で構造化されたトレーニングコンテンツ。',
        'service9.title': 'データプライバシー保護',
        'service9.description': 'トレーニング資料を保護。',
        'service10.title': 'チームコラボレーション',
        'service10.description': 'コラボレーションを通じて学習者を参加させる。',
        'service11.title': 'セキュリティとコンプライアンス',
        'service11.description': 'エンタープライズグレードの保護。',
        'modal.subtitle': '組織のための包括的なソリューション',
        'modal.learnmore': '詳細を見る',

        // Careers
        'careers.hero.badge': 'チームに参加',
        'careers.hero.title': '学習の未来を形作る',
        'careers.hero.subtitle': 'eラーニング革新でキャリアを成長させる機会を発見',
        'careers.section.title': '募集中のポジション',
        'careers.section.subtitle': 'エキサイティングなキャリアの機会を探索し、教育を変革するチームに参加',
        'careers.filter.all': 'すべてのポジション',
        'careers.filter.creative': 'クリエイティブ',
        'careers.filter.technical': 'テクニカル',
        'careers.filter.management': 'マネジメント',
        'careers.meta.location': 'セブ市',
        'careers.meta.experience': '年以上',
        'careers.responsibilities': '責任:',
        'careers.qualifications': '資格:',
        'careers.apply': '今すぐ応募',
        'careers.modal.title': '応募フォーム',
        'careers.form.name': '氏名',
        'careers.form.name.hint': '(姓、名、ミドルネーム)',
        'careers.form.email': 'メールアドレス',
        'careers.form.phone': '電話番号',
        'careers.form.address': '住所',
        'careers.form.resume': '履歴書/CV',
        'careers.form.resume.hint': '(PDF、DOC、またはDOCX形式)',
        'careers.form.upload': 'クリックしてアップロードまたはドラッグ&ドロップ',
        'careers.form.upload.hint': 'PDF、DOC、DOCX(最大10MB)',
        'careers.form.cancel': 'キャンセル',
        'careers.form.submit': '応募を提出',
        'careers.info.offer': '💼 提供内容',
        'careers.info.schedule': '🕐 勤務スケジュール',
        'careers.info.schedule.text': '朝シフト | 月曜日〜金曜日<br>午前8:00〜午後5:00(フレックスタイムあり)',
        'careers.info.location': '📍 所在地',
        'careers.info.location.text': 'セブビジネスパーク、セブ市、フィリピン<br>ハイブリッド勤務可能',
        'careers.info.questions': '📧 質問がありますか?',
        'careers.info.questions.text': 'このポジションと応募プロセスの詳細については、人事チームにお問い合わせください。',
        'careers.success.title': '応募完了!',
        'careers.success.message': 'チームへの参加に興味を持っていただきありがとうございます。5〜7営業日以内にご連絡いたします。',
        'careers.success.close': '閉じる',

        // About Us
        'aboutus.hero.badge': '私たちのストーリー',
        'aboutus.hero.title': '会社概要',
        'aboutus.hero.desc1': 'NX-STEPは、日本企業がeラーニングシステムを管理・最適化するのを支援する専門的なLMS管理およびバックオフィスサポートプロバイダーです。',
        'aboutus.hero.desc2': '私たちは、学習管理をより簡単で、よりスマートに、そして実際の企業での働き方により適合させるという単純な目標から始めました。',
        'aboutus.mission.title': 'ミッション',
        'aboutus.mission.text1': '私たちのミッションは、精度、一貫性、注意深さをもってeラーニングシステムを管理することにより、日本企業を支援することです。',
        'aboutus.mission.text2': '学習が十分にサポートされると、組織は知識だけでなく、文化と効率の面でも強くなると信じています。',
        'aboutus.vision.title': 'ビジョン',
        'aboutus.vision.label1': 'プロフェッショナリズム',
        'aboutus.vision.item1': ' — すべてのタスクで高い基準を維持します。',
        'aboutus.vision.label2': '明確性',
        'aboutus.vision.item2': ' — コミュニケーションをシンプルで正確にします。',
        'aboutus.vision.label3': 'コミットメント',
        'aboutus.vision.item3': ' — 一貫した結果と継続的な改善を提供します。',
        'aboutus.vision.label4': '尊重',
        'aboutus.vision.item4': ' — すべてのクライアント関係を信頼に基づくパートナーシップとして大切にします。',
        'aboutus.values.title': 'コアバリュー',
        'aboutus.value1.title': '誠実性',
        'aboutus.value1.text': '— 正直さと透明性をもって運営します。',
        'aboutus.value2.title': '卓越性',
        'aboutus.value2.text': '— すべてにおいて最高水準を目指します。',
        'aboutus.value3.title': '協力',
        'aboutus.value3.text': '— パートナーとして、チームとして、一緒に成功します。',
        'aboutus.value4.title': '革新',
        'aboutus.value4.text': '— クライアントの成功を高めるために技術を取り入れます。',
        'aboutus.founders.title': '組織図',
        'aboutus.founders.president': '社長',
        'aboutus.founders.datacollector': 'データコレクター',
        'aboutus.founders.itdirector': 'ITディレクター',
        'aboutus.founders.hrmanager': '人事マネージャー',
        'aboutus.founders.qamanager': 'QAマネージャー',
        'aboutus.building.eyebrow': '私たちのオフィス',
        'aboutus.building.badge': 'フィリピン、セブ市',
        'aboutus.building.title': '私たちのオフィス',
        'aboutus.building.text': '当社のオフィスは、フィリピン、セブ市、2Quadビルディング12階、ユニットC-2にあります。',
        'aboutus.building.detail1.label': 'フロア',
        'aboutus.building.detail1.value': '12階、ユニットC-2',
        'aboutus.building.detail2.label': '営業時間',
        'aboutus.building.detail2.value': '月〜金、午前8:00〜午後5:00',
        'aboutus.building.detail3.label': 'ビル名',
        'aboutus.building.detail3.value': '2Quadビル、セブビジネスパーク',
        'aboutus.map.eyebrow': '所在地',
        'aboutus.map.title': 'オフィスを見つける',
        'aboutus.map.text': 'インタラクティブなマップを使用して、セブ市の当社オフィスを簡単に見つけることができます。',
        'aboutus.map.pin': 'NX-STEPオフィス · 2Quadビル12階',
        'aboutus.map.cta': 'Googleマップで開く',
        'aboutus.map.address': 'カーディナルロサレス通り、セブビジネスパーク',
        'aboutus.teams.eyebrow': 'チームメンバー',
        'aboutus.teams.title': 'チーム',
        'aboutus.teams.stat1.num': '5名以上',
        'aboutus.teams.stat1.label': '専門メンバー',
        'aboutus.teams.stat2.num': '2',
        'aboutus.teams.stat2.label': '対応言語',
        'aboutus.teams.stat3.num': '100%',
        'aboutus.teams.stat3.label': '全力対応',
        'aboutus.teams.desc1': 'NX-STEPの背後には、学習運用をシームレスで効果的にするという一つのビジョンを共有するLMS管理者、サポートスペシャリスト、バイリンガルコーディネーターのグループがいます。',
        'aboutus.teams.desc2': '私たちのチームは、日本企業が詳細、品質、信頼性を重視することを理解しており、それがまさに私たちが毎日働く方法です。',

        // Contact
        'contact.hero.title': 'お問い合わせ',
        'contact.hero.description': 'お問い合わせください。LMSサポートサービスに関する質問、技術支援、またはデモリクエストなど、お気軽にお問い合わせください。',
        'contact.header': '情報詳細',
        'contact.form.firstname': '名',
        'contact.form.lastname': '姓',
        'contact.form.email': 'メールアドレス',
        'contact.form.subject': '件名',
        'contact.form.message': 'メッセージ',
        'contact.form.submit': '送信',
        'contact.info.title': '他のお問い合わせ',
        'contact.info.text': 'メールでお問い合わせください',
        'contact.info.email': 'support@nx-step.org',
        'contact.info.visit': 'または、当社のオフィスにご訪問ください。',
        'contact.success.title': '✓ メッセージ送信完了!',
        'contact.success.message': 'お問い合わせいただきありがとうございます。すぐにご連絡いたします。',
        'contact.success.close': '閉じる',

        // Footer
        'footer.description': '専門的なLMS管理およびバックオフィスサポートプロバイダーとして、日本企業がeラーニングシステムを管理・最適化するのを支援します。',
        'footer.quicklinks.title': 'クイックリンク',
        'footer.services.title': 'サービス',
        'footer.services.lms': 'カスタム学習',
        'footer.services.support': 'クラウドアクセス',
        'footer.services.training': 'コース設計',
        'footer.services.consulting': '多言語サポート',
        'footer.contact.title': 'お問い合わせ',
        'footer.address': 'フィリピン、セブ市、セブビジネスパーク、<br>2Quadビル12階、ユニットC-2',
        'footer.copyright': '© 2024 NX-STEP。無断転載禁止。',
        'footer.privacy': 'プライバシーポリシー',
        'footer.terms': '利用規約'
    }
};

// ================= LANGUAGE SWITCHER =================
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('preferredLanguage') || 'en';
        this.languageBtn = document.querySelector('.language-btn');
        this.languageIcon = document.querySelector('.language-icon');
        this.init();
    }
    
    init() {
        this.setLanguage(this.currentLang, false);
        if (this.languageBtn) {
            this.languageBtn.addEventListener('click', () => this.toggleLanguage());
        }
        this.updateIcon();
    }
    
    toggleLanguage() {
        const newLang = this.currentLang === 'en' ? 'ja' : 'en';
        this.setLanguage(newLang, true);
    }
    
    setLanguage(lang, animate = true) {
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);

        if (animate) {
            // IMPROVED: Per-element transition instead of body opacity fade
            this.animateTranslation();
        } else {
            this.translatePage();
            this.updateIcon();
        }
    }

    animateTranslation() {
        const elements = document.querySelectorAll('[data-translate]');

        // Step 1: fade each element out
        elements.forEach(el => el.classList.add('lang-switching'));

        // Step 2: swap text while invisible, then fade back in
        setTimeout(() => {
            this.translatePage();
            this.updateIcon();
            elements.forEach(el => el.classList.remove('lang-switching'));
        }, 200);
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            const translation = translations[this.currentLang][key];
            if (translation !== undefined) {
                const attr = el.getAttribute('data-translate-attr');
                if (attr) {
                    el.setAttribute(attr, translation);
                } else {
                    el.innerHTML = translation;
                }
            }
        });

        // Update language button label
        if (this.languageBtn) {
            const langSpan = this.languageBtn.querySelector('span:last-child');
            if (langSpan) {
                langSpan.textContent = this.currentLang === 'en' ? 'English' : '日本語';
            }
        }
    }
    
    updateIcon() {
        if (this.languageIcon) {
            this.languageIcon.style.transition = 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)';
            this.languageIcon.style.transform = 'rotate(180deg) scale(1.1)';
            setTimeout(() => {
                this.languageIcon.textContent = this.currentLang === 'en' ? '🌐' : '🇯🇵';
                this.languageIcon.style.transform = 'rotate(360deg) scale(1)';
            }, 180);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});