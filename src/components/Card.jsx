import { useState } from "react";

function Card(props) {
  const [profile, setprofile] = useState();
  return (
    <>
      <div className="bg-[#313131]">
        <p className="bg-[#313131]">{props.info.name}</p>
      </div>
    </>
  );
}

export default Card;
