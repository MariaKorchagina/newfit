// Глобальное состояние для модальных окон
let globalImageClickHandler = null;

export const setGlobalImageClickHandler = (handler) => {
  globalImageClickHandler = handler;
  console.log('Global image click handler set:', typeof handler);
};

export const getGlobalImageClickHandler = () => {
  return globalImageClickHandler;
};

export const callGlobalImageClickHandler = (src) => {
  console.log('Calling global image click handler with:', src);
  console.log('Handler type:', typeof globalImageClickHandler);

  if (globalImageClickHandler && typeof globalImageClickHandler === 'function') {
    globalImageClickHandler(src);
  } else {
    console.warn('Global image click handler is not available:', globalImageClickHandler);
  }
}; 