import axios from 'axios';
import {
  FETCH_INCOME,
} from './types';

export const addIncome = (data) => async () => {
  const res = await axios({
    method: 'post',
    url: '/api/income',
    data: data,
  });

  if (res.status === 201) {
    window.alert("Berhasil Simpan Balance");
  };
};

export const fetchIncome = () => async dispatch => {
  const res = await axios({
    method: 'get',
    url: '/api/income',
  });
  console.log(res)
  dispatch({ type: FETCH_INCOME, payload: res.data })
};