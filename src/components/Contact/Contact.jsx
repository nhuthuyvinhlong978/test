import React, {useState} from 'react'
import './Contact.css'
import {submitData} from "../../api/api"
export const Contact = () => {
    const [infor, setInfor] = useState({
        fullName:"",
        phoneNumber: "",
        email:"",
        note: "",
    })
    const [msg, setMsg] = useState("")
    const [msgError, setMsgError] = useState("");
    const [show, setShow] = useState(false);
    const [errorInput, setErrorInput] = useState({
        fullName:"",
        phoneNumber: "",
        email:"",
        note: "",
    })
    const [msgSubmit, setMsgSubmit] = useState("")


    const checkErrorHandle = (name, value) => {
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        switch(name){
            case "phoneNumber":
                if(value.length == 0){
                    setErrorInput({...errorInput, [name]: ""});
                 }
                 else if(value.length < 10 || value.length > 10 ){
                    setErrorInput({...errorInput, [name]: " Số điện thoại bạn nhập không đúng!!!"});
                }
                 if(value.length == 10){
                    setErrorInput({...errorInput, [name]: ""});
                }
                
                break;
            case "email":
                if(value.length == 0 ){
                    setErrorInput({...errorInput, [name]: ""})
                }
                else if(!value.toLowerCase().match(re)){
                    setErrorInput({...errorInput, [name]: "Email bạn nhập không hợp lệ!!!"});
                }else{
                    setErrorInput({...errorInput,[name]:""});
                }
                break;

            case "note":
                if(value.length == 0){
                    setErrorInput({...errorInput,[name]: " Bạn cần nhập ghi chú!!!"});
                }else if (value.length < 10){
                    setErrorInput({...errorInput,[name]: " Dữ liệu phải lớn hơn 10 kí tự!!!"});
                }else{
                    setErrorInput({...errorInput,[name]: ""});
                }
        }
    }


    console.log(errorInput)

    const handleChange = (event) => {
        let {name, value} = event.target;
        checkErrorHandle(name, value);
        setInfor(({
            ...infor,
            [name]: value
          }))
    }

    const CheckData =(data) =>{
        if(data.fullName.length !=0 || data.email.length !=0 || data.phoneNumber.length != 0 || data.note.length != 0){
            setMsgSubmit("Bạn cần nhập đầy đủ thông tin!!!");
          return false;
          }else {
            setMsgSubmit("");
              return true;
          }  

    }

    const handleCLick = async () => {
        if(CheckData(errorInput)){
            setShow(true);
           await submitData(infor).then(res => {
               if(res.status === 200){
                 setMsg(" Bạn đã đăng kí thành công!!! Chúng tôi sẽ liên hệ với bạn qua Email!!!")
                 setMsgError("")
               }else if(res.status === 500){
                setMsg("")
                setMsgError(" Đăng ký thất bại!!!")
                
               }
               setShow(false)
           })
        }
       
    }
    return (
    <>
        <section className="contact">
        
            <div className="container">
                <div className="section-title text-center">Liên hệ với chúng tôi</div>
                
                <form className='contact-form' action="">
                    <div className="contact-item">
                        <label htmlFor="">
                            Họ và tên    
                        </label>     
                        <input type="text" name = "fullName" onChange={handleChange}/>
                    </div>  
                    <div className="contact-item">
                        <label htmlFor="">
                            Email   
                        </label>   
                        <span style={{color:"red"}}>{errorInput.email}</span> 
                        <input type="text" name="email" onChange={handleChange}/>
                    </div>  
                    <div className="contact-item">
                        <label htmlFor="">
                            Số điện thoại    
                        </label>     
                        <span style={{color:"red"}}>{errorInput.phoneNumber}</span>
                        <input type="text" name="phoneNumber" onChange={handleChange}/>
                    </div>  
                    <div className="contact-item">
                        <label htmlFor="">
                            Tư vấn theo yêu cầu    
                        </label>  
                        <span style={{color:"red"}}>{errorInput.note}</span>
                        <input type="text" name="note" onChange={handleChange}/>
                        <div className="btn-primary" onClick={handleCLick}  data-toggle="modal" data-target="#myModal">Đăng ký</div>  
                        <div className="modal" id="myModal">
                        <div className='modal-dialog'>
                            <div className='modal-content'>
                                <div className='modal-header'>
                                    <div className='modal-title'> DANG KY </div>
                                    <span style={{color:"red"}}>{msgSubmit}</span>
                                    <button type = 'button' className='close' data-dismiss = "modal">&times;</button>
                                </div>
                                <div className='modal-body'>
                                    <div className='agileits-top'></div>
                                    {
                    show ?
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> 
                        :
                        <></>
                }

                
                <span style={{color:"green", fontSize:"20px"}}>{msg}</span>
                <span style={{color:"red", fontSize:"20px"}}>{msgError}</span>

                                    <div className='model-footer'>
                                        <button type = "button" className='btn btn-danger' data-dismiss = 'modal'>CLOSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                    </div>
                </form>
                {/* //<!-- Button trigger modal -->// */}
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
<div class="modal" id="myModal"> </div> */}
            </div>    
        </section>
    </>
    )
}
