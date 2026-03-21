import type { StudentType } from '../entities/StudentMesh'

export interface RichExplOption {
  label: string         // короткий заголовок варианта (А/Б/В/Г)
  text: string          // полный текст, который «говорит» учитель
  understandingBase: number  // прирост понимания у «average» ученика
  attentionDelta: number     // прирост внимания у всех
  difficulty: 'easy' | 'medium' | 'hard'
  /** Добавка к understandingBase по типу ученика */
  typeBonus: Partial<Record<StudentType, number>>
  /** Плохой вариант — снижает понимание, игрок открывает это сам */
  isBad?: boolean
}

export interface TaskData {
  text: string
  hint?: string
}

export interface TopicEntry {
  subject: string
  gradeMin: number
  gradeMax: number
  topic: string
  options: [RichExplOption, RichExplOption, RichExplOption, RichExplOption]
  /** Плохой вариант объяснения — появляется в раунде-закреплении */
  badOption?: RichExplOption
  tasks: { easy: TaskData; medium: TaskData; hard: TaskData }
  homework: { easy: string; medium: string; hard: string }
}

// ─────────────────────────────────────────────────────────────────────────────
// МАТЕМАТИКА
// ─────────────────────────────────────────────────────────────────────────────
const MATH: TopicEntry[] = [
  {
    subject: 'math', gradeMin: 7, gradeMax: 8,
    topic: 'ФСУ — формулы сокращённого умножения',
    options: [
      {
        label: 'А) Теоретический вывод',
        text: '«ФСУ — тождества для ускоренного умножения.\n\n  (a+b)² = a² + 2ab + b²\n  (a−b)² = a² − 2ab + b²\n  a²−b² = (a+b)(a−b)\n\nЗапомните все три. Они уже используются в ЕГЭ!»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -6, bully: -5 },
      },
      {
        label: 'Б) Шаг за шагом у доски',
        text: '«Шаг 1: (a+b)² = (a+b)·(a+b)\nШаг 2: Раскрываем: a·a + a·b + b·a + b·b\nШаг 3: a² + ab + ab + b² = a² + 2ab + b²\n✏️ Запишите каждый шаг — через неделю будете делать автоматически.»',
        understandingBase: 10, attentionDelta: 4, difficulty: 'medium',
        typeBonus: { anxious: 9, average: 5, helper: 3, genius: -2 },
      },
      {
        label: 'В) Пример с числами',
        text: '«Считаем 102² без калькулятора:\n102² = (100+2)² = 10 000 + 400 + 4 = 10 404 ✔\nИли 99² = (100−1)² = 10 000 − 200 + 1 = 9 801.\nПопробуйте сами прямо сейчас: 51² = ?»',
        understandingBase: 8, attentionDelta: 9, difficulty: 'easy',
        typeBonus: { lazy: 8, bully: 6, average: 4, helper: 2, anxious: 2 },
      },
      {
        label: 'Г) Вопрос классу',
        text: '«Кто напишет на доске (a+b)²?\nМногие пишут a²+b² — это ошибка!\nПроверка: (3+4)²=49, а 3²+4²=25. Почему разные?\nВот что пропали? Среднее слагаемое — 2ab!»',
        understandingBase: 7, attentionDelta: 12, difficulty: 'medium',
        typeBonus: { genius: 13, bully: 7, helper: 5, lazy: 4, anxious: -4 },
      },
    ],
    tasks: {
      easy:   { text: 'Назовите формулу (a+b)². Запишите в тетрадь.', hint: '(a+b)² = a² + 2ab + b²' },
      medium: { text: 'Раскройте скобки и упростите:\n(2x + 3)²' },
      hard:   { text: 'Разложите на множители:\n8a³ + 27b³\n(используйте куб суммы: a³+b³=(a+b)(a²−ab+b²))' },
    },
    homework: {
      easy:   'Выучите три главные формулы ФСУ. Придумайте числовой пример к каждой.',
      medium: 'Раскройте скобки: (3a−2b)², (x+5)², (4y−1)²',
      hard:   'Докажите (a+b)³=a³+3a²b+3ab²+b³. Разложите: a³−8.',
    },
  },

  {
    subject: 'math', gradeMin: 8, gradeMax: 9,
    topic: 'Квадратные уравнения',
    options: [
      {
        label: 'А) Определение и дискриминант',
        text: '«ax²+bx+c=0 — стандартная форма.\nДискриминант: D = b²−4ac.\nЕсли D>0 — два корня, D=0 — один, D<0 — нет корней.\nФормула: x = (−b ± √D) / 2a»',
        understandingBase: 13, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 10, helper: 4, anxious: 1, lazy: -7, bully: -6 },
      },
      {
        label: 'Б) Разбор примера у доски',
        text: '«Решим x²−5x+6=0\nШаг 1: a=1, b=−5, c=6\nШаг 2: D=25−24=1\nШаг 3: x=(5±1)/2 → x₁=3, x₂=2\nПроверка: 3·2=6=c ✔, 3+2=5=−b/a ✔»',
        understandingBase: 11, attentionDelta: 5, difficulty: 'medium',
        typeBonus: { anxious: 9, average: 5, helper: 3, genius: -1 },
      },
      {
        label: 'В) Теорема Виета как лайфхак',
        text: '«Если x₁+x₂=−b/a и x₁·x₂=c/a — можно подбирать корни!\nПример: x²−7x+12=0 → x₁+x₂=7, x₁·x₂=12\nПодбираем: 3 и 4 → 3+4=7, 3·4=12 ✔\nБез формулы за 10 секунд!»',
        understandingBase: 9, attentionDelta: 8, difficulty: 'easy',
        typeBonus: { lazy: 7, bully: 5, average: 4, helper: 3 },
      },
      {
        label: 'Г) Где это нужно в жизни?',
        text: '«Архитектор считает размер арки. Физик — траекторию мяча. Программист — корни в алгоритмах.\nСейчас вы решите: при каком x площадь прямоугольника x(x−3)=10? Запишите уравнение.»',
        understandingBase: 7, attentionDelta: 13, difficulty: 'medium',
        typeBonus: { genius: 10, bully: 8, lazy: 6, helper: 4, anxious: -3 },
      },
    ],
    tasks: {
      easy:   { text: 'Найдите дискриминант: x²−6x+5=0', hint: 'D = b²−4ac = 36−20 = 16' },
      medium: { text: 'Решите уравнение: 2x²+3x−2=0' },
      hard:   { text: 'Составьте квадратное уравнение с корнями x₁=−3, x₂=5 и решите его.' },
    },
    homework: {
      easy:   'Найдите корни: x²−4=0, x²+6x+9=0.',
      medium: 'Решите: 3x²−x−2=0, x²−5x−6=0.',
      hard:   'Решите систему: x²+y²=25 и x+y=7.',
    },
  },

  {
    subject: 'math', gradeMin: 7, gradeMax: 7,
    topic: 'Линейная функция и её график',
    options: [
      {
        label: 'А) Определение y = kx + b',
        text: '«Линейная функция: y = kx + b.\nk — наклон (угловой коэффициент),\nb — точка пересечения с осью Y.\nПри k>0 — возрастание, k<0 — убывание.»',
        understandingBase: 11, attentionDelta: -2, difficulty: 'medium',
        typeBonus: { genius: 7, average: 4, helper: 4, lazy: -4, bully: -4, anxious: 3 },
      },
      {
        label: 'Б) Строим график вместе',
        text: '«Строим y = 2x + 1:\nШаг 1: x=0 → y=1. Точка (0;1)\nШаг 2: x=1 → y=3. Точка (1;3)\nШаг 3: Проводим прямую через обе точки.\nВсегда достаточно двух точек!»',
        understandingBase: 10, attentionDelta: 6, difficulty: 'easy',
        typeBonus: { anxious: 8, average: 6, bully: 4, lazy: 5, helper: 3 },
      },
      {
        label: 'В) Угловой коэффициент — это крутизна',
        text: '«k = 10 — почти вертикальная гора.\nk = 0.1 — пологий холм.\nk = −2 — спуск.\nk = 0 — горизонталь.\nКто назовёт: горка y=−3x+5 крутая?»',
        understandingBase: 8, attentionDelta: 10, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 7, average: 5, helper: 3 },
      },
      {
        label: 'Г) Где пересекутся две прямые?',
        text: '«y=2x+1 и y=−x+7 — где пересекаются?\nПриравниваем: 2x+1=−x+7 → 3x=6 → x=2.\nПодставляем: y=5. Точка (2;5).\n→ Так решают системы уравнений!»',
        understandingBase: 8, attentionDelta: 9, difficulty: 'medium',
        typeBonus: { genius: 11, helper: 5, average: 3, anxious: -2 },
      },
    ],
    tasks: {
      easy:   { text: 'Назовите k и b для функции y = 3x − 2.', hint: 'k=3, b=−2' },
      medium: { text: 'Постройте график функции y = −2x + 4 (2 точки и прямая).' },
      hard:   { text: 'Найдите точку пересечения прямых: y = 3x−1 и y = −x+7.' },
    },
    homework: {
      easy:   'Запишите три функции с k>0 и три с k<0.',
      medium: 'Постройте графики: y=x+3, y=−2x+5.',
      hard:   'При каком b прямая y=2x+b проходит через точку (3;7)?',
    },
  },

  // ── NEW: Теорема Пифагора ─────────────────────────────────────────────────
  {
    subject: 'math', gradeMin: 8, gradeMax: 8,
    topic: 'Теорема Пифагора',
    options: [
      {
        label: 'А) Формулировка и доказательство',
        text: '«В прямоугольном треугольнике: a² + b² = c²\nc — гипотенуза (напротив прямого угла).\nДоказательство: площадь большого квадрата = квадратам по катетам.\nЗапомните: "Пифагоровы тройки" — 3,4,5 и 5,12,13.»',
        understandingBase: 12, attentionDelta: -2, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -5, bully: -4 },
      },
      {
        label: 'Б) Чертёж и расчёт',
        text: '«Катеты a=3, b=4. Найдём гипотенузу.\nШаг 1: c² = 3² + 4² = 9 + 16 = 25\nШаг 2: c = √25 = 5\nЭто "египетский треугольник" — его знали 4000 лет назад!»',
        understandingBase: 11, attentionDelta: 6, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3, genius: -1 },
      },
      {
        label: 'В) От Пифагора до GPS',
        text: '«GPS считает расстояния по "3D-Пифагору":\nd = √(Δx²+Δy²+Δz²).\nАрхитекторы используют теорему при разметке фундамента.\nЕщё: экран 16:9 — это Пифагор у вас в кармане!»',
        understandingBase: 8, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 7, average: 5, helper: 3 },
      },
      {
        label: 'Г) Задача на время',
        text: '«Лестница 5 м стоит у стены. Нижний конец в 3 м от стены.\nНа какой высоте верхний?\n√(5²−3²) = √16 = 4 м.\nКто решит: высота горы, если горизонт 10 км, радиус Земли 6400 км?»',
        understandingBase: 7, attentionDelta: 11, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 6, helper: 5, lazy: 3, anxious: -2 },
      },
    ],
    badOption: {
      label: 'Д) «Просто нарисуйте треугольник»',
      text: '«Зачем формулы? Возьмите линейку — нарисуйте треугольник, измерьте стороны. Этого вполне достаточно. Точность не так важна в жизни.»',
      understandingBase: -5, attentionDelta: 5, difficulty: 'easy',
      typeBonus: { bully: 10, lazy: 9, genius: -12, helper: -9, anxious: -7 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'Катеты треугольника — 6 и 8. Найдите гипотенузу.', hint: 'c = √(36+64) = 10' },
      medium: { text: 'Гипотенуза прямоугольного треугольника равна 13, один катет — 5. Найдите второй катет.' },
      hard:   { text: 'Диагональ прямоугольника 10 см, одна сторона 6 см. Найдите площадь прямоугольника.' },
    },
    homework: {
      easy:   'Найдите гипотенузу, если катеты: a) 3 и 4; б) 5 и 12.',
      medium: 'Может ли треугольник со сторонами 5, 7, 9 быть прямоугольным? Обоснуйте.',
      hard:   'Точки A(1,2) и B(4,6). Найдите расстояние AB через теорему Пифагора.',
    },
  },

  // ── NEW: Тригонометрия ────────────────────────────────────────────────────
  {
    subject: 'math', gradeMin: 9, gradeMax: 10,
    topic: 'Тригонометрия. Синус, косинус, тангенс',
    options: [
      {
        label: 'А) Определения через прям. треугольник',
        text: '«sin α = противолежащий катет / гипотенуза\ncos α = прилежащий катет / гипотенуза\ntg α = sin α / cos α = противол. / прилежащий.\nГлавное тождество: sin²α + cos²α = 1»',
        understandingBase: 13, attentionDelta: -4, difficulty: 'hard',
        typeBonus: { genius: 10, helper: 4, anxious: 2, lazy: -8, bully: -6 },
      },
      {
        label: 'Б) Единичная окружность',
        text: '«Рисуем окружность радиусом 1. Угол α от оси X.\nТочка на окружности: (cos α, sin α).\nsin 0°=0, cos 0°=1; sin 90°=1, cos 90°=0.\nMнение: sin²α+cos²α = 1 — расстояние от центра!»',
        understandingBase: 11, attentionDelta: 5, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 5, helper: 3, genius: 2 },
      },
      {
        label: 'В) Синус в музыке и физике',
        text: '«Звуковая волна — это синус! y = A·sin(ωt+φ).\nКолебания маятника, ток в розетке (50 Гц), волны на воде.\nТригонометрия объясняет всё периодическое.»',
        understandingBase: 8, attentionDelta: 13, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 7, average: 5, helper: 4 },
      },
      {
        label: 'Г) Таблица значений — соревнование',
        text: '«Кто быстрее назовёт: sin 30°, cos 60°, tg 45°?\nПодсказка: запомните 0°, 30°, 45°, 60°, 90°.\n0, 1/2, √2/2, √3/2, 1 для синуса.\nЭти значения встречаются в ЕГЭ каждый год!»',
        understandingBase: 7, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 8, helper: 5, lazy: 3, anxious: -3 },
      },
    ],
    badOption: {
      label: 'Д) «Используйте калькулятор всегда»',
      text: '«Зачем помнить sin и cos? Всегда есть калькулятор. Введите угол — получите ответ. Таблицы учить не нужно. Время ограничено.»',
      understandingBase: -4, attentionDelta: 6, difficulty: 'easy',
      typeBonus: { bully: 10, lazy: 12, genius: -10, helper: -8, anxious: -6 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'В прямоугольном треугольнике гипотенуза = 10, угол = 30°. Найдите противолежащий катет.', hint: 'a = c·sin30° = 10·0.5 = 5' },
      medium: { text: 'Найдите: sin²45° + cos²45° (проверьте основное тождество).' },
      hard:   { text: 'Упростите выражение: (sin α + cos α)² − 1.' },
    },
    homework: {
      easy:   'Выучите значения sin/cos/tg для 0°, 30°, 45°, 60°, 90°.',
      medium: 'Решите уравнение: sin x = 0.5 (найдите все решения на [0°; 360°]).',
      hard:   'Докажите тождество: tg α + ctg α = 1/(sin α · cos α).',
    },
  },

  // ── NEW: Вероятность ──────────────────────────────────────────────────────
  {
    subject: 'math', gradeMin: 8, gradeMax: 9,
    topic: 'Вероятность. Основные понятия',
    options: [
      {
        label: 'А) Классическое определение',
        text: '«P(A) = m/n, где m — благоприятные исходы, n — всего возможных.\nВсегда: 0 ≤ P(A) ≤ 1.\nP(Ω) = 1 (достоверное), P(∅) = 0 (невозможное).\nЕсли P(A)+P(не-A)=1 — события противоположны.»',
        understandingBase: 12, attentionDelta: -2, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -6, bully: -5 },
      },
      {
        label: 'Б) Монетка и кубик',
        text: '«Кубик: 6 граней. P(выпадет 3) = 1/6 ≈ 0.17 = 17%.\nМонета: P(орёл) = 1/2 = 50%.\nКарта из колоды 52: P(туз) = 4/52 = 1/13 ≈ 8%.\nПопробуйте сами: P(чётное на кубике) = ?»',
        understandingBase: 11, attentionDelta: 7, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 8, average: 6, helper: 4 },
      },
      {
        label: 'В) Вероятность в жизни',
        text: '«Погода: "30% дождя" — значит из 10 похожих дней дождь в 3.\nМедицина: вакцина 95% — значит защищает 95 из 100 привитых.\nСтраховые компании: считают вероятность аварии для каждого водителя!»',
        understandingBase: 8, attentionDelta: 11, difficulty: 'easy',
        typeBonus: { lazy: 10, bully: 7, average: 5, helper: 4 },
      },
      {
        label: 'Г) Парадокс монтера Холла',
        text: '«3 двери, за одной — приз. Вы выбрали №1. Ведущий открыл №3 — там коза. Менять ли выбор?\nОтвет: ДА! P выиграть при смене = 2/3!\nПочему? Обсудим вместе — это против интуиции.»',
        understandingBase: 6, attentionDelta: 16, difficulty: 'medium',
        typeBonus: { genius: 14, bully: 9, helper: 6, lazy: 7, anxious: -4 },
      },
    ],
    badOption: {
      label: 'Д) «Вероятность ненаучна»',
      text: '«Честно говоря, вероятность — это гадание. Никто не знает точно, что произойдёт. Просто угадывайте. В жизни всё случайно, формулы не помогут.»',
      understandingBase: -7, attentionDelta: 3, difficulty: 'easy',
      typeBonus: { bully: 11, lazy: 10, genius: -13, helper: -10, anxious: -6 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'В мешке 3 красных и 7 синих шаров. Какова вероятность вытащить красный?', hint: 'P = 3/10 = 0.3' },
      medium: { text: 'Монету подбросили 3 раза. Найдите вероятность выпадения ровно двух орлов.' },
      hard:   { text: 'На 10 лотерейных билетов 3 выигрышных. Покупают 4 билета. Найдите P(хотя бы 1 выиграет).' },
    },
    homework: {
      easy:   'Бросают кубик. Найдите P(больше 4), P(нечётное), P(кратное 3).',
      medium: 'Из 5 карточек (1,2,3,4,5) достают 2. Найдите P(сумма > 6).',
      hard:   'Задача: стреляют 2 раза по мишени. P попадания = 0.7 каждый раз. P(хотя бы одно попадание) = ?',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
const PHYSICS: TopicEntry[] = [
  {
    subject: 'physics', gradeMin: 8, gradeMax: 9,
    topic: 'Закон Ньютона и второй закон',
    options: [
      {
        label: 'А) Формулировка трёх законов',
        text: '«I закон: тело покоится, если нет силы.\nII закон: F = m·a — сила равна массе на ускорение.\nIII закон: действие = противодействие.\nЗапишите все три формулировки.»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -7, bully: -5 },
      },
      {
        label: 'Б) Задача на II закон у доски',
        text: '«Тело массой 2 кг разгоняется с a=3 м/с².\nF = m·a = 2·3 = 6 Н.\nШаг 1 — записать «Дано».\nШаг 2 — выбрать формулу.\nШаг 3 — подставить числа.»',
        understandingBase: 11, attentionDelta: 5, difficulty: 'medium',
        typeBonus: { anxious: 9, average: 6, helper: 3 },
      },
      {
        label: 'В) Пример: лифт и весы',
        text: '«Вы стоите в лифте. Лифт едет вверх → вы тяжелее! Вниз → легче.\nПочему? F=ma: при a↑ — сила N = mg+ma.\nЕсли трос обрывается — невесомость: N=0.»',
        understandingBase: 9, attentionDelta: 11, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 7, average: 5, helper: 3 },
      },
      {
        label: 'Г) Эксперимент: толкни стол',
        text: '«Кто может сдвинуть стол одним пальцем?\nПо III закону, стол тоже давит на палец!\nЕсли a=0 → сумма сил = 0 (I закон).\nКак называется эта ситуация?»',
        understandingBase: 8, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { bully: 9, genius: 10, lazy: 7, helper: 5, anxious: -3 },
      },
    ],
    tasks: {
      easy:   { text: 'Тело массой 5 кг имеет ускорение 2 м/с². Найдите приложенную силу.', hint: 'F = m·a' },
      medium: { text: 'Сила 30 Н действует на тело массой 6 кг. Найдите ускорение и скорость через 4 с.' },
      hard:   { text: 'Труб масса 8 кг лежит на поверхности μ=0.3. Какая сила нужна для равномерного движения? (g=10)' },
    },
    homework: {
      easy:   'Выучите три закона Ньютона и приведите пример для каждого.',
      medium: 'Решите задачи: m=4кг, a=5м/с², F=? и F=20Н, m=2кг, a=?',
      hard:   'Объясните, почему при прыжке с парашютом тело в итоге движется равномерно.',
    },
  },

  {
    subject: 'physics', gradeMin: 8, gradeMax: 9,
    topic: 'Закон Ома. Последовательное и параллельное соединение',
    options: [
      {
        label: 'А) Закон Ома: I = U/R',
        text: '«Ток I = U/R (Ом). U — напряжение, R — сопротивление.\nПри последовательном соединении: R = R₁+R₂, I одинаков.\nПри параллельном: 1/R = 1/R₁+1/R₂, U одинаково.»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 10, helper: 4, anxious: 1, lazy: -8, bully: -6 },
      },
      {
        label: 'Б) Схема на доске',
        text: '«Рисуем: батарея 12В, R₁=3Ом, R₂=4Ом последовательно.\nR=3+4=7 Ом.\nI = U/R = 12/7 ≈ 1.7 А.\nU₁ = I·R₁ = 5.1 В, U₂ = 6.9 В.\nПроверка: 5.1+6.9=12 ✔»',
        understandingBase: 11, attentionDelta: 6, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3 },
      },
      {
        label: 'В) Бытовые приборы — это параллельно!',
        text: '«Почему при подключении третьего прибора автомат выбивает?\nВсе розетки — параллельно → суммарный ток растёт.\nКолонка + чайник + фен = перегрузка.\nВот зачем автоматы!»',
        understandingBase: 8, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 7, average: 6, helper: 4 },
      },
      {
        label: 'Г) Вопрос: что опаснее?',
        text: '«Вопрос классу: при одном напряжении — большой или малый ток опаснее?\nИ почему провода греются? (I²R = мощность потерь)\nКто объяснит?»',
        understandingBase: 7, attentionDelta: 13, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 7, helper: 5, lazy: 4, anxious: -4 },
      },
    ],
    tasks: {
      easy:   { text: 'U=12В, R=4Ом. Найдите ток I.', hint: 'I = U/R' },
      medium: { text: 'R₁=6Ом и R₂=3Ом соединены параллельно. Найдите общее сопротивление.' },
      hard:   { text: 'Цепь: U=24В, R₁=2Ом (посл.) и R₂=6Ом||R₃=3Ом (пар.). Найдите I через каждый резистор.' },
    },
    homework: {
      easy:   'Запишите формулу закона Ома. Приведите два числовых примера.',
      medium: 'Решите задачу: три резистора (2, 3, 6 Ом) — последовательно и параллельно. Найдите R.',
      hard:   'При каком R электроплитка потребляет 2 кВт при напряжении 220В?',
    },
  },

  // ── NEW: Термодинамика ────────────────────────────────────────────────────
  {
    subject: 'physics', gradeMin: 9, gradeMax: 10,
    topic: 'Основы термодинамики. Температура и тепло',
    options: [
      {
        label: 'А) Температура и внутренняя энергия',
        text: '«Температура T (Кельвин) = скорость движения молекул.\nВнутренняя энергия U = кинетическая + потенциальная молекул.\nQ = c·m·ΔT — теплота; c — удельная теплоёмкость.\nQ > 0 — тело нагревается, Q < 0 — остывает.»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -7, bully: -5 },
      },
      {
        label: 'Б) Пример: нагрев воды',
        text: '«Нагреем 0.5 кг воды на 20°C. c_воды = 4200 Дж/(кг·К).\nQ = 4200 × 0.5 × 20 = 42 000 Дж = 42 кДж.\nЧайник 2 кВт: t = Q/P = 42000/2000 = 21 сек.\nТеперь знаете, почему чайник греет 2-3 минуты?»',
        understandingBase: 11, attentionDelta: 7, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3 },
      },
      {
        label: 'В) Парниковый эффект — термодинамика',
        text: '«CO₂ задерживает инфракрасное излучение.\nПланета не может остыть → температура растёт.\nЭто первое начало термодинамики ΔU = Q − A.\nФизика объясняет климатический кризис!»',
        understandingBase: 8, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 6, average: 5, helper: 4 },
      },
      {
        label: 'Г) Задача на заморозку',
        text: '«Кто объяснит: почему вода при замерзании РАСШИРЯЕТСЯ?\nBольшинство веществ сжимаются при охлаждении.\nА вода — нет. Поэтому лёд плавает, трубы лопаются.\nОбсудим: как это связано с движением молекул?»',
        understandingBase: 7, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 13, bully: 8, helper: 5, lazy: 5, anxious: -3 },
      },
    ],
    badOption: {
      label: 'Д) «Тепло — это просто горячо»',
      text: '«Термодинамика слишком сложная. Просто запомните: горячее — много тепла, холодное — мало. Формулы изучим потом, если выйдет.»',
      understandingBase: -5, attentionDelta: 4, difficulty: 'easy',
      typeBonus: { bully: 10, lazy: 9, genius: -11, helper: -9, anxious: -7 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'Чему равна Q при нагреве 1 кг железа (c=460) на 50°C?', hint: 'Q = c·m·ΔT = 460·1·50 = 23000 Дж' },
      medium: { text: 'Смешали 0.2 кг воды при 80°C и 0.3 кг при 20°C. Найдите температуру смеси (c одинаков).' },
      hard:   { text: 'КПД двигателя η = 1 − T₂/T₁. Если T₁=600K, T₂=300K, найдите КПД и объясните его смысл.' },
    },
    homework: {
      easy:   'Рассчитайте, сколько тепла нужно для нагрева 2 кг воды от 20 до 100°C.',
      medium: 'Объясните: почему металлические предметы на холоде кажутся холоднее деревянных?',
      hard:   'Второе начало термодинамики — формулировки Клаузиуса и Томсона. Приведите по 2 примера.',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
const CHEMISTRY: TopicEntry[] = [
  {
    subject: 'chemistry', gradeMin: 8, gradeMax: 9,
    topic: 'Строение атома. Электронные оболочки',
    options: [
      {
        label: 'А) Теория: ядро и электроны',
        text: '«Атом: ядро (протоны+нейтроны) + электронные оболочки.\nЗаряд ядра = порядковый номер элемента.\nОболочки: 1-я — max 2э, 2-я — max 8э, 3-я — max 18э.\nЭлементы раза периода = номер последней оболочки.»',
        understandingBase: 13, attentionDelta: -4, difficulty: 'hard',
        typeBonus: { genius: 10, helper: 4, anxious: 2, lazy: -8, bully: -6 },
      },
      {
        label: 'Б) Запись на доске: кислород',
        text: '«O: Z=8, масса=16.\nШаг 1: 8 протонов, 8 нейтронов.\nШаг 2: Заполняем оболочки: 1s²2s²2p⁴\nШаг 3: Последняя оболочка: 6 электронов → валентность II.\n→ H₂O!»',
        understandingBase: 10, attentionDelta: 6, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3 },
      },
      {
        label: 'В) Почему благородные газы «ленивые»?',
        text: '«Гелий, неон, аргон не вступают в реакции.\nПочему? Их оболочки полностью заполнены: He—2e, Ne—8e.\nВсе остальные элементы "хотят" достичь этого — отдают или принимают электроны.»',
        understandingBase: 8, attentionDelta: 11, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 6, average: 5, helper: 4 },
      },
      {
        label: 'Г) Загадка: кто есть кто?',
        text: '«Элемент с Z=11, 3 оболочки, 1 внешний электрон.\nОн активный металл. Реагирует с водой. Назовите его!\nПодсказка: есть в соли NaCl. Это…»',
        understandingBase: 7, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 8, helper: 5, lazy: 5, anxious: -3 },
      },
    ],
    tasks: {
      easy:   { text: 'Сколько протонов у железа (Fe, Z=26)?', hint: 'Число протонов = порядковый номер' },
      medium: { text: 'Запишите электронную конфигурацию натрия (Na, Z=11).' },
      hard:   { text: 'Объясните, почему хлор в соединениях проявляет степени окисления −1, +1, +5, +7.' },
    },
    homework: {
      easy:   'Запишите строение атомов: H, He, Li, Be (в виде схемы).',
      medium: 'Запишите электронные конфигурации: S, Ca, Al.',
      hard:   'Объясните, чем изотопы отличаются от изобаров. Примеры.',
    },
  },
  {
    subject: 'chemistry', gradeMin: 8, gradeMax: 9,
    topic: 'Кислоты и основания. Нейтрализация',
    options: [
      {
        label: 'А) Определения и примеры',
        text: '«Кислоты — вещества, выделяющие H⁺: HCl, H₂SO₄, HNO₃.\nОснования — выделяют OH⁻: NaOH, Ca(OH)₂.\nРеакция нейтрализации: кислота + основание → соль + вода.\nНапример: HCl + NaOH = NaCl + H₂O»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'medium',
        typeBonus: { genius: 7, helper: 4, anxious: 3, lazy: -5 },
      },
      {
        label: 'Б) Демонстрация pH — кислота/щёлочь',
        text: '«pH < 7 — кислая среда (желудочный сок = 2)\npH = 7 — нейтрально (чистая вода)\npH > 7 — щелочная (сода = 9, мыло = 10)\nПоказываем индикатором: красный → кислота.»',
        understandingBase: 9, attentionDelta: 13, difficulty: 'easy',
        typeBonus: { lazy: 10, bully: 8, average: 6, helper: 4 },
      },
      {
        label: 'В) Уравнение нейтрализации',
        text: '«H₂SO₄ + 2 NaOH = Na₂SO₄ + 2 H₂O\nШаг 1: Расставим коэффициенты.\nШаг 2: Проверим баланс: S=1, O=4+2→4+2 ✔, H=2+2→2 ✔\nНа что похоже? На уравнение в математике!»',
        understandingBase: 10, attentionDelta: 5, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3, genius: -1 },
      },
      {
        label: 'Г) Что будет, если смешать?',
        text: '«Уксус (кислота) + сода (щёлочь) = бурление.\nПочему? CO₂ выделяется: H₂CO₃ → H₂O + CO₂↑\nЭто нейтрализация в быту — безопасная реакция.\nКто объяснит, почему тесто поднимается?»',
        understandingBase: 8, attentionDelta: 15, difficulty: 'easy',
        typeBonus: { lazy: 10, bully: 9, genius: 8, helper: 5, anxious: 2 },
      },
    ],
    tasks: {
      easy:   { text: 'Назовите продукты реакции: HCl + NaOH = ?', hint: 'NaCl + H₂O' },
      medium: { text: 'Расставьте коэффициенты: H₃PO₄ + Ca(OH)₂ → Ca₃(PO₄)₂ + H₂O' },
      hard:   { text: 'Вычислите массу соли, образующейся при реакции 0.2 моль H₂SO₄ с достаточным количеством NaOH.' },
    },
    homework: {
      easy:   'Приведите по 2 примера кислот и оснований из повседневной жизни.',
      medium: 'Составьте уравнения нейтрализации для: HNO₃+KOH, H₂SO₄+Ba(OH)₂.',
      hard:   'Определите pH раствора 0.1 моль/л HCl. Объясните расчёт.',
    },
  },

  // ── NEW: Металлы ──────────────────────────────────────────────────────────
  {
    subject: 'chemistry', gradeMin: 8, gradeMax: 9,
    topic: 'Металлы и их химические свойства',
    options: [
      {
        label: 'А) Ряд активности металлов',
        text: '«Li K Ca Na Mg Al Zn Fe Ni Sn Pb H Cu Ag Au\nМеталлы левее H — вытесняют водород из кислот.\nАктивные металлы (Na, K) реагируют с водой.\nАu, Ag — благородные, не окисляются.»',
        understandingBase: 12, attentionDelta: -2, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -7, bully: -5 },
      },
      {
        label: 'Б) Реакции металлов',
        text: '«Fe + 2HCl = FeCl₂ + H₂↑ (железо + кислота)\n2Na + 2H₂O = 2NaOH + H₂↑ (натрий + вода!)\n2Al + 6H₂SO₄(разб) = Al₂(SO₄)₃ + 3H₂↑\nЗапишите все три типа реакций.»',
        understandingBase: 10, attentionDelta: 6, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3 },
      },
      {
        label: 'В) Металлы вокруг нас',
        text: '«Алюминий — у вас в кармане (смартфон).\nЖелезо+хром = нержавейка (столовые приборы).\nЗолото — в разъёмах ПК (лучший проводник).\nМедь — в проводах вашей школы.»',
        understandingBase: 8, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 10, bully: 7, average: 5, helper: 4 },
      },
      {
        label: 'Г) Вопрос: ржавчина или не ржавчина?',
        text: '«Почему нержавейка не ржавеет? (Вопрос классу)\nХром образует защитную оксидную плёнку.\nА алюминий тоже окисляется — но плёнка Al₂O₃ защищает!\nОбсудим: как защитить железный мост?»',
        understandingBase: 7, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 8, helper: 5, lazy: 5, anxious: -3 },
      },
    ],
    badOption: {
      label: 'Д) «Металлы все одинаковые»',
      text: '«Всё что блестит — металл. Химия у них похожая. Запомните: металлы проводят ток. Этого достаточно для ОГЭ.»',
      understandingBase: -6, attentionDelta: 3, difficulty: 'easy',
      typeBonus: { bully: 11, lazy: 10, genius: -12, helper: -10, anxious: -7 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'Назовите три активных металла из ряда активности.', hint: 'Li, K, Ca, Na, Mg...' },
      medium: { text: 'Составьте уравнение реакции цинка с серной кислотой.' },
      hard:   { text: 'Вычислите объём H₂ (н.у.), выделяющегося при растворении 13 г Zn в HCl.' },
    },
    homework: {
      easy:   'Выучите первые 7 металлов в ряду активности.',
      medium: 'Напишите уравнения реакций: Ca+H₂O, Fe+HCl, Cu+HNO₃(конц).',
      hard:   'Задача: смешали 5.6 г Fe и 3.2 г Cu с HCl. Сколько H₂ выделится?',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
const HISTORY: TopicEntry[] = [
  {
    subject: 'history', gradeMin: 9, gradeMax: 9,
    topic: 'Первая мировая война. Причины и начало',
    options: [
      {
        label: 'А) Хронология и причины',
        text: '«1914—1918. Четыре главные причины:\n1. Империализм — борьба за колонии\n2. Союзы — Антанта vs Тройственный союз\n3. Национализм\n4. Гонка вооружений\nПовод: убийство Франца Фердинанда 28.06.1914.»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -6, bully: -5 },
      },
      {
        label: 'Б) Карта: блоки стран',
        text: '«На доске рисуем карту Европы 1914 г.\nАнтанта: Россия + Франция + Великобритания (синие).\nТройственный союз: Германия + Австрия + Италия (красные).\nУзкий коридор Балкан — запал войны.»',
        understandingBase: 10, attentionDelta: 7, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 3, genius: -1 },
      },
      {
        label: 'В) Выстрел в Сараево — детали',
        text: '«Принц убит 28 июня 1914 г. в Сараево.\nГаврило Принцип — 19-летний серб-националист.\nАвстрия предъявила ультиматум Сербии.\nСербия отказала один пункт — достаточно для войны.\nТак одна пуля изменила мир.»',
        understandingBase: 9, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 8, bully: 7, average: 5, genius: 4 },
      },
      {
        label: 'Г) Дискуссия: можно ли было избежать?',
        text: '«Если бы Австрия не объявила войну, мировой войны не было бы?\nА если бы убийства не произошло — нашёлся бы другой повод?\nВысказывайтесь. Какой фактор главный?»',
        understandingBase: 7, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 13, bully: 8, helper: 6, lazy: 5, anxious: -3 },
      },
    ],
    tasks: {
      easy:   { text: 'Назовите годы Первой мировой войны и два её участника.', hint: '1914—1918' },
      medium: { text: 'Перечислите четыре причины Первой мировой войны. Объясните каждую одним предложением.' },
      hard:   { text: 'Сравните блок Антанты и Тройственный союз: состав, цели, сильные и слабые стороны.' },
    },
    homework: {
      easy:   'Выучите состав Антанты и Тройственного блока.',
      medium: 'Составьте хронологическую таблицу: ключевые даты июля-августа 1914 г.',
      hard:   'Эссе (10 предложений): «Был ли неизбежен переход к мировой войне?»',
    },
  },
  {
    subject: 'history', gradeMin: 8, gradeMax: 8,
    topic: 'Реформы Петра I. Модернизация России',
    options: [
      {
        label: 'А) Ключевые реформы списком',
        text: '«Пётр I (1682—1725):\n• Армия: рекрутские наборы, регулярная армия\n• Флот: основан в 1696\n• Образование: школы, Академия наук (1724)\n• Календарь: принят европейский\n• Столица: Санкт-Петербург (1703)»',
        understandingBase: 12, attentionDelta: -4, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 5, anxious: 3, lazy: -7, bully: -5 },
      },
      {
        label: 'Б) Пётр в Европе — «Великое посольство»',
        text: '«1697—1698: Пётр едет в Европу инкогнито под именем "Пётр Михайлов".\nРаботает плотником на верфи в Голландии.\nУчится строить корабли, набирает мастеров.\nВернулся — сразу начал брить бороды боярам!»',
        understandingBase: 9, attentionDelta: 13, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 7, average: 5, helper: 4 },
      },
      {
        label: 'В) Таблица реформ на доске',
        text: '«До Петра → После Петра:\nАрмия: стрельцы → регулярная армия\nФлот: нет → 800 кораблей\nОдежда: кафтаны → европейское платье\nКалендарь: от сотворения мира → от Рождества Христова»',
        understandingBase: 10, attentionDelta: 6, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 4 },
      },
      {
        label: 'Г) Дискуссия: герой или тиран?',
        text: '«Пётр прорубил "окно в Европу" — или отрубил голову русской культуре?\nМнение 1: Россия стала великой державой.\nМнение 2: Реформы шли через насилие и крепостничество.\nВаша позиция?»',
        understandingBase: 7, attentionDelta: 15, difficulty: 'medium',
        typeBonus: { genius: 13, bully: 9, helper: 6, lazy: 5, anxious: -3 },
      },
    ],
    tasks: {
      easy:   { text: 'Приведите три реформы Петра I.', hint: 'Армия, флот, образование' },
      medium: { text: 'Заполните таблицу «До и после Петра» по 4 направлениям.' },
      hard:   { text: 'Оцените реформы Петра: какие дали долгосрочный результат, а какие были вынужденными?' },
    },
    homework: {
      easy:   'Запомните 5 дат правления и реформ Петра I.',
      medium: 'Составьте рассказ о «Великом посольстве» (6–8 предложений).',
      hard:   'Сравните реформы Петра I и реформы Александра II по плану: цели, методы, итоги.',
    },
  },

  // ── NEW: ВОВ ─────────────────────────────────────────────────────────────
  {
    subject: 'history', gradeMin: 9, gradeMax: 11,
    topic: 'Великая Отечественная война. Ключевые события',
    options: [
      {
        label: 'А) Хронология и этапы',
        text: '«ВОВ 1941–1945.\nЭтап 1 (1941–42): отступление, Ленинград, Москва.\nЭтап 2 (1942–43): перелом — Сталинград, Курск.\nЭтап 3 (1944–45): наступление, освобождение, Берлин.\n9 мая 1945 — День Победы.»',
        understandingBase: 12, attentionDelta: -2, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -6, bully: -4 },
      },
      {
        label: 'Б) Сталинградская битва — перелом',
        text: '«Сталинград (авг.1942 – февр.1943): 200 дней боёв.\nКотёл: окружена армия Паулюса (330 тыс. чел.).\nИтог: первая крупная победа СССР → коренной перелом.\nПосле 1943 — инициатива перешла к СССР навсегда.»',
        understandingBase: 11, attentionDelta: 6, difficulty: 'medium',
        typeBonus: { anxious: 7, average: 6, helper: 3 },
      },
      {
        label: 'В) Личные истории бойцов',
        text: '«Сержант Яков Павлов защищал один дом в Сталинграде 58 дней.\n"Дом Павлова" стал символом стойкости.\nВ среднем советский солдат ежедневно отвоёвывал 400м².\nЦена Победы — 27 миллионов жизней.»',
        understandingBase: 8, attentionDelta: 14, difficulty: 'easy',
        typeBonus: { lazy: 9, bully: 8, average: 6, helper: 4 },
      },
      {
        label: 'Г) Что было бы, если бы...',
        text: '«Вопрос классу: могла ли Германия победить?\nСпорные факторы: климат, ленд-лиз, партизаны, ресурсы.\nЧто стало главной ошибкой Гитлера?\nОбсудим — это поможет понять значение победы.»',
        understandingBase: 7, attentionDelta: 15, difficulty: 'medium',
        typeBonus: { genius: 13, bully: 9, helper: 6, lazy: 6, anxious: -4 },
      },
    ],
    badOption: {
      label: 'Д) «Это всё давно известно»',
      text: '«ВОВ — тема избитая. Вы всё это уже видели в кино. Просто пересмотрите сериал, это лучше любого урока. Зачем учить даты?»',
      understandingBase: -4, attentionDelta: 8, difficulty: 'easy',
      typeBonus: { bully: 10, lazy: 11, genius: -9, helper: -8, anxious: -5 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'Назовите три ключевых сражения ВОВ с датами.', hint: 'Москва (1941), Сталинград (1942–43), Курск (1943)' },
      medium: { text: 'Объясните суть "коренного перелома" в ВОВ. Когда и почему он произошёл?' },
      hard:   { text: 'Сравните Первую и Вторую мировую войны: причины, масштаб, итоги (план из 5 пунктов).' },
    },
    homework: {
      easy:   'Запомните ключевые даты ВОВ: начало, Сталинград, Курск, конец.',
      medium: 'Напишите об одном герое ВОВ (5–7 предложений): кто он, что совершил.',
      hard:   'Эссе: "Значение Победы в ВОВ для современной России" (200 слов).',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
const LITERATURE: TopicEntry[] = [
  {
    subject: 'literature', gradeMin: 10, gradeMax: 10,
    topic: 'Образ Раскольникова в «Преступлении и наказании»',
    options: [
      {
        label: 'А) Теория «двойника» и «разрыв»',
        text: '«Раскольников делит людей на два типа:\n— «Твари дрожащие» — живут по законам\n— «Властелины» — могут преступить закон\nОн проверяет: к какому типу относится сам?\nНаказание — не тюрьма, а угрызения совести.»',
        understandingBase: 13, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 10, helper: 4, anxious: 2, lazy: -6, bully: -5 },
      },
      {
        label: 'Б) Аналогия: теория и жизнь',
        text: '«Теория на бумаге звучала логично.\nНо убив старуху, Раскольников убивает и беременную Лизавету.\nЭто не было в плане. Вот где теория рухнула.\nПочему «хорошие» идеи могут привести к злу?»',
        understandingBase: 9, attentionDelta: 13, difficulty: 'medium',
        typeBonus: { genius: 8, bully: 6, lazy: 5, helper: 4, anxious: 3 },
      },
      {
        label: 'В) Цитаты Раскольникова',
        text: '«"Я не старушонку убил — я себя убил."\n"Тварь ли я дрожащая или право имею?"\n\nЧто значит «убить себя»?\nГерой разрушил собственную личность, переступив черту.»',
        understandingBase: 10, attentionDelta: 9, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 6, helper: 5, genius: 4 },
      },
      {
        label: 'Г) Вопрос классу: а вы бы смогли?',
        text: '«Если бы убийство плохого человека спасло 100 невинных — это преступление?\nДостоевский отвечает: да. Потому что...\nВысказывайтесь — мы ищем ответ Достоевского вместе.»',
        understandingBase: 7, attentionDelta: 16, difficulty: 'easy',
        typeBonus: { bully: 10, genius: 12, lazy: 7, helper: 6, anxious: -2 },
      },
    ],
    tasks: {
      easy:   { text: 'Как Раскольников делит людей? Кто такие «твари дрожащие»?', hint: 'Из его теории об "обыкновенных" и "необыкновенных"' },
      medium: { text: 'Опишите психологическое состояние Раскольникова после убийства и объясните почему оно изменилось.' },
      hard:   { text: 'Напишите мини-эссе: «Что символизирует признание Раскольникова Соне?» (5–7 предложений)' },
    },
    homework: {
      easy:   'Выпишите 3 цитаты Раскольникова и объясните каждую одним предложением.',
      medium: 'Сравните Раскольникова и Соню: их жизненные позиции (таблица).',
      hard:   'Эссе «Могла ли теория Раскольникова быть правдой?» (10+ предложений).',
    },
  },

  // ── NEW: Мёртвые души ──────────────────────────────────────────────────────
  {
    subject: 'literature', gradeMin: 9, gradeMax: 9,
    topic: '«Мёртвые души» Гоголя. Образы и смысл',
    options: [
      {
        label: 'А) Сюжет и замысел',
        text: '«Чичиков скупает «мёртвые души» — умерших крестьян по ревизским сказкам.\nЦель: заложить их и получить деньги.\nГоголь хотел написать 3 тома — Ад (т.1), Чистилище, Рай.\nТ.2 сжёг сам — идеального героя создать не мог.»',
        understandingBase: 12, attentionDelta: -2, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -6, bully: -4 },
      },
      {
        label: 'Б) Галерея помещиков',
        text: '«Манилов — мечтатель без дела.\nКоробочка — хозяйственная, но тупая.\nНоздрёв — хвастун и лгун.\nСобакевич — упрямый медведь.\nПлюшкин — скупец, которого Гоголь жалеет.\nОт маниловщины до плюшкинства — деградация!»',
        understandingBase: 11, attentionDelta: 7, difficulty: 'medium',
        typeBonus: { anxious: 8, average: 5, helper: 3 },
      },
      {
        label: 'В) Лирические отступления',
        text: '««Русь! Русь! Вижу тебя...» — Гоголь верит в Россию.\nОтступления нужны, чтобы показать: за пошлостью есть душа народа.\nТройка в конце — это движение России вперёд.\nКуда летит? Гоголь сам не знал...»',
        understandingBase: 8, attentionDelta: 11, difficulty: 'easy',
        typeBonus: { lazy: 8, bully: 6, average: 5, helper: 4 },
      },
      {
        label: 'Г) Кто из помещиков — вы?',
        text: '«Тест классу: каждый — Манилов, Коробочка, Ноздрёв, Собакевич или Плюшкин?\nОпишите черты своего типа.\nПочему Гоголь назвал поэму именно так — со скрытым смыслом.\nОбсудим: кто "живая", а кто "мёртвая" душа?»',
        understandingBase: 7, attentionDelta: 16, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 10, helper: 7, lazy: 8, anxious: -3 },
      },
    ],
    badOption: {
      label: 'Д) «Пересказ по интернету»',
      text: '«"Мёртвые души" — длинно и скучно. Достаточно прочитать краткое содержание онлайн. Зачем тратить время на оригинал?»',
      understandingBase: -5, attentionDelta: 5, difficulty: 'easy',
      typeBonus: { bully: 11, lazy: 13, genius: -11, helper: -9, anxious: -6 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'Назовите 5 помещиков из «Мёртвых душ» и одну черту каждого.' },
      medium: { text: 'Объясните, почему поэма называется «Мёртвые души». Двойной смысл.' },
      hard:   { text: 'Мини-эссе: «Что объединяет Чичикова и помещиков?» (5–7 предложений).' },
    },
    homework: {
      easy:   'Выпишите цитату о каждом помещике. Объясните характер одним словом.',
      medium: 'Напишите: за что Гоголь любит и ненавидит Россию в тексте поэмы.',
      hard:   'Сравните Чичикова с каким-либо современным типом людей. Аргументируйте.',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
const RUSSIAN: TopicEntry[] = [
  {
    subject: 'russian', gradeMin: 7, gradeMax: 8,
    topic: 'Деепричастный оборот. Знаки препинания',
    options: [
      {
        label: 'А) Определение и правило',
        text: '«Деепричастный оборот (ДО) — деепричастие с зависимыми словами.\nВыделяется запятыми с обеих сторон ВСЕГДА, кроме...\nИсключение: устойчивые выражения (сложа руки, не зная броду).\nВопросы: Что делая? Что сделав?»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 8, helper: 4, anxious: 3, lazy: -7, bully: -5 },
      },
      {
        label: 'Б) Схема разбора на доске',
        text: '«Предложение: «Прочитав книгу, он лёг спать.»\nШаг 1: Найдём ДО — «прочитав книгу» (что сделав?)\nШаг 2: Отделяем запятой — стоит в начале → запятая после.\nШаг 3: Нельзя убрать книгу из оборота.»',
        understandingBase: 11, attentionDelta: 5, difficulty: 'medium',
        typeBonus: { anxious: 9, average: 6, helper: 3 },
      },
      {
        label: 'В) Смешные ошибки',
        text: '«"Подходя к станции, у меня слетела шляпа." — ОШИБКА!\nКто подходил? Шляпа? Нет — автор.\nДО должен относиться к подлежащему.\nПравильно: "Когда я подходил к станции, у меня слетела шляпа."»',
        understandingBase: 9, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 10, bully: 8, average: 6, helper: 4 },
      },
      {
        label: 'Г) Найдите ошибку в предложениях',
        text: '«Я прочитаю три предложения — найдите ошибку в расстановке знаков:\n1. "Читая книгу он заснул."\n2. "Он учился, не зная усталости."\n3. "Упав на пол тарелка разбилась."\nПоднимите руку, кто нашёл все три!»',
        understandingBase: 8, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 11, bully: 7, helper: 6, lazy: 4, anxious: -2 },
      },
    ],
    tasks: {
      easy:   { text: 'Найдите деепричастный оборот и расставьте запятые:\n«Выйдя из дома он направился в школу»', hint: '«Выйдя из дома» — ДО в начале, запятая после' },
      medium: { text: 'Расставьте знаки и объясните: «Он стоял у окна задумчиво смотря на улицу»' },
      hard:   { text: 'Составьте 3 своих предложения с деепричастными оборотами в разных позициях.' },
    },
    homework: {
      easy:   'Найдите деепричастные обороты в 5 предложениях учебника и объясните знаки.',
      medium: 'Перепишите 5 предложений, исправив ошибки в употреблении ДО.',
      hard:   'Напишите мини-текст (7 предложений) с 3 деепричастными оборотами.',
    },
  },
  {
    subject: 'russian', gradeMin: 8, gradeMax: 9,
    topic: 'Сложноподчинённые предложения',
    options: [
      {
        label: 'А) Определение и виды придаточных',
        text: '«СПП = главное предложение + придаточное (союзом или союзным словом).\nВиды: определительные (который), изъяснительные (что/как), обстоятельственные (когда/если/хотя).\nЗапятая перед союзом всегда!»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 9, helper: 4, anxious: 2, lazy: -7, bully: -6 },
      },
      {
        label: 'Б) Схема и стрелки на доске',
        text: '«"Я знал(ГЛ), что он придёт(ПРИД)." — изъяснительное\nВопрос от ГЛ к прид: знал — что? — придёт\nСоюз "что" → запятая перед ним.\nДоговоримся: всегда рисуем схему [ГЛ], (союз прид)»',
        understandingBase: 10, attentionDelta: 5, difficulty: 'medium',
        typeBonus: { anxious: 9, average: 6, helper: 3 },
      },
      {
        label: 'В) Примеры из книг',
        text: '«Пушкин: "Я помню чудное мгновенье, когда ты появилась предо мной."\nПридаточное времени — когда.\nОпределяет КОГДА он помнит.\nТургенев тоже любил СПП — проверьте сами!»',
        understandingBase: 9, attentionDelta: 10, difficulty: 'easy',
        typeBonus: { lazy: 8, average: 5, helper: 4, bully: 4 },
      },
      {
        label: 'Г) Соревнование: перевести ПП в СПП',
        text: '«Простое предложение: "Утром выпал снег."\nСложноподчинённое: "Когда наступило утро, выпал снег."\nВаш вариант с союзом "после того как"?\nКто предложит самый красивый?»',
        understandingBase: 8, attentionDelta: 13, difficulty: 'medium',
        typeBonus: { genius: 11, bully: 6, helper: 5, lazy: 4, anxious: -3 },
      },
    ],
    tasks: {
      easy:   { text: 'Назовите вид придаточного: «Я не знал, где живёт Коля.»', hint: 'Изъяснительное (вопрос: не знал — чего? — где живёт)' },
      medium: { text: 'Расставьте знаки и определите вид придаточного:\n«Когда закончился урок все вышли в коридор»' },
      hard:   { text: 'Составьте по одному СПП каждого вида: определительное, изъяснительное, обстоятельственное.' },
    },
    homework: {
      easy:   'Найдите 5 СПП в любом тексте, подчеркните союзы.',
      medium: 'Составьте 5 СПП разных видов с расстановкой знаков.',
      hard:   'Преобразуйте 5 простых предложений в сложноподчинённые трёмя разными способами каждое.',
    },
  },

  // ── NEW: Причастный оборот ────────────────────────────────────────────────
  {
    subject: 'russian', gradeMin: 7, gradeMax: 8,
    topic: 'Причастный оборот. Правописание причастий',
    options: [
      {
        label: 'А) Причастие и оборот',
        text: '«Причастие = прилагательное + глагол.\nОтвечает: какой? что делающий? что сделавший?\nПричастный оборот (ПО) = причастие + зависимые слова.\nОбособляется, если стоит ПОСЛЕ определяемого слова.»',
        understandingBase: 12, attentionDelta: -3, difficulty: 'hard',
        typeBonus: { genius: 8, helper: 4, anxious: 3, lazy: -7, bully: -6 },
      },
      {
        label: 'Б) Место имеет значение',
        text: '«ПОСЛЕ — запятая: "Мальчик, бежавший по улице, упал."\nДО — нет запятой: "Бежавший по улице мальчик упал."\nМнемоника: "Если оборот ДОГОНЯЕТ слово — выделяем."\nЗапишем три примера на доске.»',
        understandingBase: 10, attentionDelta: 7, difficulty: 'medium',
        typeBonus: { anxious: 9, average: 6, helper: 3 },
      },
      {
        label: 'В) Найди ошибку в книге',
        text: '«Откроем любую страницу — найдём причастный оборот!\nВойна и мир: "войска, отступавшие по дороге..." — ПО ПОСЛЕ!\nПушкин: "давно читанный роман" — ДО! — нет запятой.\nЭто правило работает в любом тексте.»',
        understandingBase: 8, attentionDelta: 12, difficulty: 'easy',
        typeBonus: { lazy: 8, bully: 5, average: 5, helper: 4 },
      },
      {
        label: 'Г) Состязание у доски',
        text: '«Расставьте запятые: "Ребёнок любивший читать книги вечером засыпал быстро."\nКто первый правильно? Почему именно так?\nА теперь: передвиньте оборот в начало — что изменится?»',
        understandingBase: 7, attentionDelta: 14, difficulty: 'medium',
        typeBonus: { genius: 12, bully: 8, helper: 5, lazy: 4, anxious: -3 },
      },
    ],
    badOption: {
      label: 'Д) «Ставьте запятые на слух»',
      text: '«Причастный оборот сложный. Просто читайте вслух — где голос понижается, там запятая. Правила учить необязательно, главное — чувствовать язык.»',
      understandingBase: -6, attentionDelta: 4, difficulty: 'easy',
      typeBonus: { bully: 11, lazy: 12, genius: -10, helper: -9, anxious: -7 },
      isBad: true,
    },
    tasks: {
      easy:   { text: 'В каком предложении нужна запятая?\nА) Прочитанная вчера книга оказалась интересной.\nБ) Книга прочитанная вчера оказалась интересной.', hint: 'Б — оборот после определяемого слова' },
      medium: { text: 'Расставьте знаки: "Птицы заполнившие небо летели на юг." Объясните.' },
      hard:   { text: 'Составьте 3 предложения с причастным оборотом (до/после/внутри определяемого слова).' },
    },
    homework: {
      easy:   'Найдите 5 причастных оборотов в любом тексте. Выпишите с расстановкой запятых.',
      medium: 'Перепишите, выделяя причастные обороты: "Дорога ведущая к морю была узкой." (3 варианта).',
      hard:   'Напишите текст (7–8 предложений) с 4 причастными оборотами — правильно расставьте знаки.',
    },
  },
]
// ─────────────────────────────────────────────────────────────────────────────
export const ALL_TOPICS: TopicEntry[] = [
  ...MATH, ...PHYSICS, ...CHEMISTRY, ...HISTORY, ...LITERATURE, ...RUSSIAN,
]

/** Найти тему по предмету и классу, кроме уже пройденных */
export function findTopic(
  subject: string,
  grade: number,
  completedTopics: string[],
): TopicEntry | null {
  const candidates = ALL_TOPICS.filter(
    t => t.subject === subject &&
         t.gradeMin <= grade && t.gradeMax >= grade &&
         !completedTopics.includes(t.topic),
  )
  if (candidates.length === 0) {
    // All done — allow repeats
    const allForSubject = ALL_TOPICS.filter(
      t => t.subject === subject && t.gradeMin <= grade && t.gradeMax >= grade,
    )
    if (allForSubject.length === 0) return null
    return allForSubject[Math.floor(Math.random() * allForSubject.length)]
  }
  return candidates[Math.floor(Math.random() * candidates.length)]
}
