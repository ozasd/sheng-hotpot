import React from 'react';
import { Link, Outlet } from "react-router-dom"

export function Nav() {
    return (
        <>

            <div class="navbar navbar-expand-lg row bg-dark justify-content-center fixed-top navbar-dark" style={{ "opacity": 0.9 }}>
                <div class="col-md-6 col-9 text-white text-start px-md-4 py-md-1 px-3">
                    <Link to="/" class="fs-1 text-danger pe-3 " style={{ "textDecoration": "none" }}>學 餐</Link>
                    <br class="d-md-none d-block" />
                    只 | 款 | 待 | 心 | 中 | 最 | 重 | 要 | 的 | 人
                </div>
                <div class="col-3  row d-block d-md-none">
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon justify-content-center"></span>
                    </button>

                </div>

                <div class="col-md-6  text-white text-end px-4 py-1 row  align-items-center collapse navbar-collapse" id="navbarSupportedContent">
                    <nav class="navbar-nav justify-content-end">
                        <Link to="/About" class="d-md-block d-none fs-5 text-white  mx-2 nav-item border-danger border-bottom border-4 p-2  nav-horver text-decoration-none"><span className="nav-horver-top">關於我們</span></Link>
                        <Link to="/About" class="d-md-none d-block fs-5 text-white btn   mx-2  nav-item">關於我們</Link>

                        
                        <Link to="/Menu" class="fs-5 d-md-block d-none text-white  mx-2 nav-item border-danger border-bottom border-4 p-2  nav-horver text-decoration-none"><span className='nav-horver-top'>珍藏美饌</span></Link>
                        <Link to="/Menu" class="d-md-none d-block fs-5 text-white btn   mx-2  nav-item">珍藏美饌</Link>

                        <Link to="/Delivery" class="d-md-block d-none fs-5 text-white    mx-2  nav-item  border-danger border-bottom border-4 p-2  nav-horver text-decoration-none"><span className='nav-horver-top'>外送服務</span></Link>
                        <Link to="/Delivery" class="d-md-none d-block fs-5 text-white btn   mx-2  nav-item">外送服務</Link>

                        <Link to="/Reserve" class="d-md-block d-none fs-5 text-white   mx-2  nav-item  border-danger border-bottom border-4 p-2  nav-horver text-decoration-none"><span className='nav-horver-top'>餐廳訂位</span></Link>
                        <Link to="/Reserve" class="d-md-none d-block fs-5 text-white  btn mx-2  nav-item ">餐廳訂位</Link>

                    </nav>


                </div>

            </div >
            <Outlet />
            <Footer />


        </>
    )
}


export function Home() {
    return (
        <>
            <div class="row  d-md-none d-block">
                <img class="img-fluid p-0" src="https://www.tripodking.com.tw/upload/adrv/1711292149240000001.jpg"></img>

            </div>


            <div class="row bg-white justify-content-center  d-md-block d-none">

                <div id="carouselExampleCaptions " class="carousel slide  p-0 " data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <div class='bgs-gradient vh-100 vw-100 '></div>



                            <div class="carousel-caption d-none d-md-block ">

                                <h1 ><b class="text-warning ">| </b>探 索 <b >學 餐</b> Explore</h1>
                                <br />
                                <p class="fs-3 text-white">每一口 都是觸動人心的美味饗宴</p>
                                <p class="fs-4 text-white">Delicious feast that touches people's hearts</p>
                                <Link to="/Menu" class="btn btn-bg col-md-1 mx-1">M E N U</Link>


                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="5000">
                            <div class='bgs-gradient2 vh-100 vw-100 '></div>



                            <div class="carousel-caption d-none d-md-block ">

                                <h1 ><b class="text-warning ">| </b>探 索 <b >學 餐</b> Explore</h1>
                                <br />
                                <p class="fs-3 text-white">每一口 都是觸動人心的美味饗宴</p>
                                <p class="fs-4 text-white">Delicious feast that touches people's hearts</p>
                                <Link to="/Menu" class="btn btn-bg col-md-2 mx-1">珍藏美饌</Link>


                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="5000">
                            <div class='bgs-gradient3 vh-100 vw-100 '></div>



                            <div class="carousel-caption d-none d-md-block ">

                                <h1 ><b class="text-warning ">| </b>探 索 <b >學 餐</b> Explore</h1>
                                <br />
                                <p class="fs-3 text-white">每一口 都是觸動人心的美味饗宴</p>
                                <p class="fs-4 text-white">Delicious feast that touches people's hearts</p>
                                <Link to="/Menu" class="btn btn-bg col-md-2 mx-1">珍藏美饌</Link>


                            </div>
                        </div>

                    </div>

                </div>


            </div>
            <Main />


        </>
    )
}

export function Main() {
    return (
        <>
            <div class="row justify-content-center text-white p-md-5 pt-sm-5 " style={{ backgroundColor: "black" }}>
                <h1 class="col-md-12 text-center fs-1 py-3 p-md-0"><b class=' text-danger  ' >|  </b>最美味的經典之最，<b class="text-danger">學 餐</b></h1>
                <div class="row mt-md-5  bg-white pt-md-5 p-0 " >
                    <h1 class="text-center text-dark d-none d-md-block ">

                        最 新 消 息
                    </h1>
                    <div class="col-md-6 p-md-5 p-0 text-dark">


                        <img class="img-fluid" src="https://khh.travel/content/images/static/4-1-6-09.jpg"></img>

                    </div>
                    <div class="col-md-6 p-md-5 p-1 py-3 text-dark">
                        <h1 class="text-center text-dark d-block d-md-none mb-4">

                            最 新 消 息
                        </h1>
                        <div>
                            <b class="text-danger"> | </b>2023.04.15 營業時間公告: 4月19日(三) 暫停營業一日

                            <hr />
                        </div>
                        <div>
                            <b class="text-danger"> | </b>2023.04.10 全民瘋普發優惠，來學餐免費索取6張餐卷兌換，會員好康活動
                            <hr />
                        </div>
                        <div>
                            <b class="text-danger"> | </b>2023.03.22 學餐品牌月＊優惠活動，四月優惠活動 第二件五折
                            <hr />
                        </div>
                        <div>
                            <b class="text-danger"> | </b>2023.03.15 營業時間公告: 3月15日(三) 暫停營業一日

                            <hr />
                        </div>
                        <div>
                            <b class="text-danger"> | </b>2023.02.22 學餐品牌月＊優惠活動，四月優惠活動 第二件七五折
                            <hr />
                        </div>
                        <div>
                            <b class="text-danger"> | </b>2023.02.15 營業時間公告: 2月15日(三) 暫停營業一日

                            <hr />
                        </div>


                    </div>
                </div>
                <div class="row mt-md-5  bg-dark p-0">
                    <img class="img-fluid col-md-6 p-0 d-md-none d-block wh-100" src="https://www.oldsichuan.com.tw/img/officialHome/1622085636_foodImg1.jpg"></img>

                    <div class="col-md-6 text-white p-md-5 py-3">
                        <h1 class="text-center"><b class="text-danger"> | </b>經  營  理 念</h1>
                        <hr/>

                        <p class="px-5 text-center fs-2">味在學餐 | 吃在台灣</p>
                        <div class="d-md-none d-block">
                            <p class="px-md-5  text-center fs-5">
                                我們是一家致力於提供美食與服務的麻辣火鍋店，提供新鮮、高品質、無添加的食材，以客戶至上的理念為基礎，追求創新與卓越，同時關注社會責任，讓顧客能夠享受到最地道、最美味的麻辣火鍋。

                            </p>

                        </div>

                        <div class="d-md-block d-none">
                            <p class="px-5 text-center fs-5">我們是一家致力於提供美食與服務的麻辣火鍋店，提供新鮮、高品質、無添加的食材，以客戶至上的理念為基礎，追求創新與卓越，同時關注社會責任，讓顧客能夠享受到最地道、最美味的麻辣火鍋。</p>
                            {/* <p class="px-5 text-center fs-5">讓每一位客人都感受到家的溫馨和尊重。</p>
                            <p class="px-5 text-center fs-5">我們堅持使用新鮮、有機的食材，搭配經過精心研發的菜單，</p>
                            <p class="px-5 text-center fs-5">旨在為客人帶來最美味、最健康的飲食體驗。</p>
                            <p class="px-5 text-center fs-5">此外，我們的服務團隊將以親切、專業的態度，為客人提供個性化的餐飲體驗，</p>
                            <p class="px-5 text-center fs-5">以滿足不同客人的需求和期望。最重要的是，我們希望每一位客人</p>
                            <p class="px-5 text-center fs-5">在用餐後都能夠感受到心靈的滿足，並成為我們忠實的支持者和推薦者。」</p> */}

                        </div>

                        <br />
                        <div class="row justify-content-center ">
                            <Link to="/About" class="btn btn-bg col-md-2 mx-1">關於我們</Link>

                        </div>





                    </div>
                    <img class="img-fluid col-md-6 p-0 d-md-block d-none" src="https://www.oldsichuan.com.tw/img/officialHome/1622085636_foodImg1.jpg"></img>



                </div>




            </div >


        </>

    )

}

export function Footer() {
    return (
        <>

            <div class="row  bg-dark pt-2 p-md-1 text-white mt-2 mt-md-0">
                <div class="col-md-6">
                    <h1 class="fs-5">
                        <b class='fs-1 text-danger pe-3'>學 餐 <br class="d-block d-md-none" /> </b> 只 | 款 | 待 | 心 | 中 | 最 | 重 | 要 | 的 | 人


                    </h1>
                    <p class="">
                        Copyright © 學餐 all rights reserved. Designed by Flashaim

                    </p>
                </div>
                <div class="col-md-6  align-items-center justify-content-end">
                    <div class="row">
                        <div class=" col-md-3 d-block d-md-none">
                            <p class="mb-1">※ 營業時間 : 午 11:30 ~ 14:30 | 晚 17:30 ~ 22:00</p>
                            <p class="mb-1">※ 客服電話 : (02) 2519966</p>



                        </div>
                        <div class=" col-md-3 d-md-block d-none">
                            <p class="mb-1">※ 營業時間</p>
                            <p class="m-0">午 11:30 ~ 14:30</p>
                            <p class="m-0">晚 17:30 ~ 22:00</p>


                        </div>
                        <div class=" col-md-9 row justify-content-end p-md-3 d-none d-md-block">
                            <Link to="/About" class="btn btn-bg col-md-2 mx-1">關於我們</Link>
                            <Link to="/Menu" class="btn btn-bg col-md-2 mx-1">珍藏美饌</Link>
                            <Link to="/Reserve" class="btn btn-bg col-md-2 mx-1">餐聽訂位</Link>
                            <Link to="/Delivery" class="btn btn-bg col-md-2 mx-1">外送服務</Link>

                        </div>


                    </div>





                </div>




            </div>

        </>

    )


}