export const useHistory = () => {
  const navigateHistory = (to = '') => {
    const navigate = document.createElement('a');
    navigate.href = to;
    navigate.click();
  };

  return navigateHistory;
};
