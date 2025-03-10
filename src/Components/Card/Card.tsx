
interface WeatherCardProps {
  icon: any;
  label: string;
  temperature: number;
  weatherCondition: string;
  onClick: () => void;
  border: string;
}

const WeatherCard = ({
  icon,
  label,
  temperature,
  weatherCondition,
  onClick,
  border,
}: WeatherCardProps) => {
  return (
    <div
      className={`flex items-center p-4 rounded-2xl bg-white shadow-md w-[400px] h-[100px] cursor-pointer ${border}`}
      onClick={onClick}
    >
      <div className="pt-4 pb-5 px-[28px] flex gap-[24px] items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
          {icon}
        </div>
        <div className="ml-3 flex flex-col gap-1">
          <h1 className="text-[#344054] text-lg font-medium">{label}</h1>
          <h2 className="text-[#344054] text-[28px] font-semibold">
            {temperature}°C
          </h2>
          <h3 className="text-[#344054] text-[16px]">{weatherCondition}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
