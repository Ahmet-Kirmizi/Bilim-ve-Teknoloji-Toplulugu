import { quotes } from "../assets/static/index.js";

const CrewCard = ({ content, name, title, img, link="https://www.linkedin.com/in/ahmet-kirmizi-00962920b" }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <a href={link}>
      <div className="flex flex-row">
          <img src={img} alt={name} className="w-[60px] h-[60px] rounded-full" />
          <div className="flex flex-col ml-4">
              <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                  {name}
              </h4>
              <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                  {title}
              </p>
          </div>
      </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

      </a>
  </div>
);


export default CrewCard;
