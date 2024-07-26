import React from 'react';
import 'C:/Users/Admin/OneDrive/Desktop/my-react-app/src/components/QrCode.css';
import { useState } from "react";

export const QrCode=()=>{
    const [img, setImg]=useState("")
    const[loading,setLoading]=useState(false);
    const[qrData, setqrData]=useState("keerthivarsan")
    const [qrSize,setqrSize]=useState("200")
    
    async function generateQR()
   {
    setLoading(true);
    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size={qrSize}x{qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);
    }
    catch(error)
    {
        console.error("Error generating QR code", error);
    }
    finally{
        setLoading(false);
    }
   
    
}
    function downloadQR(){
        fetch(img).then((response)=>response.blob()).then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png"
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        })
        .catch((error)=>{
            console.error("Error downloading QR code",error)
        })
    }
    return(
        <div className="app-container">
            <h1>QR CODE GENERATOR</h1>
            {loading && <p>Please wait...</p>}
            {img && <img src={img} alt="" className="qr-code-image"/>}
            <div>
                <label htmlFor="dataInput" className="input-label">Data for QR code : </label>
                <input type="text" value={qrData}  onChange={(e)=>setqrData(e.target.value)} id="dataInput" placeholder="Enter data for QR code"></input>
                <label htmlFor="sizeInput" className="input-label">Image size (e.g. 150) : </label>
                <input type="text" value={qrSize} onChange={(e)=>setqrSize(e.target.value)} id="sizeInput" placeholder="Enter image size"/>
                <button className="gbutton" disabled={loading} onClick={generateQR}>Generate QR code</button>
                <button className="dbutton" onClick={downloadQR}>Download QR code</button>
            </div>
        </div>
    )
}