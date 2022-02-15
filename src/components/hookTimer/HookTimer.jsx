import React from 'react';
import { useEffect, useState, useCallback } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import Button from '../Button';

function HookTimer() {
    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("stop");
   
    useEffect(() => {
      const unsubscribe$ = new Subject();
      interval(1000)
        .pipe(takeUntil(unsubscribe$))
        .subscribe(() => {
          if (status === "start") {
            setSec(val => val + 1000);
          }
        });
      return () => {
        unsubscribe$.next();
        unsubscribe$.complete();
      };
    }, [status]);
  
  
   
    const start = useCallback(() => {
      setStatus("start");
    }, []);
   
    const wait = useCallback(() => {
      setStatus("wait");
    }, []);
  
    const stop = useCallback(() => {
      setStatus("stop");
      setSec(0);
    }, []);
   
    return (
      <div className="timer">
        <div className="timer__wrapper">
        <div className="timer__wrapper-date"><span> {new Date(sec).toISOString().slice(11, 19)}</span></div>
        <div className="timer__wrapper-button"> 
        <Button className="button start" text="Start" onClick={start} />
        <Button className="button wait" text="Pause" onClick={wait} />
        <Button className="button stop" text="Stop" onClick={stop} />
        </div>
        </div>
      </div>
    );
}

export default HookTimer