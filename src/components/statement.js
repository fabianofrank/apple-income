import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Statements = () => {
  const statements = useSelector((state) => state.data.data);
  const params = useParams();
  const statement = statements.find((statement) => statement.date === params.statementYear);

  return (
    <div className="row justify-content-center">
      <div className="details-title">
        <p>{statement.year}</p>
        <p>{statement.date}</p>
      </div>
      {statement && (
        <div>
          <table >
            <thead>
              <tr>
                <th scope="row">Currency</th>
                <td>{statement.currency}</td>
              </tr>
              <tr>
                <th scope="row">EBITDA</th>
                <td>{statement.ebitda}</td>
              </tr>
              <tr>
                <th scope="row">Expenses</th>
                <td>{statement.expenses}</td>
              </tr>
              <tr>
                <th scope="row">Income</th>
                <td>{statement.income}</td>
              </tr>
              <tr>
                <th scope="row">Income Before Tax</th>
                <td>{statement.incomeBeforeTax}</td>
              </tr>
              <tr>
                <th scope="row">Statement Link</th>
                <td>
                  <a target="_blank" rel="noreferrer" href={statement.link}>View statement</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Profit</th>
                <td>{statement.profit}</td>
              </tr>
              <tr>
                <th scope="row">Revenue</th>
                <td>{statement.revenue}</td>
              </tr>
              <tr>
                <th scope="row">Shares</th>
                <td>{statement.shares}</td>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </div>
  );
};

export default Statements;