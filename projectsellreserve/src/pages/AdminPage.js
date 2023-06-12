import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import OrderCardOrderUser from "../components/OrderCardOrderUser";
import OrderCardReservationPayment from "../components/OrderCardReservationPayment";
import { BsFillTrash3Fill } from "react-icons/bs";

export default function AdminPage() {
  const { paymentUser, handleConfirmed } = useAuth();

  // console.log("paymentUser:", paymentUser);

  const [paymentUserData, setPaymentUserData] = useState(paymentUser);
  // console.log("paymentUserData", paymentUserData);
  // console.log("paymentUserData", paymentUserData[1]?.Order?.Room?.roomImage);

  const [dataInPage, setDataInPage] = useState([]);
  // console.log("dataInPage", dataInPage);
  const [page, setPage] = useState(0);

  // จำนวนรายการแต่บะหน้า
  // จำนวนเลขหน้า = ข้อมูลทั้งหมด / จำนวนรายการแต่ละหน้า
  // 1 = [1-3] , 2 = [4-6] , 3 = [7-9] , 4 [10]

  const paymentUserPerPage = 3; //กำหนดให้แสดง 3 ตอนเริ่มต้น

  const pagination = () => {
    const pages = Math.ceil(paymentUser.length / paymentUserPerPage);

    const newPaymentUser = Array.from({ length: pages }, (el, idx) => {
      const start = idx * paymentUserPerPage;
      return paymentUser.slice(start, start + paymentUserPerPage);
    });
    return newPaymentUser;
  };

  const handlePage = index => {
    setPage(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setPaymentUserData(paginate[page] || []);
  }, [page]);

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setPaymentUserData(paginate[page] || []);
  }, [paymentUser]);
  return (
    <div>
      {/* Order User  */}
      <div className="flex flex-col  gap-6">
        <div className="border-2 flex flex-col justify-center items-center p-2">
          <h1 className="text-2xl font-bold">Admin</h1>
          <h1 className="text-xl font-bold">รอการอนุมัติ</h1>
        </div>
        <div className="flex flex-col">
          <div className="w-[80%] m-auto flex flex-col justify-center items-center gap-4 ">
            {paymentUserData.map((el, idx) => {
              if (el.Order) {
                return (
                  <React.Fragment key={idx}>
                    {/* Order */}
                    <div className="border-b-2 py-6">
                      <div className="w-full flex justify-end items-center">
                        <i className="text-xl mr-4 hover:text-red-600 cursor-pointer ">
                          <BsFillTrash3Fill />
                        </i>
                      </div>
                      <OrderCardOrderUser
                        roomImage={el.Order.Room.roomImage[0]}
                        firstName={el.Order.User.firstName}
                        lastName={el.Order.User.lastName}
                        title={el.Order.Room.title}
                        price={el.Order.Room.price}
                        typeProduct={el.Order.Room.Category.typeProduct}
                        OrderStatusesDate={el.Order.OrderStatuses[0].date}
                        UserId={el.Order.User.id}
                        OrderId={el.Order.id}
                        RoomId={el.Order.Room.id}
                        OrderStatuses={el.Order.OrderStatuses[0].status}
                        creditCardNumber={el.creditCardNumber}
                        expirationDate={el.expirationDate}
                        zipCode={el.zipCode}
                        country={el.country}
                        cvv={el.cvv}
                        address={el.Order.Room.address}
                        PaymentId={el.id}
                      />
                      <div className="flex justify-center items-center gap-6">
                        <button
                          type="button"
                          onClick={() => handleConfirmed(el.id)}
                          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Confirmed
                        </button>

                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                );
              } else if (el.ReservationPayment) {
                return (
                  <React.Fragment key={idx}>
                    {/* ReservationPayment */}
                    <div className="border-b-2 py-6">
                      <div className="w-full flex justify-end items-center">
                        <i className="text-xl mr-4 hover:text-red-600 cursor-pointer ">
                          <BsFillTrash3Fill />
                        </i>
                      </div>
                      <OrderCardReservationPayment
                        roomImage={el.ReservationPayment?.Room?.roomImage[0]}
                        firstName={el.ReservationPayment.User.firstName}
                        lastName={el.ReservationPayment.User.lastName}
                        title={el.ReservationPayment.Room.title}
                        price={el.ReservationPayment.Room.price}
                        CheckIn={el.ReservationPayment.startDate}
                        CheckOut={el.ReservationPayment.endDate}
                        typeProduct={
                          el.ReservationPayment.Room.Category.typeProduct
                        }
                        UserId={el.ReservationPayment.User.id}
                        RoomId={el.ReservationPayment.Room.id}
                        OrderStatuses={
                          el.ReservationPayment.OrderStatuses[0].status
                        }
                        PaymentId={el.id}
                        creditCardNumber={el.creditCardNumber}
                        expirationDate={el.expirationDate}
                        cvv={el.cvv}
                        zipCode={el.zipCode}
                        country={el.country}
                      />

                      <div className="flex justify-center items-center gap-6">
                        <button
                          type="button"
                          onClick={() => handleConfirmed(el.id)}
                          className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Confirmed
                        </button>

                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </React.Fragment>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-6">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={dataInPage.length}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => handlePage(selected)}
          containerClassName={"inline-flex -space-x-px"}
          pageClassName="mt-5"
          pageLinkClassName={
            "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          previousClassName="mt-5"
          previousLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          nextClassName="mt-5"
          nextLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          breakClassName="mt-5"
          breakLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        />
      </div>
    </div>
  );
}
