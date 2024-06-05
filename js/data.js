// Данные для карточек
const data = [
    {
        tag: 'Культура',
        title: '«Кунгурская ледяная пещера»',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/34/3d/33/caption.jpg?w=300&h=300&s=1',
        description: 'Одна из самых популярных достопримечательностей Урала. Вместе с Ледяной горой образует историко-природный комплекс регионального значения (в СССР — заповедник союзного значения). Пещера находится в Пермском крае, на правом берегу Сылвы на окраине города Кунгур в селе Филипповка, в 100 км от Перми.Одна из крупнейших карстовых пещер в Европейской части России, седьмая в мире гипсовая пещера по протяжённости. Протяжённость пещеры по данным на 2021 год составляет около 8153 м, из них около 2 километров оборудовано для посещений туристами. Температура воздуха в центре пещеры от +5 °C до −2 °C, относительная влажность в центре пещеры — 100 %. Кунгурская пещера содержит 58 гротов, 70 озёр, 146 т. н. «органных труб» (самая высокая — в Эфирном гроте, 22 м) — высоких шахт, доходящих почти до поверхности. Возраст пещеры оценивается в 10-12 тысяч лет.'
    },
    {
        tag: 'Культура',
        title: '«Хохловка»',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4a/b8/2e/caption.jpg?w=500&h=-1&s=1',
        description: 'Архитектурно- этнографический музей в Пермском крае , основанный в 1969 году. Открыт для посетителей 17 сентября 1980 года. Музей расположен на живописном берегу реки Камы в 43 км к востоку от Перми, в пределах села Хохловка. Это первый на Урале музей деревянного зодчества под открытым небом. В его составе 23 уникальных памятника конца XVII — первой половины XX веков. На территории площадью 35 гектаров находятся различные деревянные здания и сооружения, привезённые сюда из различных мест Пермского края и представляющие собой лучшие образцы народной строительной и художественной культуры региона. Во многих памятниках размещены этнографические интерьеры и выставочные комплексы. АЭМ «Хохловка» является филиалом Пермского краеведческого музея. Музей «Хохловка» является одним из крупнейших центров притяжения туристов в Пермском крае. За последние годы в музее проведено укрепление берегов залива и благоустройство набережной, установлены мачты освещения. Для гостей музея открыта чайная. В то же время, в музее не появляется новых памятников, а многие существующие объекты требуют серьёзной реставрации. Также недостаточно развита туристическая инфраструктура в зоне музея.'
    },
    {
        tag:'Памятник',
        title: 'Легенда о пермском медведе',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/be/e9/d8/img-20170614-wa0013-largejpg.jpg?w=500&h=400&s=1',
        description: '«Легенда о Пермском медведе»—скульптура в Перми, изображающая идущего медведя (символ, изображённый на гербах Пермского края и города Перми). У коренных народов Пермского края медведь являлся покровителем. Клыки этого животного охотники носили как амулеты, а лапы, прибитые к избе, оберегали жилище от бед и невзгод.'
    },
    {
        tag:'Памятник',
        title: 'Пермяк соленые уши',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d0/a0/77/caption.jpg?w=500&h=-1&s=1',
        description: 'Достопримечательность Перми, жанровая городская скульптура . Скульптура состоит из двух частей — фигуры фотографа (за авторством Матвеева Алексея) и круглой рамки с большими ушами, в которую фотографирующиеся могут поместить своё лицо.Скульптура расположена на центральной улице города Перми — Комсомольском проспекте около гостиницы «Прикамье». Памятник открыт 1 апреля 2006 года. Авторы скульптурной композиции — Рустам Исмагилов и Алексей Матвеев - скульптура "Фотограф", на фотоаппарате есть авторская подпись. Создание скульптуры было полностью профинансировано ОАО «Бинбанк».«Пермяк солёные уши» — традиционное прозвище жителей пермских земель, одна из основ региональной идентичности жителей края. По легенде, связано с распространённым в крае промыслом солеварения. Считается, что прозвище получили работники, таскавшие на плечах мешки соли, отчего их уши пропитывались солью, увеличивались и краснели. Одна из народных форм присказки, имеющая двухсложный стихотворный размер хорей, звучит «Пермяки́ — солёны у́ши».'
    },
    {
        tag:'Памятник',
        title: '"Счастье не за горами"',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f9/96/2c/caption.jpg?w=500&h=400&s=1',
        description: 'Арт -объект «Счастье не за горами» создан художником Борисом Матросовым для подмосковного фестиваля ландшафтных объектов «АртПоле»[1]. В Перми арт-объект был установлен в 2009 году в рамках public-art-программы «Музей в городе», которую проводил «Музей современного искусства PERMM» во время выставки «МосквАполис» и сопутствующего ей фестиваля уличной культуры и современного искусства «Живая Пермь».Популярный и любимый жителями города объект считается одним из новых символов города. Он установлен на берегу реки Кама на парапете набережной у Речного вокзала. Надпись стала знаменитой после того, как попала в телесериал «Реальные пацаны» и в фильм режиссёра Александра Велединского «Географ глобус пропил» в 2013 году.'
    },
    {
        tag:'Культура',
        title: 'Пермский академический Театр-Театр',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/af/24/45/caption.jpg?w=500&h=400&s=1',
        description: 'Пермский академический Театр - Театр . (до 2007 года — Пермский академический театр драмы) — театр в Перми, основанный в 1927 году как Театр рабочей молодёжи. Расположен в центре города, на Эспланаде. Здание театра (1981, архитекторы В. П. Давыденко и В. И. Лютикова) является памятником архитектуры регионального значения.В настоящее время коллектив театра составляет 300 человек. Театр имеет множество подразделений, современное техническое оснащение (одно из лучших в России), разнообразный репертуар. Театр-Театр ставит драматические спектакли, мюзиклы, балетные постановки и смелые театральные эксперименты, реализуемые на двух площадках – большой и малой сцене («Сцена-Молот»).'
    },
    {
        tag:'Памятник',
        title: 'Пермская ротонда',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/61/9c/2a/caption.jpg?w=500&h=400&s=1',
        description: 'Пермская ротонда, или, как ее любовно называют горожане, бабушка-ротонда, — одна из главных достопримечательностей культурной столицы Урала.. Сооружение имеет почти двухвековую историю — ротонда была построена в 1824 году в честь визита императора Александра I. Помазанники божьи не часто посещали провинциальный город, поэтому к встрече высокого гостя готовились особенно. Кроме обычной уборки улиц и ремонта фасадов, построили специальную беседку по проекту архитектора Свиязева. До сих пор на крыше ротонды находится памятная дощечка с надписью «Пермскому Обществу. Сентября 24 дня 1824 года».Ротонда находится в центре парка им. М. Горького (ранее парк носил название загородного сада). Старинная постройка отлично вписалась в современность, ее окружают небольшие кафе, аттракционы.Беседка белого цвета, поэтому сначала кажется, что она сделана из камня. На самом деле ротонда деревянная. Именно в этом крылась причина сильного обветшания ротонды. К счастью, несколько лет назад талантливые реставраторы вернули памятнику прежний парадный вид. Ротонда представляет собой двенадцать колонн, которые венчает полукруглая крыша. В середине крыши находится кованый металлический шпиль. Колонны и крышу украшает искусно сделанная резьба.'
    },
    {
        tag:'Площади, парки',
        title: 'Эспланада',
        imageUrl: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/2c27fa53e16daaa5b478750d9282f1ac/',
        description: 'Эспланада — открытая площадь, расположенная между двух центральных улиц Перми (Ленина (Покровской) и Петропавловской), ограниченная с одной стороны зданием Пермского академического театра, с другой — зданием Законодательного собрания.'
    },
    {
        tag:'Религия',
        title: 'Пермская соборная мечеть',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/69/cf/84/caption.jpg?w=500&h=400&s=1',
        description: 'Пермская соборная мечеть — первая мусульманская святыня и самое старое сооружение в Перми для молитвенных собраний мусульман. По сути, это единственное место в городе, где могут полноценно собираться последователи исламской религии, так как 4 других храма очень малы. Также мечеть признана памятником градостроительства и архитектуры регионального значения. Эта достопримечательность поражает своей красотой и величием, поэтому увидеть ее своими глазами приходят и многие туристы. Здание было возведено в 1903 г. Финансировали проект несколько купеческих семейств, а разработал его известный архитектор А. И. Ожегов. В том же году мечеть была освящена и открыта для прихожан. Она продолжала исправно выполнять свои функции не только до Октябрьской революции, когда многие центры исламской культуры были закрыты, но и последующие 20 лет. В 1937 г. имама мечети и других членов ее совета репрессировали, а здание закрыли из-за потенциальной угрозы обрушения купола. В дальнейшие годы оно использовалось в качестве склада, верующим она была отдана только в начале 90-х гг. После торжественного открытия обитель вновь открыла свои двери и с тех пор используется по назначению.'
    },
    {
        tag:'Культура',
        title: 'Театр юного зрителя (ТЮЗ)',
        imageUrl: 'https://cdn2.tu-tu.ru/image/pagetree_node_data/1/26f23c8babad0e199e3b21772aad72aa/',
        description: 'КГБУК Пермский театр юного зрителя основан 4 декабря 1964 С 1964 года театр какое-то время разделяет одно здание с Пермским театром кукол, в бывшей пересыльной тюрьме (здание пересыльного замка построено в 1871 году по проекту известного архитектора Р. И. Карвовского), которое перестроили к 1959 году специально для размещения в нём театра С ноября 1987 года театр располагается в двухэтажном особняке в стиле модерн, построенном в конце XIX века меценаткой Е. И. Любимовой (архитектор А. До этого, с 1948 по 1981 годы, особняк Любимовой занимал другой пермский театр — Пермский театр драмы, пока Театр драмы не обзавёлся своим зданием, а в особняке Любимовой не провели капитальный ремонт в 1982—1985 годах Театр с февраля 1982 года по июнь 2021 года возглавлял народный артист России, кавалер ордена Почёта Михаил Юрьевич В разные годы в труппе театры служили известные артисты Сергей Лабырин, Александр Баткалов, Владимир Шульга, Александр Смирнов, Жанна Кадникова, Светлана Пермякова, Валентина Мазунина.'
    },
    {
        tag:'Культура',
        title: 'Дом Грибушина',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a9/66/52/caption.jpg?w=500&h=-1&s=1',
        description: 'Дом купца Сергея Михайловича Грибушина построен в 1895—1897 годах пермским архитектором А. Б. Турчевичем в стиле живописного модерна. Особняк был построен в 1895—1897 гг. для семьи чиновника Кашперова, в 1899 году перекуплен сыном миллионера Поклевского-Козелл. В 1905 году дом купил Сергей Михайлович Грибушин и перестроил его на свой лад. Именно в нём он и проживал до своей смерти в 1915 году, после чего дом перешёл в собственность вдовы Анны Никитичны Грибушиной. В 1919 году Грибушины эмигрировали за границу.'
    },
    {
        tag:'Памятник',
        title: 'Скульптурная композиция "Кама-река"',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/71/00/25/caption.jpg?w=500&h=-1&s=1',
        description: 'Данная композиция попала в поле моего зрения, только из-за размещения в гостинице Урал, в сквере перед гостиницей расположены 5 столбов, на 3 столбах установлена ладья, на ее бортах и на столбах можно обнаружить иероглифы-письмена и древние орнаменты, которые как цитаты времени, напоминают о древних скальных изображениях и надписях.'
    },    
    {
        tag:'Религия',
        title: 'Свято-Троицкий Kафедральный Собор',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/9c/45/41/img-20160820-181510-largejpg.jpg?w=500&h=-1&s=1',
        description: 'Свято-Троицкая церковь на Слудке является архитектурным украшением Перми. Пять его куполов возвышаются над городом; трехъярусная колокольня имеет арочные проемы по сторонам света. Весь храмовый комплекс обнесен кирпичной оградой с коваными решетками; с севера, юга и запада поставлены ворота с вставными иконами. В деталях внешнего убранства присутствуют элементы русско-византийского стиля, который предполагает строгое соблюдение канонов, восходящих к византийской традиции.В 1926 году Свято-Троицкий храм серьезно пострадал от пожара. Сгорел верхний ярус колокольни с куполом и четыре малых купола.Внутреннее пространство обезглавленной Свято-Троицкого собора в течение десяти лет заливало дождем. В январе 1936 года церковь была закрыта для богослужений, а с колокольни сброшены колокола. В отремонтированном здании храма разместилась детская колония. В начале Великой Отечественной войны церковь была приспособлена под склад артиллерийского вооружения Наркомата обороны.И только в 1944 году храм был вновь передан Русской Православной Церкви.'
    },    
    {
        tag:'Памятник',
        title: 'Памятник Николаю Чудотворцу',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/62/f9/38/caption.jpg?w=500&h=-1&s=1',
        description: 'Памятник Николаю Чудотворцу - считается покровителем путешественников, моряков и детей. Памятник органично вписалась в пространство Соборной площади, где расположились Спасо-Преображенский собор, а так же здание Духовной семинарии и архиерейского дома, помимо этого Николай Чудотворец расположен в начале одной из основных артерий города - Комсомольского проспекта.'
    },    {
        tag:'Площади, парки',
        title: 'Набережная вдоль р.Кама',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/42/75/5c/26-27.jpg?w=500&h=-1&s=1',
        description: 'Пожалуй это самое лучшее место для прогулок при посещении замечательного города Пермь. Красивые виды на Каму, множество достопримечательностей. Подбирайте день с благоприятной погодой и обязательно прогуляйтесь по ней от начала и до конца.'
    },    {
        tag:'Религия',
        title: 'Пермский Успенский женский монастырь',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/76/4a/f6/caption.jpg?w=500&h=-1&s=1',
        description: 'Полное название — монастырь Успения Пресвятой Богородицы в городе Перми — православный монастырь в центре города, основанный в 1875 году на средства купцов Григория и Фёдора Каменских. По решению Святейшего Синода открыт в 1882 году, закрыт в 1920 году, возобновлён в 1995 году. Сейчас в монастыре проживают около 60 насельниц, проходят ежедневные службы. Расположен по адресу ул. Плеханова, 39/5'
    },    {
        tag:'Памятник',
        title: 'Скульптура Иван Семёнов',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/01/4b/97/caption.jpg?w=500&h=-1&s=1',
        description: 'Памятник расположен в сквере Желаний на улице Сибирской. На гранитном постаменте памятника написано: «Ивану Семенову». Иван Семенов, самый известный второклассник совтской страны, выполнен из песчаника. Сама фигура литературного персонажа и героя фильма задумчива и напряжена. Между ног школьника стоит портфель. Кажется, сейчас он подумает, и пойдет дальше в школу. Прямо рядом с памятником расположен пермский театр кукол, поэтому, может показаться, что он идет именно туда. Вспоминая знаменитый фильм про Ивана Семенова, скорее, думается, что он пойдет гулять на Компрос. Может быть, и так. Этот памятник второкласснику и второгоднику - один из самых милых памятников Перми. Открыт прямо в день знаний – 1 сентября 2003 года.'
    },    {
        tag:'Культура',
        title: 'Железнодорожный вокзал «Станция Пермь-I»',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/a9/fd/ac/caption.jpg?w=1200&h=-1&s=1',
        description: 'Первый пермский железнодорожный вокзал. 1878 года открытия. Архитектор Быховец. Памятник архитектуры. Сейчас он потерял свое значение почти полностью. Вновь, как и век назад, благодаря нашему бывшему губернатору, стал тупиковым. Теперь от него ходят только электрички по Горнозаводсткой ветке. Сквозное движение прервано.'
    },    {
        tag:'Памятник',
        title: 'Пермские ворота',
        imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/df/56/81/caption.jpg?w=500&h=400&s=1',
        description: '«Пе́рмские воро́та» — художественный проект Николая Полисского, созданный в 2011 году для Пермского музея современного искусства PERMM. Находится у центрального железнодорожного вокзала Пермь II, в сквере 250-летия Перми («Парке камней»)'
    },    {
        tag:'Культура',
        title: 'Большой зал филармонии',
        imageUrl: 'https://filarmonia.online/userfiles/modules/hall/img_4.jpg?update=20240119103851',
        description: 'Пермская краевая филармония — концертная организация в Перми. Имеет задачи: расширять круг любителей музыкального искусства, формировать культурную среду и насыщать её новыми культурными событиями.'
    },
    {
        tag:'Культура',
        title: 'Белое море в Березниках',
        imageUrl: 'https://uraloved.ru/images/thumbnails/content/beloe-more-bereznikov-300.jpg',
        description: 'Наверное, один из самых необычных ландшафтов в Пермском крае расположен в городе Березники. Еще несколько шагов назад ты находился на берегу Камы, тебя окружал знакомый лес. И вдруг перед тобой открывается бирюзовая гладь тропического моря, ленивые волны мерно накатывают на снежно-белый песок'
    },
    {
        tag:'Культура',
        title: 'Вишерский заповедник',
        imageUrl: 'https://uraloved.ru/images/mesta/perm-krai/vishera/chuval-1.jpg',
        description: 'На реке Вишере, текущей на севере Пермского края, достаточно интересная флора и фауна. По горам Вишерского края проходит граница расселения животных и растений европейского, северного и сибирского происхождения. Встречаются многие ценные виды животных и растений. Особенно интересна и чувствительна природа в верховьях Вишеры. Об охране этой территории задумались во второй половине XX века. В декабре 1970 года в связи с большим числом встречающихся здесь охотничье-промысловых видов животных, высокой численностью хариуса и тайменя в верховьях Вишеры был создан охотничий заказник. В 1974 году его площадь расширили с 130,7 до 168,6 тысяч гектар. В 1981 году запретили рубки леса и проезд всех видов водномоторного и маломерного флота.'
    },
    {
        tag:'Культура',
        title: 'Заброшенные ракетные шахты около поселка Юг',
        imageUrl: 'https://uraloved.ru/images/mesta/perm-krai/kungur/raket-baza-yug-300.jpg',
        description: 'В 11 км от поселка Юг в Пермском крае расположено одно из интересных мест для любителей заброшенных объектов – бывшая военная база ракетных войск стратегического назначения (РВСН). Это БСП-11, или база «Орбита». Она входила в состав 52-й ракетной дивизии, дислоцировавшейся в ЗАТО Звездный (Пермь-76).'
    },    {
        tag:'Культура',
        title: 'Каменный город.',
        imageUrl: 'https://uraloved.ru/images/mesta/perm-krai/usva/kamenniy-gorod-300.jpg',
        description: 'Каждый день побродить по причудливым улочкам и площадям Каменного Города приезжает множество людей со всего Урала. Не спеша гулять по улицам Каменного Города, взбираться на скалы и любоваться видами можно несколько часов. Каменный Город – одна из самых известных и популярных природных достопримечательностей Пермского края.'
    },    {
        tag:'Культура',
        title: 'Камень Ермак (река Сылва)',
        imageUrl: 'https://uraloved.ru/images/mesta/perm-krai/kungur/ermak-300.jpg',
        description: 'Это одна из самых известных природных достопримечательностей в окрестностях города Кунгур, излюбленное место тренировки и соревнований альпинистов Пермского края. Среди главных достоинств скалы – хорошая транспортная доступность.'
    },    {
        tag:'Культура',
        title: 'Лунежские горы',
        imageUrl: 'https://uraloved.ru/images/thumbnails/content/lunezhskie-gori-1-300.jpg',
        description: 'Узкой лентой вдоль Камского берега почти на 20 километров (между Добрянкой и Полазной) протянулись заросшие лесом гипсовые утёсы Лунежских гор. Гипс и ангидрит хорошо растворяется водой, образуя прихотливые узоры на камнях, скалы-останцы и небольшие пещеры.'
    },    {
        tag:'Культура',
        title: 'Кладбище паровозов',
        imageUrl: 'https://uraloved.ru/images/thumbnails/content/kladbishe-parovozov-300.jpg',
        description: 'Кладбищем паровозов прозвали базу запаса близ железнодорожной станции Шумково (Пермский край). Здесь можно увидеть несколько десятков старых паровозов и даже полазить по ним. Настоящий музей старой железнодорожной техники под открытым небом!'
    },    {
        tag:'Культура',
        title: 'Озера Голубое и Малое Голубое на Чусовой. Глухие камни',
        imageUrl: 'https://uraloved.ru/images/mesta/perm-krai/chusovoy/oz-goluboe-2.jpg',
        description: 'На правом берегу реки Чусовой, за 10 километров до города Чусового, расположено удивительное и загадочное озеро Голубое. Под его водной гладью скрывается самая глубокая подводная пещера России. Озеро находится в воронке, образованной вертикально восходящим водным источником. Вопреки названию, цвет воды не всегда голубой. Он меняется от грязно-жёлтого и белесого до зеленого и голубого.'
    },    {
        tag:'Культура',
        title: 'Пермская аномальная зона (М-ский треугольник, Молёбская зона)',
        imageUrl: 'https://uraloved.ru/images/mesta/perm-krai/kishert/molebka-az-300.jpg',
        description: 'Это одна из самых необычных достопримечательностей Пермского края и Урала в целом. Она имеет несколько названий: М-ский треугольник, Пермская или Молёбская аномальная зона, просто Зона. В 1989-90 годах прессу охватил шквал публикаций об этом месте. В Молёбку потянулись тысячи людей со всей страны, жаждавшие вступить в контакт с инопланетянами или хотя бы увидеть что-то необычное.'
    },    {
        tag:'Культура',
        title: 'Пещера Бабиногорская',
        imageUrl: 'https://uraloved.ru/images/mesta/drugie/babinogorskaya-300.jpg',
        description: 'Бабиногорская - очень красивая и простая для посещения гипсовая пещера в окрестностях города Кунгур Пермского края. Вход в пещеру располагается на склоне Бабиной горы, в одноимённой деревне. Найти вход довольно просто - при въезде в деревню смотрите заброшенный дом на склоне холма. Вход в пещеру расположен во дворе дома.'
    },
];