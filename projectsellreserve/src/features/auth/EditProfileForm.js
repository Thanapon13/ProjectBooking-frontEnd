import "flowbite";
import { Button, Drawer } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import InputEditProfile from "../../components/input/InputEditProfile";
import * as userApi from "../../apis/user-api";
import useLoading from "../../hooks/useLoading";
import { toast } from "react-toastify";
import validateEditProfile from "../../validators/validate-editProfile";

export default function EditProfileForm() {
  const {
    authenticateUser: { profileImage },
    updateProfile
  } = useAuth();

  const { startLoading, stopLoading } = useLoading();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [lineToken, setLineToken] = useState("");

  const inputEl = useRef();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const input = {
    firstName: fname,
    lastName: lname,
    email: email,
    address: address,
    mobile: mobile,
    lineToken: lineToken
  };

  const handleClickSave = async () => {
    try {
      startLoading();
      const result = validateEditProfile(input);
      // console.log(result, "result------------------------");

      if (result) {
        setError(result);
      } else {
        console.log("no error");
        setError({});
      }

      const formData = new FormData();
      formData.append("profileImage", file);
      await updateProfile(formData);

      toast.success("successfully updated!");
      stopLoading();
      setFile(null);
      // setOpen(false);
      // navigate(0);
    } catch (err) {
      console.log(err.response?.data.message);
      toast.error("Failed to update");
    }
  };

  const handleChangeFname = async e => {
    setFname(e.target.value);
  };

  return (
    <div>
      <div className="text-center">
        <Button
          className="flex justify-end items-end"
          type="button"
          onClick={showDrawer}
        >
          <p className="text-xl pr-1 text-gray-600">Edit</p>
          <i className="text-xl text-gray-600">
            <AiFillEdit />{" "}
          </i>
        </Button>
      </div>

      {/* <!-- drawer component --> */}

      <Drawer
        title="Edit Profile"
        placement="right"
        width={550}
        onClose={onClose}
        open={open}
      >
        <div className="mt-5 mx-5 flex flex-col justify-center items-center gap-3">
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size={"120"}
            onClick={() => inputEl.current.click()}
          />
          <button
            className="py-1.5 px-4 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => inputEl.current.click()}
          >
            <p>เลือกไฟล์</p>

            <input
              type="file"
              ref={inputEl}
              className="hidden"
              onChange={e => {
                // console.dir(e.target, "aa");
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              // multiple สามารถ input file ได้หลายอันใน 1 input
              // multiple
            />
          </button>
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            First Name
          </label>

          <InputEditProfile
            name="fname"
            placeholder="FirstName"
            autoComplete="off"
            onChange={e => handleChangeFname(e)}
            error={error.firstName}
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="lname" className="block text-xs text-gray-900">
            Last Name
          </label>

          <InputEditProfile
            name="lname"
            placeholder="LastName"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Email Address
          </label>
          <InputEditProfile
            name="emailaddress"
            placeholder="EmailAddress"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Mobile
          </label>

          <InputEditProfile
            name="mobile"
            placeholder="Mobile"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Address
          </label>

          <InputEditProfile
            name="address"
            placeholder="Address"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Line Token
          </label>

          <InputEditProfile
            name="lineToken"
            placeholder="LineToken"
            autoComplete="off"
          />
        </div>

        {file && (
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-green-600 hover:bg-green-500 px-4 py-2 mr-3 text-sm text-white"
              onClick={handleClickSave}
            >
              save
            </button>
            <button
              type="button"
              onClick={() => {
                setFile(null);
                inputEl.current.value = null;
              }}
              className="bg-gray-400 hover:bg-gray-300 px-3 py-1 text-sm text-white"
            >
              cancel
            </button>
          </div>
        )}
      </Drawer>
    </div>
  );
}
