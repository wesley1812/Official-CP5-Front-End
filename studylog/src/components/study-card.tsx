import type { StudySession } from "../types/StudySession";

interface Props {
    study : StudySession;
}

export function StudyCard({study} : Props){
    return (
        <div className="bg-white shadow rounded-lg p-4 w-3/5 hover:p-5 transition delay-150">
        <h2 className="text-lg font-bold text-blue-600">{study.subject}</h2>
        <p className="text-gray-600">Duração: {study.minutes} min</p>
        <p className="text-gray-600">Data: {study.date}/5</p>
        <p className="text-gray-600">Anotações: {study.notes}</p>
        </div>
    )
}