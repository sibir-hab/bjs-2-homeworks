//Задача № 1


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let isTrottled = false;
    function wrapper(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout( () => {
        func(args);
        wrapper.count++;
      }, delay);
      if (!isTrottled) {
        func(...args);
        wrapper.count++;
        isTrottled = true;
      }
      wrapper.allCount++;
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }
