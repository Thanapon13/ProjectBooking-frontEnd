import profileUser from "../assets/blank.png";

export default function ProfilePage() {
  return (
    <div className="w-screen border-2 flex">
      {/* Left */}
      <div className="border-2 w-1/4">
        <div className="flex justify-start items-center gap-10">
          <div>
            <img
              alt="img"
              src={profileUser}
              className="w-[200px] rounded-full"
            />
          </div>
          <div>
            <h1>User Name</h1>
          </div>
        </div>
        <nav>
          <p>asd</p>
        </nav>
      </div>

      {/* Right */}
      <div className="border-2 w-3/4">
        <p>ProfilePage</p>
      </div>
    </div>
  );
}
