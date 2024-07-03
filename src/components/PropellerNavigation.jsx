import React from 'react';

const PropellerNavigation = ({ propeller }) => {
  return (
    <div className="border border-zinc-800 rounded-md p-4">
      <h1>Śmigła</h1>
      <ul>
        <li>
          <a className="btn btn-accent btn-block" href="#" onClick={() => setSeriesROpen(!SeriesROpen)}>Seria R</a>
          {SeriesROpen && (
            <ul>
              <li className="btn btn-primary btn-block">R</li>
              <li className="btn btn-primary btn-block">R1</li>
              <li className="btn btn-primary btn-block">R2</li>
              <li className="btn btn-primary btn-block">R3</li>
              <li className="btn btn-primary btn-block">R4</li>
            </ul>
          )}
        </li>
        <li>
          <a>Seria T</a>
          <ul>
            <li>T1</li>
            <li>T2</li>
            <li>T3</li>
          </ul>
        </li>
        <li>
          <a>Seria L</a>
          <ul>
            <li>L1</li>
            <li>L2</li>
            <li>L3</li>
            <li>L4</li>
          </ul>
        </li>
        <li>
          <a>Seria S</a>
          <ul>
            <li>S1</li>
            <li>3S1</li>
          </ul>
        </li>
        <li>Universal</li>
        <li>CS3 for THOR250</li>
      </ul>
    </div>
  );
};