import { useState } from "react";
import type { StudySession } from "../types/StudySession";

interface SessionFormProps {
    onAdd : (study: StudySession) => void
}

export function StudySessionForms({onAdd} : SessionFormProps){
    const [subject, setSubject] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [date,setDate] = useState("")
    const [notes, setNotes] = useState("");

    function handleSubmit(event: React.FormEvent):  void {
      event.preventDefault();
      
      const study: StudySession = {
        id: crypto.randomUUID(),
        subject,
        minutes,
        date,
        notes
    };

    onAdd(study);

    setSubject("");
    setMinutes(0);
    setDate("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-4 flex flex-col gap-3 w-4/5 mb-5"
    >
      <label htmlFor="study-subject">Título da Matéria de Estudo</label>
      <input
        type="text"
        id="study-subject"
        placeholder="Título da matéria"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        className="border rounded p-2"
      />

      <label htmlFor="study-duration">Duração (min)</label>
      <input
        type="number"
        id="study-duration"
        placeholder="Duração (min)"
        onChange={(e) => setMinutes(Number(e.target.value))}
        value={minutes}
        className="border rounded p-2"
      />

      <label htmlFor="study-date">Data do Estudo</label>
      <input
        type="date"
        id="study-date"
        placeholder="Dia de estudo"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        className="border rounded p-2"
      />

      <label htmlFor="study-notes">Anotações</label>
      <input
        type="string"
        id="study-notes"
        placeholder="Anotações"
        onChange={(e) => setNotes((e.target.value))}
        value={notes}
        className="border rounded p-2"
      />

      <button className="btn" type="submit">
        Adicionar estudo
      </button>
    </form>
  );
}

// deixei a interface aqui pra facilitar a lida na hora de escrever o código
// // export interface StudySession {
//  id: string;
//  subject: string;'
//  minutes: number; 
//  date: string;
//  notes?: string; 
// }