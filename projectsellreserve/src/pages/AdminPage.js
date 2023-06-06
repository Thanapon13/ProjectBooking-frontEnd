import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function AdminPage() {
  const { paymentUser } = useAuth();

  console.log("paymentUser:", paymentUser);

  const [paymentUserData, setPaymentUserData] = useState(paymentUser);
  console.log("paymentUserData", paymentUserData);

  const [dataInPage, setDataInPage] = useState([]);
  console.log("dataInPage", dataInPage);
  const [page, setPage] = useState(0);

  // ข้อมูลทั้งหมด 10 รายการ
  // จำนวนรายการแต่บะหน้า
  // จำนวนเลขหน้า = ข้อมูลทั้งหมด / จำนวนรายการแต่ละหน้า

  // 10 รายการ 10/3 = 4
  // 1 = [1-3] , 2 = [4-6] , 3 = [7-9] , 4 [10]

  const pagination = () => {
    const paymentUserPerPage = 3; //ให้เสดงรายการอาการ 3 รายการต่อ 1 หน้า

    const pages = Math.ceil(paymentUser.length / paymentUserPerPage);
    console.log("จำนวนเลขหน้า = ", pages);

    const newPaymentUser = Array.from({ length: pages }, (el, idx) => {
      const start = idx * paymentUserPerPage;
      return paymentUser.slice(start, start + paymentUserPerPage);
    });
    return newPaymentUser;
  };

  const handlePage = index => {
    setPage(index);
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    console.log(paginate[0]);
    setPaymentUserData(paginate[page]);
  }, [page]);

  useEffect(() => {
    setPaymentUserData(paymentUser);
  }, [paymentUser]);

  return (
    <div>
      <h1>paymentUser | Pagination</h1>
      <div className="flex flex-col">
        <div className="flex justify-center items-center gap-4">
          {paymentUserData.map((el, idx) => (
            <div key={idx}>{el.id}</div>
          ))}
        </div>

        <div>
          {dataInPage.map((el, idx) => {
            return (
              <button
                key={idx}
                className={` text-red-200 ${idx === page ? "active" : null}`}
                onClick={() => handlePage(idx)}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={10}
        onPageChange={() => handlePage(idx)}
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
      /> */}
    </div>
  );
}
