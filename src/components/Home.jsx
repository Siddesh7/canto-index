import logo from "../assets/logoci.png";
export default function Home() {
  return (
    <div className="bg-black">
      <div className="navbar w-[90%] m-auto py-[14px]">
        <div className="navbar-start">
          <img src={logo} className="w-[220px]" alt="" srcset="" />
        </div>

        <div className="navbar-end">
          <a className="btn btn-outline btn-secondary">Try the app</a>
        </div>
      </div>
    </div>
  );
}
