import type { StudySession } from "../types/StudySession";

interface StudyResumeProps {
  study: StudySession;
  removeStudy: (id: string) => void;
}

export function StudyResume({ study, removeStudy }: StudyResumeProps) {
  return (
    <div className="w-full rounded-lg shadow-md px-4 py-4 flex flex-col gap-3 bg-white mb-3 border border-gray-100">
      <div className="flex justify-between items-start"> 
        <h2 className="font-bold text-lg text-gray-700 max-w-2/3 break-words pr-4">
          {study.subject}
        </h2>
        <div>
          <button
            className="p-2 bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition duration-150 rounded whitespace-nowrap"
            onClick={() => removeStudy(study.id)} 
          >
            Remover estudo
          </button>
        </div>
      </div>
      <div className="text-sm text-gray-500">
        <p>
          <span className="font-medium text-gray-600">Data:</span> {study.date}
        </p>
        {study.minutes && (
            <p>
                <span className="font-medium text-gray-600">Duração:</span> {study.minutes} min
            </p>
        )}
      </div>
    </div>
  );
}