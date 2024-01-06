import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductList.css";
import Trash from "./trash.jpg";

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [pageCount, setpageCount] = useState(0);

  let limit = 12;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );

        const total = response.headers["x-total-count"];
        setpageCount(Math.ceil(total / limit));
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getComments();
  }, [limit, currentPage]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    setCurrentPage(selectedPage);
  };

  const fetchComments = async (pageNumber) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=${limit}`
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const commentsFromServer = await fetchComments(currentPage);
      setItems(commentsFromServer);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className="container1">
      <div className="card">
        {items.map((item) => {
          return (
            <div key={item.id} className="card1">
              <div className="cardstyles" style={{ minHeight: 225 }}>
                <input type="checkbox" className="checkbox1" />
                <img
                  src={`https://via.placeholder.com/150?text=Image${item.id}`}
                  alt={`${item.id}`}
                  className="cardimg"
                />
                <img
                src={Trash} 
                alt="Trash"
                className="trash-icon"
              />

                <div className="cardbody">
                  <h5 className="cardtitle">Id: {item.id} </h5>
                  <h6 className="cardsubtitle">{item.email}</h6>
                  <p className="cardtext">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        breakLabel={"..."}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"pageitem"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}
