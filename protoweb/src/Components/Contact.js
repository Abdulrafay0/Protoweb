import React,{useState} from 'react';
import { Button } from 'antd';
import uuid from 'uuid/v1';

const Contact = () => {
    const [data , setdata] = useState({name:'',email:'',Message:'',id:''})
    const [Name , setName] = useState('');
    const [Email , setmail] = useState('');
    const [Message , setMsg] = useState('');
    console.log(data)
    const AddData = (name,email,Message) =>{
        setdata({name,email,Message,id:uuid()})
    }
    const HandleSubmit =(e)=>{
        e.preventDefault()
        console.log('submitted')
        AddData(Name,Email,Message);
        // fetch(url,{
        //     method:'POST',
        //     body: JSON.stringify(data)
        // })
        // .then(res=>{console.log(res)});
        setName('')
        setmail('')
        setMsg('')
        setdata('')
    };
    return ( 
            <div className='contact-container'>
                <div className='contact-form'>
                <div className='contact-header'>
                    <span>Contact Us</span>
                </div>
                    <form className='Form'>
                        <input type='text' className='name' placeholder='Name' value={Name}
                        onChange={e=>setName(e.target.value)}/>
                        <br/>
                        <input type='email' className='email' placeholder='email' value={Email}
                         onChange={e=>setmail(e.target.value)}/>
                        <br/>
                        <textarea placeholder='leave a message' value={Message}
                         onChange={e=>setMsg(e.target.value)}></textarea>
                        <br/>
                        <Button type="primary" className='submit' onClick={HandleSubmit}>Primary</Button>
                    </form>
                </div>
            </div>
    );
}
 
export default Contact;