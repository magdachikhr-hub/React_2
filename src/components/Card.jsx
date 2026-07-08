import { useState } from "react";

function Card(props) {
  const [profile, setprofile] = useState();
  return (
    <>
      <div className="bg-[#313131] w-70 h-106 pt-7 pr-7 pb-6 pl-7 rounded-[40px]">
        <img src={props.info.image} alt="" className="" />
        <div>
          <span className="flex gap-5.25">
            {props.info.name}

            {props.info.verified && <img src="/public/verified.png" alt="" />}
          </span>
          <p>{props.info.profession}</p>
        </div>
        <div className="flex">
          <span className="flex">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7.63889C10.1813 7.63889 11.1389 6.68128 11.1389 5.5C11.1389 4.31873 10.1813 3.36111 9 3.36111C7.81873 3.36111 6.86111 4.31873 6.86111 5.5C6.86111 6.68128 7.81873 7.63889 9 7.63889Z"
                stroke="#A2A2A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7038 14.068C13.3727 13.8572 13.7242 13.1183 13.4403 12.4775C12.6859 10.7733 10.9833 9.58334 9 9.58334C7.01667 9.58334 5.31411 10.7733 4.55967 12.4775C4.27578 13.1191 4.62733 13.8572 5.29622 14.068C6.249 14.3682 7.50978 14.6389 9 14.6389C10.4902 14.6389 11.751 14.3682 12.7038 14.068Z"
                stroke="#A2A2A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {props.info.followers}
          </span>
          <span className="flex">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.41434 10.9444L9.66578 12.1111L12.3079 8.61108"
                stroke="#A2A2A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0833 6.08331H7.6389C6.77979 6.08331 6.08334 6.77976 6.08334 7.63887V13.0833C6.08334 13.9424 6.77979 14.6389 7.6389 14.6389H13.0833C13.9425 14.6389 14.6389 13.9424 14.6389 13.0833V7.63887C14.6389 6.77976 13.9425 6.08331 13.0833 6.08331Z"
                stroke="#A2A2A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.17856 11.3318L3.37823 5.94643C3.25223 5.09632 3.83867 4.30532 4.68801 4.17932L10.0733 3.37899C10.799 3.27088 11.4811 3.68232 11.744 4.3341"
                stroke="#A2A2A2"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {props.info.following}
          </span>
          <button className="flex">
            Follow
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 3.25V14.75"
                stroke="#F9F9F9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.25 9H14.75"
                stroke="#F9F9F9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
