class TitleManager {
  constructor(
    tagname,
    stateDataObject 
    // 지운 부분이 꼭 있어야 하나?
    // 없어도 될 것 같긴한데 쓴 이유를 생각해보면 입력 서식을 알려주기 위해?
  ) {
    this._tagName = tagname;
    this._stateDataObject = stateDataObject;
  }

  get tagname() {
    return this._tagName;
  }

  set tagname(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this._tagName = value;
    } else {
      throw new Error("유효한 태그 이름이어야 합니다.");
    }
  }
  get stateData() {
    return this._stateDataObject;
  }
  set stateDataObject(value) {
    const isValidObject = (obj) => {
      typeof obj === "object" && obj !== null;
    };
    if (isValidObject(value)) {
      this._stateDataObject = value;
    } else {
      throw new Error("유효한 객체 이름이어야 합니다.");
    }
  }
  updateTitle() {
    this._stateDataObject.basicTitle = this._stateDataObject.newTitle;
    this.updateTitle();
  }
}

const test = new TitleManager("h1", {basicTitle: "기본 제목", newTitle: "새로운 제목"});

console.dir(test);
console.log(test.tagname);