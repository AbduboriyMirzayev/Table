import React, { useState } from "react";

import paginationData from "../../utils/pagination";
import Pagination from "../../components/Pagination";
import { ReactComponent as Search } from "../../assets/loupe.svg";

import S from "../../styles/Table";

const defaultData = [
  {
    id: "5e14154ffewwv454489fqe",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewwv454ewqe123",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "Assshkl piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewwv454489fqe",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewwv454ewqe123",
    name: "Clan piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "Ban piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewwv454489fqe",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewwv454ewqe123",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
  {
    id: "5e14154ffewweqweq12334",
    name: "San piter burg",
    quantity: 10,
    distance: 80,
    date: "12,05,2021",
  },
];

export default function Table() {
  const [page, setPage] = useState({ currentPage: 1, size: 10 });
  const [sortedData, setSortedData] = useState(defaultData);
  const [isSearchOpened, setIsSearchOpened] = useState(false);

  const { currentPage, size } = page;

  const handlePage = (currentPage) => {
    setPage({ ...page, currentPage });
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      let result = sortedData.filter((element) => {
        return element.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      console.log(result.length);
      setSortedData(result);
    } else {
      setSortedData(defaultData);
    }
  };

  const handleSearchOpen = () => {
    if (isSearchOpened) {
      setIsSearchOpened(false);
    } else {
      setIsSearchOpened(true);
    }
  };

  const result = paginationData(sortedData, currentPage, size);

  return (
    <S.Table>
      <table className="table">
        <thead className="table__header">
          <tr className="table__header-row">
            <th className="table__title col-2">Дата</th>
            <th className="table__title col-3 table__wrapper">
              <span>Название</span>
              <div className="table__inner">
                <Search className="table__icon" onClick={handleSearchOpen} />
                <input
                  className={
                    isSearchOpened
                      ? "table__inp table__inp--active"
                      : "table__inp"
                  }
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
              </div>
            </th>
            <th className="table__title col-3">Количество</th>
            <th className="table__title col-3">Расстояние</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {result.map((item) => (
            <tr className="table__body-row">
              <td className="table__text col-2">{item.date}</td>
              <td className="table__text col-3">{item.name}</td>
              <td className="table__text col-3">{item.quantity}</td>
              <td className="table__text col-3">{item.distance} km</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        data={sortedData}
        page={currentPage}
        handlePage={handlePage}
        size={size}
      />
    </S.Table>
  );
}
