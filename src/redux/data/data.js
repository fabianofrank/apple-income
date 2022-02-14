import axios from 'axios';

export const FETCH_DATA = 'apple-income/src/redux/data/FETCH_DATA';
const baseURL = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=e7fe39be1398743ea824fb37c5a1c0dd';

export const fetchData = () => (dispatch) => {
  axios.get(baseURL).then((response) => {
    const statement = (response.data).map((data) => {
      const {
        symbol, period, ebitda, incomeBeforeTax, revenue, date,
      } = data;
      // const date = data.date;
      const year = data.calendarYear;
      const expenses = data.costAndExpenses;
      const link = data.finalLink;
      const profit = data.grossProfit;
      const income = data.netIncome;
      const currency = data.reportedCurrency;

      const incomeStatement = {
        symbol,
        year,
        expenses,
        date,
        incomeBeforeTax,
        income,
        currency,
        revenue,
        ebitda,
        link,
        profit,
        period,
      };
      return incomeStatement;
    });

    dispatch({
      type: FETCH_DATA,
      payload: statement,
    });
  });
};

const home = (state = { data: [] }, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default home;
