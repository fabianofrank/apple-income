import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Statements = () => {
  const statements = useSelector((state) => state.data.data);
  const params = useParams();
  const statement = statements.find((statement) => statement.date === params.statementYear);
  const dollarUSLocale = Intl.NumberFormat('en-US');
  const revenue = () => dollarUSLocale.format(statement.revenue);
  const expenses = () => dollarUSLocale.format(statement.expenses);
  const profit = () => dollarUSLocale.format(statement.profit);
  const incomeBeforeTax = () => dollarUSLocale.format(statement.incomeBeforeTax);
  const income = () => dollarUSLocale.format(statement.income);
  const ebitda = () => dollarUSLocale.format(statement.ebitda);

  return (
    <>
      {statements && (
        statement && (
        <div>
          <div className="badge">
            <p className="badge-one">{statement.year}</p>
            <p className="badge-two">{statement.date}</p>
          </div>
          <div>
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th align="right">Company</th>
                  <td>{statement.symbol}</td>
                </tr>
                <tr>
                  <th align="right">Currency</th>
                  <td>{statement.currency}</td>
                </tr>
                <tr>
                  <th align="right">Revenue</th>
                  <td>{revenue()}</td>
                </tr>
                <tr>
                  <th align="right">Expenses</th>
                  <td>{expenses()}</td>
                </tr>
                <tr>
                  <th align="right">Profit</th>
                  <td>{profit()}</td>
                </tr>
                <tr>
                  <th align="right">Income Before Tax</th>
                  <td>{incomeBeforeTax()}</td>
                </tr>
                <tr>
                  <th align="right">Income</th>
                  <td>{income()}</td>
                </tr>
                <tr>
                  <th align="right">EBITDA</th>
                  <td>{ebitda()}</td>
                </tr>
                <tr>
                  <th align="right">Statement Link</th>
                  <td>
                    <a href={statement.link}>View statement</a>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        ))}
    </>
  );
};

export default Statements;
