import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,auto)", backgroundColor: "#fafbfc", height: "300px"}}>
            <div style={{ backgroundColor: "#fafbfc", display: "flex", justifyContent: "end", gap: "20px", paddingRight: "100px" }}>
                <div> <a href='' style={{ fontWeight: "500", textDecoration: "none" }}>ONLINE SHOPPING </a><br />

                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Men</a> <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Women</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Kids</a> <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Home & Living</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Beauty</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Gift Cards</a>   <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Myntra Insider</a></div>
                <div><div> <a href='' style={{ fontWeight: "500", textDecoration: "none" }}>USEFUL LINKS </a><br />

                    <a>Men</a> <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Contact Us</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>FAQS</a> <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>T&C </a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Term Of Use</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Track Orders</a>   <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>SHipping</a> <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Cancellation</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Returns</a> <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Whitehat</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Blogs</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Careers</a>   <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Privacy policy</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Site Map</a>  <br />
                    <a href="" style={{ textDecoration: "none", fontSize: "13px" }}>Corporate information</a>
                </div>
                </div>
            </div>
            <div style={{  backgroundColor: "#fafbfc" }}>

                <p style={{ fontWeight: "500" }}>EXPERINCE MYNTRA APP ON MOBILE</p>
                <div style={{ display: "felx" }}>
                    <a href="https://play.google.com/store/apps/details?id=com.myntra.android">
                        <img style={{ width: "140px", height: "42px" }} src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" />
                    </a>
                    <a href="https://apps.apple.com/in/app/myntra-indias-fashion-store/id907394059">
                        <img style={{ width: "140px", height: "42px", marginLeft: "10px" }} src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" />
                    </a>


                </div>
                <div>
                    <div style={{ fontSize: "12px", fontWeight: "500", textAlign: "center",marginRight:"200px" ,marginTop:"20px" }}>KEEP IN TOUCH</div>
                    <div style={{ display: "flex", justifyContent: "center" ,marginRight:"165px" ,marginTop:"20px"}}>
                        <a href=""><img style={{ width: "20px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="" /></a>
                        <a href=""><img style={{ width: "20px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="" /></a>
                        <a href=""><img style={{ width: "30px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="" /></a>
                        <a href=""><img style={{ width: "20px", padding: "5px" }} src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="" /></a>


                    </div>
                </div>


            </div>
            <div style={{ backgroundColor: "#fafbfc" }}>
                <div style={{ display: "flex" ,width:"300px"}}>
                    <div> <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="" /></div>
                    <div style={{marginTop:"10px"}} ><strong style={{ fontWeight: "500" }}>100% Original</strong>guarantee for all products at myntra.com</div>
                    
                    <br />

                </div>
                <div style={{ display: "flex" ,width:"300px",marginLeft:"10px"}}>
                    <div> <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="" /></div>
                    <div style={{marginTop:"10px"}} ><strong style={{ fontWeight: "500" }}>Return within 30days</strong>of receiving your order</div>
                    
                    <br />

                </div>
            </div>

        </div>
    )
}

export default Footer