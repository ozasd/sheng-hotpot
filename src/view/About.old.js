import React from 'react';
import { Link } from "react-router-dom"

export function About() {
    return (
        <>
            <div class="row bg-dark justify-content-center">
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
                        <h1 class="text-center"><b class="text-danger"> | </b>經營理念 </h1>
                        <hr class="text-white" />
                        <div class="d-md-none d-block">
                            <p class="px-md-5  text-center fs-5">
                                我們以提供高品質、無添加的新鮮食材為基礎，並以客戶至上的服務理念為核心，不斷追求創新與卓越，同時關注社會責任，成為麻辣火鍋市場的領導者。
                            </p>
                        </div>
                        <div class="d-md-block d-none">
                            <p class="px-5 text-center fs-2">歡迎來到我們的餐廳</p>
                            <p class="px-5 text-center fs-5"> 我們以提供高品質、無添加的新鮮食材為基礎，並以客戶至上的服務理念為核心，不斷追求創新與卓越，同時關注社會責任，成為麻辣火鍋市場的領導者。</p>
                            <br/>
                        </div>
                        <div class="row justify-content-center ">
                            {/* <Link to="/" class="btn btn-bg col-md-2 mx-1">了解更多</Link> */}
                            <Link to="/Menu" class="btn btn-bg col-md-2 mx-1 ">了解更多</Link>
                        </div>
                    </div>
                </div>
                <div class="row  bg-dark p-md-0 py-3 ">
                    <img class="img-fluid col-md-6 p-0 d-md-none d-block" src="https://www.oldsichuan.com.tw/img/officialHome/1622085636_foodImg1.jpg"></img>

                    <div class="col-md-6 text-white p-md-5 pt-2">
                        <h1 class="text-center"><b class="text-danger"> | </b>關  於  我 們 </h1>
                        <hr class="text-white" />
                        <div class="d-md-none d-block">
                            <p class="px-md-5  text-center fs-5">
                                我們是一家致力於提供美食與服務的麻辣火鍋店，提供新鮮、高品質、無添加的食材，以客戶至上的理念為基礎，追求創新與卓越，同時關注社會責任，讓顧客能夠享受到最地道、最美味的麻辣火鍋。
                            </p>
                        </div>
                        <div class="d-md-block d-none">
                            <p class="px-5 text-center fs-2">味在台灣 | 吃在學餐</p>
                            <p class="px-5 text-center fs-5">我們是一家致力於提供美食與服務的麻辣火鍋店，提供新鮮、高品質、無添加的食材，以客戶至上的理念為基礎，追求創新與卓越，同時關注社會責任，讓顧客能夠享受到最地道、最美味的麻辣火鍋。</p>
                            <br/>
                        </div>
                        <div class="row justify-content-center ">
                            <Link to="/Menu" class="btn btn-bg col-md-2 mx-1">了解更多</Link>
                        </div>
                    </div>
                    <img class="img-fluid col-md-6 p-0 d-md-block d-none" src="https://www.oldsichuan.com.tw/img/officialHome/1622085636_foodImg1.jpg"></img>
                </div>
            </div>


        </>
    )
}