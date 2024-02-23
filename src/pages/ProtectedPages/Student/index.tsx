import './Student.styles.scss';
import { useState } from 'react';

import StudentRegisterModal from '../../../components/StudentRegisterModal';

function Student() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main>
      <StudentRegisterModal open={open} handleClose={handleClose} />

      <h1>Alunos</h1>

      <button className="register-button" onClick={handleOpen}>
        Adicionar aluno
      </button>
    </main>
  );
}

export default Student;
