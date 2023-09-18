class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    } else if (this.alarmCollection.find((element) => element.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    const obj = {
      callback: callback,
      time: time,
      canCall: true,
    }

    this.alarmCollection.push(obj);
  }

  removeClock(deleteTime) {
    const result = this.alarmCollection.filter((element) => element.time != deleteTime);
    this.alarmCollection = result;
  }

  getCurrentFormattedTime() {
    let date = new Date();
    return date.toLocaleTimeString().slice(0, -3);
  }

  start() {
    if (this.intervalId != null) {
      return this.intervalId;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((element) => {
        if (element.time === this.getCurrentFormattedTime() && element.canCall === true) {
          element.canCall = false;
          element.callback();
        }
      })
    }, 1000);

    return this.intervalId;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) =>
      element.canCall = true
    );
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}
