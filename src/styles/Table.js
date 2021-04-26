import styled from "styled-components";

const S = {};

S.Table = styled.div`
  width: 100%;

  .table {
    color: #000;
    border-collapse: collapse;
    width: 100%;
    margin:10px 0;
  }

  .table__header-row {
    border-bottom: 1px solid #f0f0f0;
    background: #fafafa;
  }

  .table__title {
    padding: 15px 10px;
  }

  .table__body-row {
    border-bottom: 1px solid #f0f0f0;
  }

  .table__body-row:hover {
    background: #fafafa;
  }

  .table__text {
    padding: 15px 10px;
  }

  .table__title {
    text-align: left;
  }

  .pagination-list {
    display: flex;
    justify-content: flex-end;
    list-style: none;
  }

  .pagination-list__item {
    margin: 0 5px;
  }

  .pagination-list__btn {
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.85);
    border-radius: 2px;
    cursor: pointer;
    width: 32px;
    height: 100%;
  }

  .pagination-list__btn--active {
    font-weight: 500;
    background: #fff;
    border-color: #1890ff;
    color: #1890ff;
  }

  .pagination-list__arrow-btn {
    background-color: #fff;
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.85);
    border-radius: 2px;
    padding: 5px 10px;
    cursor: pointer;
    margin: 0 5px;
    width: 32px;
    height: 32px;
  }

  .pagination-list__arrow-btn--disable {
    color: #d9d9d9;
    cursor: no-drop;
  }

  .table__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .table__inp {
    padding: 10px 15px;
    transition: 1s;
    border:1px solid transparent;
    border-radius:2px;
    background:transparent;
    width:0px;
  }

  .table__inp--active {
    border:1px solid #ccc;
    width:150px;
  }

  .table__inner {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-right: 15px;
  }


  .table__icon {
    width: 20px;
    position: absolute;
    right: 7px;
    top: 7px;
    cursor: pointer;
    z-index: 9;
  }

  .table__empty{
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 50px 0;
  }

  .table__empty-icon{
    width:150px;
    height:auto;
    color:#aaa;
  }

  .table__empty-text {
    font-size: 20px;
    margin-top: 15px;
    text-align:center;
}

`;

export default S;
