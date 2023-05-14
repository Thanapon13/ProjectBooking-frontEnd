import "flowbite";
import { Button, Drawer } from "antd";
import { AiFillEdit } from "react-icons/ai";
import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import * as userApi from "../../apis/user-api";
import InputEditProfile from "../../components/input/InputEditProfile";
import useLoading from "../../hooks/useLoading";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import validateEditProfile from "../../validators/validate-editProfile";

export default function EditProfileForm() {
  const { authenticateUser, updateProfile } = useAuth();
  // const navigate = useNavigate();
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
    linenotify: lineToken
  };
  console.log(error, "err");

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

      await userApi.updateUserInfo(input);

      toast.success("successfully updated!");
      stopLoading();
      setFile(null);
      setOpen(false);
      // navigate(0);
    } catch (err) {
      console.log(err.response?.data.message);
      toast.error("Failed to update");
    }
  };

  const handleChangeFname = async e => {
    setFname(e.target.value);
  };
  const handleChangeLname = async e => {
    setLname(e.target.value);
  };
  const handleChangeEmail = async e => {
    setEmail(e.target.value);
  };
  const handleChangeAddress = async e => {
    setAddress(e.target.value);
  };
  const handleChangeMobile = async e => {
    setMobile(e.target.value);
  };
  const handleChangeLineToken = async e => {
    setLineToken(e.target.value);
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
            src={
              file ? URL.createObjectURL(file) : authenticateUser.profileImage
            }
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
            onChange={e => handleChangeLname(e)}
            placeholder="LastName"
            autoComplete="off"
            error={error.lastName}
          />
        </div>
        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Email Address
          </label>
          <InputEditProfile
            name="emailaddress"
            onChange={e => handleChangeEmail(e)}
            placeholder="EmailAddress"
            autoComplete="off"
            error={error.email}
          />
        </div>
        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Mobile
          </label>

          <InputEditProfile
            name="mobile"
            onChange={e => handleChangeMobile(e)}
            placeholder="Mobile"
            autoComplete="off"
            error={error.mobile}
          />
        </div>
        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Address
          </label>

          <InputEditProfile
            name="address"
            onChange={e => handleChangeAddress(e)}
            placeholder="Address"
            autoComplete="off"
            error={error.address}
          />
        </div>
        <div className="flex flex-col gap-2 py-4 px-8">
          <label htmlFor="fname" className="block text-xs text-gray-900">
            Line Token
          </label>

          <InputEditProfile
            name="lineToken"
            onChange={e => handleChangeLineToken(e)}
            placeholder="LineToken"
            autoComplete="off"
            error={error.linenotify}
          />
        </div>
        {/* {file && ( */}
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
        {/* )} */}
      </Drawer>
    </div>
  );
}
