class AppState {
  constructor(rawData) {
    this.state = {
      blogs: this.mapDataIntoObject(rawData.blogs),
      users: this.mapDataIntoObject(rawData.users),
    };
  }

  mapDataIntoObject = (arr) => {
    if (arr === null || arr.length === 0) {
      return null;
    } else {
      return arr.reduce((acc, cur) => {
        acc[cur._id] = cur;
        return acc;
      }, {});
    }
  };

  getState = () => this.state;
}

export default AppState;
