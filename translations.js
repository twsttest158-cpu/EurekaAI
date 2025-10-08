// Translation system for EurekaAI
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.services': 'Services',
        'nav.about': 'About',
        'nav.start': 'Get Started',
        
        // Hero Section
        'hero.welcome': 'Welcome to',
        'hero.description': 'Discover the power of advanced artificial intelligence. Smart solutions that help you achieve your goals with unmatched speed and accuracy',
        'hero.try_free': 'Try for Free',
        'hero.watch_demo': 'Watch Demo',
        
        // Features Section
        'features.title': 'Exceptional',
        'features.subtitle': 'Advanced technologies that make your AI experience easy and effective',
        'features.smart_learning': 'Smart Learning',
        'features.smart_learning_desc': 'Advanced algorithms that learn from your data and improve over time to deliver more accurate results',
        'features.super_speed': 'Super Speed',
        'features.super_speed_desc': 'Fast data and query processing with response times of just seconds',
        'features.advanced_security': 'Advanced Security',
        'features.advanced_security_desc': 'High-level protection for your data with world-class encryption and unbreakable security',
        'features.ease_of_use': 'Ease of Use',
        'features.ease_of_use_desc': 'Intuitive and easy-to-learn interface that makes AI accessible to everyone',
        'features.advanced_analytics': 'Advanced Analytics',
        'features.advanced_analytics_desc': 'Deep insights and comprehensive analytics that help you make informed decisions',
        'features.cross_platform': 'Cross-Platform Compatible',
        'features.cross_platform_desc': 'Works seamlessly on smartphones, tablets, and computers',
        
        // Services Section
        'services.title': 'Our Distinguished',
        'services.subtitle': 'Comprehensive AI solutions covering all your needs',
        'services.nlp': 'Natural Language Processing',
        'services.nlp_desc': 'Understanding and analyzing Arabic and English texts with high accuracy',
        'services.image_analysis': 'Image Analysis',
        'services.image_analysis_desc': 'Advanced image recognition and analysis using deep learning',
        'services.voice_processing': 'Voice Processing',
        'services.voice_processing_desc': 'Converting speech to text and text to speech with natural quality',
        'services.data_analysis': 'Data Analysis',
        'services.data_analysis_desc': 'Extracting insights and patterns from big data',
        'services.automation': 'Smart Automation',
        'services.automation_desc': 'Automating routine tasks to increase productivity',
        'services.consulting': 'AI Consulting',
        'services.consulting_desc': 'Expert consultation to implement AI in your business',
        
        // About Section
        'about.title': 'About',
        'about.subtitle': 'We are a team of experts passionate about artificial intelligence',
        'about.description': 'EurekaAI was founded with the vision of making artificial intelligence accessible to everyone. We believe that AI should be a tool that empowers people and businesses to achieve their full potential.',
        'about.mission': 'Our Mission',
        'about.mission_desc': 'To provide advanced and easy-to-use AI solutions that help our users achieve their goals efficiently and effectively.',
        'about.vision': 'Our Vision',
        'about.vision_desc': 'To be the leading platform for artificial intelligence in the Arab world and globally.',
        'about.values': 'Our Values',
        'about.values_desc': 'Innovation, quality, transparency, and commitment to our users\' success.',
        
        // Footer
        'footer.description': 'The leading platform for advanced artificial intelligence',
        'footer.quick_links': 'Quick Links',
        'footer.contact': 'Contact Us',
        'footer.follow': 'Follow Us',
        'footer.rights': 'All rights reserved',
        
        // Chat Interface
        'chat.select_model': 'Choose AI Model',
        'chat.model_subtitle': 'A diverse range of advanced AI models to meet all your needs',
        'chat.search_placeholder': 'Search for a model...',
        'chat.filter_all': 'All',
        'chat.filter_chat': 'Chat',
        'chat.filter_image': 'Images',
        'chat.filter_voice': 'Voice',
        'chat.new_chat': 'New Chat',
        'chat.welcome': 'Hello! How can I help you?',
        'chat.start_conversation': 'Start your conversation with',
        'chat.type_message': 'Type your message...',
        'chat.send': 'Send',
        'chat.attach': 'Attach File',
        'chat.export': 'Export Chat',
        'chat.free': 'Free',
        'chat.available_for_chat': 'Available for chat and general questions',
        'chat.available_for_images': 'Available for image generation and analysis',
        'chat.available_for_voice': 'Available for voice and speech processing',
        'chat.available_for_vision': 'Available for image analysis and understanding',
        'chat.available': 'Available for use',
        
        // Models
        'model.openai_o3_mini': 'Latest model from OpenAI for advanced AI',
        'model.gpt4o_mini': 'Enhanced and fast version of GPT-4',
        'model.grok_beta': 'Enhanced and fast version of Grok',
        'model.gemini_2_flash': 'Enhanced and fast version of Gemini',
        'model.gemini_1_5_flash': 'Enhanced and fast version of Gemini',
        'model.claude_sonnet': 'Enhanced version of Claude',
        'model.deepseek_chat': 'DeepSeek Chat: Advanced model for intelligent conversation',
        
        // Language Selector
        'lang.english': 'English',
        'lang.portuguese': 'Português (BR)',
        'lang.arabic': 'العربية',
        'lang.select': 'Language'
    },
    
    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.features': 'Recursos',
        'nav.services': 'Serviços',
        'nav.about': 'Sobre',
        'nav.start': 'Começar',
        
        // Hero Section
        'hero.welcome': 'Bem-vindo ao',
        'hero.description': 'Descubra o poder da inteligência artificial avançada. Soluções inteligentes que ajudam você a alcançar seus objetivos com velocidade e precisão incomparáveis',
        'hero.try_free': 'Experimente Grátis',
        'hero.watch_demo': 'Assistir Demo',
        
        // Features Section
        'features.title': 'Recursos',
        'features.subtitle': 'Tecnologias avançadas que tornam sua experiência com IA fácil e eficaz',
        'features.smart_learning': 'Aprendizado Inteligente',
        'features.smart_learning_desc': 'Algoritmos avançados que aprendem com seus dados e melhoram com o tempo para entregar resultados mais precisos',
        'features.super_speed': 'Super Velocidade',
        'features.super_speed_desc': 'Processamento rápido de dados e consultas com tempos de resposta de apenas segundos',
        'features.advanced_security': 'Segurança Avançada',
        'features.advanced_security_desc': 'Proteção de alto nível para seus dados com criptografia de classe mundial e segurança inquebrável',
        'features.ease_of_use': 'Facilidade de Uso',
        'features.ease_of_use_desc': 'Interface intuitiva e fácil de aprender que torna a IA acessível a todos',
        'features.advanced_analytics': 'Análises Avançadas',
        'features.advanced_analytics_desc': 'Insights profundos e análises abrangentes que ajudam você a tomar decisões informadas',
        'features.cross_platform': 'Compatível com Todas as Plataformas',
        'features.cross_platform_desc': 'Funciona perfeitamente em smartphones, tablets e computadores',
        
        // Services Section
        'services.title': 'Nossos Serviços',
        'services.subtitle': 'Soluções abrangentes de IA cobrindo todas as suas necessidades',
        'services.nlp': 'Processamento de Linguagem Natural',
        'services.nlp_desc': 'Compreensão e análise de textos em português e inglês com alta precisão',
        'services.image_analysis': 'Análise de Imagens',
        'services.image_analysis_desc': 'Reconhecimento e análise avançada de imagens usando aprendizado profundo',
        'services.voice_processing': 'Processamento de Voz',
        'services.voice_processing_desc': 'Conversão de fala para texto e texto para fala com qualidade natural',
        'services.data_analysis': 'Análise de Dados',
        'services.data_analysis_desc': 'Extração de insights e padrões de big data',
        'services.automation': 'Automação Inteligente',
        'services.automation_desc': 'Automatização de tarefas rotineiras para aumentar a produtividade',
        'services.consulting': 'Consultoria em IA',
        'services.consulting_desc': 'Consultoria especializada para implementar IA em seu negócio',
        
        // About Section
        'about.title': 'Sobre',
        'about.subtitle': 'Somos uma equipe de especialistas apaixonados por inteligência artificial',
        'about.description': 'A EurekaAI foi fundada com a visão de tornar a inteligência artificial acessível a todos. Acreditamos que a IA deve ser uma ferramenta que capacita pessoas e empresas a alcançar seu potencial máximo.',
        'about.mission': 'Nossa Missão',
        'about.mission_desc': 'Fornecer soluções de IA avançadas e fáceis de usar que ajudem nossos usuários a alcançar seus objetivos de forma eficiente e eficaz.',
        'about.vision': 'Nossa Visão',
        'about.vision_desc': 'Ser a plataforma líder em inteligência artificial no Brasil e globalmente.',
        'about.values': 'Nossos Valores',
        'about.values_desc': 'Inovação, qualidade, transparência e compromisso com o sucesso de nossos usuários.',
        
        // Footer
        'footer.description': 'A plataforma líder em inteligência artificial avançada',
        'footer.quick_links': 'Links Rápidos',
        'footer.contact': 'Contate-nos',
        'footer.follow': 'Siga-nos',
        'footer.rights': 'Todos os direitos reservados',
        
        // Chat Interface
        'chat.select_model': 'Escolha o Modelo de IA',
        'chat.model_subtitle': 'Uma gama diversificada de modelos de IA avançados para atender todas as suas necessidades',
        'chat.search_placeholder': 'Procurar por um modelo...',
        'chat.filter_all': 'Todos',
        'chat.filter_chat': 'Chat',
        'chat.filter_image': 'Imagens',
        'chat.filter_voice': 'Voz',
        'chat.new_chat': 'Novo Chat',
        'chat.welcome': 'Olá! Como posso ajudá-lo?',
        'chat.start_conversation': 'Inicie sua conversa com',
        'chat.type_message': 'Digite sua mensagem...',
        'chat.send': 'Enviar',
        'chat.attach': 'Anexar Arquivo',
        'chat.export': 'Exportar Chat',
        'chat.free': 'Grátis',
        'chat.available_for_chat': 'Disponível para chat e perguntas gerais',
        'chat.available_for_images': 'Disponível para geração e análise de imagens',
        'chat.available_for_voice': 'Disponível para processamento de voz e fala',
        'chat.available_for_vision': 'Disponível para análise e compreensão de imagens',
        'chat.available': 'Disponível para uso',
        
        // Models
        'model.openai_o3_mini': 'Modelo mais recente da OpenAI para IA avançada',
        'model.gpt4o_mini': 'Versão aprimorada e rápida do GPT-4',
        'model.grok_beta': 'Versão aprimorada e rápida do Grok',
        'model.gemini_2_flash': 'Versão aprimorada e rápida do Gemini',
        'model.gemini_1_5_flash': 'Versão aprimorada e rápida do Gemini',
        'model.claude_sonnet': 'Versão aprimorada do Claude',
        'model.deepseek_chat': 'DeepSeek Chat: Modelo avançado para conversação inteligente',
        
        // Language Selector
        'lang.english': 'English',
        'lang.portuguese': 'Português (BR)',
        'lang.arabic': 'العربية',
        'lang.select': 'Idioma'
    },
    
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.features': 'الميزات',
        'nav.services': 'الخدمات',
        'nav.about': 'من نحن',
        'nav.start': 'ابدأ الآن',
        
        // Hero Section
        'hero.welcome': 'مرحباً بك في',
        'hero.description': 'اكتشف قوة الذكاء الاصطناعي المتقدم. حلول ذكية تساعدك على تحقيق أهدافك بسرعة ودقة لا مثيل لها',
        'hero.try_free': 'جربه مجاناً',
        'hero.watch_demo': 'شاهد العرض التوضيحي',
        
        // Features Section
        'features.title': 'ميزات',
        'features.subtitle': 'تقنيات متطورة تجعل تجربتك مع الذكاء الاصطناعي سهلة وفعالة',
        'features.smart_learning': 'تعلم ذكي',
        'features.smart_learning_desc': 'خوارزميات متطورة تتعلم من بياناتك وتتحسن مع الوقت لتقديم نتائج أكثر دقة',
        'features.super_speed': 'سرعة فائقة',
        'features.super_speed_desc': 'معالجة سريعة للبيانات والاستعلامات مع زمن استجابة لا يتجاوز الثواني',
        'features.advanced_security': 'أمان متقدم',
        'features.advanced_security_desc': 'حماية عالية المستوى لبياناتك مع تشفير من الطراز العالمي وأمان لا يُخترق',
        'features.ease_of_use': 'سهولة الاستخدام',
        'features.ease_of_use_desc': 'واجهة بديهية وسهلة التعلم تجعل الذكاء الاصطناعي في متناول الجميع',
        'features.advanced_analytics': 'تحليلات متقدمة',
        'features.advanced_analytics_desc': 'رؤى عميقة وتحليلات شاملة تساعدك على اتخاذ قرارات مدروسة',
        'features.cross_platform': 'متوافق مع جميع الأجهزة',
        'features.cross_platform_desc': 'يعمل بسلاسة على الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر',
        
        // Services Section
        'services.title': 'خدماتنا',
        'services.subtitle': 'حلول شاملة للذكاء الاصطناعي تغطي جميع احتياجاتك',
        'services.nlp': 'معالجة اللغة الطبيعية',
        'services.nlp_desc': 'فهم وتحليل النصوص العربية والإنجليزية بدقة عالية',
        'services.image_analysis': 'تحليل الصور',
        'services.image_analysis_desc': 'التعرف على الصور وتحليلها المتقدم باستخدام التعلم العميق',
        'services.voice_processing': 'معالجة الصوت',
        'services.voice_processing_desc': 'تحويل الكلام إلى نص والنص إلى كلام بجودة طبيعية',
        'services.data_analysis': 'تحليل البيانات',
        'services.data_analysis_desc': 'استخراج الرؤى والأنماط من البيانات الضخمة',
        'services.automation': 'الأتمتة الذكية',
        'services.automation_desc': 'أتمتة المهام الروتينية لزيادة الإنتاجية',
        'services.consulting': 'استشارات الذكاء الاصطناعي',
        'services.consulting_desc': 'استشارة متخصصة لتطبيق الذكاء الاصطناعي في عملك',
        
        // About Section
        'about.title': 'من نحن',
        'about.subtitle': 'نحن فريق من الخبراء المتحمسين للذكاء الاصطناعي',
        'about.description': 'تأسست EurekaAI برؤية جعل الذكاء الاصطناعي في متناول الجميع. نؤمن أن الذكاء الاصطناعي يجب أن يكون أداة تمكن الأشخاص والشركات من تحقيق إمكاناتهم الكاملة.',
        'about.mission': 'مهمتنا',
        'about.mission_desc': 'تقديم حلول ذكاء اصطناعي متقدمة وسهلة الاستخدام تساعد مستخدمينا على تحقيق أهدافهم بكفاءة وفعالية.',
        'about.vision': 'رؤيتنا',
        'about.vision_desc': 'أن نكون المنصة الرائدة للذكاء الاصطناعي في العالم العربي وعالمياً.',
        'about.values': 'قيمنا',
        'about.values_desc': 'الابتكار والجودة والشفافية والالتزام بنجاح مستخدمينا.',
        
        // Footer
        'footer.description': 'المنصة الرائدة للذكاء الاصطناعي المتقدم',
        'footer.quick_links': 'روابط سريعة',
        'footer.contact': 'اتصل بنا',
        'footer.follow': 'تابعنا',
        'footer.rights': 'جميع الحقوق محفوظة',
        
        // Chat Interface
        'chat.select_model': 'اختر نموذج الذكاء الاصطناعي',
        'chat.model_subtitle': 'مجموعة متنوعة من نماذج الذكاء الاصطناعي المتقدمة لتلبية جميع احتياجاتك',
        'chat.search_placeholder': 'ابحث عن نموذج...',
        'chat.filter_all': 'الكل',
        'chat.filter_chat': 'دردشة',
        'chat.filter_image': 'صور',
        'chat.filter_voice': 'صوت',
        'chat.new_chat': 'محادثة جديدة',
        'chat.welcome': 'مرحباً! كيف يمكنني مساعدتك؟',
        'chat.start_conversation': 'ابدأ محادثتك مع',
        'chat.type_message': 'اكتب رسالتك...',
        'chat.send': 'إرسال',
        'chat.attach': 'إرفاق ملف',
        'chat.export': 'تصدير المحادثة',
        'chat.free': 'مجاني',
        'chat.available_for_chat': 'متاح للمحادثة والأسئلة العامة',
        'chat.available_for_images': 'متاح لتوليد وتحليل الصور',
        'chat.available_for_voice': 'متاح لمعالجة الصوت والكلام',
        'chat.available_for_vision': 'متاح لتحليل وفهم الصور',
        'chat.available': 'متاح للاستخدام',
        
        // Models
        'model.openai_o3_mini': 'أحدث نموذج من OpenAI للذكاء الاصطناعي المتقدم',
        'model.gpt4o_mini': 'نسخة مطورة وسريعة من GPT-4',
        'model.grok_beta': 'نسخة مطورة وسريعة من Grok',
        'model.gemini_2_flash': 'نسخة مطورة وسريعة من Gemini',
        'model.gemini_1_5_flash': 'نسخة مطورة وسريعة من Gemini',
        'model.claude_sonnet': 'نسخة مطورة من Claude',
        'model.deepseek_chat': 'DeepSeek Chat: نموذج متقدم للدردشة الذكية',
        
        // Language Selector
        'lang.english': 'English',
        'lang.portuguese': 'Português (BR)',
        'lang.arabic': 'العربية',
        'lang.select': 'اللغة'
    }
};

// Language management
class LanguageManager {
    constructor() {
        this.currentLanguage = 'en'; // Default to English
        this.init();
    }
    
    init() {
        // Load saved language or default to English
        const savedLang = localStorage.getItem('eurekaai_language') || 'en';
        this.setLanguage(savedLang);
    }
    
    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Language ${lang} not supported, falling back to English`);
            lang = 'en';
        }
        
        this.currentLanguage = lang;
        localStorage.setItem('eurekaai_language', lang);
        
        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Update page title
        document.title = this.translate('EurekaAI - Advanced AI Platform');
        
        // Update all translatable elements
        this.updatePageContent();
        
        // Update language selector
        this.updateLanguageSelector();
    }
    
    translate(key, fallback = key) {
        const translation = translations[this.currentLanguage];
        return translation && translation[key] ? translation[key] : fallback;
    }
    
    updatePageContent() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });
        
        // Update elements with data-translate-html attribute (for HTML content)
        document.querySelectorAll('[data-translate-html]').forEach(element => {
            const key = element.getAttribute('data-translate-html');
            const translation = this.translate(key);
            element.innerHTML = translation;
        });
    }
    
    updateLanguageSelector() {
        const selector = document.getElementById('languageSelector');
        if (selector) {
            const currentLangText = this.translate(`lang.${this.getLanguageName(this.currentLanguage)}`);
            selector.querySelector('.current-lang').textContent = currentLangText;
        }
    }
    
    getLanguageName(code) {
        const names = {
            'en': 'english',
            'pt': 'portuguese', 
            'ar': 'arabic'
        };
        return names[code] || 'english';
    }
    
    getSupportedLanguages() {
        return [
            { code: 'en', name: this.translate('lang.english') },
            { code: 'pt', name: this.translate('lang.portuguese') },
            { code: 'ar', name: this.translate('lang.arabic') }
        ];
    }
}

// Initialize language manager
const langManager = new LanguageManager();

// Export for global use
window.langManager = langManager;

