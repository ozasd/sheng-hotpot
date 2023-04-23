import React, { useState } from 'react';
import { Link } from "react-router-dom"


export function Reserve() {
    // https://khh.travel/content/images/static/4-1-6-09.jpg


    const [data, setdata] = useState([
        ["台北林口店", "台北市林口區中山一路65號"], ["台北信義店", "台北市信義區忠孝東路128號"], ["高雄中華店", "高雄市中華五路1008號"], ["台南安平店", "台南市安平區安東路8號"]
    ])
    var date = new Date();
    var now = String(date.getMonth() + 1 + " / " + String(date.getDate()))
    const [today, settoday] = useState(now)

    // console.log(date.getHours())


    const [reserved, setreserved] = useState("none")
    function Component(props) {
        var now = date.getHours()
        // var now = 9
        return (
            <div class="row bg-dark my-3 ">
                <div class="col-md-6 p-0">
                    <img class="img-fluid" src='https://khh.travel/content/images/static/4-1-6-09.jpg'></img>

                </div>
                <div class="col-md-6 p-2">
                    <h2><b class='fs-1 text-danger'>|</b> {props.item[0]}</h2>
                    <p class=" text-secondary mx-1 my-1"> {props.item[1]}</p>
                    <hr class="my-2" />

                    <p class="text-warning ">   {today} 的 2 人尚不開放線上訂位，其他可訂位日期:</p>
                    {(now <= 10) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 10:00</button>
                    )}
                    {(now <= 11) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 11:00</button>
                    )}


                    {(now <= 12) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 12:00</button>
                    )}
                    {(now <= 13) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 13:00</button>
                    )}
                    {(now <= 14) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 14:00</button>
                    )}
                    {(now <= 15) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 15:00</button>
                    )}
                    {(now <= 16) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 16:00</button>
                    )}
                    {(now <= 17) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 17:00</button>
                    )}
                    {(now <= 18) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 18:00</button>
                    )}
                    {(now <= 19) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 19:00</button>
                    )}
                    {(now <= 20) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 20:00</button>
                    )}
                    {(now <= 21) && (
                        <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white m-1">{today} <br></br> 21:00</button>
                    )}


                    {/* 如果不需要可刪除 */}
                    {/* <div class="row  justify-content-start ">
                        {(now <= 10) && (
                            <div class="col-md-2 mt-2 ">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 10:00</button>
                            </div>
                        )}
                        {(now <= 11) && (
                            <div class="col-md-2 mt-2 ">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 11:00</button>
                            </div>
                        )}


                        {(now <= 12) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 12:00</button>
                            </div>
                        )}
                        {(now <= 13) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 13:00</button>
                            </div>
                        )}
                        {(now <= 14) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 14:00</button>
                            </div>
                        )}
                        {(now <= 15) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 15:00</button>
                            </div>
                        )}
                        {(now <= 16) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 16:00</button>
                            </div>
                        )}
                        {(now <= 17) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 17:00</button>
                            </div>
                        )}
                        {(now <= 18) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 18:00</button>
                            </div>
                        )}
                        {(now <= 19) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 19:00</button>
                            </div>
                        )}
                        {(now <= 20) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 20:00</button>
                            </div>
                        )}
                        {(now <= 21) && (
                            <div class="col-md-2 mt-2">
                                <button id={props.item[0]} onClick={(e) => { onClick(e) }} class="btn btn-outline-light text-white">{today} <br></br> 21:00</button>
                            </div>
                        )}



                    </div> */}

                </div>

            </div>

        )
    }


    function onClick(e) {
        setreserved([e.target.id, e.target.textContent])
    }




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
                <h class="text-center fs-1"><b class='fs-1 text-danger py-4'>|  </b>最美味的經典之最，<b class="text-danger">學 餐</b></h>

            </div>
            <div class="row justify-content-center text-white" style={{ backgroundColor: "black" }}>

                <div class="col-md-8    " style={{ backgroundColor: "black" }}>
                    {Array.from(data).map((item) => (<Component item={item} />))}




                </div>
                {(reserved != "none") && (<div class="col-md-4 my-3  bg-light text-dark p-5">
                    <h2 class="text-center">確認訂位與填寫聯絡資訊</h2>
                    <hr />

                    <img class="img-fluid my-2" src='https://khh.travel/content/images/static/4-1-6-09.jpg'></img>
                    <h3 class="text-center"><b class=' text-danger '>| </b>學餐 {reserved[0]}</h3>
                    <label class="text-dark fs-4">時間 <b class='text-danger'>*</b></label>
                    <input class="form-control" value={reserved[1]}></input>

                    <label class="text-dark fs-4">姓名 <b class='text-danger'>*</b></label>
                    <input class="form-control"></input>
                    <label class="text-dark fs-4" >電話 <b class='text-danger'>*</b></label>
                    <input class="form-control" type='cellphone'></input>
                    <label class="text-dark fs-4">人數 <b class='text-danger'>*</b></label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>人數</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                        <option value="3">8</option>
                        <option value="3">更多</option>


                    </select>
                    <label class="text-dark fs-4">備註: </label>

                    <div class="form-floating text-dark p-0 ">
                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                        <label for="floatingTextarea2 ">點我填寫: </label>
                    </div>

                    <button class="btn btn-primary mt-3 col-md-3">送出</button>


                </div>)}


            </div>


        </>

    )

}