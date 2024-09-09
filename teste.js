/**
 * @returns {Object} options
 * @returns {Function} options.toast - Function to display a toast notification
 */
function useToast() {
  const context = useContext(ToastContext);
  return context;
}