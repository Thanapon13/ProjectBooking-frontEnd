import EditProfileForm from "../auth/EditProfileForm";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";

export default function ProfileContainer() {
  const { authenticateUser } = useAuth();
  // console.log(authenticateUser, "authenticateUser");
  return (
    <>
      <div className="flex bg-[#E5E7EB] border-b-2">
        {/* Left */}
        <div className=" w-[20%] bg-white">
          <div className="flex justify-start items-center gap-10 p-2 border-b-2">
            <div>
              <Avatar src={authenticateUser.profileImage} size="80px" />
            </div>
            <div>
              <h1 className="font-bold text-[20px]">
                {authenticateUser.firstName} {authenticateUser.lastName}
              </h1>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-[60%] m-auto">
          <div className="bg-white m-10 p-10">
            <div className="flex justify-end items-end">
              <EditProfileForm />
            </div>

            <Avatar src={authenticateUser.profileImage} size="140px" />
            <div className="flex">
              <div className="mt-8 mx-5 space-y-3 text-md font-bold w-1/5 text-gray-600">
                <p>First Name :</p>
                <p>Last Name :</p>
                <p>Email Address :</p>
                <p>Mobile :</p>
                <p>Address :</p>
                <p>Line Token :</p>
              </div>
              <div className="mt-8 mx-5 space-y-3 text-md text-md">
                <p>{authenticateUser.firstName || "-"}</p>
                <p> {authenticateUser.lastName || "-"}</p>
                <p>{authenticateUser.email || "-"}</p>
                <p>{authenticateUser.mobile || "-"}</p>
                <p>{authenticateUser.address || "-"}</p>
                <p>{authenticateUser.linenotify || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
