import { useMemo } from "react";
import type { StudySession } from "../types/StudySession";
import { StudyResume } from "./study-resume";

interface StudyListProps {
    studiesList: StudySession[];
    removeStudy: (id: string) => void;
}

export function StudyList({ studiesList, removeStudy }: StudyListProps) {
    const studyTotal = useMemo(() => {
        return studiesList.length;
    }, [studiesList]);

    return (
        <>
        <h3>Total de estudos: {studyTotal}</h3>
        <h2 className="font-bold text-gray-600 text-xl mb-3">Lista de estudos</h2>

        {studiesList.map((value) => {
            return <StudyResume removeStudy={removeStudy} study={value} />;
      })}
        </>
    );
}