import React from "react";
import { useNavigate } from "react-router-dom";
import backicon from "../assets/back-button.png";

interface BackbuttonProps {
    nama: string;
  }
  
  const Backbutton: React.FC<BackbuttonProps> = ({ nama }) => {
    const navigate = useNavigate();
    return (
      <div className="w-full h-8 flex items-center text-xl font-bold gap-3 mb-4 lg:justify-center lg:text-3xl">
        <button onClick={() => navigate(-1)}>
          <img src={backicon} alt="Back" className="h-full lg:hidden" />
        </button>
        {nama}
      </div>
    );
  };
  export default Backbutton
