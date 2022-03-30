import React from "react";
import './logo.css';

export default function Logo(){
    return(
        <div className="img-wrapper ">
            <div className="wrapper">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3 crd--reffect-1 crd-img">
                        <div className="crd crd--effect-1" style={{width:'100%', height:"100px"}}>
                             <img className='logo crd-img' src={require('../../../image/Vtv.png')}  />
                        </div>
                        
                    </div>
                    <div className="col-sm-3 crd--reffect-1 crd-img">
                        <div className="crd crd--effect-1" style={{width:'100%', height:"100px"}}>
                             <img className='logo crd-img' src={require('../../../image/Cavaland.png')}  />
                        </div>
                        
                    </div>
                    <div className="col-sm-3 crd--reffect-1 crd-img">
                        <div className="crd crd--effect-1" style={{width:'80%', height:"80"}}>
                             <img className='logo crd-img' src={require('../../../image/edenplaza.png')}  style={{width:"100% !important"}}/>
                        </div>
                        
                    </div>
                    <div className="col-sm-3 crd--reffect-1 crd-img">
                        <div className="crd crd--effect-1" style={{width:'100%', height:"100px"}}>
                             <img className='logo crd-img' src={require('../../../image/Duy.png')}  style={{width:"100% !important"}}/>
                        </div>
                        
                    </div>
                   
                </div>
                </div>
                {/* <div className="crd crd--effect-1" style={{width:'20%', height:"100px", display:"inline-block"}}>
                             <img className='logo crd-img' src={require('../../../image/Vtv.png')}  style={{width:"100% !important"}}/>
                        </div>
                        <div className="crd crd--effect-1" style={{width:'20%', height:"100px", display:"inline-block"}}>
                             <img className='logo crd-img' src={require('../../../image/Vtv.png')}  style={{width:"100% !important"}}/>
                        </div>
                        <div className="crd crd--effect-1" style={{width:'20%', height:"100px", display:"inline-block"}}>
                             <img className='logo crd-img' src={require('../../../image/Vtv.png')}  style={{width:"100% !important"}}/>
                        </div>
                        <div className="crd crd--effect-1" style={{width:'20%', height:"100px", display:"inline-block"}}>
                             <img className='logo crd-img' src={require('../../../image/Vtv.png')}  style={{width:"100% !important"}}/>
                        </div>
                        <div className="crd crd--effect-1" style={{width:'20%', height:"100px", display:"inline-block"}}>
                             <img className='logo crd-img' src={require('../../../image/Vtv.png')}  style={{width:"100% !important"}}/>
                        </div> */}
            </div>
        </div>
    )
}