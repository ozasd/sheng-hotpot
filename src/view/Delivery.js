import React, { useState } from 'react';
import { Link } from "react-router-dom"
var menu = [['招牌鴛鴦鍋', ' (龍骨鍋/麻辣鍋)', '1088 '], ['四川麻辣鍋', ' (麻辣鍋)', '788 '], ['大汗龍骨鍋', ' (龍骨鍋)', '688 ']]
// var orderDetail = []









export function Delivery() {
    const [data, setdata] = useState([])

    function DeliveryMenu(props) {

        function Order(e) {
            var n = e.target.id
            // orderDetail.push(menu[n])

            console.log(document.querySelectorAll('.radio' + n))
            var spyic
            Array.from(document.querySelectorAll('.radio' + n)).forEach((item, i) => {
                if (item.checked) {
                    spyic = item.value
                }
            })
            // console.log(menu[n])
            // orderDetail = [...orderDetail, [menu[n][0], spyic, menu[n][2]]]
            setdata([...data, [menu[n][0], spyic, menu[n][2]]])
            // console.log(orderDetail)

            // console.log(data)


        }

        return (
            <div class="col-md-4">
                <img class="img-fluid" src='https://www.oldsichuan.com.tw/images/official/abimg.png'></img>
                <p><b class="fs-3"><b class=' text-danger '>| </b>{props.item[0]} </b> {props.item[1]}</p>
                <hr />
                <p>梅花豬肉 x 1</p>
                <p>大腸頭 x 1</p>
                <p>招牌川丸子 x 1</p>
                <p>豬肚 x 1</p>
                <p>千層凍豆腐 x 1</p>
                <hr />
                <p class="fs-4 text-end">NT<b class="text-danger fs-2  "> {props.item[2]}</b> 元</p>

                <div class="row justify-content-around">
                    <div class="form-check col-md-3">
                        <input class={"form-check-input  radio" + props.i} value='小辣' type="radio" name={"radio" + props.i} id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            小辣
                        </label>
                    </div>
                    <div class="form-check  col-md-3">
                        <input class={"form-check-input  radio" + props.i} value='中辣' type="radio" name={"radio" + props.i} id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            中辣
                        </label>
                    </div>
                    <div class="form-check  col-md-3">
                        <input class={"form-check-input  radio" + props.i} value='大辣' type="radio" name={"radio" + props.i} id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            大辣
                        </label>
                    </div>

                </div>
                <button id={props.i} onClick={(e) => { Order(e) }} class="btn btn-outline-light my-3">加入</button>
            </div>
        )


    }

    return (

        <>
            <div class="row bg-dark justify-content-center ">
                <img class="img-fluid p-0" src="https://www.oldsichuan.com.tw/img/officialHome/1637304208_bottomBanner.jpg"></img>

                <div class="title text-white">
                    <h1 ><b class="text-warning ">| </b>探 索 <b >學 餐</b> Explore</h1>
                    <br />
                    <p class="fs-3 text-white">每一口 都是觸動人心的美味饗宴</p>
                    <p class="fs-4 text-white">Delicious feast that touches people's hearts</p>
                    <Link to="/" class="btn btn-bg col-md-1 mx-1">了解更多</Link>
                </div>


            </div>
            <div class="row  justify-content-center text-white p-4" style={{ backgroundColor: "black" }}>
                <div class="col-md-8 bg-dark p-3">
                    <h1 class="text-center ">外送菜單</h1>
                    <div class="row">
                        {Array.from(menu).map((item, i) => (<DeliveryMenu item={item} i={i} />))}



                    </div>

                </div>
                {(data.length > 0) && (
                    <div class="col-md-4 bg-light p-4">
                        <h1 class="text-center text-dark">購物車</h1>
                        <div class="row   p-2 text-dark">
                            <div class="col-md-12 text-dark row justify-content-center">
                                <div class="row ">
                                    <div class="col-md-5">
                                        餐點
                                    </div>
                                    <div class="col-md-2">
                                        辣度
                                    </div>
                                    <div class="col-md-2">
                                        金額
                                    </div>
                                    <div class="col-md-3">

                                    </div>

                                </div>
                                <hr />

                                <OrderDetail item={data} />
                            </div>
                        </div>
                        {/* <div class="bg-dark">
                        <h1>123</h1>
                    </div> */}
                        <h2 class="text-center text-dark mt-5">輸入外送資訊</h2>
                        <hr class="text-dark" />
                        <div class="row justify-content-center ">
                            <div class="col-md-9 row justify-content-end">
                                <label class="text-dark fs-4">姓名 <b class='text-danger'>*</b></label>
                                <input class="form-control"></input>
                                <label class="text-dark fs-4">電話 <b class='text-danger'>*</b></label>
                                <input class="form-control"></input>
                                <label class="text-dark fs-4">地址 <b class='text-danger'>*</b></label>
                                <input class="form-control"></input>
                                <label class="text-dark fs-4">備註: </label>

                                <div class="form-floating text-dark p-0 ">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
                                    <label for="floatingTextarea2 ">點我填寫: ( 不要蔥，香菜 )</label>
                                </div>

                                <button class="btn btn-primary mt-3 col-md-3">送出</button>

                            </div>


                        </div>




                    </div>)}
            </div>






        </>
    )
    function OrderDetail(props) {
        // var total = total + {item[2]}
        var total = 0
        // parseInt
        Array.from(props.item).map((item, i) => {
            total += parseInt(item[2])
            // console.log(typeof (parseInt(item[2])))

        })


        var total
        return (
            <>
                {Array.from(props.item).map((item, i) => (
                    <div class="row mb-1">
                        <div class="col-md-5">
                            {i + 1}. {item[0]}
                        </div>
                        <div class="col-md-2">
                            {item[1]}
                        </div>
                        <div class="col-md-2">
                            NT.{item[2]}
                        </div>
                        <div class="col-md-3">
                            <button onClick={() => setdata(data.filter((item, index) => index !== i))} class="btn btn-danger">刪除</button>
                        </div>

                    </div>

                ))}
                <br />
                <hr />
                <div class="row justify-content-end">
                    <div class="col-md-5 ">
                        <div class="text-end fs-4">
                            總計: {total} 元

                        </div>

                    </div>



                </div>


            </>




        )

    }

}