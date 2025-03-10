import { Spin } from "antd";

export default function Loader() {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="">
        <Spin/>
      </div>
    </div>
  );
}
