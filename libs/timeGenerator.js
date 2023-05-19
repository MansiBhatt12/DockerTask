import { add, differenceInMinutes } from "date-fns";
import { useEffect } from "react";

export default function timeGenerator(utcDate) {
    let data = [];

    const queryStart = new Date(utcDate);
    // const queryEnd = new Date(subtractTime);

    const startYear = queryStart?.getFullYear();
    const startMonth = queryStart?.getMonth();
    const startDay = queryStart?.getDate();
    const startHour = queryStart?.getHours();
    const startMinutes = queryStart.getMinutes();
    // const endYear = queryEnd?.getFullYear();
    // const endMonth = queryEnd?.getMonth();
    // const endDay = queryEnd?.getDate();
    // const endHour = queryEnd?.getHours();

    const diffInMinutes = differenceInMinutes(
        new Date(),
        new Date(startYear, startMonth, startDay, startHour, startMinutes, 0)
    );

    if (utcDate) {
        for (let i = 0; i < diffInMinutes / 5; i++) {
            const res = add(
                new Date(startYear, startMonth, startDay, startHour),
                {
                    seconds: 300 * i,
                }
            );

            data.push(`${res.getHours()}:${res.getMinutes()}`);
            localStorage.setItem("data", JSON.stringify(data));
            // data.push(`${startHour}:${startMinutes + i * 5}`);
        }
    } else return null;

    return data;
}
