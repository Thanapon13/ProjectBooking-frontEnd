import useAuth from "../hooks/useAuth";
import Avatar from "../components/Avatar";
import EditProfileForm from "../features/auth/EditProfileForm";

export default function ProfilePage() {
  const {
    authenticateUser: {
      profileImage,
      firstName,
      lastName,
      email,
      mobile,
      address,
      linenotify
    }
  } = useAuth();

  return (
    <>
      <div className="flex bg-[#E5E7EB] border-b-2">
        <div className="w-[80%] m-auto">
          <div className="bg-white m-10 p-10">
            <div className="flex justify-end items-end">
              <EditProfileForm />
            </div>

            <Avatar src={profileImage} size="140px" />
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
                <p>{firstName || "-"}</p>
                <p> {lastName || "-"}</p>
                <p>{email || "-"}</p>
                <p>{mobile || "-"}</p>
                <p>{address || "-"}</p>
                <p>{linenotify || "-"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
