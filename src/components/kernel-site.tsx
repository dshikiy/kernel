"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Gauge,
  Languages,
  LineChart,
  Menu,
  MessageCircle,
  Moon,
  Network,
  PanelsTopLeft,
  Phone,
  Rocket,
  Sparkles,
  Sun,
  Workflow,
  X,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Lang = "ru" | "kz";

type Service = {
  icon: typeof Code2;
  title: string;
  text: string;
};

const content = {
  ru: {
    nav: [
      ["solutions", "Решения"],
      ["industries", "Отрасли"],
      ["process", "Процесс"],
      ["cases", "Кейсы"],
      ["faq", "FAQ"],
    ],
    brandLine: "Digital Solutions",
    badge: "Build. Automate. Scale.",
    heroTitle: "Строим цифровую инфраструктуру для современного бизнеса",
    heroText:
      "KERNEL проектирует, разрабатывает и автоматизирует бизнес-системы, которые помогают компаниям расти быстрее, работать точнее и управлять процессами без хаоса.",
    primaryCta: "Записаться на консультацию",
    secondaryCta: "Посмотреть решения",
    dashboard: {
      eyebrow: "Kernel Command",
      title: "Центр управления бизнесом",
      status: "Live",
      chart: "Аналитика выручки",
      metrics: ["Лиды", "Сделки", "Маржа"],
      assistant: "AI-ассистент",
      assistantOne: "Найдены приоритетные лиды в образовательной и медицинской воронках.",
      assistantTwo: "Создать задачи менеджерам и отправить краткие отчеты?",
      queue: "Очередь автоматизаций",
      queueItems: ["WhatsApp-напоминания", "Синхронизация счетов", "Скоринг лидов"],
      pipeline: "Пайплайн",
      automated: "Автоматизировано задач",
    },
    stats: [
      { value: 50, suffix: "+", label: "Проектов запущено" },
      { value: 10, suffix: "+", label: "Бизнес-отраслей" },
      { value: 99, suffix: "%", label: "Фокус на результате" },
      { value: 24, suffix: "/7", label: "Поддержка" },
    ],
    servicesHeader: {
      eyebrow: "Возможности",
      title: "Технологии под задачи вашего бизнеса",
      text:
        "KERNEL создает не шаблонные сайты, а рабочие системы: воронки продаж, внутренние кабинеты, CRM, ERP, автоматизацию, AI-инструменты и SaaS-платформы.",
    },
    services: [
      { icon: Code2, title: "Веб-разработка", text: "Премиальные бизнес-сайты с высокой скоростью, доверием и конверсией." },
      { icon: PanelsTopLeft, title: "Кастомные платформы", text: "Порталы, маркетплейсы, booking-системы, кабинеты клиентов и сотрудников." },
      { icon: Database, title: "CRM и ERP системы", text: "Управление продажами, складом, финансами, задачами и операциями в одном контуре." },
      { icon: Workflow, title: "Автоматизация бизнеса", text: "Сценарии, которые убирают рутину, ручные таблицы и потерянные заявки." },
      { icon: BrainCircuit, title: "AI-решения", text: "Ассистенты, анализ данных, обработка документов и умные внутренние инструменты." },
      { icon: Bot, title: "Telegram-боты", text: "Боты для продаж, поддержки, обучения, логистики и внутренних заявок." },
      { icon: MessageCircle, title: "WhatsApp-боты", text: "Автоматизация коммуникаций, напоминаний, заявок и клиентского сервиса." },
      { icon: Rocket, title: "SaaS-разработка", text: "MVP и полноценные подписочные продукты с масштабируемой архитектурой." },
      { icon: Phone, title: "Мобильные приложения", text: "Мобильные интерфейсы для клиентов, сотрудников и полевых команд." },
      { icon: Cloud, title: "Cloud-инфраструктура", text: "Linux, Docker, CI/CD, деплой, мониторинг, серверы и техническая поддержка." },
    ] satisfies Service[],
    industriesHeader: {
      eyebrow: "Отрасли",
      title: "Системы под реальные бизнес-модели",
      text:
        "У клиники, учебного центра, фитнес-клуба и B2B-компании разная логика. Мы сначала разбираем модель бизнеса, потом проектируем технологию.",
    },
    industryLabel: "Отрасль",
    solutionsLabel: "Решения",
    benefitsLabel: "Эффект",
    industries: [
      ["Образование", "CRM, портал ученика, Telegram-бот", "Меньше рутины, больше заявок, прозрачное управление"],
      ["Медицина", "CRM клиники, запись, напоминания пациентам", "Меньше пропусков, быстрее работа ресепшена"],
      ["Beauty", "Онлайн-запись, лояльность, WhatsApp-автоматизация", "Повторные визиты и понятное расписание мастеров"],
      ["Фитнес", "Абонементы, платежи, запись на занятия", "Рост удержания и контроль операционных процессов"],
      ["Авто", "Воронка лидов, сервисная запись, склад", "Быстрее продажи и меньше потерянных клиентов"],
      ["Ритейл", "Каталог, склад, заказы, лояльность", "Чище учет и лучше клиентский путь"],
      ["Рестораны", "Заказы, бронирование, доставка", "Быстрее сервис и выше повторная выручка"],
      ["Недвижимость", "Каталог объектов, CRM, кабинет брокера", "Понятные сделки и дисциплина follow-up"],
      ["Туризм", "Booking-платформа, предложения, мессенджеры", "Больше бронирований при меньшей ручной координации"],
      ["Строительство", "ERP, закупки, проекты, согласования", "Контроль бюджетов, сроков и ответственности"],
      ["B2B услуги", "Клиентский портал, CRM, документы", "Больше доверия и меньше ручной коммуникации"],
      ["Стартапы", "MVP, SaaS, аналитика, AI-инструменты", "Быстрый запуск и понятный рост продукта"],
    ],
    solutionDesignHeader: {
      eyebrow: "Дизайн решений",
      title: "От бизнес-проблемы к измеримому результату",
      text:
        "Каждый продукт проектируется вокруг узких мест, ролей сотрудников, данных и результата, который должен появиться после запуска.",
    },
    solutionCards: [
      {
        industry: "Образование",
        problem: "Ручная регистрация, хаос в группах, платежах и коммуникации с родителями.",
        solution: "CRM, личный кабинет ученика, Telegram-бот, уведомления и отчеты.",
        result: "Меньше рутины, больше заявок, прозрачное управление учебным центром.",
      },
      {
        industry: "Медицина",
        problem: "Пропущенные записи, разрозненная история пациентов, медленная работа администраторов.",
        solution: "Система записи, CRM пациентов, WhatsApp-уведомления, внутренние дашборды.",
        result: "Стабильный поток пациентов и меньше ручной нагрузки на ресепшен.",
      },
      {
        industry: "E-commerce",
        problem: "Заказы, склад, маркетинг и поддержка живут в разных инструментах.",
        solution: "Онлайн-платформа, складские интеграции, автоматизация и AI-помощник.",
        result: "Выше конверсия, быстрее обработка заказов, сильнее удержание клиентов.",
      },
      {
        industry: "B2B сервис",
        problem: "Длинные продажи, ручные КП, слабый контроль менеджеров и статусов.",
        solution: "CRM, генерация предложений, клиентский портал, аналитика руководителя.",
        result: "Прогнозируемая воронка и управляемый рост отдела продаж.",
      },
    ],
    fieldLabels: ["Проблема", "Решение", "Ожидаемый результат"],
    processHeader: {
      eyebrow: "Процесс",
      title: "Понятный путь от идеи до рабочей системы",
    },
    process: [
      ["01", "Discovery", "Анализ бизнеса и целей"],
      ["02", "Strategy", "Архитектура и план разработки"],
      ["03", "Development", "Создание продукта и интеграций"],
      ["04", "Launch", "Деплой, тестирование и запуск"],
      ["05", "Growth", "Оптимизация, поддержка и масштабирование"],
    ],
    techHeader: {
      eyebrow: "Технологии",
      title: "Современный стек. Надежная архитектура.",
      text:
        "Мы выбираем технологии под продукт, нагрузку, безопасность и дальнейшее развитие, а не ради модных названий.",
    },
    casesHeader: {
      eyebrow: "Кейсы",
      title: "Проекты с реальной операционной логикой",
      text:
        "Примеры того, как KERNEL превращает бизнес-напряжение в понятные программные системы.",
    },
    cases: [
      {
        title: "Операционная система клиники",
        industry: "Медицина",
        challenge: "Запись, ресепшен и коммуникация с пациентами были разбросаны по ручным инструментам.",
        solution: "Создали CRM клиники с записью, напоминаниями, аналитикой и ролями сотрудников.",
        result: "Меньше пропущенных визитов и быстрее ежедневная координация.",
      },
      {
        title: "Платформа роста учебного центра",
        industry: "Образование",
        challenge: "Лиды, группы, оплаты и сообщения родителям было сложно контролировать.",
        solution: "Запустили CRM, кабинет ученика, Telegram-автоматизацию и отчеты.",
        result: "Больше заявок при меньшей административной нагрузке.",
      },
      {
        title: "Автоматизация B2B-продаж",
        industry: "B2B услуги",
        challenge: "Менеджеры теряли контекст между звонками, КП, задачами и счетами.",
        solution: "Разработали CRM с генерацией КП, задачами, статусами и метриками руководителя.",
        result: "Воронка стала управляемой, а работа отдела - прозрачной.",
      },
    ],
    caseLabels: ["Задача", "Решение", "Результат"],
    why: {
      eyebrow: "Почему KERNEL",
      title: "Инженерный партнер для амбициозного бизнеса",
      text:
        "Мы не продаем шаблоны. Мы строим бизнес-продукты, которые должны выдерживать реальные процессы, пользователей, роли, данные и рост.",
    },
    features: [
      ["Бизнес-фокус", "Каждая функция связана с выручкой, эффективностью или управляемостью."],
      ["Масштабируемая архитектура", "Система заранее учитывает роли, данные, права доступа и рост нагрузки."],
      ["Быстрая поставка", "Работаем спринтами, показываем прогресс и быстро выводим продукт в запуск."],
      ["Современные технологии", "React, Next.js, Node.js, Python, AI-инструменты и cloud-инфраструктура."],
      ["Долгосрочная поддержка", "Развитие, мониторинг, улучшения, хостинг и техническое сопровождение."],
      ["Кастомная логика", "Решение строится вокруг ваших процессов, а не вокруг ограничений шаблона."],
    ],
    testimonialsHeader: {
      eyebrow: "Отзывы",
      title: "Доверие к серьезной разработке",
    },
    testimonials: [
      {
        quote: "KERNEL сначала разобрался в бизнес-процессе, а уже потом строил технологию. Это сильно подняло качество проекта.",
        name: "Айгерим С.",
        role: "Директор учебного центра",
      },
      {
        quote: "Новая CRM дала команде единый центр управления. Заявки, записи и отчеты стали намного понятнее.",
        name: "Тимур К.",
        role: "Операционный руководитель клиники",
      },
      {
        quote: "Они думают как продуктовые инженеры, а не как студия шаблонов. Автоматизация быстро окупилась.",
        name: "Дина Р.",
        role: "Основатель сервисной компании",
      },
    ],
    faqHeader: {
      eyebrow: "FAQ",
      title: "Вопросы перед стартом",
    },
    faqs: [
      ["KERNEL - это веб-студия?", "Нет. Сайты - только часть работы. KERNEL строит цифровую инфраструктуру: web apps, CRM, ERP, автоматизацию, AI-системы, ботов и внутренние платформы."],
      ["Можно автоматизировать существующий процесс?", "Да. Мы анализируем текущую операционку, находим точки экономии времени и строим автоматизацию вокруг ваших инструментов или новой системы."],
      ["Вы работаете с малым бизнесом?", "Да. Мы работаем с малым и средним бизнесом, стартапами, клиниками, образовательными центрами, фитнесом, e-commerce и B2B-компаниями."],
      ["Есть поддержка после запуска?", "Да. KERNEL может вести мониторинг, улучшения, интеграции, хостинг и дальнейшую продуктовую разработку."],
    ],
    finalCta: {
      eyebrow: "Начнем систему",
      title: "Готовы построить что-то сильное?",
      text: "Обсудим ваш проект и создадим решение, которое подходит именно вашему бизнесу.",
      button: "Назначить консультацию",
    },
    footer: {
      text: "Digital Solutions For Business. Бизнес-сайты, web apps, CRM, ERP, SaaS, AI, боты и автоматизация.",
      nav: "Навигация",
      contacts: "Контакты",
    },
    labels: {
      theme: "Переключить тему",
      menu: "Открыть меню",
      lang: "Сменить язык",
      testimonial: "Показать отзыв",
    },
  },
  kz: {
    nav: [
      ["solutions", "Шешімдер"],
      ["industries", "Салалар"],
      ["process", "Процесс"],
      ["cases", "Кейстер"],
      ["faq", "FAQ"],
    ],
    brandLine: "Digital Solutions",
    badge: "Build. Automate. Scale.",
    heroTitle: "Заманауи бизнеске арналған цифрлық инфрақұрылым құрамыз",
    heroText:
      "KERNEL компанияларға тезірек өсуге, процестерді нақты басқаруға және күнделікті операцияларды автоматтандыруға көмектесетін бизнес-жүйелерді жобалап, әзірлейді.",
    primaryCta: "Кеңеске жазылу",
    secondaryCta: "Шешімдерді көру",
    dashboard: {
      eyebrow: "Kernel Command",
      title: "Бизнесті басқару орталығы",
      status: "Live",
      chart: "Түсім аналитикасы",
      metrics: ["Лидтер", "Мәмілелер", "Маржа"],
      assistant: "AI-ассистент",
      assistantOne: "Білім және медицина воронкаларында басым лидтер табылды.",
      assistantTwo: "Менеджерлерге тапсырма құрып, қысқа есеп жіберейін бе?",
      queue: "Автоматтандыру кезегі",
      queueItems: ["WhatsApp еске салулары", "Шоттарды синхрондау", "Лид скорингі"],
      pipeline: "Пайплайн",
      automated: "Автоматтанған тапсырмалар",
    },
    stats: [
      { value: 50, suffix: "+", label: "Іске қосылған жобалар" },
      { value: 10, suffix: "+", label: "Бизнес салалары" },
      { value: 99, suffix: "%", label: "Нәтижеге фокус" },
      { value: 24, suffix: "/7", label: "Қолдау" },
    ],
    servicesHeader: {
      eyebrow: "Мүмкіндіктер",
      title: "Сіздің бизнесіңізге бейімделген технология",
      text:
        "KERNEL жай сайт емес, нақты жұмыс істейтін жүйелер жасайды: сату воронкасы, ішкі кабинеттер, CRM, ERP, автоматтандыру, AI-құралдар және SaaS-платформалар.",
    },
    services: [
      { icon: Code2, title: "Веб-әзірлеу", text: "Жылдам, сенімді және конверсияға бағытталған премиум бизнес-сайттар." },
      { icon: PanelsTopLeft, title: "Кастом платформалар", text: "Порталдар, маркетплейстер, booking-жүйелер, клиент және қызметкер кабинеттері." },
      { icon: Database, title: "CRM және ERP жүйелері", text: "Сату, қойма, қаржы, тапсырма және операцияларды бір ортада басқару." },
      { icon: Workflow, title: "Бизнес автоматтандыру", text: "Рутинаны, қолмен толтырылатын кестелерді және жоғалған өтінімдерді азайтатын сценарийлер." },
      { icon: BrainCircuit, title: "AI-шешімдер", text: "Ассистенттер, дерек талдауы, құжат өңдеу және ақылды ішкі құралдар." },
      { icon: Bot, title: "Telegram-боттар", text: "Сату, қолдау, оқыту, логистика және ішкі өтінімдерге арналған боттар." },
      { icon: MessageCircle, title: "WhatsApp-боттар", text: "Коммуникация, еске салу, өтінім және клиент сервисін автоматтандыру." },
      { icon: Rocket, title: "SaaS әзірлеу", text: "MVP және масштабталатын архитектурасы бар толық жазылым өнімдері." },
      { icon: Phone, title: "Мобильді қосымшалар", text: "Клиенттерге, қызметкерлерге және дала командаларына арналған мобильді интерфейстер." },
      { icon: Cloud, title: "Cloud-инфрақұрылым", text: "Linux, Docker, CI/CD, деплой, мониторинг, серверлер және техникалық қолдау." },
    ] satisfies Service[],
    industriesHeader: {
      eyebrow: "Салалар",
      title: "Нақты бизнес-модельдерге арналған жүйелер",
      text:
        "Клиника, оқу орталығы, фитнес-клуб және B2B компаниясының логикасы әртүрлі. Біз алдымен бизнес моделін түсініп, содан кейін технологияны жобалаймыз.",
    },
    industryLabel: "Сала",
    solutionsLabel: "Шешімдер",
    benefitsLabel: "Әсері",
    industries: [
      ["Білім", "CRM, оқушы порталы, Telegram-бот", "Рутина азаяды, өтінім көбейеді, басқару айқын болады"],
      ["Медицина", "Клиника CRM, жазылу, пациентке еске салу", "Келмей қалу азаяды, ресепшен жылдамдайды"],
      ["Beauty", "Онлайн жазылу, лоялдық, WhatsApp автоматтандыру", "Қайта келу артады және шебер кестесі анық болады"],
      ["Фитнес", "Абонемент, төлем, сабаққа жазылу", "Ұстап қалу өседі және операциялар бақыланады"],
      ["Авто", "Лид воронкасы, сервиске жазылу, қойма", "Сату жылдамдайды, клиент жоғалуы азаяды"],
      ["Ритейл", "Каталог, қойма, тапсырыс, лоялдық", "Есеп таза, клиент жолы ыңғайлы"],
      ["Мейрамханалар", "Тапсырыс, брондау, жеткізу", "Сервис жылдамдап, қайталама түсім өседі"],
      ["Жылжымайтын мүлік", "Нысандар каталогы, CRM, брокер кабинеті", "Мәмілелер және follow-up тәртібі анық болады"],
      ["Туризм", "Booking-платформа, ұсыныстар, мессенджерлер", "Қолмен үйлестіру азайып, брондау көбейеді"],
      ["Құрылыс", "ERP, сатып алу, жобалар, келісімдер", "Бюджет, мерзім және жауапкершілік бақыланады"],
      ["B2B қызметтер", "Клиент порталы, CRM, құжаттар", "Сенім артады, қолмен коммуникация азаяды"],
      ["Стартаптар", "MVP, SaaS, аналитика, AI-құралдар", "Жылдам іске қосу және өнімнің түсінікті өсуі"],
    ],
    solutionDesignHeader: {
      eyebrow: "Шешім дизайны",
      title: "Бизнес проблемадан өлшенетін нәтижеге дейін",
      text:
        "Әр өнім тар орындарға, қызметкер рөлдеріне, деректерге және іске қосылғаннан кейінгі нақты нәтижеге сүйеніп жобаланады.",
    },
    solutionCards: [
      {
        industry: "Білім",
        problem: "Тіркеу қолмен жүреді, топтарда, төлемдерде және ата-анамен байланыста хаос бар.",
        solution: "CRM, оқушы кабинеті, Telegram-бот, хабарламалар және есептер.",
        result: "Рутина азаяды, өтінім көбейеді, оқу орталығын басқару айқын болады.",
      },
      {
        industry: "Медицина",
        problem: "Жазылуға келмеу, пациент тарихының бытыраңқылығы, әкімшілердің баяу жұмысы.",
        solution: "Жазылу жүйесі, пациент CRM, WhatsApp хабарламалары, ішкі дашбордтар.",
        result: "Пациент ағыны тұрақтанып, ресепшеннің қол жұмысы азаяды.",
      },
      {
        industry: "E-commerce",
        problem: "Тапсырыс, қойма, маркетинг және қолдау бөлек құралдарда өмір сүреді.",
        solution: "Онлайн-платформа, қойма интеграциясы, автоматтандыру және AI-көмекші.",
        result: "Конверсия өседі, тапсырыс өңдеу жылдамдайды, клиентті ұстап қалу күшейеді.",
      },
      {
        industry: "B2B сервис",
        problem: "Сату циклі ұзақ, КП қолмен жасалады, менеджерлер мен статустарды бақылау әлсіз.",
        solution: "CRM, ұсыныс генерациясы, клиент порталы, басшы аналитикасы.",
        result: "Воронка болжамды болып, сату бөлімінің өсуі басқарылатын болады.",
      },
    ],
    fieldLabels: ["Проблема", "Шешім", "Күтілетін нәтиже"],
    processHeader: {
      eyebrow: "Процесс",
      title: "Идеядан жұмыс істейтін жүйеге дейінгі айқын жол",
    },
    process: [
      ["01", "Discovery", "Бизнес пен мақсаттарды талдау"],
      ["02", "Strategy", "Архитектура және әзірлеу жоспары"],
      ["03", "Development", "Өнім мен интеграцияларды жасау"],
      ["04", "Launch", "Деплой, тестілеу және іске қосу"],
      ["05", "Growth", "Оңтайландыру, қолдау және масштабтау"],
    ],
    techHeader: {
      eyebrow: "Технология",
      title: "Заманауи стек. Сенімді архитектура.",
      text:
        "Технологияны атауы сәнді болғаны үшін емес, өнімге, жүктемеге, қауіпсіздікке және болашақ дамуға қарай таңдаймыз.",
    },
    casesHeader: {
      eyebrow: "Кейстер",
      title: "Нақты операциялық логикасы бар жобалар",
      text:
        "KERNEL бизнес қысымын түсінікті бағдарламалық жүйелерге қалай айналдыратынының мысалдары.",
    },
    cases: [
      {
        title: "Клиниканың операциялық жүйесі",
        industry: "Медицина",
        challenge: "Жазылу, ресепшен және пациентпен байланыс қол құралдарына бөлініп кеткен.",
        solution: "Жазылу, еске салу, аналитика және қызметкер рөлдері бар клиника CRM жасадық.",
        result: "Келмей қалу азайды, күнделікті үйлестіру жылдамдады.",
      },
      {
        title: "Оқу орталығының өсу платформасы",
        industry: "Білім",
        challenge: "Лидтерді, топтарды, төлемдерді және ата-аналарға хабарламаларды бақылау қиын болды.",
        solution: "CRM, оқушы кабинеті, Telegram автоматтандыру және есептер іске қосылды.",
        result: "Әкімшілік жүктеме азайып, өтінім саны артты.",
      },
      {
        title: "B2B сатуды автоматтандыру",
        industry: "B2B қызметтер",
        challenge: "Менеджерлер қоңырау, КП, тапсырма және шот арасында контекст жоғалтты.",
        solution: "КП генерациясы, тапсырмалар, статустар және басшы метрикалары бар CRM әзірледік.",
        result: "Воронка басқарылатын, ал бөлім жұмысы айқын болды.",
      },
    ],
    caseLabels: ["Міндет", "Шешім", "Нәтиже"],
    why: {
      eyebrow: "Неге KERNEL",
      title: "Амбициясы бар бизнеске инженерлік серіктес",
      text:
        "Біз шаблон сатпаймыз. Біз нақты процестерге, қолданушыларға, рөлдерге, деректерге және өсуге төтеп беретін бизнес-өнімдер құрамыз.",
    },
    features: [
      ["Бизнес-фокус", "Әр функция түсімге, тиімділікке немесе басқаруға байланысты."],
      ["Масштабталатын архитектура", "Жүйе рөлдерді, деректерді, құқықтарды және жүктеменің өсуін алдын ала ескереді."],
      ["Жылдам жеткізу", "Спринтпен жұмыс істейміз, прогресті көрсетеміз және өнімді тез іске қосамыз."],
      ["Заманауи технологиялар", "React, Next.js, Node.js, Python, AI-құралдар және cloud-инфрақұрылым."],
      ["Ұзақ мерзімді қолдау", "Даму, мониторинг, жақсарту, хостинг және техникалық сүйемелдеу."],
      ["Кастом логика", "Шешім шаблон шектеуіне емес, сіздің процестеріңізге сай құрылады."],
    ],
    testimonialsHeader: {
      eyebrow: "Пікірлер",
      title: "Маңызды әзірлеуге деген сенім",
    },
    testimonials: [
      {
        quote: "KERNEL алдымен бизнес-процесті түсініп, содан кейін технология құрды. Бұл жобаның сапасын қатты көтерді.",
        name: "Айгерім С.",
        role: "Оқу орталығының директоры",
      },
      {
        quote: "Жаңа CRM командаға бір басқару орталығын берді. Өтінімдер, жазылулар және есептер әлдеқайда түсінікті болды.",
        name: "Тимур К.",
        role: "Клиниканың операциялық жетекшісі",
      },
      {
        quote: "Олар шаблон студиясы сияқты емес, өнім инженерлері сияқты ойлайды. Автоматтандыру тез ақталды.",
        name: "Дина Р.",
        role: "Сервис компаниясының негізін қалаушы",
      },
    ],
    faqHeader: {
      eyebrow: "FAQ",
      title: "Старт алдындағы сұрақтар",
    },
    faqs: [
      ["KERNEL веб-студия ма?", "Жоқ. Сайттар - жұмыстың бір бөлігі ғана. KERNEL цифрлық инфрақұрылым құрады: web apps, CRM, ERP, автоматтандыру, AI-жүйелер, боттар және ішкі платформалар."],
      ["Қазіргі бизнес-процесті автоматтандыруға бола ма?", "Иә. Біз ағымдағы операцияны талдап, уақыт үнемдейтін нүктелерді тауып, сіздің құралдарыңызға немесе жаңа жүйеге сай автоматтандыру құрамыз."],
      ["Шағын бизнеспен жұмыс істейсіздер ме?", "Иә. Біз шағын және орта бизнес, стартаптар, клиникалар, оқу орталықтары, фитнес, e-commerce және B2B компанияларымен жұмыс істейміз."],
      ["Іске қосылғаннан кейін қолдау бар ма?", "Иә. KERNEL мониторинг, жақсарту, интеграция, хостинг және өнімді әрі қарай дамытуды жүргізе алады."],
    ],
    finalCta: {
      eyebrow: "Жүйені бастайық",
      title: "Күшті нәрсе құруға дайынсыз ба?",
      text: "Жобаңызды талқылап, бизнесіңізге дәл келетін шешім жасайық.",
      button: "Кеңес уақытын белгілеу",
    },
    footer: {
      text: "Digital Solutions For Business. Бизнес-сайттар, web apps, CRM, ERP, SaaS, AI, боттар және автоматтандыру.",
      nav: "Навигация",
      contacts: "Байланыс",
    },
    labels: {
      theme: "Тақырыпты ауыстыру",
      menu: "Мәзірді ашу",
      lang: "Тілді ауыстыру",
      testimonial: "Пікірді көрсету",
    },
  },
};

const tech = [
  ["Frontend", ["React", "Next.js", "TypeScript"]],
  ["Backend", ["Node.js", "NestJS", "Python"]],
  ["Database", ["PostgreSQL", "MongoDB"]],
  ["Infrastructure", ["Docker", "Linux", "CI/CD"]],
  ["AI", ["OpenAI", "Gemini", "LangChain"]],
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 70;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(value * progress));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 18);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function ThemeToggle({ label }: { label: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("kernel-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = stored ? stored === "dark" : prefersDark;
    setDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
    document.documentElement.classList.toggle("light", !enabled);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    window.localStorage.setItem("kernel-theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      className="h-10 w-10"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

function LanguageToggle({
  lang,
  setLang,
  label,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-[#07111F]/10 bg-white/65 p-1 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
      <Languages className="ml-2 h-4 w-4 text-[#8B6E35] dark:text-[#C9A86A]" />
      {(["ru", "kz"] as Lang[]).map((item) => (
        <button
          key={item}
          type="button"
          aria-label={label}
          onClick={() => setLang(item)}
          className={cn(
            "h-8 rounded-full px-3 text-xs font-bold uppercase transition-colors",
            lang === item
              ? "bg-[#07111F] text-white dark:bg-[#C9A86A] dark:text-[#07111F]"
              : "text-[#465064] hover:text-[#07111F] dark:text-white/62 dark:hover:text-white",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function DashboardMockup({ data }: { data: (typeof content.ru)["dashboard"] }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -42]);

  return (
    <motion.div style={{ y }} className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
      <div className="absolute -inset-6 rounded-[32px] bg-[#C9A86A]/12 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, rotateX: 16, rotateY: -18, y: 40 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#07111F] p-3 shadow-[0_42px_120px_rgba(7,17,31,0.34)]"
      >
        <div className="rounded-[22px] border border-white/10 bg-[#0D1B2A] p-4">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase text-white/45">{data.eyebrow}</p>
              <h3 className="font-display text-xl font-semibold text-white">{data.title}</h3>
            </div>
            <div className="rounded-full border border-[#C9A86A]/35 bg-[#C9A86A]/12 px-3 py-1 text-xs text-[#F4DBA3]">
              {data.status}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm font-medium text-white">{data.chart}</span>
                <LineChart className="h-4 w-4 text-[#C9A86A]" />
              </div>
              <div className="flex h-44 items-end gap-2">
                {[48, 62, 54, 76, 72, 88, 96, 82, 105, 118, 128, 142].map((height, index) => (
                  <motion.div
                    key={height + index}
                    initial={{ height: 16 }}
                    animate={{ height }}
                    transition={{ duration: 0.9, delay: index * 0.04 }}
                    className="flex-1 rounded-t-lg bg-gradient-to-t from-[#C9A86A] to-[#F1D28A]"
                  />
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {data.metrics.map((item, index) => (
                  <div key={item} className="rounded-xl bg-white/[0.05] p-3">
                    <p className="text-[11px] text-white/42">{item}</p>
                    <p className="mt-1 font-display text-lg font-semibold text-white">
                      {[284, 73, 41][index]}
                      {index === 2 ? "%" : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <div className="mb-3 flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4 text-[#C9A86A]" />
                  <p className="text-sm font-medium text-white">{data.assistant}</p>
                </div>
                <div className="space-y-2 text-xs leading-5 text-white/62">
                  <p className="rounded-xl bg-white/[0.06] p-3">{data.assistantOne}</p>
                  <p className="ml-7 rounded-xl bg-[#C9A86A]/15 p-3 text-[#F7E5BB]">{data.assistantTwo}</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                <p className="mb-3 text-sm font-medium text-white">{data.queue}</p>
                {data.queueItems.map((item, index) => (
                  <div key={item} className="mb-2 flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2 text-xs text-white/65 last:mb-0">
                    <span>{item}</span>
                    <span className={cn("h-2 w-2 rounded-full", index === 1 ? "bg-[#8FAF8D]" : "bg-[#C9A86A]")} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="glass absolute -left-3 top-12 hidden rounded-2xl p-4 md:block"
      >
        <p className="text-xs text-[#465064] dark:text-white/60">{data.pipeline}</p>
        <p className="font-display text-2xl font-semibold text-[#07111F] dark:text-white">$1.2M</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="glass absolute -right-4 bottom-10 hidden rounded-2xl p-4 md:block"
      >
        <p className="text-xs text-[#465064] dark:text-white/60">{data.automated}</p>
        <p className="font-display text-2xl font-semibold text-[#07111F] dark:text-white">8,420</p>
      </motion.div>
    </motion.div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#8B6E35] dark:text-[#C9A86A]">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold text-[#07111F] dark:text-white md:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#465064] dark:text-white/68 md:text-lg">
        {text}
      </p>
    </Reveal>
  );
}

export function KernelSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonial, setTestimonial] = useState(0);
  const [lang, setLangState] = useState<Lang>("ru");
  const t = content[lang];
  const activeTestimonial = t.testimonials[testimonial] ?? t.testimonials[0];

  useEffect(() => {
    const stored = window.localStorage.getItem("kernel-lang");
    if (stored === "ru" || stored === "kz") {
      setLangState(stored);
    }
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    setTestimonial(0);
    window.localStorage.setItem("kernel-lang", next);
    document.documentElement.lang = next === "ru" ? "ru" : "kk";
  }

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "KERNEL",
      slogan: lang === "ru" ? "Digital Solutions For Business" : "Бизнеске арналған цифрлық шешімдер",
      email: "kerneltech.kz@mail.ru",
      telephone: "+7 700 126 49 92",
      sameAs: ["https://t.me/kerneltech.kz"],
      description:
        lang === "ru"
          ? "KERNEL разрабатывает бизнес-сайты, web apps, CRM, ERP, SaaS, AI-системы, ботов и автоматизацию."
          : "KERNEL бизнес-сайттар, web apps, CRM, ERP, SaaS, AI-жүйелер, боттар және автоматтандыру әзірлейді.",
    }),
    [lang],
  );

  return (
    <main className="noise min-h-screen overflow-hidden bg-[#FAF8F4] text-[#0B1020] dark:bg-[#07111F] dark:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#07111F]/8 bg-[#FAF8F4]/78 backdrop-blur-2xl dark:border-white/10 dark:bg-[#07111F]/78">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="KERNEL home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] font-display text-lg font-bold text-[#C9A86A] shadow-lg shadow-[#07111F]/15 dark:bg-white dark:text-[#07111F]">
              K
            </span>
            <span>
              <span className="block font-display text-lg font-bold tracking-[0.16em] text-[#07111F] dark:text-white">
                KERNEL
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-[#8B6E35] dark:text-[#C9A86A]">
                {t.brandLine}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#465064] dark:text-white/68 lg:flex">
            {t.nav.map(([id, item]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-[#07111F] dark:hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle lang={lang} setLang={setLang} label={t.labels.lang} />
            <ThemeToggle label={t.labels.theme} />
            <Button asChild>
              <a href="mailto:kerneltech.kz@mail.ru">
                {t.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle lang={lang} setLang={setLang} label={t.labels.lang} />
            <ThemeToggle label={t.labels.theme} />
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={t.labels.menu}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        {menuOpen ? (
          <div className="border-t border-[#07111F]/10 bg-[#FAF8F4] px-5 py-5 dark:border-white/10 dark:bg-[#07111F] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {t.nav.map(([id, item]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="text-sm font-semibold text-[#07111F] dark:text-white">
                  {item}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="mailto:kerneltech.kz@mail.ru">{t.primaryCta}</a>
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <section className="relative px-5 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A86A]/35 bg-white/55 px-4 py-2 text-sm font-semibold text-[#8B6E35] shadow-sm backdrop-blur dark:bg-white/6 dark:text-[#F0D497]">
              <Sparkles className="h-4 w-4" />
              {t.badge}
            </div>
            <h1 className="mt-8 max-w-5xl font-display text-5xl font-semibold leading-[0.95] text-[#07111F] dark:text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {t.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#465064] dark:text-white/70 md:text-xl">
              {t.heroText}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="mailto:kerneltech.kz@mail.ru">
                  {t.primaryCta}
                  <CalendarDays className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#solutions">
                  {t.secondaryCta}
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </Reveal>
          <DashboardMockup data={t.dashboard} />
        </div>
        <Reveal className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-[#07111F]/10 bg-[#07111F]/10 dark:border-white/10 dark:bg-white/10 md:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.label} className="bg-white/72 p-6 backdrop-blur dark:bg-white/[0.04] md:p-8">
              <p className="font-display text-4xl font-semibold text-[#07111F] dark:text-white md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-[#465064] dark:text-white/62">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section id="solutions" className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.servicesHeader} />
          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.025}>
                <article className="group h-full rounded-3xl border border-[#07111F]/10 bg-white/76 p-6 shadow-[0_20px_60px_rgba(7,17,31,0.06)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A86A]/55 hover:shadow-[0_28px_80px_rgba(7,17,31,0.11)] dark:border-white/10 dark:bg-white/[0.055]">
                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#07111F] text-[#C9A86A] transition-transform duration-300 group-hover:scale-105 dark:bg-[#C9A86A] dark:text-[#07111F]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#07111F] dark:text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#465064] dark:text-white/62">{service.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="border-y border-[#07111F]/10 bg-white/45 px-5 py-28 dark:border-white/10 dark:bg-white/[0.03] md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.industriesHeader} />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.industries.map(([industry, industrySolutions, benefits], index) => (
              <Reveal key={industry} delay={index * 0.02}>
                <article className="group min-h-[172px] overflow-hidden rounded-3xl border border-[#07111F]/10 bg-[#FAF8F4] p-6 transition-all duration-300 hover:min-h-[218px] hover:border-[#C9A86A]/55 hover:bg-white hover:shadow-[0_24px_70px_rgba(7,17,31,0.08)] dark:border-white/10 dark:bg-[#0D1B2A]/75 dark:hover:bg-white/[0.07]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B6E35] dark:text-[#C9A86A]">{t.industryLabel}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-[#07111F] dark:text-white">{industry}</h3>
                    </div>
                    <Building2 className="h-5 w-5 text-[#C9A86A]" />
                  </div>
                  <div className="mt-6 grid gap-3 opacity-90 transition-all duration-300 group-hover:opacity-100">
                    <p className="text-sm leading-6 text-[#465064] dark:text-white/62">
                      <span className="font-semibold text-[#07111F] dark:text-white">{t.solutionsLabel}: </span>
                      {industrySolutions}
                    </p>
                    <p className="text-sm leading-6 text-[#465064] dark:text-white/62">
                      <span className="font-semibold text-[#07111F] dark:text-white">{t.benefitsLabel}: </span>
                      {benefits}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.solutionDesignHeader} />
          <div className="mt-16 grid gap-5 lg:grid-cols-4">
            {t.solutionCards.map((item, index) => (
              <Reveal key={item.industry} delay={index * 0.04}>
                <article className="rounded-3xl border border-[#07111F]/10 bg-white/76 p-6 shadow-[0_20px_60px_rgba(7,17,31,0.06)] dark:border-white/10 dark:bg-white/[0.055]">
                  <h3 className="font-display text-2xl font-semibold text-[#07111F] dark:text-white">{item.industry}</h3>
                  {[item.problem, item.solution, item.result].map((value, labelIndex) => (
                    <div key={t.fieldLabels[labelIndex]} className="mt-6 border-t border-[#07111F]/10 pt-5 dark:border-white/10">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B6E35] dark:text-[#C9A86A]">{t.fieldLabels[labelIndex]}</p>
                      <p className="mt-2 text-sm leading-6 text-[#465064] dark:text-white/64">{value}</p>
                    </div>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#07111F] px-5 py-28 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A86A]">{t.processHeader.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold md:text-6xl">{t.processHeader.title}</h2>
          </Reveal>
          <div className="mt-16 grid gap-4 lg:grid-cols-5">
            {t.process.map(([number, title, text], index) => (
              <Reveal key={number} delay={index * 0.05}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                  <p className="font-display text-5xl font-semibold text-[#C9A86A]">{number}</p>
                  <h3 className="mt-10 font-display text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.techHeader} />
          <div className="mt-16 grid gap-4 md:grid-cols-5">
            {tech.map(([group, items], index) => (
              <Reveal key={group as string} delay={index * 0.04}>
                <div className="glass h-full rounded-3xl p-6">
                  <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#8B6E35] dark:text-[#C9A86A]">{group}</p>
                  <div className="space-y-3">
                    {(items as string[]).map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-[#07111F] dark:bg-white/[0.07] dark:text-white">
                        <Network className="h-4 w-4 text-[#C9A86A]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="border-y border-[#07111F]/10 bg-white/50 px-5 py-28 dark:border-white/10 dark:bg-white/[0.03] md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader {...t.casesHeader} />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {t.cases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="overflow-hidden rounded-[28px] border border-[#07111F]/10 bg-[#FAF8F4] shadow-[0_28px_90px_rgba(7,17,31,0.08)] dark:border-white/10 dark:bg-[#0D1B2A]">
                  <div className="h-64 bg-[#07111F] p-4">
                    <div className="h-full rounded-2xl border border-white/10 bg-[#0D1B2A] p-4">
                      <div className="mb-4 flex justify-between">
                        <span className="rounded-full bg-[#C9A86A]/18 px-3 py-1 text-xs font-semibold text-[#F4DBA3]">{item.industry}</span>
                        <Gauge className="h-5 w-5 text-[#C9A86A]" />
                      </div>
                      <div className="grid h-[150px] grid-cols-5 items-end gap-2">
                        {[42, 68, 56, 88, 112].map((height, barIndex) => (
                          <div key={barIndex} style={{ height }} className="rounded-t-xl bg-[#C9A86A]" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-[#07111F] dark:text-white">{item.title}</h3>
                    {[item.challenge, item.solution, item.result].map((value, labelIndex) => (
                      <p key={t.caseLabels[labelIndex]} className="mt-3 text-sm leading-6 text-[#465064] first:mt-5 dark:text-white/62">
                        <span className="font-semibold text-[#07111F] dark:text-white">{t.caseLabels[labelIndex]}: </span>
                        {value}
                      </p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#8B6E35] dark:text-[#C9A86A]">{t.why.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold text-[#07111F] dark:text-white md:text-6xl">{t.why.title}</h2>
            <p className="mt-6 text-lg leading-8 text-[#465064] dark:text-white/68">{t.why.text}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.features.map(([title, text], index) => (
              <Reveal key={title} delay={index * 0.035}>
                <div className="h-full rounded-3xl border border-[#07111F]/10 bg-white/76 p-6 dark:border-white/10 dark:bg-white/[0.055]">
                  <Check className="mb-6 h-5 w-5 text-[#C9A86A]" />
                  <h3 className="font-display text-xl font-semibold text-[#07111F] dark:text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#465064] dark:text-white/62">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07111F] px-5 py-28 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A86A]">{t.testimonialsHeader.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold md:text-6xl">{t.testimonialsHeader.title}</h2>
            <div className="mt-8 flex gap-3">
              {t.testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`${t.labels.testimonial} ${index + 1}`}
                  onClick={() => setTestimonial(index)}
                  className={cn("h-2.5 w-10 rounded-full transition-colors", testimonial === index ? "bg-[#C9A86A]" : "bg-white/18")}
                />
              ))}
            </div>
          </Reveal>
          <motion.article
            key={activeTestimonial.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.25)] backdrop-blur md:p-10"
          >
            <p className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl">
              &quot;{activeTestimonial.quote}&quot;
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A86A] font-display font-semibold text-[#07111F]">
                {activeTestimonial.name.slice(0, 1)}
              </div>
              <div>
                <p className="font-semibold">{activeTestimonial.name}</p>
                <p className="text-sm text-white/55">{activeTestimonial.role}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section id="faq" className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#8B6E35] dark:text-[#C9A86A]">{t.faqHeader.eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold text-[#07111F] dark:text-white md:text-6xl">{t.faqHeader.title}</h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="rounded-3xl border border-[#07111F]/10 bg-white/76 px-6 dark:border-white/10 dark:bg-white/[0.055]">
              {t.faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`item-${index}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#07111F] p-8 text-white shadow-[0_36px_110px_rgba(7,17,31,0.28)] md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#C9A86A]">{t.finalCta.eyebrow}</p>
              <h2 className="font-display text-4xl font-semibold md:text-6xl">{t.finalCta.title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/66">{t.finalCta.text}</p>
            </div>
            <Button asChild size="lg" className="bg-[#C9A86A] text-[#07111F] hover:bg-[#D8BC7D]">
              <a href="mailto:kerneltech.kz@mail.ru">
                {t.finalCta.button}
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-[#07111F]/10 px-5 py-12 dark:border-white/10 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#07111F] font-display text-lg font-bold text-[#C9A86A] dark:bg-white dark:text-[#07111F]">K</span>
              <span className="font-display text-lg font-bold tracking-[0.16em] text-[#07111F] dark:text-white">KERNEL</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#465064] dark:text-white/62">{t.footer.text}</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-[#07111F] dark:text-white">{t.footer.nav}</p>
            <div className="grid gap-3 text-sm text-[#465064] dark:text-white/62">
              {t.nav.map(([id, item]) => (
                <a key={id} href={`#${id}`} className="hover:text-[#8B6E35] dark:hover:text-[#C9A86A]">{item}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-semibold text-[#07111F] dark:text-white">{t.footer.contacts}</p>
            <div className="grid gap-3 text-sm text-[#465064] dark:text-white/62">
              <a href="tel:+77001264992" className="hover:text-[#8B6E35] dark:hover:text-[#C9A86A]">+7 700 126 49 92</a>
              <a href="mailto:kerneltech.kz@mail.ru" className="hover:text-[#8B6E35] dark:hover:text-[#C9A86A]">kerneltech.kz@mail.ru</a>
              <a href="https://t.me/kerneltech.kz" className="hover:text-[#8B6E35] dark:hover:text-[#C9A86A]">@kerneltech.kz</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
