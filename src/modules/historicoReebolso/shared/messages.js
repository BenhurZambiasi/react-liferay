export const getMessageDefault = ({ messageType, title = '', subtitle = '' }) => {
  let message = {
    title: '',
    subtitle: '',
    icon: '',
    permission: '',
  };

  switch (messageType) {
    case 'empty':
      message = {
        title: title || 'Nenhuma informação encontrada.',
        subtitle: subtitle || 'Você ainda não possui informações.',
        icon: 'folder_open',
        permission: '',
      };
      break;
    case 'error':
      message = {
        title: title || 'Erro ao carregar dados',
        subtitle: subtitle || 'Ocorreu um erro inesperado ao carregar os dados, tente novamente mais tarde.',
        icon: 'scan_delete',
        permission: '',
      };
      break;
    case 'permission':
      message = {
        title: title || 'Este Beneficiario não possui as permissões necessárias para acessar o serviço.',
        subtitle: subtitle || '',
        icon: 'info',
        permission: `<span class="font-weigth-bold strong-green cursor-pointer m-auto" onclick="goBack()">Voltar</span>`,
      };
      break;

    default:
      message = {
        title: title || 'Nenhum resultado encontrado',
        subtitle:
          subtitle || 'Não encontramos resultados para a sua busca, verifique os dados informados e tente novamente.',
        icon: 'quick_reference_all',
        permission: '',
      };
      break;
  }

  return `<div class="d-flex flex-column align-items-center py-5 gap-6">
        <span class="material-symbols-outlined fs-9">
         ${message.icon}
        </span>
        <div class="d-flex flex-column gap-4 text-center">
          <span class="fw-700 fs-5 font-unimed-sans" style="color:#282828; line-height: 25.2px;">
            ${message.title}
          </span>
          <span class="fw-400 fs-4 font-unimed-sans" style="line-height: 20.16px;color: #4d4d4d;">
           ${message.subtitle}
          </span>
          ${message.permission}
        </div>
      </div>`;
};

export const showModalLoadingDados = () => {
  $('#modal-loading').show();
};

export const hideModalLoadingDados = () => {
  $('#modal-loading').hide();
};
