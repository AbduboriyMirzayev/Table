import React, { useState } from "react";

import paginationData from "../../utils/pagination";
import Pagination from "../../components/Pagination";
import { ReactComponent as Search } from "../../assets/loupe.svg";
import { ReactComponent as Empty } from "../../assets/empty.svg";

import S from "../../styles/Table";

const defaultData = [
  {
    name: "Севастополь",
    quantity: 10,
    distance: 80,
    date: "26.04.2021",
  },
  {
    name: "Алушта",
    quantity: 10,
    distance: 80,
    date: "1.05.2021",
  },
  {
    name: "Абакан",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Астрахань",
    quantity: 10,
    distance: 80,
    date: "21.05.2021",
  },
  {
    name: "Челябинск",
    quantity: 10,
    distance: 80,
    date: "20.05.2021",
  },
  {
    name: "Екатеринбург",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Казань",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Хабаровск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Курск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Листвянка",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Магнитогорск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Ноябрьск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Новороссийск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Оренбург",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Омск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Петрозаводск",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Сочи",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Тверь",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Выборг",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Елабуга",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Воронеж",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Елабуга",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Александров",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
  {
    name: "Киров",
    quantity: 10,
    distance: 80,
    date: "12.05.2021",
  },
];

export default function Table() {
  const [page, setPage] = useState({ currentPage: 1, size: 10 });
  const [sortedData, setSortedData] = useState(defaultData);
  const [isSearchInp, setIsSearchInp] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const { currentPage, size } = page;

  const handlePage = (currentPage) => {
    setPage({ ...page, currentPage });
  };

  const handleSearch = (e) => {
    if (e.target.value) {
      let result = defaultData.filter((element) => {
        return element.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      result.length === 0? setIsEmpty(true):setIsEmpty(false); 
      setSortedData(result);
    } else {
      setSortedData(defaultData);
    }
  };

  const handleSearchInp = () => {
    if (isSearchInp) {
      setIsSearchInp(false);
    } else {
      setIsSearchInp(true);
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
                <Search className="table__icon" onClick={handleSearchInp} />
                <input
                  className={
                    isSearchInp
                      ? "table__inp table__inp--active"
                      : "table__inp"
                  }
                  type="text"
                  placeholder="Поиск..."
                  onChange={handleSearch}
                />
              </div>
            </th>
            <th className="table__title col-3">Количество</th>
            <th className="table__title col-3">Расстояние</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {result.map((item,index) => (
            <tr key={index} className="table__body-row">
              <td className="table__text col-2">{item.date}</td>
              <td className="table__text col-3">{item.name}</td>
              <td className="table__text col-3">{item.quantity}</td>
              <td className="table__text col-3">{item.distance} км</td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        isEmpty?<div className="table__empty">
        <Empty className="table__empty-icon" />
        <div className="table__empty-text">Упс! По вашему запросу ничего не найдено.</div>
      </div>:null
      }
      <Pagination
        data={sortedData}
        page={currentPage}
        handlePage={handlePage}
        size={size}
      />
    </S.Table>
  );
}
