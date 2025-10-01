import { StudySessionForms } from "../components/study-form";
import type { StudySession } from "../types/StudySession";

interface AddStudySessionProps {
    study : StudySession[];
    onAdd: (study: StudySession) => void;
}

export function AddStudy({ onAdd }: AddStudySessionProps) {
  return (
    <>
      <h2 className="font-bold text-blue-800 text-xl mb-3">
        Adicionar novo estudo ao roteiro
      </h2>
      <StudySessionForms onAdd={onAdd} />
    </>
  );
}