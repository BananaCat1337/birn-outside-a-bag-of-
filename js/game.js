let scenes = [
  {
    text: "Brepsi entertainment представляет",
    bg: "",
    voice: "../sound/sergey/intro.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "В этой истории можно встретить все то, что пришлось делать не по планам, которые мы изначально ставили!",
    bg: "",
    voice: "../sound/sergey/1.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "История изменялась много раз настолько, что Вадим сошёл с ума.",
    bg: "",
    voice: "../sound/sergey/2.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Однажды вечером он подумал, что сможет легко выйти из игры, и решил громко заявить об этом.",
    bg: "",
    voice: "../sound/sergey/3.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Но все пошло далеко не по его планам.",
    bg: "",
    voice: "../sound/sergey/4.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Мда, зачем я только начал работать с ними, вообще не понимаю.",
    bg: "",
    voice: "../sound/sivaev/1.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Пойду лучше поиграю в марвел, ранг сам себя не будет аппать)",
    bg: "",
    voice: "../sound/sivaev/2.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Зайдя в свою комнату, он увидел три силуета сидевшие полу кругом.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sergey/5.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Че, вы че шизойды тут делаете?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/3.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Ты думал, что можешь просто так уйти?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/1.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Ты теперь часть корабля.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/2.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "У тебя случайно нет кумыса?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/nikita/1.mp3",
    character: {
      name: "Никита",
      sprite: "../image/png/nikita.png",
      position: "right",
    },
  },
  {
    text: "Жажда мучает.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/nikita/2.mp3",
    character: {
      name: "Никита",
      sprite: "../image/png/nikita.png",
      position: "right",
    },
  },
  {
    text: "Питон-бот, хихих, питон-бот, я рисовач с двача!",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/Oleg_Urod/1mp3.mp3",
    character: {
      name: "Олег",
      sprite: "../image/png/oleg.png",
      position: "right",
    },
  },
  {
    text: "Ты посмотри на этот корабль. Что тут вообще можно поймать?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/4mp3.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Да и Андрей даже не пришёл. О чём говорить, если не все хотят работать?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/5.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Он сломал мизинец о лавочку, и его котёнок тоже.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/3mp3.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Bruh.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/6mp3.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Ну ладно, есть идея, которая точно выстрелит. Для начала сходи за Бёрном, там всё поймёшь сам.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/4.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Зачем мне идти? Я просто поеду и куплю за пять минут. Да и не думаю, что это поможет.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/7.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Сорри, сегодняшним заданием от Тайлера было залить тебе в расширительный бачок масло.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/5.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Да и так бы ничего не получилось.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/6.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Ты шизоид, ты сам мне её чинить будешь, в курсе?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/8.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Никита починит, он же бурят!",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/7.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Я только на конях езжу, ты что, дурак?",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/nikita/3.mp3",
    character: {
      name: "Никита",
      sprite: "../image/png/nikita.png",
      position: "right",
    },
  },
  {
    text: "Доржо поможет, он как раз опять потерялся.",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/nikita/4.mp3",
    character: {
      name: "Никита",
      sprite: "../image/png/nikita.png",
      position: "right",
    },
  },
  {
    text: "Вы уроды, реально, что за кринж тут несёте...",
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/sivaev/9.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: `Питон-бот, питон, print("hell eeeeeeeeeeeeeeeeeeeeeee"), питон!`,
    bg: "url(../image/background/omg.jpg)",
    voice: "../sound/bogdan/8.mp3",
    character: {
      name: "Олег",
      sprite: "../image/png/oleg.png",
      position: "right",
    },
  },
  {
    text: "Вдруг сзади Вадима раздался резкий звук. Он машинально обернулся, но ничего не увидел.",
    bg: "url(../image/background/door.jpg)",
    voice: "../sound/sergey/6.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Вернув взгляд в комнату, он обнаружил, что никого нет",
    bg: "url(../image/background/notomg.jpg)",
    voice: "../sound/sergey/7.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Выйдя из дома, он оказался в незнакомом месте — в лесу, посреди поля.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sergey/21.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Может, я сплю? Что-то мистическое происходит этим вечером...",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/10.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Вдалеке он видет человека возле дерева с телефоном",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sergey/8.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Может он мне подскажет что тут происходит и куда мне идти.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/11.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Подойдя к нему он увидел знакомую фигуру",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sergey/9.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "черт что за невезение, куда я пришёл вообще, 2гис уроды!",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/bogdan/9.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "ты чего шиз ушёл, ты как вообще ко мне в квартиру залез?",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/12.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "чего? Я вообще никуда не заходил, я тут ну просто, понимаешь, ну гуляю крч.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/bogdan/10.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Странно тебя тут видеть, в этой глуши...",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/bogdan/12.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "Всмысле вот мой дом, сзади меня, странно что тут лес появился вообще.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/13.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "лаааадно, слушай мне пора, удачи тебе тут не потеряться.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/bogdan/13.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdan.png",
      position: "right",
    },
  },
  {
    text: "странно, что это вообще щас было, ладно, пойду лучше все таки в марвел играть.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/14.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Когда он развернулся чтобы пойти домой, на его месте ничего не было, только поле.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sergey/10.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Ватахел, что тут вообще происходит?",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/15.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Может мне все таки нужно сходить и купить берн?",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/16.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "одни вопросы сегодня, что тут вообще происходит..",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/17.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Забив в 2гис магазин, он понял что идти до магазина не так и далеко, правда там была только заправка.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sergey/11.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "черт, придется переплатить, ну ладно, если это поможет избавиться от этого кошмара, то не так и страшно",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/18.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "8 минут великой ходьбы, до места идти ещё несколько метров, но на его пути встретился величайший.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sergey/12.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "О Климентий Андреевич, что Вы тут делаете?",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/19.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Оооо Здравствуйте Здравствуйте, а я тут можно сказать отдыхаю и размышляю",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/klimentyi/1.mp3",
    character: {
      name: "Климентий",
      sprite: "../image/png/Klimentiy.png",
      position: "right",
    },
  },
  {
    text: "Странно, я думал, вы уже готовитесь ко сну. Ведь завтра пары, не боитесь опоздать?",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/201.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "А вам ещё не сказали? Меня заменили на DeepSeek. Сказали, что она работает продуктивнее, бесплатно, да ещё и развивается по часам.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/klimentyi/2.mp3",
    character: {
      name: "Климентий",
      sprite: "../image/png/Klimentiy.png",
      position: "right",
    },
  },
  {
    text: "Что тут вообще происходит? Какая нейронка? Что за бред, это прикол?",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/202.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Предлагаю посмотреть на это с другой стороны.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/klimentyi/3.mp3",
    character: {
      name: "Климентий",
      sprite: "../image/png/Klimentiy.png",
      position: "right",
    },
  },
  {
    text: "Вы войдёте в историю, так как на вас снова проводят эксперименты и будут набивать руку для обучения.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/klimentyi/4.mp3",
    character: {
      name: "Климентий",
      sprite: "../image/png/Klimentiy.png",
      position: "right",
    },
  },
  {
    text: "Да они издеваются? Я не буду больше платить за это! Просто бред.",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/203.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Ладно, мне пора. Рад тебя встретить, удивлён, что ты так далеко...",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/klimentyi/5.mp3",
    character: {
      name: "Климентий",
      sprite: "../image/png/Klimentiy.png",
      position: "right",
    },
  },
  {
    text: "Да я сам не понимаю, как тут оказался...",
    bg: "url(../image/background/IMG_20250206_182343_091.jpg)",
    voice: "../sound/sivaev/204.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "После того как Вадим моргнул, перед ним никого не было — только заправка.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/sergey/13.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Что ж, одно радует: я как можно быстрее с этим закончу.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/sivaev/205.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Проходя мимо одной из колонок, Вадим заметил нечто.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/sergey/19.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Перед ним возникло тело с двумя головами, которое о чём-то спорило.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/sergey/20.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Давай насадим её на шампур, мы хотим есть!",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/brothers/1.mp3",
    character: {
      name: "Доржо",
      sprite: "../image/png/brothers.png",
      position: "right",
    },
  },
  {
    text: "Так нельзя! В последний раз, когда мы ели кошку, плакали всю ночь.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/brothers/2.mp3",
    character: {
      name: "Никита",
      sprite: "../image/png/brothers.png",
      position: "right",
    },
  },
  {
    text: "Ты всегда был тряпкой. Давно надо было сожрать нашу вторую голову.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/brothers/3.mp3",
    character: {
      name: "Доржо",
      sprite: "../image/png/brothers.png",
      position: "right",
    },
  },
  {
    text: "Вадим всегда любил кошек и не мог оставить её в беде.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/sergey/14.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Эй, ребята, она вшивая. Я бы на вашем месте не трогал её.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/sivaev/20.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "А я говорил, не надо это кушать. Пойдём домой.",
    bg: "url(../image/background/gasstation.jpg)",
    voice: "../sound/brothers/4.mp3",
    character: {
      name: "Никита",
      sprite: "../image/png/brothers.png",
      position: "right",
    },
  },
  {
    text: "Зайдя в заправку, он подошёл к полке с напитками.",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/sergey/15.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Подойдя к кассе, он увидел знакомое лицо.",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/sergey/16mp3.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Приветики-пистолетики, епта! Чё у вас, котики-наркотики?",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/cheremnih/1.mp3",
    character: {
      name: "Черемных",
      sprite: "../image/png/cheremnih.png",
      position: "right",
    },
  },
  {
    text: "Привет, не ожидал тебя тут встретить. Что ты тут забыл?",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/sivaev/21.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Да опять предложили темку, епта. Вот, в долгах.",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/cheremnih/2.mp3",
    character: {
      name: "Черемных",
      sprite: "../image/png/cheremnih.png",
      position: "right",
    },
  },
  {
    text: "Чё, опять? Жизнь тебя ничему не учит.",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/sivaev/22.mp3",
    character: {
      name: "Вадим",
      sprite: "../image/png/Sivaev.png",
      position: "left",
    },
  },
  {
    text: "Да блин, жизнь такая. Сейчас даже уборщиков убирают. Кстати, за 'банку' переведи мне на карту.",
    bg: "url(../image/background/shopjpg.jpg)",
    voice: "../sound/cheremnih/3.mp3",
    character: {
      name: "Черемных",
      sprite: "../image/png/cheremnih.png",
      position: "right",
    },
  },
  {
    text: "Открыв банку, Вадим увидел яркий луч света, который ослепил его.",
    bg: "url(../image/background/white.jpg)",
    voice: "../sound/sergey/17.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Придя в себя, он оказался в белой комнате в смирительной рубашке.",
    bg: "url(../image/background/hostes.jpg)",
    voice: "../sound/sergey/18.mp3",
    character: { name: "", sprite: "", position: "" },
  },
  {
    text: "Как его состояние?",
    bg: "url(../image/background/hostes.jpg)",
    voice: "../sound/bogdan/14mp3.mp3",
    character: {
      name: "Олег",
      sprite: "../image/png/tgbizness.png",
      position: "right",
    },
  },
  {
    text: "Судя по анализам, скоро он придёт в норму.",
    bg: "url(../image/background/hostes.jpg)",
    voice: "../sound/bogdan/18.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdanDoctor.png",
      position: "right",
    },
  },
  {
    text: "Это потрясающе! Слава Питону!",
    bg: "url(../image/background/hostes.jpg)",
    voice: "../sound/bogdan/19.mp3",
    character: {
      name: "Олег",
      sprite: "../image/png/tgbizness.png",
      position: "right",
    },
  },
  {
    text: "А он ничего не говорил, пока был здесь?",
    bg: "url(../image/background/hostes.jpg)",
    voice: "../sound/bogdan/20.mp3",
    character: {
      name: "Олег",
      sprite: "../image/png/tgbizness.png",
      position: "right",
    },
  },
  {
    text: "Бредил, будто находился в визуальной новелле.",
    bg: "url(../image/background/hostes.jpg)",
    voice: "../sound/bogdan/21.mp3",
    character: {
      name: "Богдан",
      sprite: "../image/png/bogdanDoctor.png",
      position: "right",
    },
  },
];

let currentScene = 0;
let musicPlaying = true;
let voiceEnabled = true;

function startGame() {
  document.querySelector(".menu-container").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  nextScene();
}

function nextScene() {
  if (currentScene >= scenes.length) {
    alert("Игра завершена!");
    return window.close();
  }

  let scene = scenes[currentScene];

  document.getElementById("background").style.backgroundImage = scene.bg;

  let textBox = document.getElementById("dialogue-text");
  let characterName = document.getElementById("character-name");
  textBox.style.opacity = 0;
  characterName.style.opacity = 0;

  setTimeout(() => {
    textBox.innerText = scene.text;
    characterName.innerText = scene.character.name;
    textBox.style.opacity = 1;
    characterName.style.opacity = 1;
  }, 200);

  if (scene.character.position === "left") {
    document.getElementById(
      "character-left"
    ).style.backgroundImage = `url(${scene.character.sprite})`;
    document.getElementById("character-right").style.backgroundImage = "";
  } else {
    document.getElementById(
      "character-right"
    ).style.backgroundImage = `url(${scene.character.sprite})`;
    document.getElementById("character-left").style.backgroundImage = "";
  }

  if (voiceEnabled) playVoice(scene.voice);
  currentScene++;
}

function playVoice(voiceFile) {
  let voice = document.getElementById("voice");
  voice.src = voiceFile;
  voice.play();
}

function openSettings() {
  document.getElementById("settings-modal").style.display = "block";
}

function closeSettings() {
  document.getElementById("settings-modal").style.display = "none";
}

function exitGame() {
  window.close();
}

document.getElementById("text-box").addEventListener("click", nextScene);

const volumeControls = document.createElement("div");
volumeControls.innerHTML = `
  <div class="volume-container">
    <div class="volume-icon" id="music-icon">🔊</div>
    <input type="range" id="music-volume" min="0" max="1" step="0.01" value="1">
    <div class="volume-icon" id="voice-icon">🎤</div>
    <input type="range" id="voice-volume" min="0" max="1" step="0.01" value="1">
  </div>
`;
document.body.appendChild(volumeControls);

document.getElementById("music-volume").addEventListener("input", (event) => {
  document.getElementById("music").volume = event.target.value;
});

document.getElementById("voice-volume").addEventListener("input", (event) => {
  document.getElementById("voice").volume = event.target.value;
});

const volumeContainer = document.querySelector(".volume-container");
volumeContainer.style.position = "absolute";
volumeContainer.style.top = "10px";
volumeContainer.style.right = "10px";
volumeContainer.style.display = "flex";
volumeContainer.style.flexDirection = "column";
volumeContainer.style.alignItems = "center";
volumeContainer.style.opacity = "0";
volumeContainer.style.transition = "opacity 0.5s";

document
  .querySelector(".volume-container")
  .addEventListener("mouseenter", () => {
    volumeContainer.style.opacity = "1";
  });

document
  .querySelector(".volume-container")
  .addEventListener("mouseleave", () => {
    volumeContainer.style.opacity = "0";
  });
  
