import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const Statements = () => {
  const statements = useSelector((state) => state.data.data);
  const params = useParams();
  const statement = statements.find((statement) => statement.date === params.statementYear);

  return (
    <>
      {statements && (
        statement && (
        <div>
          <div>
            <p>{statement.year}</p>
            <p>{statement.date}</p>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Currency</th>
                  <td>{statement.currency}</td>
                </tr>
                <tr>
                  <th>EBITDA</th>
                  <td>{statement.ebitda}</td>
                </tr>
                <tr>
                  <th>Expenses</th>
                  <td>{statement.expenses}</td>
                </tr>
                <tr>
                  <th>Income</th>
                  <td>{statement.income}</td>
                </tr>
                <tr>
                  <th>Income Before Tax</th>
                  <td>{statement.incomeBeforeTax}</td>
                </tr>
                <tr>
                  <th>Statement Link</th>
                  <td>
                    <a href={statement.link}>View statement</a>
                  </td>
                </tr>
                <tr>
                  <th>Profit</th>
                  <td>{statement.profit}</td>
                </tr>
                <tr>
                  <th>Revenue</th>
                  <td>{statement.revenue}</td>
                </tr>
                <tr>
                  <th>Shares</th>
                  <td>{statement.shares}</td>
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
