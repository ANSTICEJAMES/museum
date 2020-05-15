import React from 'react';
import './Text.css'
import ph1 from '../../images/home/photo1.jpg';
import ph2 from '../../images/home/photo2.jpg';
import ph3 from '../../images/home/photo3.jpg';
import ph4 from '../../images/home/photo4.jpg';

function Text() {
    return (
        <div className = "inner-content">
                <div className = "blok-1">
                    <h1>О МУЗЕЕ</h1>

                    <div className = "content-1">

                        <p> Политехнический музей был торжественно открыт в корпусе «Б»
                        cтараниями Олега Николаевича Набокова как Политехнический музей
                        Таганрогского радиотехнического университета 12 сентября 2002
                        года, в День празднования 50-летия Таганрогского радиотехнического
                        института.
                        Музей пропагандирует в своей экспозиции историю
                        отечественной и зарубежной науки и техники и её создателей.
                        Проводит большую работу по военно-патриотическому и
                        нравственному воспитанию молодёжи.
                        Экспозиционный зал музея площадью 406 кв. м расположился в
                        помещении бывших производственных мастерских Таганрогского,
                        радиотехнического института.
                        Экспозиция музея отражает направления института в области
                        науки и техники, по которым идет подготовка будущих специалистов:
                        радиотехника, автоматика и вычислительная техника, авиация и
                        космонавтика, электроника, связь, телевидение, электро-
                        гидроаккустическая и медицинская техника. В экспозиции нашли
                        отражение также история ВУЗа и его роль в развитии науки и техники
                        в нашей стране и за рубежом.</p>

                    </div>
                        <div className = "image-1">

                        <img src={ph1} align="right" width="427" height="284" alt="1 фото главной"></img>

                        </div>
                    </div>
                <div className = "blok2">
                        <div className = "image-2">
                            <img src={ph2} align="left" width="427" height="284" alt="2 фото главной"></img>
                        </div>
                        <div className = "content-2"><p>Ряд витрин и стендов в музее посвящены жизни и
                        деятельности выдающихся руководителей и учёных
                        ТРТИ/ТРТУ/ТТИ: первому директору ТРТИ Константину
                        Яковлевичу Шапошникову, Виктору Ильичу Богданову,
                        Анатолию Васильевичу Каляеву, Алексею Николаевичу
                        Харину, Александру Ивановичу Соловьеву.</p>
                        </div>
                    </div>
                <div className = "blok3">

                        <div className = "content-3"><p>В разделе «История радиотехники» посетители могут
                        познакомиться с такими раритетами как: аналогом первого в
                        мире приёмника российского учёного, изобретателя
                        Александра Степановича Попова первым сетевым приёмником
                        30-х годов «СИ-235, подаренным музею Леонидом
                        Ивановичем Филипповым, первым заместителем директора по
                        науке нашего радиотехнического института в далекие 50-е
                        годы, а впоследствии известным учёным в области
                        радиотехники, который впоследствии жил до конца своей
                        жизни в Москве. Его называли великим интеллигентом и
                        учёным. Он был прекрасным художником, поэтом, музыкантом,
                        философом. Десять его картин представлены в нашем музее, в
                        том числе и его автопортрет:
                        </p>
                        </div>
                        <div className = "image-3">
                            <img src={ph3} align="left" width="427" height="284" alt="3 фото главной"></img>
                        </div>
                    </div>
                <div className = "blok-1">
                    <div className = "image-2">
                        <img src={ph4} align="left" width="427" height="284" alt="4 фото главной"></img>
                    </div>
                    <div className = "content-2">
                        <p>На стендах токе представлены не только бытовые
                        радиоприёмники и репродукторы советского производства, но
                        и военные радиостанции и приёмники. Есть и один
                        иностранный. Это приёмник немецкой фирмы «Олимпия»
                        один из самых дорогих приёмников гитлеровской Германии. На
                        подобном ему работали советские разведчик в Германии в
                        годы войны. Этот приемник подарен музею преподавателем
                        приборостроительного колледжа Эдуардом Михайловичем
                        Мирошниченко.</p>
                    </div>
                </div>
        </div>
      );
}

export default Text;