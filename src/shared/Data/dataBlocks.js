import listing from "../../img/listing.png"
import webSite from "../../img/webSite.png"
import settings from "../../img/settings.png"
import coding from "../../img/coding.png"
import coding1 from "../../img/coding1.png"
import domain from "../../img/domain.png"
import planning from "../../img/planning.png"
import graphics from "../../img/graphics.png"
import development1 from "../../img/development1.png"
import development from "../../img/development.png"

const dataBlocksArr = [
    {
        id: 0,
        icon: coding,
        title: 'SEO',
        desc: 'Наиболее эффективный способ привлечения целевой аудитории. ' +
            'Поисковая оптимизация позволяет многократно увеличить количество ' +
            'продаж при разумном рекламном бюджете',
        price: '60 000 руб./мес.'
    },
    {
        id: 1,
        icon: listing,
        title: 'Контекстная реклама',
        desc: 'Если требуется максимально быстро привлечь целевую аудиторию ' +
            'или выйти на новый рынок — этот канал для вас.' +
            'Яндекс.Директ и Google Ads обладают тонкими настройками, ' +
            'работа с которыми позволяет повысить эффективность в несколько раз',
        price: '15 500 руб./мес.'
    },
    {
        id: 2,
        icon: settings,
        title: 'Поддержка сайтов',
        desc: 'Мы берем на себя все вопросы по функционированию сайта, ' +
            'продлению доменного имени, работе хостинга, обновлению информации. ' +
            'Поддержка оказывается в рамках разработанных тарифов с подключением Личного кабинета',
        price: '15 000 руб./мес.'
    },
    {
        id: 3,
        icon: webSite,
        title: 'Создание сайтов',
        desc: 'Наша команда разрабатывает сайты любого типа сложности от landing page' +
            ' до мультифункциональных информационных сервисов используя комплексный ' +
            'подход: Аналитика, UX/UI, Front-end, Back-end ',
        price: '80 000 руб.'
    },
    {
        id: 4,
        icon: planning,
        title: 'SMM',
        desc: 'Успешно оказываем услуги по разработке и ведению рекламных кампаний в социальных ' +
            'сетях ВКонтакте, Facebook, Одноклассники, Instagram, YouTube и других',
        price: '8 900 руб./мес.'
    },
    {
        id: 5,
        icon: graphics,
        title: 'Брендинг',
        desc: 'Предоставляем полный цикл услуг в сфере корпоративного и продуктового брендинга:' +
            ' от анализа и концепции до реализации, поддержки и последующего развития',
        price: '20 000 руб.'
    },
    {
        id: 6,
        icon: domain,
        title: 'Аудит сайтов',
        desc: 'Высокий уровень компетенции специалистов компании позволяет оказывать услуги: SEO,' +
            ' коммерческого и технического аудитов проекта, анализа эффективности ' +
            'рекламных кампании по SEO и контексту, выводу из-под санкций поисковых систем',
        price: '19 900 руб.'
    },
    {
        id: 7,
        icon: coding1,
        title: 'Внедрение Битрикс24',
        desc: 'CRM-система Битрикс24 – универсальный продукт, который поможет упростить работу,' +
            ' как малого бизнеса, так и автоматизировать бизнес-процессы крупных компаний.' +
            ' Научим грамотно вести клиентскую базу, работать с допродажами,' +
            ' автоматизировать процессы и маркетинг',
        price: '35 000 руб.'
    },
    {
        id: 8,
        icon: development1,
        title: 'Мобильные приложения',
        desc: 'Разработка и поддержка мобильных приложений. Комплексный подход от анализа и ' +
            'проектирования до тестирования и дальнейшего обслуживания мобильных приложений',
        price: '600 000 руб.'
    },
    {
        id: 9,
        icon: development,
        title: 'Внедрение и сопровождение 1С',
        desc: 'Воспользуйтесь компетенциями нашей команды, для автоматизации ' +
            'бизнес-процессов и сопровождению программных продуктов 1С',
        price: '1 500 руб./час.'
    },
]

export default dataBlocksArr;