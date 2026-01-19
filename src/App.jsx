import { useState } from 'react'
import { Shield, Brain, TrendingUp, Bell, Lock, ChevronRight, Menu, X, CheckCircle, BarChart3, Users, Zap, Target, ArrowRight, Star, Sparkles, Heart, Eye, AlertTriangle, Gift, TrendingDown, Smile, XCircle, CircleDot } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-primary-900" /></div>
            <span className="text-xl font-bold text-white">AIFA</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#target" className="text-surface-300 hover:text-white transition-colors text-sm">Для кого</a>
            <a href="#jtbd" className="text-surface-300 hover:text-white transition-colors text-sm">Задачи</a>
            <a href="#pain-gain" className="text-surface-300 hover:text-white transition-colors text-sm">Боли и выгоды</a>
            <a href="#utp" className="text-surface-300 hover:text-white transition-colors text-sm">УТП</a>
            <a href="#features" className="text-surface-300 hover:text-white transition-colors text-sm">Возможности</a>
            <a href="#contact" className="btn-primary">Начать</a>
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4">
            <a href="#target" className="text-surface-300 py-2">Для кого</a>
            <a href="#jtbd" className="text-surface-300 py-2">Задачи</a>
            <a href="#pain-gain" className="text-surface-300 py-2">Боли и выгоды</a>
            <a href="#utp" className="text-surface-300 py-2">УТП</a>
            <a href="#contact" className="btn-primary text-center">Начать</a>
          </div>
        )}
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-surface-300">AI-powered финансовый помощник</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">Управляй деньгами.<br /><span className="gradient-text">Защити будущее.</span></h1>
            <p className="text-lg md:text-xl text-surface-300 mb-8 max-w-xl mx-auto lg:mx-0">AIFA — интеллектуальный ассистент, который анализирует твои финансы, выявляет риски и помогает формировать здоровые денежные привычки.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="btn-primary text-lg px-8 py-4">Попробовать бесплатно<ArrowRight className="w-5 h-5 ml-2" /></a>
              <a href="#target" className="btn-secondary text-lg px-8 py-4">Узнать больше</a>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div><div className="text-3xl md:text-4xl font-bold text-white">67%</div><div className="text-sm text-surface-400">молодёжи делали ставки онлайн</div></div>
              <div><div className="text-3xl md:text-4xl font-bold text-accent-400">3x</div><div className="text-sm text-surface-400">рост зависимостей за 5 лет</div></div>
              <div><div className="text-3xl md:text-4xl font-bold text-white">24/7</div><div className="text-sm text-surface-400">AI-мониторинг поведения</div></div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              <div className="w-72 h-[580px] bg-gradient-to-b from-surface-800 to-surface-900 rounded-[3rem] p-3 shadow-2xl mx-auto border border-surface-700">
                <div className="w-full h-full bg-primary-900 rounded-[2.5rem] overflow-hidden">
                  <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-6">
                    <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-white/20 rounded-full" /><div><div className="text-white font-semibold">Привет, Алекс!</div><div className="text-white/70 text-sm">Твои финансы в норме</div></div></div>
                    <div className="bg-white/20 rounded-xl p-4"><div className="text-white/70 text-sm mb-1">Баланс</div><div className="text-white text-2xl font-bold">245 000 ₸</div></div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10"><div className="flex items-center gap-3 mb-2"><div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 text-accent-400" /></div><span className="text-white text-sm font-medium">Анализ расходов</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className="h-full w-3/4 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full" /></div></div>
                    <div className="bg-warning-500/10 rounded-xl p-4 border border-warning-500/20"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-warning-500/20 rounded-lg flex items-center justify-center"><Bell className="w-4 h-4 text-warning-400" /></div><div><span className="text-white text-sm font-medium">Внимание</span><p className="text-surface-400 text-xs">Необычная активность</p></div></div></div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center"><Brain className="w-4 h-4 text-primary-400" /></div><div><span className="text-white text-sm font-medium">AI-совет</span><p className="text-surface-400 text-xs">Сократи траты на 15%</p></div></div></div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-16 top-1/4 card-dark p-4 animate-pulse-slow"><div className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-accent-400" /><span className="text-white text-sm">Риск снижен на 40%</span></div></div>
              <div className="absolute -right-12 bottom-1/3 card-dark p-4"><div className="flex items-center gap-2"><Lock className="w-5 h-5 text-accent-400" /><span className="text-white text-sm">Данные защищены</span></div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0"><svg viewBox="0 0 1440 120" fill="none"><path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="#f8fafc"/></svg></div>
    </section>
  )
}

function TargetSegment() {
  const segments = [
    { title: "Студенты колледжей и вузов", description: "Первый опыт самостоятельного управления деньгами", icon: <Users className="w-6 h-6" /> },
    { title: "Молодые люди с нестабильным доходом", description: "Фрилансеры, подработки, нерегулярные поступления", icon: <TrendingDown className="w-6 h-6" /> },
    { title: "Склонные к импульсивным тратам", description: "Спонтанные покупки, азартное поведение", icon: <Zap className="w-6 h-6" /> }
  ]
  const whyImportant = ["Формируются финансовые привычки на всю жизнь", "Высокий уровень стресса и неопределённости", "Азартные игры воспринимаются как «лёгкий способ заработать»", "Профилактика наиболее эффективна до формирования зависимости"]
  const currentSolutions = ["Не ведёт учёт расходов или делает это нерегулярно", "Использует банковские приложения без обучения", "Ищет советы в соцсетях и у блогеров", "Игнорирует проблему до появления долгов"]
  const inconveniences = ["Отсутствие персональных рекомендаций", "Непонимание последствий финансовых решений", "Чувство потери контроля над деньгами", "Отсутствие поддержки без осуждения"]

  return (
    <section id="target" className="section-padding bg-surface-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-4"><Target className="w-4 h-4 text-primary-500" /><span className="text-sm text-primary-600 font-medium">Определить целевой сегмент</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">Кто ваш клиент?</h2>
          <p className="text-xl text-primary-600 font-semibold">Молодёжь 16–25 лет</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {segments.map((s, i) => (
            <div key={i} className="card group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">{s.title}</h3>
              <p className="text-surface-500 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3"><div className="w-10 h-10 bg-accent-500/20 rounded-xl flex items-center justify-center"><Star className="w-5 h-5 text-accent-400" /></div>Почему именно этот сегмент важен?</h3>
            <ul className="space-y-4">{whyImportant.map((item, i) => (<li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" /><span className="text-surface-200">{item}</span></li>))}</ul>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-surface-200">
            <h3 className="text-xl font-bold text-surface-900 mb-6 flex items-center gap-3"><div className="w-10 h-10 bg-warning-500/10 rounded-xl flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-warning-500" /></div>Как он сейчас решает проблему?</h3>
            <ul className="space-y-4">{currentSolutions.map((item, i) => (<li key={i} className="flex items-start gap-3"><XCircle className="w-5 h-5 text-warning-500 flex-shrink-0 mt-0.5" /><span className="text-surface-600">{item}</span></li>))}</ul>
          </div>
        </div>
        <div className="bg-surface-100 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-surface-900 mb-6 text-center">С какими неудобствами он сталкивается?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{inconveniences.map((item, i) => (<div key={i} className="bg-white rounded-xl p-4 border border-surface-200 text-center"><p className="text-surface-700 text-sm">{item}</p></div>))}</div>
        </div>
      </div>
    </section>
  )
}

function JobsToBeDone() {
  const jobs = [
    { type: "Функциональные работы", question: "Что нужно сделать?", color: "accent", icon: <Target className="w-6 h-6" />, items: ["Контролировать доходы и расходы", "Избегать финансовых ошибок", "Понимать последствия своих решений"], formula: "Клиент хочет управлять своими деньгами, чтобы избежать финансовых проблем." },
    { type: "Эмоциональные работы", question: "Что хочется чувствовать?", color: "primary", icon: <Heart className="w-6 h-6" />, items: ["Чувствовать спокойствие и уверенность", "Не испытывать тревогу из-за денег", "Ощущать контроль над своей жизнью"], formula: "Клиент хочет чувствовать уверенность и безопасность, чтобы не жить в постоянном стрессе." },
    { type: "Социальные работы", question: "Как клиент хочет выглядеть в глазах других?", color: "warning", icon: <Eye className="w-6 h-6" />, items: ["Выглядеть ответственным и взрослым", "Не быть «тем, у кого проблемы с деньгами»", "Соответствовать ожиданиям семьи"], formula: "Клиент хочет выглядеть финансово ответственным человеком в глазах окружающих." }
  ]
  const colorMap = { accent: { bg: "bg-accent-500/10", text: "text-accent-500", border: "border-accent-500/20" }, primary: { bg: "bg-primary-500/10", text: "text-primary-500", border: "border-primary-500/20" }, warning: { bg: "bg-warning-500/10", text: "text-warning-500", border: "border-warning-500/20" } }

  return (
    <section id="jtbd" className="section-padding bg-primary-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4"><Zap className="w-4 h-4 text-accent-400" /><span className="text-sm text-surface-300">Jobs to be Done</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">«Работы, которые клиент хочет выполнить»</h2>
          <p className="text-warning-400 font-semibold text-lg"></p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {jobs.map((job, i) => (
            <div key={i} className="card-dark p-8">
              <div className={`w-14 h-14 rounded-xl ${colorMap[job.color].bg} ${colorMap[job.color].text} flex items-center justify-center mb-6`}>{job.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{job.type}</h3>
              <p className={`text-sm ${colorMap[job.color].text} mb-6`}>{job.question}</p>
              <ul className="space-y-3 mb-6">{job.items.map((item, j) => (<li key={j} className="flex items-start gap-3"><CheckCircle className={`w-5 h-5 ${colorMap[job.color].text} flex-shrink-0 mt-0.5`} /><span className="text-surface-300 text-sm">{item}</span></li>))}</ul>
              <div className={`p-4 rounded-xl ${colorMap[job.color].bg} border ${colorMap[job.color].border}`}><p className="text-xs text-surface-400 mb-1">ФОРМУЛА:</p><p className="text-white text-sm font-medium">{job.formula}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PainGainOutcome() {
  const pains = [{ icon: <Zap className="w-5 h-5" />, text: "Импульсивные траты" }, { icon: <TrendingDown className="w-5 h-5" />, text: "Финансовая нестабильность" }, { icon: <AlertTriangle className="w-5 h-5" />, text: "Риск увлечения азартными играми" }, { icon: <XCircle className="w-5 h-5" />, text: "Отсутствие понятного и безопасного помощника" }]
  const gains = [{ icon: <Brain className="w-5 h-5" />, text: "Персональная поддержка 24/7" }, { icon: <Heart className="w-5 h-5" />, text: "Понятные рекомендации без давления" }, { icon: <Bell className="w-5 h-5" />, text: "Раннее выявление рискованного поведения" }, { icon: <TrendingUp className="w-5 h-5" />, text: "Рост финансовой осознанности" }]
  const outcomes = [{ icon: <CheckCircle className="w-5 h-5" />, text: "Улучшаются финансовые привычки" }, { icon: <Shield className="w-5 h-5" />, text: "Снижается интерес к азартным играм" }, { icon: <BarChart3 className="w-5 h-5" />, text: "Повышается контроль над расходами" }, { icon: <Smile className="w-5 h-5" />, text: "Уменьшается уровень стресса" }]

  return (
    <section id="pain-gain" className="section-padding bg-surface-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full mb-4"><BarChart3 className="w-4 h-4 text-accent-500" /><span className="text-sm text-accent-600 font-medium">Боли, выгоды и результаты</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900">Анализ ценности продукта</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-warning-50 rounded-2xl p-8 border border-warning-200">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 bg-warning-500 rounded-xl flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-white" /></div><div><h3 className="text-xl font-bold text-surface-900">Боли (Pain)</h3><p className="text-sm text-surface-500">Что мешает или раздражает?</p></div></div>
            <ul className="space-y-4">{pains.map((item, i) => (<li key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-warning-200"><div className="text-warning-500">{item.icon}</div><span className="text-surface-700">{item.text}</span></li>))}</ul>
          </div>
          <div className="bg-accent-50 rounded-2xl p-8 border border-accent-200">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center"><Gift className="w-6 h-6 text-white" /></div><div><h3 className="text-xl font-bold text-surface-900">Выгоды (Gain)</h3><p className="text-sm text-surface-500">Что хочет получить клиент?</p></div></div>
            <ul className="space-y-4">{gains.map((item, i) => (<li key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-accent-200"><div className="text-accent-500">{item.icon}</div><span className="text-surface-700">{item.text}</span></li>))}</ul>
          </div>
          <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
            <div className="flex items-center gap-3 mb-6"><div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center"><TrendingUp className="w-6 h-6 text-white" /></div><div><h3 className="text-xl font-bold text-surface-900">Результаты (Outcome)</h3><p className="text-sm text-surface-500">Что изменится после использования?</p></div></div>
            <ul className="space-y-4">{outcomes.map((item, i) => (<li key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary-200"><div className="text-primary-500">{item.icon}</div><span className="text-surface-700">{item.text}</span></li>))}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function UTPSection() {
  const proofs = [{ icon: <BarChart3 className="w-5 h-5" />, text: "Цифры" }, { icon: <Users className="w-5 h-5" />, text: "Отзывы" }, { icon: <CircleDot className="w-5 h-5" />, text: "Данные опросов" }, { icon: <Eye className="w-5 h-5" />, text: "Прототип или демонстрация" }, { icon: <Star className="w-5 h-5" />, text: "Сертификаты" }, { icon: <Zap className="w-5 h-5" />, text: "Опыт пилота" }, { icon: <CheckCircle className="w-5 h-5" />, text: "Результаты тестов" }, { icon: <TrendingUp className="w-5 h-5" />, text: "Исследования рынка" }, { icon: <Target className="w-5 h-5" />, text: "Скриншоты/фото" }]

  return (
    <section id="utp" className="section-padding bg-gradient-to-b from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning-500/20 rounded-full mb-4"><Sparkles className="w-4 h-4 text-warning-400" /><span className="text-sm text-warning-300 font-medium">Формулировка УТП</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Уникальное торговое предложение</h2>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-12">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4"><div className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary-500/20 text-primary-300 whitespace-nowrap">Для (конкретного клиента)</div><p className="text-white text-lg">молодёжи 16–25 лет</p></div>
            <div className="flex flex-col md:flex-row md:items-start gap-4"><div className="px-4 py-2 rounded-lg text-sm font-semibold bg-accent-500/20 text-accent-300 whitespace-nowrap">который хочет (выполнить работу)</div><p className="text-white text-lg">научиться управлять своими деньгами и избежать финансовых и азартных рисков</p></div>
            <div className="flex flex-col md:flex-row md:items-start gap-4"><div className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary-500/20 text-primary-300 whitespace-nowrap">наш продукт даёт (ценность)</div><p className="text-white text-lg">AIFA — интеллектуальный AI-ассистент, который в реальном времени анализирует финансовое поведение и помогает формировать здоровые привычки</p></div>
            <div className="flex flex-col md:flex-row md:items-start gap-4"><div className="px-4 py-2 rounded-lg text-sm font-semibold bg-warning-500/20 text-warning-300 whitespace-nowrap">потому что (доказуемое преимущество)</div><p className="text-white text-lg">он работает на профилактику, а не на устранение последствий</p></div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 md:p-10 mb-12">
          <h3 className="text-lg font-semibold text-primary-900/70 mb-4">ПОЛНАЯ ФОРМУЛИРОВКА УТП:</h3>
          <p className="text-xl md:text-2xl text-primary-900 font-medium leading-relaxed">Для молодёжи 16–25 лет, которая хочет научиться управлять своими деньгами и избежать финансовых и азартных рисков, AIFA — это интеллектуальный AI-ассистент, который в реальном времени анализирует финансовое поведение и помогает формировать здоровые привычки, потому что он работает на профилактику, а не на устранение последствий.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4 text-center">Доказательства УТП</h3>
          <p className="text-surface-400 text-center mb-8">Опишите как можно доказать, что ваше УТП — реальное, а не декларативное:</p>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">{proofs.map((p, i) => (<div key={i} className="card-dark p-4 flex flex-col items-center gap-2 text-center"><div className="text-accent-400">{p.icon}</div><span className="text-surface-300 text-xs">{p.text}</span></div>))}</div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    { icon: <BarChart3 className="w-6 h-6" />, title: "Умный анализ финансов", description: "Автоматическая категоризация расходов и выявление паттернов поведения", color: "accent" },
    { icon: <Brain className="w-6 h-6" />, title: "Поведенческая аналитика", description: "AI выявляет рискованные паттерны до того, как они станут проблемой", color: "primary" },
    { icon: <Bell className="w-6 h-6" />, title: "Стоп-сигналы", description: "Мягкие предупреждения в момент принятия импульсивных решений", color: "warning" },
    { icon: <Lock className="w-6 h-6" />, title: "Полная анонимность", description: "Ваши данные защищены. Вы контролируете конфиденциальность", color: "surface" },
    { icon: <Target className="w-6 h-6" />, title: "Персональные цели", description: "Устанавливайте финансовые цели и отслеживайте прогресс", color: "accent" },
    { icon: <Zap className="w-6 h-6" />, title: "Мгновенные инсайты", description: "Получайте умные рекомендации после каждой транзакции", color: "primary" }
  ]
  const colorMap = { accent: "bg-accent-500/10 text-accent-500", primary: "bg-primary-500/10 text-primary-500", warning: "bg-warning-500/10 text-warning-500", surface: "bg-surface-500/10 text-surface-500" }

  return (
    <section id="features" className="section-padding bg-surface-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full mb-4"><Sparkles className="w-4 h-4 text-accent-500" /><span className="text-sm text-accent-600 font-medium">Возможности</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">Всё для контроля финансов</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="card group hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl ${colorMap[f.color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>{f.icon}</div>
              <h3 className="text-xl font-semibold text-surface-900 mb-2">{f.title}</h3>
              <p className="text-surface-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { number: "01", title: "Подключите счета", description: "Безопасно свяжите карты или вводите данные вручную" },
    { number: "02", title: "AI изучает паттерны", description: "Система анализирует ваше финансовое поведение" },
    { number: "03", title: "Получайте инсайты", description: "Рекомендации и предупреждения в реальном времени" },
    { number: "04", title: "Формируйте привычки", description: "Улучшайте финансовое здоровье с поддержкой AI" }
  ]

  return (
    <section className="section-padding bg-primary-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-4"><Zap className="w-4 h-4 text-accent-400" /><span className="text-sm text-surface-300">Как это работает</span></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Четыре шага к финансовому здоровью</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="card-dark h-full"><div className="text-5xl font-bold text-accent-500/20 mb-4">{s.number}</div><h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3><p className="text-surface-400">{s.description}</p></div>
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2"><ChevronRight className="w-6 h-6 text-accent-500/30" /></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-surface-50 to-surface-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/10 rounded-full mb-6"><Shield className="w-4 h-4 text-accent-500" /><span className="text-sm text-accent-600 font-medium">Присоединяйтесь</span></div>
        <h2 className="text-3xl md:text-5xl font-bold text-surface-900 mb-6">Готовы взять финансы<br />под контроль?</h2>
        <p className="text-xl text-surface-500 mb-8 max-w-2xl mx-auto">Присоединяйтесь к тысячам молодых людей, которые уже управляют своими деньгами осознанно с AIFA</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <input type="email" placeholder="Ваш email" className="flex-1 px-6 py-4 rounded-xl border border-surface-300 focus:outline-none focus:ring-2 focus:ring-accent-500" />
          <button type="submit" className="btn-primary whitespace-nowrap">Начать бесплатно</button>
        </form>
        <p className="text-sm text-surface-400">Никакого спама. Отписаться можно в любой момент.</p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-primary-900 text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="flex items-center gap-2"><div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center"><Shield className="w-6 h-6 text-primary-900" /></div><span className="text-xl font-bold">AIFA</span></div>
          <div className="flex gap-6 text-surface-400 text-sm">
            <a href="#target" className="hover:text-white">Для кого</a>
            <a href="#jtbd" className="hover:text-white">Задачи</a>
            <a href="#utp" className="hover:text-white">УТП</a>
            <a href="#features" className="hover:text-white">Возможности</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-surface-400 text-sm">© 2026 AIFA. Все права защищены.</div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TargetSegment />
      <JobsToBeDone />
      <PainGainOutcome />
      <UTPSection />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
