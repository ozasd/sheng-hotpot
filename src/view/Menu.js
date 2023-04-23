import React from 'react';
import { Link } from "react-router-dom"

export function Menu() {
    return (
        <>
            <div class="row bg-dark justify-content-center ">
                <img class="img-fluid p-0" src="https://www.tripodking.com.tw/upload/adrv/1711292149240000001.jpg"></img>

                <div class="title text-white">
                    <h1 ><b class="text-warning ">| </b>探 索 <b >學 餐</b> Explore</h1>
                    <br />
                    <p class="fs-3 text-white">每一口 都是觸動人心的美味饗宴</p>
                    <p class="fs-4 text-white">Delicious feast that touches people's hearts</p>
                    <Link to="/" class="btn btn-bg col-md-1 mx-1">了解更多</Link>
                </div>


            </div>
            <div class="row  justify-content-center text-white p-4" style={{ backgroundColor: "black" }}>
                <div class="col-md-3 bg-white p-0">
                    <img class="img-fluid p-0" src="https://www.tripodking.com.tw/img/about_img.jpg"></img>

                </div>
                <div class="col-md-3 bg-dark p-3 ">
                    <h2 class="text-start"><b class="text-danger"> | </b>北 部 菜 單</h2>
                    <hr />
                    <p class="fs-4 text-white">台北林口店<b class="p-3"> <Link to="/Reserve" class="btn btn-bg mx-2">查看菜單</Link></b></p>

                    <p class="fs-4 text-white">台北信義店<b class="p-3"> <Link to="/Reserve" class="btn btn-bg mx-2">查看菜單</Link></b></p>


                </div>
                <div class="col-md-3 bg-white p-0">
                    <img class="img-fluid p-0" src="https://www.tripodking.com.tw/img/about_img.jpg"></img>

                </div>
                <div class="col-md-3 bg-dark p-3 ">
                    <h2 class="text-start"><b class="text-danger"> | </b>南 部 菜 單</h2>
                    <hr />
                    <p class="fs-4 text-white">高雄中華店<b class="p-3"> <Link to="/Reserve" class="btn btn-bg mx-2">查看菜單</Link></b></p>

                    <p class="fs-4 text-white">台南安平店<b class="p-3"> <Link to="/Reserve" class="btn btn-bg mx-2">查看菜單</Link></b></p>


                </div>





            </div>






        </>
    )
}