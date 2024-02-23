import { Avatar, Box, Modal } from '@mui/material';
import { useState } from 'react';

import './StudentRegisterModal.styles.scss';
import {
  AVATAR_SELECT_IMAGE_LABEL,
  STUDENT_CREATE_MODAL_TITLE,
} from '../../constants/Global.constants';
import {
  mockNivelData,
  mockSexoData,
  mockTurmaData,
} from '../../mocks/StudentRegisterModalMocks';
import InputSelect from '../InputSelect';
import InputText from '../InputText';

type StudentRegisterModalProps = {
  open: boolean;
  handleClose: () => void;
};

function StudentRegisterModal(props: StudentRegisterModalProps) {
  const { open, handleClose } = props;

  const [avatar, setAvatar] = useState<File>(null);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-card">
        <h2>{AVATAR_SELECT_IMAGE_LABEL}</h2>
        <div className="avatar-input">
          <Avatar
            src={avatar && URL.createObjectURL(avatar)}
            alt="avatar"
            sx={{ height: '4em', width: '4em' }}
          />

          <label className="avatar-upload">
            <input
              type="file"
              accept="image/*"
              onChange={(event) => {
                if (!event.target.files || !event.target.files[0]) return;
                setAvatar(event?.target?.files[0]);
              }}
            />
            {STUDENT_CREATE_MODAL_TITLE}
          </label>
        </div>

        <form className="grid-form" action="">
          <InputText
            htmlFor="nome"
            label="Nome completo"
            placeholder="Digite nome completo"
          />
          <InputText
            htmlFor="datanascimento"
            label="Data de nascimento"
            placeholder="DD/MM/AAAA"
            type="date"
          />
          <InputText
            htmlFor="idade"
            label="Idade"
            placeholder="Digite em anos"
            type="number"
          />
          <InputSelect
            htmlFor="sexo"
            label="Sexo"
            placeholder="Selecione um sexo"
            options={mockSexoData()}
          />
          <InputSelect
            htmlFor="nivel"
            label="Nível"
            placeholder="Selecione um nível"
            options={mockNivelData()}
          />
          <InputSelect
            htmlFor="turma"
            label="Turma"
            placeholder="Selecione uma turma"
            options={mockTurmaData()}
          />
          <InputText
            htmlFor="responsavel"
            label="Nome do responsável"
            placeholder="Digite um nome"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="profissaoresponsavel"
            label="Profissão do responsável"
            placeholder="Digite uma profissão"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="telefone"
            label="Telefone do responsável"
            placeholder="(DD) 99999-9999"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="parentesco"
            label="Grau de parentesco"
            placeholder="Pai, mãe, etc."
            bgColor="bluebg"
          />
          <InputText
            htmlFor="numerocasa"
            label="Número da casa ou apartamento"
            placeholder="123"
            type="number"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="rua"
            label="Rua"
            placeholder="Digite a rua"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="bairro"
            label="Bairro"
            placeholder="Digite o bairro"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="complemento"
            label="Complemento"
            placeholder="Quadra, bloco, etc."
            bgColor="bluebg"
          />
          <InputText
            htmlFor="cep"
            label="CEP"
            placeholder="78000-000"
            bgColor="bluebg"
          />
          <InputText
            htmlFor="problemasaude"
            label="Possui algum problema de saúde?"
            placeholder="Diabetes, hiperatividade, etc."
            bgColor="orangebg"
          />
          <InputText
            htmlFor="medicamentos"
            label="Toma algum medicamento?"
            placeholder="Paracetamol, dipirona, etc."
            bgColor="orangebg"
          />
          <InputText
            htmlFor="alergias"
            label="Possui alguma alergia?"
            placeholder="Leite, ovos, trigo, etc."
            bgColor="orangebg"
          />
        </form>
        <div className="center-box">
          <button type="submit" className="save-button">
            Salvar
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default StudentRegisterModal;
