import React from 'react';
import { Link } from "react-router-dom"

export function About() {
    return (
        <>
            <div class="row bg-dark justify-content-center ">
                <img class="img-fluid p-0" src="https://www.oldsichuan.com.tw/img/officialHome/1637304208_bottomBanner.jpg"></img>

                <div class="title text-white d-md-block d-none">
                    <h1 ><b class="text-warning ">| </b>探 索 <b >學 餐</b> Explore</h1>
                    <br />
                    <p class="fs-3 text-white">每一口 都是觸動人心的美味饗宴</p>
                    <p class="fs-4 text-white">Delicious feast that touches people's hearts</p>
                    <Link to="/" class="btn btn-bg col-md-1 mx-1">了解更多</Link>
                </div>


            </div>
            <div class="row  justify-content-center text-white p-md-4 p-0" style={{ backgroundColor: "black" }}>
                <div class="row  bg-dark p-md-0 py-3 ">
                    <img class="img-fluid col-md-6 p-0 d-md-block d-none" src="https://www.oldsichuan.com.tw/userfiles/images/make-pic-17(1).jpg"></img>

                    <div class="col-md-6 text-white p-md-5">
                        <h1 class="text-center"><b class="text-danger"> | </b>關  於  我 們 </h1>
                        <br />



                        <div class="d-md-none d-block">
                            <p class="px-md-5  text-center fs-5">
                                我們致力於提供高品質、美味又健康的美食，使用新鮮、有機的食材
                                搭配經過精心研發的菜單，讓每一位客人都能感受到家的溫馨和尊重。
                                我們的服務團隊以親切、專業的態度為客人提供個性化的餐飲體驗，
                                期待每一位客人在用餐後都能感受到心靈的滿足，
                                成為我們的忠實支持者和推薦者！。
                            </p>

                        </div>

                        <div class="d-md-block d-none">
                            <p class="px-5 text-center fs-2">歡迎來到我們的餐廳</p>
                            <p class="px-5 text-center fs-5">我們致力於提供高品質、美味又健康的美食，使用新鮮、有機的食材</p>
                            <p class="px-5 text-center fs-5">搭配經過精心研發的菜單，讓每一位客人都能感受到家的溫馨和尊重。</p>
                            <p class="px-5 text-center fs-5">我們的服務團隊以親切、專業的態度為客人提供個性化的餐飲體驗，</p>
                            <p class="px-5 text-center fs-5">期待每一位客人在用餐後都能感受到心靈的滿足，</p>
                            <p class="px-5 text-center fs-5">成為我們的忠實支持者和推薦者！。</p>

                        </div>
                        <div class="row justify-content-center ">
                            {/* <Link to="/" class="btn btn-bg col-md-2 mx-1">了解更多</Link> */}
                            <Link to="/Menu" class="btn btn-bg col-md-2 mx-1">了解更多</Link>
                        </div>
                    </div>
                </div>
                <div class="row  bg-dark p-md-0 py-3">
                    <img class="img-fluid col-md-6 p-0 d-md-none d-block" src="https://www.oldsichuan.com.tw/img/officialHome/1622085636_foodImg1.jpg"></img>

                    <div class="col-md-6 text-white p-md-5 p-2 ">

                        <h1 class="text-center"><b class="text-danger"> | </b>經  營  理 念</h1>
                        <br />
                        <div class="d-md-none d-block">
                            <p class="px-md-5  text-center fs-5">
                                「我們的餐廳致力於提供高品質的美食和優質的服務，

                                讓每一位客人都感受到家的溫馨和尊重。

                                我們堅持使用新鮮、有機的食材，搭配經過精心研發的菜單，

                                旨在為客人帶來最美味、最健康的飲食體驗。

                                此外，我們的服務團隊將以親切、專業的態度，為客人提供個性化的餐飲體驗，

                                以滿足不同客人的需求和期望。最重要的是，我們希望每一位客人

                                在用餐後都能夠感受到心靈的滿足，並成為我們忠實的支持者和推薦者。」

                            </p>

                        </div>

                        <div class="d-md-block d-none">
                            <p class="px-5 text-center fs-5">「我們的餐廳致力於提供高品質的美食和優質的服務，</p>
                            <p class="px-5 text-center fs-5">讓每一位客人都感受到家的溫馨和尊重。</p>
                            <p class="px-5 text-center fs-5">我們堅持使用新鮮、有機的食材，搭配經過精心研發的菜單，</p>
                            <p class="px-5 text-center fs-5">旨在為客人帶來最美味、最健康的飲食體驗。</p>
                            <p class="px-5 text-center fs-5">此外，我們的服務團隊將以親切、專業的態度，為客人提供個性化的餐飲體驗，</p>
                            <p class="px-5 text-center fs-5">以滿足不同客人的需求和期望。最重要的是，我們希望每一位客人</p>
                            <p class="px-5 text-center fs-5">在用餐後都能夠感受到心靈的滿足，並成為我們忠實的支持者和推薦者。」</p>

                        </div>
                        <div class="row justify-content-center px-3">
                            <Link to="/Menu" class="btn btn-bg col-md-2 mx-1">M E N U</Link>

                        </div>





                    </div>
                    <img class="img-fluid col-md-6 p-0 d-md-block d-none" src="https://www.oldsichuan.com.tw/img/officialHome/1622085636_foodImg1.jpg"></img>



                </div>


            </div>






        </>
    )
}