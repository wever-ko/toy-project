class Schedule {
  constructor() {
    this.schedule = Schedule.setInitVal('scheduleList', []);
    this.id = Schedule.setInitVal('id', 0);
  }

  static setInitVal = (name, initVal) => {
    const StorageItem = localStorage.getItem(name);
    return (StorageItem === null) ? initVal : JSON.parse(StorageItem);
  }

  get = () => this.schedule;

  add = (date, newItem) => {
    const list = {
      id: this.id,
      date,
      item: newItem,
    };

    this.schedule = this.schedule.concat(list);
    this.id += 1;
    localStorage.setItem('id', JSON.stringify(this.id));
    localStorage.setItem('scheduleList', JSON.stringify(this.schedule));
  };

  delete = (id) => {
    this.schedule.forEach((item, index) => {
      if (id === item.id) {
        this.schedule.splice(index, 1);
      }
    });
    localStorage.setItem('scheduleList', JSON.stringify(this.schedule));
  };
}

export default Schedule;
