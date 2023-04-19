import React, { useState } from "react";
import moment from "moment";

const Shedule = () => {
    const [marks, setMarks] = useState({});

    const handleMarkChange = (date, value) => {
        setMarks((prevMarks) => ({ ...prevMarks, [date]: value }));
    };

    const handleSave = () => {
        // отправить данные на сервер
        console.log(marks);
    };

    const renderCalendar = () => {
        const today = moment();
        const startOfMonth = moment().startOf("month");
        const endOfMonth = moment().endOf("month");
        const calendarRows = [];

        let day = startOfMonth;

        while (day.isBefore(endOfMonth)) {
            const week = [];

            for (let i = 0; i < 7; i++) {
                const isToday = day.isSame(today, "day");
                const date = day.format("YYYY-MM-DD");
                const mark = marks[date];

                week.push(
                    <td key={date}>
                        <div className="day">
                            <div className={`date ${isToday ? "today" : ""}`}>{day.format("D")}</div>
                            <input
                                type="text"
                                value={mark || ""}
                                onChange={(e) => handleMarkChange(date, e.target.value)}
                            />
                        </div>
                    </td>
                );

                day = day.clone().add(1, "day");
            }

            calendarRows.push(<tr key={day}>{week}</tr>);
        }

        return (
            <table className="flex flex-col">
                <thead>
                <tr className="flex justify-between">
                    <th className="pr-9 pl-9">Пн</th>
                    <th className="pr-9 pl-9">Вт</th>
                    <th className="pr-9 pl-9">Ср</th>
                    <th className="pr-9 pl-9">Чт</th>
                    <th className="pr-9 pl-9">Пт</th>
                    <th className="pr-9 pl-9">Сб</th>
                    <th className="pr-20 pl-14">Вс</th>
                </tr>
                </thead>
                <tbody>{calendarRows}</tbody>
            </table>
        );
    };

    return (
        <div className="bg-gray-100 h-[500px] py-8">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-xl font-bold mb-4">Отметки посещения</h2>
                <div className="rounded-md p-4">{renderCalendar()}</div>
                <div className="flex justify-end mt-4">
                    <button className="bg-[#FF7F50] hover:bg-[#FFA07A] text-white font-bold py-2 px-4 rounded" onClick={handleSave}>
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Shedule;


