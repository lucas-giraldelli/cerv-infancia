import { Avatar } from '@mui/material';
import './Missionary.styles.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

import InputSelect from '../../../components/InputSelect';
import InputText from '../../../components/InputText';

function Missionary() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [avatar, setAvatar] = useState<File>(null);

  return (
    <main>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-card">
          <h2>FICHA DE MATRÍCULA</h2>
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
              Escolha uma imagem
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
              options={[
                { value: 'masculino', name: 'Masculino' },
                { value: 'feminino', name: 'Feminino' },
              ]}
            />
            <InputSelect
              htmlFor="nivel"
              label="Nível"
              placeholder="Selecione um nível"
              options={[
                { value: '1', name: 'Nível 1' },
                { value: '2', name: 'Nível 2' },
                { value: '3', name: 'Nível 3' },
                { value: '4', name: 'Nível 4' },
              ]}
            />
            <InputSelect
              htmlFor="turma"
              label="Turma"
              placeholder="Selecione uma turma"
              options={[
                { value: 'matutino', name: 'Matutino' },
                { value: 'verpertino', name: 'Verpertino' },
                { value: 'noturno', name: 'Noturno' },
              ]}
            />
            <InputText
              htmlFor="responsavel"
              label="Nome do responsável"
              placeholder="Digite um nome"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="profissaoresponsavel"
              label="Profissão do responsável"
              placeholder="Digite uma profissão"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="telefone"
              label="Telefone do responsável"
              placeholder="(DD) 99999-9999"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="parentesco"
              label="Grau de parentesco"
              placeholder="Pai, mãe, etc."
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="numerocasa"
              label="Número da casa ou apartamento"
              placeholder="123"
              type="number"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="rua"
              label="Rua"
              placeholder="Digite a rua"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="bairro"
              label="Bairro"
              placeholder="Digite o bairro"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="complemento"
              label="Complemento"
              placeholder="Quadra, bloco, etc."
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="cep"
              label="CEP"
              placeholder="78000-000"
              bgColor="#31ACACAD"
            />
            <InputText
              htmlFor="problemasaude"
              label="Possui algum problema de saúde?"
              placeholder="Diabetes, hiperatividade, etc."
              bgColor="#8AB619A1"
            />
            <InputText
              htmlFor="medicamentos"
              label="Toma algum medicamento?"
              placeholder="Paracetamol, dipirona, etc."
              bgColor="#8AB619A1"
            />
            <InputText
              htmlFor="alergias"
              label="Possui alguma alergia?"
              placeholder="Leite, ovos, trigo, etc."
              bgColor="#8AB619A1"
            />
          </form>
          <div className="center-box">
            <button type="submit" className="save-button">
              Salvar
            </button>
          </div>
        </Box>
      </Modal>
      <h1>Evangelizadores</h1>

      <Button onClick={handleOpen}>Open modal</Button>
    </main>
  );
}

export default Missionary;
