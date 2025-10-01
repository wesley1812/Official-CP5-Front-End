import { useLocation, useParams } from "react-router-dom";
import { StudyCard } from "../components/study-card";

export function StudyList() {
  const { id } = useParams();

  const { state } = useLocation();

    return (
        <>
        <h2 className="font-bold text-gray-600 text-xl mb-3">
        Detalhes do Estudo - ID {id}
        </h2>

        <StudyCard study={state.study}/>
        </>
    )
}