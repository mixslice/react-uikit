export default {

  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

  easeOut(duration, property, delay, easeFunction) {
    const thisEaseFunction = easeFunction || this.easeOutFunction;

    let transitions = '';
    if (property && Object.prototype.toString.call(property) === '[object Array]') {
      for (let i = 0; i < property.length; i++) {
        if (transitions) transitions += ',';
        transitions += this.create(duration, property[i], delay, thisEaseFunction);
      }
    } else {
      transitions = this.create(duration, property, delay, thisEaseFunction);
    }
    return transitions;
  },

  create(duration, property, delay, easeFunction) {
    const thisDuration = duration || '200ms';
    const thisProperty = property || 'all';
    const thisDelay = delay || '0ms';
    const thisEaseFunction = easeFunction || 'linear';

    return `${thisProperty} ${thisDuration} ${thisEaseFunction} ${thisDelay}`;
  },
};
